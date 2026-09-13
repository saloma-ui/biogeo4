(() => {
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

  const substitucions = [
    ["GEO-01 · Llegim un paisatge", "Llegim el paisatge (UD01-A1)"],
    ["GEO-02 · Del mapa al relleu", "Del mapa al relleu (UD01-A2)"],
    ["GEO-03 · Tectònica en dades", "Tectònica en dades (UD01-A5)"],
    ["GEO-04 · Llegim el temps a les roques", "Llegim el temps a les roques (UD01-A6)"],
    ["G1 · Reconstruïm una història geològica", "Reconstruïm una història geològica (UD01-A7)"],
    ["S15 · Quan un procés natural esdevé risc?", "Quan un procés natural esdevé risc? (UD01-A8)"],
    ["G2 · On construiríem?", "On construiríem? (UD01-A9)"],
    ["G2 · Comprendre el risc", "Comprendre el risc (UD01-A10)"]
  ];

  const refs = [
    [/\bGEO-01\b/g, "Llegim el paisatge"],
    [/\bGEO-02\b/g, "Del mapa al relleu"],
    [/\bGEO-03\b/g, "Tectònica en dades"],
    [/\bGEO-04\b/g, "Llegim el temps a les roques"],
    [/\bG1\b/g, "Reconstruïm una història geològica"],
    [/\bG2\b/g, "On construiríem?"],
    [/\bS15\b/g, "Quan un procés natural esdevé risc?"]
  ];

  function activitatActual() {
    const pathname = window.location.pathname;
    return activitatsUD01.find((a) => pathname.includes(a.path));
  }

  function canviaTextVisible(root) {
    if (!root) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);

    for (const textNode of nodes) {
      const parent = textNode.parentElement;
      if (!parent) continue;
      if (parent.closest("script, style, code, pre, textarea, input, select, option, [data-no-nomenclatura]")) continue;

      let text = textNode.nodeValue;
      if (!text || !text.trim()) continue;

      for (const [antic, nou] of substitucions) text = text.split(antic).join(nou);
      for (const [patro, nou] of refs) text = text.replace(patro, nou);

      if (text !== textNode.nodeValue) textNode.nodeValue = text;
    }
  }

  function normalitzaNomenclatura() {
    if (!window.location.pathname.includes("/activitats/ud1/")) return;

    const main = document.querySelector(".md-content");
    canviaTextVisible(main);

    const activitat = activitatActual();
    if (!activitat || !main) return;

    const titolVisible = `${activitat.title} (${activitat.code})`;
    const h1 = main.querySelector("h1");
    if (h1) h1.textContent = titolVisible;

    if (document.title) {
      const site = "Biologia i Geologia — 4t d'ESO";
      document.title = `${titolVisible} - ${site}`;
    }
  }

  document.addEventListener("DOMContentLoaded", normalitzaNomenclatura);

  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(normalitzaNomenclatura);
  }
})();
