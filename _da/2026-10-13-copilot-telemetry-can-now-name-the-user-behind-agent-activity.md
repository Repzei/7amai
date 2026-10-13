---
title: "Copilot-telemetri kan nu navngive brugeren bag agentaktivitet"
summary: "GitHub tilføjer valgfri brugerattribuering og finkornede indstillinger til Copilot-telemetri. Desuden: admin-styring i JetBrains og en pause i Ollamas modelopgraderinger. En stille dag."
date: 2026-10-13 07:00:00 +0200
reviewed: false
minutes: 2
other_lang_url: /2026/10/13/
items:
  - { n: 1, anchor: "copilot-telemetry", signal: worth, tracks: [build, europe], min: 1 }
  - { n: 2, anchor: "copilot-jetbrains", signal: quick, tracks: [build], min: 0.5 }
  - { n: 3, anchor: "ollama-0-40-3", signal: quick, tracks: [build, europe], min: 0.5 }
---

### 1. Copilot-telemetri kan knytte aktivitet til en navngiven bruger, med fem separate indstillinger {#copilot-telemetry}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

Meldt ud 12. oktober. Enterprise-administratorer kan sætte `telemetry.capture.identity` i managed settings og få tre OpenTelemetry-attributter med: `user.name` (lige nu GitHub-login), `process.user.name` (den lokale OS-konto) og `host.name` (maskinens navn). Fem typer indhold kan slås til hver for sig: `prompts`, `responses`, `toolArguments`, `toolOutput` og `policyDetail`. Alt er slået fra som standard, og managed værdier vinder over lokale indstillinger, SDK og miljøvariabler. Den ældre indstilling `captureContent` virker stadig, men slår ikke identitet til. Det gælder Copilot CLI, GitHub Copilot-appen og VS Code-sessioner med Agent Host. Opslaget nævner hverken udrulningsdato eller krav til abonnement.

> **Hvad betyder det:** Kører I Copilot i en virksomhed, så beslut først, hvilke typer I faktisk skal bruge til audit. Opsamlet data kan indeholde kildekode, kommandoer og filstier, og navngivne medarbejdere rejser spørgsmål om privatliv og medbestemmelse.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Copilot til JetBrains lader admins vælge standardmodel og stoppe automatisk start af MCP-servere {#copilot-jetbrains}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">½ min</span></p>

Udgivet 10. oktober. Enterprise-admins kan sætte en tilgængelig agentmodel som standard for nye samtaler; brugere kan stadig vælge en anden. En ny indstilling slår automatisk start af Copilot- og Claude-MCP-servere fra. Diagnosticeringer får en Fix-handling, der åbner inline chat. JetBrains IDE 2025.1 understøttes ikke længere, så du skal bruge 2025.2 eller nyere.

> **Hvad betyder det:** Er jeres hold på JetBrains 2025.1, så opgradér IDE'en, før pluginet holder op med at opdatere.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Ollama 0.40.3 sætter den baggrundsopgradering på pause, som kom i 0.40.2 {#ollama-0-40-3}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">Europa</span><span class="track">½ min</span></p>

Opfølgning på mandagens punkt. Udgivelsen fra 11. oktober sætter baggrundsopgraderingen af downloadede modeller på pause og fjerner advarsler fra `ollama launch claude` og `ollama launch codex`. En 0.40.4-release candidate fra 12. oktober opdaterer llama.cpp og tilføjer installerede modeller til Codex' modelvælger. Modeller, der allerede er opgraderet af 0.40.2, har stadig sikkerhedskopier på disken, og går du under 0.40, skal de hentes igen.

> **Hvad betyder det:** Er der trangt på disken, så tjek for sikkerhedskopier af modeller, du allerede har kørt på 0.40.2, og vent på den endelige 0.40.4, før du opdaterer.

Kilde: [Ollama releases](https://github.com/ollama/ollama/releases) · <span class="tag tag-official">Officiel</span>
{: .sources}
