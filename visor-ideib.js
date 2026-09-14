/* Visor IDEIB reutilitzable per a MkDocs Material.
   Carrega Leaflet + Proj4Leaflet de la mateixa IDEIB només si cal.
   Ús mínim:
   <div class="visor-ideib" data-ideib-visor
        data-ideib-lat="39.610055"
        data-ideib-lon="3.283874"
        data-ideib-zoom="13"></div>
*/

(function () {
  const SELECTOR = "[data-ideib-visor]";

  const RECURSOS = {
    leafletCss: "https://ideib.caib.es/api_ideib/leaflet.css",
    leafletJs: "https://ideib.caib.es/api_ideib/leaflet.js",
    proj4Js: "https://ideib.caib.es/api_ideib/Proj4Leaflet/lib/proj4-compressed.js",
    proj4LeafletJs: "https://ideib.caib.es/api_ideib/Proj4Leaflet/src/proj4leaflet.js",
    confIdeibJs: "https://ideib.caib.es/api_ideib/conf_ideib.js"
  };

  const ORTO_TILE = "https://ideib.caib.es/geoserveis/rest/services/imatges/GOIB_Orto_IB/MapServer/tile/{z}/{y}/{x}";

  let promesaIDEIB = null;

  function carregaCSS(href, id) {
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  }

  function carregaScript(src, id) {
    return new Promise((resolve, reject) => {
      const existent = document.getElementById(id);
      if (existent) {
        if (existent.dataset.carregat === "true") {
          resolve();
          return;
        }
        existent.addEventListener("load", resolve, { once: true });
        existent.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = false;
      script.addEventListener("load", () => {
        script.dataset.carregat = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function asseguraIDEIB() {
    if (window.L && window.crs25831) return Promise.resolve();
    if (promesaIDEIB) return promesaIDEIB;

    carregaCSS(RECURSOS.leafletCss, "ideib-leaflet-css");

    promesaIDEIB = carregaScript(RECURSOS.leafletJs, "ideib-leaflet-js")
      .then(() => carregaScript(RECURSOS.proj4Js, "ideib-proj4-js"))
      .then(() => carregaScript(RECURSOS.proj4LeafletJs, "ideib-proj4leaflet-js"))
      .then(() => carregaScript(RECURSOS.confIdeibJs, "ideib-conf-js"));

    return promesaIDEIB;
  }

  function nombre(valor, defecte) {
    const resultat = Number(valor);
    return Number.isFinite(resultat) ? resultat : defecte;
  }

  function creaControlRecentrar(mapa, centre, zoom) {
    const Control = L.Control.extend({
      options: { position: "topleft" },
      onAdd: function () {
        const contenidor = L.DomUtil.create("div", "leaflet-bar");
        const boto = L.DomUtil.create("button", "visor-ideib__recentrar", contenidor);
        boto.type = "button";
        boto.title = "Torna a Sant Llorenç";
        boto.setAttribute("aria-label", "Torna a Sant Llorenç");
        boto.textContent = "⌂";
        L.DomEvent.disableClickPropagation(contenidor);
        L.DomEvent.on(boto, "click", function () {
          mapa.setView(centre, zoom);
        });
        return contenidor;
      }
    });

    new Control().addTo(mapa);
  }

  async function inicialitzaVisor(element) {
    if (element.dataset.ideibReady === "true" || element.dataset.ideibLoading === "true") return;
    element.dataset.ideibLoading = "true";

    const lat = nombre(element.dataset.ideibLat, 39.610055);
    const lon = nombre(element.dataset.ideibLon, 3.283874);
    const zoom = nombre(element.dataset.ideibZoom, 13);
    const centre = [lat, lon];

    element.innerHTML = `
      <div class="visor-ideib__marc">
        <div class="visor-ideib__mapa" role="region" aria-label="Ortofotografia interactiva de Sant Llorenç des Cardassar"></div>
        <div class="visor-ideib__estat">Carregant l'ortofotografia oficial d'IDEIB…</div>
      </div>
      <p class="visor-ideib__peu">Ortofotografia oficial IDEIB · apropa't amb +/− o amb el gest de pinça i segueix el traçat del torrent pel nucli urbà.</p>
    `;

    try {
      await asseguraIDEIB();

      const contenidorMapa = element.querySelector(".visor-ideib__mapa");
      const mapa = L.map(contenidorMapa, {
        crs: crs25831,
        center: centre,
        zoom: zoom,
        zoomControl: true,
        scrollWheelZoom: false,
        continuousWorld: true,
        worldCopyJump: false,
        minZoom: 9,
        maxZoom: 16
      });

      L.tileLayer(ORTO_TILE, {
        minZoom: 0,
        maxZoom: 16,
        attribution: '<a href="https://ideib.caib.es" target="_blank" rel="noopener">ICGIB · GOIB · IDEIB</a>'
      }).addTo(mapa);

      mapa.attributionControl.setPrefix("");
      L.control.scale({ imperial: false, position: "bottomleft" }).addTo(mapa);
      creaControlRecentrar(mapa, centre, zoom);

      element.__ideibMap = mapa;
      element.dataset.ideibReady = "true";
      element.dataset.ideibLoading = "false";

      requestAnimationFrame(() => mapa.invalidateSize(false));
      setTimeout(() => mapa.invalidateSize(false), 250);
    } catch (error) {
      element.dataset.ideibLoading = "false";
      const estat = element.querySelector(".visor-ideib__estat");
      if (estat) {
        estat.innerHTML = 'No s\'ha pogut carregar el visor. <a href="https://ideib.caib.es" target="_blank" rel="noopener">Obre IDEIB en una pestanya nova</a>.';
      }
      console.error("Error carregant el visor IDEIB", error);
    }
  }

  function inicialitzaVisorsIDEIB() {
    document.querySelectorAll(SELECTOR).forEach(inicialitzaVisor);
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(inicialitzaVisorsIDEIB);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicialitzaVisorsIDEIB);
  } else {
    inicialitzaVisorsIDEIB();
  }
})();
