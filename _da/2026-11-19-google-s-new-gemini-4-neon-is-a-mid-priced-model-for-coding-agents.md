---
title: "Googles nye Gemini 4 Neon er en mellemdyr model til kodeagenter"
summary: "Google har lanceret Gemini 4 Neon, en model mellem selskabets topmodel og billigmodel, og den er allerede i GitHub Copilot. Desuden: AI hjalp med at finde kritiske huller i NGINX og Ruby, Anthropic prissætter sin aktie til 83 $, og banker lægger risikoen ved agenter over på dig."
date: 2026-11-19 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "prompt-caching", from: 1, more: ["mixture-of-experts", "remote-code-execution"] }
today:
  - { t: "Google har lanceret Gemini 4 Neon, en mellemdyr model til kodeagenter.", why: "Udviklere og firmaer, der betaler for AI-agenter." }
  - { t: "AI hjalp med at finde kritiske huller i NGINX og Ruby, og rettelserne er ude.", why: "Alle, der driver hjemmesider eller Ruby-apps." }
  - { t: "Anthropic har sat prisen på sin aktie til 83 $, og handlen starter i dag.", why: "Alle, der følger, hvad AI-firmaer er værd." }
  - { t: "Store amerikanske banker siger, at du bærer risikoen, hvis din AI-agent bliver hacket.", why: "Alle, der giver et AI-værktøj adgang til deres bank." }
other_lang_url: /2026/11/19/
items:
  - { n: 1, anchor: "gemini-4-neon", signal: big, tracks: [build, general], min: 2, source: official, number: "3 $", number_label: "pr. million input-tokens, mellem Googles billigmodel og topmodel", topic: model, why: "Det meste agentarbejde kræver ikke den dyreste model, så en god mellemvej sænker regningen.", do: "Betaler du for Gemini 4 Carbon, så kør samme opgave på Neon, og sammenlign prisen." }
  - { n: 2, anchor: "nginx-ruby-ai-bugs", signal: big, tracks: [build, general], min: 1.5, source: official, number: "225 millioner", number_label: "hjemmesider kører på NGINX, hvor AI fandt et kritisk hul", topic: security, why: "AI gør det billigere at gennemsøge gammel kode, så huller, der har gemt sig i årevis, dukker op på uger.", do: "Opdatér NGINX til 1.30.7 eller 1.31.9 og Ruby til 4.0.10, 3.4.13 eller 3.3.14." }
  - { n: 3, anchor: "anthropic-ipo-83", signal: worth, tracks: [general], min: 1, source: official, number: "83 $", number_label: "pr. aktie, over det spænd på 70 til 78 $, Anthropic først satte", topic: money, why: "Fra i dag sætter offentligheden prisen på et AI-firma hver dag, ikke nogle få investorer." }
  - { n: 4, anchor: "banks-ai-agent-liability", signal: worth, tracks: [general], min: 1, source: reported, topic: money, why: "En agent med dit bank-login optræder som dig, så banken ser dens fejl som dine.", do: "Læs din banks vilkår, før du giver et AI-værktøj adgang til din bank." }
  - { n: 5, anchor: "moe-expert-streaming", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "180B", number_label: "parametre, der kører på en bærbar med 32 GB hukommelse", topic: local, why: "Store modeller kan køre på din egen bærbare, hvor dine data bliver hos dig.", tiles: [{ n: "13,9", t: "tokens pr. sekund, hurtigt nok til at læse med" }] }
  - { n: 6, anchor: "resolution-hypothesis", signal: worth, tracks: [build, general], min: 1, source: official, number: "10 millioner", number_label: "AI-kald for at teste, om agenter, der forbedrer sig selv, faktisk bliver bedre", topic: research, why: "Påstande om, at en agent forbedrer sig selv, kan være held, hvis testen ikke kan skelne bedre fra dårligere." }
---

### 1. Googles nye Gemini 4 Neon er en mellemdyr model til kodeagenter {#gemini-4-neon}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">2 min</span></p>
<div class="number"><b>3 $</b><span>pr. million input-tokens, mellem Googles billigmodel og topmodel</span></div>

<p class="short"><span>Kort fortalt</span>Google har lanceret Gemini 4 Neon, en model mellem topmodellen Carbon og billigmodellen Hydrogen. Den er allerede i GitHub Copilot, og Google siger, at den løser en opgave billigere end Carbon.</p>

#### <span>1 af 2</span> En mellemmodel til lange opgaver
En AI-agent, der skriver kode, arbejder i minutter eller timer. Den læser de samme filer igen og igen, så prisen løber hurtigt op.

Neon er Googles svar. Den koster 3 $ pr. million input-tokens, de små stykker tekst, en model læser. Gentaget tekst, som modellen har set før, koster kun 0,15 $, en rabat på 95 %, siger Google. Den rabat kaldes caching (se Forklaret nedenfor). På en bred, uafhængig test koster en opgave 32 % mindre med Neon end med Carbon, siger Google.

