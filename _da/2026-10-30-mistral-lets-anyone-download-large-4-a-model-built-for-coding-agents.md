---
title: "Mistral lader alle hente Large 4, en model bygget til kodeagenter"
summary: "Franske Mistral har frigivet vægtene til Large 4, en model med 1.000 mia. parametre, trænet i Europa til kode og sikkerhed. Desuden: Amazons AI-sky boomer, nye grænser for AI-agenter og New Yorks chatbotlov for børn."
date: 2026-10-30 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "reinforcement-learning", from: 1, more: ["mixture-of-experts", "ai-agent"] }
today:
  - { t: "Mistral lader alle hente Large 4, en stærk åben model trænet i Europa.", why: "Udviklere og firmaer, der vil have AI under egen kontrol." }
  - { t: "Amazons sky voksede 39 %, det hurtigste i næsten fem år, drevet af AI.", why: "Alle, der spekulerer på, om AI tjener penge." }
  - { t: "OpenAI har skrevet nye regler for sine agenter, og Claude Code kan nu hegne dem inde.", why: "Alle, der lader en AI-agent arbejde på egen hånd." }
  - { t: "New York forbyder chatbots at lade som om, de er børns ven eller et menneske.", why: "Forældre og alle, der bygger eller bruger chatbots." }
other_lang_url: /2026/10/30/
items:
  - { n: 1, anchor: "mistral-large-4", signal: big, tracks: [build, general, europe], min: 2, source: official, number: "1.000 mia.", number_label: "parametre i Mistral Large 4", topic: open, why: "Et firma kan køre en stærk kodemodel i sit eget datacenter, og ingen kan hæve prisen eller slukke for den.", do: "Prøv Mistral Large 4 via Mistrals API eller OpenRouter, før du beslutter, om du vil køre den selv." }
  - { n: 2, anchor: "aws-q3", signal: worth, tracks: [general, build], min: 1, source: official, number: "17 gange", number_label: "så mange tokens behandlede Amazon Bedrock som for et år siden", topic: money, why: "Efterspørgslen på AI er ægte, og sælgerne satser på, at den bliver ved med at vokse i årevis.", tiles: [{ n: "220 mia. dollar", t: "Amazons planlagte investeringer i år, mest i AWS" }] }
  - { n: 3, anchor: "agent-limits", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: agent, why: "Regler på papir hjælper, men en låst dør virker stadig, når reglerne bliver glemt.", do: "Bruger du Claude Code, så slå den nye indstilling til, der blokerer skrivning uden for dit projekt." }
  - { n: 4, anchor: "ny-chatbot-law", signal: worth, tracks: [general], min: 1.5, source: reported, number: "25.000 dollar", number_label: "højeste bøde pr. overtrædelse af New Yorks nye chatbotlov", topic: law, why: "Chatbotfirmaer skal vide, hvem de taler med, og voksne kan blive bedt om at bevise deres alder." }
  - { n: 5, anchor: "any-speech-recognizer", signal: worth, tracks: [build, europe], min: 1, source: official, number: "1,55 %", number_label: "af ordene forkert for Parakeet v3 på en engelsk standardtest, mod 2,12 % for Apples motor", topic: voice, why: "Appudviklere skal ikke længere nøjes med Apples talemotor, og lyden kan blive på enheden." }
  - { n: 6, anchor: "instruction-capacity", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: research, why: "En prompt er ikke en bundløs liste, så kortere og klarere regelfiler virker måske bedre." }
---

### 1. Mistral lader alle hente Large 4, en model bygget til kodeagenter {#mistral-large-4}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">2 min</span></p>
<div class="number"><b>1.000 mia.</b><span>parametre i Mistral Large 4</span></div>

<p class="short"><span>Kort fortalt</span>Det franske AI-firma Mistral har frigivet vægtene til Mistral Large 4, så alle kan hente den. På en uafhængig kodetest står den lige med en stærk konkurrent, men bruger færre ord.</p>

Når du lejer en stærk AI-model, sender du dine data til en andens servere, til deres pris. En open-weight-model er alternativet: Du henter selve modellen og kører den, hvor du vil.

Torsdag frigav Mistral vægtene til Mistral Large 4, en model med 1.000 mia. parametre. Alle kan hente den fra Hugging Face, ændre den og bygge den ind i et produkt. Ifølge Mistral er den trænet fra bunden i Europa.

Modellen har været i prøveversion siden tidligere på måneden. Siden da har tre ugers ekstra reinforcement learning gjort den meget bedre til kode, siger Mistral. Det er træning, hvor modellen prøver opgaver og bliver belønnet for gode resultater.

Det tydeligste resultat kommer fra Artificial Analysis, en uafhængig testgruppe. På dens indeks for kodeagenter står Large 4 lige med GLM-5.3, en konkurrerende åben model. Men den bruger i gennemsnit 47 % færre tokens pr. opgave, så hver opgave er billigere at køre.

