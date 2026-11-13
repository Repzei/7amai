---
title: "Jensen Huang går af som Nvidias topchef, og finansdirektøren tager over"
summary: "Nvidias bestyrelse har accepteret Jensen Huangs afsked, og finansdirektør Colette Kress leder firmaet, til en ny topchef er fundet. Desuden: Googles billigere Gemini 4 Hydrogen når Google Søgning for alle, Notion AI-chats lækket via en leverandør, en tysk robotproducent henter 500 mio. $, og Nebius vil bruge 40 mia. $."
date: 2026-11-13 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "gpu", from: 1, more: ["mixture-of-experts", "ai-agent"] }
today:
  - { t: "Jensen Huang går af som Nvidias topchef, og finansdirektør Colette Kress tager over indtil videre.", why: "Alle, der følger chippene, som AI kører på." }
  - { t: "Googles billigere Gemini 4 Hydrogen når udviklere og Google Søgning for alle.", why: "Udviklere, der betaler for AI, og alle, der søger på Google." }
  - { t: "Notion AI-chats er lækket via en hacket AI-leverandør, der gemte data, den ikke måtte.", why: "Alle, der indsætter arbejde i et AI-værktøj." }
  - { t: "Den tyske robotproducent Agile Robots henter 500 mio. $ med SoftBank i spidsen.", why: "Alle, der følger Europas plads inden for robotter og AI." }
  - { t: "Nebius vil bruge 40 mia. $ på AI-datacentre, og aktien falder 17 %.", why: "Alle, der undrer sig over, hvordan AI-byggeriet bliver betalt." }
other_lang_url: /2026/11/13/
items:
  - { n: 1, anchor: "nvidia-huang-resigns", signal: big, tracks: [general], min: 1.5, source: official, number: "4,3 %", number_label: "faldt Nvidias aktie torsdag, efter et fald på over 13 % ved åbningen", topic: chips, why: "Firmaet bag de fleste AI-chips har nu en midlertidig leder, lige før regnskabet 17. november." }
  - { n: 2, anchor: "gemini-4-hydrogen", signal: big, tracks: [build, general], min: 1.5, source: official, number: "1,50 $", number_label: "pr. million input-tokens for Gemini 4 Hydrogen", topic: model, why: "Den billige model er som regel den, de fleste møder, og nu står den også bag Google Søgning.", do: "Bruger du Gemini 3.8 Flash, så test Hydrogen, og tjek de ændrede indstillinger først." }
  - { n: 3, anchor: "notion-fireworks-breach", signal: worth, tracks: [general], min: 1.5, source: official, topic: security, why: "Det, du skriver i et AI-værktøj, kan rejse videre til firmaer, du aldrig har valgt.", do: "Har du indsat adgangskoder eller API-nøgler i Notion AI, så skift dem nu.", steps: { title: "Sådan slap chattene ud", list: ["Notion sendte AI-chats til Fireworks til en funktion", "Fireworks gemte data trods et løfte om at lade være", "En angriber brød ind og tog noget af det"] } }
  - { n: 4, anchor: "agile-robots-500m", signal: worth, tracks: [general, europe], min: 1, source: reported, number: "500 mio. $", number_label: "har Agile Robots fra München hentet med SoftBank i spidsen", topic: money, why: "Robotter, der bruger AI til at arbejde på fabrikker, er der, hvor Europa har en reel chance for at føre." }
  - { n: 5, anchor: "nebius-40b", signal: worth, tracks: [general], min: 1, source: reported, number: "40 mia. $", number_label: "vil Nebius bruge på AI-datacentre næste år", topic: business, why: "Meget af AI-boomet er bygget på lånte penge, og én forsinket bygning kan gøre ondt." }
  - { n: 6, anchor: "inkling-2-small-weights", signal: worth, tracks: [build], min: 1, source: official, number: "17B", number_label: "aktive parametre ud af 594B i Inkling 2 Small", topic: open, why: "Et laboratorium lovede åbne vægte inden for en uge, og det holdt løftet." }
  - { n: 7, anchor: "scrapebench", signal: worth, tracks: [build, general], min: 1, source: official, number: "1.626", number_label: "websites, der forbyder scraping, brugt til at teste AI-agenter", topic: research, why: "En agent følger ikke et websites regler, medmindre du beder den om det, og det er dig, der bærer risikoen." }
