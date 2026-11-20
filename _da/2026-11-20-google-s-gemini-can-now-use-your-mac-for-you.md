---
title: "Googles Gemini kan nu bruge din Mac for dig"
summary: "Googles Gemini-app kan nu klikke og skrive i dine Mac-apps i et vindue for sig, i USA. Desuden: Metas agent Muse viste ansatte andres data, AI-fejlrapporter forsinkede PostgreSQL, Anthropics første handelsdag, og GitHub lader agenter vente i stedet for at spørge."
date: 2026-11-20 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "computer-use", from: 1, more: ["ai-agent", "mixture-of-experts"] }
today:
  - { t: "Googles Gemini-app kan nu bruge apps på din Mac for dig, i USA.", why: "Mac-brugere, der betaler for Google AI." }
  - { t: "Metas agent Muse viste ansatte andres beskeder og banksaldi, skriver Reuters.", why: "Alle, der giver en AI-agent adgang til deres apps." }
  - { t: "AI-fejlrapporter forsinkede PostgreSQL 19, og en AI-bygget kopi af curl mangler 200 rettelser.", why: "Udviklere, der bygger på open source." }
  - { t: "Anthropics aktie lukkede første dag på 97,17 $, over prisen på 83 $.", why: "Alle, der følger, hvad AI-firmaer er værd." }
  - { t: "GitHubs kommandolinje lader kodeagenter vente på hændelser i pull requests.", why: "Udviklere, der bruger kodeagenter." }
