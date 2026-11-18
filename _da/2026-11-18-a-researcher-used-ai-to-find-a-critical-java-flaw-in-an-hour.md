---
title: "En forsker brugte AI til at finde et kritisk hul i Java på en time"
summary: "Et sikkerhedsfirma brugte OpenAIs Codex til at finde et alvorligt hul i Java for under 200 $, og Oracle har lukket det. Desuden: nye kodemodeller fra OpenAI og Microsoft, Nvidias rekordkvartal, og Gemini klarer ærinder gratis."
date: 2026-11-18 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "remote-code-execution", from: 1, more: ["cve", "benchmark"] }
today:
  - { t: "En forsker brugte AI til at finde et kritisk hul i Java for under 200 $.", why: "Alle, der driver Java-servere som Jira eller Jenkins." }
  - { t: "OpenAI og Microsoft har begge lagt nye kodemodeller ind i GitHub Copilot.", why: "Udviklere, der vælger, hvilken model der skriver deres kode." }
  - { t: "Nvidias salg er mere end fordoblet, og bestyrelsen vil ikke have Huang tilbage.", why: "Alle, der følger firmaet bag de fleste AI-chips." }
  - { t: "Gemini klarer nu ærinder gratis, og Google gemmer chats i to måneder.", why: "Alle, der bruger Gemini eller lader en agent betale for noget." }
other_lang_url: /2026/11/18/
items:
  - { n: 1, anchor: "java4shell", signal: big, tracks: [build, general], min: 1.5, source: official, number: "200 $", number_label: "eller mindre: så meget kostede AI'en for at finde hullet og bygge et angreb, der virker, siger Calif", topic: security, why: "Når AI finder dybe huller så billigt, kan både forsvarere og angribere gennemsøge mere kode, så hurtige opdateringer betyder mere.", do: "Opdatér Java på dine servere til Oracles rettelse fra november.", steps: { title: "Sådan virker Java4Shell", list: ["En angriber sender en særlig Base64-tekst", "Javas hurtige afkoder skriver uden for sin hukommelse", "Angriberen kan køre kode på serveren"] } }
  - { n: 2, anchor: "gpt-6-2-mai-code-2", signal: big, tracks: [build], min: 1.5, source: official, number: "5 %", number_label: "af prisen for Claude Opus 5.5, for 96 % af dens score på kodetest, siger Microsoft om MAI Code 2", topic: code, why: "Når én editor har modeller fra flere firmaer, må de konkurrere på pris og kvalitet hver dag.", do: "Prøv GPT-6.2 Astra eller MAI Code 2 i Copilot på en opgave, du kender godt." }
  - { n: 3, anchor: "nvidia-q3-huang", signal: worth, tracks: [general], min: 1, source: official, number: "115,8 mia. $", number_label: "Nvidias omsætning i sidste kvartal, mere end det dobbelte af for et år siden", topic: business, why: "Efterspørgslen på AI-chips vokser videre, selv om Nvidia ikke har en fast leder." }
  - { n: 4, anchor: "gemini-tasks-retention", signal: worth, tracks: [general, europe], min: 1.5, source: official, topic: agent, why: "En agent, der betaler dine regninger, skal bruge dine data, og Google gemmer nu chats længere.", do: "Tjek Geminis nye indstillinger for historik og træning, når de når frem til dig.", tiles: [{ n: "72 timer", t: "var så længe Google gemte chats med historik slået fra; nu er det cirka to måneder" }] }
  - { n: 5, anchor: "sensenova-loop-9b", signal: worth, tracks: [build, europe], min: 1, source: official, number: "9B", number_label: "parametre, men den klarer sig som en model tre gange så stor på nogle agenttest", topic: open, why: "Modeller, der tænker længere uden mere hukommelse, bringer stærkere AI til almindelige pc'er." }
  - { n: 6, anchor: "multi-branch-transformer", signal: worth, tracks: [build, general], min: 1, source: official, number: "51,4 %", number_label: "hurtigere svar, højst, når midten af en model deles i parallelle spor", topic: research, why: "AI-svar kan blive hurtigere og billigere uden nye chips, hvis idéen virker i stor skala.", tiles: [{ n: "34 %", t: "mindre hukommelse til modellens noter om tidligere ord" }] }
---

### 1. En forsker brugte AI til at finde et kritisk hul i Java på en time {#java4shell}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>200 $</b><span>eller mindre: så meget kostede AI'en for at finde hullet og bygge et angreb, der virker, siger Calif</span></div>

<p class="short"><span>Kort fortalt</span>Et sikkerhedsfirma brugte OpenAIs Codex til at finde et alvorligt hul i Java, som mange virksomhedsprogrammer kører på. Oracle lukkede det tirsdag, så opdatér nu.</p>

Java driver mange systemer i virksomheder, fra Jira til Jenkins. Sproget beskytter mod, at data løber ud over den hukommelse, de har fået. Men den beskyttelse gælder ikke motoren, der kører Java.

