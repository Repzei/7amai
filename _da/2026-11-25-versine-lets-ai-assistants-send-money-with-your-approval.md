---
title: "Versine lader AI-assistenter sende penge med din godkendelse"
summary: "Startuppen Versine lader dig betale folk ved at bede din AI-assistent om det. Hver betaling kræver din passkey eller en grænse, du har sat på forhånd. Desuden: Tidal sletter sange lavet helt af AI, Anthropics aktie falder under salgskursen, private søgninger finder mulige planeter, og en åben billedmodel retter sin egen tekst."
date: 2026-11-25 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "mcp", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "Versine lader en AI-assistent sende penge for dig inden for dine grænser.", why: "Alle, der overvejer at lade en assistent betale for ting." }
  - { t: "Tidal sletter sange, der er lavet helt af AI, fra 9. december.", why: "Alle, der streamer musik eller lægger den op." }
  - { t: "Anthropics aktie faldt under salgskursen, mens Sierra fordoblede sin værdi.", why: "Alle, der følger hvordan investorer vurderer AI-firmaer." }
  - { t: "To personer brugte OpenAIs kodeværktøjer til at finde mulige nye planeter.", why: "Alle, der er nysgerrige på AI-værktøjer i rigtig forskning." }
  - { t: "SenseTime har frigivet en åben billedmodel, der retter sine egne billeder.", why: "Designere og udviklere, der laver billeder med AI." }
other_lang_url: /2026/11/25/
items:
  - { n: 1, anchor: "versine-chat-payments", signal: worth, tracks: [build, general], min: 1.5, source: official, topic: agent, why: "En assistent, der kan betale, er nyttig, men penge du ikke kan hente tilbage kræver hårde grænser.", steps: { title: "Sådan foregår en betaling i Versine", list: ["Du beder din assistent betale nogen", "Versine sender en anmodning til sin app", "Du godkender den med din passkey", "Pengene flytter og kan ikke fortrydes"] } }
  - { n: 2, anchor: "tidal-ai-tracks", signal: worth, tracks: [general], min: 1.5, source: reported, number: "43 %", number_label: "af de numre, der blev lagt op på Tidal i 90 dage, var lavet med AI", topic: news, why: "Når næsten halvdelen af nye uploads kommer fra AI, må en musiktjeneste beslutte, hvad den er til for." }
  - { n: 3, anchor: "ai-share-prices", signal: worth, tracks: [general], min: 1, source: reported, number: "76 dollar", number_label: "Anthropics lavpunkt tirsdag, under salgskursen på 83 dollar", topic: money, why: "Investorer betaler stadig for AI-firmaer med forretningskunder, men ikke for enhver AI-aktie.", bars: { title: "Anthropics aktiekurs", max: 110, rows: [{ l: "Solgt til", v: 83, t: "83 dollar" }, { l: "Tirsdag lavt", v: 76, t: "76 dollar", hl: true }] } }
  - { n: 4, anchor: "openai-exoplanets", signal: quick, tracks: [general], min: 1, source: official, number: "19 millioner", number_label: "stjerner gennemsøgt i det ene af de to private projekter", topic: research, why: "Arbejde, der krævede en forskergruppe, kan nu laves af én person med offentlige data." }
  - { n: 5, anchor: "sensenova-u1-6", signal: quick, tracks: [build], min: 1, source: official, number: "92,28", number_label: "point i en test af tekst i billeder, op fra 86,04 i første forsøg", topic: image, why: "En model, der tjekker sit eget billede, fanger den ødelagte tekst, før du skal gøre det." }
  - { n: 6, anchor: "songe-local-training", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: local, why: "En lokal model, der lærer af dine rettelser, bliver mere brugbar, og intet forlader din maskine.", do: "Kører du en lokal model med en kodeagent, så prøv Songe og start med en Quick Dream." }
  - { n: 7, anchor: "muted-distillation", signal: worth, tracks: [build], min: 1, source: official, number: "57 %", number_label: "færre ord skrevet pr. opgave i forskernes test", topic: research, why: "Små agenter bliver billigere, når læreren bedømmer det de gjorde, ikke hvordan de tænkte." }
---

### 1. Versine lader AI-assistenter sende penge med din godkendelse {#versine-chat-payments}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Startuppen Versine lader dig betale folk ved at bede din AI-assistent om det. Hver betaling kræver dit fingeraftryk eller ansigt, medmindre du har sat en grænse.</p>

Assistenter kan bestille, søge og skrive for dig. Betaling har stået uden for, fordi en forkert overførsel er svær at gøre om. Versine, der kom i denne uge, er et svar på det.

Tjenesten kobler sig på via MCP (se Forklaret nedenfor), standarden der lader en assistent bruge tjenester udefra. Du beder ChatGPT, Claude eller Gemini om at sende penge, og Versine sender en anmodning til sin egen app. Du godkender den med din passkey, så telefonen signerer den betaling, du ser på skærmen.

Du kan også give noget af kontrollen videre. Hver assistent kan få en grænse, fx 30 dollar den må sende uden at spørge. Betroede personer kan få penge uden godkendelse inden for en ugentlig grænse.

