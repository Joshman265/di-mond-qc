
const FORMS = {"Mainline QC": {"Front Wall": ["Front wall panels inspected: dent-free, scratch-free, all plastic removed; all seams are to spec", "Radius corners top and sides assembled to match spec; panels/post/holes to spec", "Front wall seated correctly on front bolster; railbolt holes evenly spaced; railbolts tightened from backside; 3 MonoBolts per side at radius corner; all railbolts present", "Fasteners to spec; panel tape installed between all components; all fasteners present", "Corner caps installed square; MonoBolts drilled correctly, heads flush and caulked; grey caulking around corner caps and rail completed", "Correct placards present, if required", "White caulking around front wall panel completed", "Corner cap penny lights drilled, installed and caulked"], "Roadside Wall": ["Wall panels inspected: dent-free, scratch-free, all plastic removed; all seams to spec", "Bottom rail not scratched/damaged; black foam tape flush with lower flange; Mylar tape installed; all rail bolts present/drilled to spec; crossmembers not below rail", "Top rail not scratched/damaged; mid penny light checked if required", "White caulking across top rail and panel complete; bottom rail and panel complete", "Panel/post/fasteners to spec; panel tape installed; all fasteners present", "Scrub rail installed to spec; fasteners to spec", "Front laceup complete; fasteners smooth/flush and to spec; interior post installed correctly; 3 MonoBolts flush on each side at bottom of radius corner; white caulking sealed up radius corner", "Rear laceup complete; fasteners smooth/flush and to spec; white caulking sealed up doorframe flange; grey caulking between top rail/doorframe and bottom rail/doorframe", "Screws through wheel pans cut flush at bottom", "Reflective tape installed across bottom rail", "Reflector squares installed: amber at front, red at back, amber at mid if required"], "Curbside Wall": ["Wall panels inspected: dent-free, scratch-free, all plastic removed; all seams to spec", "Bottom rail not scratched/damaged; black foam tape flush with lower flange; Mylar tape installed; all rail bolts present/drilled to spec; crossmembers not below rail", "Top rail not scratched/damaged; mid penny light checked if required", "White caulking across top rail and panel complete; bottom rail and panel complete", "Panel/post/fasteners to spec; panel tape installed; all fasteners present", "Scrub rail installed to spec; fasteners to spec", "Front laceup complete; fasteners smooth/flush and to spec; interior post installed correctly; 3 MonoBolts flush on each side at bottom of radius corner; white caulking sealed up radius corner", "Rear laceup complete; fasteners smooth/flush and to spec; white caulking sealed up doorframe flange; grey caulking between top rail/doorframe and bottom rail/doorframe", "Screws through wheel pans cut flush at bottom", "Reflective tape installed across bottom rail", "Reflector squares installed: amber at front, red at back, amber at mid if required"], "Door Frame — Roll-up Door": ["Light harness at top and bottom of header; penny lights at top installed; stop/turn/tail lights installed", "Grab handles installed to spec, if required", "DI-MOND plate installed to spec, if required", "Roll-up door spring brackets and spring installed correctly", "Grey caulking between welds on outside of doorframe completed", "All excess galvanizing removed"], "Door Frame — Barn Door": ["Light harness at top and bottom of header; penny lights at top installed; stop/turn/tail lights installed", "Grab handles installed to spec, if required", "DI-MOND plate installed to spec, if required", "Grey caulking between welds on outside of doorframe completed", "Swing doors installed correctly in frame", "Door seals good; lockrod bolts secure/tight", "Hinge bolts secure/tight; hinge pins and cotter pins present; alignment correct", "Door hold-back chain installed", "Correct placards present, if required", "Silver angle bottom reflective tape present", "Red square reflectors installed at bottom of door post face: one left and one right above red/silver tape"], "Lining": ["Bottom corners between front wall, sidewall and bolster caulked", "E-track MonoBolts installed flush using factory pre-punched holes; all MonoBolts present", "Lining type/size checked against spec", "E-Track type and scuff liner type checked against spec", "Lining has no gaps or holes; correct fasteners present, flush and complete", "Front wall lining fasteners present; crash plate flush to front wall/floor; floor screws countersunk into steel crash plate", "Scuff liner flush to lining above bottom rail lip; all fasteners flush/correct; no extra holes"], "Roof": ["Roof bow MonoBolts installed correctly from underneath; roof bow spacing correct to spec", "Mid penny light and dome light wiring/lights installed as required", "Corner penny light wire fastened to corner cap; loom covers exposed wire", "Roof skin tight with no ripples; roof bow tape pulled out; roof walked on", "Self-leveling caulking at rear header and front on roof completed", "Interior corner cap MonoBolts caulked; interior seam between roof radius, corner radius and corner cap caulked", "Roll-up door installed correctly; wire does not rub frame; spring coilers/cable/tension/washers/latch/reflective tape/placards/track checked", "Roof J-moulding caulking line present; rivets flush and tails evenly squished; translucent caulking around outer edge", "Roll-up door track installed correctly"], "Floor": ["Floor type checked against specification", "Slider rail condition checked; crossmember alignment square; end plates attached and square", "Walkramp/monorail checked if applicable; no floor gaps", "Black caulking between front corners where floor meets bolster", "All floor screws countersunk; holes plugged; 2 screws per board alternating", "Correct threshold plate; holes drilled/countersunk; no extra holes", "Floor groove positioned correctly for threshold plate", "Floor groove positioned correctly for crash plate"], "Final Check": ["Quote checked to ensure all options are completed on truck body", "Quote checked to ensure all loose options are inside the unit", "C-channel on understructure straight front and back; no bent/deformed sections", "All required lights tested: clearance, brake, tail, turn signals and work lights", "Interior/auxiliary lights operational if applicable", "Unit water-tested outside; trailer swept out; markings removed from wall", "Radius corner top and bottom plastic cover peeled off", "4 DI-MOND logo stickers installed; overall cosmetic presentation checked", "VIN sticker installed and SR# recorded", "Roll-up door serial number/model recorded"]}, "Mounting Bay QC": {"Underside": ["C/S U-bolts straight, torqued and painted; front/rear numbers recorded", "R/S U-bolts straight, torqued and painted; front/rear numbers recorded", "Wood painted and not protruding", "Body securely mounted and square on chassis", "Mudflaps mounted and bolts tightened"], "Bumper": ["Bumper installed to spec; fastened to spec; all welds present"], "Tailgate": ["Tailgate mounting brackets, welds and fasteners inspected", "Tailgate platform level and properly aligned with trailer floor", "Hydraulic lines properly routed and clamped; no kink or rubbing points", "Electrical wiring properly secured and protected with loom/ties", "Ground and power cables tightened and corrosion-free", "Control switch functions properly: UP / DOWN / STOW / DEPLOY", "Reflective tape at bottom (red) and DI-MOND reflective tape at middle", "No abnormal noises, jerks or vibrations during operation", "Cab switch installation checked", "Platform contacts ground evenly; platform locks securely in stowed position", "Tailgate cleaned and free of oils, debris and metal shavings"], "Lights and Accessories": ["Lights and wiring properly connected and secured", "Signal lights, four-way flashing and reverse lights checked", "Trailer swept out and cabin cleaned", "Marker lights working", "Work order checked to ensure all options are completed on truck body"], "Final Checks": ["Tailgate make and serial number recorded", "Work order checked to ensure all options are completed on truck body", "Identification stickers installed on box; VIN serial number recorded", "Identification stickers installed on cabin door; VIN serial number recorded", "Tailgate decals installed", "Overall box inspection complete", "Box cleaned out", "Unit complete and ready for shipping"]}};
const STORAGE_KEY = 'dimond-qc-v1';
let state = loadState();
let currentId = null;

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
          <div class="filed-row"><div><b>${esc(f.workOrder||f.boxSerial||'QC')}</b><span>${esc(f.type)}</span></div><small>${new Date(f.filedAt).toLocaleString()}</small></div>`).join('') :
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
    initials:{}, notes:{}, comments:'', additionalOptions:'',
    signature:''
  };
  state.drafts.push(draft); saveState(); currentId = draft.id; renderForm();
}
function openDraft(id){ currentId=id; renderForm(); }
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
          <label>${d.type==='Mainline QC'?'Work Order No.':'Box Serial No.'}<input data-field="${d.type==='Mainline QC'?'workOrder':'boxSerial'}" value="${esc(d.type==='Mainline QC'?d.workOrder:d.boxSerial)}" placeholder="Required"></label>
          ${d.type==='Mounting Bay QC'?`<label>Chassis Serial Number<input data-field="chassisSerial" value="${esc(d.chassisSerial)}"></label>`:''}
          <label>Inspector Initials<input data-field="inspectorInitials" value="${esc(d.inspectorInitials)}" maxlength="5" placeholder="e.g. JD"></label>
          <label>Reviewed Work Order<input data-field="reviewedWorkOrder" value="${esc(d.reviewedWorkOrder)}" placeholder="Initials / confirmation"></label>
          <label>Reviewed Drawing<input data-field="reviewedDrawing" value="${esc(d.reviewedDrawing)}" placeholder="Initials / confirmation"></label>
        </div>
        <p class="hint">Tip: enter Inspector Initials once. Tap <b>Initial</b> beside a completed item to fill them in automatically.</p>
      </section>
      ${Object.entries(sections).map(([sec,items])=>`
        <section class="qc-section">
          <div class="qc-section-title"><h2>${esc(sec)}</h2><span>INITIALS</span></div>
          ${items.map((item,i)=>{
            const key = sec+'|'+i;
            return `<div class="qc-row">
              <div class="qc-text">${esc(item)}</div>
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
function collect(){ const d=getDraft(); if(d) d.updatedAt=Date.now(); }
function deleteDraft(){
  if(!confirm('Delete this incomplete QC?')) return;
  state.drafts=state.drafts.filter(d=>d.id!==currentId); saveState(); showDashboard();
}

function completeQC(){
  collect(); const d=getDraft();
  const required = d.type==='Mainline QC' ? d.workOrder.trim() : d.boxSerial.trim();
  if(!required){ alert(d.type==='Mainline QC'?'Enter the Work Order No. first.':'Enter the Box Serial No. first.'); return; }
  if(!d.signature.trim()){ alert('Enter the Quality Inspector Signature before completing the QC.'); return; }
  const blank = Object.values(FORMS[d.type]).reduce((n,a)=>n+a.length,0) - Object.values(d.initials||{}).filter(v=>String(v).trim()).length;
  if(blank>0 && !confirm(`${blank} inspection item(s) do not have initials. Continue anyway?`)) return;
  showPrintView(d);
}

function showPrintView(d){
  const sections=FORMS[d.type];
  document.querySelector('#app').innerHTML=`
  <div class="print-actions no-print">
    <button onclick="renderForm()">Back to QC</button>
    <div class="save-guide"><b>On iPad:</b> Print → pinch/open the preview → Share → Save to Files → OneDrive → Work Order folder → QC Sheets.</div>
    <button class="primary" onclick="window.print()">Print / Save PDF</button>
    <button onclick="markFiled()">I Saved It to OneDrive</button>
  </div>
  <article class="pdf-sheet">
    <div class="pdf-head"><div><div class="pdf-check">Reviewed Work Order: ${esc(d.reviewedWorkOrder||'')}</div><div class="pdf-check">Reviewed Drawing: ${esc(d.reviewedDrawing||'')}</div></div><div class="pdf-logo">DI-MOND</div></div>
    <div class="pdf-meta"><b>${esc(d.type)}</b><span>Date: ${esc(d.date)}</span><span>${d.type==='Mainline QC'?'Work Order No.: '+esc(d.workOrder):'Box Serial No.: '+esc(d.boxSerial)}</span>${d.chassisSerial?'<span>Chassis Serial: '+esc(d.chassisSerial)+'</span>':''}</div>
    ${Object.entries(sections).map(([sec,items])=>`
      <section class="pdf-section"><div class="pdf-section-title"><b>${esc(sec)}</b><b>INITIALS</b></div>
      ${items.map((item,i)=>{const key=sec+'|'+i;return `<div class="pdf-row"><div>${esc(item)}</div><div class="pdf-init">${esc((d.initials||{})[key]||'')}</div></div>`}).join('')}
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

window.addEventListener('load',showDashboard);
