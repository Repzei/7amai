---
title: "Gemini 4 Argon er i API'et til 2 dollar pr. million input-tokens, indtil videre"
summary: "Google åbner Gemini 4 Argon for betalende API-brugere til introduktionspriser, der fordobles 1. december. Desuden: GitHub blokerer Anthropic-nøgler som standard, mere finmaskede GitHub App-rettigheder og Ollama 0.40.4."
date: 2026-10-14 07:00:00 +0200
reviewed: false
checked: true
minutes: 2.5
other_lang_url: /2026/10/14/
items:
  - { n: 1, anchor: "gemini-4-argon", signal: big, tracks: [build, general], min: 1, source: official, number: "$2", number_label: "pr. 1 mio. input-tokens til 30. nov." }
  - { n: 2, anchor: "anthropic-key-blocking", signal: worth, tracks: [build], min: 0.5 }
  - { n: 3, anchor: "github-app-permissions", signal: quick, tracks: [build], min: 0.5 }
  - { n: 4, anchor: "ollama-0-40-4", signal: quick, tracks: [build, europe], min: 0.5 }
---

### 1. Gemini 4 Argon kan bruges af betalende API-brugere, med introduktionspriser der fordobles 1. december {#gemini-4-argon}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>$2</b><span>pr. 1 mio. input-tokens til 30. nov.</span></div>

Google udgav den 13. oktober Gemini 4 Argon til udviklere via den betalte del af Gemini API, og Google AI Ultra-abonnenter kan prøve modellen i AI Studio og Antigravity. Model-id'et er `gemini-4-argon`. Til og med 30. november koster den 2 dollar pr. million input-tokens og 10 dollar pr. million output-tokens, inklusive tænketokens. Fra 1. december bliver det 4 og 20 dollar. Den er ikke med i den gratis tier eller Google AI Pro. Googles prisside siger, at modellen kan generere op til 1 mio. tokens ad gangen, men nævner ikke et kontekstvindue. GitHub gjorde den samme dag generelt tilgængelig i Copilot for Pro+, Max, Business og Enterprise med gradvis udrulning. GitHub siger, at den løste flere opgaver end tidligere Gemini-modeller i tidlige tests, uden at give tal.

> **Hvad betyder det:** Prøv den på dine egne lange kode- eller skriveopgaver nu, men regn med decemberpriserne, før du bygger på den. Business- og Enterprise-administratorer: nye modeller slås til som standard i Copilot, medmindre du har slået det fra.

Kilde: [Google](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/) · <span class="tag tag-official">Officiel</span> · [Gemini API-priser](https://ai.google.dev/gemini-api/docs/pricing) · <span class="tag tag-official">Officiel</span> · [GitHub changelog](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. GitHub secret scanning blokerer nu Anthropic API-nøgler som standard {#anthropic-key-blocking}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">½ min</span></p>

Den 13. oktober tilføjede GitHub detektorer for Anthropic service-API-nøgler og bruger-API-nøgler samt Cloudsmith-nøgler. Push protection er slået til som standard for begge Anthropic-nøgletyper, så commits med dem blokeres overalt, hvor secret scanning er aktiveret, også i gratis offentlige repositories. Der er også tilføjet et mønster for Salesforce Marketing Cloud OAuth2-tokens. Opslaget siger ikke, hvordan man fravælger det, eller om Cloudsmith- og Salesforce-mønstrene blokerer som standard.

> **Hvad betyder det:** Bliver et push pludselig blokeret, så skift nøglen i stedet for at omgå blokeringen. Tjek dine repositories for gamle Anthropic-nøgler, der allerede er committet.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. GitHub Apps får en snævrere rettighed til at oprette repositories {#github-app-permissions}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">½ min</span></p>

Den nye rettighed `repository_creation:write` lader en app eller et fine-grained token oprette repositories uden `repository_administration:write`, som også giver lov til at slette og overføre dem. En anden, `installation_repositories:write`, dækker tilføjelse og fjernelse af repositories på en installation. Repository-administratorer kan nu tilføje deres repositories til en app, som organisationen har godkendt, uden ejerens godkendelse, medmindre ejerne begrænser installation. Opslaget oplyser ikke udrulning på github.com.

> **Hvad betyder det:** Opretter en bot eller et script repositories, så skift dens admin-rettighed ud med den snævrere.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-13-github-app-improvements-for-least-privilege-and-management) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Ollama 0.40.4 er ude, med hurtigere inferens og lokale modeller i Codex-launcheren {#ollama-0-40-4}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">Europa</span><span class="track">½ min</span></p>

Opfølgning på gårsdagens punkt. Udgivelsen fra 12. oktober nævner hurtigere inferens via cachede manifester og indlæste modeller, lokale modeller i `ollama launch codex` og multimodale embeddings via llama-server. Udgivelsessiden markerer den som seneste, ikke som pre-release.

> **Hvad betyder det:** Har du ventet med 0.40.x på grund af baggrundsopgraderingen, er det her versionen at gå til. Tjek først diskplads til backupkopier af modeller.

Kilde: [Ollama releases](https://github.com/ollama/ollama/releases) · <span class="tag tag-official">Officiel</span>
{: .sources}
