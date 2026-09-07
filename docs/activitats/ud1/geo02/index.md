---
title: GEO-02 · Del mapa al relleu
pdf: false
hide:
  - navigation
  - toc
---

<div class="presentacio-vertical" markdown>

<section class="pv-seccio pv-portada" markdown>

# GEO-02 · Del mapa al relleu

## Com podem representar una muntanya en un full pla?

<!-- DOCENT: Sessió 2 de construcció. Idea rectora: descobrir que les corbes de nivell codifiquen l'altitud i permeten reconstruir mentalment el relleu. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 1 · Un problema de representació

![Model de relleu 3D](figures/relleu_3d.png)

<p class="pv-pregunta"><strong>Com podríem representar aquest relleu en un full pla sense perdre la informació sobre l'altura?</strong></p>

Pensau-ho durant mig minut i comentau una proposta amb la persona del costat.

<!-- DOCENT: No introduir encara el terme “corba de nivell”. Recollir propostes: colors, números, ombres, línies... -->

</section>

<section class="pv-seccio" markdown>

# 2 · Tallam el relleu

Imaginem que travessam el terreny amb un **pla perfectament horitzontal**.

<p class="pv-pregunta"><strong>Què passa amb la línia de contacte entre el pla i el relleu quan pujam el pla?</strong></p>

<div class="pv-quiz" data-pv-quiz>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="tall-100" aria-pressed="false">100 m</button>
    <button type="button" class="pv-opcio" data-feedback="tall-150" aria-pressed="false">150 m</button>
    <button type="button" class="pv-opcio" data-feedback="tall-200" aria-pressed="false">200 m</button>
    <button type="button" class="pv-opcio" data-feedback="tall-250" aria-pressed="false">250 m</button>
  </div>

  <div class="pv-feedback" data-feedback-id="tall-100" hidden>
    <img src="figures/tall_100.png" alt="Tall del relleu a 100 m">
  </div>
  <div class="pv-feedback" data-feedback-id="tall-150" hidden>
    <img src="figures/tall_150.png" alt="Tall del relleu a 150 m">
  </div>
  <div class="pv-feedback" data-feedback-id="tall-200" hidden>
    <img src="figures/tall_200.png" alt="Tall del relleu a 200 m">
  </div>
  <div class="pv-feedback" data-feedback-id="tall-250" hidden>
    <img src="figures/tall_250.png" alt="Tall del relleu a 250 m">
  </div>
</div>

<!-- DOCENT: Fer clicar els nivells en ordre. L'objectiu és observar que cada pla talla només els punts situats a aquella altitud. -->

</section>

<section class="pv-seccio" markdown>

# 3 · I si miram cada tall des de dalt?

Ara miram el mateix territori en planta i hi projectam **la línia de contacte de cada tall**.

<div class="pv-quiz" data-pv-quiz>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="contorn-100" aria-pressed="false">100 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-150" aria-pressed="false">150 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-200" aria-pressed="false">200 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-250" aria-pressed="false">250 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-tots" aria-pressed="false">Superposa'ls</button>
  </div>

  <div class="pv-feedback" data-feedback-id="contorn-100" hidden>
    <img src="figures/contorn_100.png" alt="Línia de contacte del tall de 100 m vista en planta">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-150" hidden>
    <img src="figures/contorn_150.png" alt="Línia de contacte del tall de 150 m vista en planta">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-200" hidden>
    <img src="figures/contorn_200.png" alt="Línia de contacte del tall de 200 m vista en planta">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-250" hidden>
    <img src="figures/contorn_250.png" alt="Línia de contacte del tall de 250 m vista en planta">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-tots" hidden>
    <img src="figures/superposicio.png" alt="Corbes de 100, 150, 200 i 250 m superposades">
  </div>
</div>

<p class="pv-pregunta"><strong>Què conserva cada línia del relleu original?</strong></p>

