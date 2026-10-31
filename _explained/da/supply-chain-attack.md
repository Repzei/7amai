---
term: "Supply chain-angreb"
title: "Hvad er et supply chain-angreb?"
summary: "Hvorfor angribere gemmer skadelig kode i software, du allerede stoler på, og hvad du kan gøre."
date: 2026-10-31
minutes: 2
other_lang_url: /explained/supply-chain-attack/
read_more:
  - { label: "CISA og NIST: Defending against software supply chain attacks", url: "https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508_1.pdf" }
  - { label: "Visual Studio Code: Extension runtime security", url: "https://code.visualstudio.com/docs/configure/extensions/extension-runtime-security" }
short: |
  Et supply chain-angreb gemmer skadelig kode i software, før den når frem til dig. Angriberen bryder ikke ind på din computer. I stedet ændrer de noget, du allerede stoler på, fx en opdatering eller en udvidelse.

  Fordi softwaren kommer et velkendt sted fra, installerer du den uden at tænke over det. Alle, der får den version, bliver ramt på én gang.
---
Et supply chain-angreb gemmer skadelig kode i software på vej til dig. Angriberen bryder ikke ind på din computer. I stedet ændrer de softwaren, før den når frem, så du selv installerer den.

> **Tænk på det sådan her:** En pakke fra din faste butik bliver åbnet på vejen. Nogen lægger noget ned i den og lukker den igen. Du åbner den uden bekymring, fordi du kender afsenderen.

Den amerikanske sikkerhedsmyndighed CISA og standardorganisationen NIST beskriver, hvordan det virker. En angriber kommer ind i et softwarefirmas systemer og ændrer softwaren, før den sendes ud. Den forgiftede software angriber så kundens data eller computer. Det kan ske med et nyt program, men også med en almindelig opdatering.

CISA nævner tre almindelige veje ind. Angribere kaprer opdateringer, så en normal opdatering bærer den skadelige kode. De bryder kodesigneringen, det digitale segl, der viser, hvem der har lavet et program. Eller de sniger dårlig kode ind i open source-kode, som mange programmer bruger. En butik med udvidelser kan også være en vej ind, hvis angribere får udgivet en manipuleret version under et navn, man stoler på.

Det er derfor, angrebet virker så godt. Alle, der installerer den version, bliver ramt på én gang, og det sædvanlige råd, "installér kun fra kilder, du stoler på", hjælper ikke. Kilden var jo til at stole på.

Udvidelser til kode-editorer er et eksempel. Microsoft skriver, at en udvidelse i deres editor, VS Code, har de samme rettigheder som editoren selv. Den kan læse og skrive dine filer og gå på nettet.

**Hvad betyder det for dig:** Installér færre udvidelser, hold styr på, hvad du har, og reagér hurtigt, når en butik advarer om en dårlig version. Det er ikke altid nok at fjerne softwaren, for den skadelige kode kan have efterladt noget.
