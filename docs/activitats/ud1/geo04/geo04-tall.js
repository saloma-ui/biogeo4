/* GEO-04 · Sessió 10 · Com es reconstrueix un tall?
   Cada secció amb data-geo-step controla l'estat visual de l'SVG incrustat.
   L'SVG es carrega amb <object>, de manera que l'hem de manipular des del seu contentDocument. */

(function () {
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
        opacity: 0.16 !important;
        filter: saturate(0.45) brightness(1.05);
      }

      .geo04-context {
        opacity: 0.46 !important;
        filter: saturate(0.78);
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

    const hiHaEtiquetes = idsVisibles.size > 0;
    grup.style.display = hiHaEtiquetes ? "inline" : "none";

    IDS_ETIQUETES_SUPERFICIES.forEach((id) => {
      const element = docSVG.getElementById(id);
      if (!element) return;
      element.style.display = idsVisibles.has(id) ? "inline" : "none";
    });
  }

  function aplicaEstatAPassa(passa) {
    const destacats = separaLlista(passa.dataset.highlight);
    const context = separaLlista(passa.dataset.context);
    const etiquetesVisibles = separaLlista(passa.dataset.showLabels);

    passa.querySelectorAll(SELECTOR_OBJECTE).forEach((objecte) => {
      const docSVG = objecte.contentDocument;
      if (!docSVG || !docSVG.documentElement) return;

      injectaEstilsSVG(docSVG);

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
    });
  }

  function preparaObjecte(passa, objecte) {
    if (objecte.dataset.geo04Ready === "true") {
      aplicaEstatAPassa(passa);
      return;
    }

    objecte.dataset.geo04Ready = "true";

    objecte.addEventListener("load", () => {
      aplicaEstatAPassa(passa);
    });

    /* Si l'SVG ja és carregat quan inicialitzam la pàgina, no esperam un nou load. */
    if (objecte.contentDocument && objecte.contentDocument.documentElement) {
      aplicaEstatAPassa(passa);
    }
  }

  function activaPassa(passses, passaActiva) {
    passses.forEach((passa) => {
      const activa = passa === passaActiva;
      passa.classList.toggle("geo04-pas-actiu", activa);
      passa.setAttribute("data-geo-active", activa ? "true" : "false");
    });

    aplicaEstatAPassa(passaActiva);
  }

  function inicialitzaTallGeo04() {
    const passses = Array.from(document.querySelectorAll(SELECTOR_PASSA));
    if (!passses.length) return;

    passses.forEach((passa) => {
      passa.querySelectorAll(SELECTOR_OBJECTE).forEach((objecte) => {
        preparaObjecte(passa, objecte);
      });
    });

    if (window.__geo04TallObserver) {
      window.__geo04TallObserver.disconnect();
    }

    const ratios = new Map();

    const observer = new IntersectionObserver((entrades) => {
      entrades.forEach((entrada) => {
        ratios.set(entrada.target, entrada.isIntersecting ? entrada.intersectionRatio : 0);
      });

      let candidata = passses[0];
      let millorRatio = -1;

      passses.forEach((passa) => {
        const ratio = ratios.get(passa) || 0;
        if (ratio > millorRatio) {
          millorRatio = ratio;
          candidata = passa;
        }
      });

      if (millorRatio > 0) {
        activaPassa(passses, candidata);
      }
    }, {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: [0.05, 0.2, 0.4, 0.6, 0.8]
    });

    passses.forEach((passa) => {
      ratios.set(passa, 0);
      observer.observe(passa);
    });

    window.__geo04TallObserver = observer;

    /* Estat inicial coherent fins que l'IntersectionObserver calcula la primera passa visible. */
    activaPassa(passses, passses[0]);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(inicialitzaTallGeo04);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicialitzaTallGeo04);
  } else {
    inicialitzaTallGeo04();
  }
})();
