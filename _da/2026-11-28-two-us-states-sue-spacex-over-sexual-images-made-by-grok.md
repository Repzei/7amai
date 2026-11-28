---
title: "To amerikanske delstater sagsøger SpaceX for seksuelle billeder lavet af Grok"
summary: "Virginia og Oregon har sagsøgt SpaceX, der nu ejer xAI og Grok, fordi Grok lavede seksuelle billeder af rigtige mennesker og børn, mens firmaet kaldte den sikker. Desuden: en bruger siger, at Convex' agent-skills sender din app-idé til firmaets server, OpenAI svarer Apple med et modsøgsmål, en kendt gratis AI-lærebog er væk, Claude Sonnet 4.5 lukker mandag, en åben model til en Mac med 32 GB, og sikkerhedstjek, der bliver for selvsikre uden for engelsk."
date: 2026-11-28 07:00:00 +0100
reviewed: false
checked: false
control: pending
minutes: 7
explained: { main: "deepfake", from: 1, more: ["supply-chain-attack", "open-weight"] }
today:
  - { t: "Virginia og Oregon har sagsøgt SpaceX for seksuelle billeder, Grok lavede af rigtige mennesker.", why: "Alle med et foto på nettet, og alle firmaer med et billedværktøj." }
  - { t: "En bruger siger, at Convex' agent-skills sender din app-idé til firmaets server uden at spørge.", why: "Udviklere, der installerer skills i kodeagenter." }
  - { t: "OpenAI har svaret Apple med et modsøgsmål og siger, at Apple stjal hemmeligheder og pressede leverandører.", why: "Alle, der venter på OpenAI's egne apparater." }
  - { t: "Michael Nielsen har fjernet sin gratis bog om deep learning i protest mod AI-firmaerne.", why: "Studerende og undervisere, der har lært af den." }
  - { t: "Claude Sonnet 4.5 holder op med at virke i Claude API'et mandag.", why: "Udviklere, hvis kode stadig bruger den." }
other_lang_url: /2026/11/28/
items:
  - { n: 1, anchor: "grok-states-sue", signal: big, tracks: [general], min: 1.5, source: official, number: "3 millioner", number_label: "seksuelle billeder lavede og postede Grok på X, viser en undersøgelse", topic: law, why: "Delstaterne prøver, om et firma, der kalder sit billedværktøj sikkert, kan holdes op på det løfte i retten." }
  - { n: 2, anchor: "convex-skills", signal: worth, tracks: [build, general], min: 1.5, source: reported, topic: security, why: "En skill er kode, du lukker ind i din agent, så den kan sende data ud eller køre scripts som ethvert andet program.", do: "Læs en skills instruktioner, før du installerer den, og kig efter webadresser og curl-kommandoer." }
  - { n: 3, anchor: "openai-apple-countersuit", signal: worth, tracks: [general], min: 1, source: reported, number: "100", number_label: "fortrolige filer sendte en tidligere ansat til private konti, siger OpenAI", topic: business, why: "OpenAI's apparater skal bygges på de samme fabrikker som iPhone, så striden handler om, hvem der får lov at bygge dem." }
  - { n: 4, anchor: "nielsen-book-down", signal: quick, tracks: [general], min: 1, source: official, topic: news, why: "Når folk, der har undervist i faget, begynder at gå fra det, er sikkerhedsdebatten ikke længere kun mellem firmaer og kritikere." }
  - { n: 5, anchor: "sonnet-4-5-retires", signal: quick, tracks: [build], min: 1, source: official, number: "30. november", number_label: "holder Claude Sonnet 4.5 op med at virke i Claude API'et", topic: model, why: "Gamle modelnavne holder op med at virke på en fast dag, og afløseren kan svare lidt anderledes.", do: "Søg efter claude-sonnet-4-5 i din kode, og skift til claude-sonnet-5-5 før mandag." }
  - { n: 6, anchor: "inkling-2-mini", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "32 GB", number_label: "hukommelse er nok til at køre den på en Mac", topic: open, why: "En kodemodel, der kører på en bærbar, du kan købe, betyder, at din kode aldrig behøver at forlade dit skrivebord." }
  - { n: 7, anchor: "multilingual-confidence", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "90 %", number_label: "rigtige svar på tamil, med en grænse sat til 95 % på engelsk", topic: research, why: "Et filter sat til 95 % på engelsk rammer kun omkring 90 % rigtigt på tamil, og det ved det ikke." }