<!-- DOCENT: Cercar que aparegui la idea “tots els punts d'aquesta línia són igual d'alts” abans de donar el terme formal. -->

</section>

<section class="pv-seccio" markdown>

# 4 · Descobrim la regla

![Corbes superposades amb punts A, B, C i D](figures/superposicio_punts.png)

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quins dos punts estan exactament a la mateixa altitud?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="mateixa-ac" aria-pressed="false">A · A i C</button>
    <button type="button" class="pv-opcio" data-feedback="mateixa-ab" aria-pressed="false">B · A i B</button>
    <button type="button" class="pv-opcio" data-feedback="mateixa-bd" aria-pressed="false">C · B i D</button>
    <button type="button" class="pv-opcio" data-feedback="mateixa-cd" aria-pressed="false">D · C i D</button>
  </div>
  <div class="pv-feedback" data-feedback-id="mateixa-ac" hidden>
    <strong>Exacte.</strong> A i C són damunt la mateixa línia: representen punts situats a la mateixa altitud.
    <p><strong>Una corba de nivell és una línia que uneix punts situats a la mateixa altitud.</strong></p>
  </div>
  <div class="pv-feedback" data-feedback-id="mateixa-ab" hidden>
    <strong>Revisau-ho.</strong> A i B són damunt línies diferents. Seguiu la línia completa abans de decidir.
  </div>
  <div class="pv-feedback" data-feedback-id="mateixa-bd" hidden>
    <strong>Revisau-ho.</strong> Els dos punts poden semblar pròxims, però no pertanyen a la mateixa línia.
  </div>
  <div class="pv-feedback" data-feedback-id="mateixa-cd" hidden>
    <strong>Revisau-ho.</strong> C i D són a línies diferents. La distància entre punts no determina l'altitud.
  </div>
</div>

<!-- DOCENT: Formalitzar “corba de nivell” només després de la resposta. Aquesta pantalla tanca el primer bloc conceptual. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 5 · Quina és la cota?

Tornau a mirar els punts del mapa.

![Corbes superposades amb punts A, B, C i D](figures/superposicio_punts.png)

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>El punt B és damunt una corba de nivell. Quina és la seva cota?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="cota-50" aria-pressed="false">50 m</button>
    <button type="button" class="pv-opcio" data-feedback="cota-100" aria-pressed="false">100 m</button>
    <button type="button" class="pv-opcio" data-feedback="cota-150" aria-pressed="false">150 m</button>
    <button type="button" class="pv-opcio" data-feedback="cota-250" aria-pressed="false">250 m</button>
  </div>
  <div class="pv-feedback" data-feedback-id="cota-50" hidden>
    <strong>Revisau-ho.</strong> Seguiu la corba sobre la qual està situat B i cercau-ne el valor.
  </div>
  <div class="pv-feedback" data-feedback-id="cota-100" hidden>
    <strong>Exacte.</strong> B està damunt la corba de 100 m.
    <p><strong>La cota és l'altitud d'un punt respecte del nivell de la mar.</strong> Si el punt és damunt una corba de nivell, la seva cota coincideix amb el valor d'aquella corba.</p>
  </div>
  <div class="pv-feedback" data-feedback-id="cota-150" hidden>
    <strong>Revisau-ho.</strong> La corba de 150 m passa més cap a l'interior del relleu; B és sobre la corba exterior blava.
  </div>
  <div class="pv-feedback" data-feedback-id="cota-250" hidden>
    <strong>Revisau-ho.</strong> 250 m correspon a una corba molt més interior i pròxima a les zones altes.
  </div>
</div>

<!-- DOCENT: Introduir el terme “cota” només després de la resposta. Diferenciar la cota, que correspon a un punt, de la corba de nivell, que és una línia. -->

</section>

<section class="pv-seccio" markdown>

# 6 · I si no hi ha número?

Suposau que aquestes són **cinc corbes de nivell consecutives** d'un mapa:

