function inicialitzaInteraccionsPresentacio() {
  document.querySelectorAll("[data-pv-quiz]").forEach((quiz) => {
    if (quiz.dataset.pvReady === "true") return;
    quiz.dataset.pvReady = "true";

    const opcions = quiz.querySelectorAll(".pv-opcio");
    const feedbacks = quiz.querySelectorAll(".pv-feedback");

    opcions.forEach((boto) => {
      boto.addEventListener("click", () => {
        opcions.forEach((opcio) => {
          const seleccionada = opcio === boto;
          opcio.classList.toggle("pv-seleccionada", seleccionada);
          opcio.setAttribute("aria-pressed", seleccionada ? "true" : "false");
        });

        feedbacks.forEach((feedback) => {
          feedback.hidden = feedback.dataset.feedbackId !== boto.dataset.feedback;
        });
      });
    });
  });

  document.querySelectorAll("[data-pv-classificacio]").forEach((bloc) => {
    if (bloc.dataset.pvReady === "true") return;
    bloc.dataset.pvReady = "true";

    bloc.querySelectorAll(".pv-terme").forEach((boto) => {
      boto.setAttribute("aria-expanded", "false");

      boto.addEventListener("click", () => {
        if (boto.dataset.pvResolved === "true") return;

        const etiqueta = document.createElement("span");
        etiqueta.className = "pv-etiqueta";
        etiqueta.textContent = boto.dataset.resposta;
        boto.appendChild(etiqueta);
        boto.dataset.pvResolved = "true";
        boto.setAttribute("aria-expanded", "true");
      });
    });
  });
}

const activitatsUD01 = [
  { path: "/activitats/ud1/geo-01/", title: "Llegim el paisatge", code: "UD01-A1" },
  { path: "/activitats/ud1/geo02/", title: "Del mapa al relleu", code: "UD01-A2" },
  { path: "/activitats/ud1/interior-terra/", title: "Com sabem què hi ha dins la Terra?", code: "UD01-A3" },
  { path: "/activitats/ud1/terra-fragmentada/", title: "Una Terra fragmentada", code: "UD01-A4" },
  { path: "/activitats/ud1/geo03/", title: "Tectònica en dades", code: "UD01-A5" },
  { path: "/activitats/ud1/geo04/", title: "Llegim el temps a les roques", code: "UD01-A6" },
  { path: "/activitats/ud1/g1/", title: "Reconstruïm una història geològica", code: "UD01-A7" },
  { path: "/activitats/ud1/riscos/", title: "Quan un procés natural esdevé risc?", code: "UD01-A8" },
  { path: "/activitats/ud1/g2-risc-evidencia/", title: "Comprendre el risc", code: "UD01-A10" },
  { path: "/activitats/ud1/g2/", title: "On construiríem?", code: "UD01-A9" }
];

const substitucionsNomenclatura = [
  ["GEO-01 · Llegim un paisatge", "Llegim el paisatge (UD01-A1)"],
  ["GEO-02 · Del mapa al relleu", "Del mapa al relleu (UD01-A2)"],
  ["GEO-03 · Tectònica en dades", "Tectònica en dades (UD01-A5)"],
  ["GEO-04 · Llegim el temps a les roques", "Llegim el temps a les roques (UD01-A6)"],
  ["G1 · Reconstruïm una història geològica", "Reconstruïm una història geològica (UD01-A7)"],
  ["S15 · Quan un procés natural esdevé risc?", "Quan un procés natural esdevé risc? (UD01-A8)"],
  ["G2 · On construiríem?", "On construiríem? (UD01-A9)"],
  ["G2 · Comprendre el risc", "Comprendre el risc (UD01-A10)"],
  ["GEO-01", "Llegim el paisatge"],
  ["GEO-02", "Del mapa al relleu"],
  ["GEO-03", "Tectònica en dades"],
  ["GEO-04", "Llegim el temps a les roques"],
  ["G1", "Reconstruïm una història geològica"],
  ["G2", "On construiríem?"],
  ["S15", "Quan un procés natural esdevé risc?"]
];

function substitueixTextVisible(root) {
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);

  nodes.forEach((textNode) => {
    const parent = textNode.parentElement;
    if (!parent) return;
    if (parent.closest("script, style, code, pre, textarea, input, select, option, [data-no-nomenclatura]")) return;

    let text = textNode.nodeValue;
    if (!text || !text.trim()) return;

    substitucionsNomenclatura.forEach(([antic, nou]) => {
      text = text.split(antic).join(nou);
    });

    if (text !== textNode.nodeValue) textNode.nodeValue = text;
  });
}

function normalitzaNomenclaturaUD01() {
  if (!window.location.pathname.includes("/activitats/ud1/")) return;

  const main = document.querySelector(".md-content");
  const nav = document.querySelector(".md-sidebar--primary");

  substitueixTextVisible(main);
  substitueixTextVisible(nav);

  const activitat = activitatsUD01.find((a) => window.location.pathname.includes(a.path));
  if (!activitat || !main) return;

  const titolVisible = `${activitat.title} (${activitat.code})`;
  const h1 = main.querySelector("h1");
  if (h1) h1.textContent = titolVisible;

  document.title = `${titolVisible} - Biologia i Geologia — 4t d'ESO`;
}

function inicialitzaPagina() {
  inicialitzaInteraccionsPresentacio();
  normalitzaNomenclaturaUD01();
}

if (typeof document$ !== "undefined") {
  document$.subscribe(inicialitzaPagina);
} else if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicialitzaPagina);
} else {
  inicialitzaPagina();
}
