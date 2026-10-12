---
title: "Anthropic opdaterer sin brugspolitik fra 12. november"
summary: "Anthropics nye brugspolitik stramner reglerne for overvågning og fysisk hardware. Desuden: cyberforsvarsprogram, afregning af Copilot-review, CodeQL og macOS 27 samt Ollama-opgraderinger."
date: 2026-10-12 07:00:00 +0200
reviewed: false
other_lang_url: /2026/10/12/
items:
  - { n: 1, anchor: "usage-policy", signal: big, tracks: [build, general] }
  - { n: 2, anchor: "cyber-mission", signal: worth, tracks: [general, build] }
  - { n: 3, anchor: "copilot-review-billing", signal: worth, tracks: [build] }
  - { n: 4, anchor: "codeql-macos-27", signal: worth, tracks: [build] }
  - { n: 5, anchor: "ollama-0-40", signal: quick, tracks: [build, europe] }
  - { n: 6, anchor: "grok-video-lite", signal: quick, tracks: [general] }
  - { n: 7, anchor: "draft-pr-limits", signal: quick, tracks: [build] }
---

### 1. Anthropics opdaterede brugspolitik træder i kraft den 12. november {#usage-policy}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span></p>

Meldt ud den 8. oktober. Anthropic siger, at de fleste ændringer præciserer eksisterende regler, med nye eksempler til længere autonomt arbejde. Et nyt afsnit dækker vildledende aktivitet som netværk af falske konti og opdigtede nyhedssider. Valgreglerne indeholder ikke længere et generelt forbud mod personligt målrettet kampagnekommunikation, men vildledende målretning er stadig forbudt. Claude må ikke bruges til skjult sporing eller til at afgøre, hvem der skal efterforskes, anholdes eller sigtes. Styrer Claude hardware, der kan handle fysisk, skal en kvalificeret operatør kunne observere og stoppe den, og udstyret skal holde en sikker tilstand, hvis Claude mister forbindelsen. Politikken præciserer også, at virksomheder, der er majoritetsejet fra ikke-understøttede regioner, er udelukket.

> **Hvad betyder det:** Bygger du agenter, der sporer personer, kører kampagner eller styrer hardware, så læs politikken inden 12. november og tjek din brug mod de nye afsnit.

Kilde: [Anthropic](https://www.anthropic.com/news/2026-usage-policy-update)
{: .sources}

### 2. Anthropic lancerer en Cyber Mission med et infrastrukturprogram og en gratis scanner til open source {#cyber-mission}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span></p>

Meldt ud den 8. oktober. Critical Infrastructure Defense Program giver betroede leverandører af driftsteknologi adgang til Claude-modeller i front, tekniker på stedet og trusselsforskning. Der er 11 stiftende partnere, blandt andet CrowdStrike, Palo Alto Networks og Rockwell Automation, og programmet starter med en lille gruppe. OSS Scanner er en gratis tilmeldingsbaseret tjeneste, der scanner open source-projekter og leverer et proof of concept og, hvor det findes, et rettelsesforslag. Rapporterne er modelgenererede og sendes uden menneskelig gennemgang. Anthropic forventer en andel rigtige fund på over 90 %, men det er en forventning og ikke et målt resultat.

> **Hvad betyder det:** Vedligeholder du et vigtigt open source-projekt, så overvej at tilmelde dig OSS Scanner, og afsæt tid til at sortere i urevurderede rapporter.

Kilde: [Anthropic](https://www.anthropic.com/news/anthropic-cyber-mission)
{: .sources}

### 3. Copilot code review kan nu afregnes på organisationen i stedet for pr. medlem {#copilot-review-billing}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span></p>

GitHub har tilføjet en indstilling under organisationens Copilot-politikker for, hvordan medlemmer med Copilot-licens afregnes. Standarden er medlemmets egen kvote, og et review fejler, hvis den er brugt op. Alternativet afregner på organisationen, hvilket kræver betalt forbrug af AI Credits og tillader et valgfrit budget. En anden indstilling begrænser, hvem der kan udløse reviews, så personer med en licens uden for din organisation eller virksomhed ikke kan bede om dem. Slår en ejer den til, kan repository-administratorer ikke slå den fra. Opslaget oplyser hverken priser eller hvilke planer det gælder.

> **Hvad betyder det:** Fejler reviews for jeres team, når kvoterne løber tør, så skift afregningen til organisationen, men sæt et budget først, da det er betalt forbrug.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls)
{: .sources}

### 4. CodeQL 2.27.2 virker ikke med autobuild på macOS 27 {#codeql-macos-27}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span></p>

Apple leverer ikke længere de multi-arkitektur-binære filer, som CodeQL har brug for til sporet analyse. Autobuild og manuel byggetilstand virker ikke for kompilerede sprog på macOS 27 eller på macOS 26 med Xcode 27. GitHub anbefaler macOS 26 med Xcode 26 og forbedrer byggetilstanden none på macOS. Udgaven tilføjer også en C++-regex-parser, forbedringer af dataflow i Rust og JavaScript og en ændring af kontrolflowet i Go, som kan ødelægge egne forespørgsler. Den udrulles automatisk på github.com.

> **Hvad betyder det:** Kører jeres CI CodeQL på macOS-runnere, så bliv foreløbig på macOS 26 og Xcode 26, og tjek egne Go-forespørgsler.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-09-codeql-2-27-2-improves-c-go-rust-and-javascript-analysis)
{: .sources}