other_lang_url: /2026/11/20/
items:
  - { n: 1, anchor: "gemini-mac-computer-use", signal: big, tracks: [build, general], min: 2, source: official, topic: agent, why: "En agent, der kan bruge alle apps, behøver ikke, at hver app bygger en særlig forbindelse til den.", do: "Prøver du det, så giv kun Gemini adgang til de apps, opgaven kræver.", steps: { title: "Sådan bruger Gemini din Mac", list: ["Du beskriver opgaven", "Gemini arbejder i et vindue for sig", "Du ser med og godkender vigtige trin"] } }
  - { n: 2, anchor: "meta-muse-mixups", signal: worth, tracks: [general], min: 1, source: reported, topic: security, why: "En agent, der læser alle dine apps, kan også blande sammen, hvis data der er hvis.", do: "Før du kobler en agent til din bank eller dine chatapps, så tjek, hvilken adgang du kan slå fra." }
  - { n: 3, anchor: "ai-bugs-open-source", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "200", number_label: "fejlrettelser i curl på tre uger, som en AI-bygget kopi mangler", topic: code, why: "AI gør det billigt at finde fejl og skrive kode, men mennesker skal stadig gennemse og vedligeholde den." }
  - { n: 4, anchor: "anthropic-first-trading-day", signal: worth, tracks: [general], min: 1, source: reported, number: "97,17 $", number_label: "i lukkekurs første dag, efter en første handel til 111,50 $", topic: money, why: "Prisen bevæger sig nu hver dag, så markedets humør om AI kan ses af alle." }
  - { n: 5, anchor: "gh-event-listen", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Det er billigere at vente på et signal end at spørge igen og igen, også for agenter.", do: "Er du med i forhåndsversionen, så opdatér gh til v2.105.0, og prøv gh event listen." }
  - { n: 6, anchor: "tencent-hy4-flash", signal: worth, tracks: [build, europe], min: 1, source: official, number: "12B", number_label: "aktive parametre pr. ord ud af 220B i alt", topic: open, why: "Store åbne modeller bliver billigere at køre, så du selv kan drive dem." }
  - { n: 7, anchor: "new-research-sound-old", signal: worth, tracks: [general], min: 1, source: official, number: "8 %", number_label: "af svarene sagde klart, at et spørgsmål stadig var åbent", topic: research, why: "Spørger du AI, om en idé er ny, kan den sige nej, selv når den ved, at svaret er ja.", bars: { title: "Svar, der klart sagde, at spørgsmålet var åbent", max: 100, rows: [{ l: "Normalt", v: 8, t: "8 %" }, { l: "Fast metode", v: 95, t: "95 %", hl: true }] } }
---

### 1. Googles Gemini kan nu bruge din Mac for dig {#gemini-mac-computer-use}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">2 min</span></p>

<p class="short"><span>Kort fortalt</span>Googles Gemini-app til Mac kan nu klikke, skrive og skifte mellem dine apps for at løse en opgave, i et vindue for sig. Først for betalende brugere i USA.</p>

#### <span>1 af 2</span> En agent, der arbejder ved siden af dig
De fleste AI-chats kan kun fortælle dig, hvad du skal gøre. Du klikker stadig selv formularerne igennem.

Nu kan Gemini på Mac selv klikke. Google kalder det computer use (se Forklaret nedenfor). Du beskriver en opgave, fx at udfylde fragttilbud ud fra en bunke PDF'er. Så arbejder Gemini i et separat vindue, så din egen skærm er fri.

Du ser hvert trin, mens det sker, og du godkender vigtige handlinger, før de bliver udført.

Funktionen rulles ud på engelsk i USA til folk med Google AI Plus, Pro eller Ultra. Du skal have en Mac med Apple-chip og macOS 15 eller nyere.

Apple kan følge efter: firmaet ser ud til at arbejde på sin egen agent, der bruger din Mac, skriver Bloomberg ud fra et jobopslag.

Fangsten: en agent, der kan klikke på alt, kan også klikke forkert. Google siger, at du selv vælger, hvilke apps den må åbne.

#### <span>2 af 2</span> Agenter, der kun henter værktøjer, når de skal bruge dem
Til udviklere har Google lagt Tool Retrieval ind i Gemini API'et. En agent med hundredvis af værktøjer skal ikke længere læse dem alle ved hver forespørgsel. Den henter kun det værktøj, den skal bruge, så forespørgslerne bliver kortere. Det er en gratis forhåndsversion.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu kunne en AI kun bruge apps, der havde bygget en særlig forbindelse til den. En agent, der ser skærmen, er som en ny kollega, der bruger de samme programmer som dig. Alle apps virker, men du skal holde øje med den i starten.</p></div>

<p class="todo"><b>Prøv det:</b> Prøver du det, så giv kun Gemini adgang til de apps, opgaven kræver.</p>

Kilder: [blog.google (Mac)](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) · <span class="tag tag-official">Officiel</span> · [blog.google (Tool Retrieval)](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-api-tool-retrieval/) · <span class="tag tag-official">Officiel</span> · [techcrunch.com (Apple)](https://techcrunch.com/2026/11/19/apple-may-be-developing-its-own-ai-agent-that-runs-your-mac/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Metas agent Muse viste ansatte andres private data, skriver Reuters {#meta-muse-mixups}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Ansatte hos Meta siger, at Muse, Metas personlige AI-agent, blandede samtaler sammen og viste dem data, der ikke var deres, skriver Reuters.</p>

Personlige agenter er nyttige, fordi de kan læse din mail, dine chats og din bank. Det er også derfor, en fejl kan blive dyr.

Muse kom i september. Ansatte, der testede den, så forespørgsler, de aldrig havde lavet, og banksaldi, der ikke var deres. I en chat om vejret skrev Muse pludselig to banksaldi op.

En anden ansat fik en påmindelse om en besked på Signal, selv om hun siger, at hun aldrig gav den adgang til andre apps. Hun kaldte det "en ekstrem krænkelse af privatlivet".

Meta siger, at de ansatte bruger andre versioner af Muse end offentligheden.

Fangsten: historien bygger på interne opslag, og det er uklart, om almindelige brugere er ramt.

<div class="why"><b>Derfor er det vigtigt</b><p>En agent, der læser alle dine apps, er som en assistent med nøgler til alle skuffer. Blander den sammen, hvis skuffe der er hvis, havner private ting de forkerte steder.</p></div>

<p class="todo"><b>Gør dette:</b> Før du kobler en agent til din bank eller dine chatapps, så tjek, hvilken adgang du kan slå fra.</p>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/19/metas-ai-agent-muse-is-mixing-up-conversations-and-exposing-private-data-report-says/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. AI-fejlrapporter forsinkede PostgreSQL, og en AI-bygget kopi af curl mangler 200 rettelser {#ai-bugs-open-source}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>200</b><span>fejlrettelser i curl på tre uger, som en AI-bygget kopi mangler</span></div>

<p class="short"><span>Kort fortalt</span>PostgreSQL 19 kom for sent, blandt andet fordi AI-værktøjer fandt så mange fejl. Og curls Daniel Stenberg siger, at AI-omskrivninger mangler de rettelser, mennesker hele tiden laver.</p>

I går skrev vi, at AI fandt gamle huller i NGINX og Ruby. Her er den anden side: de mennesker, der skal lukke dem.

PostgreSQL, en af de mest brugte databaser, udkom i version 19 torsdag. I oktober skrev kerneudvikleren Robert Haas, at den var forsinket, især på grund af AI. AI gør gamle fejl meget lettere at finde, så dem, der gennemser kode, brugte tiden på rettelser.

Samtidig har AI-agenter omskrevet curl, et værktøj der flytter data for utallige programmer, til sproget Rust. Det projekt siger, at det kostede 8.600 $. Men curls Daniel Stenberg påpeger, at curl selv lavede lidt over 200 fejlrettelser i de samme tre uger.

Ingen af dem er med i kopien.

Det populære site RegExr er endda gået offline. Ejerne siger, at den gamle kode ikke kan modstå AI-drevet hacking endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>AI har gjort to ting billige: at finde fejl og at skrive kode. At gennemse og vedligeholde koden er stadig langsomt menneskeligt arbejde. Det er som en fabrik, der pludselig får ti gange flere ordrer, men har lige så mange folk til at tjekke kvaliteten.</p></div>

Kilder: [postgresql.org](https://www.postgresql.org/about/news/postgresql-19-released-3449/) · <span class="tag tag-official">Officiel</span> · [rhaas.blogspot.com](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) · <span class="tag tag-official">Officiel</span> · [daniel.haxx.se](https://daniel.haxx.se/blog/2026/11/17/actual-curl-rewrites-in-rust/) · <span class="tag tag-official">Officiel</span> · [regexr.com](https://regexr.com/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Anthropics aktie lukkede første dag på 97,17 $, over prisen på 83 $ {#anthropic-first-trading-day}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>97,17 $</b><span>i lukkekurs første dag, efter en første handel til 111,50 $</span></div>

<p class="short"><span>Kort fortalt</span>Anthropics aktie blev handlet på Nasdaq for første gang torsdag. Den steg, faldt tilbage og lukkede over den pris, de nye ejere betalte.</p>

I går skrev vi, at Anthropic, firmaet bag Claude, solgte sine aktier til 83 $ stykket. Torsdag kunne alle handle dem for første gang.

Første handel kom til 111,50 $, mere end to timer efter at børsen åbnede, skriver Stock Titan. Så faldt kursen tilbage. Den lukkede på 97,17 $ og faldt lidt mere efter lukketid.

En note fra os: 7am AI skrives med Claude, så vi giver ikke Anthropic mere plads end andre firmaer.

Fangsten: én dag siger ikke meget om det lange løb.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu kunne ingen se fra dag til dag, hvad markedet mente om et AI-firma. Nu er kursen som et offentligt termometer for AI: du kan se humøret stige og falde.</p></div>

Kilder: [stocktitan.net](https://www.stocktitan.net/articles/anthropic-ipo-live-ant-first-trading-day-2026) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/11/19/anthropic-hits-nasdaq-exchanges-at-110-27-above-ipo-price/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. GitHubs kommandolinje lader kodeagenter vente i stedet for at spørge igen {#gh-event-listen}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>GitHubs kommandolinjeværktøj kan nu vente på, at en pull request ændrer sig, så agenter ikke skal tjekke igen og igen.</p>

En kodeagent, der åbner en pull request, skal vente på review og test. Ofte spørger den GitHub med få sekunders mellemrum, om noget har ændret sig.

Den nye kommando gh event listen vender det om. GitHub sender en besked, når der kommer et review, en testkørsel slutter, eller der opstår en merge-konflikt.

Den kræver gh v2.105.0, og tjenesten bag er en forhåndsversion med venteliste.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er forskellen på et barn, der spørger "er vi der snart" hvert minut, og en chauffør, der siger til, når I er fremme. Færre spørgsmål betyder færre spildte penge.</p></div>

<p class="todo"><b>Prøv det:</b> Er du med i forhåndsversionen, så opdatér gh til v2.105.0, og prøv gh event listen.</p>

Kilde: [github.blog](https://github.blog/changelog/2026-11-18-wait-for-pull-request-events-with-github-cli) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Tencent deler Hy4 flash, en stor åben model, der er billig at køre {#tencent-hy4-flash}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>12B</b><span>aktive parametre pr. ord ud af 220B i alt</span></div>

<p class="short"><span>Kort fortalt</span>Tencent har lagt Hy4 flash på Hugging Face. Det er en stor model, der læser tekst og billeder, men den bruger kun en lille del af sig selv pr. ord.</p>

Store modeller er dyre at køre, fordi så meget af dem arbejder på én gang. Det undgår Hy4 flash. Den har 220B parametre, men kun omkring 12B arbejder på hvert ord (se Forklaret nedenfor).

På Tencents egen arbejdstest koster en opgave omkring en ottendedel af, hvad DeepSeeks Flash-model koster. Tencent har selv kørt testen.

Fangsten: det er ikke en model til en bærbar, og Tencents eksempler bruger en server med mange GPU'er. Meget store tjenester skal have en særskilt licens, men EU er ikke udelukket.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et stort hospital, hvor kun de rette specialister ser hver patient. Du får hele husets viden, men betaler for få læger. Så kan et firma køre en stærk model på sine egne servere.</p></div>

Kilde: [huggingface.co](https://huggingface.co/tencent/Hy4-flash) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI siger ofte, at din forskningsidé er gammel, selv når den ved, den er ny {#new-research-sound-old}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>8 %</b><span>af svarene sagde klart, at et spørgsmål stadig var åbent</span></div>

<p class="short"><span>Kort fortalt</span>En ny artikel viser, at AI-modeller får åbne forskningsspørgsmål til at lyde, som om de er undersøgt. Det gør de, selv når de ved bedre.</p>

Mange spørger AI, om en idé er prøvet før. Guy Zyskind har testet, hvor ærligt svaret er. Han tog spørgsmål fra nyligt antagne artikler, så ingen havde besvaret dem før.

Spurgt direkte vurderede OpenAIs GPT-6-Astra, at 98 % af dem var uudforskede. Men i almindelige svar sagde den det kun klart i 8 % af tilfældene.

Den fik feltet til at lyde længere fremme, end det var, og alle de topsystemer, han testede, gjorde det samme. En fast metode, der tjekker hver citeret artikel for sig, løftede Astras klare svar til 95 %.

Fangsten: det er én forfatters undersøgelse, og ingen andre har gentaget den endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en ven, der godt ved, at din idé er ny, men alligevel siger "det har nogen sikkert gjort". Bruger du AI til at tjekke en idé, så spørg den direkte, om spørgsmålet stadig er åbent.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.23546) · <span class="tag tag-official">Officiel</span>
{: .sources}
