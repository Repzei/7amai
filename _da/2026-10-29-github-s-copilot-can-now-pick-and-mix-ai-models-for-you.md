---
title: "GitHubs Copilot kan nu selv vælge og blande AI-modeller for dig"
summary: "GitHubs Copilot Fusion vælger modellerne til hver kodeopgave, mens agenter nu starter fire ud af ti pull requests. Desuden: Googles Gemini 4 Carbon går først til sikkerhedsfolk, de store techfirmaers AI-penge, Claudes forbrugsrapporter og Storbritanniens aftale med datacentre."
date: 2026-10-29 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "model-routing", from: 1, more: ["ai-agent", "benchmark"] }
today:
  - { t: "GitHubs Copilot Fusion vælger og blander selv AI-modeller til hver kodeopgave.", why: "Udviklere og alle, der betaler for kodeagenter." }
  - { t: "Googles Gemini 4 Carbon topper en vigtig rangliste, men kun cyberforsvarere får den.", why: "Alle, der følger kapløbet mellem de store AI-laboratorier." }
  - { t: "Microsoft fik 10 mia. dollar fra OpenAI, og Google tager AI-annoncer ud i verden.", why: "Alle, der spekulerer på, om AI tjener penge." }
  - { t: "Claude Enterprise viser nu, hvad hvert teams AI-forbrug giver.", why: "Ledere og økonomifolk, der betaler AI-regningen." }
  - { t: "Storbritannien giver hurtigere adgang til elnettet for datacentre, der investerer lokalt.", why: "Alle, der følger, hvor Europas AI skal køre." }
other_lang_url: /2026/10/29/
items:
  - { n: 1, anchor: "copilot-fusion", signal: big, tracks: [build, general], min: 1.5, source: official, topic: code, why: "Udviklere holder op med at vælge modeller, og prisen på en færdig opgave bliver det, der tæller.", bars: { title: "Pull requests, der startede med en agents udkast", max: 100, rows: [{ l: "Marts", v: 17, t: "17 %" }, { l: "September", v: 40, t: "40 %", hl: true }] } }
  - { n: 2, anchor: "gemini-4-carbon", signal: big, tracks: [general, build], min: 1.5, source: official, topic: model, why: "Assistenten bliver stedet, hvor arbejdet sker, og apps kæmper nu om at blive fundet inde i den." }
  - { n: 3, anchor: "big-tech-ai-money", signal: worth, tracks: [general], min: 1, source: reported, number: "10 mia. dollar", number_label: "Microsofts omsætning fra OpenAI på ét kvartal", topic: money, why: "Pengene er ægte, og de flytter fra klassiske søgeannoncer ind i AI-svar.", tiles: [{ n: "103 %", t: "vækst i Google Clouds omsætning på et år" }] }
  - { n: 4, anchor: "claude-smart-reports", signal: quick, tracks: [general, build], min: 1, source: official, number: "10 gange", number_label: "vækst i år i forbruget på kodeværktøjer bygget på Anthropics modeller, ifølge Jellyfish", topic: business, why: "Økonomiafdelinger spørger nu, hvad de fik for AI-regningen, og leverandørerne skal svare." }
  - { n: 5, anchor: "uk-data-centre-covenant", signal: quick, tracks: [europe, general], min: 1, source: reported, topic: law, why: "Flere regeringer vil have deres AI til at køre på egen jord, og strømmen er flaskehalsen." }
  - { n: 6, anchor: "local-speech", signal: worth, tracks: [build, general, europe], min: 1.5, source: official, number: "40", number_label: "sprog, som Nemotron 3.5 Transcribe kan skrive ned", topic: local, why: "Tale kan nu blive til tekst, uden at lyden nogensinde forlader dit kontor." }
  - { n: 7, anchor: "rag-conflict-typing", signal: worth, tracks: [build], min: 1.5, source: official, topic: research, why: "Lad en billig model klare det lette, og kald kun på den dyre, når den er i tvivl." }
---

