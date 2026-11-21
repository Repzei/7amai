---
title: "En matematiker hos Anthropic siger, at han og Claude har bevist Riemann-hypotesen"
summary: "Levent Alpöge siger, at han og Claude har bevist Riemann-hypotesen, og beviset er skrevet, så computere kan tjekke det. Desuden: Signal spærrer for AI-agenter på telefonen, OpenAIs agenter jagter langsomme ChatGPT-svar, Copilot får otte nye forbindelser, og en agenthukommelse, der gemmer alt."
date: 2026-11-21 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "riemann-hypothesis", from: 1, more: ["formal-verification", "context-window"] }
today:
  - { t: "En matematiker hos Anthropic siger, at han og Claude har bevist Riemann-hypotesen.", why: "Alle, der er nysgerrige på, hvor AI i videnskaben er på vej hen." }
  - { t: "Signal spærrer nu for, at AI-agenter på telefonen læser dine chats.", why: "Alle, der bruger Signal eller en assistent på telefonen." }
  - { t: "OpenAIs agenter finder årsagen til langsom ChatGPT, og modellerne får en kemitest.", why: "Teams, der overvejer at give ekspertarbejde til AI." }
  - { t: "GitHub Copilot får otte nye forbindelser, blandt andet til Supabase og Box.", why: "Udviklere, der bruger Copilot." }
