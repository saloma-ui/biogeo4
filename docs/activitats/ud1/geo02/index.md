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

Ara eliminam mentalment el volum del relleu i conservam **només la línia de contacte**.

<div class="pv-quiz" data-pv-quiz>
  <div class="pv-opcions">
    <button type="button" class="pv-opcio" data-feedback="contorn-100" aria-pressed="false">100 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-150" aria-pressed="false">150 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-200" aria-pressed="false">200 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-250" aria-pressed="false">250 m</button>
    <button type="button" class="pv-opcio" data-feedback="contorn-tots" aria-pressed="false">Superposa'ls</button>
  </div>

  <div class="pv-feedback" data-feedback-id="contorn-100" hidden>
    <img src="figures/contorn_100.png" alt="Contorn del tall a 100 m">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-150" hidden>
    <img src="figures/contorn_150.png" alt="Contorn del tall a 150 m">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-200" hidden>
    <img src="figures/contorn_200.png" alt="Contorn del tall a 200 m">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-250" hidden>
    <img src="figures/contorn_250.png" alt="Contorn del tall a 250 m">
  </div>
  <div class="pv-feedback" data-feedback-id="contorn-tots" hidden>
    <img src="figures/superposicio.png" alt="Tots els talls superposats">
  </div>
</div>

<p class="pv-pregunta"><strong>Què conserva cada línia del relleu original?</strong></p>

<!-- DOCENT: Cercar que aparegui la idea “tots els punts d'aquesta línia són igual d'alts” abans de donar el terme formal. -->

</section>

<section class="pv-seccio" markdown>

# 4 · Descobrim la regla

![Contorns superposats amb punts A, B, C i D](figures/superposicio_punts.png)

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

</div>