Det er netop dér, sikkerhedsfirmaet Calif fandt Java4Shell. Hullet sidder i en hurtig genvej til at afkode Base64, en almindelig måde at sende data som tekst. En særlig tekst får genvejen til at skrive uden for sin hukommelse. Så kan en angriber køre sin egen kode på servere som Jira uden at logge ind.

Forskeren Quang Luong fandt fejlen med OpenAIs Codex på cirka en time. Et angreb, der virker, tog to timer mere. AI'en kostede under 200 $ i alt, siger Calif.

Fangsten: kun nyere chips fra Intel og AMD med særlige instruktioner er ramt. Hvert program kræver også sin egen vej til at få den særlige tekst ind.

<div class="why"><b>Derfor er det vigtigt</b><p>Det kræver sjældne evner og tid at lede efter huller dybt inde i software. Når AI klarer det svære for under 200 $, kan både forsvarere og angribere gennemsøge langt mere kode. Det er som billige metaldetektorer: der bliver fundet mere, af alle. Derfor betyder det mere, hvor hurtigt du opdaterer.</p></div>

<p class="todo"><b>Gør dette:</b> Opdatér Java på dine servere til Oracles rettelse fra november. Kan du ikke endnu, foreslår Calif at starte Java med <code>-XX:-UseBASE64Intrinsics</code> indtil videre.</p>

