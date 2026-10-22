---
title: "AI hjalp med at finde to alvorlige huller i PHP, og rettelsen er ude"
summary: "PHP, som de fleste hjemmesider kører på, har lukket to alvorlige huller, som AI-modeller hjalp med at finde. Desuden: angribere jagter AI-nøgler, en ny version af Claudes API og Europas mangel på regnekraft."
date: 2026-10-22 07:00:00 +0200
reviewed: false
checked: false
minutes: 7
explained: { main: "coordinated-disclosure", from: 1, more: ["mixture-of-experts", "open-weight"] }
today:
  - { t: "PHP har lukket to alvorlige huller, der lod angribere overtage servere, og AI-modeller hjalp med at finde dem.", why: "Alle med en WordPress-, Drupal- eller anden PHP-side." }
  - { t: "En forgiftet LiteLLM-opdatering stjal nøgler, og Railway siger, at kunders hemmeligheder kan være læst.", why: "Udviklere, der gemmer AI-nøgler på servere eller platforme." }
  - { t: "Claudes API har fået sin første nye version siden 2023, og de nye SDK'er bruger den som standard.", why: "Udviklere, der bygger på Claude." }
  - { t: "Europa har omkring 5 procent af verdens AI-regnekraft, og Mistral vil frigive vægtene til Large 4 i denne måned.", why: "Europæiske virksomheder, der vil have AI på egne servere." }