### 5. Ollama 0.40.2 opgraderer gamle downloadede modeller i baggrunden {#ollama-0-40}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">Europa</span></p>

Siden 8. oktober opgraderes ældre downloadede modeller første gang, du kører dem, for ydeevne og kompatibilitet med llama.cpp. Sikkerhedskopier bliver liggende på disken, så det er sikkert at gå tilbage, og i udgivelsesnoterne står en kommando til at slette dem. Version 0.40.3 den 11. oktober sætter baggrundsopgraderinger af embedding-modeller på pause for at forbedre svartiden. 0.40.2 får også `ollama launch claude` til at bruge modellens fulde kontekstlængde.

> **Hvad betyder det:** Kører du lokale modeller, så regn med ekstra diskforbrug fra sikkerhedskopier efter første kørsel, og tjek ledig plads på små diske.

Kilde: [Ollama releases](https://github.com/ollama/ollama/releases)
{: .sources}

### 6. xAI tilføjer Grok Imagine Video 1.5 Lite fra 0,02 dollar pr. sekund {#grok-video-lite}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span></p>

Opført den 8. oktober som en tekst- eller billede-til-video-model. LLM Gateway viser en overskriftspris på 0,02 dollar pr. sekund, mens xAI's udbydertabel angiver 0,03 dollar pr. sekund som standard. Opløsning og klippets længde fremgår ikke af oversigten. Jeg kunne ikke åbne en officiel xAI-meddelelse, så detaljerne kommer fra en aggregator.

> **Hvad betyder det:** Kun interessant, hvis du genererer video via et API. Tjek xAI's egen prisside, før du bruger tallene.

Kilde: [LLM Gateway](https://llmgateway.io/models/grok-imagine-video-1-5-lite)
{: .sources}

### 7. GitHub lader grænser for pull requests tælle kladde-pull requests med {#draft-pr-limits}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span></p>

Hidtil talte kladder ikke med i en brugers grænse for pull requests, så man kunne åbne ubegrænset mange. Repositories kan nu indstille grænsen, så de tæller med. GitHub siger, at det mindsker rod, notifikationer og CI-kørsler fra spam. Det er en indstilling, og opslaget oplyser hverken udrulningsdato eller planer.

> **Hvad betyder det:** Vedligeholder du et travlt offentligt repository, så slå det til, når du sætter grænser for pull requests.

Kilde: [GitHub changelog](https://github.blog/changelog/2026-10-08-draft-pull-requests-count-toward-pull-request-limits)
{: .sources}