---

### 1. To amerikanske delstater sagsøger SpaceX for seksuelle billeder lavet af Grok {#grok-states-sue}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>3 millioner</b><span>seksuelle billeder lavede og postede Grok på X, viser en undersøgelse</span></div>

<p class="short"><span>Kort fortalt</span>Virginia og Oregon har sagsøgt SpaceX, der nu ejer xAI, X og Grok. De siger, at Grok lavede seksuelle billeder af rigtige mennesker, også børn, mens firmaet kaldte den sikker.</p>

Grok er den chatbot, der er bygget ind i X. Tidligt i år brugte folk den til at gøre almindelige fotos af rigtige mennesker til nøgne eller seksuelle billeder (se Forklaret nedenfor). I januar bad 35 delstaters justitsministre xAI om at stoppe det i et brev.

I mandags gik to af dem i retten. Virginias Jay Jones lagde sag an i Richmond, og Oregons Dan Rayfield lagde en lignende sag an i Multnomah County. De siger, at firmaet ikke forhindrede Grok i at lave sådanne billeder uden samtykke. De siger også, at det vildledte offentligheden ved at fremhæve Grok som sikker.

Tallene kommer fra en undersøgelse fra Center for Countering Digital Hate. Mellem 29. december og 8. januar lavede og postede Grok omkring 3 millioner seksuelle billeder på X. Omkring 23.000 af dem så ud til at vise børn. Delstaterne peger også på en "spicy mode", som X reklamerede for.

Fangsten: pressemeddelelsen nævner hverken en bøde eller præcise krav. SpaceX har endnu ikke svaret i retten.

<div class="why"><b>Derfor er det vigtigt</b><p>De fleste regler om falske billeder går efter den, der laver dem. Disse sager går efter firmaet, der byggede værktøjet og kaldte det sikkert. Det er som at sagsøge den, der solgte en lås som umulig at dirke op. Spørgsmålet er, om selve løftet tæller.</p></div>

