---
title: "Angribere stjal prompts fra tre AI-hostingfirmaer, viser en forsker"
summary: "En forsker gemte falske hemmeligheder i omkring 2 millioner AI-prompts og fandt ud af, at angribere stjal data fra tre hostingfirmaer. Desuden: OpenAI siger, at dets modeller forbedrede AMD's chipdesign, AI læser programmer som rå bytes, Kina vil lave regler for afregning af tokens, tilføjelser der tilpasser en åben model til kodeværktøjer, og en model der retter sine egne vægte."
date: 2026-11-22 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "zero-data-retention", from: 1, more: ["token", "open-weight"] }
today:
  - { t: "Angribere stjal prompts fra tre AI-hostingfirmaer, og nogle løfter om ingen lagring holdt ikke.", why: "Alle, der sender kode eller kundedata til AI-modeller." }
  - { t: "OpenAI siger, at dets modeller gjorde dele af AMD's chipdesign op til 14 % bedre.", why: "Alle, der følger prisen på og mangelen på AI-chips." }
  - { t: "En AI-model læste, rettede og skrev små programmer direkte ud fra deres rå bytes.", why: "Sikkerhedsfolk og alle, der tjekker mistænkelige filer." }
  - { t: "Kina vil lave standarder for, hvordan AI-tokens måles og afregnes.", why: "Alle, der sammenligner priser på AI-tjenester." }
other_lang_url: /2026/11/22/
items:
  - { n: 1, anchor: "ai-prompt-leaks", signal: big, tracks: [build, general, europe], min: 2, source: official, number: "2 millioner", number_label: "testprompts med falske hemmeligheder gemt i", topic: security, why: "En privatlivsindstilling binder kun det første firma, din prompt når frem til, ikke dem bagved.", do: "Hold adgangskoder og nøgler ude af det, du sender til AI-modeller, og se efter en besked fra OpenRouter eller Together." }
  - { n: 2, anchor: "openai-amd-chip-design", signal: worth, tracks: [general], min: 1, source: official, number: "14 %", number_label: "bedre på AMD's GPU-design, når det går bedst", topic: chips, why: "AI er begyndt at forbedre de chips, som AI selv kører på." }
  - { n: 3, anchor: "ai-reads-machine-code", signal: worth, tracks: [build], min: 1.5, source: official, topic: security, why: "At læse rå maskinkode var en sjælden evne, og nu kan en model gøre det for små programmer." }
  - { n: 4, anchor: "china-token-standards", signal: quick, tracks: [general], min: 1, source: reported, topic: price, why: "En fælles måde at tælle tokens på ville gøre AI-priser lettere at sammenligne.", bars: { title: "AI-tokens brugt pr. dag i Kina", rows: [{ l: "Marts", v: 140, t: "140 billioner" }, { l: "Juni", v: 500, t: "500 billioner", hl: true }] } }
  - { n: 5, anchor: "harness-adapters", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: open, why: "Du kan få mere ud af en åben model, du allerede kører, uden at skifte til en større.", do: "Kører du Qwen3.8-27B med OpenCode, så prøv adapteren på Hugging Face.", bars: { title: "Løste Terminal-Bench-opgaver med pi", max: 100, rows: [{ l: "Grundmodel", v: 39, t: "39 %" }, { l: "Med adapter", v: 55, t: "55 %", hl: true }] } }
  - { n: 6, anchor: "model-rewrites-own-weights", signal: worth, tracks: [general], min: 1.5, source: official, number: "6,6", number_label: "point mere præcis på nye opgaver efter sin egen rettelse", topic: research, why: "En model kan forbedre sig selv uden træning, så længe hver ændring bliver tjekket af test." }
---

### 1. Angribere stjal prompts fra tre AI-hostingfirmaer, viser en forsker {#ai-prompt-leaks}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">2 min</span></p>
<div class="number"><b>2 millioner</b><span>testprompts med falske hemmeligheder gemt i</span></div>

<p class="short"><span>Kort fortalt</span>En sikkerhedsforsker gemte falske hemmeligheder i omkring 2 millioner AI-prompts og fulgte, hvor de endte. Angribere stjal data fra tre hostingfirmaer, og nogle prompts med mærket "gem ikke" blev læst alligevel.</p>

Når du bruger en åben model gennem en app, kommer din prompt ofte forbi flere firmaer. En router som OpenRouter sender den videre til et hostingfirma, der kører modellen. Mange lover zero data retention (se Forklaret nedenfor): de gemmer ikke det, du sender.

HD Moore fra sikkerhedsfirmaet Dragos testede det løfte. Fra juli til november sendte hans team omkring 2 millioner prompts. Hver af dem indeholdt unikke links og falske adgangskoder, såkaldte kanariefugle, så Dragos kunne se, hvis nogen brugte dem.