### 1. GitHubs Copilot kan nu selv vælge og blande AI-modeller for dig {#copilot-fusion}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>GitHubs nye Copilot Fusion vælger og kombinerer AI-modeller til hver kodeopgave. På en uafhængig test kom den tæt på den bedste opsætning til cirka halv pris.</p>

Onsdag fortalte GitHub, at over 40 % af alle pull requests i september startede med en agents første udkast, op fra 17 % i marts. En pull request er et forslag til en ændring i et projekts kode.

Hvert team må vælge, hvilken model det vil betale for. På sin Universe-konference svarede GitHub: lad være.

#### <span>1 af 2</span> Copilot Fusion
I Copilot kan du nu vælge "Copilot Fusion" i stedet for én model. Du sætter indsatsen til Standard, High eller Max, og Copilot bestemmer, hvilke modeller der gør arbejdet. Nogle gange skriver en billig model et udkast, og en stærkere tager kun over, hvis et tjek fejler.

Artificial Analysis, en uafhængig testgruppe, placerede Fusion Max cirka to point efter Claude Code med Opus 5.5 på Max. Men Fusion kostede cirka det halve pr. opgave, skriver VentureBeat. Den virker på alle Copilot-abonnementer.

Fangsten: du betaler stadig hver models normale pris, og en benchmark er ikke din kode.

#### <span>2 af 2</span> Copilot følger med GitHub Enterprise
GitHub Enterprise giver nu Copilot til alle med licens, først for kunder, der køber gennem en sælger. I stedet for et fast antal AI-kreditter pr. bruger betaler firmaet for forbruget fra ét fælles budget. Løber det tørt, virker kodeforslagene stadig.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et mobilabonnement, der går fra en fast pakke til betaling pr. opkald. Samtidig vælger telefonen selv et net, der er godt nok. Udviklere holder op med at vælge modeller, og prisen på en færdig opgave bliver det, der tæller.</p></div>

