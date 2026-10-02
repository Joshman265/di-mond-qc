// Public app identifiers; employees authenticate with their own Microsoft account.
const ONE_DRIVE_CONFIG = Object.freeze({
  clientId:'52a54e80-325f-4366-94f8-8c5a17e959c5',
  tenantId:'dd81b075-ba17-4b8c-9c8e-9b10b07a1445',
  redirectUri:'https://joshman265.github.io/di-mond-qc/',
  sharedFolderUrl:'https://dimond365-my.sharepoint.com/:f:/g/personal/josh_di-mond_com/IgDO_8MeeyU5RZfEcNgBSpMEAWHc7RJqNXvTgKKxYw-zM8I?e=iJl6Wx'
});
const DRIVE_SCOPES=['Files.ReadWrite.All'];
const DRIVE_RESUME_KEY='dimond-qc-onedrive-resume';
let driveAuth,driveReady,driveAccount=null,driveInitError='',drivePicker=null,openingDrivePicker=false;

async function initializeOneDrive(){
  try{
    if(!window.msal) throw new Error('Microsoft sign-in did not load. Reopen the app while online.');
    driveAuth=new msal.PublicClientApplication({auth:{clientId:ONE_DRIVE_CONFIG.clientId,
      authority:'https://login.microsoftonline.com/'+ONE_DRIVE_CONFIG.tenantId,
      redirectUri:ONE_DRIVE_CONFIG.redirectUri,navigateToLoginRequestUrl:false},
      cache:{cacheLocation:'localStorage'}});
    await driveAuth.initialize();
    const response=await driveAuth.handleRedirectPromise();
    driveAccount=response?.account || driveAuth.getActiveAccount() || driveAuth.getAllAccounts()[0] || null;
    if(driveAccount)driveAuth.setActiveAccount(driveAccount);
  }catch(e){driveInitError=e.message||'Microsoft sign-in failed.';}
}
function driveConnectionHtml(){
  return `<div class="cloud-card"><div><b>OneDrive</b><span>${esc(driveAccount?driveAccount.username:'Sign in with your Microsoft work account')}</span>${driveInitError?`<span>${esc(driveInitError)}</span>`:''}</div><button onclick="connectOneDrive(${driveAccount?'true':'false'})">${driveAccount?'Change account':'Connect OneDrive'}</button></div>`;
}
async function connectOneDrive(changeAccount=false){
  try{
    await driveReady;
    if(driveInitError)throw new Error(driveInitError);
    await driveAuth.loginRedirect({scopes:DRIVE_SCOPES,prompt:changeAccount?'select_account':undefined});
  }catch(e){alert('Could not sign into OneDrive: '+e.message);}
}
async function driveToken(){
  await driveReady;
  if(driveInitError)throw new Error(driveInitError);
  if(!driveAccount){await driveAuth.loginRedirect({scopes:DRIVE_SCOPES});return null;}
  try{return (await driveAuth.acquireTokenSilent({scopes:DRIVE_SCOPES,account:driveAccount})).accessToken;}
  catch(e){
    if(e instanceof msal.InteractionRequiredAuthError){
      await driveAuth.acquireTokenRedirect({scopes:DRIVE_SCOPES,account:driveAccount});return null;
    }
    throw e;
  }
}
async function driveRequest(path,options={}){
  const url=new URL(path,'https://graph.microsoft.com/v1.0/');
  if(url.origin!=='https://graph.microsoft.com' || !url.pathname.startsWith('/v1.0/'))throw new Error('Invalid OneDrive request.');
  const token=await driveToken();
  if(!token)throw new Error('Sign in to continue saving.');
  const response=await fetch(url.href,{...options,cache:'no-store',headers:{...options.headers,Authorization:'Bearer '+token}});
  const data=await response.json().catch(()=>({}));
  if(!response.ok){
    let message=data.error?.message||'OneDrive request failed ('+response.status+').';
    if(response.status===403)message='This Microsoft account cannot access or edit the shared folder. Check its sharing permissions. '+message;
    if(response.status===401)message='Microsoft sign-in expired. Use Change account on the home screen to reconnect.';
    throw new Error(message);
  }
  return data;
}
function shareToken(url){
  const bytes=new TextEncoder().encode(url);
  return 'u!'+btoa(Array.from(bytes,b=>String.fromCharCode(b)).join('')).replace(/=+$/,'').replace(/\+/g,'-').replace(/\//g,'_');
}
function folderReference(item,fallbackDrive){
  const actual=item.remoteItem||item;
  if(!actual.folder)throw new Error('The shared link does not point to a folder.');
  const driveId=actual.parentReference?.driveId||fallbackDrive;
  if(!driveId||!actual.id)throw new Error('OneDrive did not return a folder identifier.');
  return {id:actual.id,driveId,name:actual.name||item.name||'Shared folder'};
}
function driveFolderPath(folder){return 'drives/'+encodeURIComponent(folder.driveId)+'/items/'+encodeURIComponent(folder.id);}
async function openOneDrivePicker(){
  const draft=getDraft();
  if(!draft||!preparedPdf||preparedPdf.id!==draft.id||savingPdf||drivePicker||openingDrivePicker)return;
  openingDrivePicker=true;
  sessionStorage.setItem(DRIVE_RESUME_KEY,draft.id);
  setSubmitStatus('Opening your shared OneDrive folder…');
  try{
    if(!await driveToken())return;
    const item=await driveRequest('shares/'+shareToken(ONE_DRIVE_CONFIG.sharedFolderUrl)+'/driveItem',{headers:{Prefer:'redeemSharingLink'}});
    if(getDraft()!==draft)return;
    const root=folderReference(item);
    drivePicker={draftId:draft.id,pdf:preparedPdf,stack:[root],items:[],name:preparedPdf.name,busy:false,sequence:0};
    const modal=document.createElement('div');modal.id='drive-picker';modal.className='drive-overlay';
    modal.innerHTML=`<section class="drive-dialog" role="dialog" aria-modal="true" aria-labelledby="drive-title"><h2 id="drive-title">Save to OneDrive</h2><p>${esc(driveAccount.username)}</p><div class="drive-nav"><button id="drive-up">Up one folder</button><b id="drive-location"></b></div><div id="drive-items" class="drive-items"></div><label>PDF filename<input id="drive-name" value="${esc(drivePicker.name)}"></label><p id="drive-message" role="status"></p><div class="drive-buttons"><button id="drive-cancel">Cancel</button><button id="drive-upload" class="primary">Save here</button></div></section>`;
    document.body.appendChild(modal);
    document.querySelector('#drive-name').addEventListener('input',e=>{if(drivePicker)drivePicker.name=e.target.value;});
    document.querySelector('#drive-up').onclick=()=>{if(drivePicker&&!drivePicker.busy&&drivePicker.stack.length>1){drivePicker.stack.pop();loadDriveFolder();}};
    document.querySelector('#drive-cancel').onclick=closeOneDrivePicker;
    document.querySelector('#drive-upload').onclick=uploadSelectedPdf;
    await loadDriveFolder();
    document.querySelector('#drive-name')?.focus();
  }catch(e){setSubmitStatus('Could not open OneDrive: '+e.message+' Your QC is still saved on this iPad.',true);}
  finally{openingDrivePicker=false;}
}
function closeOneDrivePicker(){
  if(savingPdf)return;
  if(drivePicker)drivePicker.sequence++;
  document.querySelector('#drive-picker')?.remove();drivePicker=null;
  sessionStorage.removeItem(DRIVE_RESUME_KEY);
  setSubmitStatus('Save cancelled. Your QC remains in Incomplete QC.');
}
async function loadDriveFolder(){
  const picker=drivePicker;if(!picker)return;
  const sequence=++picker.sequence;
  picker.busy=true;picker.items=[];
  const folder=picker.stack[picker.stack.length-1];
  document.querySelector('#drive-location').textContent=picker.stack.map(f=>f.name).join(' / ');
  document.querySelector('#drive-up').disabled=true;
  document.querySelector('#drive-upload').disabled=true;
  document.querySelector('#drive-items').textContent='Loading folders…';
  document.querySelector('#drive-message').textContent='';
  try{
    let path=driveFolderPath(folder)+'/children?$select=id,name,folder,file,parentReference,remoteItem&$top=200';
    const items=[];
    while(path){const result=await driveRequest(path);items.push(...(result.value||[]));path=result['@odata.nextLink'];}
    if(drivePicker!==picker||sequence!==picker.sequence)return;
    picker.items=items;
    const container=document.querySelector('#drive-items');container.textContent='';
    items.sort((a,b)=>a.name.localeCompare(b.name,undefined,{numeric:true}));
    for(const item of items){
      const actual=item.remoteItem||item;
      if(!actual.folder&&!/\.pdf$/i.test(item.name))continue;
      const button=document.createElement('button');button.textContent=(actual.folder?'Folder: ':'PDF: ')+item.name;
      button.onclick=()=>{
        if(picker.busy||savingPdf)return;
        if(actual.folder){try{picker.stack.push(folderReference(item,folder.driveId));loadDriveFolder();}catch(e){document.querySelector('#drive-message').textContent=e.message;}}
        else{picker.name=item.name;document.querySelector('#drive-name').value=item.name;}
      };container.appendChild(button);
    }
    if(!container.children.length)container.textContent='This folder has no subfolders or PDFs. You can save here.';
    picker.busy=false;
    document.querySelector('#drive-up').disabled=picker.stack.length===1;
    document.querySelector('#drive-upload').disabled=false;
  }catch(e){
    if(drivePicker!==picker||sequence!==picker.sequence)return;
    picker.busy=false;
    document.querySelector('#drive-items').textContent='Could not load this folder.';
    document.querySelector('#drive-message').textContent=e.message;
    document.querySelector('#drive-up').disabled=picker.stack.length===1;
  }
}
function validPdfName(value){
  let name=String(value).trim();
  if(!name||/[\\/:*?"<>|\x00-\x1f]/.test(name)||/[. ]$/.test(name)||name.startsWith('~$'))throw new Error('Enter a filename without / \\ : * ? " < > | or a trailing dot.');
  if(!/\.pdf$/i.test(name))name+='.pdf';
  if(name.length>240)throw new Error('Choose a shorter filename.');
  return name;
}
async function uploadPdfToFolder(folder,name,blob,replace=false,onProgress=()=>{}){
  // Upload sessions enforce the conflict choice, including changes by the other iPad.
  const session=await driveRequest(driveFolderPath(folder)+':/'+encodeURIComponent(name)+':/createUploadSession',{
    method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({item:{name,'@microsoft.graph.conflictBehavior':replace?'replace':'fail'}})});
  if(!session.uploadUrl||new URL(session.uploadUrl).protocol!=='https:')throw new Error('OneDrive did not create an upload session.');
  const chunkSize=10*320*1024;
  for(let offset=0;offset<blob.size;offset+=chunkSize){
    const end=Math.min(offset+chunkSize,blob.size);
    // The upload URL is preauthenticated; never attach the Microsoft bearer token.
    const response=await fetch(session.uploadUrl,{method:'PUT',headers:{'Content-Type':'application/octet-stream',
      'Content-Range':`bytes ${offset}-${end-1}/${blob.size}`},body:blob.slice(offset,end)});
    const data=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(data.error?.message||'Upload failed ('+response.status+').');
    onProgress(Math.round(end/blob.size*100));
    if(end===blob.size){
      if((response.status!==200&&response.status!==201)||!data.id||!data.file)throw new Error('OneDrive has not confirmed the saved PDF.');
      return data;
    }
    if(response.status!==202)throw new Error('Unexpected OneDrive upload response.');
  }
  throw new Error('The PDF is empty. Please recreate it.');
}
async function uploadSelectedPdf(){
  const picker=drivePicker;if(!picker||picker.busy||savingPdf)return;
  const draft=getDraft();if(!draft||draft.id!==picker.draftId)return;
  const message=document.querySelector('#drive-message');
  let name;try{name=validPdfName(picker.name);}catch(e){message.textContent=e.message;return;}
  const existing=picker.items.find(item=>item.name.toLowerCase()===name.toLowerCase());
  if(existing&&(existing.folder||existing.remoteItem?.folder)){message.textContent='A folder already has that name. Choose another filename.';return;}
  if(existing&&!confirm('Replace the existing PDF “'+existing.name+'” in this folder?'))return;
  savingPdf=true;picker.busy=true;
  document.querySelectorAll('#drive-picker button, #drive-picker input').forEach(el=>el.disabled=true);
  message.textContent='Uploading PDF… Keep the app open.';
  try{
    const folder=picker.stack[picker.stack.length-1];
    const saved=await uploadPdfToFolder(folder,name,picker.pdf.blob,Boolean(existing),percent=>{message.textContent='Uploading PDF… '+percent+'%';});
    // Persist the success record before changing the screen; never file on a failed upload.
    const record={id:draft.id,type:draft.type,workOrder:draft.workOrder,boxSerial:draft.boxSerial,filedAt:Date.now(),
      savedPath:picker.stack.map(f=>f.name).join(' / ')+' / '+saved.name,driveItemId:saved.id,driveId:folder.driveId,savedBy:driveAccount.username};
    const next={...state,filed:[...state.filed,record],drafts:state.drafts.filter(d=>d.id!==draft.id)};
    localStorage.setItem(STORAGE_KEY,JSON.stringify(next));state=next;
    document.querySelector('#drive-picker').remove();drivePicker=null;preparedPdf=null;
    sessionStorage.removeItem(DRIVE_RESUME_KEY);
    showDashboard();alert('Saved to OneDrive:\n'+record.savedPath);
  }catch(e){
    message.textContent='Not filed: '+e.message+' Your QC remains in Incomplete QC. If the connection dropped, check this folder before retrying.';
  }finally{
    savingPdf=false;
    if(drivePicker===picker){picker.busy=false;document.querySelectorAll('#drive-picker button, #drive-picker input').forEach(el=>el.disabled=false);document.querySelector('#drive-up').disabled=picker.stack.length===1;}
  }
}
