---
title: "Et delt ChatGPT-link kunne lade en fremmed læse dine private chats"
summary: "Indtil i sidste uge kunne ét delt ChatGPT-link køre en fremmeds kode på din konto. OpenAI har lukket hullet. Desuden: Apple vælger Alibabas Qwen i Kina, OpenAI sænker sit mål for ny kapital, misforhold på Europas datacenter-byggepladser og frister for udviklere."
date: 2026-11-01 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "cross-site-scripting", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "Et delt ChatGPT-link kunne lade en fremmed læse dine private chats. Hullet er lukket.", why: "Alle, der bruger ChatGPT eller åbner delte chats." }
  - { t: "Alibaba siger, at Apple vil bruge Qwen-modellerne til Siri i Kina.", why: "Alle, der er nysgerrige på, hvem der laver AI'en i deres telefon." }
  - { t: "OpenAI har sænket sit mål for ny kapital fra 30 til 20 mia. dollar.", why: "Alle, der spekulerer på, hvem der betaler for AI-boomet." }
  - { t: "Journalister fandt ubetalt overarbejde og ulykker på Europas datacenter-byggepladser.", why: "Alle, der går op i, hvordan AI bliver bygget, også tæt på." }
  - { t: "OpenAI lukker Agent Builder 30. november, og Claude Code får styring af indsats.", why: "Udviklere, der bruger OpenAIs værktøjer eller Claude Code." }
