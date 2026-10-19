
const FORMS = {"Mainline QC": {"Front Wall": ["Front wall panels inspected: dent-free, scratch-free, all plastic removed; all seams are to spec", "Radius corners top and sides assembled to match spec; panels/post/holes to spec", "Front wall seated correctly on front bolster; railbolt holes evenly spaced; railbolts tightened from backside; 3 MonoBolts per side at radius corner; all railbolts present", "Fasteners to spec; panel tape installed between all components; all fasteners present", "Corner caps installed square; MonoBolts drilled correctly, heads flush and caulked; grey caulking around corner caps and rail completed", "Correct placards present, if required", "White caulking around front wall panel completed", "Corner cap penny lights drilled, installed and caulked"], "Roadside Wall": ["Wall panels inspected: dent-free, scratch-free, all plastic removed; all seams to spec", "Bottom rail not scratched/damaged; black foam tape flush with lower flange; Mylar tape installed; all rail bolts present/drilled to spec; crossmembers not below rail", "Top rail not scratched/damaged; mid penny light checked if required", "White caulking across top rail and panel complete; bottom rail and panel complete", "Panel/post/fasteners to spec; panel tape installed; all fasteners present", "Scrub rail installed to spec; fasteners to spec", "Front laceup complete; fasteners smooth/flush and to spec; interior post installed correctly; 3 MonoBolts flush on each side at bottom of radius corner; white caulking sealed up radius corner", "Rear laceup complete; fasteners smooth/flush and to spec; white caulking sealed up doorframe flange; grey caulking between top rail/doorframe and bottom rail/doorframe", "Screws through wheel pans cut flush at bottom", "Reflective tape installed across bottom rail", "Reflector squares installed: amber at front, red at back, amber at mid if required"], "Curbside Wall": ["Wall panels inspected: dent-free, scratch-free, all plastic removed; all seams to spec", "Bottom rail not scratched/damaged; black foam tape flush with lower flange; Mylar tape installed; all rail bolts present/drilled to spec; crossmembers not below rail", "Top rail not scratched/damaged; mid penny light checked if required", "White caulking across top rail and panel complete; bottom rail and panel complete", "Panel/post/fasteners to spec; panel tape installed; all fasteners present", "Scrub rail installed to spec; fasteners to spec", "Front laceup complete; fasteners smooth/flush and to spec; interior post installed correctly; 3 MonoBolts flush on each side at bottom of radius corner; white caulking sealed up radius corner", "Rear laceup complete; fasteners smooth/flush and to spec; white caulking sealed up doorframe flange; grey caulking between top rail/doorframe and bottom rail/doorframe", "Screws through wheel pans cut flush at bottom", "Reflective tape installed across bottom rail", "Reflector squares installed: amber at front, red at back, amber at mid if required"], "Door Frame — Roll-up Door": ["Light harness at top and bottom of header; penny lights at top installed; stop/turn/tail lights installed", "Grab handles installed to spec, if required", "DI-MOND plate installed to spec, if required", "Roll-up door spring brackets and spring installed correctly", "Grey caulking between welds on outside of doorframe completed", "All excess galvanizing removed"], "Door Frame — Barn Door": ["Light harness at top and bottom of header; penny lights at top installed; stop/turn/tail lights installed", "Grab handles installed to spec, if required", "DI-MOND plate installed to spec, if required", "Grey caulking between welds on outside of doorframe completed", "Swing doors installed correctly in frame", "Door seals good; lockrod bolts secure/tight", "Hinge bolts secure/tight; hinge pins and cotter pins present; alignment correct", "Door hold-back chain installed", "Correct placards present, if required", "Silver angle bottom reflective tape present", "Red square reflectors installed at bottom of door post face: one left and one right above red/silver tape"], "Lining": ["Bottom corners between front wall, sidewall and bolster caulked", "E-track MonoBolts installed flush using factory pre-punched holes; all MonoBolts present", "Lining type/size checked against spec", "E-Track type and scuff liner type checked against spec", "Lining has no gaps or holes; correct fasteners present, flush and complete", "Front wall lining fasteners present; crash plate flush to front wall/floor; floor screws countersunk into steel crash plate", "Scuff liner flush to lining above bottom rail lip; all fasteners flush/correct; no extra holes"], "Roof": ["Roof bow MonoBolts installed correctly from underneath; roof bow spacing correct to spec", "Mid penny light and dome light wiring/lights installed as required", "Corner penny light wire fastened to corner cap; loom covers exposed wire", "Roof skin tight with no ripples; roof bow tape pulled out; roof walked on", "Self-leveling caulking at rear header and front on roof completed", "Interior corner cap MonoBolts caulked; interior seam between roof radius, corner radius and corner cap caulked", "ROLL-UP DOOR CHECK: Roll-up door installed correctly; wire does not rub frame; spring coilers/cable/tension/washers/latch/reflective tape/placards/track checked", "Roof J-moulding caulking line present; rivets flush and tails evenly squished; translucent caulking around outer edge", "Roll-up door track installed correctly"], "Floor": ["Floor type checked against specification", "Slider rail condition checked; crossmember alignment square; end plates attached and square", "Walkramp/monorail checked if applicable; no floor gaps", "Black caulking between front corners where floor meets bolster", "All floor screws countersunk; holes plugged; 2 screws per board alternating", "Correct threshold plate; holes drilled/countersunk; no extra holes", "Floor groove positioned correctly for threshold plate", "Floor groove positioned correctly for crash plate"], "Final Check": ["Quote checked to ensure all options are completed on truck body", "Quote checked to ensure all loose options are inside the unit", "C-channel on understructure straight front and back; no bent/deformed sections", "All required lights tested: clearance, brake, tail, turn signals and work lights", "Interior/auxiliary lights operational if applicable", "Unit water-tested outside; trailer swept out; markings removed from wall", "Radius corner top and bottom plastic cover peeled off", "4 DI-MOND logo stickers installed; overall cosmetic presentation checked", "VIN sticker installed and SR# recorded", "Roll-up door serial number/model recorded"]}, "Mounting Bay QC": {"Underside": ["C/S U-bolts straight, torqued and painted; front/rear numbers recorded", "R/S U-bolts straight, torqued and painted; front/rear numbers recorded", "Wood painted and not protruding", "Body securely mounted and square on chassis", "Mudflaps mounted and bolts tightened"], "Bumper": ["Bumper installed to spec; fastened to spec; all welds present"], "Tailgate": ["Tailgate mounting brackets, welds and fasteners inspected", "Tailgate platform level and properly aligned with trailer floor", "Hydraulic lines properly routed and clamped; no kink or rubbing points", "Electrical wiring properly secured and protected with loom/ties", "Ground and power cables tightened and corrosion-free", "Control switch functions properly: UP / DOWN / STOW / DEPLOY", "Reflective tape at bottom (red) and DI-MOND reflective tape at middle", "No abnormal noises, jerks or vibrations during operation", "Cab switch installation checked", "Platform contacts ground evenly; platform locks securely in stowed position", "Tailgate cleaned and free of oils, debris and metal shavings"], "Lights and Accessories": ["Lights and wiring properly connected and secured", "Signal lights, four-way flashing and reverse lights checked", "Trailer swept out and cabin cleaned", "Marker lights working", "Work order checked to ensure all options are completed on truck body"], "Final Checks": ["Tailgate make and serial number recorded", "Work order checked to ensure all options are completed on truck body", "Identification stickers installed on box; VIN serial number recorded", "Identification stickers installed on cabin door; VIN serial number recorded", "Tailgate decals installed", "Overall box inspection complete", "Box cleaned out", "Unit complete and ready for shipping"]}};
const STORAGE_KEY = 'dimond-qc-v1';
let state = loadState();
let currentId = null;

