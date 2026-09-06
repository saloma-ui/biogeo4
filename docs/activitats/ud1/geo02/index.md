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

</div>
