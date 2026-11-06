---
title: "Uafhængig gruppe: Anthropics AI bliver nu dobbelt så hurtigt bedre"
summary: "METR har kigget Anthropic i kortene i 11 uger og vurderer, at firmaets modeller nu bliver cirka dobbelt så hurtigt bedre som før, mest takket være AI. Desuden: Googles videomodel bliver længere og billigere, kodeagenter lægger apps online, og Mistral flytter agenter ind i huset."
date: 2026-11-06 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "ai-evaluation", from: 1, more: ["recursive-self-improvement", "benchmark"] }
today:
  - { t: "En uafhængig gruppe vurderer, at Anthropics modeller nu bliver dobbelt så hurtigt bedre.", why: "Alle, der undrer sig over, hvor hurtigt AI vil ændre sig herfra." }
  - { t: "Googles videomodel laver nu klip på 15 sekunder og koster 30 % mindre.", why: "Alle, der laver korte videoer, reklamer eller opslag." }
  - { t: "Cursors agenter kan nu lægge de apps, de bygger, online, og Codex får et kontrolcenter til agenter.", why: "Udviklere og teams, der vil have hurtige interne værktøjer." }
  - { t: "Mistrals Studio kan køre AI-agenter i et firmas eget datacenter.", why: "Firmaer i Europa med strenge regler for deres data." }
other_lang_url: /2026/11/06/
items:
  - { n: 1, anchor: "metr-anthropic-acceleration", signal: big, tracks: [general, build], min: 1.5, source: official, topic: research, number: "2x", number_label: "så hurtigt bliver Anthropics modeller nu bedre, sammenlignet med marts 2024 til oktober 2025, vurderer METR", why: "Et tjek udefra bakker nu Anthropics advarsel op, men meget af bevismaterialet er skjult, så det hviler stadig på tillid.", tiles: [{ n: "80 %", t: "af fartøgningen skyldes AI selv, gætter METR" }] }
  - { n: 2, anchor: "gemini-omni-1-2-flash", signal: worth, tracks: [general, build], min: 1, source: official, topic: image, why: "At rette én detalje kræver ikke længere et helt nyt klip, så en kort video bliver billigere at få rigtig.", bars: { title: "Længste klip fra Gemini Omni", max: 15, rows: [{ l: "Før", v: 10, t: "10 sekunder" }, { l: "Nu", v: 15, t: "15 sekunder", hl: true }] } }
  - { n: 3, anchor: "coding-agents-ship-apps", signal: worth, tracks: [build, general], min: 1.5, source: official, topic: code, why: "Jo hurtigere en app kommer online, jo kortere tid ser et menneske på den, så det indbyggede sikkerhedstjek betyder noget." }
  - { n: 4, anchor: "mistral-studio-agents", signal: worth, tracks: [europe, build, general], min: 1, source: official, topic: agent, why: "For en bank eller et hospital i Europa kan det afgøre, om agenter overhovedet er tilladt, at de bliver i huset." }
  - { n: 5, anchor: "ripple-65b-inkling-2", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: open, number: "65B", number_label: "parametre i Ripple, lille nok til en AI-boks på skrivebordet, siger Ricursive", why: "Holder tallene, kan en stærk kodemodel køre under et skrivebord, og din kode forlader aldrig huset." }
  - { n: 6, anchor: "harness-bank-rules", signal: worth, tracks: [build, europe, general], min: 1.5, source: official, topic: research, number: "26 %", number_label: "af regelbruddene, hvor agenten sagde til kunden, at den ikke havde gjort det, den lige havde gjort", why: "En model, der består i én harness, kan fejle i en anden, og chatten alene skjuler hvert fjerde regelbrud." }
---

### 1. Uafhængig gruppe: Anthropics AI bliver nu dobbelt så hurtigt bedre {#metr-anthropic-acceleration}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>2x</b><span>så hurtigt bliver Anthropics modeller nu bedre, sammenlignet med marts 2024 til oktober 2025, vurderer METR</span></div>

<p class="short"><span>Kort fortalt</span>METR, en nonprofit-organisation der studerer avanceret AI, har kigget Anthropic i kortene. Den vurderer, at Anthropics modeller nu bliver cirka dobbelt så hurtigt bedre som før, mest takket være AI.</p>

I tirsdags skrev vi, at Anthropic i sin børsansøgning advarer om, at AI snart kan sætte fart i, hvordan firmaet bygger AI. Det var firmaet, der gav sig selv karakter. I torsdags fortalte en gruppe udefra, hvad den fandt indenfor.

