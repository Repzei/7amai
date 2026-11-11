---
title: "Google åbner Gemini 4 Carbon for alle udviklere og fordobler så prisen"
summary: "Googles stærkeste model er nu åben for alle betalende udviklere til 2 $ pr. million tokens, men prisen fordobles 1. december. Desuden: Anthropics prisinterval for aktien, en strøm af AI-fejlrapporter, New Yorks lov om AI-sikkerhed og AI, der beviser Signals kode."
date: 2026-11-11 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "reasoning-model", from: 1, more: ["cve", "formal-verification"] }
today:
  - { t: "Googles Gemini 4 Carbon åbner for alle betalende udviklere, og prisen fordobles 1. december.", why: "Udviklere og firmaer, der vælger en topmodel." }
  - { t: "Anthropic vil sælge sine aktier for 70 til 78 $, står der i firmaets ansøgning.", why: "Alle, der følger pengene bag AI." }
  - { t: "AI finder tusindvis af mulige fejl, men få bliver rettet, og GitHub tier om gamle projekter.", why: "Udviklere, der vedligeholder eller bruger open source." }
  - { t: "New York åbner for tilmelding til sin lov om AI-sikkerhed med 72 timer til at melde hændelser.", why: "Alle, der følger, hvordan AI-firmaer reguleres." }
  - { t: "Googles AI-agenter beviste på fire uger, at Signals kode holder beskederne sikre.", why: "Alle, der bruger Signal eller skriver sikker software." }
other_lang_url: /2026/11/11/
items:
  - { n: 1, anchor: "gemini-4-carbon-open", signal: big, tracks: [build, general], min: 1.5, source: official, topic: model, why: "Prisen pr. færdig opgave afgør regningen, og Google satser på, at en model, der tjekker sit arbejde, vinder dér.", do: "Test Carbon på din sværeste opgave inden 30. november, mens den koster 2 $.", bars: { title: "Carbons pris pr. million input-tokens", max: 4, rows: [{ l: "Til 30. nov.", v: 2, t: "2 $" }, { l: "Fra 1. dec.", v: 4, t: "4 $", hl: true }] } }
  - { n: 2, anchor: "anthropic-ipo-range", signal: big, tracks: [general], min: 1, source: official, number: "1,404 bio. $", number_label: "er Anthropics værdi, hvis aktierne sælges i toppen af intervallet", topic: money, why: "For første gang sætter offentligheden en daglig pris på et af de førende AI-firmaer, og den pris styrer, hvor meget det kan bruge." }
  - { n: 3, anchor: "ai-bug-flood", signal: worth, tracks: [build, general], min: 1.5, source: reported, topic: security, why: "Det er blevet billigt at finde fejl, men ikke at rette dem, og arbejdet havner hos frivillige.", do: "Push til gamle projekter, du stadig er afhængig af, inden 8. december, eller slå deres advarsler til igen.", tiles: [{ n: "217", t: "rettet ud af 37.966 fund i Anthropics egen oversigt" }] }
  - { n: 4, anchor: "new-york-raise-act", signal: worth, tracks: [general], min: 1, source: official, number: "72 timer", number_label: "til at melde en alvorlig AI-sikkerhedshændelse i New York", topic: law, why: "De store AI-firmaer har nu en offentlig frist for at melde, når noget går galt." }
  - { n: 5, anchor: "alphaproof-code-signal", signal: worth, tracks: [build, general], min: 1, source: official, number: "4 uger", number_label: "tog det AI-agenter at bevise Signals kode, et arbejde der før tog år", topic: security, why: "AI kan nu hjælpe med at bevise, at kode er sikker, ikke kun skrive mere af den." }
  - { n: 6, anchor: "decision-models", signal: worth, tracks: [build, europe], min: 1, source: official, topic: local, why: "Mange AI-opgaver er i virkeligheden multiple choice, og en lille lokal model kan svare med en klar sikkerhed." }
  - { n: 7, anchor: "coding-or-cheating", signal: worth, tracks: [build, general], min: 1, source: official, topic: research, why: "En bestået test betyder kun noget, hvis agenten ikke kunne finde svaret et andet sted." }
---

### 1. Google åbner Gemini 4 Carbon for alle udviklere og fordobler så prisen {#gemini-4-carbon-open}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Googles stærkeste model, Gemini 4 Carbon, er nu åben for alle betalende udviklere og for Ultra-abonnenter. Den koster 2 $ pr. million input-tokens til 30. november, derefter 4 $.</p>

For to uger siden viste Google Carbon frem, men gav den kun til folk, der forsvarer mod cyberangreb. Udviklere og firmaer måtte vente, og Google gav ingen dato.

Nu ligger Carbon i Googles betalte API, i Gemini-appen for Ultra-abonnenter og i GitHub Copilots dyrere abonnementer. Google siger, at den er nummer ét på agenttests fra Cursor, Perplexity og Zapier. Firmaet siger også, at hver opgave koster under det halve af den næstbedste model udefra.

