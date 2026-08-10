
const FORMS = {"Mainline QC": {"Front Wall": ["Front wall panels inspected: dent-free, scratch-free, all plastic removed; all seams are to spec", "Radius corners top and sides assembled to match spec; panels/post/holes to spec", "Front wall seated correctly on front bolster; railbolt holes evenly spaced; railbolts tightened from backside; 3 MonoBolts per side at radius corner; all railbolts present", "Fasteners to spec; panel tape installed between all components; all fasteners present", "Corner caps installed square; MonoBolts drilled correctly, heads flush and caulked; grey caulking around corner caps and rail completed", "Correct placards present, if required", "White caulking around front wall panel completed", "Corner cap penny lights drilled, installed and caulked"], "Roadside Wall": ["Wall panels inspected: dent-free, scratch-free, all plastic removed; all seams to spec", "Bottom rail not scratched/damaged; black foam tape flush with lower flange; Mylar tape installed; all rail bolts present/drilled to spec; crossmembers not below rail", "Top rail not scratched/damaged; mid penny light checked if required", "White caulking across top rail and panel complete; bottom rail and panel complete", "Panel/post/fasteners to spec; panel tape installed; all fasteners present", "Scrub rail installed to spec; fasteners to spec", "Front laceup complete; fasteners smooth/flush and to spec; interior post installed correctly; 3 MonoBolts flush on each side at bottom of radius corner; white caulking sealed up radius corner", "Rear laceup complete; fasteners smooth/flush and to spec; white caulking sealed up doorframe flange; grey caulking between top rail/doorframe and bottom rail/doorframe", "Screws through wheel pans cut flush at bottom", "Reflective tape installed across bottom rail", "Reflector squares installed: amber at front, red at back, amber at mid if required"], "Curbside Wall": ["Wall panels inspected: dent-free, scratch-free, all plastic removed; all seams to spec", "Bottom rail not scratched/damaged; black foam tape flush with lower flange; Mylar tape installed; all rail bolts present/drilled to spec; crossmembers not below rail", "Top rail not scratched/damaged; mid penny light checked if required", "White caulking across top rail and panel complete; bottom rail and panel complete", "Panel/post/fasteners to spec; panel tape installed; all fasteners present", "Scrub rail installed to spec; fasteners to spec", "Front laceup complete; fasteners smooth/flush and to spec; interior post installed correctly; 3 MonoBolts flush on each side at bottom of radius corner; white caulking sealed up radius corner", "Rear laceup complete; fasteners smooth/flush and to spec; white caulking sealed up doorframe flange; grey caulking between top rail/doorframe and bottom rail/doorframe", "Screws through wheel pans cut flush at bottom", "Reflective tape installed across bottom rail", "Reflector squares installed: amber at front, red at back, amber at mid if required"], "Door Frame — Roll-up Door": ["Light harness at top and bottom of header; penny lights at top installed; stop/turn/tail lights installed", "Grab handles installed to spec, if required", "DI-MOND plate installed to spec, if required", "Roll-up door spring brackets and spring installed correctly", "Grey caulking between welds on outside of doorframe completed", "All excess galvanizing removed"], "Door Frame — Barn Door": ["Light harness at top and bottom of header; penny lights at top installed; stop/turn/tail lights installed", "Grab handles installed to spec, if required", "DI-MOND plate installed to spec, if required", "Grey caulking between welds on outside of doorframe completed", "Swing doors installed correctly in frame", "Door seals good; lockrod bolts secure/tight", "Hinge bolts secure/tight; hinge pins and cotter pins present; alignment correct", "Door hold-back chain installed", "Correct placards present, if required", "Silver angle bottom reflective tape present", "Red square reflectors installed at bottom of door post face: one left and one right above red/silver tape"], "Lining": ["Bottom corners between front wall, sidewall and bolster caulked", "E-track MonoBolts installed flush using factory pre-punched holes; all MonoBolts present", "Lining type/size checked against spec", "E-Track type and scuff liner type checked against spec", "Lining has no gaps or holes; correct fasteners present, flush and complete", "Front wall lining fasteners present; crash plate flush to front wall/floor; floor screws countersunk into steel crash plate", "Scuff liner flush to lining above bottom rail lip; all fasteners flush/correct; no extra holes"], "Roof": ["Roof bow MonoBolts installed correctly from underneath; roof bow spacing correct to spec", "Mid penny light and dome light wiring/lights installed as required", "Corner penny light wire fastened to corner cap; loom covers exposed wire", "Roof skin tight with no ripples; roof bow tape pulled out; roof walked on", "Self-leveling caulking at rear header and front on roof completed", "Interior corner cap MonoBolts caulked; interior seam between roof radius, corner radius and corner cap caulked", "ROLL-UP DOOR CHECK: Roll-up door installed correctly; wire does not rub frame; spring coilers/cable/tension/washers/latch/reflective tape/placards/track checked", "Roof J-moulding caulking line present; rivets flush and tails evenly squished; translucent caulking around outer edge", "Roll-up door track installed correctly"], "Floor": ["Floor type checked against specification", "Slider rail condition checked; crossmember alignment square; end plates attached and square", "Walkramp/monorail checked if applicable; no floor gaps", "Black caulking between front corners where floor meets bolster", "All floor screws countersunk; holes plugged; 2 screws per board alternating", "Correct threshold plate; holes drilled/countersunk; no extra holes", "Floor groove positioned correctly for threshold plate", "Floor groove positioned correctly for crash plate"], "Final Check": ["Quote checked to ensure all options are completed on truck body", "Quote checked to ensure all loose options are inside the unit", "C-channel on understructure straight front and back; no bent/deformed sections", "All required lights tested: clearance, brake, tail, turn signals and work lights", "Interior/auxiliary lights operational if applicable", "Unit water-tested outside; trailer swept out; markings removed from wall", "Radius corner top and bottom plastic cover peeled off", "4 DI-MOND logo stickers installed; overall cosmetic presentation checked", "VIN sticker installed and SR# recorded", "Roll-up door serial number/model recorded"]}, "Mounting Bay QC": {"Underside": ["C/S U-bolts straight, torqued and painted; front/rear numbers recorded", "R/S U-bolts straight, torqued and painted; front/rear numbers recorded", "Wood painted and not protruding", "Body securely mounted and square on chassis", "Mudflaps mounted and bolts tightened"], "Bumper": ["Bumper installed to spec; fastened to spec; all welds present"], "Tailgate": ["Tailgate mounting brackets, welds and fasteners inspected", "Tailgate platform level and properly aligned with trailer floor", "Hydraulic lines properly routed and clamped; no kink or rubbing points", "Electrical wiring properly secured and protected with loom/ties", "Ground and power cables tightened and corrosion-free", "Control switch functions properly: UP / DOWN / STOW / DEPLOY", "Reflective tape at bottom (red) and DI-MOND reflective tape at middle", "No abnormal noises, jerks or vibrations during operation", "Cab switch installation checked", "Platform contacts ground evenly; platform locks securely in stowed position", "Tailgate cleaned and free of oils, debris and metal shavings"], "Lights and Accessories": ["Lights and wiring properly connected and secured", "Signal lights, four-way flashing and reverse lights checked", "Trailer swept out and cabin cleaned", "Marker lights working", "Work order checked to ensure all options are completed on truck body"], "Final Checks": ["Tailgate make and serial number recorded", "Work order checked to ensure all options are completed on truck body", "Identification stickers installed on box; VIN serial number recorded", "Identification stickers installed on cabin door; VIN serial number recorded", "Tailgate decals installed", "Overall box inspection complete", "Box cleaned out", "Unit complete and ready for shipping"]}};
const STORAGE_KEY = 'dimond-qc-v1';
let state = loadState();
let currentId = null;

