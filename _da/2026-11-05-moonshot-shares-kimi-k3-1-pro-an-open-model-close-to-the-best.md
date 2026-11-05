---
title: "Moonshot deler Kimi K3.1 Pro, en åben model tæt på de bedste"
summary: "Alle kan nu hente Kimi K3.1 Pro, der kommer tæt på Claude Opus 5.5 i en kodetest, efter Moonshots egne tal. Desuden: OpenAIs AI byggede 948 angreb på Linux, Meta og OpenAI køber værktøjer til kodeagenter, Siri AI åbner for apps, og næsten ingen bestiller en Uber gennem en agent."
date: 2026-11-05 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "parameter", from: 1, more: ["mixture-of-experts", "context-window"] }
today:
  - { t: "Moonshot har lagt Kimi K3.1 Pro frit ud, og den er tæt på Opus 5.5 til kode.", why: "Firmaer, der vil have en topmodel på deres egne servere." }
  - { t: "OpenAI siger, at dets AI byggede 948 angreb på Linux, hver med et udkast til en rettelse.", why: "Alle, der kører Linux-servere eller bruger en Android-telefon." }
  - { t: "Meta køber Conductor, og OpenAI køber Pierre, to værktøjer som kodeagenter arbejder i.", why: "Udviklere, der bruger Conductor, og alle, der følger, hvem der ejer AI-værktøjerne." }
  - { t: "Alle apps kan nu kobles på Siri AI i en testversion, men ikke i EU endnu.", why: "App-udviklere og Apple-brugere i Europa." }
  - { t: "AI-agenter bestilte kun fire Uber-ture i Ubers travleste uge i oktober.", why: "Alle, der venter på, at agenter klarer vores ærinder." }
other_lang_url: /2026/11/05/
items:
  - { n: 1, anchor: "kimi-k3-1-pro-weights", signal: big, tracks: [build, general, europe], min: 1.5, source: official, topic: open, why: "Et firma, der skal holde sine data hjemme, kan nu køre noget tæt på topmodellerne på egne servere.", number: "65,7", number_label: "point i en kodetest efter Moonshots egne tal, mod 66,4 for Claude Opus 5.5", tiles: [{ n: "58,2", t: "for GPT-6 Astra på samme liste" }] }
  - { n: 2, anchor: "openai-linux-root", signal: worth, tracks: [general, build], min: 1, source: reported, number: "948", number_label: "angreb på Linux, som OpenAI siger, at dets AI byggede, hver med et udkast til en rettelse", topic: security, why: "Når det bliver så billigt at finde fejl, handler kapløbet om, hvem der retter dem først.", do: "Installér opdateringer til Linux og Android, når de kommer." }
  - { n: 3, anchor: "coding-agent-tools", signal: worth, tracks: [build, general], min: 1, source: official, topic: business, why: "Værktøjerne omkring din kodeagent kan snart tilhøre de samme få firmaer, der laver modellerne.", do: "Conductor-brugere: flyt eller eksportér jeres cloud-arbejdsområder før 20. november." }
  - { n: 4, anchor: "siri-ai-apps", signal: worth, tracks: [build, general, europe], min: 1, source: official, topic: voice, why: "Alle apps kan blive noget, Siri kan bruge, men europæerne står udenfor indtil videre." }
  - { n: 5, anchor: "uber-agent-rides", signal: quick, tracks: [general], min: 1, source: reported, number: "4", number_label: "Uber-ture bestilt af AI-agenter i Ubers travleste uge i oktober", topic: agent, why: "En agent hjælper kun, når den er nemmere end appen, og det går allerede hurtigt at bestille en tur.", tiles: [{ n: "320 mio.", t: "ture og bestillinger hos Uber i samme uge" }] }
  - { n: 6, anchor: "drama-3-llama-cpp", signal: worth, tracks: [build, europe], min: 1, source: official, number: "16", number_label: "stemmer, Drama 3 kan bruge i én tekst, offline i llama.cpp", topic: voice, why: "Manuskripter og historier kan læses op med mange stemmer, uden at teksten forlader din maskine." }
  - { n: 7, anchor: "context-rot-competition", signal: worth, tracks: [build, general], min: 1, source: official, topic: research, why: "For apps, der fodrer AI med dokumenter, kan det betyde mere at fjerne dubletter og modsigelser end at skære i længden.", bars: { title: "Rigtige svar, når modellen slår et faktum op", max: 100, rows: [{ l: "Neutralt fyld", v: 97, t: "97 %" }, { l: "Ligner svaret", v: 16, t: "16 %", hl: true }] } }
