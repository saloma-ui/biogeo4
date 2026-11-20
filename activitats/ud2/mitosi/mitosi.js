
(()=>{'use strict';
if(!document.getElementById('stageNav')) return;
const $=id=>document.getElementById(id);
const palette=['#247f9b','#67b7c0','#bd7247','#a28fd0'];
const spindleText={
 animal:[
  'Els dos centrosomes, duplicats abans de la mitosi, se separen i comencen a organitzar els microtúbuls del fus.',
  'Amb l’embolcall nuclear desorganitzat, els microtúbuls arriben fins als cinetocors de les cromàtides.',
  'Els microtúbuls dels dos pols mantenen els cromosomes alineats i connectats per cinetocors.',
  'Els microtúbuls del cinetocor participen en el moviment dels cromosomes fills cap a pols oposats.',
  'Queden dos grups de cromosomes i es reconstrueixen dos embolcalls nuclears; els centrosomes són a regions oposades.',
  'Cada cèl·lula animal filla conserva habitualment un dels centrosomes del fus anterior.'
 ],
 plant:[
  'Els microtúbuls s’organitzen al voltant del nucli i contribueixen a preparar el fus sense centrosomes típics.',
  'L’embolcall nuclear es desorganitza i el fus vegetal estableix unions amb els cinetocors.',
  'El fus bipolar de la planta manté alineats els cromosomes, tot i no disposar de centrosomes típics.',
  'Els microtúbuls dirigeixen igualment els cromosomes cap als dos pols del fus vegetal.',
  'Es reconstrueixen dos embolcalls nuclears; comença a organitzar-se el fragmoplast que guiarà la placa cel·lular.',
  'El fragmoplast ajuda a construir la placa cel·lular, que separa les dues cèl·lules filles.'
 ]
};
const stages=[
 {title:'Profase', tag:'MITOSI', type:'mitosi', question:'Com es fan visibles els cromosomes?', intro:'La cromatina es condensa i comença a organitzar-se el fus.',
  events:[
   'La cromatina es condensa: ja podem distingir els cromosomes duplicats, cadascun amb dues cromàtides germanes.',
   'El nuclèol deixa de ser visible i el fus mitòtic comença a organitzar-se a partir de microtúbuls.',
   'En animals, els dos centrosomes, duplicats anteriorment, es van separant cap a pols oposats.'
  ], envelope:'Encara és recognoscible durant bona part de la profase; al final comença a desorganitzar-se.',
  answer:'L’ADN <strong>ja estava duplicat</strong> abans de començar. La condensació fa visibles <strong>4 cromosomes duplicats</strong>. El fus s’organitza, però els microtúbuls encara no han establert totes les unions amb els cinetocors.',
  metric:'4 cromosomes duplicats', detail:'2 cromàtides per cromosoma', caution:'La profase representada és anterior a la desorganització completa de l’embolcall nuclear: encara es mostra sencer. La seva desorganització es completa a la prometafase.'},
 {title:'Prometafase', tag:'MITOSI', type:'mitosi', question:'Quan desapareix l’embolcall nuclear?', intro:'L’embolcall nuclear es desorganitza i els microtúbuls poden arribar als cromosomes.',
  events:[
   'Es completa la desorganització de l’embolcall nuclear; els cromosomes queden accessibles al fus.',
   'Els microtúbuls del fus contacten amb els cinetocors, situats a la regió del centròmer de cada cromàtida.',
   'Els cromosomes comencen a moure’s i a orientar-se entre els dos pols.'
  ], envelope:'Es fragmenta i deixa d’envoltar els cromosomes; no hi ha un nucli delimitat durant la metafase i l’anafase.',
  answer:'La desaparició de la barrera nuclear permet que els <strong>microtúbuls</strong> s’uneixin als <strong>cinetocors</strong> dels cromosomes. Aquestes unions són necessàries perquè el fus pugui orientar-los i separar-ne les cromàtides.',
  metric:'4 cromosomes duplicats', detail:'Cinetocors connectant amb el fus', caution:'Alguns esquemes escolars inclouen la prometafase dins la “profase tardana”. Aquí la distingim per indicar clarament quan es desorganitza l’embolcall nuclear.'},
 {title:'Metafase', tag:'MITOSI', type:'mitosi', question:'Per què els cromosomes s’alineen al centre?', intro:'Els cromosomes duplicats queden alineats al pla equatorial.',
  events:[
   'El fus bipolar ja està organitzat i les cromàtides germanes estan connectades a microtúbuls de pols oposats.',
   'Els quatre cromosomes duplicats es disposen al pla equatorial de la cèl·lula.',
   'S’estableix una disposició que permetrà repartir correctament una còpia de cada cromosoma a cada pol.'
  ], envelope:'Absent com a estructura tancada: no envolta els cromosomes durant aquesta etapa.',
  answer:'Cada cromàtida germana té un <strong>cinetocor</strong> connectat amb microtúbuls del pol corresponent. Els cromosomes són a l’equador, però encara <strong>no s’han separat</strong>.',
  metric:'4 cromosomes duplicats', detail:'Alineats al pla equatorial', caution:'Els cromosomes no estan penjats d’un fil únic: el fus és una estructura tridimensional i dinàmica. El dibuix n’és una simplificació.'},
 {title:'Anafase', tag:'MITOSI', type:'mitosi', question:'Què es separa i com es mou?', intro:'Les cromàtides germanes se separen i es mouen cap als pols oposats.',
  events:[
   'Es perd la unió que mantenia juntes les cromàtides germanes.',
   'Cada cromàtida separada passa a comptar com un cromosoma independent.',
   'Els microtúbuls i altres mecanismes del fus ajuden a moure quatre cromosomes cap a cada pol.'
  ], envelope:'Continua absent; els cromosomes encara es desplacen sense nous nuclis formats.',
  answer:'Quan les cromàtides es separen, passen a ser <strong>8 cromosomes transitoris en una mateixa cèl·lula</strong>. El fus en dirigeix <strong>4 cap a cada pol</strong>.',
  metric:'8 cromosomes transitoris', detail:'4 cromosomes cap a cada pol', caution:'L’anafase no duplica l’ADN: només separa les còpies que ja hi havia. Cada nucli fill acabarà tenint 4 cromosomes.'},
 {title:'Telofase', tag:'MITOSI', type:'mitosi', question:'Quan tornen a aparèixer els nuclis?', intro:'Es formen dos nous embolcalls nuclears i els cromosomes comencen a descondensar-se.',
  events:[
   'Els dos grups de cromosomes han arribat als pols oposats.',
   'Es reconstrueix un embolcall nuclear al voltant de cadascun dels dos grups.',
   'Els cromosomes es descondensen progressivament i torna a ser visible la cromatina dins cada nucli.'
  ], envelope:'ES TORNA A FORMAR: apareixen dos embolcalls nuclears, un per a cada nucli fill.',
  answer:'La telofase completa el repartiment nuclear: hi ha <strong>dos nuclis amb 2n = 4</strong>. A mesura que els cromosomes es descondensen, ja no es veuen com les figures condensades del model.',
  metric:'2 nuclis nous', detail:'2n = 4 en cada nucli', caution:'La telofase i la citocinesi sovint se superposen; al model les separam per estudiar-les millor.'},
 {title:'Citocinesi', tag:'DIVISIÓ DEL CITOPLASMA', type:'cito', question:'Com se separen finalment les dues cèl·lules?', intro:'Es divideix el citoplasma i es formen dues cèl·lules filles.',
  events:[
   'En les cèl·lules animals, un anell contràctil afavoreix el solc de segmentació.',
   'En les cèl·lules vegetals, es forma una placa cel·lular central que donarà lloc a la nova paret separadora.',
   'El resultat són dues cèl·lules filles, cadascuna amb un nucli i amb 2n = 4 cromosomes.'
  ], envelope:'Present als dos nuclis fills. Ja s’ha reconstruït durant la telofase.',
  answer:'La <strong>citocinesi</strong> és la divisió del citoplasma, no una fase de la mitosi nuclear. En el model es formen <strong>2 cèl·lules filles amb 4 cromosomes cadascuna</strong>.',
  metric:'2 cèl·lules filles', detail:'2n = 4 a cadascuna', caution:'En animals la divisió es fa per estrangulament; en plantes superiors es forma una placa cel·lular. És habitual que la citocinesi comenci abans d’acabar la telofase.'}
];
let stage=0,showing=false,type='animal';
const esc=t=>String(t).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const line=(x1,y1,x2,y2,color='#b2cfcb',w=2,dash='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash?'stroke-dasharray="'+dash+'"':''} stroke-linecap="round"/>`;
const label=(x,y,t,size=18,color='#426561',weight=700,anchor='middle')=>`<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="system-ui,Segoe UI,sans-serif" font-size="${size}" font-weight="${weight}" fill="${color}">${esc(t)}</text>`;
function rod(x,y,color,angle=0,scale=1){return `<g transform="translate(${x},${y}) rotate(${angle}) scale(${scale})">${line(0,-24,0,24,color,12)}<circle r="5" fill="#f5f9f6" stroke="${color}" stroke-width="2"/></g>`}
function cross(x,y,color,scale=1){return `<g transform="translate(${x},${y}) scale(${scale})">${line(-15,-32,15,32,color,10)}${line(15,-32,-15,32,color,10)}<circle r="5.5" fill="#ffe9bb" stroke="${color}" stroke-width="2"/></g>`}
function movingRod(x,y,color,which){const center=which==='left'?x+4:x-4, tip=which==='left'?x+34:x-34;return `<g>${line(center,y,tip,y-19,color,8)}${line(center,y,tip,y+19,color,8)}<circle cx="${center}" cy="${y}" r="6" fill="#fff2d1" stroke="${color}" stroke-width="2"/></g>`}
function cellOutline(phase,plant){
 if(phase===5){
   if(plant)return `<rect x="130" y="75" width="330" height="330" rx="10" fill="#eff8f1" stroke="#579a6b" stroke-width="7"/><rect x="460" y="75" width="330" height="330" rx="10" fill="#eff8f1" stroke="#579a6b" stroke-width="7"/>`;
   return `<ellipse cx="303" cy="242" rx="165" ry="165" fill="#ecf6f2" stroke="#5eaea2" stroke-width="6"/><ellipse cx="617" cy="242" rx="165" ry="165" fill="#ecf6f2" stroke="#5eaea2" stroke-width="6"/>`;
 }
 if(phase===4){
   if(plant)return `<rect x="147" y="71" width="626" height="343" rx="13" fill="#eff8f1" stroke="#579a6b" stroke-width="7"/><path d="M460 145 L460 340" stroke="#74b27b" stroke-width="6" stroke-dasharray="11 8"/>`;
   return `<path d="M459 100 C350 35 135 78 135 240 C135 402 351 449 459 380 C569 449 785 401 785 240 C785 78 572 35 459 100 Z" fill="#ecf6f2" stroke="#5eaea2" stroke-width="6"/>`;
 }
 return plant?`<rect x="145" y="68" width="630" height="350" rx="22" fill="#eff8f1" stroke="#579a6b" stroke-width="7"/>`:`<ellipse cx="460" cy="244" rx="327" ry="175" fill="#ecf6f2" stroke="#5eaea2" stroke-width="6"/>`;
}
function nuclei(cx,cy,rx=112,ry=112){return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="rgba(217,235,241,.52)" stroke="#92b9b9" stroke-width="2.8"/>`}
function chromatin(cx,cy){
 const paths=[
 'M -70 -39 C -44 -78 -11 -4 24 -52 S 71 -5 68 22',
 'M -74 4 C -50 35 -25 -46 5 -6 S 49 57 69 3',
 'M -56 52 C -29 79 1 8 36 46 S 61 57 48 13',
 'M -60 -8 C -28 -23 -19 43 11 35 S 59 -36 43 -49',
 'M -34 -55 C -3 -26 -54 12 -15 25 S 29 2 41 -31',
 'M -65 28 C -45 -15 -2 71 20 12 S 47 -13 58 42',
 'M -9 -69 C 18 -44 -12 -15 21 -7 S 20 53 6 61'];
 return `<g transform="translate(${cx},${cy})" fill="none" stroke="#658c9c" stroke-width="3" stroke-linecap="round" opacity=".69">${paths.map(p=>`<path d="${p}"/>`).join('')}</g>`;
}
function centrosome(cx,cy){
  const rays=Array.from({length:10},(_,i)=>{const a=i*Math.PI/5;return line(cx+Math.cos(a)*17,cy+Math.sin(a)*17,cx+Math.cos(a)*34,cy+Math.sin(a)*34,'#c6ad79',1.5)}).join('');
  return `<g>${rays}<circle cx="${cx}" cy="${cy}" r="16" fill="#fff3d7" stroke="#bb9251" stroke-width="1.7"/><g transform="translate(${cx},${cy})"><rect x="-10" y="-5" width="15" height="6" rx="2" fill="#b8793e" transform="rotate(-28)"/><rect x="-3" y="0" width="15" height="6" rx="2" fill="#925e37" transform="rotate(60)"/></g></g>`;
}
function kinetochorePair(x,y,scale=1){
 return `<g><circle cx="${x-7*scale}" cy="${y}" r="${4.7*scale}" fill="#f4d57c" stroke="#856726" stroke-width="1.5"/><circle cx="${x+7*scale}" cy="${y}" r="${4.7*scale}" fill="#f4d57c" stroke="#856726" stroke-width="1.5"/></g>`;
}
function fragmentedEnvelope(cx,cy,rx,ry){
 let arcs='';
 for(let i=0;i<11;i++){const a=(-160+i*32)*Math.PI/180, b=(a+0.32);
 const xa=cx+rx*Math.cos(a),ya=cy+ry*Math.sin(a),xb=cx+rx*Math.cos(b),yb=cy+ry*Math.sin(b);
 arcs+=`<path d="M${xa.toFixed(1)} ${ya.toFixed(1)} A${rx} ${ry} 0 0 1 ${xb.toFixed(1)} ${yb.toFixed(1)}" fill="none" stroke="#93afb9" stroke-width="3.5" stroke-linecap="round"/>`;
 }
 return arcs;
}
function spindleStrands(leftX,leftY,rightX,rightY,targets,joinBoth=true){
 let v='';
 targets.forEach(([x,y],i)=>{
  v+=line(leftX,leftY,x-7,y,'#70a89f',2.6);
  if(joinBoth)v+=line(rightX,rightY,x+7,y,'#70a89f',2.6);
 });
 return v;
}
function diagram(phase,plant){let s='';
 s+=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 485" role="img" aria-label="${esc(stages[phase].title)}: esquema de mitosi ${plant?'vegetal':'animal'}, amb microtúbuls, cromosomes, cinetocors i embolcall nuclear, 2n igual a 4."><defs><pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#bcd9d0"/></pattern></defs><rect x="0" y="0" width="920" height="485" fill="url(#dots)" rx="12"/>`;
 s+=cellOutline(phase,plant);
 const poleL=plant?[224,243]:[202,244],poleR=plant?[696,243]:[718,244];
 if(phase===0){
  s+=nuclei(460,244,171,146);
  [[357,210],[428,297],[521,197],[576,270]].forEach((p,i)=>s+=cross(p[0],p[1],palette[i],1.02));
  if(!plant)s+=centrosome(...poleL)+centrosome(...poleR);
  [[321,151],[321,336],[599,151],[599,336]].forEach(([x,y],i)=>s+=line(i<2?poleL[0]:poleR[0],244,x,y,'#70a89f',2.3));
  s+=label(460,92,'Embolcall nuclear encara recognoscible',14,'#53757d');
  s+=label(460,448,'Condensació de la cromatina i inici del fus',16);
 }
 if(phase===1){
  const points=[[351,208],[428,302],[516,174],[564,274]];
  s+=fragmentedEnvelope(460,244,173,146);
  points.forEach((p,i)=>s+=cross(p[0],p[1],palette[i],.85));
  // Contactes inicials amb cinetocors: no s'han completat totes les unions dels dos pols.
  [0,1].forEach(i=>s+=line(poleL[0],poleL[1],points[i][0]-7*.9,points[i][1],'#70a89f',2.7));
  [2,3].forEach(i=>s+=line(poleR[0],poleR[1],points[i][0]+7*.9,points[i][1],'#70a89f',2.7));
  points.forEach(([x,y])=>s+=kinetochorePair(x,y,.9));
  if(!plant)s+=centrosome(...poleL)+centrosome(...poleR);
  s+=label(460,448,'L’embolcall nuclear es desorganitza; unió als cinetocors',15);
 }
 if(phase===2){
  const ys=[146,210,274,338];
  s+=line(460,100,460,388,'#a1c7a7',2,'7 8');
  if(!plant)s+=centrosome(...poleL)+centrosome(...poleR);
  s+=spindleStrands(poleL[0],poleL[1],poleR[0],poleR[1],ys.map(y=>[460,y]));
  ys.forEach((y,i)=>{s+=cross(460,y,palette[i],.86);s+=kinetochorePair(460,y,.86)});
  s+=label(460,448,'Cinetocors connectats amb pols oposats · Pla equatorial',15);
 }
 if(phase===3){
  const ys=[146,210,274,338];
  if(!plant)s+=centrosome(...poleL)+centrosome(...poleR);
  ys.forEach((y,i)=>{
    s+=line(poleL[0],poleL[1],323,y,'#70a89f',2.7)+line(poleR[0],poleR[1],597,y,'#70a89f',2.7);
    s+=movingRod(323,y,palette[i],'left')+movingRod(597,y,palette[i],'right');
    s+=`<circle cx="323" cy="${y}" r="4.4" fill="#f4d57c" stroke="#856726" stroke-width="1.4"/>`;
    s+=`<circle cx="597" cy="${y}" r="4.4" fill="#f4d57c" stroke="#856726" stroke-width="1.4"/>`;
  });
  s+=label(460,448,'Les cromàtides se separen: ara són cromosomes independents',15);
 }
 if(phase===4||phase===5){
   const centers=phase===4?[316,605]:[303,617];
   centers.forEach(cx=>{s+=nuclei(cx,242,104,108);s+=chromatin(cx,242)});
   if(!plant){s+=centrosome(207,157)+centrosome(713,157);}
   s+=label(460,448,phase===4?'Es reconstrueixen dos embolcalls nuclears':'Dues cèl·lules filles amb nuclis delimitats',16);
 }
 s+='</svg>';return s;
}
function renderNav(){ $('stageNav').innerHTML=stages.map((s,i)=>`<button type="button" class="stage-dot ${i===stage?'active':''}" data-step="${i}" aria-current="${i===stage?'step':'false'}" aria-label="Etapa ${i+1}, ${esc(s.title)}"><span class="num">${i+1}</span><span>${s.title}</span></button>`).join('');$('stageNav').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>setStage(+b.dataset.step)))}
function setStage(i){stage=Math.max(0,Math.min(i,stages.length-1));showing=false;renderStage()}
function renderStage(){const d=stages[stage];$('phaseTag').textContent=d.tag;$('phaseTag').className='phase-tag'+(d.type==='mitosi'?' mitosi':d.type==='cito'?' cito':'');$('stepCounter').textContent=`ETAPA ${stage+1} DE ${stages.length}`;$('stageTitle').textContent=d.title;$('stageQuestion').textContent=d.question;$('stageIntro').textContent=d.intro;$('stageEvents').innerHTML=d.events.map(ev=>`<li>${esc(ev)}</li>`).join('');$('envelopeStatus').textContent=d.envelope;$('centroLegend').hidden=type==='plant';$('stageExplanation').innerHTML=d.answer+' <strong>Sobre el fus:</strong> '+spindleText[type][stage];$('stageCaution').textContent=d.caution;$('metricStrong').textContent=d.metric;$('metricDetails').textContent=d.detail;$('spindleReading').textContent=spindleText[type][stage];$('revealBox').hidden=!showing;$('revealBtn').textContent=showing?'Amaga l’explicació':'Mostra l’explicació';$('revealBtn').setAttribute('aria-expanded',String(showing));$('prevBtn').disabled=stage===0;$('nextBtn').disabled=stage===stages.length-1;$('diagram').innerHTML=diagram(stage,type==='plant');renderNav()}
$('revealBtn').addEventListener('click',()=>{showing=!showing;$('revealBox').hidden=!showing;$('revealBtn').textContent=showing?'Amaga l’explicació':'Mostra l’explicació';$('revealBtn').setAttribute('aria-expanded',String(showing))});$('prevBtn').addEventListener('click',()=>setStage(stage-1));$('nextBtn').addEventListener('click',()=>setStage(stage+1));$('cellType').addEventListener('change',e=>{type=e.target.value;renderStage()});document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey)return;const target=e.target;if(['INPUT','SELECT','TEXTAREA','BUTTON'].includes(target.tagName))return; if(e.key==='ArrowRight')setStage(stage+1);if(e.key==='ArrowLeft')setStage(stage-1)});
const seqSteps=['Profase','Prometafase','Metafase','Anafase','Telofase','Citocinesi'];const seqShuffled=['Anafase','Citocinesi','Telofase','Metafase','Profase','Prometafase'];let selected=[];
function renderSequence(){const remain=seqShuffled.filter(x=>!selected.includes(x));$('sequenceTokens').innerHTML=remain.map(x=>`<button class="token" type="button" data-name="${esc(x)}">${esc(x)}</button>`).join('');$('sequenceTokens').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{selected.push(b.dataset.name);$('sequenceFeedback').textContent='';renderSequence()}));$('sequenceSelected').innerHTML=selected.length?selected.map((x,i)=>`<span class="selected">${i+1}. ${esc(x)}</span>`).join(''):'<span class="subtle">Les etapes seleccionades apareixeran aquí…</span>'}
$('checkSequence').addEventListener('click',()=>{const ok=selected.length===seqSteps.length&&selected.every((x,i)=>x===seqSteps[i]);const out=$('sequenceFeedback');out.className='feedback '+(ok?'good':'bad');out.textContent=ok?'Correcte! La mitosi comprèn profase, prometafase, metafase, anafase i telofase. La citocinesi completa la divisió cel·lular.':selected.length<seqSteps.length?'Encara falten etapes. Completa la seqüència abans de comprovar-la.':'Revisa l’ordre: la prometafase va entre la profase i la metafase. Situa la citocinesi al final del model.'});$('resetSequence').addEventListener('click',()=>{selected=[];$('sequenceFeedback').textContent='';renderSequence()});
const quiz=[
 {q:'Quan comença la profase, què passa amb la cromatina?', options:['Es condensa en cromosomes visibles','Desapareix del nucli','Comença a duplicar l’ADN'],correct:0,why:'L’ADN ja estava duplicat. Durant la profase els cromosomes es condensen.'},
 {q:'En quina etapa es completa la desorganització de l’embolcall nuclear?',options:['Telofase','Prometafase','Citocinesi'],correct:1,why:'La desorganització s’inicia cap al final de la profase i es completa durant la prometafase.'},
 {q:'Què és un cinetocor?',options:['La membrana que tanca el nucli','Un conjunt de microtúbuls situat al pol','Un complex proteic a la regió del centròmer on s’uneixen microtúbuls del fus'],correct:2,why:'El cinetocor és el punt d’ancoratge dels microtúbuls del fus a les cromàtides.'},
 {q:'Quina estructura participa directament a moure els cromosomes durant la mitosi?',options:['Els microtúbuls del fus','Els ribosomes','La paret cel·lular'],correct:0,why:'El fus mitòtic està format per microtúbuls que intervenen en la separació de les cromàtides.'},
 {q:'Què caracteritza la metafase?',options:['La reconstrucció de dos nuclis','La separació del citoplasma','L’alineació dels cromosomes duplicats al pla equatorial'],correct:2,why:'A la metafase els cromosomes estan alineats, encara formats per dues cromàtides germanes.'},
 {q:'En una cèl·lula 2n = 4, quan podem comptar transitòriament 8 cromosomes?',options:['En acabar la citocinesi, dins cada cèl·lula filla','Durant l’anafase, un cop separades les cromàtides','Durant la metafase, perquè hi ha 8 cromosomes a l’equador'],correct:1,why:'Cada cromàtida separada compta com un cromosoma. Quatre es desplacen cap a cada pol.'},
 {q:'Quan es torna a formar l’embolcall nuclear?',options:['A la telofase, al voltant dels dos grups de cromosomes','A l’anafase, abans que les cromàtides se separin','A la metafase, al voltant dels cromosomes alineats'],correct:0,why:'La telofase inclou la reconstrucció de dos embolcalls nuclears, un al voltant de cada grup.'},
 {q:'Què passa amb els centrosomes en la mitosi animal?',options:['Es dupliquen durant l’anafase','Es dupliquen abans de la mitosi i normalment cada filla en rep un','Només una de les dues filles en rep un'],correct:1,why:'Els dos centrosomes es formen abans d’entrar en mitosi i s’organitzen en pols oposats.'},
 {q:'Com forma el fus una cèl·lula vegetal de l’arrel de ceba?',options:['No pot formar cap fus perquè no té centríols','L’organitza amb microtúbuls sense centrosomes típics','Fa mitosi sense moure els cromosomes'],correct:1,why:'Les cèl·lules vegetals poden organitzar un fus bipolar sense centrosomes típics.'},
 {q:'Quina afirmació sobre la citocinesi és correcta?',options:['És la separació del citoplasma, i pot solapar-se amb la telofase','És el mateix que la duplicació de l’ADN','És el moment en què es trenquen els embolcalls nuclears'],correct:0,why:'La citocinesi divideix el citoplasma; no és una fase de la mitosi nuclear.'}
];let qi=0,chosen=null,score=0;
function renderQuiz(){const q=quiz[qi];$('quizQuestion').textContent=q.q;$('quizCounter').textContent=`Pregunta ${qi+1} de ${quiz.length}`;$('quizFeedback').textContent='';$('quizFeedback').className='feedback';$('quizOptions').innerHTML=q.options.map((o,j)=>`<button type="button" class="quiz-option" data-answer="${j}">${esc(o)}</button>`).join('');$('quizOptions').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>choose(+b.dataset.answer)));$('quizNext').disabled=true;$('quizNext').textContent=qi===quiz.length-1?'Repetir comprovació ↻':'Següent pregunta →';chosen=null}
function choose(i){if(chosen!==null)return;chosen=i;const q=quiz[qi],ok=i===q.correct;if(ok)score++;$('quizOptions').querySelectorAll('button').forEach((b,j)=>{b.disabled=true;if(j===q.correct)b.classList.add('correct');else if(j===i)b.classList.add('wrong')});$('quizFeedback').textContent=(ok?'Correcte. ':'Encara no. ')+q.why;$('quizFeedback').className='feedback '+(ok?'good':'bad');$('quizNext').disabled=false}
$('quizNext').addEventListener('click',()=>{if(chosen===null)return;if(qi===quiz.length-1){const final=score;qi=0;score=0;renderQuiz();$('quizFeedback').className='feedback good';$('quizFeedback').textContent=`Has encertat ${final} de ${quiz.length} preguntes. Pots tornar-ho a intentar.`;}else{qi++;renderQuiz()}});
renderStage();renderSequence();renderQuiz();
})();
