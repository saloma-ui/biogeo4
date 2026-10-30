#!/usr/bin/env python3
"""Sincronitza els fitxers d'imatge amb les fitxes i les pàgines de procedència.

El primer inventari (112 recursos) és històric. Els elements posteriors es
registren a figures/fitxes.json sense inventar autoria ni llicència.
"""
from __future__ import annotations

import json
import os
from pathlib import Path
import re
from urllib.parse import quote, unquote

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
METADATA = ROOT / "figures" / "fitxes.json"
CATALOG = DOCS / "inventari-visual.md"
EXTENSIONS = {".png", ".jpg", ".jpeg", ".webp", ".svg"}
BASE_URL = "https://github.com/saloma-ui/biogeo4/blob/main/"
START = "<!-- FIGURES_AUTO_INICI -->"
END = "<!-- FIGURES_AUTO_FI -->"
NAV_START = "      # FIGURES_AUTO_INICI"
NAV_END = "      # FIGURES_AUTO_FI"


def load(path):
    return path.read_text(encoding="utf-8")


def save(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and load(path) == data:
        return
    path.write_text(data, encoding="utf-8")
    print("Actualitzat:", path.relative_to(ROOT))


def managed(text, content, start=START, end=END):
    replacement = start + "\n" + content.strip() + "\n" + end
    if (start in text) != (end in text):
        raise ValueError("Marcadors incomplets: revisar el fitxer abans de continuar")
    if start in text:
        if text.count(start) != 1 or text.count(end) != 1:
            raise ValueError("Marcadors duplicats")
        before, rest = text.split(start, 1)
        _, after = rest.split(end, 1)
        return before + replacement + after
    return text.rstrip() + "\n\n" + replacement + "\n"


def unit(path):
    match = re.search(r"(?:^|/)ud0*(\d+)(?=/)", path, re.I)
    return int(match.group(1)) if match else None


def table_value(x):
    return str(x or "—").replace("|", r"\|").replace("\n", " ").strip()


def complete(f):
    return (f.get("revisat") is True
            and all(f.get(k) not in ("", "pendent", None)
                    for k in ("tipus", "origen", "llicencia"))
            and bool(f.get("autor") or f.get("font_url")))


def make_table(paths, records):
    if not paths:
        return "Cap figura incorporada després del registre inicial."
    lines = [
        "| Fitxer | Tipus | Origen | Autor o responsable | Llicència | Escala i observacions | Estat |",
        "|:--|:--|:--|:--|:--|:--|:--|",
    ]
    for path in paths:
        f = records[path]
        filename = Path(path).name
        href = BASE_URL + quote(path, safe="/")
        provenance = table_value(f.get("origen"))
        source = str(f.get("font_url", "")).strip()
        if source.startswith("https://"):
            provenance += " · [Font externa](" + source + ")"
        state = "**Documentat i revisat pel docent**" if complete(f) else "**Pendent de verificar**"
        license_text = table_value(f.get("llicencia"))
        if not complete(f):
            license_text += " · sense presumir drets sobre recursos externs"
        details = table_value(f.get("escala")) + "; " + table_value(f.get("observacions"))
        lines.append(
            f"| [{filename}]({href}) | {table_value(f.get('tipus'))} | {provenance} | "
            f"{table_value(f.get('autor'))} | {license_text} | {details} | {state} |"
        )
    return "\n".join(lines)


def warning(message):
    print("::warning::" + message.replace("\n", " "))


def main():
    paths = {
        path.relative_to(ROOT).as_posix()
        for path in DOCS.rglob("*")
        if path.is_file() and path.suffix.lower() in EXTENSIONS
    }
    text = load(CATALOG)
    historical_text = text.split(START, 1)[0]
    original = {
        unquote(m.group(1))
        for m in re.finditer(
            r"https://github[.]com/saloma-ui/biogeo4/blob/main/([^\s)]+)",
            historical_text,
        )
    }
    if len(original) < 100:
        raise RuntimeError("Inventari inicial incomplet; cap fitxer no s'ha de sobreescriure.")

    ledger = json.loads(load(METADATA))
    if ledger.get("versio") != 1 or not isinstance(ledger.get("fitxes"), dict):
        raise RuntimeError("Format de figures/fitxes.json no compatible")
    records = ledger["fitxes"]
    new = sorted(paths - original - set(records))
    for path in new:
        records[path] = dict(
            tipus="pendent", origen="pendent", autor="", font_url="",
            llicencia="pendent", escala="", observacions="", revisat=False,
        )
        warning("Figura incorporada sense fitxa de procedència revisada: " + path)

    for path in sorted(original - paths):
        warning("Fitxer del registre inicial que ja no existeix: " + path)
    for path in sorted(set(records) - paths):
        warning("Fitxa de figura retirada del web (conservada per traçabilitat): " + path)

    save(METADATA, json.dumps(ledger, indent=2, ensure_ascii=False, sort_keys=True) + "\n")
    additions = sorted((paths & set(records)) - original)
    pending = [p for p in additions if not complete(records[p])]
    for path in pending:
        if path not in new:
            warning("Fitxa pendent de revisar: " + path)

    global_section = (
        "## Figures afegides després del registre inicial\n\n"
        "Aquesta secció s'actualitza automàticament. GitHub registra els "
        "fitxers, **però no pot verificar-ne automàticament l'autoria, "
        "la naturalesa, les dades ni la llicència**.\n\n"
        f"**Fitxers visuals actuals:** {len(paths)}. "
        f"**Incorporacions posteriors:** {len(additions)}. "
        f"**Fitxes pendents:** {len(pending)}.\n\n"
        + make_table(additions, records)
    )
    save(CATALOG, managed(text, global_section))

    units = sorted({unit(p) for p in additions if unit(p) is not None})
    for num in sorted(set(units) | {1, 2}):
        page = DOCS / f"registre-figures-ud{num}.md"
        own = [p for p in additions if unit(p) == num]
        section = (
            "## Figures incorporades posteriorment · registre automàtic\n\n"
            "Les fitxes pendents s'han de verificar abans d'atribuir "
            "autoria o drets de reutilització.\n\n"
            + make_table(own, records)
        )
        if page.exists():
            save(page, managed(load(page), section))
        else:
            preface = (
                f"---\ntitle: Figures de la UD{num:02d}\n---\n\n"
                f"# Figures de la UD{num:02d}\n\n"
                "Aquest registre s'actualitza automàticament a partir de "
                "les fitxes de procedència de les noves figures.\n"
            )
            save(page, managed(preface, section))

    extra_units = [n for n in units if n >= 3]
    nav = ROOT / "mkdocs.yml"
    nav_links = "\n".join(
        f"      - Figures de la UD{n:02d}: registre-figures-ud{n}.md"
        for n in extra_units
    )
    save(nav, managed(load(nav), nav_links, NAV_START, NAV_END))
    info = DOCS / "informacio/index.md"
    info_links = "\n".join(
        f"- [**Figures de la UD{n:02d}**](../registre-figures-ud{n}.md)"
        " — Fitxes de procedència de noves figures."
        for n in extra_units
    )
    save(info, managed(load(info), info_links))

    if os.getenv("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a", encoding="utf-8") as f:
            f.write("### Inventari automàtic de figures\n\n")
            f.write(f"- Fitxers gràfics actuals: **{len(paths)}**\n")
            f.write(f"- Fitxers nous detectats: **{len(new)}**\n")
            f.write(f"- Fitxes pendents de verificar: **{len(pending)}**\n")
            f.write("- La procedència i els drets no s'infereixen automàticament.\n")
    print(f"Inventari: {len(paths)} fitxers, {len(new)} nous, {len(pending)} pendents.")


if __name__ == "__main__":
    main()