let preparedPdf = null;
let pdfGeneration = 0;
let savingPdf = false;
function cleanFilePart(s){
  return String(s||'').replace(/[\\/:*?"<>|#%]/g,'-').replace(/\s+/g,' ').trim();
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

function setSubmitStatus(text,isError=false){
  const el=document.querySelector('#submit-status');
  if(el){el.textContent=text;el.className=isError?'submit-status error':'submit-status';}
}

async function prepareManualPdf(d,openPicker=false){
  const generation=++pdfGeneration;
  preparedPdf=null;
  const button=document.querySelector('#save-pdf');
  button.disabled=true;
  setSubmitStatus('Preparing PDF…');
  try{
    const blob=await createPdfBlob();
    if(generation!==pdfGeneration || getDraft()!==d || document.querySelector('#save-pdf')!==button) return;
    preparedPdf={id:d.id,blob,name:qcFileName(d)};
    button.disabled=false;
    setSubmitStatus('PDF ready. Tap Save to OneDrive to choose your folder.');
    if(openPicker)await openOneDrivePicker();
  }catch(e){
    setSubmitStatus('PDF preparation failed. Save as Incomplete, then reopen the sheet and try again while online.',true);
  }
}

async function saveCompletedPdf(){
  await openOneDrivePicker();
}

function loadState(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {drafts:[], filed:[]}; }
  catch(e){ return {drafts:[], filed:[]}; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function uid(){ return 'qc_' + Date.now() + '_' + Math.random().toString(36).slice(2,8); }
function esc(s=''){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function formatInspectionItem(s=''){ return esc(s).replace(/;\s*/g,';<br>'); }

const QC_AREAS={
  '317-mainline':{location:'317',title:'Mainline QC',type:'Mainline QC'},
  '317-mounting':{location:'317',title:'Mounting QC',type:'Mounting Bay QC'},
  '195-mainline':{location:'195',title:'Mainline QC',type:null}
};
let currentArea=null;
let navigationPage='home';
function navigationHeader(back){
  return `<header class="topbar">${back?`<button class="back" aria-label="Back" onclick="${back}">‹</button>`:''}<div><div class="brand">DI-MOND</div><div class="subbrand">QUALITY CONTROL</div></div></header>`;
}
function showHome(){currentId=null;currentArea=null;navigationPage='home';renderNavigation();refreshSharedQC();}
function chooseLocation(location){
  if(location==='195'){openArea('195-mainline');return;}
  currentId=null;currentArea=null;navigationPage='317';renderNavigation();
}
function openArea(area){
  if(!QC_AREAS[area])return;
  currentId=null;currentArea=area;navigationPage='area';renderNavigation();refreshSharedQC();
}
function showDashboard(){
  currentId=null;
  navigationPage=currentArea?'area':'home';renderNavigation();refreshSharedQC();
}
function renderNavigation(){
  const app=document.querySelector('#app');
  if(navigationPage==='home'){
    app.innerHTML=navigationHeader()+`<main class="wrap">${driveConnectionHtml()}<section class="hero"><p class="eyebrow">QUALITY CONTROL</p><h1>Select your location</h1><p>Choose the facility for your inspection.</p><div class="new-grid location-grid"><button class="big location" onclick="chooseLocation('195')">195<span>Mainline QC</span></button><button class="big primary location" onclick="chooseLocation('317')">317<span>Mainline &amp; Mounting QC</span></button></div></section><p id="shared-status" class="hint" role="status">${esc(sharedMessage)}</p></main>`;
    return;
  }
  if(navigationPage==='317'){
    app.innerHTML=navigationHeader('showHome()')+`<main class="wrap"><section class="hero"><p class="eyebrow">LOCATION 317</p><h1>Select QC area</h1><div class="new-grid"><button class="big primary" onclick="openArea('317-mainline')">Mainline QC</button><button class="big" onclick="openArea('317-mounting')">Mounting QC</button></div></section></main>`;
    return;
  }
  const area=QC_AREAS[currentArea];if(!area){showHome();return;}
  const drafts=state.drafts.filter(d=>areaOf(d)===currentArea);
  const filed=state.filed.filter(d=>areaOf(d)===currentArea).sort((a,b)=>(b.filedAt||0)-(a.filedAt||0));
  app.innerHTML=navigationHeader(area.location==='317'?"chooseLocation('317')":'showHome()')+`
    <main class="wrap">
      ${driveConnectionHtml()}
      <section class="hero"><p class="eyebrow">LOCATION ${area.location}</p><h1>${area.title}</h1>
      ${area.type?`<p>Start an inspection or continue a saved sheet.</p><button class="big primary" onclick="newForm('${area.type}')">Start new ${area.title}</button>`:`<p>The 195 Mainline QC sheet is coming soon.</p><button class="big" disabled>Start new Mainline QC — coming soon</button>`}</section>
      <div class="shared-toolbar"><p id="shared-status" class="hint" role="status">${esc(sharedMessage)}</p><button class="big" onclick="refreshSharedQC()">Refresh</button></div>
      <section><div class="section-head"><h2>Incomplete QC</h2><span class="count">${drafts.length}</span></div><div class="drafts">${renderDrafts(drafts)}</div></section>
      <section class="filed"><div class="section-head"><h2>Filed QC</h2><span class="count">${filed.length}</span></div>
      ${filed.length?filed.map(f=>`<button class="filed-row filed-button" onclick="openFiled('${jsq(f.id)}')"><div><b>${esc(f.workOrder||f.boxSerial||'QC')}</b><span>${esc(f.type)} · ${new Date(f.filedAt).toLocaleString()}</span>${f.savedPath?`<span>${esc(f.savedPath)}</span>`:''}${f._dirty||!f._sharedRevision?'<span>PDF filed · shared list update pending</span>':''}${f._conflict?'<span>Another saved version also exists</span>':''}</div><span>Open PDF ›</span></button>`).join(''):'<div class="empty">No filed QC sheets in this area.</div>'}</section>
    </main>`;
}
function renderDrafts(drafts){
  if(!drafts.length)return '<div class="empty">No incomplete QC sheets in this area.</div>';
  return drafts.slice().sort((a,b)=>(b.updatedAt||0)-(a.updatedAt||0)).map(d=>{
    const progress=FORMS[d.type]?draftProgress(d):0;
    return `<button class="draft-card" onclick="openDraft('${jsq(d.id)}')"><div><div class="draft-title">${esc(d.workOrder||d.boxSerial||'Untitled QC')}</div><div class="draft-meta">${progress}% initialled${d._savedBy?' · '+esc(d._savedBy):''}${d._savedAt?' · '+new Date(d._savedAt).toLocaleString():''}</div>${d._dirty||!d._sharedRevision?'<div class="draft-meta">Changes saved on this device · use Save as Incomplete to share</div>':''}${d._conflict?'<div class="draft-meta conflict">Concurrent version — compare both sheets before continuing</div>':''}</div><div class="chev">›</div></button>`;
  }).join('');
}

function draftProgress(d){
  const sections = FORMS[d.type];
  const total = Object.values(sections).reduce((n,a)=>n+a.length,0);
  const done = Object.values(d.initials||{}).filter(v=>String(v).trim()).length;
  return total ? Math.round(done/total*100) : 0;
}

function newForm(type){
  if(!currentArea||QC_AREAS[currentArea]?.type!==type)return;
  const draft = {
    id: uid(), type, area:currentArea, _dirty:true, createdAt: Date.now(), updatedAt: Date.now(),
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
  const selected=state.drafts.find(d=>d.id===id);
  if(!selected)return;
  if(!FORMS[selected.type]||areaOf(selected)==='195-mainline'){alert('The 195 QC sheet is not available yet.');return;}
  currentId=id;currentArea=areaOf(selected);
  const d=getDraft();
  if(d && d.type==='Mounting Bay QC' && !String(d.workOrder||'').trim() && String(d.boxSerial||'').trim()){
    d.workOrder=d.boxSerial;
    d._dirty=true;
    saveState();
  }
  renderForm();
}
function getDraft(){ return state.drafts.find(d=>d.id===currentId); }

function renderForm(){
  const d=getDraft(); if(!d){showDashboard();return;}
  const sections = FORMS[d.type];
  document.querySelector('#app').innerHTML = `
    <header class="topbar sticky"><button class="back" onclick="saveAndBack()">‹</button><div><div class="brand">DI-MOND</div><div class="subbrand">${esc(d.type)}</div></div><button class="save-top" onclick="saveIncomplete()">Save as Incomplete</button></header>
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
              <div class="qc-text">${formatInspectionItem(item)}${rollupFields}${tailgateFields}</div>
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
        <button class="big" onclick="saveIncomplete()">Save as Incomplete</button>
        <button class="big primary" onclick="completeQC()">Save to OneDrive</button>
      </div>
    </main>`;
  bindInputs();
}

function jsq(s){ return s.replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

function bindInputs(){
  document.querySelectorAll('[data-field]').forEach(el=>{
    el.addEventListener('input',()=>{ const d=getDraft(); d[el.dataset.field]=el.value; d._dirty=true; d.updatedAt=Date.now(); saveState(); });
  });
  document.querySelectorAll('[data-initial-key]').forEach(el=>{
    el.addEventListener('input',()=>{ const d=getDraft(); d.initials[el.dataset.initialKey]=el.value.toUpperCase(); d._dirty=true; d.updatedAt=Date.now(); saveState(); });
  });
}
function applyInitial(key){
  const d=getDraft();
  if(!d.inspectorInitials.trim()){ alert('Enter Inspector Initials at the top first.'); return; }
  d.initials[key]=d.inspectorInitials.toUpperCase();d._dirty=true;d.updatedAt=Date.now();
  saveState(); renderForm();
}
let savingIncomplete=false;
async function saveIncomplete(collectFields=true){
  if(savingIncomplete)return;
  savingIncomplete=true;
  if(collectFields)collect();
  const d=getDraft();
  const controls=[...document.querySelectorAll('#app button:not(:disabled), #app input:not(:disabled), #app textarea:not(:disabled)')];
  controls.forEach(el=>el.disabled=true);
  try{
    saveState();
    if(d){await publishSharedQC(d);sharedMessage='Saved as incomplete. This sheet is available on other devices.';}
    preparedPdf=null;showDashboard();
  }catch(e){
    alert('Saved on this device, but not yet shared: '+e.message+' Reconnect and use Save as Incomplete again before switching devices.');
    sharedMessage='Saved on this device. Shared save pending; reconnect and tap Refresh before switching devices.';
    preparedPdf=null;showDashboard();
  }finally{controls.forEach(el=>{if(el.isConnected)el.disabled=false;});savingIncomplete=false;}
}
function saveDraft(showMsg=false){return saveIncomplete();}
function saveAndBack(){return saveIncomplete();}

function collect(){
  const d=getDraft();
  if(!d) return;
  document.querySelectorAll('[data-field]').forEach(el=>{
    if(d[el.dataset.field]!==el.value)d._dirty=true;
    d[el.dataset.field]=el.value;
  });
  document.querySelectorAll('[data-initial-key]').forEach(el=>{
    const value=(el.value||'').trim().toUpperCase();
    if(d.initials[el.dataset.initialKey]!==value)d._dirty=true;
    d.initials[el.dataset.initialKey]=value;
  });
  d.updatedAt=Date.now();
  saveState();
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
  showPrintView(d,true);

}

function showPrintView(d,openPicker=false){
  const sections=FORMS[d.type];
  document.querySelector('#app').innerHTML=`
  <div class="print-actions no-print">
    <button onclick="saveIncomplete(false)">Save as Incomplete</button>
    <button id="save-pdf" class="primary" disabled onclick="saveCompletedPdf()">Save to OneDrive</button>
    <div class="save-guide">Choose your OneDrive folder and filename. The QC is filed only after the PDF uploads successfully.</div>
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
        return `<div class="pdf-row"><div>${formatInspectionItem(item)}${rollupInfo}${tailgateInfo}</div><div class="pdf-init">${esc((d.initials||{})[key]||'')}</div></div>`;
      }).join('')}
    </section>`).join('')}
    <div class="pdf-note"><b>COMMENTS</b><div>${nl2br(d.comments)}</div></div>
    ${d.type==='Mainline QC'?`<div class="pdf-note"><b>ADDITIONAL OPTION</b><div>${nl2br(d.additionalOptions)}</div></div>`:''}
    <div class="pdf-sign"><span><b>Quality Inspector Signature:</b> ${esc(d.signature)}</span><span><b>Date:</b> ${esc(d.date)}</span></div>
  </article>`;
  prepareManualPdf(d,openPicker);
}
function nl2br(s=''){ return esc(s).replace(/\n/g,'<br>'); }

window.addEventListener('load',async()=>{
  localStorage.removeItem('dimond-qc-pending-submit');
  driveReady=initializeOneDrive();
  await driveReady;
  showHome();
  const resumeId=sessionStorage.getItem(DRIVE_RESUME_KEY);
  if(resumeId&&driveAccount&&!driveInitError){
    const draft=state.drafts.find(d=>d.id===resumeId);
    if(draft){currentId=resumeId;currentArea=areaOf(draft);showPrintView(draft,true);}
    else sessionStorage.removeItem(DRIVE_RESUME_KEY);
  }
});