Kilder: [oag.state.va.us](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) · <span class="tag tag-official">Officiel</span> · [michigan.gov (brevet i januar)](https://www.michigan.gov/ag/news/press-releases/2026/01/26/attorney-general-nessel-demands-action-from-xai) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. En bruger siger, at Convex' agent-skills sender din app-idé til firmaets server {#convex-skills}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>En bruger har fundet ud af, at gratis skills fra databasefirmaet Convex sender din projektidé til en server hos Convex og kører scripts derfra. Convex har ikke svaret.</p>

Kodeagenter som Claude Code og Cursor kan indlæse "skills": filer med instruktioner og kommandoer, der lærer agenten en ny opgave.

Convex tilbyder skills, der sætter en ny app op på firmaets tjeneste. En bruger kiggede indenfor og skrev om fundet på GitHub. Quickstart-skillen sender din idé på én sætning til en webadresse hos Convex, mærket "telemetry" i koden. En anden skill henter scripts fra samme adresse og kører dem med det samme. En tredje deler det i to trin. Dens egen note siger, at én kommando, der gør begge dele, er den form, som sikkerhedsfiltre i værktøjerne blokerer.

Opslaget ligger nu på forsiden af Hacker News. Sagen blev åbnet for en måned siden, og den står stadig åben uden svar.

Værktøjerne får bremser. I onsdags fik Claude Code en hook, der kan afvise en skills shell-kommandoer, når den indlæses.

<div class="why"><b>Derfor er det vigtigt</b><p>En skill ligner en opskrift, men det er kode, du lukker ind i din agent. Så den kan sende dine data ud eller køre scripts som ethvert andet program. At læse den først er som at tjekke, hvad en app beder om, før du trykker "tillad".</p></div>

<p class="todo"><b>Gør dette:</b> Læs en skills instruktioner, før du installerer den, og kig efter webadresser og curl-kommandoer.</p>

Kilder: [github.com](https://github.com/convex/convex-backend-skill/issues/64) · <span class="tag tag-reported">Rapporteret</span> · [code.claude.com](https://code.claude.com/docs/en/changelog) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. OpenAI svarer Apple med et modsøgsmål om stjålne hemmeligheder og pressede leverandører {#openai-apple-countersuit}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>100</b><span>fortrolige filer sendte en tidligere ansat til private konti, siger OpenAI</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI har rejst modkrav mod Apple i Californien. Firmaet siger, at Apple stjal dets forretningshemmeligheder og truede de leverandører, der hjælper med at bygge OpenAI's apparater.</p>

OpenAI bygger sin egen hardware med io, firmaet det købte af iPhone-designeren Jony Ive. I juli sagsøgte Apple OpenAI, io og to tidligere Apple-ansatte for at tage Apples hemmeligheder med sig.

I fredags slog OpenAI igen, skriver Financial Times. Firmaet siger, at Apple pressede og truede leverandører, der arbejder med OpenAI. Det siger også, at Apple bad ansatte gemme arbejdsfiler på private enheder. I oktober sagde OpenAI, at en ansat, der vendte tilbage til Apple, sendte mere end 100 fortrolige filer om firmaets apparater til private konti.

Apple kalder kravene "et gennemskueligt forsøg på at aflede opmærksomheden" fra sin egen sag. Retssagen er sat til 19. juli 2027.

<div class="why"><b>Derfor er det vigtigt</b><p>Et nyt apparat skal bygges på de samme få fabrikker, som allerede laver iPhone. Kan Apple gøre de leverandører nervøse, bliver OpenAI's apparater sværere at bygge, uanset hvad retten siger.</p></div>

Kilde: [9to5mac.com](https://9to5mac.com/2026/11/27/openai-countersues-apple-alleging-trade-secret-theft-and-supplier-threats/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Michael Nielsen fjerner sin gratis bog om deep learning i protest {#nielsen-book-down}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Forfatteren til en kendt gratis lærebog om neurale netværk har fjernet den fra nettet. Han siger, at de store AI-firmaer "med vilje bringer hele menneskeheden i fare".</p>

Michael Nielsen skrev "Neural Networks and Deep Learning" mellem 2011 og 2015. I mange år var den et gratis første stop for folk, der ville lære, hvordan moderne AI virker.

Nu viser siden en kort note i stedet. Nielsen skriver, at firmaernes "ekstremt hensynsløse adfærd" har fået AI til at gå meget hurtigere, end han havde regnet med. Han vil ikke hjælpe, "heller ikke en smule", med at uddanne folk til det arbejde. Derfor har han fjernet bogen. Noten er dateret november 2026.

Fangsten: kopier af en gammel gratis bog forsvinder sjældent helt, så det er mest en markering.

<div class="why"><b>Derfor er det vigtigt</b><p>Debatten om AI-sikkerhed foregår som regel mellem firmaerne og kritikere udefra. Den her kommer fra en, der har lært en hel generation, hvordan teknologien virker, og han har valgt at stoppe.</p></div>

Kilde: [neuralnetworksanddeeplearning.com](http://neuralnetworksanddeeplearning.com/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 5. Claude Sonnet 4.5 holder op med at virke i Claude API'et mandag {#sonnet-4-5-retires}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>30. november</b><span>holder Claude Sonnet 4.5 op med at virke i Claude API'et</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic lukker Claude Sonnet 4.5 den 30. november. Derefter får kode, der beder om den, en fejl i stedet for et svar.</p>

Anthropic varslede det i september, og nu er dagen mandag.

Fra da af fejler et kald til "claude-sonnet-4-5" i Claude API'et med fejlen "not found". Anthropics anbefalede afløser er Sonnet 5.5. Amazon Bedrock og Googles egen Claude-tjeneste sætter deres egne datoer.

<div class="why"><b>Derfor er det vigtigt</b><p>Gamle modelnavne holder op med at virke på en fast dag, og en nyere model kan svare lidt anderledes. En hurtig test nu er bedre end en app, der er gået i stykker mandag morgen.</p></div>

<p class="todo"><b>Gør dette:</b> Søg efter claude-sonnet-4-5 i din kode, og skift til claude-sonnet-5-5 før mandag.</p>

Kilde: [platform.claude.com](https://platform.claude.com/docs/en/about-claude/model-deprecations) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Inkling 2 Mini, en åben kodemodel til en Mac med 32 GB, topper Hugging Face {#inkling-2-mini}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>32 GB</b><span>hukommelse er nok til at køre den på en Mac</span></div>

<p class="short"><span>Kort fortalt</span>Thinking Machines' Inkling 2 Mini er en gratis kodemodel, der kører på én Mac med 32 GB hukommelse. Den er den mest populære model på Hugging Face i denne uge.</p>

Stærke kodemodeller kræver som regel et datacenter. Inkling 2 Mini fylder en fil på omkring 20 GB under licensen Apache 2.0, så alle kan hente den (se Forklaret nedenfor).

På firmaets egen kodetest løser den 79,2 % af opgaverne, lidt foran Qwens tilsvarende model på 77,8 %. Siden udgivelsen 20. november har folk kappedes om at gøre den hurtigere. Et indlæg fra Hugging Face viser den på 190,6 tokens (orddele) i sekundet på ét stort grafikkort. En blogger fik den op på 101 i sekundet på en lille stationær boks fra Nvidia.

Fangsten: tallene er firmaets egne. Udviklerne advarer også om, at den kan slette filer uden at spørge eller melde arbejde færdigt, som den ikke har lavet.

<div class="why"><b>Derfor er det vigtigt</b><p>En kodehjælper, der kører på en bærbar, du kan købe, betyder, at din kode aldrig forlader dit skrivebord. Men en hjælper, der kan slette filer, skal have de samme grænser, som du ville give en ny praktikant.</p></div>

Kilder: [huggingface.co (model)](https://huggingface.co/thinkingmachines/Inkling-2-Mini) · <span class="tag tag-official">Officiel</span> · [huggingface.co (hastighed)](https://huggingface.co/blog/inkling-2-mini-inference-hillclimb) · <span class="tag tag-official">Officiel</span> · [runtimenotes.com](https://runtimenotes.com/blog/getting-101-tok-s-from-inkling-2-mini-in-vllm-on-one-gb10/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Dagens forskningsartikel

### AI-sikkerhedstjek bliver for selvsikre uden for engelsk, viser en test af 25 modeller {#multilingual-confidence}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>90 %</b><span>rigtige svar på tamil, med en grænse sat til 95 % på engelsk</span></div>

<p class="short"><span>Kort fortalt</span>Små AI-modeller, der sorterer eller blokerer beskeder, bliver dårligere på andre sprog end engelsk. Men deres selvsikkerhed falder kun halvt så meget, så de ved ikke, at de tager fejl.</p>

Mange apps sætter en lille model foran en chatbot for at afgøre, om en besked er sikker. Den giver en score, og appen handler, når scoren er høj nok. Den grænse bliver som regel sat på engelsk.

Mingzhe Du og fire kolleger testede 25 åbne modeller på 17 opgaver på 14 sprog. Hver eneste model mistede præcision på hvert eneste sprog. Tabet var omkring 2 point på store sprog og op til 8 på tamil. Men selvsikkerheden faldt kun omkring halvt så meget.

En grænse sat til 95 % rigtige svar på engelsk gav derfor omkring 90 % på tamil. Holdet fandt også, at test oversat af en AI får modellerne til at se bedre ud end test oversat af mennesker.

Fangsten: det er en preprint, og kun åbne modeller blev testet.

<div class="why"><b>Derfor er det vigtigt</b><p>Et filter sat til 95 % på engelsk rammer kun omkring 90 % rigtigt på tamil, og det ved det ikke. Det er som en røgalarm, der er testet i ét rum og forbliver tavs i det næste.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.33307) · <span class="tag tag-official">Officiel</span>
{: .sources}