Der er reelle forbehold. Stifterne siger, at betalinger er endelige efter design, så der er ingen klageknap, hvis en assistent bliver narret. Det er kun for folk i USA over 18 år, og firmaet siger selv, at det ikke er en bank.

<div class="why"><b>Derfor er det vigtigt</b><p>At give en assistent et budget er som at give en teenager et forudbetalt kort i stedet for hele pungen. Det virker kun, hvis kortet har en grænse. Den grænse er værd at læse, før du kobler noget til.</p></div>

Kilder: [versine.com](https://versine.com) · <span class="tag tag-official">Officiel</span> · [news.ycombinator.com](https://news.ycombinator.com/item?id=50634426) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Tidal sletter sange, der er lavet helt af AI, fra 9. december {#tidal-ai-tracks}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>43 %</b><span>af de numre, der blev lagt op på Tidal i 90 dage, var lavet med AI</span></div>

<p class="short"><span>Kort fortalt</span>Tidal siger, at tjenesten fjerner numre lavet helt af AI fra 9. december. Den venter at slette mere end 29 millioner sange inden årets udgang.</p>

I juni holdt Tidal op med at betale royalties for sange lavet helt af AI, og tjenesten satte mærke på dem. Det bremsede ikke strømmen. Robert Anderson, der leder Tidal Music, siger, at mere end 43 % af de seneste 90 dages numre var lavet med AI, skriver TechCrunch.

Derfor går Tidal videre og sletter dem. Efter tjenestens egen optælling ligger der omkring 27 millioner sådanne numre i kataloget. Det er 6,3 % af det, og 96 % af dem er aldrig blevet streamet. Sange lavet med hjælp fra AI må blive.

Fangsten: Tidal har meldt det ud på et socialt medie, ikke i et regelsæt. Tjenesten siger ikke, hvordan den afgør, at et nummer er lavet helt af AI. Den grænse er, hvor diskussionerne vil ligge.

<div class="why"><b>Derfor er det vigtigt</b><p>Streamingtjenester betaler ud af én pulje, så hvert nummer, der kommer ind, tager en skive. Hvis næsten halvdelen af nye uploads er maskinlavede, og ingen hører dem, må tjenesten vælge, om den er et bibliotek eller et lager.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/24/tidal-to-ban-and-remove-millions-of-ai-generated-tracks-as-ai-slop-inundates-music-streaming/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Anthropics aktie faldt under salgskursen, mens Sierra fordoblede sig til 30 mia. dollar {#ai-share-prices}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Anthropics aktie var tirsdag nede i 76 dollar, under de 83 dollar den blev solgt til. Samme uge hentede agent-startuppen Sierra penge til dobbelt værdi.</p>

Anthropic blev noteret på Nasdaq i sidste uge til 83 dollar pr. aktie og lukkede første dag i 97,17 dollar, som vi skrev 20. november. Tirsdag middag var den nede i 76 dollar, næsten 12 % under mandagens lukkekurs, skriver TechCrunch. Nvidia faldt mere end 7 % samme formiddag efter mandagens spring, da Jensen Huang kom tilbage som topchef.

En aktie under salgskursen betyder noget, fordi bankerne bag salget normalt sætter prisen lavere end forventet.

De private penge ser anderledes ud. Mandag hentede Sierra, der bygger agenter til kundeservice, 1,75 mia. dollar til en værdi af 30 mia. dollar. Det er det dobbelte af for et halvt år siden. Sierra siger, at firmaets løbende indtægtstempo fordobledes til 400 mio. dollar på fem måneder.

<div class="why"><b>Derfor er det vigtigt</b><p>To markeder måler AI med hver sin tommestok. Investorer på børsen spørger, hvad firmaet tjener nu. De private betaler stadig for vækst, så længe der er betalende forretningskunder bag.</p></div>

Kilder: [techcrunch.com (Anthropic)](https://techcrunch.com/2026/11/24/anthropic-shares-fall-below-ipo-price-a-worrying-sign-for-ai-startups/) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com (Sierra)](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. To private søgninger brugte OpenAIs værktøjer til at finde mulige nye planeter {#openai-exoplanets}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>19 millioner</b><span>stjerner gennemsøgt i det ene af de to private projekter</span></div>

<p class="short"><span>Kort fortalt</span>To personer brugte OpenAIs kodeværktøjer til at søge efter planeter i offentlige teleskopdata. Astronomer tjekker nu deres kandidater, og ingen er bekræftede planeter.</p>

En planet, der går forbi sin stjerne, dæmper lyset en lille smule, hver gang den runder. At finde det mønster er et softwareproblem, og det passer til et kodeværktøj.

OpenAI skriver, at ingeniøren Kevin Bond brugte Codex til at læse publicerede metoder og bygge en søgning. Han kørte den over omkring 100.000 stjerner fra Kepler-teleskopet. To signaler skilte sig ud, med dyk hver 13,8 og 4,8 dage.

Ethan Byrd, der driver startuppen Primitive, søgte omkring 19 millioner stjerner. Han fik 49 kandidater, og en af dem ligger nu hos forskere fra NASA.

Fangsten: kandidater er ikke planeter. To stjerner, der krydser hinanden, kan give samme dyk, og det kan tage år at bekræfte én. En astronom fra SETI Institute kørte sin egen søgning og fandt to af Bonds signaler.

<div class="why"><b>Derfor er det vigtigt</b><p>Dataene har ligget åbent i årevis. Det nye er arbejdet foran dem. At læse forskningen og skrive koden er ikke længere et job for en gruppe.</p></div>

Kilde: [openai.com](https://openai.com/index/searching-for-distant-planets-with-astra/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 5. SenseTimes åbne billedmodel tjekker sine egne billeder og retter teksten {#sensenova-u1-6}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>92,28</b><span>point i en test af tekst i billeder, op fra 86,04 i første forsøg</span></div>

<p class="short"><span>Kort fortalt</span>SenseTime har frigivet SenseNova U1.6, en åben billedmodel på 8B. Den tegner et billede, sammenligner det med din prompt og laver så en rettet version.</p>

AI-billeder får stadig tekst forkert. Bogstaver mangler på en plakat, og en graf får de forkerte mærkater. Normalt er det dig, der ser det og spørger igen.

U1.6, der kom tirsdag, gør det selv. Modellen tegner et udkast, læser det op mod prompten og tegner en rettet version. I SenseTimes egen test af tætte infografikker går resultatet fra 86,04 til 92,28 point. Tallene gælder API-versionen.

Vægtene ligger på Hugging Face og koden på GitHub under Apache 2.0, med understøttelse af ComfyUI. SenseTime skriver, at den balancerede opsætning kræver omkring 24 GB grafikhukommelse.

Fangsten: tallene er SenseTimes egne, og testen er bygget til infografikker.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en printer, der tjekker siden og printer den igen. At se efter og spørge igen flytter ind i modellen.</p></div>

Kilder: [sensetime.com](https://www.sensetime.com/cn/news/sensenova-u1-6-open-source-20261124-1152) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/OpenSenseNova/SenseNova-U1) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Songe træner din lokale model på dine egne rettelser, mens maskinen står stille {#songe-local-training}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Songe er et gratis værktøj, der sidder mellem din kodeagent og din lokale model. Det skriver dine rettelser ned og træner modellen på dem, mens du er væk.</p>

En lokal model husker ikke, at du i går bad den holde op med at skrive kommentarer. Hver samtale starter forfra.

Songe, der nåede forsiden af Hacker News tirsdag, optager, hvad der sker efter hvert skridt: fejl i værktøjer, nye forsøg og dine rettelser.

Derefter har det to tilstande. En "Quick Dream" tager minutter og lægger dine ønsker ind i modellens instruktioner. En "Deep Dream" tager en time eller mere og træner en lille tilføjelse ud fra øveopgaver, den selv skriver.

En ny version bliver kun brugt, hvis den slår den gamle på dine egne samtaler, og et klik ruller den tilbage. Projektet skriver, at intet forlader din maskine.

Fangsten: det er tidligt, med 713 stjerner og ingen udgivelser endnu. Træning kræver et grafikkort eller Apple Silicon.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er forskellen på en ny vikar hver morgen og en, der husker, hvordan du vil have det. Dine rettelser holder op med at være spildt arbejde.</p></div>

<p class="todo"><b>Prøv det:</b> Kører du en lokal model med en kodeagent, så prøv Songe og start med en Quick Dream, som du kan fortryde.</p>

Kilde: [github.com](https://github.com/sous-labs/songe) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En agent skrev 57 % færre ord, da læreren holdt op med at læse dens tanker {#muted-distillation}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>57 %</b><span>færre ord skrevet pr. opgave i forskernes test</span></div>

<p class="short"><span>Kort fortalt</span>Forskere har fundet, at en lille agent, der trænes af en større model, bliver mere og mere ordrig. Det hjælper at skjule dens tanker for læreren.</p>

Små modeller bliver ofte trænet ved at se en stor model og blive rettet undervejs. Problemet, forfatterne beskriver, er, at elevens tankegang så vokser og vokser, og det koster penge på hver opgave.

Yuwei Zhang og seks kolleger peger på rettelsen selv. Læreren ser elevens tanker og bedømmer også dem, så eleven lærer at skrive flere af dem. Deres ændring, muted distillation, skjuler tankerne, så læreren kun bedømmer handlingerne.

I en test med kontoropgaver skrev den trænede agent 57 % færre ord pr. opgave med samme træfsikkerhed. I en regnearkstest skrev den 53 % færre og blev 4,8 point bedre til at svare rigtigt i første forsøg.

Fangsten: siden mærker selv artiklen som igangværende arbejde, ingen udefra har tjekket den, og begge tests er benchmarks.

<div class="why"><b>Derfor er det vigtigt</b><p>Hvert ord, en agent skriver, står på regningen. Hvis læreren bedømmer resultatet i stedet for mumlen undervejs, bliver arbejdet billigere, uden at agenten bliver dårligere.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.28445) · <span class="tag tag-official">Officiel</span>
{: .sources}