---

### 1. Moonshot deler Kimi K3.1 Pro, en åben model tæt på de bedste {#kimi-k3-1-pro-weights}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>65,7</b><span>point i en kodetest efter Moonshots egne tal, mod 66,4 for Claude Opus 5.5</span></div>

<p class="short"><span>Kort fortalt</span>Alle kan nu hente hele Kimi K3.1 Pro. I en kodetest kommer den tæt på Claude Opus 5.5, efter Moonshots egne tal.</p>

De bedste AI-modeller lejer man som regel, man ejer dem ikke. Du sender dine data til OpenAI, Anthropic eller Google og betaler for hvert ord. Åbne modeller kører på dine egne maskiner, men de har ligget efter de bedste lukkede.

Moonshot, et kinesisk AI-firma, lancerede Kimi K3.1 Pro i oktober og lovede vægtene senest 4. november. Filerne kom på Hugging Face 2. november, to dage før tid.

Modellen har 2,8 billioner parametre, de tal den har lært under træningen. Men den bruger kun en lille del af dem til hvert ord, og det gør den billigere at køre.

I Terminal-Bench 4.0, en kodetest, får Kimi 65,7. Claude Opus 5.5 får 66,4 og GPT-6 Astra 58,2.

Fangsten: Moonshot har selv opgivet tallene, og ingen har tjekket dem endnu. Filerne fylder omkring 1,56 TB, så det er en model til datacentre, ikke til bærbare.

Licensen er Moonshots egen. Firmaer, der sælger modellen som hostet tjeneste og har over 20 mio. dollar i omsætning om året, skal have en særskilt aftale.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at kunne købe bilen i stedet for kun at lease den. Du skal have en stor garage, men ingen kan ændre vilkårene for dig. Et firma, der skal holde sine data hjemme, kan nu køre noget tæt på topmodellerne på egne servere.</p></div>