<div class="pv-cadena" markdown>

**100 m → ? → 200 m → ? → 300 m**

</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quines cotes tenen les dues corbes sense número?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="equi-a" aria-pressed="false">125 m i 225 m</button>
    <button type="button" class="pv-opcio" data-feedback="equi-b" aria-pressed="false">150 m i 250 m</button>
    <button type="button" class="pv-opcio" data-feedback="equi-c" aria-pressed="false">175 m i 275 m</button>
    <button type="button" class="pv-opcio" data-feedback="equi-d" aria-pressed="false">200 m i 300 m</button>
  </div>
  <div class="pv-feedback" data-feedback-id="equi-a" hidden>
    <strong>Revisau-ho.</strong> Entre 100 i 200 m hi ha dues passes iguals, no quatre.
  </div>
  <div class="pv-feedback" data-feedback-id="equi-b" hidden>
    <strong>Exacte.</strong> La seqüència és 100 → 150 → 200 → 250 → 300 m.
    <p><strong>L'equidistància és la diferència d'altitud entre dues corbes de nivell consecutives.</strong> En aquest cas és de <strong>50 m</strong>.</p>
  </div>
  <div class="pv-feedback" data-feedback-id="equi-c" hidden>
    <strong>Revisau-ho.</strong> La diferència d'altitud ha de ser constant entre totes les corbes consecutives.
  </div>
  <div class="pv-feedback" data-feedback-id="equi-d" hidden>
    <strong>Revisau-ho.</strong> Una corba consecutiva no pot tenir la mateixa cota que la següent.
  </div>
</div>

<!-- DOCENT: L'esquema és deliberadament simplificat i especifica que les corbes són consecutives. L'objectiu és construir el significat d'equidistància sense dependre de la densitat de línies del mapa base. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 7 · On és més alt?

Ara combinam el que sabem sobre **corbes de nivell** i **cotes**.

![Corbes superposades amb punts A, B, C i D](figures/superposicio_punts.png)

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quin ordre situa els punts de menor a major altitud?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="ordre-correcte" aria-pressed="false">B &lt; A = C &lt; D</button>
    <button type="button" class="pv-opcio" data-feedback="ordre-b" aria-pressed="false">A = C &lt; B &lt; D</button>
    <button type="button" class="pv-opcio" data-feedback="ordre-c" aria-pressed="false">B &lt; D &lt; A = C</button>
    <button type="button" class="pv-opcio" data-feedback="ordre-d" aria-pressed="false">D &lt; A = C &lt; B</button>
  </div>
  <div class="pv-feedback" data-feedback-id="ordre-correcte" hidden>
    <strong>Exacte.</strong> B és a 100 m; A i C són a 150 m; D és a 250 m.
    <p>Un mapa topogràfic ens permet comparar altituds encara que no hàgim vist el relleu directament.</p>
  </div>
  <div class="pv-feedback" data-feedback-id="ordre-b" hidden>
    <strong>Revisau-ho.</strong> B és sobre la corba més exterior de 100 m, per davall d'A i C.
  </div>
  <div class="pv-feedback" data-feedback-id="ordre-c" hidden>
    <strong>Revisau-ho.</strong> D és sobre la corba de 250 m i, per tant, és el punt més alt dels quatre.
  </div>
  <div class="pv-feedback" data-feedback-id="ordre-d" hidden>
    <strong>Revisau-ho.</strong> Heu invertit l'ordre: les corbes més interiors d'aquest relleu representen cotes més elevades.
  </div>
</div>

<!-- DOCENT: Activitat d'integració. Fer justificar l'ordre verbalment: “B és a 100 m; A i C a 150 m; D a 250 m”. No és evidència formal. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 8 · Les línies ens diuen alguna cosa més

Fins ara hem utilitzat les corbes per saber **a quina altitud** és un lloc. Però la seva separació també ens informa de **com canvia l'altitud amb la distància**.

