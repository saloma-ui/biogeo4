/* GEO-04 · Sessió 10 · Com es reconstrueix un tall?
   Un únic SVG persistent respon al pas actiu de la seqüència. */

(function () {
  const SELECTOR_BLOC = "[data-geo-reconstruccio]";
  const SELECTOR_PASSA = ".geo04-reconstruccio-pas[data-geo-step]";
  const SELECTOR_OBJECTE = ".geo04-tall-object";
  const IDS_ETIQUETES_SUPERFICIES = [
    "label-superficie-erosiva",
    "fletxa-superficie-erosiva",
    "label-superficie-actual",
    "fletxa-superficie-actual"
  ];

  function separaLlista(valor) {
    return new Set((valor || "").trim().split(/\s+/).filter(Boolean));
  }

  function injectaEstilsSVG(docSVG) {
    if (!docSVG || docSVG.getElementById("geo04-estils-interactius")) return;

    const style = docSVG.createElementNS("http://www.w3.org/2000/svg", "style");
    style.setAttribute("id", "geo04-estils-interactius");
    style.textContent = `
      [data-feature] {
        transition: opacity 240ms ease, filter 240ms ease;
      }

      .geo04-dim {
        opacity: 0.14 !important;
        filter: saturate(0.42) brightness(1.07);
      }

      .geo04-context {
        opacity: 0.48 !important;
        filter: saturate(0.76);
      }

      .geo04-highlight {
        opacity: 1 !important;
        filter: saturate(1.12) drop-shadow(0 0 4px rgba(0, 0, 0, 0.18));
      }

      @media (prefers-reduced-motion: reduce) {
        [data-feature] {
          transition: none;
        }
      }
    `;

    docSVG.documentElement.appendChild(style);
  }

  function configuraEtiquetesSuperficies(docSVG, idsVisibles) {
    const grup = docSVG.getElementById("etiquetes-superficies");
    if (!grup) return;

    grup.style.display = idsVisibles.size > 0 ? "inline" : "none";

    IDS_ETIQUETES_SUPERFICIES.forEach((id) => {
      const element = docSVG.getElementById(id);
      if (!element) return;
      element.style.display = idsVisibles.has(id) ? "inline" : "none";
    });
  }

  function aplicaEstat(objecte, passa) {
    if (!objecte || !passa) return false;

    const docSVG = objecte.contentDocument;
    if (!docSVG || !docSVG.documentElement) return false;

    injectaEstilsSVG(docSVG);

    const destacats = separaLlista(passa.dataset.highlight);
    const context = separaLlista(passa.dataset.context);
    const etiquetesVisibles = separaLlista(passa.dataset.showLabels);

    docSVG.querySelectorAll("[data-feature]").forEach((element) => {
      const feature = element.getAttribute("data-feature");
      element.classList.remove("geo04-dim", "geo04-context", "geo04-highlight");

      if (destacats.has(feature)) {
        element.classList.add("geo04-highlight");
      } else if (context.has(feature)) {
        element.classList.add("geo04-context");
      } else {
        element.classList.add("geo04-dim");
      }
    });

    configuraEtiquetesSuperficies(docSVG, etiquetesVisibles);
    return true;
  }

  function actualitzaPeu(bloc, passa) {
    const peu = bloc.querySelector(".geo04-tall-peu");
    if (!peu) return;

    const titol = passa.querySelector("h1, h2, h3");
    peu.textContent = titol ? titol.textContent.trim() : "";
  }

  function activaPassa(bloc, passses, objecte, passaActiva) {
    if (!passaActiva || bloc.dataset.geoActiveStep === passaActiva.dataset.geoStep) return;

    bloc.dataset.geoActiveStep = passaActiva.dataset.geoStep || "";

    passses.forEach((passa) => {
      const activa = passa === passaActiva;
      passa.classList.toggle("geo04-pas-actiu", activa);
      passa.setAttribute("data-geo-active", activa ? "true" : "false");
    });

    aplicaEstat(objecte, passaActiva);
    actualitzaPeu(bloc, passaActiva);
  }

  function trobaPassaMesPropera(passses) {
    const referencia = window.innerHeight * 0.46;
    let millor = null;
    let distancia = Infinity;

    passses.forEach((passa) => {
      const rect = passa.getBoundingClientRect();
      const centre = rect.top + Math.min(rect.height, window.innerHeight) / 2;
      const d = Math.abs(centre - referencia);

      if (rect.bottom > 0 && rect.top < window.innerHeight && d < distancia) {
        millor = passa;
        distancia = d;
      }
    });

    return millor;
  }

  function inicialitzaBloc(bloc) {
    if (bloc.dataset.geoReady === "true") return;

    const passses = Array.from(bloc.querySelectorAll(SELECTOR_PASSA));
    const objecte = bloc.querySelector(SELECTOR_OBJECTE);
    if (!passses.length || !objecte) return;

    bloc.dataset.geoReady = "true";

    let pendentRAF = false;

    const recalcula = () => {
      pendentRAF = false;
      const candidata = trobaPassaMesPropera(passses);
      if (candidata) activaPassa(bloc, passses, objecte, candidata);
    };

    const programaRecalcul = () => {
      if (pendentRAF) return;
      pendentRAF = true;
      window.requestAnimationFrame(recalcula);
    };

    objecte.addEventListener("load", () => {
      const activa = passses.find((passa) => passa.dataset.geoActive === "true") || passses[0];
      aplicaEstat(objecte, activa);
      actualitzaPeu(bloc, activa);
    });

    const observer = new IntersectionObserver(() => {
      programaRecalcul();
    }, {
      root: null,
      rootMargin: "-12% 0px -18% 0px",
      threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
    });

    passses.forEach((passa) => observer.observe(passa));

    window.addEventListener("scroll", programaRecalcul, { passive: true });
    window.addEventListener("resize", programaRecalcul, { passive: true });

    bloc.__geo04Observer = observer;
    bloc.__geo04Recalcula = programaRecalcul;

    /* Estat inicial: pas 1. Quan l'usuari comença a desplaçar-se, la selecció
       passa a dependre de la posició real dels passos a la finestra. */
    activaPassa(bloc, passses, objecte, passses[0]);

    if (objecte.contentDocument && objecte.contentDocument.documentElement) {
      aplicaEstat(objecte, passses[0]);
      actualitzaPeu(bloc, passses[0]);
    }

    programaRecalcul();
  }

  function inicialitzaTallGeo04() {
    document.querySelectorAll(SELECTOR_BLOC).forEach(inicialitzaBloc);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(inicialitzaTallGeo04);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicialitzaTallGeo04);
  } else {
    inicialitzaTallGeo04();
  }
})();