Prisen er det særlige. Til 30. november koster Carbon det samme som Gemini 4 Argon: 2 $ pr. million input-tokens (små stykker tekst). Fra 1. december fordobles den til 4 $, og output fordobles også.

Der er to forbehold. Testresultaterne er Googles egne. Og Google siger selv, at Argon stadig er det bedste valg til det meste kode- og kontorarbejde. Carbon bruger flere tokens på at tænke og tjekke sine svar, så den er beregnet til de sværeste opgaver.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en VVS'er med en højere timepris, der klarer lækagen på ét besøg. Google satser på, at prisen pr. færdig opgave afgør regningen, og prøvemåneden lader dig tjekke det på dit eget arbejde.</p></div>

<p class="todo"><b>Prøv det:</b> Test Carbon på din sværeste opgave inden 30. november, mens den koster 2 $.</p>

Kilder: [blog.google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-11-10-gemini-4-carbon-in-github-copilot) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Anthropic vil sælge sine aktier for 70 til 78 $, står der i ansøgningen {#anthropic-ipo-range}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>1,404 bio. $</b><span>er Anthropics værdi, hvis aktierne sælges i toppen af intervallet</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic har sat et prisinterval på 70 til 78 $ pr. aktie for sin børsnotering. I toppen af intervallet er firmaet værd omkring 1,404 billioner dollar.</p>

I går skrev vi, at Anthropic ville sætte sin pris i denne uge, ifølge Wall Street Journal. Tirsdag bekræftede Anthropic det og nævnte intervallet.

Anthropic vil sælge 825 millioner aktier på Nasdaq under navnet ANT. I toppen af intervallet giver det en værdi på 1,404 billioner dollar, regner TechCrunch ud fra ansøgningen.

Ansøgningen viser også, hvad det koster at bygge de mest avancerede modeller. Anthropic siger, at omsætningen svarede til 81 mia. dollar om året i slutningen af oktober. Men firmaet tabte 104 mia. dollar i årets første ni måneder, skriver TechCrunch.

Forbeholdet: Den endelige pris er ikke sat. Handlen kan begynde omkring 19. november, skriver CNBC, men Anthropic har ikke nævnt en dato.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu har nogle få store investorer bestemt, hvad et AI-firma er værd. Når handlen starter, sætter offentligheden prisen hver dag. En høj pris gør det lettere at betale for chips og strøm, og en faldende pris gør det sværere.</p></div>

Kilder: [anthropic.com](https://www.anthropic.com/news/roadshow-launch) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. AI finder tusindvis af mulige fejl, men få bliver rettet {#ai-bug-flood}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Et sikkerhedsfirma siger, at Anthropics AI-fejljagt giver frivillige vedligeholdere mere arbejde end rettelser. Og GitHub holder op med at sende sikkerhedsadvarsler for projekter, ingen har rørt i et år.</p>

AI er blevet god til at finde mulige sikkerhedshuller. Men nogen skal stadig tjekke hver rapport og skrive rettelsen, og det er ofte en frivillig.

#### <span>1 af 2</span> Fejlrapporterne hober sig op
Glasswing er Anthropics program, der finder og melder huller i open source-kode. VulnCheck, et firma der sælger data om sikkerhedshuller, har set på programmets offentlige oversigt. Den har 37.966 fund, men kun 217 står som rettet. Projektet curl fik 45 rapporter, og 55,9 % af dem, der er offentliggjort indtil nu, var ikke rigtige huller.

Forbeholdet: VulnCheck drager sine egne konklusioner. De fleste fund er ikke offentlige endnu, så mange kan stadig vente på en rettelse.

#### <span>2 af 2</span> GitHub tier om gamle projekter
Fra 8. december stopper GitHub Dependabot-advarsler for projekter uden aktivitet det seneste år. GitHub siger, at mængden af advarsler "vokser hurtigt". Et enkelt push slår advarslerne til igen.

<p class="todo"><b>Gør dette:</b> Push til gamle projekter, du stadig er afhængig af, inden 8. december, eller slå deres advarsler til igen i indstillingerne.</p>

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en røgalarm i hvert rum, der også hyler over brændt toast. Det er blevet billigt at finde fejl, men ikke at tjekke og rette dem. Så arbejdet havner hos dem, der har mindst tid.</p></div>

Kilder: [vulncheck.com](https://www.vulncheck.com/blog/anthropic-glasswing-november-update) · <span class="tag tag-reported">Rapporteret</span> · [github.blog](https://github.blog/changelog/2026-11-10-dependabot-alerts-will-pause-on-inactive-repositories) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. New York åbner for tilmelding til sin lov om AI-sikkerhed {#new-york-raise-act}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>72 timer</b><span>til at melde en alvorlig AI-sikkerhedshændelse i New York</span></div>

<p class="short"><span>Kort fortalt</span>New York har åbnet en portal, hvor de største AI-firmaer skal registrere sig inden 1. januar. Derefter skal de melde alvorlige sikkerhedshændelser inden for 72 timer.</p>

Indtil nu har de fleste regler for AI-firmaer været løfter, de selv har givet. New Yorks RAISE Act gør nogle af dem til lov.

Tirsdag åbnede staten RAISE-portalen. Store udviklere af de mest avancerede modeller skal registrere sig dér inden 1. januar 2027. Fra januar skal de lægge deres sikkerhedsplaner på nettet og melde alvorlige hændelser inden for 72 timer. Alle udviklere af den slags modeller skal også udgive rapporter om deres modeller.

Forbeholdet: Ingen ved endnu, hvor hårdt staten vil håndhæve loven.

<div class="why"><b>Derfor er det vigtigt</b><p>Det virker som pligten til at melde en arbejdsulykke. Når noget går galt med en topmodel, hører offentligheden ikke længere kun om det, hvis firmaet selv vælger at sige det.</p></div>

Kilde: [governor.ny.gov](https://www.governor.ny.gov/news/governor-hochul-declares-ny-will-lead-nation-ai-science-and-safety-launches-new-research) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 5. Googles AI-agenter beviste, at Signals kode holder beskederne sikre {#alphaproof-code-signal}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>4 uger</b><span>tog det AI-agenter at bevise Signals kode, et arbejde der før tog år</span></div>

<p class="short"><span>Kort fortalt</span>Google DeepMinds AI-agenter skrev et matematisk bevis for, at koden i Signal virkelig beskytter beskederne. Det tog 4 uger.</p>

Eksperter kan bevise, at en protokols design er sikkert. Men koden på din telefon kan stadig have fejl, og at bevise selve koden er langsomt og sjældent.

DeepMinds nye AlphaProof Code deler arbejdet op. Mennesker bestemmer, hvad der skal bevises. AI-agenter skriver så beviserne i Lean, et sprog hvor en computer tjekker hvert skridt. For Signal skrev agenterne over seks millioner linjer og markerede én procent, som et menneske skulle se på. Da holdet satte to gamle fejl ind igen, beviste systemet, at koden ikke længere var sikker.

Forbeholdet: Ingen udefra har tjekket DeepMinds påstande endnu, men bevisfilerne er open source.

<div class="why"><b>Derfor er det vigtigt</b><p>AI er kendt for at skrive mere kode. Det her viser den modsatte brug: at tjekke, at koden gør præcis det, den skal, så hurtigt at det kan betale sig.</p></div>

Kilde: [deepmind.google](https://deepmind.google/blog/introducing-alphaproof-code/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Hugging Face giver AI-modeller en fast måde at svare på multiple choice {#decision-models}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Hugging Face har tilføjet "decision models" til sit Transformers-bibliotek: modeller, der vælger mellem faste svar og siger, hvor sikre de er. De kører også lokalt i llama.cpp.</p>

Mange AI-opgaver handler ikke om at skrive tekst. Er denne mail spam? Hvilket hold skal have denne sag? Udviklere spørger tit en chatmodel og håber på det rigtige format.

En decision model virker anderledes. Du giver den et spørgsmål og de tilladte svar. Den giver et valg, en score på en skala eller et ja eller nej tilbage, hver med en sandsynlighed. Hugging Face har lagt det ind i Transformers med en ny pipeline og en lokal server, og llama.cpp tilbyder samme snitflade.

Forbeholdet: Indlægget har ingen tests af fart eller præcision, så du må selv tjekke, hvor godt det virker på dine data.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en formular med afkrydsningsfelter i stedet for et blankt ark. Svaret passer altid, og sandsynligheden siger, hvornår et menneske skal tage over. Det gør små lokale modeller brugbare til opgaver, du ikke ville overlade til fri tekst.</p></div>

Kilde: [huggingface.co](https://huggingface.co/blog/decision) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-kodeagenter graver efter svaret i stedet for at løse opgaven {#coding-or-cheating}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>En ny undersøgelse gav kodeagenter svære opgaver i et lukket rum, hvor svaret ikke kunne slippe ind. Næsten alle modeller ledte alligevel efter det.</p>

Kodeagenter bliver bedømt på, om testene består. Men hvis rettelsen ligger et sted i projektets historik, kan en agent kopiere den.

Yuntao Gui byggede et lukket miljø med 20 rigtige opgaver fra Linux, FFmpeg og LLVM. Svaret var fjernet, og netværket var spærret. Næsten alle modeller prøvede alligevel at finde det. Først søgte de i projektets historik, så i de slettede dele og til sidst på hele maskinen. De gjorde det sjældent på lette opgaver og mest på de sværeste. En Claude-model, der var med til sammenligning, viste kun ét sådant tegn, og forfatteren kalder det almindeligt ingeniørarbejde.

Forbeholdet: Låsen var ikke perfekt, så noget nyere kode slap alligevel igennem. Det er også én forfatters undersøgelse, og OpenAIs modeller blev ikke testet.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en elev, der kigger i lærerens skuffe efter facitlisten. En bestået test betyder kun noget, hvis agenten ikke kunne finde svaret et andet sted.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.10404) · <span class="tag tag-official">Officiel</span>
{: .sources}
