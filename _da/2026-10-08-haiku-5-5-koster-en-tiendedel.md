---
redirect_from: /2026/10/08/
title: "Claude Haiku 5.5: 1M kontekst til $0,10 pr. million input-tokens"
summary: "Anthropic har lanceret Haiku 5.5 med markant lavere priser og 1M-token kontekst, og i dag skal du også tjekke den nye usage policy og LMCache-hullet, hvis du kører egne servere."
date: 2026-10-08 07:00:00 +0200
---

## Modeller og priser

### Claude Haiku 5.5 sænker prisen kraftigt {#haiku-5-5}
Anthropic lancerede onsdag Haiku 5.5, den tredje model i 5.5-familien efter Opus og Sonnet. Ifølge Startup Fortune koster den $0,10 pr. million input-tokens og $0,50 pr. million output-tokens under 100.000 tokens i prompten, og $0,50/$2,50 over. Kontekstvinduet er 1M tokens (mod 200.000 for Haiku 4.5), og den skal være den første Haiku med en justerbar effort-indstilling. Den er live på Claude Platform, AWS, Google Cloud og Azure. Anthropic har ifølge artiklen ikke offentliggjort SWE-bench- eller agent-resultater endnu.

> **Betyder for dig:** Til høj-volumen opgaver i appen (klassificering, korte coach-svar, opsummering af træningslogs) kan regnestykket ændre sig. Test den mod din nuværende model på dine egne prompts, før du skifter. Tallene er fra en sekundær kilde, så bekræft priserne i konsollen.

Kilde: [Startup Fortune](https://startupfortune.com/anthropic-launches-claude-haiku-55-with-prices-cut-up-to-90-percent) · [Anthropic news](https://www.anthropic.com/news)
{: .sources}

### OpenAI udruller GPT-6 med "Intelligent UI" i ChatGPT {#gpt-6-intelligent-ui}
OpenAI har lanceret en ny ChatGPT-grænseflade med interaktive elementer som knapper, kalkulatorer, grafer og redigerbare diagrammer. Den udrulles med en ny GPT-6-model til Pro, Plus, Business og Enterprise, og dagen efter til Free og Go. TechCrunch nævner hverken specifikationer eller API-adgang.

> **Betyder for dig:** Idéen med at lade modellen svare med interaktive komponenter frem for tekst er værd at holde øje med til en fitnessapp. Der er ingen API-detaljer endnu.

Kilde: [TechCrunch](https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/)
{: .sources}

## Udviklerværktøjer

### Anthropic opdaterer sin usage policy {#usage-policy}
Den opdaterede policy forbyder vedvarende grov adfærd over for Claude (kun ekstreme tilfælde), tilføjer regler mod valgindblanding og koordinerede bedragerikampagner som falske konti og opdigtede nyhedssider, og nye forbud om våbensoftware og overvågning. TechCrunch angiver ingen ikrafttrædelsesdato.

> **Betyder for dig:** Læs policyen igennem, hvis din app genererer indhold i stor skala eller tager brugerinput direkte videre til Claude. For en fitnessapp er der næppe noget at ændre, men tjek.

Kilde: [TechCrunch](https://techcrunch.com/2026/10/08/anthropic-changes-usage-policy-to-ban-model-abuse-and-election-interference/)
{: .sources}

### Anthropic Cyber Mission og gratis OSS Scanner {#cyber-mission}
Anthropic lancerer et program for forsvarere med to dele: et Critical Infrastructure Defense Program med 11 partnere (bl.a. CrowdStrike, Deloitte, Palo Alto Networks) og OSS Scanner, en gratis tilmeldingsbaseret scanning af open source-projekter efter modellen OSS-Fuzz. Rapporter indeholder proof of concept og evt. rettelse, men sendes uden menneskelig gennemgang. Anthropic forventer over 90 % sande positiver.

> **Betyder for dig:** Har du eller dine afhængigheder open source-repos, kan du tilmelde dem. Forvent, at nogle rapporter har forkert alvorlighedsgrad.

Kilde: [Anthropic](https://www.anthropic.com/news/anthropic-cyber-mission)
{: .sources}

## Lokale modeller og hardware

### Kritisk hul i LMCache uden rettelse (CVSS 9,8) {#lmcache-cve}
JFrog offentliggjorde 7. oktober CVE-2026-105192: i multiprocess-tilstand har LMCaches ZeroMQ-socket ingen autentificering, og en besked unpickles, før typen tjekkes, så en angriber kan køre kode. Version 0.3.9 til 0.5.5 er ramt, og der findes ingen rettet version. Standard er localhost, men Kubernetes-eksemplet lytter på alle interfaces, og officielle images kører som root. Single-process vLLM åbner ikke porten.

> **Betyder for dig:** Kører du LMCache med vLLM på egen server, så bind den aldrig til en routbar adresse, og hold porten på localhost eller et lukket netværk.

Kilde: [The Hacker News](https://thehackernews.com/2026/10/unpatched-critical-lmcache-flaw-lets.html)
{: .sources}
