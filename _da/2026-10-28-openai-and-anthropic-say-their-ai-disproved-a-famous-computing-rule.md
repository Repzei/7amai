---
title: "OpenAI og Anthropic siger, at deres AI har modbevist en berømt regel i datalogi"
summary: "AI-modeller hos to laboratorier siger, at de har brudt en grundlæggende antagelse om svære problemer, og eksperter tjekker det nu. Desuden: Claude i medicinlaboratorier og rådhuse, Googles Genie 4, jagten på chips uden for Nvidia og rettelser til kodeagenter."
date: 2026-10-28 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "p-vs-np", from: 1, more: ["formal-verification", "compute"] }
today:
  - { t: "AI-modeller hos OpenAI og Anthropic siger, at de har modbevist en central regel om svære problemer.", why: "Alle, der er nysgerrige på, om AI kan lave ny forskning." }
  - { t: "Anthropic viser Claudes tidlige arbejde med medicin og giver USA's offentlige sektor 40 % rabat.", why: "Alle, der følger, hvor AI-firmaerne leder efter store kunder." }
  - { t: "Googles Genie 4 laver en verden, du kan gå rundt i, nu med lyd.", why: "Alle, der interesserer sig for spil, video eller robotter." }
  - { t: "OpenAI vil efter sigende købe Googles chips, og en sky uden Nvidia har rejst 100 mio. dollar.", why: "Alle, der spekulerer på, hvad der sker med prisen på AI." }
  - { t: "Claude Code holder op med at overskrive lange regelfiler, og Copilot-agenter får deres eget login.", why: "Udviklere, der bruger kodeagenter." }
other_lang_url: /2026/10/28/
items:
  - { n: 1, anchor: "eth-refuted", signal: big, tracks: [general, build], min: 1.5, source: official, number: "1999", number_label: "året, hvor antagelsen først blev udgivet", topic: research, why: "Holder påstanden, så laver AI selv ny forskning og hjælper ikke bare til." }
  - { n: 2, anchor: "anthropic-drugs-gov", signal: worth, tracks: [general, build], min: 1.5, source: official, number: "40 %", number_label: "rabat på Claude til hele USA's offentlige sektor", topic: business, why: "AI-firmaer skal nu bevise deres værdi på langsomme, forsigtige steder som medicinlaboratorier og rådhuse.", tiles: [{ n: "89 %", t: "mindre tid til menneskers gennemgang af medicinpapirer hos Enveda" }] }
  - { n: 3, anchor: "genie-4", signal: worth, tracks: [general], min: 1, source: official, topic: image, why: "Verdenerne kan også være træningsbaner, hvor robotter og agenter øver sig uden at ødelægge noget." }
  - { n: 4, anchor: "chips-beyond-nvidia", signal: worth, tracks: [general, build], min: 1, source: reported, number: "800 mio. $", number_label: "General Computes værdi, op fra 60 mio. dollar i maj", topic: chips, why: "Flere chipleverandører betyder, at Nvidia ikke længere kan sætte en hvilken som helst pris." }
  - { n: 5, anchor: "dev-tool-fixes", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "En agent med sit eget adgangskort kan spores og slukkes uden at røre ved personen bag den.", do: "Opdatér Claude Code til version 2.1.312, hvis dit projekt har lange regelfiler." }
  - { n: 6, anchor: "lfm3", signal: worth, tracks: [build, general, europe], min: 1, source: official, number: "1 GB", number_label: "størrelsen på LFM3's tekstmodel i 4-bit", topic: local, why: "En stemmeassistent kan virke uden net, så det, du siger, aldrig forlader rummet.", do: "Kør ollama run lfm3 på en Mac med Ollama." }
  - { n: 7, anchor: "effort-level", signal: worth, tracks: [build, general], min: 1.5, source: official, topic: research, why: "Højeste indsats virker mindre som en kvalitetsknap og mere som et taxameter, der bare kører.", number: "83,0 %", number_label: "af opgaverne løste Claude Sonnet 5 trinvis, mod 76,1 % ved højeste indsats" }
---

### 1. OpenAI og Anthropic siger, at deres AI har modbevist en berømt regel i datalogi {#eth-refuted}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>1999</b><span>året, hvor antagelsen først blev udgivet</span></div>