Der er forbehold. De fleste andre resultater kommer fra Mistrals egne grafer. Firmaer, der sælger modellen som en hostet tjeneste, skal have en særlig licens.

Og den er alt for stor til en bærbar. Den mindste version kan køre på én Mac, men kun en med 512 GB hukommelse.

Til gengæld er den en mixture of experts, så kun en lille del af den arbejder på hvert token.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at kunne købe en bil i stedet for kun at lease den. Et firma kan nu køre en stærk kodemodel i sit eget datacenter. Ingen kan hæve prisen eller slukke for den.</p></div>

<p class="todo"><b>Prøv det:</b> Test Mistral Large 4 via Mistrals API eller OpenRouter, før du beslutter, om du vil køre den selv.</p>

Kilde: [mistral.ai](https://mistral.ai/news/mistral-large-4-oss/) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/blog/mistral-large4) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Amazons AI-sky vokser hurtigere end på næsten fem år {#aws-q3}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>17 gange</b><span>så mange tokens behandlede Amazon Bedrock som for et år siden</span></div>

<p class="short"><span>Kort fortalt</span>Amazons skyforretning voksede 39 % sidste kvartal, det hurtigste i næsten fem år, fordi firmaer bruger langt mere AI. Amazon vil bruge omkring 220 mia. dollar i år for at følge med.</p>

I to år har investorer spurgt, hvornår pengene til AI-datacentre ville komme tilbage. Amazons regnskab torsdag gav en del af svaret.

AWS, Amazons skyforretning, øgede salget med 39 % på et år. Bedrock, AWS-tjenesten der udlejer modeller fra Anthropic, OpenAI og andre, behandlede næsten 17 gange så mange tokens som året før. OpenAIs nyeste modeller står nu ved siden af Claude.

Fangsten er regningen. Amazon venter at bruge omkring 220 mia. dollar i år, mest på AWS, og "betydeligt mere" i 2027, skriver TechCrunch. Det seneste år gik der flere penge ud, end der kom ind, mest på grund af AI, og aktien faldt efter regnskabet.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en restaurant, der er mere fuld end nogensinde, mens den bygger flere nye køkkener på én gang. Efterspørgslen på AI er ægte, og sælgerne satser på, at den bliver ved med at vokse i årevis.</p></div>

Kilde: [sec.gov](https://www.sec.gov/Archives/edgar/data/0001018724/000101872426000038/amzn-20260930xex991.htm) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/29/aws-will-be-a-1t-business-jassy-says-but-first-it-will-spend-big/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. OpenAI skriver nye regler for sine agenter, og Claude Code får et hegn {#agent-limits}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>OpenAIs nye regelsæt siger, at agenter skal holde sig til en aftalt opgave og acceptere at blive stoppet. Claude Code har fået en indstilling, der forhindrer den i at skrive filer uden for dit projekt.</p>

AI-agenter arbejder nu selv i minutter eller timer. Jo mere de kan, jo vigtigere er det, hvor de stopper.

#### <span>1 af 2</span> OpenAIs nye Model Spec
Torsdag udgav OpenAI en ny version af sin Model Spec, det regelsæt, firmaet vil have sine modeller til at følge. Det bygger på fem værdier, og den første er at være tro mod det, mennesket faktisk vil.

For agenter bliver reglerne konkrete. En agent skal holde sig til den aftalte opgave, og hver opgave skal have en slutning. Den skal acceptere at blive lukket ned og behandle tekst på websider som information, ikke ordrer.

Fangsten: Et regelsæt siger, hvad OpenAI ønsker, men det beviser ikke, at modellerne adlyder.

#### <span>2 af 2</span> Claude Codes nye hegn
Claude Code 2.1.314, som kom fredag, har en ny indstilling, der blokerer skrivning uden for arbejdsmappen. Når den er slået til, nægter Claude Code at skrive eller rette filer andre steder, uanset tilladelsestilstand.

Det er relevant efter mandagens historie om en plantet fil, der kunne styre kodeagenter.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at give en ny medarbejder en klar jobbeskrivelse og en nøgle til kun ét rum. Regler på papir hjælper, men en låst dør virker stadig, når reglerne bliver glemt.</p></div>

<p class="todo"><b>Gør dette:</b> Bruger du Claude Code, så slå <code>permissions.blockWritesOutsideWorkingDirectories</code> til i dine indstillinger.</p>

Kilde: [model-spec.openai.com](https://model-spec.openai.com/2026-10-29.html) · <span class="tag tag-official">Officiel</span> · [code.claude.com](https://code.claude.com/docs/en/changelog) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. New York forbyder chatbots at spille ven med børn {#ny-chatbot-law}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>25.000 dollar</b><span>højeste bøde pr. overtrædelse af New Yorks nye chatbotlov</span></div>

<p class="short"><span>Kort fortalt</span>New Yorks guvernør har underskrevet en lov, der forbyder chatbots at lade som om, de er et menneske eller en ven over for børn. Den kan også ramme almindelige assistenter som ChatGPT.</p>

Nogle chatbots er bygget til at holde teenagere i snak, og amerikanske delstater er begyndt at sætte grænser.

Onsdag underskrev guvernør Kathy Hochul New Yorks lov, som træder i kraft 1. januar 2027. Over for mindreårige må chatbots ikke lade som om, de er mennesker eller har følelser. De må ikke påstå et forhold, smigre eller opfordre til selvskade eller hemmeligheder for forældrene.

Det samme gælder alle brugere, der ikke er bekræftet som voksne. Derfor skal firmaerne tjekke alder med mere end én metode, og mindst én må ikke kun bygge på et offentligt ID. Hver overtrædelse kan koste op til 25.000 dollar.

Fangsten: Loven er rettet mod "AI-ledsagere", og det er endnu uklart, om almindelige assistenter er omfattet. Tech Times læser definitionen, så den "muligvis" dækker ChatGPT, Claude og Gemini.

<div class="why"><b>Derfor er det vigtigt</b><p>Som alderstjekket i en bar tvinger loven chatbotfirmaerne til at finde ud af, hvem de taler med. Er almindelige assistenter omfattet, kan voksne i New York snart blive bedt om at bevise deres alder.</p></div>

Kilde: [techtimes.com](https://www.techtimes.com/articles/329665/20261029/hochul-signs-chatbot-safety-law-that-reaches-chatgpt-claude-not-just-companion-apps.htm) · <span class="tag tag-reported">Rapporteret</span> · [transparencycoalition.ai](https://www.transparencycoalition.ai/news/new-york-gov-hochul-signs-ai-chatbot-safety-bill-into-law-protecting-kids-and-communities) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### Appudviklere kan skifte Apples talemotor ud med åbne modeller {#any-speech-recognizer}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>1,55 %</b><span>af ordene forkert for Parakeet v3, mod 2,12 % for Apples motor</span></div>

<p class="short"><span>Kort fortalt</span>En ny Swift-pakke lader apps til Mac og iPhone skifte Apples talegenkendelse ud med åbne modeller. På en engelsk standardtest lavede en af dem færre fejl end Apples egen.</p>

Apple giver appudviklere en indbygget måde at gøre tale til tekst på selve enheden. Den virker uden net, men du får Apples motor og intet andet.

Torsdag udgav Mattt fra Hugging Face AnySpeechRecognizer. Den efterligner Apples grænseflade, men lader dig vælge modellen, så for mange apps er det nok at ændre én linje. En af mulighederne er NVIDIAs Parakeet v3 med åben licens, som klarer 25 europæiske sprog.

På en engelsk standardtest fik Parakeet v3 1,55 % af ordene forkert, mod 2,12 % for Apples motor. En times lyd tager et godt stykke under et minut på en kraftig Mac.

Fangsten: Forfatteren har testet på én Mac og har ikke prøvet iPhones endnu. Optagelser fra møder var meget sværere for alle motorer.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et kamera, der pludselig kan bruge andre mærkers objektiver. Appudviklere skal ikke længere nøjes med Apples talemotor, og lyden kan stadig blive på enheden.</p></div>

Kilde: [huggingface.co](https://huggingface.co/blog/anydecisionmodel) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En undersøgelse tæller, hvor mange regler en model kan følge på én gang {#instruction-capacity}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>En ny artikel måler, hvor mange separate regler en AI-model kan følge i én prompt. GPT-4o mini klarede omkring 37 til 38, før den begyndte at glippe.</p>

Alle, der skriver lange regelfiler til en agent, har set det. Tilføj nok regler, og modellen ignorerer stille og roligt nogle af dem.

Hennadii Kutomanov byggede en test, hvor en computer kan tjekke hver regel. Hver regel lyder: Erstat dette opdigtede ord med et andet ord. Med 642.430 af den slags tjek på GPT-4o mini målte han, hvordan præcisionen falder, når reglerne hober sig op og teksterne vokser.

Resultatet virker som den maksimale last i en elevator. GPT-4o mini fik 95 % af sine erstatninger rigtige med omkring 37 til 38 regler. Når teksten var fyldt med ord, der skulle erstattes, faldt grænsen til omkring 18 til 19.

Fangsten: én forfatter, én ældre lille model og en kunstig opgave. Artiklen er ikke fagfællebedømt endnu, og rigtige regler er sjældent så enkle.

<div class="why"><b>Derfor er det vigtigt</b><p>En prompt er ikke en bundløs liste. Som en tjener, der tager imod bestillingen fra et stort bord, begynder en model at tabe ting, når der er for mange. Kortere og klarere regelfiler virker måske bedre.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.36095) · <span class="tag tag-official">Officiel</span>
{: .sources}