Kilde: [huggingface.co](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/moonshotai/Kimi-K3.1-Pro/blob/main/LICENSE) · <span class="tag tag-official">Officiel</span> · [kimi.ai](https://www.kimi.ai/blog/kimi-k3-1-pro) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. OpenAI siger, at dets AI byggede 948 måder at overtage Linux-computere på {#openai-linux-root}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>948</b><span>angreb på Linux, som OpenAI siger, at dets AI byggede, hver med et udkast til en rettelse</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI lod et AI-system lede efter fejl i Linux. Firmaet siger, at AI'en byggede 948 virkende angreb, der overtager en maskine, hver med et udkast til en rettelse.</p>

Linux kører på utallige servere, og det er kernen i alle Android-telefoner.

I denne uge beskrev OpenAI én kørsel med et AI-system bygget på en sikkerhedsmodel. Det kiggede på 2.308 mulige fejl. For 948 af dem skrev det et angreb, der gør en almindelig bruger til root, ejeren af hele maskinen.

Hvert angreb kom med et forslag til en rettelse, og kørslen kostede omkring 1,2 mio. dollar. Folk fra sikkerhedsfirmaet Trail of Bits gennemgår hvert fund, før det går videre til Linux.

Fangsten: vi kunne ikke åbne OpenAIs eget indlæg, så vi bygger på Startup Fortunes artikel. Rettelserne er udkast, og hvert angreb kræver, at angriberen allerede er på maskinen.

<div class="why"><b>Derfor er det vigtigt</b><p>Angribere kan få den samme slags hjælp. Når det bliver så billigt at finde fejl, handler kapløbet om, hvem der retter dem først.</p></div>

<p class="todo"><b>Gør dette:</b> Installér opdateringer til Linux og Android, når de kommer.</p>

Kilde: [startupfortune.com](https://startupfortune.com/openais-ai-pipeline-turned-2308-linux-kernel-bugs-into-948-root-exploits/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Meta og OpenAI køber de værktøjer, kodeagenter arbejder i {#coding-agent-tools}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Meta køber Conductor, der kører mange kodeagenter på én gang, og OpenAI køber Pierre, der gemmer deres kode. Conductors cloud lukker 20. november.</p>

En kodeagent skal have et sted at arbejde og et sted at gemme sin kode. I denne uge købte to store AI-firmaer virksomheder, der laver netop det.

#### <span>1 af 2</span> Meta køber Conductor
Med Conductor kan en udvikler køre flere agenter fra Anthropic og OpenAI side om side. Den 4. november skrev stifteren, at Conductor bliver en del af Meta, og Meta bekræftede handlen over for TechCrunch.

For brugerne går tiden. Cloud-tjenesten lukker 20. november, og så bliver dens data slettet. Appen på din Mac får nye modeller og rettelser til starten af 2027.

<p class="todo"><b>Gør dette:</b> Conductor-brugere: flyt cloud-arbejdsområder med "Transfer to local", eller eksportér det hele under Settings, Account, før 20. november.</p>

#### <span>2 af 2</span> OpenAI køber Pierre
Pierre laver Code Storage, en Git-tjeneste, som andre apps kan bygge ind. Dens kode kører allerede i Codex, OpenAIs kodeagent, skriver Axios. Prisen er ikke oplyst.

<div class="why"><b>Derfor er det vigtigt</b><p>AI-firmaerne sælger ikke længere kun motoren. De vil også have garagen og værkstedet. Så værktøjerne omkring din kodeagent kan snart tilhøre de samme få firmaer, der laver modellerne.</p></div>

Kilde: [conductor.build](https://www.conductor.build/changelog/0.93.0-conductor-is-joining-meta) · <span class="tag tag-official">Officiel</span> · [conductor.build](https://www.conductor.build/announcement) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/04/meta-acquires-ai-coding-startup-conductor/) · <span class="tag tag-reported">Rapporteret</span> · [theneuron.ai](https://www.theneuron.ai/news/openai-pierre-deal-github-ai-coding/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Apple lader alle apps koble sig på Siri AI, men ikke i EU endnu {#siri-ai-apps}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>App-udviklere kan nu koble deres apps på Apples nye Siri AI i en testversion. Men i EU kan man ikke bruge Siri AI på iPhone indtil videre.</p>

En stemmeassistent er kun så nyttig som de apps, den kan nå. Indtil nu er Apple begyndt at sætte Siri AI i sine egne apps, som Mail og Kort.

Siden 3. november kan alle udviklere koble en app på Siri AI i testversion 27.3 af iOS, macOS og Apples andre systemer. En app kan tilbyde handlinger, fx at tjekke en levering eller bestille bord. Med "skills" kan Siri sætte flere handlinger sammen til én.

Kunderne får Siri AI "om et par måneder", og apps, der bruger den, kan komme i App Store til foråret.

Fangsten: Siri AI findes ikke i EU på iPhone, iPad og Apple Watch indtil videre. Apple siger, at firmaet arbejder med EU på en løsning.

<div class="why"><b>Derfor er det vigtigt</b><p>Nu kan alle apps blive noget, Siri kan bruge. Men europæerne står udenfor indtil videre, så den nye Siri når senere frem til os.</p></div>

Kilde: [developer.apple.com](https://developer.apple.com/news/?id=gdk2umrf) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 5. AI-agenter bestilte kun fire Uber-ture i en travl uge {#uber-agent-rides}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>4</b><span>Uber-ture bestilt af AI-agenter i Ubers travleste uge i oktober</span></div>

<p class="short"><span>Kort fortalt</span>I sin travleste uge i oktober fik Uber kun fire ture fra AI-agenter. Samme uge havde firmaet omkring 320 mio. ture og bestillinger.</p>

AI-firmaerne siger, at agenter snart bestiller dine ture og din mad. Ubers tal viser, hvor langt der stadig er.

På sin regnskabskonference 4. november sagde Uber, at omkring 320 mio. ture og bestillinger gik gennem Uber og Uber Eats i halloween-ugen. AI-agenter bestilte kun fire af turene. Topchef Dara Khosrowshahi kaldte det "very, very early and very limited traction".

En grund kan være hastigheden, for appen bestiller en tur på omkring 50 sekunder.

Fangsten: det er én uge, og Uber håber stadig, at agenter vil give flere kunder.

<div class="why"><b>Derfor er det vigtigt</b><p>Det hjælper kun at spørge en agent, når det er nemmere end at trykke på en knap. En tur tager under et minut i appen, så agenterne skal slå en meget hurtig vane, før folk skifter.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### llama.cpp kan nu læse et manuskript op med mange stemmer, offline {#drama-3-llama-cpp}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>16</b><span>stemmer, Drama 3 kan bruge i én tekst, offline i llama.cpp</span></div>

<p class="short"><span>Kort fortalt</span>llama.cpp, den gratis motor bag mange lokale AI-apps, kan nu køre Fish Audios Drama 3. Den laver tekst om til tale med op til 16 stemmer på din egen maskine.</p>

En lydbog læst af AI kræver som regel en cloud-tjeneste, så dit manuskript må forlade din computer.

Den 4. november fik llama.cpp støtte for Drama 3, en talemodel fra Fish Audio. Den kan klare op til 16 talere i én tekst, og du kan tilføje stikord som [sighs] eller [laughs]. Den kan også efterligne en stemme ud fra et kort klip.

En, der gennemgik ændringen, testede engelsk og fransk og fik tale omkring 5 gange hurtigere end realtid.

Fangsten: licensen er Fish Audios egen, og modelsiden siger ikke, om man må bruge den i forretning.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at have et hold stemmeskuespillere på din egen computer. Manuskripter og historier kan læses op med mange stemmer, uden at teksten forlader din maskine.</p></div>

Kilde: [github.com](https://github.com/ggml-org/llama.cpp/pull/31613) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/fishaudio/drama-3) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI mister fakta til tekst, der ligner svaret, ikke til lange prompts, viser et studie {#context-rot-competition}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>En lang prompt alene forvirrer næppe en AI, der slår et faktum op. Det, der snyder den, er tekst, der ligner svaret, men siger noget andet.</p>

Mange AI-apps fylder prompten med dokumenter fundet ved en søgning. En udbredt bekymring er "context rot": jo længere prompten er, jo dårligere bliver modellen.

En forsker testede det på fem små åbne modeller. Med meget neutralt fyld fandt modellerne stadig det rigtige faktum 97 % til 100 % af gangene. Men når fyldet lignede beviset, fik de kun 16 % til 33 % rigtigt.

Et enkelt afsnit med et konkurrerende svar på det samme faktum gjorde mest skade. Modellernes opmærksomhed blev trukket væk fra det rigtige bevis, og det forklarede faldet langt bedre end længden.

Fangsten: det er en preprint af én forfatter, og modellerne er små, med højst 3 mia. parametre.

<div class="why"><b>Derfor er det vigtigt</b><p>En tyk telefonbog er fin, men to opslag for samme person med forskellige numre snyder dig. For apps, der fodrer AI med dokumenter, kan det betyde mere at fjerne dubletter og modsigelser end at skære i længden.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.04169) · <span class="tag tag-official">Officiel</span>
{: .sources}
