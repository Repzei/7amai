---
title: "Claude hjalp med at bevise, at 123 open source-biblioteker ikke går ned"
summary: "Anthropic brugte Claude til at skrive matematiske beviser for, at udbredt kode ikke kan gå ned, et arbejde der før var alt for dyrt. Desuden: agent-skills bliver en åben standard, en sikkerhedsopdatering til Claude Code, kæmpe AI-runder og live-oversættelse i Google Meet."
date: 2026-10-23 07:00:00 +0200
reviewed: false
checked: true
minutes: 7
explained: { main: "formal-verification", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "Claude skrev matematiske beviser for, at 123 udbredte open source-biblioteker ikke kan gå ned, og fandt hundredvis af fejl undervejs.", why: "Alle, hvis apps bygger på open source-kode, altså næsten alle." }
  - { t: "Anthropic giver Agent Skills til Linux Foundation, og TanStack AI og Copilot åbner for andre modeller.", why: "Udviklere, der ikke vil være bundet til én AI-leverandør." }
  - { t: "Claude Code 2.1.309 lukker flere huller i sin sandkasse.", why: "Udviklere, der lader Claude Code køre kommandoer på deres maskine." }
  - { t: "OpenAI henter efter sigende op til 30 mia. dollar, og DeepSeek omkring 15 mia.", why: "Alle, der undrer sig over, hvor længe AI kan blive ved med at være så billig." }
  - { t: "Google Meet oversætter nu tale live mellem alle 63 sprog.", why: "Alle, der holder møder med folk, der taler et andet sprog." }
