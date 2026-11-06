/* Joc de repàs dels 12 orgànuls i estructures — UD02, A01.
   Les funcions segueixen la taula del bloc 1 del material guia. */
(() => {
  "use strict";

  const estructures = [
    { id: "membrana", nom: "Membrana plasmàtica", funcio: "Delimita la cèl·lula i regula els intercanvis i la comunicació amb l'exterior." },
    { id: "nucli", nom: "Nucli", funcio: "Conté la major part de l'ADN eucariota i participa en la regulació de l'activitat cel·lular." },
    { id: "ribosomes", nom: "Ribosomes", funcio: "Sintetitzen proteïnes." },
    { id: "rer", nom: "Reticle endoplasmàtic rugós", funcio: "Participa en la síntesi i el processament inicial de moltes proteïnes destinades a secreció o a membranes." },
    { id: "rel", nom: "Reticle endoplasmàtic llis", funcio: "Participa, entre altres funcions, en la síntesi de lípids i en la regulació del calci." },
    { id: "golgi", nom: "Aparell de Golgi", funcio: "Modifica, classifica i distribueix proteïnes i lípids." },
    { id: "mitocondris", nom: "Mitocondris", funcio: "Participen en la respiració cel·lular i en la producció d'ATP." },
    { id: "lisosomes", nom: "Lisosomes", funcio: "Participen en la digestió i el reciclatge de materials, especialment en cèl·lules animals." },
    { id: "vacuols", nom: "Vacúols", funcio: "Emmagatzemen substàncies i, en plantes, contribueixen a la turgència i a altres funcions." },
    { id: "cloroplasts", nom: "Cloroplasts", funcio: "Duen a terme la fotosíntesi en cèl·lules fotosintètiques." },
    { id: "citoesquelet", nom: "Citoesquelet", funcio: "Dona suport a la forma, l'organització interna i el moviment cel·lular." },
    { id: "centrosoma", nom: "Centrosoma", funcio: "Participa en l'organització dels microtúbuls en moltes cèl·lules animals." }
  ];

  const perId = new Map(estructures.map(item => [item.id, item]));
  const breus = ["Regula els intercanvis amb l'exterior.","Conté l'ADN eucariota i regula l'activitat.","Sintetitzen proteïnes.","Síntesi i processament inicial de proteïnes per a secreció o membranes.","Síntesi de lípids i regulació del calci.","Modifica, classifica i distribueix proteïnes i lípids.","Respiració cel·lular i producció d'ATP.","Digestió i reciclatge de materials.","Emmagatzematge i turgència en plantes.","Fotosíntesi.","Forma, organització interna i moviment cel·lular.","Organització dels microtúbuls en moltes cèl·lules animals."];
  const abreujada = new Map(estructures.map((item, i) => [item.id, breus[i]]));

  function barreja(array) {
    const copia = [...array];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  function inicialitzaJoc(arrel) {
    if (arrel.dataset.joInicialitzat === "true") return;
    arrel.dataset.joInicialitzat = "true";

    const graella = arrel.querySelector("[data-jo-graella]");
    const etiqueta = arrel.querySelector("[data-jo-etiqueta]");
    const enunciat = arrel.querySelector("[data-jo-enunciat]");
    const retroaccio = arrel.querySelector("[data-jo-retroaccio]");
    const correctesEl = arrel.querySelector("[data-jo-correctes]");
    const incorrectesEl = arrel.querySelector("[data-jo-incorrectes]");
    const pendentsEl = arrel.querySelector("[data-jo-pendents]");
    const final = arrel.querySelector("[data-jo-final]");
    const resum = arrel.querySelector("[data-jo-resum]");

    let ordre = [], posicio = 0, pendents = new Set(), cares = new Map();
    let correctes = 0, incorrectes = 0;

    function actualitzaMarcador() {
      correctesEl.textContent = String(correctes);
      incorrectesEl.textContent = String(incorrectes);
      pendentsEl.textContent = String(pendents.size);
    }

    function informa(missatge, tipus) {
      retroaccio.textContent = missatge;
      if (tipus) retroaccio.dataset.tipus = tipus;
      else delete retroaccio.dataset.tipus;
    }

    function mostraPregunta() {
      if (posicio >= ordre.length) {
        etiqueta.textContent = "RONDA COMPLETADA";
        enunciat.textContent = "Has identificat les 12 estructures i funcions.";
        final.hidden = false;
        resum.textContent = "Correctes: " + correctes + " · Incorrectes acumulades: " + incorrectes + ".";
        return;
      }
      const id = ordre[posicio];
      const item = perId.get(id);
      if (cares.get(id) === "nom") {
        etiqueta.textContent = "QUINA ESTRUCTURA FA AQUESTA FUNCIÓ?";
        enunciat.textContent = item.funcio;
      } else {
        etiqueta.textContent = "QUINA FUNCIÓ TÉ AQUESTA ESTRUCTURA?";
        enunciat.textContent = item.nom;
      }
    }

    function iniciaRonda(conservaErrors = false, missatge = "") {
      const ids = barreja(estructures.map(e => e.id));
      const ambFuncio = new Set(ids.slice(0, 6));
      cares = new Map(ids.map(id => [id, ambFuncio.has(id) ? "funcio" : "nom"]));
      ordre = barreja(ids);
      posicio = 0;
      pendents = new Set(ids);
      correctes = 0;
      if (!conservaErrors) incorrectes = 0;
      final.hidden = true;
      graella.replaceChildren();
      barreja(estructures).forEach(item => {
        const casella = document.createElement("div");
        casella.className = "jo-casella";
        const boto = document.createElement("button");
        boto.type = "button";
        boto.className = "jo-targeta";
        const cara = cares.get(item.id);
        boto.dataset.cara = cara;
        const contingut = cara === "nom" ? item.nom : abreujada.get(item.id);
        boto.setAttribute("aria-label", (cara === "nom" ? "Nom: " : "Funció: ") + contingut);
        const titol = document.createElement("span");
        titol.className = "jo-cara-etiqueta";
        titol.textContent = cara === "nom" ? "NOM" : "FUNCIÓ";
        const text = document.createElement("span");
        text.className = "jo-cara-contingut";
        text.textContent = contingut;
        boto.append(titol, text);
        boto.addEventListener("click", () => tria(item.id, boto, casella));
        casella.appendChild(boto);
        graella.appendChild(casella);
      });
      actualitzaMarcador();
      mostraPregunta();
      informa(missatge, missatge ? "error" : "");
    }

    function tria(id, boto, casella) {
      if (!pendents.has(id) || posicio >= ordre.length) return;
      if (id === ordre[posicio]) {
        correctes += 1;
        pendents.delete(id);
        boto.disabled = true;
        casella.classList.add("jo-resolta");
        casella.setAttribute("aria-label", "Targeta retirada");
        posicio += 1;
        actualitzaMarcador();
        mostraPregunta();
        informa("Correcte! " + perId.get(id).nom + ": " + perId.get(id).funcio, "correcte");
      } else {
        incorrectes += 1;
        const esperat = perId.get(ordre[posicio]);
        const triat = perId.get(id);
        iniciaRonda(true, "Incorrecte. La resposta era " + esperat.nom +
          " (" + esperat.funcio + "). Has triat " + triat.nom +
          ". La ronda s'ha reiniciat amb les 12 targetes barrejades.");
      }
    }

    arrel.querySelectorAll("[data-jo-reinicia]").forEach(boto => {
      boto.addEventListener("click", () => iniciaRonda(false));
    });

    iniciaRonda(false);
  }

  function inicialitzaPagina() {
    document.querySelectorAll("[data-joc-organuls]").forEach(inicialitzaJoc);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(inicialitzaPagina);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicialitzaPagina);
  } else {
    inicialitzaPagina();
  }
})();