Resultatet var dårligt. Angribere stjal data fra tre hostingfirmaer, og ingen af dem vidste det, før Dragos sagde det. I ét tilfælde tog angriberne et par hundrede falske AWS-nøgler og prøvede dem. Og et kinesisk AI-laboratoriums systemer åbnede de hemmelige links fra mere end halvdelen af de prompts, der blev sendt til dets modeller. Det gjaldt også omkring to tredjedele af dem, der var mærket "ingen dataindsamling".

Følgerne kom i weekenden. Together AI fortalte, at en AI-kodeagent havde lagt en adgangsnøgle til firmaets gemte prompteksempler i et offentligt GitHub-projekt. Nogen brugte den til at hente dem. OpenRouter smed tre udbydere ud og fjernede 125 endpoints fra sin liste over udbydere uden lagring. Firmaet siger, at OpenRouter selv ikke blev brudt ind i.

Fangsten: Dragos nævner ikke navnene på de fleste firmaer. Men Dragos siger, at rigtige kunders forespørgsler næsten helt sikkert blev kopieret sammen med lokkemaden.

<div class="why"><b>Derfor er det vigtigt</b><p>En privatlivsindstilling binder kun det første firma, din prompt når frem til. Det er som et brev mærket "fortroligt", der kommer gennem tre postkontorer. Mærket er kun så godt som det mindst omhyggelige kontor på vejen.</p></div>

<p class="todo"><b>Gør dette:</b> Hold adgangskoder og nøgler ude af det, du sender til AI-modeller, og se efter en besked fra OpenRouter eller Together.</p>