<p class="short"><span>Kort fortalt</span>AI-modeller hos OpenAI og Anthropic siger, at de har brudt en grundlæggende antagelse om, hvor svære visse opgaver er. Eksperter tjekker det, og intet er bekræftet endnu.</p>

Nogle opgaver er lette at tjekke, men ser meget svære ud at løse. Får du et svar, kan du hurtigt se, om det passer. Men at finde et svar ser ud til at tage eksponentielt længere tid, jo større opgaven bliver.

Dataloger gjorde den fornemmelse til en regel, kaldet Exponential Time Hypothesis, eller ETH. Russell Impagliazzo og Ramamohan Paturi udgav den første gang i 1999, og hundredvis af artikler bygger på den.

Mandag sagde OpenAI, at en intern model havde fundet en metode, der vokser langsommere end det. Så ville ETH være forkert. Modellen fandt den 16. oktober, og Lean, et program der tjekker beviser, godkendte den dagen efter, skriver The Next Web. En af Anthropics matematikere mente, at OpenAI byggede på tidligere forskning. Få timer senere lagde Anthropic sit eget modbevis ud, fundet af en intern Claude-model.

Fangsten: ingen har gennemgået påstandene fuldt ud endnu. Impagliazzo, Paturi og Ryan Williams fra MIT leder gennemgangen. Deres deltagelse skal ikke ses som en godkendelse, skriver de. Anthropic tilføjer, at resultatet ikke siger noget om at løse rigtige opgaver hurtigere. Og OpenAI er "ret sikker på", at det ikke bryder nogen kryptering, fortæller Williams til TechCrunch.

<div class="why"><b>Derfor er det vigtigt</b><p>I årtier har "det kan ikke løses hurtigt" været en del af det fundament, datalogien står på. Har en AI knækket det, laver AI selv ny forskning og hjælper ikke bare til. Williams siger, at alle dataloger nu bør tage P = NP, fagets største åbne spørgsmål, lidt mere alvorligt.</p></div>