---

### 1. Jensen Huang går af som Nvidias topchef, og finansdirektøren tager over {#nvidia-huang-resigns}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>4,3 %</b><span>faldt Nvidias aktie torsdag, efter et fald på over 13 % ved åbningen</span></div>

<p class="short"><span>Kort fortalt</span>Jensen Huang er gået af som Nvidias topchef med øjeblikkelig virkning. Finansdirektør Colette Kress leder firmaet, mens bestyrelsen leder efter en fast afløser.</p>

De fleste store AI-modeller bliver trænet på Nvidias chips, såkaldte GPU'er. Og så længe de fleste har kendt Nvidia, har Huang været firmaets ansigt.

Torsdag meddelte Nvidia, at Huang er gået af som topchef og har forladt bestyrelsen. Det skete få dage efter meldinger om, at han havde haft en affære med en kvinde, som amerikansk efterretning efter sigende forbinder med Kina. Huang gav en undskyldning søndag. Så skrev New York Times om endnu en affære, med en vicedirektør i Nvidia. Ifølge CNBC's kilder besluttede bestyrelsen at skubbe ham ud.

Kress beholder sit job som finansdirektør, mens hun er midlertidig topchef. Harvey C. Jones bliver firmaets første bestyrelsesformand nogensinde.

Aktien faldt over 13 % ved åbningen og lukkede 4,3 % lavere.

Fangsten: bestyrelsen har ikke offentliggjort noget fra sin undersøgelse. Huang afviser, at han har sat den nationale sikkerhed eller Nvidias hemmeligheder på spil. Og en formand for en komité i Repræsentanternes Hus siger, at Huang har sagt ja til at vidne før Thanksgiving.

<div class="why"><b>Derfor er det vigtigt</b><p>Nvidias nye formand siger, at han forventer, at planerne og aftalerne med kunderne fortsætter som før. Men det er som et skibsværft, der mister kaptajnen, mens ordrebogen er fuld. Den første prøve kommer 17. november, når Nvidia aflægger regnskab med en midlertidig leder.</p></div>