<div style="position:relative; width:100%; margin:1.25rem auto;">
  <img src="figures/mapa_base.png" alt="Mapa topogràfic amb dues zones assenyalades per comparar el pendent" style="display:block; width:100%; height:auto; max-height:none; margin:0;">
  <svg viewBox="0 0 1536 1024" aria-hidden="true" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
    <ellipse cx="720" cy="405" rx="92" ry="112" fill="none" stroke="#111" stroke-width="7" stroke-dasharray="18 12"/>
    <text x="785" y="325" font-size="52" font-weight="700" fill="#111" stroke="#fff" stroke-width="10" paint-order="stroke">A</text>
    <ellipse cx="500" cy="245" rx="125" ry="95" fill="none" stroke="#111" stroke-width="7" stroke-dasharray="18 12"/>
    <text x="390" y="190" font-size="52" font-weight="700" fill="#111" stroke="#fff" stroke-width="10" paint-order="stroke">B</text>
  </svg>
</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>En quina zona guanyaríeu més altitud recorrent una distància horitzontal curta?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="pendent-a" aria-pressed="false">A · Zona A</button>
    <button type="button" class="pv-opcio" data-feedback="pendent-b" aria-pressed="false">B · Zona B</button>
  </div>
  <div class="pv-feedback" data-feedback-id="pendent-a" hidden>
    <strong>Exacte.</strong> A la zona A les corbes estan molt més juntes: passam per diversos canvis d'altitud en poca distància horitzontal.
    <p><strong>Corbes juntes → pendent fort. Corbes separades → pendent suau.</strong></p>
  </div>
  <div class="pv-feedback" data-feedback-id="pendent-b" hidden>
    <strong>Revisau-ho.</strong> A la zona B les corbes estan més separades. Per guanyar la mateixa altitud necessitam recórrer més distància horitzontal, de manera que el pendent és més suau.
  </div>
</div>

<!-- DOCENT: Fer verbalitzar la relació abans de donar la regla. No calcular encara pendent en percentatge ni en graus: aquí interessa la lectura qualitativa del mapa. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 9 · Més alt no vol dir més pendent

Ara compararem dues zones diferents del mateix mapa. **P és en una zona més alta que Q.**

<div style="position:relative; width:100%; margin:1.25rem auto;">
  <img src="figures/mapa_base.png" alt="Mapa topogràfic amb els punts P i Q per diferenciar altitud i pendent" style="display:block; width:100%; height:auto; max-height:none; margin:0;">
  <svg viewBox="0 0 1536 1024" aria-hidden="true" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
    <circle cx="615" cy="260" r="14" fill="#111" stroke="#fff" stroke-width="5"/>
    <text x="635" y="245" font-size="42" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">P · zona alta</text>
    <circle cx="220" cy="445" r="14" fill="#111" stroke="#fff" stroke-width="5"/>
    <text x="245" y="430" font-size="42" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">Q · zona més baixa</text>
  </svg>
</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quina de les dues zones té el pendent més fort?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="altura-p" aria-pressed="false">A · P, perquè és a més altitud</button>
    <button type="button" class="pv-opcio" data-feedback="altura-q" aria-pressed="false">B · Q, perquè les corbes del seu entorn estan més juntes</button>
  </div>
  <div class="pv-feedback" data-feedback-id="altura-p" hidden>
    <strong>Aquí heu comparat altitud, no pendent.</strong> La cota ens diu a quina altura és un lloc; el pendent ens diu com de ràpid canvia aquesta altitud quan ens desplaçam horitzontalment.
  </div>
  <div class="pv-feedback" data-feedback-id="altura-q" hidden>
    <strong>Exacte.</strong> Encara que Q sigui més baix, les corbes del seu entorn estan més juntes i indiquen un canvi d'altitud més ràpid amb la distància.
    <p><strong>Altitud i pendent són variables diferents:</strong> un lloc baix pot ser molt costerut i un lloc alt pot tenir un pendent relativament suau.</p>
  </div>
