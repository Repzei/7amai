---
title: "En plantet fil i din Overførsler-mappe kan kapre din kodeagent"
summary: "Sikkerhedsforskere viser, hvordan én tekstfil kan styre Claude Code eller Codex, når de startes i den forkerte mappe. Desuden: OpenAIs rabatter trækker kodearbejde fra Anthropic, Musks 40 mia. dollar til chips, Blocks stemmemodel der kører på en Mac, og matematikere der retter OpenAIs matematiske tekster."
date: 2026-10-26 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "prompt-injection", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "En plantet instruktionsfil i Overførsler kan styre Claude Code eller Codex, når du starter dem der.", why: "Alle, der bruger en kodeagent." }
  - { t: "OpenAI vinder efter sigende kodearbejde fra Anthropic med store rabatter, og API-priserne bliver ved med at falde.", why: "Udviklere og firmaer, der betaler for AI-modeller." }
  - { t: "Musk siger, at SpaceX har lånt 40 mia. dollar til AI-chips, og at Grok nu kan ringe til en virksomhed for dig.", why: "Alle, der følger, hvem der stadig har råd til AI-regnekraft." }
  - { t: "Blocks Dessa er en stemmemodel, der kun er trænet på tale, og den kører på en MacBook.", why: "Alle, der vil have stemme-AI uden skyen." }
  - { t: "Matematikere med opbakning fra Terence Tao starter et åbent sted, hvor OpenAIs AI-lavede matematik kan rettes og få kilder.", why: "Alle, der undrer sig over, hvordan man tjekker resultater fra AI." }