Kilde: [thenextweb.com](https://thenextweb.com/news/openai-exponential-time-hypothesis-false-kakeya-yang-mills) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/10/27/frontier-ai-labs-say-their-models-refuted-the-exponential-time-hypothesis-what-does-that-mean/) · <span class="tag tag-reported">Rapporteret</span> · [github.com/anthropics](https://github.com/anthropics/formal-math/tree/main/eth) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Anthropic viser Claudes arbejde med medicin og sænker prisen for USA's myndigheder {#anthropic-drugs-gov}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>40 %</b><span>rabat på Claude til hele USA's offentlige sektor</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic siger, at Claude har sat fart på tidlig medicinforskning hos seks partnere. Samtidig giver firmaet hele USA's offentlige sektor 40 % rabat på Claude.</p>

Medicinlaboratorier og myndigheder er langsomme, forsigtige kunder, og begge drukner i papirarbejde.

#### <span>1 af 2</span> Claude i medicinlaboratoriet
Tirsdag fortalte Anthropic om sit arbejde med seks medicinfirmaer. Hos Enveda læste Claude en stor bunke papirer om produktionen. Den fandt alle de fejl, de menneskelige korrekturlæsere havde fundet, plus syv mere, og skar 89 % af tiden til gennemgang væk. Anthropic har også købt Mithril Medicine, et enmandsfirma, der arbejder med to sjældne muskelsygdomme.

Fangsten: næsten det hele er på et tidligt stadie, så ingen medicin er afprøvet på mennesker. Holder resultaterne, kan et første forsøg med mennesker tidligst begynde i slutningen af 2028.

#### <span>2 af 2</span> 40 % rabat til myndigheder
Amerikanske myndigheder i forbundsstaten, delstater, kommuner og stammer får nu 40 % rabat på Claude Enterprise, Claude for Government og API'et. Der er intet minimumsforbrug. Anthropic regner med, at aftalen sparer det offentlige for 1 mia. dollar.

<div class="why"><b>Derfor er det vigtigt</b><p>Smarte demoer vinder ikke længere de store kontrakter. AI-firmaer skal nu bevise deres værdi på langsomme, forsigtige steder som et medicinlaboratorium eller et rådhus. En lav pris får dem ind ad døren.</p></div>

Kilde: [anthropic.com](https://www.anthropic.com/research/early-progress-drug-development) · <span class="tag tag-official">Officiel</span> · [anthropic.com](https://www.anthropic.com/news/expanding-partnership-gsa) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Googles Genie 4 bygger en verden, du kan gå rundt i, med lyd {#genie-4}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Google DeepMinds Genie 4 laver en verden, du kan bevæge dig rundt i, mens den bliver til. Nu skaber den også sin egen lyd, musik og tale.</p>

En videomodel laver et klip, du ser. En verdensmodel laver en scene, du kan gå rundt i, som et computerspil, ingen har kodet.

Google DeepMind viste Genie 4 tirsdag. Du bevæger dig med tastaturet og ændrer scenen med tekst, for eksempel vejret. Det er Googles første verdensmodel i realtid, der selv laver lyd.

Fangsten: kun udvalgte testere kan bruge den i dag, og Google giver ingen dato for flere. Detaljer kan også skride over lange sessioner.

<div class="why"><b>Derfor er det vigtigt</b><p>Spil er det, folk lægger mærke til først, men Google lancerer også de her verdener som træningsbaner. En robot eller en agent kan øve sig der igen og igen uden at ødelægge noget i virkeligheden.</p></div>

Kilde: [deepmind.google](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. OpenAI vil efter sigende købe Googles chips, og Nvidias rivaler tiltrækker penge {#chips-beyond-nvidia}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>800 mio. $</b><span>General Computes værdi, op fra 60 mio. dollar i maj</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI vil købe Googles AI-chips, skriver The Information. Og et skyfirma bygget på chips fra Nvidias rivaler har rejst 100 mio. dollar.</p>

Næsten al AI kører på Nvidias chips, så Nvidia bestemmer i høj grad prisen på regnekraft. Så de store købere vil have en leverandør mere.

#### <span>1 af 2</span> OpenAI og Googles TPU'er
OpenAI vil købe Googles chips, kaldet TPU'er, skrev The Information tirsdag. Mediet henviser til én unavngiven kilde, skriver Reuters, og nævner ingen vilkår. Reuters skrev i juni 2025, at OpenAI var begyndt at leje TPU'er, og aftaler med Anthropic har allerede skabt efterspørgsel efter dem.

#### <span>2 af 2</span> En sky uden Nvidia
General Compute leverer servere med chips fra Cerebras, SambaNova og Positron til andre skyfirmaer. Firmaet har rejst 100 mio. dollar, og dets værdi steg fra 60 mio. dollar i maj til 800 mio. dollar, skriver TechCrunch.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en by med én tankstation, der får en til. Den første kan ikke længere tage en hvilken som helst pris, og på sigt påvirker det, hvad du betaler for AI.</p></div>

Kilde: [investing.com (Reuters)](https://www.investing.com/news/stock-market-news/openai-plans-to-buy-googles-ai-chips-the-information-reports-4977342) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/10/27/general-compute-raises-100-million-series-a-countering-the-neocloud-disaster-narrative/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Claude Code overskriver ikke længere lange regelfiler, og Copilot-agenter får eget login {#dev-tool-fixes}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Claude Code retter en fejl, der kunne overskrive store CLAUDE.md-filer. Og GitHub lader Copilot-agenter arbejde under en apps egen identitet.</p>

#### <span>1 af 2</span> Claude Code 2.1.312
Claude Code læser dit projekts regler i en fil, der hedder CLAUDE.md. Version 2.1.312 retter en fejl, hvor Claude kunne overskrive en meget stor CLAUDE.md eller regelfil i en undermappe efter kun at have set starten. Så kunne den erstatte regler, den aldrig havde læst.

<p class="todo"><b>Gør dette:</b> Opdatér Claude Code til version 2.1.312, hvis dit projekt har lange regelfiler.</p>

#### <span>2 af 2</span> Copilot-agenter med eget login
Indtil nu lånte en bot, der brugte Copilot, en persons login. I en offentlig testversion kan en GitHub-app nu bruge Copilot SDK'et under sin egen identitet. Firmaet betaler, og dets loft for forbrug gælder.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at give en håndværker et gæstekort i stedet for dit eget adgangskort. En agent med sit eget kort kan spores og slukkes for sig.</p></div>

Kilde: [githubusercontent.com](https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Liquid AI's små LFM3-modeller hører, ser og taler på en bærbar {#lfm3}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>1 GB</b><span>størrelsen på LFM3's tekstmodel i 4-bit</span></div>

<p class="short"><span>Kort fortalt</span>Liquid AI har udgivet seks små åbne modeller til tekst, billeder og tale. De er bygget til at køre på dine egne enheder, for eksempel bærbare, ikke i skyen.</p>

De fleste stemmeassistenter sender dine ord til skyen, fordi gode modeller er for store til en telefon. Liquid AI's nye LFM3-familie er lille nok til at blive på enheden.

Tekstmodellen fylder omkring 1 GB i 4-bit. Omni-modellen tager imod tekst, billeder og lyd og kan svare med tale. Liquid siger, at tekstmodellen slår den meget større Qwen3.5-9B på lange opgaver i en browser.

Fangsten: tallene er Liquids egne, og modellen er ikke beregnet til kodeagenter. Firmaer med mere end 10 mio. dollar i årlig omsætning skal have en særlig aftale, skriver VentureBeat. Ollama kører dem kun på Mac indtil videre.

<div class="why"><b>Derfor er det vigtigt</b><p>En model, der hører og taler på omkring 1 GB, betyder, at en stemmeassistent kan virke uden net. Det, du siger, forlader aldrig rummet, og det betyder noget for alle, der skal følge EU's regler om privatliv.</p></div>

<p class="todo"><b>Prøv det:</b> Kør <code>ollama run lfm3</code> på en Mac med Ollama.</p>

Kilde: [huggingface.co](https://huggingface.co/blog/LiquidAI/lfm3) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/LiquidAI/LFM3-1.7B) · <span class="tag tag-official">Officiel</span> · [github.com/ollama](https://github.com/ollama/ollama/releases/tag/v0.40.12) · <span class="tag tag-official">Officiel</span> · [venturebeat.com](https://venturebeat.com/technology/liquid-ais-new-lfm3-models-put-browser-agents-voice-commands-and-image-recognition-onto-enterprise-controlled-devices) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Dagens forskningsartikel

### Højeste indsats koster ofte mere uden at løse mere {#effort-level}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>83,0 %</b><span>af opgaverne løste Claude Sonnet 5 trinvis, mod 76,1 % ved højeste indsats</span></div>

<p class="short"><span>Kort fortalt</span>Forskere fra Together AI og to amerikanske universiteter fandt, at en AI-models højeste indsats kan koste langt mere uden at løse mere. Det virker bedre at starte lavt og gå op.</p>

Mange AI-værktøjer lader dig vælge et indsatsniveau. Højere indsats betyder, at modellen tænker længere, og du betaler for hvert ekstra ord. Derfor tror de fleste, at mere er sikrest.

Forskerne testede otte modeller, blandt andre Claude Sonnet 5 og GPT-5.6, på opgaver i matematik, naturvidenskab og kode. På opgaver, som alle niveauer løste, kostede højeste indsats op til 42 gange så meget som laveste. Højere indsats fejlede også nogle opgaver, som lavere indsats havde løst.

Deres løsning: start på laveste niveau, og gå kun op, når et tjek viser, at svaret er forkert. Det var lige så godt eller bedre end fast højeste indsats for alle modeller.

For Claude Sonnet 5 på en kodetest i terminalen steg andelen af løste opgaver fra 76,1 % til 83,0 %, og prisen faldt.

Fangsten: artiklen er ikke fagfællebedømt, og trinene kræver, at svarene kan tjekkes.

<div class="why"><b>Derfor er det vigtigt</b><p>Højeste indsats virker mindre som en kvalitetsknap og mere som et taxameter, der bare kører. Til de fleste opgaver er en kort tur og et tjek til sidst nok.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.34491) · <span class="tag tag-official">Officiel</span>
{: .sources}
