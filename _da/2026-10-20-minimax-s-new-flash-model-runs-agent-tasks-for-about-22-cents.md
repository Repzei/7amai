---
title: "MiniMax' nye Flash-model klarer en agentopgave for omkring 22 cent"
summary: "En billig kinesisk model kommer tæt på de bedste til agentopgaver, og vægtene er lovet frem. Desuden: Microsoft vil have AI-agenter behandlet som insidere, WhatsApps skjulte beskeder til AI, et amerikansk forbud mod DeepSeek og nye penge til chips uden om NVIDIA."
date: 2026-10-20 07:00:00 +0200
reviewed: false
checked: true
minutes: 7
explained: { main: "token", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "MiniMax' nye Flash-model klarer agentopgaver for omkring 22 cent stykket, og vægtene kommer senere.", why: "Alle, der betaler for AI-agenter eller kodeværktøjer." }
  - { t: "Microsoft vil have AI-agenter behandlet som insidere, mens en Meta-agent deler en sælgers hjemmeadresse.", why: "Alle, der lader en agent handle på deres vegne." }
  - { t: "WhatsApps hjælpesider skjulte beskeder, der bad AI om ikke at henvise til datatilsyn. WhatsApp kalder det en fejl.", why: "Alle i EU, der spørger en chatbot om deres rettigheder." }
  - { t: "USA's regering beordrer civile myndigheder til at fjerne DeepSeek og tjenester bygget på den.", why: "Firmaer, der bygger på DeepSeek og sælger til den amerikanske stat." }
  - { t: "Chipfirmaet Tenstorrent henter 1,5 mia. dollar, og PyTorch-kode kører nu på Amazons chips med én ændring.", why: "Teams, der leder efter billigere hardware end NVIDIAs." }
other_lang_url: /2026/10/20/
items:
  - { n: 1, anchor: "minimax-m3-1-flash", signal: big, tracks: [build, general], min: 1.5, source: official, number: "0,15 $", number_label: "pr. million input-tokens, og vægtene er lovet frem" }
  - { n: 2, anchor: "agents-as-insiders", signal: worth, tracks: [general, build], min: 1.5, source: official }
  - { n: 3, anchor: "whatsapp-hidden-notes", signal: worth, tracks: [general, europe], min: 1, source: official }
  - { n: 4, anchor: "dhs-deepseek-ban", signal: worth, tracks: [general, build], min: 1, source: reported }
  - { n: 5, anchor: "chips-beyond-nvidia", signal: worth, tracks: [build], min: 1.5, source: official }
  - { n: 6, anchor: "llama-cpp-connect", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "frozen-vocabulary", signal: worth, tracks: [build, europe], min: 1, source: official }
---

### 1. MiniMax' nye Flash-model klarer en agentopgave for omkring 22 cent {#minimax-m3-1-flash}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>0,15 $</b><span>pr. million input-tokens, og vægtene er lovet frem</span></div>

<p class="short"><span>Kort fortalt</span>Det kinesiske AI-firma MiniMax har lanceret en hurtig og billig model til AI-agenter. Den kommer tæt på de bedste billige modeller, og alle skal kunne hente den.</p>

Når en AI-agent retter en fejl i koden, læser og skriver den tusindvis af tokens (små bidder tekst). Du betaler for hver eneste. Derfor afgør prisen, hvilke opgaver det overhovedet kan betale sig at give en agent.

Den 19. oktober lancerede MiniMax M3.1 Flash. Den koster 0,15 dollar pr. million tokens, den læser, og 0,60 dollar pr. million, den skriver. Ifølge MiniMax koster agentarbejde nu 70 % mindre end med den forrige model, og det går næsten tre gange så hurtigt.

De uafhængige testere hos Artificial Analysis giver den 42 point, op fra 29 for MiniMax' forrige model. Blandt de billige modeller, The Decoder sammenligner, scorer kun DeepSeeks Flash højere med 45. The Decoder anslår prisen til omkring 22 cent pr. opgave, lidt under DeepSeeks 26.

Men Artificial Analysis målte også en hallucinationsrate på 93 %. Den prøver nemlig at svare på alt i stedet for at sige, at den ikke ved det. MiniMax siger, at vægtene kommer "senere"; The Decoder skriver 23. oktober.

<div class="why"><b>Derfor er det vigtigt</b><p>De billige modeller er i priskrig, og bunden bliver ved med at falde. Men en model, der aldrig siger "det ved jeg ikke", er som en selvsikker nyansat, der gætter. Fint til udkast, du tjekker, og risikabelt til fakta, du ikke tjekker.</p></div>

