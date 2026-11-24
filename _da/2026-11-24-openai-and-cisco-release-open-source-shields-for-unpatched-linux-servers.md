---
title: "OpenAI og Cisco frigiver open source-skjolde til Linux-servere uden patch"
summary: "OpenAI og Cisco har frigivet Shirudo, et gratis værktøj, der blokerer et kendt hul på en kørende Linux-server, til patchen er klar. Desuden: Nvidia henter Jensen Huang tilbage, Googles AI Mode læser din Wallet, Anthropics agenter godkender kode, Amazon har aftalt at købe Decarts chipsoftware, llama.cpp tilpasser modeller til din hukommelse, og en undersøgelse af agent-skills."
date: 2026-11-24 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "ebpf", from: 1, more: ["quantization", "ai-agent"] }
today:
  - { t: "OpenAI og Cisco har frigivet et gratis værktøj, der blokerer kendte huller, til serverne er patchet.", why: "Alle, der driver Linux-servere eller holder software opdateret." }
  - { t: "Nvidias bestyrelse har gjort Jensen Huang til topchef igen, under to uger efter han gik.", why: "Alle, der følger firmaet bag de fleste AI-chips." }
  - { t: "Googles AI Mode i Søgning kan nu læse din Wallet og snart dit Drive.", why: "Alle, der bruger Google Søgning og går op i privatliv." }
  - { t: "Anthropic har lanceret Claude Ship, agenter der retter og godkender rutineændringer i kode.", why: "Teams, der drukner i pull requests fra kodeagenter." }
  - { t: "Amazon har aftalt at købe Decarts software, der får AI-modeller til at køre godt på mange chips.", why: "Alle, der holder øje med alternativer til Nvidias chips." }
other_lang_url: /2026/11/24/
items:
  - { n: 1, anchor: "shirudo-shields", signal: big, tracks: [build, general], min: 1.5, source: official, topic: security, why: "AI finder huller på timer, men patches tager længere tid, så et skjold blokerer hullet imens.", steps: { title: "Sådan virker et Shirudo-skjold", list: ["Et kendt hul bliver fundet", "AI skriver et skjold til det", "Et menneske godkender skjoldet", "Det blokerer angrebet uden genstart"] } }
  - { n: 2, anchor: "nvidia-huang-returns", signal: big, tracks: [general], min: 1, source: official, number: "27 %", number_label: "stigning i Nvidias aktie mandag formiddag", topic: chips, why: "Firmaet bag de fleste AI-chips har sin gamle leder tilbage, men spørgsmålene er ikke afklaret." }
  - { n: 3, anchor: "ai-mode-wallet-drive", signal: worth, tracks: [general, europe], min: 1.5, source: official, topic: news, why: "Et søgefelt, der kender dine kort og filer, kan give mere målrettede svar, men samler det hele ét sted." }
  - { n: 4, anchor: "claude-ship", signal: worth, tracks: [build], min: 1.5, source: official, topic: code, why: "Når agenter skriver meget af koden, er tjekket det langsomme trin, så mennesker skriver reglerne i stedet." }
  - { n: 5, anchor: "amazon-decart", signal: quick, tracks: [general], min: 1, source: official, number: "7,5 mia. dollar", number_label: "det Amazon betaler for Decarts teknologi, ifølge Bloomberg", topic: money, why: "En konkurrerende chip hjælper kun, hvis din software kører godt på den." }
  - { n: 6, anchor: "llama-cpp-target-size", signal: worth, tracks: [build, europe], min: 1, source: official, topic: local, why: "Du kan nu få en model, der passer præcis til din hukommelse, med så lidt tab af kvalitet som muligt.", do: "Opdatér llama.cpp, og prøv llama-quantize med --target-size sat under din hukommelse, så der er plads til konteksten." }
  - { n: 7, anchor: "skillprivus", signal: worth, tracks: [general, build], min: 1, source: official, number: "307", number_label: "af 563 agent-skills, der rører persondata, blev markeret", topic: research, why: "En skill kan gøre præcis det, den lover, og alligevel tage flere data, end den har brug for." }
---

### 1. OpenAI og Cisco frigiver open source-skjolde til Linux-servere uden patch {#shirudo-shields}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>OpenAI og Cisco har frigivet Shirudo, et gratis værktøj, der blokerer et kendt hul på en kørende Linux-server, mens den rigtige patch bliver testet. AI kan skrive skjoldet, men et menneske skal godkende det.</p>

I sidste uge skrev vi, at en forsker brugte AI til at finde en kritisk fejl i Java, Java4Shell, på omkring en time. Men det tager stadig tid at lukke huller, fordi teams tester hver patch først. I det hul står serverne åbne.

Mandag frigav OpenAI og Cisco Shirudo, japansk for "skjold". Det bruger eBPF (se Forklaret nedenfor), en måde at køre små, kontrollerede programmer inde i Linux på. Et skjold blokerer præcis den kode, der står bag ét hul, uden genstart.