</div>

<!-- DOCENT: Aquesta pantalla ataca explícitament la confusió “més alt = més pendent”. Demanar a l'alumnat que justifiqui la resposta parlant de separació entre corbes, no de cota. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 10 · Quina distància recorrerem?

Un mapa no només redueix el relleu: també redueix **les distàncies**. Per recuperar la distància real necessitam una referència.

<div style="position:relative; width:100%; margin:1.25rem auto;">
  <img src="figures/mapa_base.png" alt="Mapa topogràfic amb un segment A-B i l'escala gràfica ressaltada" style="display:block; width:100%; height:auto; max-height:none; margin:0;">
  <svg viewBox="0 0 1448 1086" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
    <line x1="645" y1="748" x2="645" y2="586" stroke="#111" stroke-width="9" stroke-linecap="round"/>
    <circle cx="645" cy="748" r="14" fill="#111" stroke="#fff" stroke-width="5"/>
    <circle cx="645" cy="586" r="14" fill="#111" stroke="#fff" stroke-width="5"/>
    <text x="668" y="760" font-size="42" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">A</text>
    <text x="668" y="590" font-size="42" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">B</text>
    <rect x="1060" y="972" width="330" height="78" rx="16" fill="none" stroke="#111" stroke-width="6" stroke-dasharray="16 10"/>
  </svg>
</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Comparau la longitud A–B amb l'escala gràfica. Quina distància real aproximada representa?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="escala-1" aria-pressed="false">1 km</button>
    <button type="button" class="pv-opcio" data-feedback="escala-2" aria-pressed="false">2 km</button>
    <button type="button" class="pv-opcio" data-feedback="escala-3" aria-pressed="false">3 km</button>
    <button type="button" class="pv-opcio" data-feedback="escala-6" aria-pressed="false">6 km</button>
  </div>
  <div class="pv-feedback" data-feedback-id="escala-1" hidden>
    <strong>Revisau-ho.</strong> A–B és aproximadament el doble d'un tram d'1 km de la barra d'escala.
  </div>
  <div class="pv-feedback" data-feedback-id="escala-2" hidden>
    <strong>Exacte.</strong> La longitud A–B equival aproximadament a dos trams d'1 km.
    <p><strong>L'escala relaciona una distància mesurada al mapa amb la distància real.</strong> En una escala gràfica, podem comparar directament una longitud del mapa amb la barra graduada.</p>
  </div>
  <div class="pv-feedback" data-feedback-id="escala-3" hidden>
    <strong>Revisau-ho.</strong> A–B és clarament més curt que tota la barra de 3 km.
  </div>
  <div class="pv-feedback" data-feedback-id="escala-6" hidden>
    <strong>Revisau-ho.</strong> No hem de multiplicar els 3 km de la barra per dos: hem de comparar la longitud A–B amb els trams graduats de la barra.
  </div>
</div>

<p class="pv-pregunta"><strong>Atenció:</strong> aquesta és la distància en línia recta entre A i B. Un camí real que faci revolts pot ser més llarg.</p>

<!-- DOCENT: Introduir “escala” després de la resposta. Treballar aquí només la lectura de l'escala gràfica; no és necessari introduir encara una escala numèrica ni conversions. La darrera frase prepara el problema de rutes del punt 11. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 11 · Quin camí triaríeu?

Hem d'anar des de la **sortida** fins al **destí**. Tenim dues rutes possibles.

La nostra prioritat és **evitar una pujada massa forta**, encara que haguem de recórrer més distància.

