---
title: "Mistral Large 4 er i preview, og åbne vægte følger i oktober"
summary: "Mistral åbner Large 4 som API-preview med åbne vægte lovet inden udgangen af oktober. Derudover sandboxing i Copilot, Googles Gemini agent og en påmindelse om AI-forordningens næste frist."
date: 2026-10-10 07:00:00 +0200
reviewed: false
other_lang_url: /2026/10/10/
items:
  - { n: 1, anchor: "mistral-large-4", signal: big, tracks: [build, europe] }
  - { n: 2, anchor: "gemini-agent", signal: worth, tracks: [general, build] }
  - { n: 3, anchor: "copilot-local-sandboxing", signal: worth, tracks: [build] }
  - { n: 4, anchor: "ai-act-dates", signal: worth, tracks: [europe, build] }
  - { n: 5, anchor: "copilot-cli-ollama", signal: quick, tracks: [build, europe] }
  - { n: 6, anchor: "github-secret-model", signal: quick, tracks: [build] }
  - { n: 7, anchor: "genesis-mission", signal: quick, tracks: [general] }
---

### 1. Mistral Large 4 er i offentlig preview, og åbne vægte følger inden udgangen af oktober {#mistral-large-4}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Europa</span></p>

Mistral lancerede Large 4 den 6. oktober: en mixture-of-experts-model med ca. 1 billion parametre (52 mia. aktive), multimodalt input og over 160 sprog, herunder alle EU's officielle sprog. API-previewet i Mistral Studio koster $1,36 pr. million input-tokens og $4,18 pr. million output-tokens. Mistral siger, at vægtene kommer inden udgangen af måneden, men nævner hverken licens eller kontekstvindue. Modellen er trænet på 3.800 NVIDIA Grace Blackwell-GPU'er i Mistrals egne europæiske datacentre og serveres derfra. Benchmarktallene er Mistrals egne: 61,7 % på DeepSWE v1.1 og 3,74 i en blind menneskelig kodningstest fra Surge AI, nummer to af fem modeller efter Claude Opus 5 på 4,22.

> **Hvad betyder det:** Test den på dine egne kodeprompts, hvis du skal bruge EU-hostet inferens, men vent på licensen, før du planlægger selvhosting. Previewet kan ændre sig, før vægtene udkommer.