I en test skrev OpenAIs Codex et skjold til Java4Shell. Skjoldet stoppede så et angreb på en kørende Elasticsearch-server, og tjenesten blev ved med at køre.

Mennesker har styringen. Hvert skjold er signeret og bliver tjekket, før det indlæses. Driftsfolk kan se, hvad det ville blokere, og skal godkende det, før det kører.

Fangsten: Shirudo er stadig en forhåndsudgave. Det kræver kernepatches og en TPM-chip, så servere skal ændres, før de kan bruge det. Og Java4Shell-resultatet stammer fra én kontrolleret test.

<div class="why"><b>Derfor er det vigtigt</b><p>En patch er som at skifte en ødelagt lås, og det tager tid. Et skjold er som at sætte en bom for døren, til den nye lås kommer. Hvis AI finder huller på timer, skal forsvarerne også kunne sætte en bom op på timer.</p></div>

Kilder: [openai.com](https://openai.com/index/introducing-shirudo/) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/shirudo-dev/shirudo) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Nvidia henter Jensen Huang tilbage som topchef, under to uger efter han gik {#nvidia-huang-returns}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>27 %</b><span>stigning i Nvidias aktie mandag formiddag</span></div>

<p class="short"><span>Kort fortalt</span>Nvidias bestyrelse gjorde mandag enstemmigt Jensen Huang til topchef igen. Efter input fra den amerikanske regering siger den, at hans comeback ikke er en risiko for den nationale sikkerhed.</p>

Huang trak sig 12. november. Medier havde koblet ham til en kvinde, som den amerikanske regering mistænker for at spionere for Kina. I sidste uge sagde formanden stadig, at bestyrelsen ikke ville hente ham tilbage.

Nu har bestyrelsen skiftet mening. Den siger, at den er tilfreds med hans "åbenhed og evne til at lede", efter input fra det øverste niveau i den amerikanske regering. Aktien steg 27 % mandag formiddag, skriver TechCrunch.

Fangsten: spørgsmålene er ikke afklaret. Et uafhængigt udvalg i bestyrelsen undersøger stadig oplysningerne om, at Huang var mål for udenlandsk spionage. Nvidia opretter også et udvalg for eksportregler og national sikkerhed.

<div class="why"><b>Derfor er det vigtigt</b><p>Det meste AI bliver trænet på Nvidias chips, så ledelsen påvirker hele branchen. Kaptajnen er tilbage på broen. Men bestyrelsen har også sat nye folk til at holde øje med kompasset.</p></div>

Kilder: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/23/nvidia-reverses-course-and-brings-jensen-huang-back-as-ceo/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Googles AI Mode i Søgning kan nu læse din Wallet og snart dit Drive {#ai-mode-wallet-drive}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Google lader nu AI Mode i Søgning bruge din Google Wallet til at svare på spørgsmål om penge. Drive og Gemini-appen følger i de kommende uger, og det hele kræver, at du selv slår det til.</p>

AI Mode er Googles søgning i chatform. Hvis du giver lov, kan den allerede bruge din Gmail, Kalender og Fotos.

Mandag begyndte Google at tilføje Wallet, så AI Mode kan hjælpe dig med at skære ned på forbruget eller bruge dine kortfordele. Google siger, at den kun kan læse dine konti, ikke flytte dine penge. Dine filer i Drive og dine Gemini-samtaler kommer bagefter.

Du vælger selv i dine indstillinger for Søgning, hvilke apps der skal forbindes, og du kan slå dem fra igen. Google vil også vise et ikon, der fortæller, hvilke af dine data et svar har brugt.

Fangsten: ikonet findes ikke endnu, og Google siger ikke, hvilke lande der får det.

<div class="why"><b>Derfor er det vigtigt</b><p>Et søgefelt, der kender dine kort og dine filer, kan give mere målrettede svar. Men det bliver også det ene sted, hvor det hele mødes. Det er som at give én person nøglerne til din postkasse, dit skrivebord og din pung.</p></div>

Kilde: [blog.google](https://blog.google/products-and-platforms/products/search/google-search-personal-intelligence-apps/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Anthropics Claude Ship lader agenter rette og godkende rutineændringer i kode {#claude-ship}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Anthropic har lanceret Claude Ship, en række agenter, der gennemgår kodeændringer, retter fejlende tjek og kan godkende rutineændringer efter regler, dit team selv skriver.</p>

Ifølge Anthropic skriver kodeagenter nu kode hurtigere, end folk kan nå at gennemgå den. Derfor vokser køen af pull requests, de foreslåede ændringer, der venter på et menneske.

Claude Ship tager fat på køen i tre dele. Code Review, som allerede findes, peger på problemer i hver ændring.

PR Steward, i beta, retter fejlende test og kommentarer fra gennemgangen, men godkender aldrig. Claude Approvals, også i beta, godkender ændringer, der passer til en politik, dit team skriver som en fil i repoet.

Anthropic siger, at antallet af mergede ændringer i Claude Code-teamet blev mere end fordoblet fra juni til september. Andelen af ændringer, der måtte rulles tilbage, faldt med mere end 40 %.

Fangsten: det er Anthropics egne tal om deres eget team. Det findes kun til Team- og Enterprise-planer på GitHub, og du betaler pr. token.

<div class="why"><b>Derfor er det vigtigt</b><p>Når agenter skriver meget af koden, er det langsomme trin ikke længere at skrive. Det er at tjekke. Claude Ship flytter mennesket fra at tjekke hver ændring til at skrive reglerne for, hvilke ændringer der skal ses af et menneske.</p></div>

Kilder: [claude.com](https://claude.com/resources/articles/introducing-claude-ship) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Amazon har aftalt at købe Decarts software, der får AI-modeller til at køre godt på mange chips {#amazon-decart}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>7,5 mia. dollar</b><span>det Amazon betaler for Decarts teknologi, ifølge Bloomberg</span></div>

<p class="short"><span>Kort fortalt</span>Amazon køber teknologien og holdet bag Decarts software, der får AI-modeller til at køre effektivt på forskellige chips. Bloomberg sætter prisen til omkring 7,5 mia. dollar.</p>

Nvidia vinder blandt andet på software. Det meste AI-kode er skrevet til firmaets chips, så det er svært at skifte.

Decart, en israelsk startup, har bygget software, der kører AI-modeller hurtigt på chips fra Nvidia, Amazon og Google. Amazon overtager teknologien og holdet. TechCrunch skriver, at Amazon gør klar til at sælge sin egen Trainium-chip til andre firmaer.

Fangsten: Amazon har ikke bekræftet prisen, og handlen skal stadig godkendes af myndighederne.

<div class="why"><b>Derfor er det vigtigt</b><p>En konkurrerende chip hjælper kun, hvis din software kører godt på den. Decarts værktøjer er som en adapter, der gør den nye stikkontakt brugbar.</p></div>

Kilder: [aboutamazon.com](https://www.aboutamazon.com/news/company-news/amazon-decart-ai-optimization) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### llama.cpp kan nu skrumpe en model, så den passer præcis til din hukommelse {#llama-cpp-target-size}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Det lokale AI-værktøj llama.cpp kan nu skrumpe en model til præcis den størrelse, du beder om. Det vælger den blanding, der koster mindst kvalitet.</p>

For at køre en model derhjemme skrumper man den som regel med kvantisering (se Forklaret nedenfor). Men de færdige størrelser passer sjældent til din computer. Én fil lader hukommelse stå ubrugt, og den næste størrelse passer ikke.

En ændring, der kom ind i llama.cpp mandag, løser det. Du giver llama-quantize et mål, fx --target-size 23.85g til et grafikkort med 24 GB. Så får de dele af modellen, hvor det betyder mest, flere detaljer.

Forfatteren testede det på 34 modeller. Det slog standardstørrelserne i 195 af 238 sammenligninger.

Fangsten: det er forfatterens egne test, og en anden tester fandt en model, der blev dårligere i de fleste størrelser.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at pakke en kuffert efter vægtgrænsen i stedet for efter faste taskestørrelser. Du får mest mulig model med, som din maskine kan bære.</p></div>

<p class="todo"><b>Prøv det:</b> Opdatér llama.cpp, og prøv llama-quantize med --target-size sat under din hukommelse, så der er plads til konteksten. Det kræver en ny importance-fil fra llama-imatrix.</p>

Kilder: [github.com (ændringen)](https://github.com/ggml-org/llama.cpp/pull/15550) · <span class="tag tag-official">Officiel</span> · [github.com (udgivelsen)](https://github.com/ggml-org/llama.cpp/releases/tag/b12669) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Forskere markerede 307 af 563 agent-skills, der rører persondata {#skillprivus}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>307</b><span>af 563 agent-skills, der rører persondata, blev markeret</span></div>

<p class="short"><span>Kort fortalt</span>Forskere tjekkede 726 offentlige skills til AI-agenter ved at læse deres kode uden at køre dem. Af de 563, der håndterer persondata, blev 307 markeret for mulige skader på privatlivet.</p>

Skills er små tilføjelser, der lærer en AI-assistent en ny opgave. Du installerer dem som apps, og de kan nå dine filer.

Mariana Fernandez-Espinosa og tre kolleger byggede SkillPrivus, et værktøj, der læser en skills kode og instruktioner uden at køre den. Det tjekker, om hver brug af data passer til opgaven. En læge må dele din journal med en sygeplejerske, men ikke med din chef.

Skaderne var ikke malware. Skills, der gjorde deres arbejde, gættede alligevel følsomme ting om brugerne, gemte data, de ikke havde brug for, eller sendte dem til uventede modtagere.

Fangsten: en markering betyder en mulig skade, ikke en bevist. Det er et preprint på arXiv.

<div class="why"><b>Derfor er det vigtigt</b><p>En skill kan gøre præcis det, den lover, og alligevel tage mere, end den har brug for. Hvad den gør med dine data, betyder lige så meget som, om den virker.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.26747) · <span class="tag tag-official">Officiel</span>
{: .sources}
