---
term: "Cross-site scripting (XSS)"
title: "Hvad er cross-site scripting?"
summary: "Hvordan en fremmeds kode kan ende med at køre inde på en hjemmeside, du stoler på, og hvorfor det er så farligt."
date: 2026-11-01
minutes: 2
other_lang_url: /explained/cross-site-scripting/
read_more:
  - { label: "MDN Web Docs: Cross-site scripting (XSS)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Attacks/XSS" }
short: |
  Cross-site scripting, eller XSS, er et angreb, hvor en fremmed får en hjemmeside til at køre sin kode, som om den var en del af siden. Det sker, når en side tager tekst udefra og sætter den ind på en side uden først at gøre den ufarlig.

  Fordi koden kører inde på siden, kan den gøre det samme som dig: læse dine data og handle i dit navn.
---
Cross-site scripting, ofte forkortet XSS, er et angreb. En fremmed får en hjemmeside til at køre sin kode, som om den var en del af siden.

Din browser holder hjemmesider adskilt. En side fra ét sted må ikke læse dine data på et andet. XSS kommer uden om den regel, fordi den fremmedes kode ikke kommer udefra. Den kører inde på selve den side, du stoler på.

> **Tænk på det sådan her:** Et firma lader alle hænge sedler op på opslagstavlen. En af sedlerne er skrevet, så den ligner en ordre fra chefen, og medarbejderne følger den. Ingen brød ind. Sedlen blev bare hængt op der, hvor man stoler på ordrer.

Det virker, når en side gør to ting. Den tager imod tekst, som en anden kan have skrevet, fx en kommentar, et link eller en søgning. Og den sætter teksten ind på en side uden først at gøre den ufarlig. Indeholder teksten kode, kører browseren den.

Når koden først kører, kan den alt det, sidens egen kode kan. Den kan læse, hvad der står på siden, og sende forespørgsler med dit login, så den kan handle i dit navn. Derfor kan ét link eller én kommentar være nok.

Hjemmesider forsvarer sig på flere måder. De laver specialtegn om til almindelig tekst, så kode bliver vist i stedet for kørt. De renser den HTML, de er nødt til at tillade, med et afprøvet bibliotek. Og de sætter en stram liste over, hvilke scripts browseren må køre, som et ekstra værn, hvis noget slipper igennem.

**Hvad betyder det for dig:** AI-chatapps viser nu grafer, forhåndsvisninger og små apps inde i chatten. Hvert af dem er et sted, hvor tekst udefra møder en side, og derfor en mulig vej ind. Rettelserne sker hos firmaet, men det er en god grund til at være varsom med links, også dem der ser almindelige ud.