other_lang_url: /2026/10/23/
items:
  - { n: 1, anchor: "claude-formal-proofs", signal: big, tracks: [general, build], min: 1.5, source: official, number: "123", number_label: "open source-biblioteker bevist ikke at gå ned" }
  - { n: 2, anchor: "open-agent-standards", signal: big, tracks: [build], min: 1.5, source: official, number: "1 mio.", number_label: "skills udgivet, ifølge Anthropic" }
  - { n: 3, anchor: "claude-code-2-1-309", signal: quick, tracks: [build], min: 1, source: official }
  - { n: 4, anchor: "ai-mega-rounds", signal: worth, tracks: [general], min: 1.5, source: reported }
  - { n: 5, anchor: "meet-translation", signal: worth, tracks: [general, europe], min: 1, source: official }
  - { n: 6, anchor: "minimax-m3-1-flash-weights", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "naive-rag-memory", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. Claude hjalp med at bevise, at 123 open source-biblioteker ikke går ned {#claude-formal-proofs}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>123</b><span>open source-biblioteker bevist ikke at gå ned</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic brugte Claude til at skrive matematiske beviser for, at 123 udbredte open source-biblioteker ikke kan gå ned. Den slags beviser var før alt for dyre til almindelig kode.</p>

Det meste software bliver tjekket med tests, og de viser kun, at koden virker for de input, man har prøvet. Et formelt bevis viser trin for trin, som i matematik, at noget gælder for alle mulige input.

Den slags beviser er sjældne, fordi de er langsomme og dyre at skrive. Derfor bruges de mest der, hvor en fejl vil være meget farlig, fx i sikre styresystemer.

Den 22. oktober viste Anthropics Frontier Red Team og startuppen Theorem en anden vej. Claude skrev beviser for, at 123 open source-biblioteker aldrig går ned, for ethvert input under 64 MB. Arbejdet tog nogle få uger. Undervejs fandt og rettede Claude hundredvis af fejl, og nogle af dem havde almindelige tests overset i årevis.

Der er en hage. Med Anthropics egne ord: "'Formelt verificeret' betyder ikke 'fejlfri'." Beviserne dækker én bestemt opsætning, en RISC-V-chip med Linux. De fleste kører bibliotekerne på andre chips og systembiblioteker, så det hul er stadig åbent.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu var et bevis som en fuld konstruktionsundersøgelse af en bro: så dyr, at kun få broer nogensinde fik én. Gør AI undersøgelsen billig, kan den fælles kode under dine apps blive bevist, ikke bare testet.</p></div>

<p class="todo"><b>Prøv det:</b> Anthropic har udgivet en del af beviserne. Theorem har udgivet en Claude-skill, så du kan verificere din egen kode, og tilbyder at køre metoden for andre open source-projekter.</p>

Kilde: [anthropic.com](https://www.anthropic.com/research/formal-verification) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Værktøjer til AI-agenter bliver mindre bundet til ét firma {#open-agent-standards}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>1 mio.</b><span>skills udgivet, ifølge Anthropic</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic har givet sit Agent Skills-format til en gruppe under Linux Foundation, og to store værktøjer lader dig nu blande modeller og skills friere.</p>

En skill er en mappe med instruktioner, der lærer en AI-agent en opgave, fx at udfylde en rapportskabelon. Hvis hver leverandør havde sit eget format, skulle du skrive dine skills om, hver gang du skiftede.

#### <span>1 af 3</span> Agent Skills flytter til Linux Foundation
Den 22. oktober gav Anthropic standarden Agent Skills til Agentic AI Foundation, som hører under Linux Foundation. Samme gruppe passer allerede på MCP, den måde agenter kobler sig på andre værktøjer. Ingeniører fra Anthropic, Google og OpenAI skal vedligeholde standarden. Ifølge Anthropic bruger over 70 agentplatforme den, blandt andre ChatGPT, Cursor og GitHub Copilot.

#### <span>2 af 3</span> TanStack AI 1.0 giver alle modeller skills
TanStack AI, et åbent værktøj til at bygge AI-apps i TypeScript, nåede version 1.0 den 23. oktober. Alle modeller, der kan kalde værktøjer, kan nu indlæse skills i samme format. Det virker med 23 modeludbydere.

#### <span>3 af 3</span> Copilot i Visual Studio tager din egen model
GitHubs Copilot i Visual Studio lader dig nu bruge modeller fra OpenAI, Anthropic, Microsoft Foundry eller Ollama. Det virker uden et GitHub-login. Funktionen er stadig i preview.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som skiftet til ét fælles opladerstik til telefoner. Når formatet er fælles, virker de skills, du skriver, stadig, når du skifter model, værktøj eller leverandør.</p></div>

Kilde: [anthropic.com](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation) · <span class="tag tag-official">Officiel</span> · [tanstack.com](https://tanstack.com/blog/tanstack-ai-1-0) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Claude Code 2.1.309 lukker flere huller i sin sandkasse {#claude-code-2-1-309}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Den nye version af Claude Code lukker flere veje, hvor kommandoer kunne slippe uden om sikkerhedsgrænserne. Opdatér, hvis du stoler på sandkassen.</p>

Claude Code kan køre kommandoer på din computer. Sandkassen er det hegn, der holder kommandoerne væk fra filer, de ikke må røre.

Version 2.1.309 lapper flere huller i hegnet. På Mac og Linux kørte shellens opstartsfiler uden for sandkassen før hver kommando. Kommandoer i sandkassen kunne også ændre MCP-indstillingsfilen. Og på Windows lod sikkerhedshooks skrevet til PowerShell kommandoer slippe igennem, når de skulle have stoppet dem.

Ændringsloggen siger ikke, om nogen har udnyttet hullerne.

<div class="why"><b>Derfor er det vigtigt</b><p>En sandkasse er kun så stærk som dens svageste låge. Rettelserne lukker låger, som de fleste brugere aldrig vidste fandtes.</p></div>

<p class="todo"><b>Gør dette:</b> Kør <code>claude update</code>, og tjek, at <code>claude --version</code> viser 2.1.309 eller nyere.</p>

Kilde: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. OpenAI og DeepSeek henter efter sigende kæmpe nye runder {#ai-mega-rounds}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>OpenAI henter efter sigende op til 30 mia. dollar til en værdi af 1.250 mia. dollar. DeepSeek henter efter sigende omkring 15 mia. dollar.</p>

Det kræver enorme mængder dyre chips at træne og køre AI, og meget af det betaler investorer for. To rapporter fra den 22. oktober viser, hvor mange penge der stadig strømmer ind.

#### <span>1 af 2</span> OpenAI til 1.250 mia. dollar
CNBC skriver, at OpenAI henter op til 30 mia. dollar til en værdi af 1.250 mia. dollar før de nye penge. Coatue og investorer fra De Forenede Arabiske Emirater står i spidsen, skriver TechCrunch. I marts var OpenAI vurderet til 852 mia. dollar. Vilkårene er ikke endelige, og OpenAI ville ikke kommentere.

#### <span>2 af 2</span> DeepSeek efter det amerikanske forbud
Bloomberg skriver, at DeepSeek henter omkring 15 mia. dollar, med batteriproducenten CATL og Tencent som mulige investorer. Det sker to dage efter, at USA beordrede sine civile myndigheder til at fjerne DeepSeek. DeepSeek svarede ikke med det samme.

<div class="why"><b>Derfor er det vigtigt</b><p>Penge som disse betaler for de chips, der står bag den AI, du bruger hver dag. Et laboratorium, der henter 15 mia. dollar to dage efter et amerikansk forbud, forsvinder ikke. Derfor forbliver kapløbet mellem amerikanske og kinesiske modeller tæt.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/22/openai-working-on-new-30b-raise-at-1-25t-valuation-ahead-of-ipo/) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/10/22/deepseek-reportedly-raises-15b-days-after-us-restrictions/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Google Meet oversætter nu tale live mellem 63 sprog {#meet-translation}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Google Meet kan nu oversætte det, folk siger, live mellem alle 63 sprog. Meet finder også selv ud af, hvilket sprog der bliver talt.</p>

Møder på tværs af landegrænser ender tit på engelsk, så dem, der taler det bedst, kommer mest til orde. Live-oversættelse lader alle tale deres eget sprog.

Den 22. oktober udvidede Google taleoversættelsen i Meet til 63 sprog. Hver lytter hører mødet på sit valgte sprog, og Meet genkender selv det sprog, der bliver talt. Google siger, at den ikke gemmer din stemme eller træner på den.

Hagen er prisen. Den, der opretter mødet, skal have et betalt abonnement, fx Google AI Pro. På de billigste abonnementer stopper det efter 90 minutter pr. møde.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at have en tolk med til hvert møde, til prisen for et abonnement. For hold, der er spredt over Europa, ændrer det, hvem der tager ordet.</p></div>

Kilde: [workspaceupdates.googleblog.com](https://workspaceupdates.googleblog.com/2026/10/real-time-speech-translation-in-google-Meet-expands-to-63-languages-with-automatic-language-detection.html) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### MiniMax frigiver vægtene til sin billige agentmodel {#minimax-m3-1-flash-weights}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>MiniMax holdt sit løfte og lagde vægtene til M3.1 Flash på Hugging Face. Virksomheder kan nu køre modellen på deres egne servere.</p>

Den 20. oktober skrev vi, at MiniMax' nye Flash-model klarer agentopgaver for omkring 22 cent, og at vægtene ville komme senere. Nu ligger de på Hugging Face.

Ifølge MiniMax har modellen omkring 428 mia. parametre, men kun 23 mia. arbejder på hvert ord, så den kører hurtigere, end størrelsen antyder. Den kan læse op til 1 million tokens ad gangen. MiniMax foreslår at køre den med vLLM eller SGLang, og siden linker til mindre udgaver til llama.cpp og Ollama.

Der er to hager. Den kommer under MiniMax' egen licens, ikke en almindelig open source-licens, så læs vilkårene før kommerciel brug. Og med 428 mia. parametre er den alt for stor til en almindelig pc.

<div class="why"><b>Derfor er det vigtigt</b><p>Før kunne du kun leje modellen gennem MiniMax' API. Nu kan en virksomhed køre den i sit eget datacenter, så dens data aldrig behøver at forlade huset.</p></div>

Kilde: [huggingface.co](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Simpel søgning slår komplekse hukommelsessystemer for chatagenter {#naive-rag-memory}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Forskere fandt, at det virker bedre bare at søge i gamle samtaler. De smarte hukommelsessystemer til AI-agenter tabte i seks ud af syv tests.</p>

En agent, der taler med dig i ugevis, skal kunne huske, hvad du har sagt. Mange hold bygger komplekse hukommelsessystemer, der opsummerer gamle samtaler eller sorterer fakta i strukturer.

Zhengye Bao og kolleger testede en langt enklere metode. De gemte den rå samtale og søgte for hvert spørgsmål efter de mest relevante dele. Det kaldes RAG (retrieval-augmented generation): modellen slår de rigtige sider op, før den svarer.

Den simple metode kom ind som nummer ét i seks ud af syv testopsætninger på tværs af fire hukommelsestests. Den slog det bedste komplekse system med op til 5,5 point. Forklaringen er ifølge forfatterne, at den rå tekst bevarer mere af det, et svar skal bygge på.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at gemme de originale kvitteringer i stedet for et pænt resumé af dit forbrug. Når der kommer et spørgsmål, du ikke havde forudset, har kvitteringerne stadig svaret.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.30755) · <span class="tag tag-official">Officiel</span>
{: .sources}