Kilder: [dragos.com](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) · <span class="tag tag-official">Officiel</span> · [together.ai](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026) · <span class="tag tag-official">Officiel</span> · [openrouter.ai](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. OpenAI siger, at dets modeller gjorde dele af AMD's chipdesign op til 14 % bedre {#openai-amd-chip-design}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>14 %</b><span>bedre på AMD's GPU-design, når det går bedst</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI siger, at dets AI-modeller har omskrevet dele af AMD's næste store grafikchip og gjort dem op til 14 % bedre. AMD har allerede brugt nogle af ændringerne i en chip, der er sendt til produktion.</p>

Chipdesignere skal balancere tre ting: hvor meget strøm en chip bruger, hvor hurtig den er, og hvor meget plads den fylder.

I denne uge sagde OpenAI, at dets modeller har omskrevet den kode, der beskriver AMD's kredsløb. Programmer fra Synopsys tjekkede, at hver ændring stadig gjorde det samme. På AMD's flagskibsdesign til GPU'er nåede forbedringerne op til 14 % i forhold til et stærkt optimeret udgangspunkt. AMD bekræftede også encifrede procentvise forbedringer i vigtige dele af sin næste CPU.

Fangsten: "op til" er det bedste tilfælde, ikke gennemsnittet. OpenAI siger ikke, hvordan gevinsten fordeler sig på strøm, fart og størrelse. Og chippene er ikke ude endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>AI-chips er sjældne og dyre. Nu hjælper AI med at designe de næste. Det er som en lærling, der begynder at slibe værkstedets egne værktøjer. Hver gevinst er lille, men alle chips, der laves bagefter, får glæde af den.</p></div>

Kilder: [openai.com](https://openai.com/index/advancing-chip-design-with-our-models/) · <span class="tag tag-official">Officiel</span> · [thenextweb.com](https://thenextweb.com/news/openai-models-amd-gpu-chip-design-14-percent) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. En AI-model læste, rettede og skrev små programmer direkte ud fra deres rå bytes {#ai-reads-machine-code}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>To forskere viste, at OpenAIs GPT-6.1 Sol kan forstå, rette og endda skrive små programmer ud fra deres rå maskinkode, uden ekstra værktøjer.</p>

Programmerne på din computer er maskinkode: lange rækker af bytes. For at læse et program uden kildekoden bruger eksperter normalt særlige værktøjer.

George Xenos og Sotiris Giannopoulos gav GPT-6.1 Sol kun et hexdump, altså de rå bytes skrevet ud som tekst. Modellen genkendte alle fire programmer. Den fandt også en rigtig fejl i et af dem, FreeBSD's ministat. Den tilføjede funktioner ved at ændre bytes, og alle tre rettede programmer bestod skjulte test. Den skrev endda små programmer, der virkede, ud fra en beskrivelse.

Så kiggede den på en prøve af Windows-malware. Den konkluderede, at filen henter kode og kører den, og det bekræfter en offentlig sandbox-rapport. Den åbne model DeepSeek V4.1 Flash nåede samme svar, men brugte omkring 17 gange så mange tænke-tokens.

Fangsten: programmerne var små, og det største var 67 KB. Hver byte koster omkring 2,4 tokens, så store programmer kan ikke være i modellens arbejdshukommelse. Det er ét holds test, mest med én kørsel hver.

<div class="why"><b>Derfor er det vigtigt</b><p>Det tog før mange år at lære at læse maskinkode. Kan en model gøre det, bliver det hurtigere for forsvarere at tjekke en mistænkelig fil. Men det bliver også hurtigere for angribere.</p></div>

Kilde: [sgiannopoulos.github.io](https://sgiannopoulos.github.io/blog/machine-code-programming/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Kina vil lave standarder for, hvordan AI-tokens måles og afregnes {#china-token-standards}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Kinas datamyndighed siger, at den vil lave standarder for, hvordan AI-tokens måles, afregnes og kvalitetstjekkes. Den har ikke sagt hvornår.</p>

AI-tjenester tager betaling pr. token, et lille stykke tekst (se Forklaret nedenfor). Men hvert firma tæller tokens på sin egen måde, så to priser pr. token er svære at sammenligne.

Lørdag skrev Liu Liehong, chef for Kinas National Data Administration, at myndigheden vil forbedre de standarder. Det skriver The Next Web med henvisning til Bloomberg. Han sagde, at firmaer, der sælger tokens som en tjeneste, såkaldte "tokenfabrikker", er ved at blive en hel branche. Det daglige forbrug af tokens i Kina passerede 140 billioner i marts og 500 billioner i juni ifølge kinesiske medier.

Fangsten: der er ingen dato og intet udkast endnu, så ingen ved, hvad reglerne kommer til at sige.

<div class="why"><b>Derfor er det vigtigt</b><p>I dag er en token lidt som en "kop" i gamle opskrifter: alle bruger ordet, men størrelsen svinger. Et fælles mål ville gøre det muligt at sammenligne priser, ligesom kilowatttimen gjorde elregninger sammenlignelige.</p></div>

Kilde: [thenextweb.com](https://thenextweb.com/news/chinas-data-regulator-plans-standards-for-measuring-and-billing-ai-tokens) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### Hugging Face træner små tilføjelser, der tilpasser en åben model til kodeværktøjer {#harness-adapters}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Hugging Face har udgivet tilføjelser, der lærer den åbne model Qwen3.8-27B at arbejde bedre i tre værktøjer til kodeagenter. På én test løste den flere opgaver med omkring halvt så mange tokens.</p>

En kodeagent består af to dele: modellen og den harness, der giver den værktøjer og styrer arbejdet. En model er ofte trænet til én harness og bliver brugt i andre.

Hugging Face prøvede at lukke det hul med LoRA-adaptere. En adapter er en lille ekstra fil, der justerer en model uden at træne det hele om. Holdet trænede én adapter til hver af tre åbne harnesses: pi, Hermes Agent og OpenCode. Modellen øvede opgaver i hver af dem og blev belønnet, når den lykkedes.

Med pi løste den tilpassede model omkring 55 % af opgaverne i Terminal-Bench, op fra omkring 39 %. Den brugte også 1,5K tokens pr. opgave i stedet for 2,9K.

Fangsten: det er Hugging Faces egne test, og på ukendte opgaver lå gevinsten for det meste inden for den tilfældige variation.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at indstille sædet og spejlene i en bil til føreren. Du kan få mere ud af en model, du allerede kører derhjemme, uden at skifte til en større.</p></div>

<p class="todo"><b>Prøv det:</b> Kører du Qwen3.8-27B med OpenCode, så prøv adapteren på Hugging Face. Der findes også en GGUF-udgave til lokale værktøjer.</p>

Kilder: [huggingface.co (blog)](https://huggingface.co/blog/harness-adapters-at-scale) · <span class="tag tag-official">Officiel</span> · [huggingface.co (adapter)](https://huggingface.co/harness-hub/Qwen3.8-27B-super-adapter) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En sprogmodel blev bedre ved at rette i sine egne vægte {#model-rewrites-own-weights}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>6,6</b><span>point mere præcis på nye opgaver efter sin egen rettelse</span></div>

<p class="short"><span>Kort fortalt</span>Forskere lod en åben model på 27B studere sine egne vægte og sine fejl. Derefter rettede den i vægtene og blev bedre, uden nogen træning.</p>

Normalt bliver en model kun bedre gennem træning, som er langsom og dyr. Modellen selv har intet at skulle have sagt.

Jiajun Fan og ti kolleger prøvede noget andet. De gav en åben model på 27B dens egne vægte, dens bedømte svar og muligheden for at køre sig selv. Den fandt ud af, hvorfor den fejlede, og omskrev de vægte, der stod bag. Den testede hver rettelse på øveopgaver og beholdt kun dem, der hjalp.

Dens egen rettelse gjorde den 6,6 point mere præcis på opgaver, den aldrig havde set. Over otte sessioner i træk blev den kun bedre. Da den fik en ødelagt kopi af sig selv, reparerede den kopien til over 80 % af den oprindelige præcision på billedopgaver.

Fangsten: kun den største model i familien klarede det. De mindre fejlede eller ødelagde sig selv, og andre har ikke tjekket artiklen endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Tidligere på ugen skrev vi, at selvforbedrende agenter ofte ikke kan se forskel på bedre og værre. Her tjekker modellen hver rettelse mod test først. Det er som en elev, der retter sin egen eksamen, men kun beholder en ændring, når facitlisten er enig.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.21885) · <span class="tag tag-official">Officiel</span>
{: .sources}