other_lang_url: /2026/11/01/
items:
  - { n: 1, anchor: "chatgpt-shared-link-takeover", signal: big, tracks: [general, build], min: 1.5, source: official, number: "5.000 dollar", number_label: "fik forskerne i dusør af OpenAI for fejlen", topic: security, why: "Det var nok at åbne ét link, så faren kom fra tillid, ikke fra skødesløse klik.", steps: { title: "Sådan virkede angrebet", list: ["Angriberen deler en chat med en graf", "Offeret åbner linket og forhåndsvisningen", "Skjult kode kører på offerets konto", "Den læser en privat chat og sender et stykke ud"] } }
  - { n: 2, anchor: "apple-qwen-china", signal: worth, tracks: [general], min: 1, source: reported, number: "4. november", number_label: "starter testen af Qwen i Apples iOS-betaversion for udviklere", topic: business, why: "Selve iPhonen er den samme overalt, men AI'en indeni afhænger nu af, hvor du bor." }
  - { n: 3, anchor: "openai-funding-target", signal: worth, tracks: [general], min: 1, source: reported, topic: money, why: "Når det bliver sværere at rejse penge, presses AI-firmaerne mere for at tjene dem hos brugerne.", bars: { title: "OpenAIs mål for ny kapital", rows: [{ l: "Før", v: 30, t: "30 mia. dollar" }, { l: "Nu", v: 20, t: "20 mia. dollar", hl: true }] } }
  - { n: 4, anchor: "data-centre-workers", signal: worth, tracks: [europe, general], min: 1.5, source: reported, number: "100 mia. euro", number_label: "regner branchen med at investere i europæiske datacentre frem til 2030", topic: business, why: "Navnet på et datacenter er ofte ikke det firma, der betaler dem, der byggede det." }
  - { n: 5, anchor: "developer-deadlines", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Gamle værktøjer stopper på en fast dato, så den billige løsning er den, du laver før.", do: "Bruger du OpenAIs Agent Builder, Evals eller Prompts API, så flyt før 30. november." }
  - { n: 6, anchor: "minicpm-ocr", signal: worth, tracks: [build], min: 1, source: official, number: "1,3 mia.", number_label: "parametre i OpenBMBs åbne model, der læser dokumenter", topic: local, why: "Private papirer kan blive søgbare uden at blive sendt til en skytjeneste." }
  - { n: 7, anchor: "mcp-vs-cli", signal: worth, tracks: [build], min: 1.5, source: official, number: "94,3 %", number_label: "af 2.004 parvise kørsler gik tydeligt forskellige veje", topic: research, why: "Måden, du giver en agent sine værktøjer på, er en del af designet, ikke en detalje." }
---

### 1. Et delt ChatGPT-link kunne lade en fremmed læse dine private chats {#chatgpt-shared-link-takeover}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>5.000 dollar</b><span>fik forskerne i dusør af OpenAI for fejlen</span></div>

<p class="short"><span>Kort fortalt</span>Indtil i sidste uge kunne ét delt ChatGPT-link køre en fremmeds kode på din konto og læse dine private chats. OpenAI har lukket hullet, og du skal ikke gøre noget.</p>

Det føles harmløst at dele en ChatGPT-chat. Du sender et link, og modtageren ser en kopi.

Forskere hos sikkerhedsfirmaet Parameter fandt ud af, at et link kunne meget mere. De byggede en delt chat med en graf og en lille HTML-forhåndsvisning. Når offeret åbnede den og klikkede én gang på Preview, kørte deres kode inde i offerets egen ChatGPT-session. I en anden udgave var det nok bare at åbne linket.

Derfra kunne koden optræde som offeret. I testen hentede den listen over offerets seneste chats, åbnede en privat og sendte et stykke af den til en server udenfor. Reelt kunne de overtage kontoen, siger forskerne.

Tricket var en kæde af små huller. Et matematikbibliotek til grafer tog imod beskeder uden at tjekke afsenderen, så forhåndsvisningen kunne smugle kode ind på siden.

Parameter meldte fejlen 18. oktober. OpenAI hævede alvorsgraden fra P2 til P1 og bekræftede rettelsen 26. oktober. Dusøren var 5.000 dollar, hvilket Simon Willison kalder "lidt billigt for en så alvorlig sårbarhed".

Forbeholdet: Forskerne skriver ikke, om nogen brugte hullet før rettelsen.

<div class="why"><b>Derfor er det vigtigt</b><p>Det her er cross-site scripting: fremmed kode kører, som om den var en del af siden, så den får også dit login. Det er som et brev, der kan skrive checks i dit navn, når du åbner det. Det var nok at åbne ét link, så faren kom fra tillid, ikke fra skødesløse klik.</p></div>

Kilde: [parameter.ai](https://www.parameter.ai/labs/we-found-a-gap-at-openai) · <span class="tag tag-official">Officiel</span> · [simonwillison.net](https://simonwillison.net/2026/Oct/31/how-we-took-over-chatgpt-accounts/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Alibaba siger, at Apple vil bruge Qwen til Siri i Kina {#apple-qwen-china}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>4. november</b><span>starter testen af Qwen i Apples iOS-betaversion for udviklere</span></div>

<p class="short"><span>Kort fortalt</span>Alibaba siger, at selskabets Qwen-modeller skal drive Siri, Writing Tools og Visual Intelligence for iPhone-brugere i Kina. Testen starter 4. november.</p>

I Kina skal AI-tjenester registreres hos myndighederne. Apple Intelligence, Apples samling af AI-funktioner, kom igennem det trin i juli.

Lørdag meddelte Alibaba, at Qwen skal drive Siri, Writing Tools og Visual Intelligence for brugere i Kina. Testen starter i iOS-betaversionen for udviklere 4. november. Den fulde udrulning følger med iOS 27.3 i december, ifølge Alibaba.

Brugerne vælger selv, om de vil slå det til, og hvad de deler. Alibaba lover ikke at træne sine modeller på deres spørgsmål eller svar.

Forbeholdet: Nyheden kommer fra Alibaba via det kinesiske statslige nyhedsbureau Xinhua. Artiklen citerer ingen fra Apple og nævner ingen pris for aftalen.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en bilfabrik, der sætter en anden motor i bilen i hvert land. Selve iPhonen er den samme overalt, men AI'en indeni afhænger nu af, hvor du bor.</p></div>

Kilde: [news.cgtn.com](https://news.cgtn.com/news/2026-10-31/Alibaba-s-Qwen-to-integrate-into-Apple-Intelligence-in-landmark-deal-1RHilSeJsbK/p.html) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. OpenAI sænker sit mål for ny kapital til 20 mia. dollar efter lunken modtagelse {#openai-funding-target}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>OpenAI har sænket målet for sin nye kapitalrunde fra 30 til 20 mia. dollar, skriver Financial Times. Nogle store investorer var lunkne.</p>

I går skrev vi, at investorerne tøver ved AI-regningen. Nu har stemningen nået OpenAI.

OpenAI ville rejse 30 mia. dollar. Nu er målet 20 mia. dollar, skriver Financial Times. Indtil videre er 11 mia. dollar sikret, og nogle store investorer var "lunkne", skriver Wall Street Journal.

Investorer fra De Forenede Arabiske Emirater leder runden, og et senere tilbud til velhavende privatpersoner kan bringe den op på målet.

Forbeholdet: 20 mia. dollar er stadig et enormt beløb. Nedskæringen kan delvis skyldes dårlig timing, skriver TechCrunch, fordi techaktier faldt på frygt for AI-udgifterne.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et hussalg, hvor buddene ligger under udbudsprisen. Når det bliver sværere at rejse penge, presses AI-firmaerne mere for at tjene dem hos brugerne.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/31/openai-reportedly-lowers-funding-target-for-new-round/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Journalister finder misforhold på Europas datacenter-byggepladser {#data-centre-workers}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Europa</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>100 mia. euro</b><span>regner branchen med at investere i europæiske datacentre frem til 2030</span></div>

<p class="short"><span>Kort fortalt</span>Journalister i otte lande fandt ubetalt overarbejde, dårlige boliger og alvorlige ulykker på byggepladser for Googles og Microsofts datacentre. Ét spor fører til Danmark.</p>

AI kører i datacentre, og branchen regner med at investere 100 mia. euro i Europa frem til 2030. Investigate Europe undersøgte, hvem der bygger dem.

Sammen med blandt andre The Guardian og Le Monde fandt de arbejdsuger på op til 60 timer uden betaling for overarbejde. Arbejdere fortalte om rotter i deres boliger, og en af dem ved et Microsoft-byggeri nær Gävle i Sverige havde tuberkulose. I Belgien blev en elektriker ved et Google-byggeri slemt forbrændt i en elulykke.

Ifølge vidner flyttede omkring 40 mænd i maj fra Gävle til Microsofts byggeri i Høje Taastrup. Fagforbundet 3F er ikke lykkedes med at få kontakt til dem.

Forbeholdet: Firmaerne afviser at have gjort noget forkert eller henviser til deres regler for leverandører. De fleste problemer ligger hos underleverandører flere led nede i kæden.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at hyre én entreprenør, der hyrer ti andre. Navnet på et datacenter er ofte ikke det firma, der betaler dem, der byggede det. EU planlægger en lov, Quality Jobs Act, der skal give firmaerne et fælles ansvar ned gennem kæden.</p></div>

Kilde: [techpolicy.press](https://www.techpolicy.press/electrocutions-intimidation-and-wage-theft-haunt-europes-data-center-workers/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. OpenAI lukker Agent Builder 30. november, og Claude Code får styring af indsats {#developer-deadlines}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Udviklere på OpenAIs Agent Builder, Evals eller Prompts API har til 30. november til at flytte. Claude Code har også fået en indstilling, der kan gøre hjælpeagenter billigere.</p>

#### <span>1 af 2</span> OpenAIs værktøjer når deres slutdato
Siden 31. oktober kan eksisterende OpenAI Evals kun læses. 30. november lukker Evals, Prompts API og Agent Builder. Som afløser for Agent Builder peger OpenAI på sit Agents SDK eller ChatGPT Workspace Agents. 11. december følger ældre modeller som gpt-5 og o3.

#### <span>2 af 2</span> Claude Code lader hjælpeagenter tænke mindre
Claude Code 2.1.316 har fået en indstilling, der giver sub-agenter deres eget indsatsniveau i stedet for hovedsessionens. Så kan små hjælpeopgaver sættes til at koste mindre.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en lejekontrakt, der udløber: kontoret virker til den dag, det ikke gør. Gamle værktøjer stopper på en fast dato, så den billige løsning er den, du laver før. Og med agenter er det nu små knapper som indsats, der styrer regningen.</p></div>

<p class="todo"><b>Gør dette:</b> Bruger du OpenAIs Agent Builder, Evals eller Prompts API, så flyt før 30. november.</p>

Kilde: [developers.openai.com](https://developers.openai.com/api/docs/deprecations) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### En lille åben model gør scannede dokumenter til ren tekst på din egen maskine {#minicpm-ocr}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>1,3 mia.</b><span>parametre i OpenBMBs åbne model, der læser dokumenter</span></div>

<p class="short"><span>Kort fortalt</span>OpenBMB har udgivet MiniCPM-OCR 1.0, en lille åben model, der læser scanninger og PDF'er, også tabeller og formler. Den kører i Ollama og llama.cpp.</p>

Scannede fakturaer og kontrakter er svære at søge i. Men sender du dem til en skytjeneste, giver du private dokumenter fra dig.

MiniCPM-OCR læser en side i rækkefølge og skriver den ud som Markdown, med tabeller og formler bevaret. Med omkring 1,3 mia. parametre er den lille for en model, der læser billeder, og vægtene er frie at bruge under licensen Apache 2.0.

Forbeholdet: Resultaterne kommer fra OpenBMBs egen side, ikke fra en uafhængig test. Baidu har også udgivet en gratis OCR-model, som vi skrev 27. oktober, og vi har ikke fundet en uafhængig sammenligning af de to.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en scanner, der også skriver siden af for dig, uden at siden forlader kontoret. Private papirer kan blive søgbare uden at blive sendt til en skytjeneste.</p></div>

Kilde: [huggingface.co](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### De samme værktøjer i et andet format ændrer, hvordan AI-agenter arbejder {#mcp-vs-cli}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>94,3 %</b><span>af 2.004 parvise kørsler gik tydeligt forskellige veje</span></div>

<p class="short"><span>Kort fortalt</span>Forskere gav AI-agenter de samme værktøjer to gange, én gang via MCP og én gang som kommandolinje-kommandoer. Formatet alene ændrede, hvor godt og hvor billigt de løste opgaverne.</p>

AI-agenter bruger værktøjer til at søge i filer, køre kode og kalde tjenester. Udviklere kan give dem værktøjerne via MCP, en standard for at koble værktøjer til AI-modeller, eller som almindelige kommandoer.

Mange går ud fra, at formatet er ligegyldigt. Det testede Zhenning Shi og kolleger ved at bygge begge formater ud fra én fælles beskrivelse.

På tværs af seks modeller og tre testmiljøer betød det noget. I 94,3 % af 2.004 parvise kørsler gik agenten tydeligt forskellige veje alt efter formatet. Forskelle tidligt i forløbet fulgte med ind i de senere trin.

Deres løsning, DART, beholder agentens beslutninger og retter kun detaljerne, der afhænger af formatet. Den hævede resultaterne i alle seks opsætninger.

Forbeholdet: Det er en preprint, testet i tre miljøer, så rigtige produkter kan opføre sig anderledes.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at give en kok den samme opskrift i gram og i kopper: samme ret på papiret, en anden på tallerkenen. Måden, du giver en agent sine værktøjer på, er en del af designet, ikke en detalje.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.34298) · <span class="tag tag-official">Officiel</span>
{: .sources}