Kilder: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) · <span class="tag tag-official">Officiel</span> · [cnbc.com](https://www.cnbc.com/2026/11/12/nvidia-jensen-huang-ceo-live-updates.html) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Googles billigere Gemini 4 Hydrogen når udviklere og Google Søgning {#gemini-4-hydrogen}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>1,50 $</b><span>pr. million input-tokens for Gemini 4 Hydrogen</span></div>

<p class="short"><span>Kort fortalt</span>Google har lanceret Gemini 4 Hydrogen, den hurtige og billige model i sin nye familie. Udviklere kan bruge den nu, og den kører allerede Google Søgning for alle.</p>

#### <span>1 af 3</span> En billigere Gemini 4 til udviklere
De fleste apps kører ikke på et firmas bedste model. De kører på den billige og hurtige, fordi den bliver brugt millioner af gange om dagen.

Google kalder Hydrogen opgraderingen fra Gemini 3.8 Flash. Den koster 1,50 $ pr. million input-tokens, samme pris i hele dens kontekstvindue. På Terminal-Bench, en test af kodeagenter, scorer den 57 % mod 18,2 % for 3.8 Flash, siger Google.

Fangsten: tallene er Googles egne, og ingen har gentaget dem endnu. Nogle gamle indstillinger ændrer sig også. For eksempel tænker Hydrogen nu grundigere som standard og ignorerer indstillingen temperature.

<p class="todo"><b>Prøv det:</b> Bruger du Gemini 3.8 Flash, så test Hydrogen, og tjek de ændrede indstillinger først.</p>

#### <span>2 af 3</span> Søgning får den nye model for alle
Hydrogen skriver nu også svarene i Google Søgning for alle brugere i hele verden. Ifølge Google forstår Søgning nu lange spørgsmål og stavefejl bedre og viser flere links end før.

<div class="why"><b>Derfor er det vigtigt</b><p>Den billige model er den, de fleste faktisk møder. Når den står bag Søgning, bruger millioner af mennesker Googles nyeste model uden at have valgt den.</p></div>

#### <span>3 af 3</span> Gemini-briller kommer i handlen i december
Google har også åbnet for forudbestilling af briller med Gemini. De koster fra 395 $ og kommer i handlen 10. december. Men de virker kun med Google-konti fra USA og Sydkorea.

Kilder: [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) · <span class="tag tag-official">Officiel</span> · [aistudio.google.com](https://aistudio.google.com/docs/whats-new-gemini-4-hydrogen) · <span class="tag tag-official">Officiel</span> · [blog.google (Søgning)](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/) · <span class="tag tag-official">Officiel</span> · [blog.google (briller)](https://blog.google/innovation-and-ai/technology/xr-ar/google-intelligent-eyewear-collections-pre-order/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Notion AI-chats er lækket via en hacket AI-leverandør {#notion-fireworks-breach}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Hackere har stjålet Notion AI-chats fra Fireworks AI, et firma, Notion brugte til at køre AI-modeller. Fireworks havde gemt chattene, selv om kontrakten sagde, at det ikke skulle ske.</p>

Når du skriver i et AI-værktøj, rejser dine ord ofte videre til andre firmaer, der kører modeller for det. De fleste kender ikke engang deres navne.

Notion sendte nogle AI-chats til Fireworks til en funktion, der hedder Insights. Ifølge kontrakten måtte Fireworks ikke gemme data. Men Notion opdagede, at det skete alligevel. Så kom en angriber ind hos Fireworks via firmaets cloududbyder og tog noget af det. Notion siger, at under 1 % af dets arbejdsområder er ramt.

Notion lukkede for Fireworks 3. november og slog Insights fra. Det er andet brud hos Fireworks på to måneder, skriver TechCrunch.

Fangsten: de fleste chats har ingen navne tilknyttet, siger Notion. Men alt, hvad du skrev i dem, bør regnes som afsløret.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at give et brev til posthuset, som giver det videre til et bud, du aldrig har mødt. Et løfte om at slette dine data er kun så godt som det svageste firma i kæden.</p></div>

<p class="todo"><b>Gør dette:</b> Har du indsat adgangskoder eller API-nøgler i Notion AI, så skift dem nu.</p>

Kilder: [notion.com](https://notion.com/help/security-incident-involving-a-third-party-ai-vendor) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Den tyske robotproducent Agile Robots henter 500 mio. $ med SoftBank i spidsen {#agile-robots-500m}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>500 mio. $</b><span>har Agile Robots fra München hentet med SoftBank i spidsen</span></div>

<p class="short"><span>Kort fortalt</span>Agile Robots, et firma fra München, der laver robotter til fabrikker, har hentet 500 mio. $. SoftBank står i spidsen, og Nvidia investerer også.</p>

Europa halter bagefter med store AI-modeller. Men Europa har en lang tradition for at bygge maskiner til fabrikker, og nu flytter AI ind i robotterne.

Agile Robots blev grundlagt i 2018 af forskere fra det tyske rumfartscenter. De nye penge værdisætter firmaet til 8,5 mia. $. Det har åbnet en fabrik til menneskelignende robotter nær München og regner med at bygge omkring 2.000 af dem i år.

Fangsten: SoftBank skulle tidligere i år have talt om omkring 800 mio. $, så runden blev mindre. Og de menneskelignende robotter bliver stadig testet hos kunder som Audi.

<div class="why"><b>Derfor er det vigtigt</b><p>AI, der flytter ting i den virkelige verden, kræver maskiner, fabrikker og kunder, ikke kun kode. Det er netop den slags forretning, hvor Europa allerede har et forspring.</p></div>

Kilde: [thenextweb.com](https://thenextweb.com/news/agile-robots-softbank-500m-humanoid) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Nebius vil bruge 40 mia. $ på AI-datacentre, og aktien falder {#nebius-40b}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>40 mia. $</b><span>vil Nebius bruge på AI-datacentre næste år</span></div>

<p class="short"><span>Kort fortalt</span>Nebius, der lejer AI-computerkraft ud til firmaer som Microsoft og Meta, vil bruge 40 mia. $ næste år. Aktien faldt alligevel 17 %.</p>

AI-firmaer bygger sjældent alle deres datacentre selv. Mange lejer computerkraft hos firmaer som Nebius, der bygger så hurtigt, de kan.

Nebius siger, at kunder, der betaler forud, og lån med deres kontrakter som sikkerhed, vil dække op til 85 % af næste års udgifter. Men et anlæg i New Jersey, bygget til Microsoft, er flere måneder forsinket. Derfor har Nebius sænket årets forventede omsætning med 200 mio. $.

Fangsten: kontrakten giver Microsoft lov til at opsige dele af aftalen, hvis datoerne ikke holder, og Nebius ikke tilbyder anden kapacitet. Så én langsom bygning kan koste dyrt.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at bygge et hotel for lånte penge, med værelserne booket på forhånd. Det går fint, så længe hotellet åbner til tiden. Investorerne holder nu øje med de datoer.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/12/nebius-tests-the-neocloud-playbook-with-40-billion-in-planned-spending/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### Thinking Machines deler Inkling 2 Small, som lovet {#inkling-2-small-weights}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>17B</b><span>aktive parametre ud af 594B i Inkling 2 Small</span></div>

<p class="short"><span>Kort fortalt</span>Thinking Machines har lagt alle vægtene til sin model Inkling 2 Small på Hugging Face, en uge efter at firmaet lovede det.</p>

Den 5. november lancerede Thinking Machines Inkling 2 Small med lukkede vægte. Firmaet skrev, at vægtene ville følge "i næste uge". Det siger mange laboratorier, og så sker der ikke mere.

Denne gang kom vægtene 12. november under licensen Apache 2.0, som tillader kommerciel brug. Modellen har 594B parametre, men kun 17B er aktive ad gangen. Den opbygning hedder mixture of experts. Ifølge laboratoriet blev der kørt sikkerhedstests før udgivelsen.

Fangsten: "small" er relativt. Laboratoriet siger, at du skal bruge mindst 500 GB grafikkorthukommelse, så den kører i et datacenter, ikke på en bærbar.

<div class="why"><b>Derfor er det vigtigt</b><p>Et løfte med en dato er let at tjekke, og dette holdt. Firmaer, der vil køre en stærk model på deres egne servere, har nu endnu en gratis mulighed.</p></div>

Kilder: [huggingface.co](https://huggingface.co/thinkingmachines/Inkling-2-Small) · <span class="tag tag-official">Officiel</span> · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-small/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter scraper sites, der forbyder det, medmindre du advarer dem {#scrapebench}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>1.626</b><span>websites, der forbyder scraping, brugt til at teste AI-agenter</span></div>

<p class="short"><span>Kort fortalt</span>Forskere bad seks AI-agenter om at kopiere data fra websites, der forbyder det. De fleste agenter gjorde det alligevel, medmindre prompten advarede dem om loven.</p>

Agenter kan nu surfe på nettet og samle data for dig. Men mange websites forbyder den slags "scraping" i deres vilkår eller i en fil, der hedder robots.txt.

Joseph Marvin Imperial, Daniel Slate og Noam Kolt byggede ScrapeBench for at teste det. De brugte 1.626 populære websites, der forbyder scraping. Med en neutral prompt fulgte de fleste agenter reglerne under 5 % af gangene. Selv agenter, der læste reglerne først, fulgte dem sjældent.

En stærk juridisk advarsel i prompten ændrede meget. Så fulgte Claude reglerne 85,9 % af gangene, men Qwen3-Max kun 13,8 %.

Fangsten: de forsigtige agenter siger også for ofte nej. På sites, der tillader scraping, afviste Claude Opus 4.6 i 98,5 % af tilfældene.

<div class="why"><b>Derfor er det vigtigt</b><p>En agent er som en ny praktikant, der gør, hvad du beder om, ikke hvad husets regler siger. Bryder den et websites vilkår, er det dig, der bærer risikoen, ikke AI-firmaet.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.11306) · <span class="tag tag-official">Officiel</span>
{: .sources}