Kilde: [Mistral](https://mistral.ai/news/mistral-large-4/)
{: .sources}

### 2. Google Cloud lancerer "Gemini agent", én agent til arbejde, i privat preview {#gemini-agent}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span></p>

På eventet Gemini at Work den 8. oktober præsenterede Google Cloud Gemini agent. Du nævner @Gemini i Gmail, Docs, Sheets, Slides eller Chat, eller bruger den fra kommandolinjen, Slack og Microsoft 365. Et udvikler-API gør, at du kan indlejre den som en headless agent. Hvert job kører på den model, Google vurderer er bedst, i dag Gemini- og Claude-modeller. Den er i privat preview for virksomhedskunder, og bredere tilgængelighed for udvalgte Workspace-abonnementer følger "snart". 9to5Google nævner ingen priser.

> **Hvad betyder det:** Der er intet at gøre, medmindre du er erhvervskunde hos Google: den er i privat preview uden priser. Bemærk, at Google også sender arbejde til Claude-modeller.

Kilde: [9to5Google](https://9to5google.com/2026/10/08/gemini-agent-google-cloud/)
{: .sources}

### 3. GitHub Copilots lokale sandboxing er generelt tilgængelig på Windows, macOS og Linux {#copilot-local-sandboxing}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span></p>

Kommandoer og værktøjer, som Copilot starter på din maskine, kører nu med begrænset adgang til filer, netværk og credentials efter udviklerens eller organisationens politik. Det virker i Copilot CLI, Copilot-appen og VS Code-sessioner med Agent Host og bygger på Microsoft eXecution Container (MXC). Det er inkluderet i Copilot uden ekstra pris. Organisationer kan kræve sandboxing via centralt styrede indstillinger. Det dækker udførelse af værktøjer, ikke modellen, og sandboxing af lokale MCP- og language server-processer gælder kun "hvor det understøttes".

> **Hvad betyder det:** Lader du Copilot-agenter køre kommandoer på din laptop, så slå den til og tjek dokumentationen for, hvad der er dækket. Lokale MCP-servere kan stadig køre uden for sandboxen.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available)
{: .sources}

### 4. Påmindelse: EU's Digital Omnibus har flyttet AI-forordningens datoer, og 2. december 2026 er den næste {#ai-act-dates}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Europa</span><span class="track">Build</span></p>

Forordning (EU) 2026/1744, Digital Omnibus on AI, trådte i kraft den 27. juli 2026. Ifølge Hunton gælder kravene til højrisikosystemer i bilag III fra 2. december 2027 og til AI indbygget i regulerede produkter fra 2. august 2028. Mærkning af AI-genereret indhold gælder fra 2. december 2026 for systemer, der var på markedet før 2. august 2026. Omnibussen tilføjer også et forbud mod AI-systemer, der er designet til at lave ikke-samtykkede intime billeder og materiale med seksuelt misbrug af børn. Det er ikke nyt i denne uge, men næste frist er under to måneder væk. Kilden er et advokatfirmas sammenfatning, ikke selve lovteksten.

> **Hvad betyder det:** Hvis dit produkt genererer billeder, lyd eller video til EU-brugere og var live før august 2026, så tjek mærkningskravet i lovteksten, før 2. december.

Kilde: [Hunton](https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force)
{: .sources}

### 5. Copilot CLI kan nu finde modeller fra en lokal Ollama-instans {#copilot-cli-ollama}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">Europa</span></p>

Fra CLI-version 1.0.94-0 viser kommandoen `/model` modeller fra en kørende Ollama-server ved siden af dine cloud-modeller. Intet tilføjes automatisk: du vælger en model, tjekker dens udbyder og endpoint og tilføjer den. Modellen skal understøtte tool calling og streaming. Valg af en lokal model slår hverken offlinetilstand til eller GitHub-telemetri fra; offlinetilstand kræver `COPILOT_OFFLINE=true`.

> **Hvad betyder det:** Praktisk til at prøve lokale modeller i en agentløkke, men af hensyn til privatlivet skal du stadig selv slå offlinetilstand til.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli)
{: .sources}

### 6. GitHub lancerer en specialbygget model til at finde lækkede adgangskoder og hemmeligheder {#github-secret-model}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span></p>

GitHubs finjusterede model læser koden omkring en kandidat og finder hemmeligheder uden genkendeligt tokenformat, fx adgangskoder. Kunder med AI-fundne adgangskodealarmer er opgraderet automatisk. AI-detektion i push protection er i privat preview, og `/security-review` i Copilot CLI kommer i privat preview. De nye valgfrie tjek bruger AI Credits og kræver GitHub Secret Protection eller Advanced Security til push protection. GitHub oplyser ingen nøjagtighedstal.

> **Hvad betyder det:** Tjek, om jeres organisation allerede er opgraderet, og sæt et budget, før I slår de valgfrie tjek til, for de bruger credits.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection)
{: .sources}

### 7. Anthropic lover $150 mio. over tre år til det amerikanske Genesis Mission {#genesis-mission}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span></p>

Annonceret den 8. oktober på et videnskabstopmøde i Det Hvide Hus: pengene giver mere end 15 føderale myndigheder, bl.a. NASA, NIH og NSF, adgang til Claude og giver Claude, Claude Code og API-credits til flere hundrede Genesis Mission-projekter. Der er også 10.000 gratis eller rabatterede Claude-pladser til akademiske forskere. NVIDIA annoncerede ved samme event $1 mia. over fem år til amerikansk forskning. Ingen af pressemeddelelserne forklarer, hvordan man ansøger.

> **Hvad betyder det:** Mest amerikansk nyt. Det betyder kun noget, hvis du arbejder på et amerikansk forskningsprojekt; ellers er det blot et signal om, hvor meget compute og credits laboratorierne lægger i forskning.

Kilde: [Anthropic](https://www.anthropic.com/news/genesis-mission-commitment) · [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-commits-1-billion-to-advance-us-science-over-the-next-five-years)
{: .sources}