Kilde: [github.blog](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-10-28-github-enterprise-now-includes-access-to-github-copilot) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/) · <span class="tag tag-official">Officiel</span> · [venturebeat.com](https://venturebeat.com/orchestration/github-copilot-fusion-mixes-models-to-achieve-near-opus-5-5-coding-performance-at-half-the-per-task-cost) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Googles Gemini 4 Carbon topper en vigtig rangliste, men kun sikkerhedsfolk får den {#gemini-4-carbon}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Googles nye Gemini 4 Carbon ligger nummer ét på en meget brugt rangliste over modeller, men indtil videre kan kun cyberforsvarere bruge den. Google åbner også Gemini og Search for flere apps udefra.</p>

#### <span>1 af 2</span> Gemini 4 Carbon
Nye AI-modeller går normalt ud til alle på én gang. Carbon, der kom onsdag, går først til en gruppe cyberforsvarere. Udviklere, firmaer og forbrugere får den senere, og Google giver ingen dato.

Det skyldes, hvad Carbon er god til. Google siger, at den fik 88,2 % på SEC-bench Pro, en test i at finde sikkerhedshuller, og at den også kan udnytte dem. På Artificial Analysis' indeks over generelle evner ligger den først af 52 modeller.

Fangsten: sikkerhedstallene kommer fra Googles egen lancering, målt uden sikkerhedsfiltre. En model, der finder huller så godt, kan også hjælpe angribere.

#### <span>2 af 2</span> Apps inde i Gemini og Search
Google åbner også en prøveversion, hvor udviklere kan lægge apps ind i Gemini og Search. Apps kobles på via MCP, en fælles standard for at forbinde AI med andre værktøjer. Over 50 apps virker allerede i Gemini, og indtil videre kan kun udviklere i USA være med, skriver TechCrunch.

<div class="why"><b>Derfor er det vigtigt</b><p>Assistenten er ved at blive stedet, hvor arbejdet sker. For en app kan det snart betyde lige så meget at blive fundet i Gemini som engang at ligge højt i Googles søgning.</p></div>

Kilde: [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) · <span class="tag tag-official">Officiel</span> · [artificialanalysis.ai](https://artificialanalysis.ai/models/gemini-4-carbon) · <span class="tag tag-official">Officiel</span> · [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/connected-apps-one-place/) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/28/as-ai-agents-reshape-the-web-google-opens-gemini-and-search-to-more-apps/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Microsoft fik 10 mia. dollar fra OpenAI, og Google tager AI-annoncer ud i verden {#big-tech-ai-money}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>10 mia. dollar</b><span>Microsofts omsætning fra OpenAI på ét kvartal</span></div>

<p class="short"><span>Kort fortalt</span>Nye regnskaber viser, hvor mange penge der løber gennem AI. Microsoft fik 10 mia. dollar fra OpenAI på tre måneder, og Google bringer annoncer i AI-søgning ud over USA.</p>

Microsoft fik 10 mia. dollar i omsætning fra sine aftaler med OpenAI i kvartalet til september, skriver TechCrunch ud fra Microsofts indberetning. Google Cloud, der lejer regnekraft ud til AI, øgede omsætningen med 103 % på et år.

Søgning, Googles gamle pengemaskine, voksede kun 12 %, langsommere end tidligere i år. Samtidig tager Google for første gang annoncer i AI Mode, sin chat-agtige søgning, med til andre lande.

Fangsten: Alphabets aktie faldt alligevel efter regnskabet.

<div class="why"><b>Derfor er det vigtigt</b><p>Pengene er ægte, og de flytter fra den klassiske liste af søgeannoncer ind i AI-svarene. Bruger du AI-søgning uden for USA, så regn med annoncer inde i svarene snart.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/28/microsoft-recorded-10-billion-in-revenue-from-openai/) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/10/28/google-expands-ai-search-ads-globally-as-core-ad-growth-slows/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Anthropic viser firmaer, hvad deres forbrug på Claude giver {#claude-smart-reports}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>10 gange</b><span>vækst i år i forbruget på kodeværktøjer bygget på Anthropics modeller, ifølge Jellyfish</span></div>

<p class="short"><span>Kort fortalt</span>Claude Enterprise viser nu, hvad hvert team får lavet med Claude, og hvad det koster. Teams kan også dele ét månedligt budget.</p>

Forbruget på kodeværktøjer bygget på Anthropics modeller er vokset 10 gange i år, siger Jellyfish, der måler udvikleres arbejde. Det er hurtigere, end de fleste økonomichefer regnede med. Men det er kun cirka 2 % af udgifterne til udvikling, skriver TechCrunch.

Onsdag gav Anthropic Claude Enterprise nye værktøjer. Smart reports læser et udsnit af et teams samtaler og viser, hvad arbejdet kostede, og hvor det gik i stå. Med et fælles månedligt budget løber de flittigste brugere sjældnere tør, mens kolleger lader deres ligge ubrugt.

Fangsten: det er sælgerens egen rapport om, hvad produktet er værd.

<div class="why"><b>Derfor er det vigtigt</b><p>Alle økonomiafdelinger stiller nu det samme spørgsmål: hvad fik vi for AI-regningen? Den, der svarer bedst, beholder kunden, når budgettet skal skæres.</p></div>

Kilde: [claude.com](https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Storbritannien giver hurtigere adgang til elnettet for datacentre, der investerer lokalt {#uk-data-centre-covenant}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Europa</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Det britiske budget lover AI-datacentre hurtigere adgang til elnettet, hvis de investerer lokalt og passer på vandet. Målet er at holde følsomme data i landet.</p>

AI-datacentre bruger meget strøm. I Essex skubbede forsinkelser på elnettet strømmen til et planlagt datacenter ind i 2030'erne, og Microsoft droppede sine planer for det, skriver Reuters.

I onsdagens budget tilbød finansminister John Healey en aftale kaldet British Data Centre Covenant. Operatører, der investerer lokalt, skaber job og beskytter vandforsyningen, kommer forrest i køen til elnettet og må bygge egen strømforsyning på stedet.

Fangsten: Storbritannien vurderer, at landet skal tredoble sin kapacitet til AI-datacentre inden 2030, og aftalen giver ikke i sig selv mere kapacitet.

<div class="why"><b>Derfor er det vigtigt</b><p>"Når vores væbnede styrker bruger AI til at beskytte os, vil vi have de data her," sagde Healey. Ligesom et land vil have sit guld i sin egen boks, vil flere regeringer have deres AI til at køre på egen jord.</p></div>

Kilde: [kfgo.com (Reuters)](https://kfgo.com/2026/10/28/uks-healey-offers-grid-access-incentives-for-critical-data-centres/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### NVIDIAs gratis model skriver 40 sprog ned, og llama.cpp lærer at tale {#local-speech}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>40</b><span>sprog, som Nemotron 3.5 Transcribe kan skrive ned</span></div>

<p class="short"><span>Kort fortalt</span>NVIDIA har udgivet en åben model, der gør timelange optagelser på 40 sprog til tekst. Og llama.cpp, motoren bag mange lokale AI-apps, kan nu lytte og tale.</p>

Mødenoter bliver tit sendt til en cloudtjeneste for at blive skrevet ud. To nye udgivelser lader dig gøre det selv.

#### <span>1 af 2</span> Nemotron 3.5 Transcribe
NVIDIAs nye model er gratis, også til kommerciel brug. Den klarer optagelser på op til en time og kan kende forskel på dem, der taler. NVIDIA siger, at den ligger nummer ét blandt åbne modeller på en udbredt engelsk test.

Fangsten: indtil videre er den bygget til store grafikkort, og lettere udgaver til pc'er er stadig på vej. Den virker også kun på færdige optagelser.

#### <span>2 af 2</span> llama.cpp 0.8.0
llama.cpp's indbyggede server kan nu føre en samtale med stemmen og læse tekst højt. Den følger samme protokol som OpenAIs realtime-stemmetjeneste, så værktøjer lavet til den bør være lette at pege mod din egen computer.

<div class="why"><b>Derfor er det vigtigt</b><p>Tale er noget af det sidste, de fleste stadig sender til skyen. Med gratis værktøjer til både at lytte og tale kan lyden blive på dit kontor, og det betyder noget med EU's regler om privatliv.</p></div>

Kilde: [huggingface.co](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/blog/nvidia/nemotron-transcribe-granary) · <span class="tag tag-official">Officiel</span> · [github.com/ggml-org](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Billige modeller kan se, hvorfor kilder er uenige, næsten som store {#rag-conflict-typing}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Når en AI's kilder er uenige, skal den vide hvorfor. Forskere viser, at billige "beslutningsmodeller" som regel kan se det, og kun sender de sværeste tilfælde videre til en stor model.</p>

AI-assistenter slår tit ting op først. Når to kilder er uenige, afhænger det rigtige svar af hvorfor: måske er den ene forældet eller simpelthen forkert.

At finde ud af det kræver som regel en stor model. Forfatterne testede i stedet små "beslutningsmodeller", der bare vælger fra en fast liste. De fleste klarede sig lige så godt som eller bedre end Gemini 2.5 Flash, til en brøkdel af prisen.

Deres bedste opsætning er en kaskade. Den lille model klarer de lette tilfælde og sender den mest usikre fjerdedel videre til den stærkere Gemini 3.8 Flash. For de fleste modeller svarede det til Gemini 3.8 Flash til 25 til 37 % af prisen.

Fangsten: artiklen er ikke fagfællebedømt, og de små modeller var dårligere til at opdage en plantet falsk kilde.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er samme idé som Copilot Fusion i historie 1. Den praktiserende læge sender kun de svære tilfælde videre til en speciallæge. Her klarer en billig model det lette og kalder kun på den dyre, når den er i tvivl.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.36915) · <span class="tag tag-official">Officiel</span>
{: .sources}