other_lang_url: /2026/10/22/
items:
  - { n: 1, anchor: "php2shell", signal: big, tracks: [general, build], min: 1.5, source: official, number: "70 %", number_label: "af alle hjemmesider kører på PHP, ifølge Wiz" }
  - { n: 2, anchor: "ai-key-attacks", signal: big, tracks: [build], min: 1.5, source: official }
  - { n: 3, anchor: "claude-api-2026-10-21", signal: worth, tracks: [build], min: 1.5, source: official }
  - { n: 4, anchor: "europe-compute", signal: worth, tracks: [europe], min: 1.5, source: official }
  - { n: 5, anchor: "recursive-flint", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 6, anchor: "cache-engineering", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. AI hjalp med at finde to alvorlige huller i PHP, og rettelsen er ude {#php2shell}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>70 %</b><span>af alle hjemmesider kører på PHP, ifølge Wiz</span></div>

<p class="short"><span>Kort fortalt</span>PHP, sproget bag de fleste hjemmesider, lukkede to alvorlige sikkerhedshuller den 21. oktober. AI-modeller hjalp med at finde dem, så opdatér nu.</p>

WordPress, Drupal og Joomla kører på PHP, og dermed en stor del af nettet. Et hul i selve PHP er derfor et hul i millioner af sider på én gang.

Den 21. oktober udsendte PHP rettelser til to fejl, der lod en angriber køre sin egen kode på en server uden at logge ind. De får 9,2 ud af 10 for alvor. Sikkerhedsfirmaet Wiz siger, at næsten alle PHP-versioner helt tilbage til 5.4 er ramt.

AI stod for meget af arbejdet. Calif fandt en af fejlene med OpenAIs GPT-5.6 Sol som del af OpenAIs program Patch the Planet. Wiz brugte Gemini 4 Argon og GPT-5.6 Sol og viste angreb, der virkede mod WordPress, Drupal og Joomla.

Udgivelsen gik ikke som planlagt. Fejlenes ID-numre slap ud på nettet, og Calif kom ved en fejl til at lægge en video af et virkende angreb ud. Derfor rykkede PHP udgivelsen en dag frem. Den amerikanske efterretningstjeneste NSA rådede til at lukke sider, der ikke kan opdateres. Der var ikke meldt om angreb, da rettelserne kom.

<div class="why"><b>Derfor er det vigtigt</b><p>Før var det langsomt og svært at tilpasse et angreb til hver PHP-version. "Med AI er det ikke længere en barriere," skriver Wiz. AI er som en låsesmed, der arbejder for begge sider, så tiden fra rettelse til første angreb bliver kortere.</p></div>

<p class="todo"><b>Gør dette:</b> Opdatér PHP til 8.5.12, 8.4.27, 8.3.36 eller 8.2.35. Kører et webhotel din side, så tjek, at det er sket.</p>

Kilde: [thephp.foundation](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) · <span class="tag tag-official">Officiel</span> · [wiz.io](https://www.wiz.io/blog/php2shell-php-rce) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Angribere går efter de nøgler, der betaler for AI {#ai-key-attacks}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>En forgiftet opdatering af LiteLLM, et populært AI-værktøj, stjal adgangskoder og nøgler. Hostingplatformen Railway siger, at angribere også kan have læst kundernes hemmeligheder.</p>

En API-nøgle til AI virker som et firmakreditkort. Den, der har den, kan løbe en regning op eller komme ind til dine data. To angreb den 21. oktober gik efter netop de nøgler.

#### <span>1 af 2</span> En forgiftet LiteLLM-opdatering
LiteLLM sidder mellem apps og AI-modeller, så det har ofte nøglerne til mange AI-udbydere. Den 21. oktober dukkede version 1.107.0 op på PyPI, Pythons pakkebutik, med skjult kode. Den kørte, hver gang Python startede, også hvis LiteLLM aldrig blev brugt. Den samlede SSH-nøgler, adgangskoder til clouden og de AI-nøgler, der lå i LiteLLMs database. PyPI fjernede versionen omkring to timer senere.

#### <span>2 af 2</span> Railways kundehemmeligheder kan være ude
Railway, en platform til at hoste apps, siger, at nogen kan have læst de indstillinger, hvor kunderne gemmer deres hemmeligheder. For nogle fik angriberen indholdet i klar tekst, fx API-nøgler og adgangskoder til databaser. Railway mener, det er del af "en række angreb" rettet mod AI-udbydere. Firmaet har sat alle udrulninger på pause og advaret udbyderne. Railway kobler ikke sit brud til LiteLLM.

<div class="why"><b>Derfor er det vigtigt</b><p>En stjålet AI-nøgle betaler sig med det samme, fordi ejeren betaler for hvert kald. Wiz så angribere afprøve stjålne adgangsoplysninger omkring 4,5 timer efter tyveriet. Tiden til at skifte en nøgle er derfor nu, ikke når regningen kommer.</p></div>

<p class="todo"><b>Gør dette:</b> Har du installeret LiteLLM 1.107.0 eller bruger du Railway, så skift alle nøgler, som maskinen eller projektet kunne nå. Lås LiteLLM til 1.106.2.</p>

Kilde: [safedep.io](https://safedep.io/litellm-pypi-compromise-credential-stealer-backdoor/) · <span class="tag tag-reported">Rapporteret</span> · [wiz.io](https://www.wiz.io/blog/litellm-compromised-steals-credentials) · <span class="tag tag-reported">Rapporteret</span> · [blog.railway.com](https://blog.railway.com/p/security-disclosure-wednesday-october-21st) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Claudes første nye API-version siden 2023 fjerner nogle gamle indstillinger {#claude-api-2026-10-21}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Claudes API har fået en ny version, og de nye SDK'er bruger den som standard. Opgraderingen kan få kode til at fejle, hvis den sætter temperature eller kører bag en proxy.</p>

Hvert kald til Claudes API har en versionsdato. Indtil nu var den 2023-06-01. Den 21. oktober udsendte Anthropic version 2026-10-21. Nye hovedversioner af SDK'erne, fx Python 2.0.0 og TypeScript 1.0.0, sender den automatisk.

To ændringer kan bide. For det første giver temperature, top_p eller top_k nu en fejl, selv med standardværdien. De indstillinger styrer, hvor tilfældige svarene er. På ældre modeller som Claude Sonnet 4.6 mister kode, der sænkede temperature for at få mere stabile svar, den effekt. For det andet sender SDK'erne nu din nøgle i Authorization-headeren i stedet for X-Api-Key. En proxy, der læser den gamle header, holder op med at virke.

Intet ændrer sig, før du opgraderer, og et kald kan blive på den gamle version.

<div class="why"><b>Derfor er det vigtigt</b><p>Claude 4.7 og nyere modeller ser allerede bort fra de indstillinger. Den nye version er derfor som en bilproducent, der fjerner en knap, som ikke længere styrer noget. Gammel kode, der stadig drejer på den, får nu en tydelig fejl.</p></div>

<p class="todo"><b>Gør dette:</b> Søg din kode igennem for temperature, top_p og top_k, før du opgraderer SDK'en, og tjek alle gateways, der læser X-Api-Key.</p>

Kilde: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Officiel</span> · [platform.claude.com](https://platform.claude.com/docs/en/api/migration-2026-10-21) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Europa har lidt AI-regnekraft, og Mistrals største model bliver snart åben {#europe-compute}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Europa har omkring 5 procent af verdens AI-regnekraft, skriver AP. Mistral vil frigive vægtene til sin kæmpemodel Large 4 i slutningen af oktober.</p>

Man skal bruge regnekraft for at træne og køre AI, og det meste af den står i USA. Det prægede NVIDIAs konference i Berlin den 21. oktober.

#### <span>1 af 2</span> NVIDIA i Berlin
Europa har omkring 5 procent af verdens AI-regnekraft mod 75 procent i USA, skriver nyhedsbureauet AP. NVIDIAs topchef Jensen Huang sagde, at firmaet har investeret 10 milliarder dollar i europæiske startups og partnere det seneste år.

#### <span>2 af 2</span> Mistral Large 4 er trænet i Europa
Det franske AI-firma Mistral siger, at det trænede Mistral Large 4 på 3.800 NVIDIA-chips i sine egne europæiske datacentre. Modellen har omkring 1 billion parametre, og 49 milliarder af dem arbejder på hvert ord. Den er i offentlig preview nu, og Mistral vil frigive vægtene i slutningen af oktober. Licensen er ikke oplyst endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Vægte, man kan hente, er som at eje opskriften i stedet for at bestille takeaway. En europæisk virksomhed kan køre modellen på sine egne servere, så dens data aldrig skal over i en amerikansk cloud.</p></div>

Kilde: [abcnews.com (AP)](https://abcnews.com/Technology/wireStory/nvidia-ceo-encourages-europes-lagging-ai-sector-offers-137443738) · <span class="tag tag-reported">Rapporteret</span> · [mistral.ai](https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Flint er en gratis kodemodel, der er lavet til at køre på din egen computer {#recursive-flint}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Startuppen Recursive har udgivet Flint, en åben kodemodel til agenter. Den fylder 23 GB i Ollama, og kun en lille del af den arbejder på hvert ord.</p>

Kodeagenter læser og skriver meget, så det løber op, når de kører gennem et betalt API. En model på din egen maskine koster intet pr. opgave, og din kode bliver hos dig.

Flint har omkring 40 milliarder parametre, men kun omkring 2,5 milliarder arbejder på hvert ord, så den er hurtig for sin størrelse. Den har Apache 2.0-licensen, og Ollama kan starte den inde i Claude Code med én kommando.

Recursive melder om 74,2 procent på SWE-bench Verified, en udbredt kodetest. Det er firmaets egne tal, og ingen andre har tjekket dem endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Tænk på et stort firma, hvor kun de rette specialister deltager i hvert møde. Du får en stor models viden til en lille models driftsomkostning. Derfor kan en model i den størrelse køre hurtigt på din egen maskine.</p></div>

<p class="todo"><b>Prøv det:</b> Kør <code>ollama launch claude --model flint</code> for at bruge Flint i Claude Code.</p>

Kilde: [huggingface.co](https://huggingface.co/RecursiveSI/flint) · <span class="tag tag-official">Officiel</span> · [ollama.com](https://ollama.com/library/flint) · <span class="tag tag-official">Officiel</span> · [blogs.nvidia.com](https://blogs.nvidia.com/blog/local-ai-gtc-rtx-dgx-spark-station-sync/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Agenter bliver billigere, når de rydder i hukommelsen i stedet for at omskrive den {#cache-engineering}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Forskere lod AI-agenter slette gammelt værktøjsoutput direkte fra modellens arbejdshukommelse. Det skar 27,7 procent af prisen og gav lidt højere score end at opsummere.</p>

En model gemmer det, den allerede har læst, i en cache, så den ikke skal læse det igen. Men når en agent omskriver sin historik for at gøre den kortere, passer cachen ikke længere. Så skal modellen læse det hele igen, og det betaler du for.

Tianyu Fu og kolleger prøvede en anden vej. De lod agenten fjerne dele af cachen direkte, fx gamle svar fra værktøjer, og beholde resten, som det er. En tilhørende serveringsmotor, AKV, klarer det bag et almindeligt API.

Sammenlignet med at opsummere, når historikken bliver lang, skar det 27,7 procent af den gennemsnitlige pris at fjerne gamle værktøjssvar. Scoren i testene steg med 1,7 point. Det kræver forskernes egen serveringsmotor, så det er forskning indtil videre.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at rydde gamle papirer af skrivebordet i stedet for at skrive dem alle af i et kort resumé. Du bevarer overblikket og mister kun det, du ikke længere skal bruge.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.28577) · <span class="tag tag-official">Officiel</span>
{: .sources}