Den findes i Googles API og for betalende brugere af Gemini-appen. Samme dag lagde GitHub den ind i Copilots betalte planer.

Fangsten: Google har selv valgt, hvilke resultater der vises. På den samlede rangliste fra Artificial Analysis er Neon nummer tre, efter større og langsommere modeller.

#### <span>2 af 2</span> En agent, der bliver ved med at forbedre din app
Google Labs viste også Stitch Loop, et eksperiment til software, der allerede er i drift. Den læser din kode, dine logs og brugernes feedback, foreslår en rettelse, bygger den og åbner en pull request på GitHub. Intet bliver merget, før et menneske har set det igennem. Indtil videre er der kun en venteliste.

<div class="why"><b>Derfor er det vigtigt</b><p>Det meste agentarbejde er ikke verdens sværeste problem. Det er langt, gentaget arbejde, som en tømrers dag med at måle og skære. En god mellemmodel er som et solidt værktøj til en fair pris: Det dyre gemmer du til de få opgaver, der kræver det.</p></div>

<p class="todo"><b>Prøv det:</b> Betaler du for Gemini 4 Carbon, så kør samme opgave på Neon, og sammenlign prisen.</p>

Kilder: [blog.google (Neon)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot) · <span class="tag tag-official">Officiel</span> · [blog.google (Stitch Loop)](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. AI hjalp med at finde kritiske huller i NGINX og Ruby, og rettelserne er ude {#nginx-ruby-ai-bugs}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>225 millioner</b><span>hjemmesider kører på NGINX, hvor AI fandt et kritisk hul</span></div>

<p class="short"><span>Kort fortalt</span>Sikkerhedsforskere brugte AI til at finde alvorlige huller i NGINX, en webserver bag en stor del af nettets hjemmesider, og i programmeringssproget Ruby. Begge har rettelser, så opdatér nu.</p>

NGINX er programmet, der sender websider til din browser på mere end 225 millioner hjemmesider. Sikkerhedsfirmaet Wiz siger, at dets AI-scanner fandt to kritiske huller i koden til HTTP/2, en nyere måde at hente sider hurtigere på. Bagefter brugte Wiz Gemini og ChatGPT til at vurdere, hvor alvorlige de var.

Det ene hul virker i den almindelige opsætning og har været der siden 2015. En angriber kan køre sin egen kode på serveren. Wiz holder sin angrebskode hemmelig indtil videre.

Samme dag lukkede Ruby syv huller i den måde, sproget håndterer tekstmønstre på. Fire af dem blev fundet af en forsker fra Ada Logics sammen med Anthropic, firmaet bag Claude. Nogle af dem kan lade en angriber køre kode, hvis en app lader brugerne skrive deres egne søgemønstre.

<div class="why"><b>Derfor er det vigtigt</b><p>Fejl, der har gemt sig i ti år, er ikke lette at finde. De gemte sig, fordi folk kun havde tid til at se på så meget kode. AI er som en lygte, der aldrig bliver træt, så gamle huller dukker nu op på uger. Det er godt for forsvarerne, men kun hvis opdateringerne kommer hurtigt.</p></div>

<p class="todo"><b>Gør dette:</b> Opdatér NGINX til 1.30.7 eller 1.31.9 og Ruby til 4.0.10, 3.4.13 eller 3.3.14. Ruby 3.2 og ældre får ingen rettelse. Kan du ikke opdatere NGINX endnu, foreslår Wiz at slå HTTP/2 fra indtil videre.</p>

Kilder: [wiz.io](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) · <span class="tag tag-official">Officiel</span> · [ruby-lang.org](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Anthropic sætter prisen på sin aktie til 83 $, over sit eget spænd {#anthropic-ipo-83}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>83 $</b><span>pr. aktie, over det spænd på 70 til 78 $, Anthropic først satte</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic, firmaet bag Claude, har solgt sine aktier for 83 $ stykket, mere end det spænd, firmaet satte i sidste uge. Handlen starter i dag på Nasdaq under navnet ANT.</p>

I sidste uge skrev vi, at Anthropic ville sælge sine aktier for 70 til 78 $. Nu er den endelige pris sat, og den er højere.

Anthropic sælger også flere aktier end planlagt: 980 millioner i alt, de fleste nye. Til den pris er firmaet værd omkring 1,5 billioner $, skriver TechCrunch. Chip- og cloudfirmaer som Nvidia og Microsoft køber også aktier ved siden af, skriver TechCrunch.

En note fra os: 7am AI skrives med Claude, så vi giver ikke Anthropic mere plads end andre firmaer.

Fangsten: En høj startpris siger, hvad købere betalte i dag, ikke hvad aktierne er værd om et år.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu har nogle få store investorer bestemt, hvad et AI-firma var værd. Fra i dag ændrer den pris sig hver dag, i fuld offentlighed. En stærk kurs gør det lettere at betale for chips og strøm, og en faldende gør det sværere.</p></div>

Kilder: [anthropic.com](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Store amerikanske banker: Du bærer risikoen, hvis din AI-agent bliver hacket {#banks-ai-agent-liability}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Citi og PNC har ændret deres vilkår, så kunderne selv står til ansvar for, hvad en ekstern AI-agent gør på deres konto. Det gælder også, hvis agenten bliver hacket.</p>

AI-agenter, der betaler regninger for dig, er på vej. Men hvem betaler, hvis noget går galt?

Amerikanske banker er begyndt at svare, og svaret er dig. Citi ændrede sine onlinevilkår i denne uge, og PNC ændrede sine vilkår onsdag, skriver TechCrunch. JPMorgan og Bank of America gjorde noget lignende sidste måned. Lækker en agent dit login eller bliver hacket, står du til ansvar for, hvad hackerne gør, står der i Citis vilkår.

Der er en undtagelse. Agenter, som Citi selv tilbyder, giver dig ikke den risiko, står der i vilkårene.

Fangsten: Indtil videre handler det kun om amerikanske banker, og artiklen nævner ikke europæiske banker.

<div class="why"><b>Derfor er det vigtigt</b><p>At give en agent dit bank-login er som at give en fremmed dit kort og din pinkode. Banken kan ikke se forskel på agenten og dig, så den ser agentens fejl som dine.</p></div>

<p class="todo"><b>Gør dette:</b> Læs din banks vilkår, før du giver et AI-værktøj adgang til din bank.</p>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### En model på 180B kører på en bærbar med 32 GB ved at læse dele fra disken {#moe-expert-streaming}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>180B</b><span>parametre, der kører på en bærbar med 32 GB hukommelse</span></div>

<p class="short"><span>Kort fortalt</span>En udvikler har ifølge Hugging Faces blog kørt en model på 180B på en MacBook med 32 GB hukommelse. Tricket er at lade det meste af modellen blive på disken og kun læse de dele, den skal bruge.</p>

Store modeller kræver som regel mere hukommelse, end en bærbar har. Men nogle er bygget af mange små eksperter, og kun få af dem arbejder på hvert ord (se Forklaret nedenfor).

Det udnyttede Tarek Ziadé ved at gøre eksperterne mindre og lade dem blive på disken. Når modellen skal bruge en ekspert, henter den den fra disken, og den gætter på forhånd, hvilke der kommer næste gang. Modellen brugte cirka 18 GiB hukommelse efter opstart. Den skrev 13,9 tokens pr. sekund, hurtigt nok til at læse med.

Fangsten: Det er én persons test, og koden er endnu ikke en del af Transformers. Det tog omkring 5 timer at omdanne modellen.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et bibliotek, der har de fleste bøger i kælderen og henter de få, du beder om. Du behøver ikke en større bygning, bare en hurtig trappe. Så kan store modeller køre på din egen bærbare, hvor dine data bliver hos dig.</p></div>

Kilde: [huggingface.co](https://huggingface.co/blog/moe-expert-streaming) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter, der forbedrer sig selv, kan ofte ikke skelne bedre fra dårligere {#resolution-hypothesis}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>10 millioner</b><span>AI-kald for at teste, om agenter, der forbedrer sig selv, faktisk bliver bedre</span></div>

<p class="short"><span>Kort fortalt</span>Forskere har testet syv metoder, der lader AI-agenter forbedre deres egne prompts og færdigheder. Agenterne fandt gode ændringer, men deres test valgte de gode ikke bedre end tilfældigt.</p>

Mange værktøjer lover agenter, der bliver bedre af sig selv: Agenten skriver nye udgaver af sine instruktioner, tester dem og beholder den bedste.

Yuanhao Zeng og kolleger undersøgte, om det virker. De kørte syv af den slags metoder på seks modeller, med mere end 10 millioner AI-kald i alt. Nyttige ændringer dukkede op. Men testene var så upræcise, at valget af vinderen var tæt på tilfældigt. De typiske forskelle på nogle få point mellem metoderne var mindre end forskellen mellem to kørsler af samme metode.

Fangsten: Artiklen er endnu ikke fagfællebedømt.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en træner, der vælger spillere ud fra én rodet træningskamp: Holdet kan blive dårligere af rent uheld. Før du stoler på, at en agent har forbedret sig selv, så spørg, hvordan testen blev kørt. Og spørg, om den blev kørt mere end én gang.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.23068) · <span class="tag tag-official">Officiel</span>
{: .sources}
