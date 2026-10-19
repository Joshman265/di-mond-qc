// Saved QC versions live alongside the PDFs in the existing shared OneDrive.
// Each save writes a new immutable version. Concurrent edits retain both heads.
const SHARED_QC_FOLDER = '_DI-MOND QC App';
let sharedFolderPromise=null, sharedRefreshPromise=null, sharedWrite=Promise.resolve();
let sharedMessage='Connect OneDrive to load sheets saved on other devices.';
const sharedVersionCache=new Map();

function areaOf(d){return d.area || (d.type==='Mounting Bay QC'?'317-mounting':'317-mainline');}
function documentIdOf(d){return d._documentId || d.id;}
function sharedNotice(){
  const el=document.querySelector('#shared-status');
  if(el)el.textContent=sharedMessage;
}
async function sharedFolder(){
  if(!driveAccount)throw new Error('Connect OneDrive to share this sheet.');
  if(!sharedFolderPromise)sharedFolderPromise=(async()=>{
    let item;
    try{
      item=await driveRequest('shares/'+shareToken(ONE_DRIVE_CONFIG.sharedFolderUrl)+'/driveItem',{headers:{Prefer:'redeemSharingLink'}});
    }catch(e){throw new Error('Could not open the shared OneDrive root: '+e.message);}
    const root=folderReference(item), path=driveFolderPath(root);
    // Resolve children by their IDs, as the PDF picker does. Some shared drives
    // do not resolve item-relative folder paths consistently.
    async function findFolder(){
      let next=path+'/children?$select=id,name,folder,parentReference,remoteItem&$top=200';
      while(next){
        const page=await driveRequest(next);
        const match=(page.value||[]).find(child=>child.name?.toLowerCase()===SHARED_QC_FOLDER.toLowerCase());
        if(match)return folderReference(match,root.driveId);
        next=page['@odata.nextLink'];
      }
      return null;
    }
    try{
      const existing=await findFolder();
      if(existing)return existing;
      try{
        const created=await driveRequest(path+'/children',{method:'POST',headers:{'Content-Type':'application/json'},
          body:JSON.stringify({name:SHARED_QC_FOLDER,folder:{},'@microsoft.graph.conflictBehavior':'fail'})});
        return folderReference(created,root.driveId);
      }catch(e){
        if(e.status!==409)throw e;
        const existing=await findFolder();
        if(existing)return existing;
        throw new Error('The shared QC folder was created by another device but is not visible yet. Tap Refresh again.');
      }
    }catch(e){throw new Error('Could not find or create '+SHARED_QC_FOLDER+': '+e.message);}
  })().catch(e=>{sharedFolderPromise=null;throw e;});
  return sharedFolderPromise;
}
function serialSharedWrite(work){
  const next=sharedWrite.then(work);sharedWrite=next.catch(()=>{});return next;
}
function snapshotQC(d){
  const data=JSON.parse(JSON.stringify(d));
  for(const key of Object.keys(data))if(key.startsWith('_'))delete data[key];
  data.id=documentIdOf(d);data.area=areaOf(d);return data;
}
async function flushSharedQueue(){
  state.sharedQueue ||= [];
  if(!state.sharedQueue.length)return;
  const folder=await sharedFolder();
  while(state.sharedQueue.length){
    const entry=state.sharedQueue[0], record=entry.record;
    // The queue retains the exact bytes and filename when a response is lost.
    const saved=await driveRequest(driveFolderPath(folder)+':/'+encodeURIComponent(record.revision+'.json')+':/content',{
      method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify(record)});
    if(!saved.id||!saved.file)throw new Error('OneDrive did not confirm the shared QC save.');
    sharedVersionCache.set(saved.id,{eTag:saved.eTag,record});
    const local=[...state.drafts,...state.filed].find(d=>d.id===entry.localId);
    if(local){
      local._sharedRevision=record.revision;local._documentId=record.documentId;
      if(JSON.stringify(snapshotQC(local))===JSON.stringify(record.data))local._dirty=false;
    }
    state.sharedQueue.shift();saveState();
  }
}
async function publishSharedQC(d,status='draft'){
  return serialSharedWrite(async()=>{
    await flushSharedQueue();
    if(d._sharedRevision&&!d._dirty)return;
    const record={schema:1,documentId:documentIdOf(d),revision:uid(),parentRevision:d._sharedRevision||null,
      status,savedAt:Date.now(),savedBy:driveAccount?.username||'',data:snapshotQC(d)};
    state.sharedQueue ||= [];
    state.sharedQueue.push({localId:d.id,record});saveState();
    await flushSharedQueue();
  });
}
function validSharedRecord(r){
  return r?.schema===1 && /^qc_[a-zA-Z0-9_]+$/.test(r.documentId) && /^qc_[a-zA-Z0-9_]+$/.test(r.revision)
    && (r.parentRevision===null||/^qc_[a-zA-Z0-9_]+$/.test(r.parentRevision))
    && ['draft','filed','deleted'].includes(r.status) && r.data && ['317-mainline','317-mounting','195-mainline'].includes(r.data.area)
    && (r.data.area==='195-mainline'||r.data.type===(r.data.area==='317-mounting'?'Mounting Bay QC':'Mainline QC'))
    && (r.status!=='draft'||(r.data.initials&&typeof r.data.initials==='object'));
}
function mergeSharedRecords(records){
  const deletedDocuments=new Set(records.filter(r=>r.status==='deleted').map(r=>r.documentId));
  const parents=new Set(records.filter(r=>r.parentRevision).map(r=>r.documentId+':'+r.parentRevision));
  const heads=records.filter(r=>!parents.has(r.documentId+':'+r.revision));
  const pending=[...state.drafts.map(d=>({d,status:'draft'})),...state.filed.map(d=>({d,status:'filed'}))]
    .filter(({d,status})=>(status!=='draft'||!deletedDocuments.has(documentIdOf(d)))&&(d._dirty||!d._sharedRevision));
  const drafts=[],filed=[];
  for(const {d,status} of pending)(status==='draft'?drafts:filed).push(d);
  for(const r of heads){
    if(r.status==='deleted'||r.status==='draft'&&deletedDocuments.has(r.documentId))continue;
    if(pending.some(({d})=>documentIdOf(d)===r.documentId&&d._sharedRevision===r.revision))continue;
    const d={...r.data,id:'shared_'+r.revision,_documentId:r.documentId,_sharedRevision:r.revision,_dirty:false,
      _savedBy:r.savedBy,_savedAt:r.savedAt};
    (r.status==='draft'?drafts:filed).push(d);
  }
  const counts=new Map();
  for(const d of [...drafts,...filed])counts.set(documentIdOf(d),(counts.get(documentIdOf(d))||0)+1);
  for(const d of [...drafts,...filed])d._conflict=counts.get(documentIdOf(d))>1;
  state.drafts=drafts;state.filed=filed;saveState();
}
async function refreshSharedQC(){
  if(sharedRefreshPromise)return sharedRefreshPromise;
  if(!driveAccount){sharedMessage='Connect OneDrive to load shared incomplete and filed sheets.';sharedNotice();return;}
  if(currentId)return; // Never replace fields while somebody is editing.
  sharedRefreshPromise=(async()=>{
    sharedMessage='Loading shared QC sheets…';sharedNotice();
    await serialSharedWrite(()=>flushSharedQueue());
    // Bring pre-update sheets from this device into the shared lists once.
    const legacy=[...state.drafts.map(d=>({d,status:'draft'})),...state.filed.map(d=>({d,status:'filed'}))]
      .filter(({d})=>!d._sharedRevision&&d._dirty!==true);
    for(const {d,status} of legacy)await publishSharedQC(d,status);
    const folder=await sharedFolder();
    let path=driveFolderPath(folder)+'/children?$select=id,name,file,eTag&$top=200';
    const items=[];
    while(path){const page=await driveRequest(path);items.push(...(page.value||[]));path=page['@odata.nextLink'];}
    const records=[];
    for(let i=0;i<items.length;i+=4){
      const batch=await Promise.all(items.slice(i,i+4).map(async item=>{
        if(!item.file||!/^qc_[a-zA-Z0-9_]+\.json$/.test(item.name))return null;
        const cached=sharedVersionCache.get(item.id);
        if(cached&&cached.eTag===item.eTag)return cached.record;
        const info=await driveRequest('drives/'+encodeURIComponent(folder.driveId)+'/items/'+encodeURIComponent(item.id)+'?$select=id,@microsoft.graph.downloadUrl');
        const url=info['@microsoft.graph.downloadUrl'];
        if(!url||new URL(url).protocol!=='https:')throw new Error('OneDrive did not return a QC download link.');
        const response=await fetch(url,{cache:'no-store',credentials:'omit'});
        if(!response.ok)throw new Error('A shared QC sheet could not be downloaded. Retry Refresh.');
        const record=await response.json();
        if(!validSharedRecord(record))throw new Error('A shared QC record has an unsupported format. Existing sheets are unchanged.');
        sharedVersionCache.set(item.id,{eTag:item.eTag,record});return record;
      }));
      records.push(...batch.filter(Boolean));
    }
    if(currentId)return;
    // A newly uploaded version may not appear in children immediately.
    // Retain acknowledged writes so a stale listing cannot restore an ancestor.
    const known=new Map(records.map(r=>[r.revision,r]));
    for(const {record} of sharedVersionCache.values())known.set(record.revision,record);
    mergeSharedRecords([...known.values()]);
    sharedMessage='Shared sheets are up to date. Save as Incomplete to make changes available on other devices.';
  })().catch(e=>{sharedMessage='Shared sheets unavailable: '+e.message+' Local copies are kept on this device.';})
    .finally(()=>{sharedRefreshPromise=null;if(!currentId)renderNavigation();sharedNotice();});
  return sharedRefreshPromise;
}
async function openFiled(id){
  const f=state.filed.find(d=>d.id===id);if(!f)return;
  if(!f.driveItemId||!f.driveId){alert('This older filed entry has no PDF link. Open its saved folder in OneDrive.');return;}
  try{
    const item=await driveRequest('drives/'+encodeURIComponent(f.driveId)+'/items/'+encodeURIComponent(f.driveItemId)+'?$select=id,webUrl');
    const url=new URL(item.webUrl);
    if(url.protocol!=='https:')throw new Error('Invalid PDF link.');
    window.location.assign(url.href);
  }catch(e){alert('Could not open the filed PDF: '+e.message);}
}
window.addEventListener('online',()=>{if(!currentId)refreshSharedQC();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&!currentId)refreshSharedQC();});
setInterval(()=>{if(document.visibilityState==='visible'&&!currentId)refreshSharedQC();},60000);