const MS_CLIENT_ID = '12c2b348-c082-4295-9aa1-f683566f12d7';
const MS_TENANT_ID = 'dd81b075-ba17-4b8c-9c8e-9b10b07a1445';
const ONEDRIVE_OWNER = 'josh@di-mond.com';
const MS_SCOPES = ['User.Read','Files.ReadWrite'];
const PENDING_SUBMIT_KEY = 'dimond-qc-pending-submit';

let msalApp = null;
let msAccount = null;

async function initMicrosoft(){
  if(!window.msal) return;
  msalApp = new msal.PublicClientApplication({
    auth:{
      clientId:MS_CLIENT_ID,
      authority:`https://login.microsoftonline.com/${MS_TENANT_ID}`,
      redirectUri:'https://joshman265.github.io/di-mond-qc/'
    },
    cache:{cacheLocation:'localStorage'}
  });
  if(typeof msalApp.initialize === 'function') await msalApp.initialize();
  try{
    const r = await msalApp.handleRedirectPromise();
    if(r && r.account){ msAccount=r.account; msalApp.setActiveAccount(msAccount); }
  }catch(e){ console.error('Microsoft redirect error',e); }
  if(!msAccount){
    const accounts=msalApp.getAllAccounts();
    const josh=accounts.find(a=>String(a.username||'').toLowerCase()===ONEDRIVE_OWNER);
    msAccount=josh || accounts[0] || null;
    if(msAccount) msalApp.setActiveAccount(msAccount);
  }
}

