# Gestió automàtica de noves figures

En publicar un fitxer gràfic nou dins de `docs/`, el flux de GitHub Actions executa `scripts/actualitza_inventari_figures.py`. Detecta PNG, JPG, JPEG, WebP i SVG, incorpora cada ruta nova a `figures/fitxes.json` amb l'estat **pendent de verificar** i actualitza els apartats automàtics de l'inventari global i del registre de la unitat corresponent. Per a una unitat encara no documentada crea la pàgina i la vincula a la navegació.

L'inventari inicial de 112 figures i els registres existents de la UD01 i la UD02 es conserven intactes. Només les **incorporacions posteriors** són gestionades automàticament.

## Què cal completar?

Cerca la ruta del fitxer nou a `figures/fitxes.json` i informa'n els camps: `tipus` (esquema, fotografia real, microfotografia, mapa, etc.), `origen` (inclosa la participació d'IA, si escau), `autor`, `font_url` (si existeix una font externa), `llicencia`, `escala` i `observacions`.

Canvia `revisat` a `true` **únicament després de comprovar aquestes dades**. El sistema no pot deduir l'autoria o la llicència d'una imatge pel simple fet d'analitzar-ne el nom o l'aspecte. Si algun camp obligatori és desconegut, la fitxa continuarà pendent.

Una revisió documental no substitueix la validació científica del dibuix ni una auditoria jurídica dels drets sobre elements de tercers. Les figures pendents no queden automàticament autoritzades sota CC BY-SA 4.0.

## Comprovar-ho manualment

A l'arrel del repositori es pot executar:

    python scripts/actualitza_inventari_figures.py

Una segona execució sense canvis és idempotent. GitHub Actions desa les actualitzacions resultants amb un canvi automàtic al repositori i publica la pàgina HTML mitjançant MkDocs.

La detecció no inclou fotografies incrustades dins PDF, SVG integrats com a text HTML ni cartografia que es carrega des d'altres servidors.