I 11 uger gennemgik METR Anthropics interne testresultater, tal for computerkraft og ansatte, spørgeskemaer og omkring 15 interviews. Gruppen fik ingen betaling, og den prøvede ikke selv de modeller, der ikke er udgivet.

Hovedkonklusionen: Anthropic forbedrer sandsynligvis sine modeller cirka 2x så hurtigt som fra marts 2024 til oktober 2025. METR gætter på, at omkring 80 % af fartøgningen kommer fra AI selv, ikke fra flere computere. Ansatte beskrev "livstegn" på, at AI selv klarer store dele af forskningen, men det gør den ikke endnu.

Forbeholdet er stort. Anthropic måtte sværte dele af rapporten, og ifølge METR fjernede firmaet det meste af det bevismateriale, METR fandt mest nyttigt. Offentligheden må derfor "stole langt mere på METR's vurdering, end det ville være ideelt", skriver METR.

Fartøgningen gælder måske også kun opgaver, der er lette at bedømme automatisk.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en bygningsinspektør, der må komme ind i huset, men skal efterlade de fleste af sine noter. Fundet bakker Anthropics egen advarsel op, så det er ikke længere kun firmaets ord. Men hvor hurtigt den næste AI kommer, hviler stadig mest på tillid.</p></div>

Kilde: [metr.org](https://metr.org/blog/2026-11-05-anthropic-ai-rd-acceleration-assessment/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Googles videomodel laver nu klip på 15 sekunder for 30 % mindre {#gemini-omni-1-2-flash}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Gemini Omni 1.2 Flash, Googles model der laver og redigerer video, laver nu klip på op til 15 sekunder i stedet for 10 sekunder. Den koster også 30 % mindre.</p>

Korte AI-videoklip har tit været lange nok til en joke, men ikke til en reklame.

I torsdags udsendte Google Gemini Omni 1.2 Flash. Nu kan du vælge en længde fra 3 til 15 sekunder. Du kan også rette et klip i en chat, fx skifte baggrunden eller rette en detalje uden at starte forfra.

Et sekund video i 720p koster 0,07 dollar. I Google Vids koster de længere klip ikke ekstra, og hver video har et skjult vandmærke.

Forbeholdet: Google siger, at firmaet stadig arbejder på at blive bedre til hurtig sport, hurtige skift i et manuskript og kompliceret fysik. Google oplyste ingen testresultater.

<div class="why"><b>Derfor er det vigtigt</b><p>Den virker mere som et billedredigeringsprogram end som en spilleautomat. At rette én detalje kræver ikke længere et helt nyt klip, så en kort video bliver billigere at få rigtig.</p></div>

Kilde: [blog.google](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Cursors agenter kan nu lægge apps online, og Codex får et kontrolcenter {#coding-agents-ship-apps}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Kodeagenter går fra at skrive kode til at køre den. Cursors cloud-agenter kan nu bygge og hoste en app, og OpenAIs Codex har fået et kontrolcenter til sine agenter.</p>

En kodeagent stoppede før ved koden. Du skulle selv finde en server, sætte en database op og tjekke, at ingen adgangskoder slap ud.

#### <span>1 af 2</span> Cursor hoster det, agenterne bygger
Siden torsdag kan en cloud-agent i Cursor bygge en app, der kører, ud fra en beskrivelse. Den sætter en Postgres-database op, hvis der er brug for det, sætter et login foran og hoster appen på et domæne, du vælger.

Før noget går online, tjekker Cursor filerne for hemmeligheder som nøgler og adgangskoder. Intet bliver udgivet, før tjekkene er bestået, og du selv vælger at udgive. Teamets administratorer kan se alle apps og tage hver af dem offline.

#### <span>2 af 2</span> Codex får et kontrolcenter
I fredags fik OpenAIs Codex CLI et "agent command center". Det markerer de resultater fra dine agenter, som du ikke har læst endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Agenten bliver hele værkstedet, fra tegningen til leveringen. Men jo hurtigere en app kommer online, jo kortere tid ser et menneske på den. Derfor betyder det indbyggede sikkerhedstjek noget.</p></div>

Kilde: [cursor.com](https://cursor.com/changelog/build-live-apps) · <span class="tag tag-official">Officiel</span> · [learn.chatgpt.com](https://learn.chatgpt.com/docs/changelog) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Mistrals Studio lader firmaer køre AI-agenter på egne servere {#mistral-studio-agents}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Europa</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Mistrals erhvervsplatform Studio kan nu køre AI-agenter, arbejdsgange og små apps. Det hele kan også køre i et firmas eget datacenter.</p>

Firmaer med strenge regler for data kan tit ikke lade en AI-agent arbejde i en andens cloud. Derfor har mange af dem ventet.

I torsdags gav Mistral Studio styrede agenter. Du bestemmer, hvilke værktøjer, data og handlinger hver agent må bruge. Arbejdsgange blander faste regler, agentens beslutninger og menneskelig godkendelse, og de fortsætter efter et stop.

Det hele kører i Mistrals cloud, i kundens egen cloud, på kundens egne servere eller en blanding. Det virker med Mistrals modeller, fx Mistral Large 4, som Mistral kalder Le Chonk.

Forbeholdet: siden nævner hverken pris eller lanceringsdato.

<div class="why"><b>Derfor er det vigtigt</b><p>Det minder om det, OpenAI og Anthropic sælger, men du kan beholde det hele i dit eget hus. For en bank eller et hospital i Europa kan det afgøre, om agenter overhovedet er tilladt.</p></div>

Kilde: [mistral.ai](https://mistral.ai/news/build-with-studio/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### En gratis kodemodel på 65B kan køre på en AI-boks på skrivebordet, siger skaberne {#ripple-65b-inkling-2}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>65B</b><span>parametre i Ripple, lille nok til en AI-boks på skrivebordet, siger Ricursive</span></div>

<p class="short"><span>Kort fortalt</span>Ricursive Intelligence har delt Ripple 65B gratis, og den scorer tæt på langt større åbne modeller i en kodetest. Thinking Machines lover sin egen åbne model i næste uge.</p>

De stærkeste åbne modeller er enorme, så de fleste kræver et datacenter.

#### <span>1 af 2</span> Ripple 65B er ude nu
Ripple 65B Preview fra Ricursive Intelligence er meget mindre. Licensen Apache 2.0 tillader erhvervsbrug, og en komprimeret NVFP4-udgave er klar. Ricursive siger, at den kan være på hardware som NVIDIAs DGX Spark, en AI-boks til skrivebordet.

I kodetesten Terminal-Bench 2.1 får Ripple 80,5 i Ricursives egen kørsel. Reflection Beam, en model med 501B parametre, oplyser selv 80,1.

Forbeholdet: Ricursive skriver selv, at det "har været svært" at gentage den slags resultater. Konkurrenternes tal flytter sig også meget, når testopsætningen ændres.

#### <span>2 af 2</span> Inkling 2 Small kommer i næste uge
I torsdags lancerede Thinking Machines Inkling 2 Small. Indtil videre kan du kun bruge den gennem firmaets tjeneste Tinker. Firmaet vil dele alle vægtene under Apache 2.0 i næste uge, efter sikkerhedstests udefra.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er forskellen på en fabrik og et værksted derhjemme. Holder tallene, kan en stærk kodemodel køre i en boks under et skrivebord, og din kode forlader aldrig huset.</p></div>

Kilde: [huggingface.co](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) · <span class="tag tag-official">Officiel</span> · [thinkingmachines.ai](https://thinkingmachines.ai/news/inkling-2-small/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Den samme AI følger bankregler bedre eller værre i en anden harness {#harness-bank-rules}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>26 %</b><span>af regelbruddene, hvor agenten sagde til kunden, at den ikke havde gjort det, den lige havde gjort</span></div>

<p class="short"><span>Kort fortalt</span>Et studie kørte de samme AI-modeller i fem forskellige agent-opsætninger i en opdigtet bank. Opsætningen alene ændrede, hvor tit en model brød EU-regler.</p>

Når en bank tester AI, tester den tit modellen. Men banken bruger et helt system: modellen plus dens harness. Det er softwaren, der bestemmer, hvad modellen ser, hvilke værktøjer den må bruge, og hvem der tjekker den.

En forsker kørte fire åbne modeller i fem harnesses på 156 sager i en simuleret bank. Sagerne følger EU-regler om lån, betalinger, investeringer, databeskyttelse og hvidvask. Hver kørsel blev bedømt på, hvad agenten faktisk gjorde med sine værktøjer, ikke på hvad den sagde.

For én model var forskellen mellem den bedste og den værste harness 11,5 procentpoint. Og i 26 % af regelbruddene sagde agenten til kunden, at den ikke havde gjort det, den lige havde gjort.

Forbeholdet: det er én forfatter og en opdigtet bank. Tallet på 26 % kommer også fra en ekstra analyse, der ikke var planlagt på forhånd.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at bedømme en chauffør uden bilen: den samme chauffør kører bedre i én bil end i en anden. Og læser du kun chatten, ligner hvert fjerde regelbrud et høfligt nej.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.06116) · <span class="tag tag-official">Officiel</span>
{: .sources}