function microsoftConnected(){
  return !!(msAccount && String(msAccount.username||'').toLowerCase()===ONEDRIVE_OWNER);
}

async function connectOneDrive(){
  if(!msalApp){ alert('Microsoft sign-in is not available yet. Check your internet connection and reopen the app.'); return; }
  localStorage.removeItem(PENDING_SUBMIT_KEY);
  await msalApp.loginRedirect({scopes:MS_SCOPES,prompt:'select_account',loginHint:ONEDRIVE_OWNER});
}

async function disconnectOneDrive(){
  if(!msalApp || !msAccount) return;
  await msalApp.logoutRedirect({account:msAccount,postLogoutRedirectUri:'https://joshman265.github.io/di-mond-qc/'});
}

async function getGraphToken(){
  if(!microsoftConnected()) throw new Error('ONE_DRIVE_NOT_CONNECTED');
  try{
    const r=await msalApp.acquireTokenSilent({scopes:MS_SCOPES,account:msAccount});
    return r.accessToken;
  }catch(e){
    const d=getDraft();
    if(d) localStorage.setItem(PENDING_SUBMIT_KEY,d.id);
    await msalApp.acquireTokenRedirect({scopes:MS_SCOPES,account:msAccount});
    throw new Error('REDIRECTING_FOR_MICROSOFT');
  }
}

async function graphRequest(url,options={}){
  const token=await getGraphToken();
  const headers=new Headers(options.headers||{});
  headers.set('Authorization','Bearer '+token);
  const res=await fetch(url,{...options,headers});
  return res;
}

