---
title: "OpenAI's Codex fandt et alvorligt hul i Node.js, og rettelsen er ude"
summary: "Et AI-sikkerhedsværktøj fandt en fejl i den kode, der pakker webtrafik ud i Node.js og Python. Desuden: to chatbots vælger hver sin side i amerikanske valg, Storbritanniens penge til AI-sikkerhed, Sverige blokerer ChatGPT og Claude, og hvad en kodeagents harness reelt giver."
date: 2026-10-25 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "cve", from: 1, more: ["token", "ai-agent"] }
today:
  - { t: "OpenAI's Codex Security fandt en fejl, der kan lade angribere køre kode via Node.js- og Python-apps. Rettelserne er ude.", why: "Alle, der kører Node.js eller Python på en server." }
  - { t: "Tvunget til at nævne én kandidat valgte Grok republikanere og GPT demokrater i næsten 500 amerikanske valg.", why: "Alle, der bygger på modellerne eller spørger dem om politik." }
  - { t: "Storbritannien sætter cirka 600 mio. pund af til AI-sikkerhed, heraf 100 mio. til et laboratorium, der holder øje med biologiske trusler.", why: "Alle, der følger, hvad Europa bruger på AI-sikkerhed." }
  - { t: "Sveriges Regeringskansli blokerer ChatGPT og Claude på arbejdscomputere fra mandag og sender ansatte over til Copilot.", why: "Offentligt ansatte og IT-afdelinger i Norden." }
  - { t: "Cursors agenter kan nu klikke rundt i desktop-apps, og et studie viser, at en tungere harness mest gør regningen større.", why: "Udviklere, der betaler for kodeagenter." }
other_lang_url: /2026/10/25/
items:
  - { n: 1, anchor: "node2shell", signal: big, tracks: [build, general], min: 1.5, source: official, number: "9,2", number_label: "ud af 10 på CVSS-skalaen for alvor" }
  - { n: 2, anchor: "ai-ballot", signal: worth, tracks: [general], min: 1, source: reported, number: "97 %", number_label: "af GPT's valg var demokrater" }
  - { n: 3, anchor: "uk-ai-security", signal: worth, tracks: [europe, general], min: 1, source: reported, number: "100 mio. pund", number_label: "til et AI-laboratorium, der holder øje med biologiske trusler" }
  - { n: 4, anchor: "sweden-blocks-chatbots", signal: quick, tracks: [europe, general], min: 1, source: reported }
  - { n: 5, anchor: "coding-agent-harness", signal: worth, tracks: [build], min: 1, source: official }
  - { n: 6, anchor: "ollama-speech", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "agent-mosaic", signal: worth, tracks: [build, europe], min: 1, source: official }
---

### 1. OpenAI's Codex fandt et alvorligt hul i Node.js, og rettelsen er ude {#node2shell}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>9,2</b><span>ud af 10 på CVSS-skalaen for alvor</span></div>

<p class="short"><span>Kort fortalt</span>Et AI-sikkerhedsværktøj fra OpenAI fandt en fejl i Brotli, den kode der pakker komprimeret webtrafik ud. Den rammer Node.js, Python og mere, og rettelserne er ude.</p>

Det meste webtrafik bliver presset sammen, så den fylder mindre. Brotli er et af de formater, der gør det. Din server eller app pakker det ud, uden at du lægger mærke til det. Derfor sidder en fejl her mange steder.

Den 21. oktober lukkede Node.js ti sikkerhedshuller. Det værste sidder i den indbyggede Brotli-dekoder. En særligt lavet datastrøm kan ødelægge hukommelsen. Så kan appen gå ned, lække data eller lade en angriber køre kode. Node.js krediterer OpenAI Codex Security, OpenAI's AI-værktøj til at finde fejl.

Den samme fejl sidder i Googles Brotli-bibliotek. Derfor rammer den også Python, hvor requests og aiohttp bruger Brotli automatisk, når det er installeret. Alene Brotli-pakken hentes cirka 82,8 millioner gange om måneden, siger sikkerhedsfirmaet Aikido. Bun, Envoy og curl er også ramt.

Her er fangsten. Ifølge Aikido blev fejlen rettet i Brotlis kode allerede i februar. Ingen så det som et sikkerhedsproblem, så ingen udgivelse havde rettelsen før nu. Aikido advarer også om, at værktøjer som pip-audit og Dependabot endnu ikke markerede Python-pakkerne.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en tilbagekaldelse af en reservedel, der sidder i mange forskellige biler. Du har måske aldrig valgt Brotli, men din app bruger det sandsynligvis. Og i denne uge var det AI-værktøjer, der fandt huller som dette, først i PHP og nu her.</p></div>

<p class="todo"><b>Gør dette:</b> Opdatér Node.js til 22.23.4, 24.22.1 eller 26.12.1. I Python: kør <code>pip install -U brotli brotlicffi</code> for at få Brotli 1.2.1. Opdatér Bun til 1.4.4.</p>