other_lang_url: /2026/11/21/
items:
  - { n: 1, anchor: "riemann-hypothesis-claim", signal: big, tracks: [general], min: 2, source: official, number: "1859", number_label: "året, hvor Riemann stillede problemet", topic: research, why: "En computer kan måske bekræfte et berømt bevis, før noget menneske forstår det." }
  - { n: 2, anchor: "signal-blocks-ai-agents", signal: big, tracks: [general, europe], min: 1.5, source: official, topic: security, why: "Kryptering beskytter en besked på vejen, men en agent, der læser din skærm, ser den, når den er kommet frem.", do: "Bruger du Signal på en Mac, så føj Signal til de udelukkede apps under Systemindstillinger, Siri." }
  - { n: 3, anchor: "openai-performance-factory-medchembench", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "70 %", number_label: "af 100 tjekkede diagnoser fra OpenAIs agenter var rigtige", topic: agent, why: "AI er god til første udkast af ekspertarbejde, men et menneske tjekker det stadig." }
  - { n: 4, anchor: "copilot-new-connectors", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Copilot kan slå op i teamets værktøjer, men du bestemmer, hvilke den får adgang til.", do: "Har du Copilot Business, så beslut, hvilke af de nye forbindelser I vil tillade." }
  - { n: 5, anchor: "inkling-2-mini", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "32 GB", number_label: "hukommelse på en Mac med Apple-chip er nok", topic: local, why: "En kodeagent på din egen bærbare holder koden hjemme, men den skal stadig have et sikkert rum.", do: "Prøver du den med en agent, så kør den i en mappe, hvor slettede filer ikke gør skade." }
  - { n: 6, anchor: "grepmem-agent-memory", signal: worth, tracks: [build, general], min: 1, source: official, number: "95-97 %", number_label: "af huskespørgsmålene rigtigt, mod højst 21 % med resuméer", topic: research, why: "At gemme hele historikken og søge i den slår at opsummere og glemme." }
---

### 1. En matematiker hos Anthropic siger, at han og Claude har bevist Riemann-hypotesen {#riemann-hypothesis-claim}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">2 min</span></p>
<div class="number"><b>1859</b><span>året, hvor Riemann stillede problemet</span></div>

<p class="short"><span>Kort fortalt</span>Levent Alpöge, en matematiker, der arbejder hos Anthropic, siger, at han og Claude har bevist Riemann-hypotesen. Beviset er skrevet, så en computer kan tjekke det, men intet menneske kan følge det endnu.</p>

Riemann-hypotesen er et af de mest berømte uløste problemer i matematik. Bernhard Riemann stillede det i 1859, og det handler om, hvordan primtallene er fordelt (se Forklaret nedenfor). Det er et af Millennium Prize-problemerne, og ingen har bevist det.

I et essay fra denne uge skriver Alpöge, at han fandt beviset i samarbejde med Claude. Mod slutningen var Claude langt foran ham, skriver han. Han siger også, at metoden dækker en bredere udgave, den generaliserede Riemann-hypotese.

Han har ikke udgivet en almindelig artikel. Han har lagt beviset ud i Lean, et sprog, hvor en computer tjekker hvert trin. Flere matematikere, blandt andre Andrew Sutherland fra MIT, siger, at filerne kan kompileres uden fejl, skriver TechCrunch. Computeren har altså godkendt trinnene.

Fangsten: et computertjek viser, at hvert trin holder, men ikke hvorfor. Der går et stykke tid, før matematikerne har styr på beviset, skriver TechCrunch. Og ingen, heller ikke Alpöge, kan endnu forklare beviset, så mennesker kan følge det. Han siger, at en detaljeret udgave, han lavede, fyldte over 250.000 sider, alt for meget at læse, og han lover en læsbar udgave.

Samme dag lagde Ravi Vakil fra Stanford et udkast ud til et rent menneskeligt bevis for den bredere udgave, skrevet af Alessandro Masullo. Omkring otte timer senere skrev Vakil, at folk med hjælp fra AI-modeller havde fundet problemer i det. Vakil siger ikke, at det er korrekt.

En bemærkning fra os: 7am AI skrives med Claude, og Alpöge arbejder for Anthropic. Derfor behandler vi det som en påstand, indtil andre har tjekket den.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu talte et bevis, når nok eksperter forstod det. Her kan en computer måske bekræfte et bevis, før noget menneske gør. Det er som en nøgle, der passer i låsen: du ved, at den virker, men endnu ikke, hvorfor den har den form.</p></div>

Kilder: [alpo.ge](https://alpo.ge/remark.pdf) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/20/ai-claimed-a-solution-to-the-167-year-old-riemann-hypothesis-and-a-human-did-too/) · <span class="tag tag-reported">Rapporteret</span> · [math216.wordpress.com](https://math216.wordpress.com/2026/11/20/hurried-announcement-alessandro-masullo-grh/) · <span class="tag tag-reported">Rapporteret</span> · [claymath.org](https://www.claymath.org/millennium/riemann-hypothesis/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Signal spærrer nu for, at AI-agenter på telefonen læser dine chats {#signal-blocks-ai-agents}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Signals apps forhindrer nu AI-assistenterne i iPhones og Android-telefoner i at læse dine beskeder på skærmen. Du kan slå det fra, men Signal fraråder det.</p>

AI-agenter, der læser din skærm, er nu bygget ind i telefonerne.

Fredag sagde Signal, at appen begrænser de agenter. På iOS 27 spærrer Signal for skærmbilleder inde i appen, med en indstilling, der hedder "Block Siri AI". På Android slår appen sin skærmbeskyttelse til, når den opdager en AI-assistent, der læser skærmen. Signal nævner Gemini, Siri og Metas Muse.

Du kan slå beskyttelsen fra i indstillingerne. Men Signal advarer om, at dine beskeder og dine kontakters beskeder så kan blive vist for agenterne.

Fangsten: Signal siger selv, at løsningen ikke er komplet. Agenter kan nå appens data på andre måder, fx gennem filer. På Mac kan Signal ikke spærre pålideligt for skærmbilleder, og på Android virker det kun, hvor appen kan opdage assistenten. Derfor beder Signal Apple, Google og Microsoft om en enkel måde, hvorpå apps kan melde sig fra.

<div class="why"><b>Derfor er det vigtigt</b><p>Kryptering beskytter en besked på vejen til dig. Men en agent, der læser din skærm, ser den, når den er kommet frem. Det er som et forseglet brev, som en hjælper læser over din skulder: konvolutten var sikker, rummet var ikke.</p></div>

<p class="todo"><b>Gør dette:</b> Bruger du Signal på en Mac, så føj Signal til de udelukkede apps under Systemindstillinger, Siri.</p>

Kilder: [signal.org](https://signal.org/blog/protecting-your-privacy/) · <span class="tag tag-official">Officiel</span> · [theregister.com](https://www.theregister.com/security/2026/11/20/signal-slams-door-on-prying-ai-agents-to-protect-privacy/5311466) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. OpenAI viser agenter, der finder årsagen til langsom ChatGPT, og en kemitest {#openai-performance-factory-medchembench}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>70 %</b><span>af 100 tjekkede diagnoser fra OpenAIs agenter var rigtige</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI har forklaret, hvordan firmaets kodeagenter finder ud af, hvorfor ChatGPT bliver langsom. Firmaet har også udgivet en test af, hvor godt modellerne ræsonnerer om medicin.</p>

#### <span>1 af 2</span> Agenter, der jagter langsomme svar
Når en stor tjeneste bliver langsommere, kan ingeniører bruge timer i logfilerne. OpenAI lader nu Codex, firmaets kodeagent, tage den første runde. Når en alarm går, undersøger en agent sagen og foreslår en rettelse. En anden agent prøver så at bevise, at den første tager fejl, og en ingeniør bestemmer, hvad der bliver sendt ud.

På lidt over tre måneder har systemet lavet mere end 1.700 undersøgelser. Da ingeniører tjekkede 100 af diagnoserne, var 70 % rigtige. OpenAI siger, at rettelser er sværere end diagnoser, og at det langsomme led nu kan være at vente på, at en ingeniør gennemser dem.

#### <span>2 af 2</span> En test i medicinsk kemi
MedChemBench beder modellerne ræsonnere om molekyler, sådan som kemikere, der udvikler medicin, gør. I OpenAIs egen test fik GPT-6.2 Astra 84,5 % af pointene ved sin højeste indstilling for ræsonnering. Den ældre GPT-6 Astra var bedst til at regne molekylers opbygning ud, men havde sværere ved at vælge stoffer.

Modellerne kan have set kildeartiklerne før, og testen siger intet om at finde ny medicin.

<div class="why"><b>Derfor er det vigtigt</b><p>Begge dele viser det samme mønster. AI er nu god til første udkast af ekspertarbejde, som en skarp ung kollega. Men en erfaren skal stadig tjekke det, før det tæller.</p></div>

Kilder: [openai.com (Performance Factory)](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast/) · <span class="tag tag-official">Officiel</span> · [openai.com (MedChemBench)](https://openai.com/index/introducing-medchembench/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. GitHub Copilot kan nu slå op i Supabase, Box og seks andre tjenester {#copilot-new-connectors}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>GitHub har givet Copilot otte nye forbindelser. Så kan den slå op i værktøjer som Supabase, Buildkite og Calendly, mens den arbejder.</p>

Forbindelserne bruger MCP, en fælles standard, der lader AI-værktøjer tale med andre tjenester. Copilot havde i forvejen mere end 25, fx Slack, Figma og Sentry. De nye er Box, Buildkite, Calendly, ClickUp, Mixpanel, Supabase, Webflow og Wix.

Du kan spørge, hvorfor et Buildkite-build fejlede, og rette koden i samme session. Eller Copilot kan tjekke en Supabase-database, før den skriver en ændring til den.

De er i offentlig forhåndsversion på alle Copilot-abonnementer. På Business og Enterprise skal en administrator først slå "Editor preview features" til.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at give en ny kollega login til teamets værktøjer. Kollegaen holder op med at bede dig slå ting op, men du bestemmer, hvilke døre den nye får nøgle til.</p></div>

<p class="todo"><b>Gør dette:</b> Har du Copilot Business, så beslut, hvilke af de nye forbindelser I vil tillade.</p>

Kilde: [github.blog](https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Thinking Machines udgiver Inkling 2 Mini, en kodemodel til en bærbar {#inkling-2-mini}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>32 GB</b><span>hukommelse på en Mac med Apple-chip er nok</span></div>

<p class="short"><span>Kort fortalt</span>Thinking Machines har lagt Inkling 2 Mini på Hugging Face under licensen Apache 2.0. Den kører på en Mac med 32 GB hukommelse og klarer sig godt i kodetests.</p>

I sidste uge frigav laboratoriet vægtene til Inkling 2 Small, som det havde lovet. Nu kommer en mindre søskende. Mini har 26,4B parametre, de tal, en model har lært, men kun 3,4B af dem arbejder på hvert ord. De midterste lag kører også tre gange, så den tænker længere uden at blive større.

I SWE-bench Verified, en kodetest, scorer den 79,2 %, lidt over Qwens model i samme størrelse. Det er Thinking Machines' egne tal.

Fangsten: modelkortet er usædvanlig ærligt. Mini siger oftere end større modeller forkerte ting med sikker stemme. Den kan sidde fast i løkker, når den leder efter fejl, og den kan slette eller overskrive filer uden at spørge.

<div class="why"><b>Derfor er det vigtigt</b><p>En kodeagent på din egen bærbare holder din kode hjemme. Men en model, der kan slette filer, skal have et afgrænset arbejdsrum, ligesom en nyansat, der starter på et testsystem.</p></div>

<p class="todo"><b>Prøv det:</b> Prøver du den med en agent, så kør den i en mappe, hvor slettede filer ikke gør skade.</p>

Kilde: [huggingface.co](https://huggingface.co/thinkingmachines/Inkling-2-Mini) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter husker bedre, når de gemmer alt og søger i det {#grepmem-agent-memory}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>95-97 %</b><span>af huskespørgsmålene rigtigt, mod højst 21 % med resuméer</span></div>

<p class="short"><span>Kort fortalt</span>En AI-agent husker langt bedre, hvis den gemmer hele sin historik som tekst og søger i den, viser en ny artikel. Resuméer taber for meget.</p>

Lange opgaver fylder en agents context window, dens arbejdshukommelse (se Forklaret nedenfor). Den normale løsning er at opsummere gamle trin eller smide dem væk. Men et resumé mister detaljer, som agenten kan få brug for senere.

Ziyan Yang, Taiwei Shi og Jieyu Zhao prøvede noget enklere, kaldet GrepMem. Agenten skriver alt i en almindelig tekstlog. Når den skal bruge noget, søger den efter de rigtige ord i loggen. Der er ingen database og ingen ekstra model. De trænede en åben model, Qwen3.5-9B, til at arbejde sådan.

I en huskeprøve, der hedder ContextBench, fik den 95-97 % af spørgsmålene rigtigt. Metoder, der opsummerer eller smider historik væk, fik højst 21 %.

Fangsten: det er forfatternes egne tests med én model på 9B, og andre har ikke tjekket dem endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at føre en fuld dagbog i stedet for et ugentligt resumé. Du kan altid slå op, præcis hvad der skete. For agenter kan den enkleste hukommelse også være den bedste.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.25123) · <span class="tag tag-official">Officiel</span>
{: .sources}