function cleanFilePart(s){
  return String(s||'').replace(/[\\/:*?"<>|#%]/g,'-').replace(/\s+/g,' ').trim();
}

function encodeDrivePath(parts){
  return parts.map(p=>encodeURIComponent(String(p))).join('/');
}

function qcFileName(d){
  const wo=cleanFilePart(d.workOrder||d.boxSerial||'UNKNOWN');
  const kind=cleanFilePart(d.type.replace(' Bay',''));
  const date=cleanFilePart(d.date||new Date().toISOString().slice(0,10));
  const stamp=new Date().toTimeString().slice(0,8).replace(/:/g,'');
  return `${wo} - ${kind} - ${date} - ${stamp}.pdf`;
}

async function createPdfBlob(){
  const sheet=document.querySelector('.pdf-sheet');
  if(!sheet) throw new Error('PDF preview could not be created.');
  if(!window.html2canvas || !window.jspdf) throw new Error('PDF library did not load. Check the internet connection and try again.');
  const canvas=await html2canvas(sheet,{scale:1.45,useCORS:true,backgroundColor:'#ffffff',logging:false});
  const img=canvas.toDataURL('image/jpeg',0.96);
  const {jsPDF}=window.jspdf;
  const pdf=new jsPDF({orientation:'portrait',unit:'pt',format:'letter',compress:true});
  const pw=pdf.internal.pageSize.getWidth(), ph=pdf.internal.pageSize.getHeight();
  const margin=24, usableW=pw-(margin*2), usableH=ph-(margin*2);
  const imgH=canvas.height*usableW/canvas.width;
  let page=0;
  while(page*usableH < imgH){
    if(page>0) pdf.addPage();
    pdf.addImage(img,'JPEG',margin,margin-(page*usableH),usableW,imgH,undefined,'FAST');
    page++;
  }
  return pdf.output('blob');
}

async function findUploadFolder(d){
  const wo=String(d.workOrder||d.boxSerial||'').trim();
  const targetParts=['Di-Mond Reporting','Work Order',wo,'QC Sheets'];
  const targetUrl='https://graph.microsoft.com/v1.0/me/drive/root:/'+encodeDrivePath(targetParts);
  const target=await graphRequest(targetUrl);
  if(target.ok) return {parts:targetParts,lost:false};
  if(target.status!==404){
    const txt=await target.text();
    throw new Error(`OneDrive folder check failed (${target.status}). ${txt.slice(0,180)}`);
  }

  const lostParts=['Di-Mond Reporting','Lost QC'];
  const lostUrl='https://graph.microsoft.com/v1.0/me/drive/root:/'+encodeDrivePath(lostParts);
  const lost=await graphRequest(lostUrl);
  if(!lost.ok){
    const txt=await lost.text();
    throw new Error(`Lost QC folder could not be opened (${lost.status}). ${txt.slice(0,180)}`);
  }
  return {parts:lostParts,lost:true};
}

async function uploadPdfToOneDrive(d,blob){
  const folder=await findUploadFolder(d);
  const name=qcFileName(d);
  const fileParts=[...folder.parts,name];
  const url='https://graph.microsoft.com/v1.0/me/drive/root:/'+encodeDrivePath(fileParts)+':/content';
  const res=await graphRequest(url,{method:'PUT',headers:{'Content-Type':'application/pdf'},body:blob});
  if(!res.ok){
    const txt=await res.text();
    throw new Error(`PDF upload failed (${res.status}). ${txt.slice(0,220)}`);
  }
  const item=await res.json();
  return {folder,name,item,lost:folder.lost};
}

function setSubmitStatus(text,isError=false){
  const el=document.querySelector('#submit-status');
  if(el){el.textContent=text;el.className=isError?'submit-status error':'submit-status';}
}

async function submitCurrentQCToOneDrive(){
  const d=getDraft();
  if(!d) return;

  if(!microsoftConnected()){
    localStorage.setItem(PENDING_SUBMIT_KEY,d.id);
    const wrong=msAccount && msAccount.username ? ` Microsoft is currently signed in as ${msAccount.username}.` : '';
    if(confirm(`OneDrive must be connected as ${ONEDRIVE_OWNER}.${wrong}\n\nConnect now? Your QC will stay saved while Microsoft signs in.`)){
      await connectOneDrive();
    }
    return;
  }

  try{
    setSubmitStatus('Creating PDF…');
    const blob=await createPdfBlob();
    setSubmitStatus('Finding the matching Work Order folder in OneDrive…');
    const result=await uploadPdfToOneDrive(d,blob);

    const savedPath=result.folder.parts.join(' → ')+' → '+result.name;
    state.filed.push({
      id:d.id,type:d.type,workOrder:d.workOrder||d.boxSerial||'',
      filedAt:Date.now(),savedPath,webUrl:result.item.webUrl||'',lost:result.lost
    });
    state.drafts=state.drafts.filter(x=>x.id!==d.id);
    saveState();
    localStorage.removeItem(PENDING_SUBMIT_KEY);

    alert(result.lost
      ? `QC submitted successfully.\n\nNo exact Work Order folder was found, so it was safely saved to:\nDi-Mond Reporting → Lost QC\n\nFile: ${result.name}`
      : `QC submitted successfully to OneDrive.\n\n${savedPath}`);
    showDashboard();
  }catch(e){
    if(String(e.message)==='REDIRECTING_FOR_MICROSOFT') return;
    console.error(e);
    setSubmitStatus('Upload failed: '+e.message,true);
    alert('The QC was NOT removed from Incomplete QC.\n\n'+e.message+'\n\nYou can try Submit to OneDrive again or use Print / Save PDF as a backup.');
  }
}

async function resumePendingSubmission(){
  const id=localStorage.getItem(PENDING_SUBMIT_KEY);
  if(!id || !microsoftConnected()) return false;
  const d=state.drafts.find(x=>x.id===id);
  if(!d){localStorage.removeItem(PENDING_SUBMIT_KEY);return false;}
  currentId=id;
  showPrintView(d);
  setTimeout(()=>submitCurrentQCToOneDrive(),250);
  return true;
}


function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {drafts:[], filed:[]}; }
  catch(e){ return {drafts:[], filed:[]}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function uid(){ return 'qc_' + Date.now() + '_' + Math.random().toString(36).slice(2,8); }
function esc(s=''){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }

function showDashboard(){
  currentId = null;
  document.querySelector('#app').innerHTML = `
    <header class="topbar"><div class="brand">DI-MOND</div><div class="subbrand">QUALITY CONTROL</div></header>
    <main class="wrap">
      <section class="hero">
        <h1>Quality Control</h1>
        <p>Start a new inspection or continue an unfinished QC.</p>
        <div class="cloud-card">
          <div><b>OneDrive Connection</b><span>${microsoftConnected()?'Connected as '+esc(msAccount.username):'Not connected — connect as '+ONEDRIVE_OWNER}</span></div>
          <button class="${microsoftConnected()?'':'primary'}" onclick="${microsoftConnected()?'disconnectOneDrive()':'connectOneDrive()'}">${microsoftConnected()?'Disconnect':'Connect OneDrive'}</button>
        </div>
        <div class="new-grid">
          <button class="big primary" onclick="newForm('Mainline QC')">New Mainline QC</button>
          <button class="big" onclick="newForm('Mounting Bay QC')">New Mounting Bay QC</button>
        </div>
      </section>
      <section>
        <div class="section-head"><h2>Incomplete QC</h2><span class="count">${state.drafts.length}</span></div>
        <div class="drafts">${renderDrafts()}</div>
      </section>
      <section class="filed">
        <div class="section-head"><h2>Filed on this iPad</h2><span class="count">${state.filed.length}</span></div>
        ${state.filed.length ? state.filed.slice().reverse().slice(0,10).map(f=>`
          <div class="filed-row"><div><b>${esc(f.workOrder||f.boxSerial||'QC')}</b><span>${esc(f.type)}${f.lost?' · LOST QC':''}</span>${f.savedPath?`<span>${esc(f.savedPath)}</span>`:''}</div><small>${new Date(f.filedAt).toLocaleString()}</small></div>`).join('') :
          '<div class="empty">No completed QC has been marked as filed on this iPad yet.</div>'}
      </section>
    </main>`;
}

function renderDrafts(){
  if(!state.drafts.length) return '<div class="empty">No incomplete QC sheets.</div>';
  return state.drafts.slice().reverse().map(d=>{
    const progress = draftProgress(d);
    return `<button class="draft-card" onclick="openDraft('${d.id}')">
      <div><div class="draft-title">${esc(d.workOrder || d.boxSerial || 'Untitled QC')}</div>
      <div class="draft-meta">${esc(d.type)} · ${progress}% initialled</div></div>
      <div class="chev">›</div>
    </button>`;
  }).join('');
}

function draftProgress(d){
  const sections = FORMS[d.type];
  const total = Object.values(sections).reduce((n,a)=>n+a.length,0);
  const done = Object.values(d.initials||{}).filter(v=>String(v).trim()).length;
  return total ? Math.round(done/total*100) : 0;
}

function newForm(type){
  const draft = {
    id: uid(), type, createdAt: Date.now(), updatedAt: Date.now(),
    date: new Date().toISOString().slice(0,10),
    workOrder:'', boxSerial:'', chassisSerial:'', inspectorInitials:'',
    reviewedWorkOrder:'', reviewedDrawing:'',
    rollupDoorSerial:'', rollupDoorModel:'',
    tailgateSerial:'', tailgateModel:'',
    initials:{}, notes:{}, comments:'', additionalOptions:'',
    signature:''
  };
  state.drafts.push(draft); saveState(); currentId = draft.id; renderForm();
}
function openDraft(id){
  currentId=id;
  const d=getDraft();
  if(d && d.type==='Mounting Bay QC' && !String(d.workOrder||'').trim() && String(d.boxSerial||'').trim()){
    d.workOrder=d.boxSerial;
    saveState();
  }
  renderForm();
}
function getDraft(){ return state.drafts.find(d=>d.id===currentId); }

function renderForm(){
  const d=getDraft(); if(!d){showDashboard();return;}
  const sections = FORMS[d.type];
  document.querySelector('#app').innerHTML = `
    <header class="topbar sticky"><button class="back" onclick="saveAndBack()">‹</button><div><div class="brand">DI-MOND</div><div class="subbrand">${esc(d.type)}</div></div><button class="save-top" onclick="saveDraft()">Save</button></header>
    <main class="wrap form-wrap">
      <section class="card header-card">
        <div class="form-grid">
          <label>Date<input type="date" data-field="date" value="${esc(d.date)}"></label>
          <label>Work Order No.<input data-field="workOrder" value="${esc(d.workOrder || d.boxSerial || '')}" placeholder="Required"></label>
          ${d.type==='Mounting Bay QC'?`<label>Chassis Serial Number<input data-field="chassisSerial" value="${esc(d.chassisSerial)}"></label>`:''}
          <label>Inspector Initials<input data-field="inspectorInitials" value="${esc(d.inspectorInitials)}" maxlength="5" placeholder="e.g. JD"></label>
        </div>
        <p class="hint">Tip: enter Inspector Initials once. Tap <b>Initial</b> beside a completed item to fill them in automatically.</p>
      </section>
      ${Object.entries(sections).map(([sec,items])=>`
        <section class="qc-section">
          <div class="qc-section-title"><h2>${esc(sec)}</h2><span>INITIALS</span></div>
          ${items.map((item,i)=>{
            const key = sec+'|'+i;
            const rollupFields = (d.type==='Mainline QC' && sec==='Final Check' && item==='Roll-up door serial number/model recorded')
              ? `<div class="inline-fields">
                   <label>Roll-up Door Serial Number
                     <input data-field="rollupDoorSerial" value="${esc(d.rollupDoorSerial||'')}" placeholder="Enter serial number">
                   </label>
                   <label>Roll-up Door Model
                     <input data-field="rollupDoorModel" value="${esc(d.rollupDoorModel||'')}" placeholder="Enter model">
                   </label>
                 </div>`
              : '';
            const tailgateFields = (d.type==='Mounting Bay QC' && sec==='Final Checks' && item==='Tailgate make and serial number recorded')
              ? `<div class="inline-fields">
                   <label>Tailgate Serial Number
                     <input data-field="tailgateSerial" value="${esc(d.tailgateSerial||'')}" placeholder="Enter serial number">
                   </label>
                   <label>Tailgate Model
                     <input data-field="tailgateModel" value="${esc(d.tailgateModel||'')}" placeholder="Enter model">
                   </label>
                 </div>`
              : '';
            return `<div class="qc-row">
              <div class="qc-text">${esc(item)}${rollupFields}${tailgateFields}</div>
              <div class="initial-box">
                <input maxlength="5" value="${esc((d.initials||{})[key]||'')}" data-initial-key="${esc(key)}" aria-label="Initials">
                <button type="button" onclick="applyInitial('${jsq(key)}')">Initial</button>
              </div>
            </div>`;
          }).join('')}
        </section>`).join('')}
      <section class="card">
        <label class="block">Comments<textarea data-field="comments" rows="6">${esc(d.comments)}</textarea></label>
        ${d.type==='Mainline QC'?`<label class="block">Additional Option<textarea data-field="additionalOptions" rows="4">${esc(d.additionalOptions)}</textarea></label>`:''}
        <label class="block">Quality Inspector Signature<input data-field="signature" value="${esc(d.signature)}" placeholder="Type full name"></label>
      </section>
      <div class="actions">
        <button class="big" onclick="saveDraft(true)">Save Incomplete</button>
        <button class="big danger-outline" onclick="deleteDraft()">Delete Draft</button>
        <button class="big primary" onclick="completeQC()">Complete QC / Create PDF</button>
      </div>
    </main>`;
  bindInputs();
}

function jsq(s){ return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function bindInputs(){
  document.querySelectorAll('[data-field]').forEach(el=>{
    el.addEventListener('input',()=>{ const d=getDraft(); d[el.dataset.field]=el.value; d.updatedAt=Date.now(); saveState(); });
  });
  document.querySelectorAll('[data-initial-key]').forEach(el=>{
    el.addEventListener('input',()=>{ const d=getDraft(); d.initials[el.dataset.initialKey]=el.value.toUpperCase(); d.updatedAt=Date.now(); saveState(); });
  });
}
function applyInitial(key){
  const d=getDraft();
  if(!d.inspectorInitials.trim()){ alert('Enter Inspector Initials at the top first.'); return; }
  d.initials[key]=d.inspectorInitials.toUpperCase();
  saveState(); renderForm();
}
function saveDraft(showMsg=false){ collect(); saveState(); if(showMsg) alert('Saved as incomplete on this iPad.'); }
function saveAndBack(){ collect(); saveState(); showDashboard(); }
function collect(){
  const d=getDraft();
  if(!d) return;
  document.querySelectorAll('[data-field]').forEach(el=>{
    d[el.dataset.field]=el.value;
  });
  document.querySelectorAll('[data-initial-key]').forEach(el=>{
    d.initials[el.dataset.initialKey]=(el.value||'').trim().toUpperCase();
  });
  d.updatedAt=Date.now();
  saveState();
}
function deleteDraft(){
  if(!confirm('Delete this incomplete QC?')) return;
  state.drafts=state.drafts.filter(d=>d.id!==currentId); saveState(); showDashboard();
}

function completeQC(){
  collect(); const d=getDraft();
  const required = String(d.workOrder||'').trim();
  if(!required){ alert('Enter the Work Order No. first.'); return; }
  if(!d.signature.trim()){ alert('Enter the Quality Inspector Signature before completing the QC.'); return; }
  const missing=[];
  Object.entries(FORMS[d.type]).forEach(([sec,items])=>{
    items.forEach((item,i)=>{
      const key=sec+'|'+i;
      if(!String((d.initials||{})[key]||'').trim()){
        missing.push({section:sec,item:item,key:key});
      }
    });
  });
  if(missing.length){
    const first=missing[0];
    alert(`There ${missing.length===1?'is':'are'} ${missing.length} inspection item${missing.length===1?'':'s'} without initials.\n\nFirst missing item:\n${first.section} — ${first.item}\n\nPlease initial the missing item(s) before completing the QC.`);
    const target=document.querySelector(`[data-initial-key="${CSS.escape(first.key)}"]`);
    if(target){ target.scrollIntoView({behavior:'smooth',block:'center'}); setTimeout(()=>target.focus(),350); }
    return;
  }
  showPrintView(d);
  setTimeout(()=>submitCurrentQCToOneDrive(),200);
}

function showPrintView(d){
  const sections=FORMS[d.type];
  document.querySelector('#app').innerHTML=`
  <div class="print-actions no-print">
    <button onclick="renderForm()">Back to QC</button>
    <div class="save-guide"><b>Automatic filing:</b> Submit to OneDrive will file this QC by Work Order. If no exact Work Order folder is found, it goes to Lost QC.</div>
    <button onclick="window.print()">Print / Save PDF</button>
    <button class="primary" onclick="submitCurrentQCToOneDrive()">Submit to OneDrive</button>
    <div id="submit-status" class="submit-status"></div>
  </div>
  <article class="pdf-sheet">
    <div class="pdf-head"><div>${d.type==='Mounting Bay QC'?`<div class="pdf-check">Reviewed Work Order: ${esc(d.reviewedWorkOrder||'')}</div><div class="pdf-check">Reviewed Drawing: ${esc(d.reviewedDrawing||'')}</div>`:''}</div><div class="pdf-logo">DI-MOND</div></div>
    <div class="pdf-meta"><b>${esc(d.type)}</b><span>Date: ${esc(d.date)}</span><span>Work Order No.: ${esc(d.workOrder || d.boxSerial || '')}</span>${d.chassisSerial?'<span>Chassis Serial: '+esc(d.chassisSerial)+'</span>':''}</div>
    ${Object.entries(sections).map(([sec,items])=>`
      <section class="pdf-section"><div class="pdf-section-title"><b>${esc(sec)}</b><b>INITIALS</b></div>
      ${items.map((item,i)=>{
        const key=sec+'|'+i;
        const rollupInfo=(d.type==='Mainline QC' && sec==='Final Check' && item==='Roll-up door serial number/model recorded')
          ? `<div class="pdf-extra"><b>Serial Number:</b> ${esc(d.rollupDoorSerial||'')} &nbsp;&nbsp; <b>Model:</b> ${esc(d.rollupDoorModel||'')}</div>`
          : '';
        const tailgateInfo=(d.type==='Mounting Bay QC' && sec==='Final Checks' && item==='Tailgate make and serial number recorded')
          ? `<div class="pdf-extra"><b>Tailgate Serial Number:</b> ${esc(d.tailgateSerial||'')} &nbsp;&nbsp; <b>Tailgate Model:</b> ${esc(d.tailgateModel||'')}</div>`
          : '';
        return `<div class="pdf-row"><div>${esc(item)}${rollupInfo}${tailgateInfo}</div><div class="pdf-init">${esc((d.initials||{})[key]||'')}</div></div>`;
      }).join('')}
    </section>`).join('')}
    <div class="pdf-note"><b>COMMENTS</b><div>${nl2br(d.comments)}</div></div>
    ${d.type==='Mainline QC'?`<div class="pdf-note"><b>ADDITIONAL OPTION</b><div>${nl2br(d.additionalOptions)}</div></div>`:''}
    <div class="pdf-sign"><span><b>Quality Inspector Signature:</b> ${esc(d.signature)}</span><span><b>Date:</b> ${esc(d.date)}</span></div>
  </article>`;
}
function nl2br(s=''){ return esc(s).replace(/\n/g,'<br>'); }

function markFiled(){
  const d=getDraft();
  if(!confirm('Confirm that you manually saved the PDF into the correct Work Order → QC Sheets folder in OneDrive.')) return;
  state.filed.push({id:d.id,type:d.type,workOrder:d.workOrder,boxSerial:d.boxSerial,filedAt:Date.now()});
  state.drafts=state.drafts.filter(x=>x.id!==d.id);
  saveState(); showDashboard();
}

window.addEventListener('load',async()=>{
  await initMicrosoft();
  showDashboard();
  await resumePendingSubmission();
});