Kilde: [nodejs.org](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases) · <span class="tag tag-official">Officiel</span> · [aikido.dev](https://www.aikido.dev/blog/python-packages-vulnerable-node2shell-brotli-cve-2026-111497) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Tvunget til at vælge tog Grok republikanerne og GPT demokraterne {#ai-ballot}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>97 %</b><span>af GPT's valg var demokrater</span></div>

<p class="short"><span>Kort fortalt</span>Forskere spurgte to AI-modeller, hvem man skal stemme på i næsten 500 amerikanske valg. Modellerne trak hårdt i hver sin retning.</p>

Midtvejsvalget i USA er den 3. november. Chat-apps nægter at sige, hvem du skal stemme på. Men de samme modeller kan nås gennem deres API'er til udviklere.

Det gjorde Convovo, et studie ledet af Cornell-professoren Tapan Parikh. Det tvang GPT-6.1 Sol og Grok 4.7 til at nævne én kandidat pr. valg, med websøgning slået til. Grok valgte republikaneren i 92 % af svarene, og GPT valgte demokraten i 97 %, skriver TechCrunch. De to var enige i under 10 % af valgene.

Kilderne var også forskellige. Grok henviste til X i 41 % af svarene. Hver forespørgsel til Grok havde desuden cirka 1.240 tokens tekst med, som forskerne ikke selv havde skrevet og ikke kunne se.

Fangsten: OpenAI siger, at et tvunget spørgsmål gennem API'et ikke er det, ChatGPT-brugere ser.

<div class="why"><b>Derfor er det vigtigt</b><p>En app, der bygger på en model, arver dens holdninger, ligesom en butik arver en leverandørs etiketter. Bygger du på disse API'er, får du også skjulte instruktioner med, som du ikke selv har skrevet.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/) · <span class="tag tag-reported">Rapporteret</span> · [convovo.ai](https://convovo.ai/ballot/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Storbritannien bruger cirka 600 mio. pund på AI-sikkerhed {#uk-ai-security}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Europa</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>100 mio. pund</b><span>til et AI-laboratorium, der holder øje med biologiske trusler</span></div>

<p class="short"><span>Kort fortalt</span>Den britiske regering har sat cirka 600 mio. pund af til at beskytte mod trusler fra AI. Den største nye del er et laboratorium, der bruger AI til at opdage biologiske trusler.</p>

EU regulerer mest AI med regler. Storbritannien satser mere på test og forsvar.

Lørdag fremlagde regeringen pakken, skriver Reuters. Den rummer 100 mio. pund til et AI Biosecurity Lab og yderligere 120 mio. til AI Security Institute, som tester nye modeller. Andre 130 mio. går til cyberforsvar af kritisk infrastruktur. OpenAI og Anthropic giver op til 200 mio. pund i modelkreditter til arbejdet med biosikkerhed.

AI-minister Kanishka Narayan vil have laboratoriet til at blive en stor global institution. Fangsten er, at pengene foreløbig er en plan. Reuters siger ikke, hvornår de bliver brugt.

<div class="why"><b>Derfor er det vigtigt</b><p>Den samme AI, der hjælper med at designe medicin, kan hjælpe med at designe skade. Storbritannien betaler for røgalarmen, ikke kun for brandreglerne.</p></div>

Kilde: [timeslive.co.za (Reuters)](https://www.timeslive.co.za/news/sci-tech/2026-10-24-uk-government-sets-out-600m-of-ai-security-funding/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Sveriges Regeringskansli blokerer ChatGPT og Claude fra mandag {#sweden-blocks-chatbots}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Europa</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Ansatte i Sveriges Regeringskansli mister adgangen til ChatGPT og Claude i browseren den 26. oktober. De bliver sendt over til Microsofts Copilot.</p>

Mange offentlige kontorer har ladet ansatte prøve chatbots først og lavet regler bagefter. Nu strammer Sverige op.

Regeringskansliet har skrevet til SVT, at webudgaverne af ChatGPT og Claude ikke længere virker på de ansattes computere. Copilot er godkendt, fordi kansliet har gennemgået tjenesten og hævet sikkerheden. Ansatte kan stadig bruge begge modeller gennem en platform, der hedder Intric. Skatteverket og Statens institutionsstyrelse blokerer allerede AI-tjenester, og Kronofogden overvejer det.

Kansliet har ikke sagt, hvorfor netop ChatGPT og Claude blev blokeret.

<div class="why"><b>Derfor er det vigtigt</b><p>For en regering handler det mindre om, hvilken AI der er bedst, og mere om, hvilken man har en aftale med. Det giver en fordel til den leverandør, der allerede sidder på kontoret, her Microsoft.</p></div>

Kilde: [svt.se](https://www.svt.se/nyheter/inrikes/ai-tjanster-sparras-pa-regeringskansliet) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Kodeagenter får nye hænder, og et studie tjekker, hvad ekstraudstyret giver {#coding-agent-harness}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Cursors agenter kan nu klikke rundt i desktop-apps. Samtidig viser et studie, at et tungere agent-setup mest ændrer regningen, ikke resultatet.</p>

En kodeagent er mere end en model. Opsætningen omkring den, kaldet en harness, bestemmer, hvilke værktøjer den får, og hvad den læser først.

#### <span>1 af 2</span> Cursors agenter kan bruge skærmen
Cursors nye Computer Use lader en agent se skærmen, klikke og skrive i desktop-apps, også i iOS-simulatoren. Så kan den bygge en app og selv teste ændringen bagefter. Du vælger funktionen i @-menuen i en agent-chat.

#### <span>2 af 2</span> En tungere harness koster mere, ikke bedre
To forskere fra Shandong University kørte de samme modeller gennem Claude Code, OpenCode og den lille mini-SWE-agent. Claude Code og mini-SWE-agent lå inden for 5 point af hinanden. Men med samme model svingede prisen pr. opgave op til 3 gange. Årsagen er de lange instruktioner, en harness sender med ved hvert trin.

<div class="why"><b>Derfor er det vigtigt</b><p>Nye evner som at styre skærmen er reelle fremskridt. Men de instruktioner, en harness gentager ved hvert trin, virker som et leveringsgebyr på hver eneste ordre.</p></div>

Kilde: [cursor.com](https://cursor.com/docs/cloud-agent/self-hosted/computer-use) · <span class="tag tag-official">Officiel</span> · [flaviocopes.com](https://flaviocopes.com/cursor-computer-use/) · <span class="tag tag-reported">Rapporteret</span> · [arxiv.org](https://arxiv.org/abs/2610.04433) · <span class="tag tag-official">Officiel</span> · [venturebeat.com](https://venturebeat.com/orchestration/a-coding-agents-harness-can-triple-its-cost-without-making-it-more-accurate-study-finds) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### Ollama kan nu læse svar højt på din egen computer {#ollama-speech}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Ollama 0.40.11 får en lille talemodel, så en lokal AI kan svare med stemme uden nogen cloudtjeneste.</p>

De fleste stemmeassistenter sender dine ord til en server og tilbage igen. Nu klarer Ollama talen på din egen maskine.

Udgivelsen tilføjer Phonon, som bygger på en lille engelsk stemmemodel fra Gradium med 31 millioner parametre. Den kan læse en chatmodels svar højt, mens svaret stadig bliver skrevet. Apps, der allerede bruger OpenAI's tale-API, kan pege på Ollama i stedet. Samme udgivelse tilføjer d3, åbne modeller fra 2B til 27B, der svarer ja eller nej eller vælger en kategori i stedet for at chatte.

Fangsten: Phonon har kun engelske stemmer, og siden nævner ingen licens.

<div class="why"><b>Derfor er det vigtigt</b><p>Tekst, tænkning og stemme kan nu blive på én bærbar. Det er den enkleste måde at holde en privat samtale privat på.</p></div>

<p class="todo"><b>Prøv det:</b> <code>ollama run phonon "Hello from Ollama."</code></p>

Kilde: [github.com/ollama](https://github.com/ollama/ollama/releases/tag/v0.40.11) · <span class="tag tag-official">Officiel</span> · [docs.ollama.com](https://docs.ollama.com/capabilities/speech) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter kan stykke hemmeligheder sammen af filer, de godt må læse {#agent-mosaic}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>En agent må gerne læse hvert dokument, den åbner, men tilsammen kan de afsløre noget, ingen burde se.</p>

Firmaer beskytter filer én ad gangen. Må du læse en fil, må en agent, der arbejder for dig, også læse den. Forskerne kalder hullet "mosaik-effekten": harmløse brikker, der tilsammen bliver en hemmelighed.

Daniel Ruiz, Luca Luceri og Emilio Ferrara testede det på AI-agenter. De byggede 30 sager fra sikkerhed, medicin og militæret og samlede over 12.000 svar. Selv ved harmløse spørgsmål afslørede den bedste model en forbudt konklusion i 7 % af svarene. Agentværktøjer i drift lækkede mere. Nogle afslag røbede alligevel svaret.

Tydelige mærkater og regler hjalp. Men selv med dem var en tredjedel af de simulerede svar stadig usikre.

<div class="why"><b>Derfor er det vigtigt</b><p>Adgangsrettigheder bestemmer, hvad en agent må læse, ikke hvad den må slutte. For firmaer med persondata er det en ny slags læk, der skal tænkes ind.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.30418) · <span class="tag tag-official">Officiel</span>
{: .sources}