other_lang_url: /2026/10/26/
items:
  - { n: 1, anchor: "agents-md-downloads", signal: worth, tracks: [build, general], min: 1.5, source: reported, number: "1.300+", number_label: "Claude Code-sessioner startet fra Overførsler hos ét firmas kunder" }
  - { n: 2, anchor: "ai-price-war", signal: worth, tracks: [build], min: 1.5, source: reported, number: "52 %", number_label: "af Ripplings kodearbejde kører nu på OpenAI, op fra 16 %" }
  - { n: 3, anchor: "musk-gpus-grok-calls", signal: quick, tracks: [general], min: 1.5, source: reported, number: "40 mia. $", number_label: "i lån til GPU'er, siger Musk" }
  - { n: 4, anchor: "block-dessa", signal: worth, tracks: [general, europe], min: 1, source: official }
  - { n: 5, anchor: "oai-math-revised", signal: quick, tracks: [general], min: 1, source: official }
  - { n: 6, anchor: "nanbeige-4-3-33b", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "collection-date-rag", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. En plantet fil i din Overførsler-mappe kan kapre din kodeagent {#agents-md-downloads}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>1.300+</b><span>Claude Code-sessioner startet fra Overførsler hos ét firmas kunder</span></div>

<p class="short"><span>Kort fortalt</span>Kodeagenter læser instruktionsfiler i den mappe, du starter dem i. Er den mappe Overførsler (Downloads), kan en fremmed skrive instruktionerne.</p>

Værktøjer som Claude Code og Codex leder efter en lille tekstfil, når de starter. Den hedder AGENTS.md eller CLAUDE.md og fortæller agenten, hvordan et projekt fungerer. Men agenten stoler på filen i den mappe, du starter den i, uanset hvilken mappe det er.

Forever Security, et firma der holder øje med AI-agenter i virksomheder, fandt en ondsindet AGENTS.md i en kundes Overførsler-mappe. En agent, der blev startet derfra, læste filen og forsøgte at installere en skadelig npm-pakke. I Codex virkede en harmløs testversion af angrebet i 90 % af forsøgene. I Claude Code sendte en ondsindet CLAUDE.md trafikken til forskernes server. Den udgav sig for at være modellen og fik kode til at køre i halvdelen af testene.

Forskerne ved ikke, hvordan filen kom derhen. Men Chrome, Edge og Firefox gemmer som standard overførsler uden at spørge, og BleepingComputer bekræftede, at en testside kunne lægge en sådan fil der. Og folk starter faktisk agenter der: Forever talte over 1.300 Claude Code-sessioner startet fra Overførsler hos sine kunder.

Fangsten: Der er ingen fejl at rette. "Der er intet her, som OpenAI eller Anthropic kan rette," siger forskerne, for agenten gør det, den er bygget til.

<div class="why"><b>Derfor er det vigtigt</b><p>En instruktionsfil er som en seddel på køkkenbordet til den, der passer huset. Den virker, når du selv har skrevet den. Men Overførsler er et bord, hvor enhver hjemmeside kan lægge en seddel, og agenten kan ikke se forskel.</p></div>

<p class="todo"><b>Gør dette:</b> Start kun agenter inde i projektmappen, aldrig i Overførsler eller din hjemmemappe. Læs enhver AGENTS.md eller CLAUDE.md, du ikke selv har skrevet, og slå hverken godkendelser eller sandkassen fra.</p>

Kilde: [bleepingcomputer.com](https://www.bleepingcomputer.com/news/security/ai-coding-agents-hijacked-using-agentsmd-file-in-downloads-folder/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. OpenAI køber efter sigende kodearbejdet væk fra Anthropic {#ai-price-war}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>52 %</b><span>af Ripplings kodearbejde kører nu på OpenAI, op fra 16 %</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI giver store rabatter for at vinde Anthropics største kodekunder, og det ser ud til at virke. For køberne bliver AI ved med at blive billigere.</p>

Firmaer, der bruger AI til kode, vælger ofte én hovedleverandør af modeller. Nu bruger OpenAI prisen til at blive den leverandør, skriver The Information ifølge The Decoder.

Tallene kommer fra kunderne selv. Hos Rippling steg OpenAIs andel af kodearbejdet fra 16 % til 52 %, og Anthropics andel faldt. DataCamps direktør siger, at OpenAIs priser skar kraftigt i firmaets udgifter. Replit skiftede også til OpenAI efter en stor rabat.

Max Woolf, der tidligere var data scientist, gennemgik de offentlige prislister søndag. Hans vurdering: Priserne falder mest på grund af konkurrence, fordi det er let at skifte model, og åbne modeller som DeepSeeks er billige. Han synes, timingen er mærkelig, fordi begge firmaer ventes at gå på børsen.

Fangsten: Tallene kommer fra én artikel, der bygger på, hvad kunderne siger, og ingen af firmaerne har kommenteret den.

<div class="why"><b>Derfor er det vigtigt</b><p>Det minder om mobilabonnementer, da alle selskaber tilbød det samme net. Når kunderne kan skifte på en dag, er prisen det sidste våben. Det er godt for dig som køber og sværere for de firmaer, der har brug for indtægterne.</p></div>

Kilde: [the-decoder.com](https://the-decoder.com/openai-offers-discounts-up-to-90-percent-to-poach-anthropics-biggest-customers/) · <span class="tag tag-reported">Rapporteret</span> · [minimaxir.com](https://minimaxir.com/2026/10/cheap-llms/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Musk siger, at SpaceX har lånt 40 mia. dollar til chips, og Grok kan nu ringe for dig {#musk-gpus-grok-calls}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>40 mia. $</b><span>i lån til GPU'er, siger Musk</span></div>

<p class="short"><span>Kort fortalt</span>Musk siger, at SpaceX har lånt 40 mia. dollar til AI-chips, og at mindre cloudfirmaer næsten ikke kan låne. Og hans assistent Grok kan nu foretage telefonopkald.</p>

#### <span>1 af 2</span> 40 mia. dollar til chips, der kommer næste år
Musk skrev, at SpaceX har fået lån for 40 mia. dollar, mest til GPU'er, der leveres i første halvdel af næste år, skriver Reuters. Han tilføjede, at långiverne næsten har lukket for penge til AI-cloudfirmaer uden andre indtægter, og at han venter, at nogle af dem går ned. Reuters skriver, at det er uklart, hvad Musk mener med, at lånet er "closed".

#### <span>2 af 2</span> Grok ringer op
Musk skrev også, at Groks Bot nu kan ringe til en person eller en virksomhed for dig. Den siger, hvad du vil have, tager noter og sender dig et resumé, skriver TeslaNorth. Hvilke abonnementer, hvilke lande og hvilket nummer modtageren ser, vides endnu ikke.

<div class="why"><b>Derfor er det vigtigt</b><p>Hvis Musk har ret, flytter pengene til AI til de få firmaer, der tjener penge på andet, som SpaceX' raketter og Starlink. Og en assistent, der ringer til en butik for dig, taler med folk, som aldrig har valgt at tale med en AI.</p></div>

Kilde: [lufkindailynews.com (Reuters)](https://lufkindailynews.com/news_reuters/business/musk-says-spacex-raised-40-billion-in-debt-for-gpus/article_1de18346-ef24-54d7-a052-a7892080fe90.html) · <span class="tag tag-reported">Rapporteret</span> · [teslanorth.com](https://teslanorth.com/2026/10/25/grok-bot-phone-calls-elon-musk/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Blocks Dessa lærte at tale kun ved at lytte og kører på en Mac {#block-dessa}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Block, firmaet bag Square, har bygget en stemmemodel, der aldrig har set tekst. Den lytter og taler på samme tid, og den kører på en bærbar.</p>

De fleste stemmeassistenter laver dine ord om til tekst, lader en sprogmodel svare og læser så svaret højt. Block kalder den slags stemme-AI direkte dårlig ("can just plain suck").

Blocks lille forskningslab gik en anden vej. Dessa har kun lært af optagelser af folk, der taler, helt uden tekst. Derfor kan den sige "ja", mens du taler, og den hører pauser og latter. Den kører på en MacBook Pro med en M4 Max-chip.

Fangsten: Du kan ikke prøve den endnu. Der er en venteliste, og en lille gruppe sikkerhedsforskere får adgang først.

<div class="why"><b>Derfor er det vigtigt</b><p>En stemme, der lyder menneskelig og kører på din egen computer, holder samtalen på din egen maskine. Det betyder også, at det snart kan blive svært at høre, om den, der ringer, er en AI.</p></div>

Kilde: [block.xyz](https://block.xyz/dessa) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Matematikere åbner et fælles sted, hvor OpenAIs matematik kan rettes {#oai-math-revised}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>En gruppe matematikere har åbnet et fælles sted, hvor man kan rette og tilføje kilder til de matematiske tekster, OpenAIs modeller har lavet. Terence Tao har allerede sendt rettelser.</p>

OpenAI har udgivet matematiske resultater, som selskabets modeller har hjulpet med at finde. Matematikere siger, at teksterne kan være svære at forstå og kan have mangelfulde kildehenvisninger.

Derfor har fire af dem, Abhinav Nellore, Johannes Schmitt, Soledad Villar og Rachel Ward, præsenteret oai-math-revised. Det er et åbent GitHub-projekt, hvor fællesskabet inviteres til at gennemgå, rette og tilføje kilder. De annoncerede det på Terence Taos blog lørdag. Tao, en af de mest kendte nulevende matematikere, har allerede sendt to rettelser.

Fangsten: Det virker kun, hvis folk er med, og indlægget siger ikke, hvor mange tekster der er.

<div class="why"><b>Derfor er det vigtigt</b><p>Et bevis er kun nyttigt, når andre kan følge og tjekke det. AI kan nu lave resultater hurtigere, end nogen når at gennemgå dem, så tjekket har brug for sit eget hjem.</p></div>

Kilde: [terrytao.wordpress.com](https://terrytao.wordpress.com/2026/10/24/oai-math-revised-a-community-hub-for-revising-openais-math-write-ups/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Nanbeiges gratis 33B-model sigter mod kodeagenter, du selv kører {#nanbeige-4-3-33b}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>En ny åben model fra Kina siger, at den slår Qwen på kodeopgaver for agenter. Komprimeret kan en kraftig hjemme-pc køre den.</p>

Nanbeige, et hold med opbakning fra den kinesiske jobportal BOSS Zhipin, udgav Nanbeige4.3-33B i denne uge. Alle må bruge den, også kommercielt, under Apache 2.0-licensen. På Terminal-Bench, en test af agenter der arbejder i en terminal, får den 80,9 mod 73,0 for Qwen3.8-27B.

Fangsten: Tallene kommer fra Nanbeiges egen modelside. Den ligger under Qwen på SWE-Bench Pro. Startup Fortune skriver, at en 4-bit-version kan være på et kort med 24 GB, men med mindre plads til kontekst.

<div class="why"><b>Derfor er det vigtigt</b><p>En gratis model, der klarer agentarbejde på din egen hardware, betyder, at din kode aldrig behøver at forlade huset.</p></div>

Kilde: [huggingface.co](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) · <span class="tag tag-official">Officiel</span> · [startupfortune.com](https://startupfortune.com/nanbeiges-new-33b-open-model-takes-aim-at-qwen-and-gemma-on-coding/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Dagens forskningsartikel

### Skift kun datoen på et dokument, og modellen skifter svar {#collection-date-rag}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Når en model får to daterede udgaver af en side, stoler den mere på datoen end på teksten. Byt om på datoerne, og mange svar vender.</p>

Mange AI-assistenter slår ting op, før de svarer, og de sider, de finder, har ofte en dato for, hvornår de blev gemt.

Forskerne Minsu Oh, Seunghui Jwa, Soo Kyun Kim og Yeo-Chan Yoon testede, hvor meget modellerne læner sig op ad den dato. De gav fem åbne modeller to udgaver af den samme Wikipedia-side og byttede kun om på datoerne. Teksten var den samme. Træfsikkerheden faldt med cirka 38 til 51 procentpoint. Det hjalp ikke at bede modellen ignorere datoerne. Da én model fik lov at tænke først, blev skaden meget mindre, og to API-modeller blev næsten ikke påvirket.

<div class="why"><b>Derfor er det vigtigt</b><p>En dato er en lille stump tekst, som ingen tjekker. Kan den styre svaret, bliver et forkert tidsstempel i et søgesystem til et forkert svar, og nogen kan plante et med vilje.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.32191) · <span class="tag tag-official">Officiel</span>
{: .sources}