<div style="position:relative; width:100%; margin:1.25rem auto;">
  <img src="figures/mapa_base.png" alt="Mapa topogràfic amb dues rutes alternatives entre la sortida i el destí" style="display:block; width:100%; height:auto; max-height:none; margin:0;">
  <svg viewBox="0 0 1448 1086" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
    <path d="M 670 780 C 675 700, 690 600, 720 480" fill="none" stroke="#c62828" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M 670 780
             C 760 760, 860 735, 930 700
             C 900 660, 820 645, 710 650
             C 620 655, 565 635, 575 600
             C 590 565, 670 550, 770 552
             C 850 552, 900 530, 885 505
             C 870 480, 810 470, 740 480
             C 728 482, 722 481, 720 480"
          fill="none" stroke="#1565c0" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>

    <circle cx="670" cy="780" r="16" fill="#111" stroke="#fff" stroke-width="6"/>
    <circle cx="720" cy="480" r="16" fill="#111" stroke="#fff" stroke-width="6"/>
    <text x="692" y="805" font-size="38" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">SORTIDA</text>
    <text x="742" y="466" font-size="38" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">DESTÍ</text>

    <text x="700" y="625" font-size="40" font-weight="700" fill="#c62828" stroke="#fff" stroke-width="9" paint-order="stroke">Ruta A</text>
    <text x="845" y="674" font-size="40" font-weight="700" fill="#1565c0" stroke="#fff" stroke-width="9" paint-order="stroke">Ruta B</text>
  </svg>
</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quina ruta és més curta?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="ruta-curta-a" aria-pressed="false">A · Ruta A</button>
    <button type="button" class="pv-opcio" data-feedback="ruta-curta-b" aria-pressed="false">B · Ruta B</button>
  </div>
  <div class="pv-feedback" data-feedback-id="ruta-curta-a" hidden>
    <strong>Exacte.</strong> La ruta A uneix la sortida i el destí de manera molt més directa. La ruta B fa un recorregut considerablement més llarg.
  </div>
  <div class="pv-feedback" data-feedback-id="ruta-curta-b" hidden>
    <strong>Revisau-ho.</strong> Seguiu els dos recorreguts de principi a fi: la ruta B fa diversos revolts abans d'arribar al mateix destí.
  </div>
</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quina ruta permet guanyar altitud de manera més gradual?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="ruta-pendent-a" aria-pressed="false">A · Ruta A</button>
    <button type="button" class="pv-opcio" data-feedback="ruta-pendent-b" aria-pressed="false">B · Ruta B</button>
  </div>
  <div class="pv-feedback" data-feedback-id="ruta-pendent-a" hidden>
    <strong>Revisau com travessa les corbes de nivell.</strong> La ruta A en talla moltes en poca longitud de recorregut: l'altitud augmenta ràpidament mentre avançam.
  </div>
  <div class="pv-feedback" data-feedback-id="ruta-pendent-b" hidden>
    <strong>Exacte.</strong> La ruta B alterna revolts i trams que segueixen aproximadament la direcció de les corbes de nivell. Això fa que recorreguem més distància entre un canvi d'altitud i el següent.
    <p><strong>Mateix desnivell + més distància de recorregut → pujada més gradual.</strong></p>
    <p>Per tant: <strong>A és més curta; B té una pujada més suau.</strong></p>
  </div>
</div>

<!-- DOCENT: No presentar B com a “millor” en absolut ni justificar-la només perquè té revolts. L'evidència és la relació entre el traçat i les corbes de nivell: B recorre més distància entre successius canvis d'altitud. -->

</section>

<section class="pv-seccio pv-visual" markdown>

# 12 · No basta triar: justifica-ho

Per a aquest grup hem decidit **triar la ruta B** perquè la prioritat és evitar una pujada massa forta.