Kilder: [calif.io](https://calif.io/java4shell/) · <span class="tag tag-official">Officiel</span> · [bleepingcomputer.com](https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. OpenAI og Microsoft lancerer begge nye AI-modeller til kode {#gpt-6-2-mai-code-2}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>5 %</b><span>af prisen for Claude Opus 5.5, for 96 % af dens score på kodetest, siger Microsoft om MAI Code 2</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI har udgivet GPT-6.2 Astra og Sol, og Microsoft har udgivet sin egen MAI Code 2. Begge er i GitHub Copilot nu, og kampen handler om pris.</p>

#### <span>1 af 2</span> OpenAI gør sin bedste model billigere
En kodeagent læser og skriver meget tekst, så prisen løber hurtigt op. OpenAIs nye topmodel, GPT-6.2 Astra, koster 80 % af, hvad GPT-6 Astra kostede. Det er samme pris som Anthropics Claude Fable 5.2, skriver Simon Willison. Den mindre GPT-6.2 Sol beholder sin gamle pris.

Fangsten: Astra scorer under Fable 5.2 på flere test, og de første anmeldelser er blandede. En tester så den stoppe en lang opgave i to timer for at spørge om en lille detalje.

#### <span>2 af 2</span> Microsoft kommer med sin egen kodemodel
Microsoft lægger nu sine egne modeller ind i Copilot: MAI Code 2 og en billigere Flash-udgave til rutineopgaver. Ifølge Microsoft når MAI Code 2 op på 96 % af Claude Opus 5.5's score på fire kodetest, til 5 % af prisen.

Fangsten: Microsoft har selv kørt de fleste test, og priserne regner med en introrabat. Firmaet oplyser ingen priser i dollar.

<div class="why"><b>Derfor er det vigtigt</b><p>Før betød valget af en AI-model til kode, at man valgte et firma. Nu har én editor modeller fra flere firmaer, og man skifter med en menu. Det er som en tankstation med flere mærker ved standeren: hvert mærke skal vinde dig ved hver tankning.</p></div>

<p class="todo"><b>Prøv det:</b> Kør GPT-6.2 Astra eller MAI Code 2 i Copilot på en opgave, du kender godt. MAI Code 2 Flash står også på listen for gratisplanen.</p>

Kilder: [github.blog (GPT-6.2)](https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available) · <span class="tag tag-official">Officiel</span> · [simonwillison.net](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/) · <span class="tag tag-reported">Rapporteret</span> · [microsoft.ai](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) · <span class="tag tag-official">Officiel</span> · [github.blog (MAI Code 2)](https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Nvidias salg er mere end fordoblet, og bestyrelsen vil ikke have Huang tilbage {#nvidia-q3-huang}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>115,8 mia. $</b><span>Nvidias omsætning i sidste kvartal, mere end det dobbelte af for et år siden</span></div>

<p class="short"><span>Kort fortalt</span>Nvidia solgte for 115,8 mia. $ i sidste kvartal, mere end dobbelt så meget som for et år siden. På samme møde sagde formanden, at Jensen Huang ikke vender tilbage som topchef.</p>

De fleste AI-chips kommer fra Nvidia, så firmaets regnskab viser, hvor meget verden bruger på AI. Det var det første, siden Huang trådte tilbage.

Næsten alle pengene kom fra chips til datacentre. I næste kvartal venter Nvidia 130,0 mia. $, uden at regne med salg til datacentre i Kina.

Huang skrev på X, at han ville være beæret over at vende tilbage. Men formand Harvey Jones sagde, at bestyrelsen ikke har til hensigt at genindsætte ham som topchef. Finansdirektør Colette Kress leder firmaet indtil videre.

Fangsten: bestyrelsen undersøger Huang, og børstilsynet SEC undersøger Nvidia, skriver TechCrunch.

<div class="why"><b>Derfor er det vigtigt</b><p>Firmaet i midten af AI-bølgen vokser fortsat hurtigt, selv om det ikke har en fast leder. Det er som en rekordhøst det år, landmanden gik. Indtil videre afhænger efterspørgslen på AI-chips ikke af én person.</p></div>

Kilder: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/17/nvidia-says-it-doesnt-plan-to-reappoint-jensen-huang-as-ceo/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Gemini klarer nu ærinder gratis, og Google gemmer chats længere {#gemini-tasks-retention}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Gemini kan nu booke, betale og handle for dig, gratis i seks lande. Samtidig vil Google gemme chats i cirka to måneder, også når historikken er slået fra.</p>

#### <span>1 af 2</span> En agent til hverdagens ærinder
En AI-agent udfører en opgave for dig i stedet for bare at svare. Googles nye Tasks i Gemini kan booke aftaler, styre regninger og købe dagligvarer med din mail, din kalender og dine betalingsmidler. Den er gratis i seks lande, blandt andre USA og Indien.

Opgaverne kører i en afskærmet computer, der kun er til din konto. Gemini spørger, før den fx trykker "Køb", og du kan sætte en fast grænse for, hvor meget den må bruge. Fangsten: Google siger selv, at opgaver stadig kan gå galt, og opslaget nævner ikke Europa.

#### <span>2 af 2</span> Chats gemmes i to måneder
I en anden ændring gemmes chats, hvor historikken er slået fra, i cirka to måneder. Før var det 72 timer, skriver TechCrunch med henvisning til en ældre udgave af Googles side om privatliv. Google deler også én indstilling op i to, så du kan beholde din historik og samtidig sige nej til AI-træning.

<div class="why"><b>Derfor er det vigtigt</b><p>En agent, der betaler dine regninger, skal vide meget om dig. Derfor hænger de to ændringer sammen: mere hjælp betyder også flere af dine data hos Google, i længere tid. Det er som at give en hjælper din husnøgle: nyttigt, men du vil vide, hvem der har en kopi, og hvor længe.</p></div>

<p class="todo"><b>Gør dette:</b> Når opdateringen når frem til dig, så åbn Geminis indstillinger og tjek de nye knapper for historik og træning.</p>

Kilder: [blog.google (Tasks)](https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/) · <span class="tag tag-official">Officiel</span> · [blog.google (indstillinger)](https://blog.google/innovation-and-ai/products/gemini-app/updated-controls/) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### SenseNovas model på 9B kører sine lag to gange for at tænke længere {#sensenova-loop-9b}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>9B</b><span>parametre, men den klarer sig som en model tre gange så stor på nogle agenttest</span></div>

<p class="short"><span>Kort fortalt</span>SenseNova har udgivet en gratis model på 9B, der kører de fleste af sine midterste lag to gange. Den kan køre på et grafikkort derhjemme og matcher en langt større model på nogle test.</p>

En større model er som regel klogere, men den kræver også en større computer.

SenseNova-Loop-9B kører de fleste af sine midterste lag to gange, så den tænker længere uden at bruge mere hukommelse. Komprimeret kræver den cirka 12 til 15 GiB grafikhukommelse, også til lange tekster. Den læser tekst og billeder og er udgivet under den frie licens Apache 2.0.

På to agenttest scorer den som Qwen3.8-27B, en model tre gange så stor. På en tredje test ligger den lavere.

Fangsten: SenseNova har selv kørt testene. Du skal også logge ind og acceptere vilkår på Hugging Face for at hente den.

<div class="why"><b>Derfor er det vigtigt</b><p>At køre lagene to gange er som at læse et svært afsnit igen: ingen ny viden, men mere tid til at tænke. Holder det, kan stærkere modeller køre på almindelige pc'er, hvor dine data aldrig forlader maskinen.</p></div>

Kilde: [huggingface.co](https://huggingface.co/sensenova/SenseNova-Loop-9B) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En AI-model delt i parallelle spor svarer hurtigere {#multi-branch-transformer}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>51,4 %</b><span>hurtigere svar, højst, når midten af en model deles i parallelle spor</span></div>

<p class="short"><span>Kort fortalt</span>Forskere delte midten af en sprogmodel op i spor, der arbejder side om side. Den svarede op til 51,4 % hurtigere, brugte mindre hukommelse og lærte mere af den samme træning.</p>

En sprogmodel fungerer som et samlebånd: hvert lag venter på det forrige. Ved lange tekster gemmer den også noter om tidligere ord, og de fylder i hukommelsen.

Gaotang Li og kolleger delte de midterste lag op i grene, der deler ét sæt noter. En almindelig model skulle bruge op til 1,26 gange så meget træning for at nå samme niveau. Noterne fyldte op til 34 % mindre, og svarene kom op til 51,4 % hurtigere.

Fangsten: de har kun testet små modeller, og ingen har gennemgået artiklen endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at åbne flere kasser i et supermarked med det samme personale: køen bevæger sig hurtigere. Virker idéen også for store modeller, kan AI-svar blive hurtigere og billigere uden nye chips.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.19800) · <span class="tag tag-official">Officiel</span>
{: .sources}
