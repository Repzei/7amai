---
term: "API-nøgle"
title: "Hvad er en API-nøgle?"
summary: "Den hemmelige kode, der lader et program bruge en tjeneste i dit navn, og hvorfor den aldrig må stå i din kode."
date: 2026-11-08
minutes: 2
other_lang_url: /explained/api-key/
read_more:
  - { label: "OWASP: Secrets Management Cheat Sheet (engelsk)", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" }
  - { label: "Google Cloud: Manage API keys (engelsk)", url: "https://docs.cloud.google.com/docs/authentication/api-keys" }
short: |
  En API-nøgle er en lang hemmelig kode, som et program sender med hver forespørgsel til en tjeneste, fx en AI-model eller en database i skyen. Tjenesten bruger den til at vide, hvem der spørger, og hvem der betaler.

  Adgangskoder, tokens og nøgler er alle "hemmeligheder". Den, der har en, kan handle i dit navn, så den hører hjemme et sikkert sted, aldrig i delt kode.
---
En API-nøgle er en lang hemmelig kode, som et program sender til en tjeneste, hver gang det beder om noget. Tjenesten bruger den til at vide, hvilken konto der spørger, og hvem der får regningen.

Apps taler med AI-modeller, betalingstjenester og databaser i skyen gennem et API: en fast måde, programmer taler sammen på. Nøglen følger med hvert kald. Der er intet ansigt og ingen loginskærm, kun koden.

> **Tænk på det sådan her:** En API-nøgle er som kortet, der åbner døren på arbejdet. Døren tjekker ikke, hvem du er. Den tjekker kun kortet. Den, der finder kortet, kommer ind, og besøgene bliver logget i dit navn.

API-nøgler hører til en større gruppe, som udviklere kalder "hemmeligheder": adgangskoder, tokens, nøgler og logins. De har én svaghed til fælles. En hemmelighed virker for alle, der har en kopi af den.

Derfor giver sikkerhedsguides de samme råd. Gem hemmeligheder et sikkert sted, og henvis til dem ved navn, fx `$DB_URL`, i stedet for at skrive dem ind i kode eller kommandoer. Begræns, hvad hver nøgle kan. Og er en nøgle lækket, så annullér den, og lav en ny med det samme. Det er ikke nok at slette filen, for den gamle kopi kan allerede være i andres hænder.

**Hvad betyder det for dig:** Lader du en AI-agent køre kommandoer for dig, kan den se og gemme dine hemmeligheder. Behandl dens indstillinger og logfiler som en fil med adgangskoder, og hold dem ude af alt, du deler.
