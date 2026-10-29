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
    const funcio = arrel.querySelector("[data-jo-funcio]");
    const retroaccio = arrel.querySelector("[data-jo-retroaccio]");
    const correctesEl = arrel.querySelector("[data-jo-correctes]");
    const incorrectesEl = arrel.querySelector("[data-jo-incorrectes]");
    const pendentsEl = arrel.querySelector("[data-jo-pendents]");
    const final = arrel.querySelector("[data-jo-final]");
    const resum = arrel.querySelector("[data-jo-resum]");

    let ordreFuncions = [];
    let actual = 0;
    let pendents = new Set();
    let correctes = 0;
    let incorrectes = 0;

    function actualitzaMarcador() {
      correctesEl.textContent = String(correctes);
      incorrectesEl.textContent = String(incorrectes);
      pendentsEl.textContent = String(pendents.size);
    }

    function escriuRetroaccio(missatge, esError) {
      retroaccio.textContent = missatge;
      retroaccio.dataset.tipus = esError ? "error" : "correcte";
    }

    function mostraFuncio() {
      if (actual < ordreFuncions.length) {
        const item = perId.get(ordreFuncions[actual]);
        funcio.textContent = item.funcio;
      } else {
        funcio.textContent = "Partida completada: totes les estructures identificades.";
        final.hidden = false;
        resum.textContent = "Correctes: " + correctes + " · Incorrectes: " + incorrectes + ". Pots tornar a jugar per consolidar les funcions.";
      }
    }

    function tria(id, boto, casella) {
      if (!pendents.has(id) || actual >= ordreFuncions.length) return;
      const itemTriat = perId.get(id);

      if (id === ordreFuncions[actual]) {
        correctes += 1;
        pendents.delete(id);
        boto.disabled = true;
        casella.classList.add("jo-resolta");
        casella.setAttribute("aria-label", "Targeta retirada");
        actual += 1;
        escriuRetroaccio("Correcte! " + itemTriat.nom + " correspon a la funció anterior.", false);
        mostraFuncio();
      } else {
        incorrectes += 1;
        escriuRetroaccio("No és " + itemTriat.nom + ". La seva funció és: " + itemTriat.funcio + " Torna-ho a provar.", true);
      }
      actualitzaMarcador();
    }

    function iniciaRonda() {
      ordreFuncions = barreja(estructures.map(item => item.id));
      actual = 0;
      pendents = new Set(estructures.map(item => item.id));
      correctes = 0;
      incorrectes = 0;
      retroaccio.textContent = "";
      delete retroaccio.dataset.tipus;
      final.hidden = true;
      graella.replaceChildren();

      barreja(estructures).forEach(item => {
        const casella = document.createElement("div");
        casella.className = "jo-casella";
        const boto = document.createElement("button");
        boto.type = "button";
        boto.className = "jo-targeta";
        boto.textContent = item.nom;
        boto.addEventListener("click", () => tria(item.id, boto, casella));
        casella.appendChild(boto);
        graella.appendChild(casella);
      });

      actualitzaMarcador();
      mostraFuncio();
    }

    arrel.querySelectorAll("[data-jo-reinicia]").forEach(boto => {
      boto.addEventListener("click", iniciaRonda);
    });

    iniciaRonda();
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
