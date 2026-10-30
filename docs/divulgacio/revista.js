/* La plantilla només afecta articles i pàgines de Ciència per descobrir. */
(function () {
  'use strict';
  var articles = [
    { slug:'01-rel-calci', title:'Per què relaxar un múscul també consumeix energia?', desc:'El calci, el reticle sarcoplasmàtic i els mitocondris fan possible la relaxació muscular.', tags:['Músculs','Calci','Reticle sarcoplasmàtic','Mitocondris','ATP'], image:'figures/capcalera-01-muscul.webp' },
    { slug:'02-fina-linia-vida', title:'La fina línia que sosté la vida', desc:'Com es fabriquen i es transporten les membranes cel·lulars.', tags:['Membranes','Fosfolípids','Reticle endoplasmàtic','Aparell de Golgi','Vesícules'] },
    { slug:'03-gas-invisible', title:'Monòxid de carboni: asfíxia cel·lular', desc:'Per què el CO dificulta el transport d’oxigen i la producció d’ATP.', tags:['Monòxid de carboni','Hemoglobina','Mitocondris','ATP','Salut'] },
    { slug:'04-trampa-neurones', title:'La trampa invisible dins les neurones', desc:'Els lisosomes, el gen HEXA i la malaltia de Tay-Sachs.', tags:['Lisosomes','Tay-Sachs','Genètica','Neurones','Malalties genètiques'] },
    { slug:'05-sabotatge-proteines', title:'Sabotatge a la fàbrica de proteïnes', desc:'Com la tetraciclina interfereix en els ribosomes bacterians.', tags:['Ribosomes','Antibiòtics','Bacteris','Resistència bacteriana','Proteïnes'] },
    { slug:'06-proteina-cftr', title:'La proteïna que no arriba mai al seu destí', desc:'El recorregut de CFTR i l’acumulació de moc en la fibrosi quística.', tags:['Fibrosi quística','Proteïnes','Reticle endoplasmàtic','Membranes','Malalties genètiques'] }
  ];
  function el(tag, cls, text) { var e=document.createElement(tag); if(cls)e.className=cls; if(text!==undefined)e.textContent=text; return e; }
  function norm(t) { return String(t).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('ca'); }
  function rootUrl() { var p=location.pathname, x=p.indexOf('/divulgacio/'); return x<0?null:location.origin+p.slice(0,x)+'/divulgacio/'; }
  function articleUrl(root,a) { return new URL('ud02/'+a.slug+'/',root).href; }
  function tagUrl(root,tag) { return new URL('temes/?etiqueta='+encodeURIComponent(tag),root).href; }
  function chip(root,tag) { var a=el('a','cd-chip','#'+tag.replace(/\s+/g,'')); a.href=tagUrl(root,tag); a.setAttribute('aria-label','Veure articles sobre '+tag); return a; }
  function tagsSorted() { var m=new Map(); articles.forEach(function(a){a.tags.forEach(function(t){m.set(t,(m.get(t)||0)+1);});}); return Array.from(m.keys()).sort(function(a,b){return m.get(b)-m.get(a)||a.localeCompare(b,'ca');}); }
  function list(root,arr,node) {
    node.replaceChildren();
    if(!arr.length) { node.appendChild(el('li',null,'Cap article coincideix amb la cerca.')); return; }
    arr.forEach(function(a){ var li=el('li'), link=el('a',null,a.title);link.href=articleUrl(root,a);link.appendChild(el('small',null,a.desc));li.appendChild(link);node.appendChild(li); });
  }
  function articlePage(root) {
    var m=location.pathname.match(/\/divulgacio\/ud02\/([^/]+)\/?$/); if(!m)return;
    var current=articles.find(function(a){return a.slug===m[1];});
    var host=document.querySelector('article.md-content__inner');
    if(!current||!host||host.classList.contains('cd-built'))return;
    host.classList.add('cd-built'); document.body.classList.add('cd-revista');
    var original=document.createDocumentFragment();while(host.firstChild)original.appendChild(host.firstChild);
    var reading=el('section','cd-reading');reading.appendChild(original);
    var h1=reading.querySelector('h1');
    if(h1){
      var back=el('a','cd-back','← Tots els articles');back.href=root;reading.insertBefore(back,h1);
      reading.insertBefore(el('div','cd-kicker','Biologia cel·lular · Ciència per descobrir'),h1);
      var chips=el('div','cd-chips');current.tags.forEach(function(t){chips.appendChild(chip(root,t));});
      var next=h1.nextElementSibling;
      if(next&&next.tagName==='P'&&next.querySelector('em'))next.after(chips);else h1.after(chips);
    }
    if(current.image){
      var hero=el('figure','cd-hero'),im=el('img');im.src=new URL(current.image,root).href;
      im.alt='Imatge científica d’una fibra muscular amb reticle sarcoplasmàtic, mitocondris i calci';im.loading='eager';
      hero.appendChild(im);host.appendChild(hero);
    }
    var aside=el('aside','cd-sidebar');aside.setAttribute('aria-label','Cerca i etiquetes');
    var search=el('section','cd-card');search.appendChild(el('h2',null,'Cerca articles'));
    var input=el('input');input.type='search';input.placeholder='Cerca entre els sis articles...';input.setAttribute('aria-label','Cerca en els articles de divulgació');
    search.appendChild(input);var results=el('ul');results.hidden=true;search.appendChild(results);
    input.addEventListener('input',function(){var q=norm(input.value.trim());results.hidden=!q;if(q)list(root,articles.filter(function(a){return norm(a.title+' '+a.desc+' '+a.tags.join(' ')).includes(q);}),results);});
    aside.appendChild(search);
    var topics=el('section','cd-card');topics.appendChild(el('h2',null,'Explora per temes'));
    var cloud=el('div','cd-cloud');tagsSorted().slice(0,19).forEach(function(t){cloud.appendChild(chip(root,t));});topics.appendChild(cloud);
    var more=el('a','cd-more','Totes les etiquetes →');more.href=new URL('temes/',root).href;topics.appendChild(more);aside.appendChild(topics);
    var related=el('section','cd-card');related.appendChild(el('h2',null,'Altres articles que et poden interessar'));
    var others=articles.filter(function(a){return a!==current;}).map(function(a){return {a:a,n:a.tags.filter(function(t){return current.tags.includes(t);}).length};}).sort(function(a,b){return b.n-a.n;}).slice(0,4).map(function(o){return o.a;});
    var ul=el('ul');list(root,others,ul);related.appendChild(ul);aside.appendChild(related);
    var grid=el('div','cd-layout');grid.appendChild(reading);grid.appendChild(aside);host.appendChild(grid);
  }
  function topicsPage(root) {
    var host=document.getElementById('cd-topic-browser');if(!host||host.classList.contains('cd-built'))return;
    host.classList.add('cd-built','cd-browser');document.body.classList.add('cd-revista','cd-topics');
    var chips=el('div','cd-chips'),cards=el('div','cd-topic-grid');host.appendChild(chips);host.appendChild(cards);
    var active=new URLSearchParams(location.search).get('etiqueta')||'';
    var all=el('a','cd-chip'+(!active?' active':''),'Tots els articles');all.href=new URL('temes/',root).href;chips.appendChild(all);
    tagsSorted().forEach(function(t){var a=chip(root,t);if(t===active)a.classList.add('active');chips.appendChild(a);});
    var matches=articles.filter(function(a){return !active||a.tags.includes(active);});
    if(!matches.length)cards.appendChild(el('p',null,'No hi ha articles amb aquesta etiqueta.'));
    matches.forEach(function(a){var card=el('section','cd-topic-card'),link=el('a',null,a.title);link.href=articleUrl(root,a);card.appendChild(link);card.appendChild(el('p',null,a.desc));var c=el('div','cd-cloud');a.tags.forEach(function(t){c.appendChild(chip(root,t));});card.appendChild(c);cards.appendChild(card);});
  }
  function init(){var root=rootUrl();if(root){articlePage(root);topicsPage(root);}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  if(window.document$&&typeof window.document$.subscribe==='function')window.document$.subscribe(init);
})();