<div style="position:relative; width:100%; margin:1.25rem auto;">
  <img src="figures/mapa_base.png" alt="Mateix mapa amb les rutes A i B per justificar una decisió a partir de les corbes de nivell" style="display:block; width:100%; height:auto; max-height:none; margin:0;">
  <svg viewBox="0 0 1448 1086" preserveAspectRatio="xMidYMid meet" aria-hidden="true" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
    <path d="M 670 780 C 675 700, 690 600, 720 480" fill="none" stroke="#c62828" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M 670 780
             C 760 760, 860 735, 930 700
             C 900 660, 820 645, 710 650
             C 620 655, 565 635, 575 600
             C 590 565, 670 550, 770 552
             C 850 552, 900 530, 885 505
             C 870 480, 810 470, 740 480
             C 728 482, 722 481, 720 480"
          fill="none" stroke="#1565c0" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>

    <circle cx="670" cy="780" r="16" fill="#111" stroke="#fff" stroke-width="6"/>
    <circle cx="720" cy="480" r="16" fill="#111" stroke="#fff" stroke-width="6"/>
    <text x="692" y="805" font-size="38" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">SORTIDA</text>
    <text x="742" y="466" font-size="38" font-weight="700" fill="#111" stroke="#fff" stroke-width="9" paint-order="stroke">DESTÍ</text>
    <text x="700" y="625" font-size="40" font-weight="700" fill="#c62828" stroke="#fff" stroke-width="9" paint-order="stroke">Ruta A</text>
    <text x="845" y="674" font-size="40" font-weight="700" fill="#1565c0" stroke="#fff" stroke-width="9" paint-order="stroke">Ruta B</text>
  </svg>
</div>

<div class="pv-quiz" data-pv-quiz>
  <p class="pv-pregunta"><strong>Quina explicació justifica millor la decisió?</strong></p>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="just-altitud" aria-pressed="false">A · B, perquè arriba a una zona situada a més altitud.</button>
    <button type="button" class="pv-opcio" data-feedback="just-curta" aria-pressed="false">B · B, perquè és el recorregut més curt.</button>
    <button type="button" class="pv-opcio" data-feedback="just-correcta" aria-pressed="false">C · B, perquè els revolts fan que recorreguem més distància entre successius canvis d'altitud; així la pujada és més gradual, encara que el recorregut sigui més llarg.</button>
    <button type="button" class="pv-opcio" data-feedback="just-revolts" aria-pressed="false">D · B, simplement perquè té més revolts.</button>
  </div>

  <div class="pv-feedback" data-feedback-id="just-altitud" hidden>
    <strong>Aquí estau confonent altitud i pendent.</strong> Que el destí sigui més alt no ens diu quina ruta permet arribar-hi amb una pujada més gradual.
  </div>
  <div class="pv-feedback" data-feedback-id="just-curta" hidden>
    <strong>No.</strong> La ruta més curta és A. Precisament triam B malgrat que és més llarga.
  </div>
  <div class="pv-feedback" data-feedback-id="just-correcta" hidden>
    <strong>Exacte.</strong> La justificació relaciona el traçat amb les corbes de nivell.
    <p>La ruta B té trams gairebé paral·lels a les corbes i les va travessant progressivament. Així recorrem <strong>més distància per guanyar el mateix desnivell</strong> i la pujada resulta més suau.</p>
    <p><strong>Decisió → evidència → explicació</strong><br>Triam B → travessa les corbes més gradualment → guanya altitud més a poc a poc.</p>
  </div>
  <div class="pv-feedback" data-feedback-id="just-revolts" hidden>
    <strong>No basta mirar la forma del camí.</strong> Els revolts, per si sols, no demostren que el pendent sigui menor. L'evidència és <strong>com el recorregut travessa les corbes de nivell</strong> i quanta distància recorre entre dos canvis d'altitud.
  </div>
</div>

<p class="pv-pregunta"><strong>I si la prioritat fos arribar-hi pel recorregut més curt?</strong> En aquest cas triaríem la <strong>ruta A</strong>.</p>

<!-- DOCENT: El punt clau és impedir el raonament superficial “més revolts = millor”. Fer que l'alumnat argumenti amb les corbes de nivell i amb la distància recorreguda entre canvis d'altitud. -->

</section>

</div>