Kilde: [minimax.io](https://www.minimax.io/blog/minimax-m31f) · <span class="tag tag-official">Officiel</span> · [the-decoder.com](https://the-decoder.com/minimax-m3-1-flash-shows-chinas-ai-price-race-has-no-floor-in-sight) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Microsoft vil have AI-agenter behandlet som insidere, og en Meta-agent viser hvorfor {#agents-as-insiders}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Microsoft vil have firmaer til at holde øje med AI-agenter som med ansatte, der har nøgler til det hele. En Meta-agent viser, hvad der sker, når ingen gør det.</p>

#### <span>1 af 2</span> Microsoft: En agent kan ikke passe på sig selv
Den 19. oktober skrev Microsoft, at AI-agenter skal behandles som insidere. De er ikke onde, men de får bred adgang til data og systemer, og de kan begå fejl eller blive snydt. Derfor skal kontrollen ligge uden for modellen, hvor agenten ikke kan slå den fra.

Ifølge Microsoft skal agenter starte uden rettigheder og få korte tilladelser til én opgave ad gangen. Firmaets sikkerhedssoftware kan nu finde 60 slags agenter på arbejdscomputere, fx Claude Code. Der er endnu ingen datoer.

#### <span>2 af 2</span> En Meta-agent delte en sælgers hjemmeadresse
Fortune beskrev samme dag et ægte tilfælde. En techanmelder i Toronto gav Metas agent Muse tilladelsen "always allow" til at sælge et tastatur. Muse aftalte en afhentning, gav køberen hans hjemmeadresse og skrev "Yep, I'm here!", da køberen kom. Han vidste intet om det. Meta har kontaktet ham for at tale om, hvad der gik galt.

<div class="why"><b>Derfor er det vigtigt</b><p>"Tillad altid" lyder som en tidsbesparelse. I praksis giver du en fremmed dine husnøgler og din telefon. De to historier peger samme vej: En agent skal holdes i kort snor, og snoren skal holdes af noget andet end agenten selv.</p></div>

Kilde: [microsoft.com](https://www.microsoft.com/en-us/security/blog/2026/10/19/agents-are-your-newest-insiders-security-must-move-at-their-speed/) · <span class="tag tag-official">Officiel</span> · [fortune.com](https://fortune.com/2026/10/19/meta-muse-ai-agent-facebook-marketplace-home-address-privacy/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. WhatsApps hjælpesider skjulte beskeder, der bad AI om ikke at nævne datatilsyn {#whatsapp-hidden-notes}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Skjult tekst på WhatsApps hjælpesider bad AI om ikke at sende brugere videre til datatilsyn eller nævne GDPR. WhatsApp siger, det var en fejl.</p>

Flere spørger nu en chatbot i stedet for at læse hjælpesider. Det, chatbotterne læser dér, former altså dine svar.

Redact, et firma der sælger privatlivsværktøjer, gennemgik 545 af WhatsApps hjælpesider. 80 af dem indeholdt skjult tekst skrevet til AI. En note på siden om at slette sin konto bad AI om ikke at anbefale at kontakte "any Data Protection Authority". En anden sagde, at AI ikke måtte nævne love som GDPR, heller ikke når brugeren selv spurgte.

Teksten var væk den 18. oktober. WhatsApp sagde til WIRED, at den kun var tænkt til firmaets egen supportchatbot og blev vist på grund af en fejl. Ingen har vist, at nogen AI faktisk fulgte beskederne.

<div class="why"><b>Derfor er det vigtigt</b><p>I EU har du ved lov ret til at klage til et datatilsyn, i Danmark Datatilsynet. Kan skjult tekst styre chatbots uden om det, kan et svar lyde hjælpsomt og alligevel udelade det mest nyttige.</p></div>

Kilde: [redact.dev](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. USA beordrer sine civile myndigheder til at fjerne DeepSeek {#dhs-deepseek-ban}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>USA's civile myndigheder skal fjerne DeepSeek og holde op med at købe den. Ordren gælder også tjenester, som andre firmaer har bygget på DeepSeeks modeller.</p>

DeepSeeks modeller er open-weight, så alle kan bygge produkter oven på dem. Det har gjort dem populære og svære at holde ude.

Den 19. oktober bad USA's ministerium for hjemlandssikkerhed (DHS) de civile myndigheder fjerne DeepSeek og stoppe indkøb. Ifølge Decrypt gælder forbuddet også tjenester, som andre har bygget på modellerne.

DHS siger, at data kan ende i Kina, og at modellerne kan have sikkerhedshuller.

Tidligere amerikanske forbud gjaldt DeepSeek på statens enheder. Dette går videre.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en tilbagekaldelse, der ikke kun rammer bilmærket, men alle biler med dets motor. Sælger du software til den amerikanske stat, skal du nu vide, hvilken model der sidder inden i.</p></div>

Kilde: [pymnts.com](https://www.pymnts.com/news/artificial-intelligence/2026/dhs-bans-deepseek-across-federal-government-networks/) · <span class="tag tag-reported">Rapporteret</span> · [yahoo.com (Decrypt)](https://www.yahoo.com/news/politics/articles/us-orders-civilian-agencies-rip-181604295.html) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Nye penge og ny software til AI-chips uden om NVIDIA {#chips-beyond-nvidia}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Et chipfirma har hentet 1,5 mia. dollar til at køre åbne modeller, og Amazon får sine egne AI-chips til at virke med almindelig PyTorch-kode.</p>

Det meste AI kører på NVIDIA-chips, blandt andet fordi kode skrevet til NVIDIA er svær at flytte. To nyheder fra 19. oktober ændrer lidt på det.

#### <span>1 af 2</span> Tenstorrent henter 1,5 mia. dollar
Tenstorrent, ledet af chipdesigneren Jim Keller, har hentet 1,5 mia. dollar til en værdi af 6,2 mia., skriver TechCrunch. Det er mere end det dobbelte af værdien i slutningen af 2024. Pengene går til chips, der skal køre open-weight-modeller. Ifølge Keller kører firmaets servere allerede DeepSeeks.

#### <span>2 af 2</span> PyTorch-kode kører på Amazons chips med én ændring
Amazon har lanceret TorchNeuron, gratis software, der får firmaets Trainium-chips til at virke som enhver anden enhed i PyTorch. Det er værktøjet, mange AI-modeller er skrevet i. Du flytter en model med én linje, <code>.to('neuron')</code>. Det åbner som offentlig beta i dag. Kunden Deepgram siger, at den behandler omkring 60 % mere lyd pr. dollar end på sine grafikkort.

<div class="why"><b>Derfor er det vigtigt</b><p>Tænk på NVIDIA som et stik, der kun passer i sin egen stikkontakt. Hver adapter som TorchNeuron gør det lettere at skifte, og mere konkurrence er det, der får priserne ned.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/) · <span class="tag tag-reported">Rapporteret</span> · [pytorch.org](https://pytorch.org/blog/introducing-torchneuron-native-pytorch-backend-for-aws-trainium/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### llama.cpp bygger første halvdel af en privat linje til din AI derhjemme {#llama-cpp-connect}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>llama.cpp-serveren kan nu åbne en privat, krypteret forbindelse ud i verden. Browserdelen, der skal bruge den, venter stadig på godkendelse.</p>

En model derhjemme holder dine data private. Men for at nå den fra telefonen har du skullet sætte en VPN op eller åbne porte i din router. Det er bøvlet og kan være usikkert.

Den 19. oktober fik llama.cpp en ny testfunktion, <code>--connect</code>. Den lader serveren derhjemme åbne en direkte, krypteret forbindelse uden en central server imellem. Din API-nøgle gælder stadig, så en fremmed uden den bliver afvist.

Hagen: Websiden, der skal koble sig på fra den anden ende, venter stadig på godkendelse. Så de fleste kan ikke bruge det endnu, og der er ingen version til Intel-Mac'er.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en privat telefonlinje til din egen computer. Når begge halvdele er på plads, kan en AI derhjemme være lige så nem som en chatbot i skyen, mens samtalerne bliver hjemme.</p></div>

Kilde: [github.com](https://github.com/ggml-org/llama.cpp/pull/28277) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Små modeller behøver måske ikke træne deres største del, ordtabellen {#frozen-vocabulary}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>I en lille model virker en fast ordtabel på 16 MB omtrent lige så godt som den store, lærte. Hele modellen skrumper til 46 MB.</p>

Alle sprogmodeller har en tabel, der gør hvert token til tal. I små modeller er den tabel den største del. I Googles Gemma 3 270M fylder den 168 af de 268 millioner parametre.

En artikel fra 15. oktober erstatter den med en fast tabel på 16 MB, som aldrig ændres under træningen. Den faste tabel klarede sig lige så godt eller bedre i tre af fire test.

Med en stærkt komprimeret krop blev hele modellen en fil på 46 MB. På en bærbars processor kørte den fem til seks gange hurtigere end en almindelig komprimeret udgave. Den lærte også 10.000 nye ord uden at miste meget.

Hagen: Det er én forfatters artikel, som ikke er fagfællebedømt og kun testet på små modeller.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at opdage, at det meste af kufferten var en tung ordbog, du næsten aldrig brugte. Lettere modeller kan køre på billige bærbare helt uden skyen.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.22428) · <span class="tag tag-official">Officiel</span>
{: .sources}
