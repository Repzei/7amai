---
title: "Mistrals Voxtral 3 gør tale til tekst på 50 sprog"
summary: "Et europæisk AI-firma sælger nu billig transskription på alle EU's officielle sprog. Desuden: TorchTPU og DeepInfer løsner NVIDIAs greb, Anthropic indfører brugerprofiler, ChatGPT kan låse samtaler, og TypeScript i Rust."
date: 2026-10-21 07:00:00 +0200
reviewed: false
checked: false
minutes: 7
explained: { main: "word-error-rate", from: 1, more: ["mixture-of-experts", "context-window"] }
today:
  - { t: "Mistrals Voxtral 3 transskriberer 50 sprog, også alle 24 officielle EU-sprog, fra 0,0035 dollar i minuttet.", why: "Alle, der gør møder, opkald eller interview til tekst." }
  - { t: "Google gør TorchTPU til open source, og DeepSeek deler den software, der kører firmaets egne modeller.", why: "Teams, der vil køre AI uden at være afhængige af NVIDIA." }
  - { t: "Anthropic lader platforme mærke hver slutkunde og lancerer et lovforslag, der kan stoppe farlige modeller.", why: "Apps, der videresælger Claude, og alle, der følger AI-regler." }
  - { t: "ChatGPT kan låse samtaler med en pinkode eller Face ID, og OpenAI køber en startup med agenter til lægemiddelforsøg.", why: "Alle, der deler telefon eller computer, og medicinalfirmaer." }
  - { t: "Cloudflare og partnere porterer TypeScripts compiler til Rust, op til 8 gange hurtigere.", why: "Webudviklere, der venter på langsomme typetjek." }
other_lang_url: /2026/10/21/
items:
  - { n: 1, anchor: "voxtral-3", signal: big, tracks: [europe, build, general], min: 1.5, source: official, number: "0,0035 $", number_label: "pr. minut transskriberet lyd (Voxtral Mini Transcribe 3)" }
  - { n: 2, anchor: "beyond-nvidia-software", signal: worth, tracks: [build], min: 1, source: official }
  - { n: 3, anchor: "anthropic-profiles-bill", signal: worth, tracks: [build, general], min: 1.5, source: official }
  - { n: 4, anchor: "openai-lock-orchestra", signal: worth, tracks: [general, europe], min: 1.5, source: reported }
  - { n: 5, anchor: "tsrs", signal: quick, tracks: [build], min: 1, source: official }
  - { n: 6, anchor: "pytorch-2-15-mac", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "compaction-later-questions", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. Mistrals Voxtral 3 gør tale til tekst på 50 sprog {#voxtral-3}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Europa</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>0,0035 $</b><span>pr. minut transskriberet lyd (Voxtral Mini Transcribe 3)</span></div>

<p class="short"><span>Kort fortalt</span>Det franske AI-firma Mistral har lanceret Voxtral 3, en familie af talemodeller. Den transskriberer alle 24 officielle EU-sprog, laver langt færre fejl end Whisper og koster brøkdele af en cent i minuttet.</p>

Tale til tekst gør møder til noter og interview til citater. Men hvert forkert ord betyder, at nogen skal rette teksten i hånden. Derfor afgør fejlraten, hvor nyttigt det er.

Nu har Mistral lanceret Voxtral 3. Transskriptionsmodellerne dækker nu 50 sprog, herunder alle 24 officielle EU-sprog. Familien har også live-transskription, en stemme, der læser tekst op, og et API til stemmeagenter.

På en standardtest i 45 sprog får den største model omkring 4 ud af 100 ord forkert. OpenAIs gratis Whisper-model får 16 forkert. Den lille model koster 0,0035 dollar i minuttet.

Mistral tilbyder den gennem et europæisk endpoint og desuden et amerikansk og et globalt.

Men der er en hage. Graferne er Mistrals egne, og de viser betalte konkurrenter tæt efter eller på niveau. Siden siger heller ikke, om man kan hente modellerne.

<div class="why"><b>Derfor er det vigtigt</b><p>Whisper er som en gratis skrivehjælp, der skal rettes meget. Voxtral er en bedre skrivehjælp mod et lille gebyr, og den holder til i Europa. For en dansk klinik eller et advokatkontor er det forskellen på noter, man retter, og noter, man arkiverer.</p></div>

<p class="todo"><b>Prøv det:</b> Voxtral 3 ligger i Mistrals API i dag. Test den på en optagelse på dit eget sprog, før du skifter.</p>

Kilde: [mistral.ai](https://mistral.ai/news/voxtral-3/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. To åbne udgivelser gør det lettere at køre AI uden NVIDIA {#beyond-nvidia-software}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Google har gjort TorchTPU til open source, så PyTorch-kode kan køre på firmaets chips. DeepSeek deler den software, der kører dets egne modeller, og den kører også på Huawei-chips.</p>

Det meste AI-software er skrevet til NVIDIAs chips. Derfor kræver det et reelt stykke arbejde at skifte til billigere chips. To udgivelser den 20. oktober gør det lettere.

#### <span>1 af 2</span> Google åbner TorchTPU
PyTorch er den værktøjskasse, de fleste AI-modeller bygges med. Google har lavet TorchTPU sammen med Metas PyTorch-team, så PyTorch-kode kan køre på Googles egne TPU-chips med "minimale kodeændringer". I Hugging Faces Transformers-bibliotek vælger man TPU'en med én enkelt indstilling.

#### <span>2 af 2</span> DeepSeek deler sin motor
DeepSeek har udgivet DeepInfer, den software, der kører firmaets modeller i drift, under den frie Apache 2.0-licens. Den virker på NVIDIAs nyeste datacenterchips og på Huaweis Ascend 950. Indtil videre kører den kun én model, DeepSeek-V4.1-Flash, og nogle dele mangler, fx et hukommelseslager.

<div class="why"><b>Derfor er det vigtigt</b><p>Chips er som stikkontakter: Et stik, der kun passer i én kontakt, binder dig til én leverandør. Begge udgivelser er adaptere. Jo flere adaptere, jo sværere er det for én chipproducent at bestemme prisen.</p></div>

Kilde: [cloud.google.com](https://cloud.google.com/blog/topics/ai-infrastructure/torchtpu-is-now-open-source-run-native-pytorch-on-tpus) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/deepseek-ai/DeepInfer) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Anthropic indfører brugerprofiler i sit API og foreslår en sikkerhedslov {#anthropic-profiles-bill}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Apps, der videresælger Claude, kan nu fortælle Anthropic, hvilken kunde hvert kald er til. Samtidig viser Anthropic Kongressen et udkast til en lov, der kan stoppe en farlig model.</p>

#### <span>1 af 2</span> Én dårlig kunde skal ikke længere vælte en hel app
Mange apps kører på Claude bag kulisserne. Brød én af deres brugere Anthropics regler, kunne straffen ramme hele appen. Med brugerprofiler, der kom den 20. oktober, mærker en platform hvert kald med slutkunden. Så kan en udelukkelse ramme netop den kunde.

#### <span>2 af 2</span> Et lovforslag med en domstol som bremse
Anthropic har vist politikerne et udkast til en lov, skriver TechCrunch. Uafhængige testere skal tjekke nye modeller. Finder de en overhængende risiko for over 50 dødsfald eller 1 mia. dollar i skader, har de 72 timer til at give handelsministeriet besked. Kun en dommer kan derefter stoppe udgivelsen. Anthropic har bekræftet udkastet over for Politico. Indtil videre er det kun et udkast.

<div class="why"><b>Derfor er det vigtigt</b><p>Brugerprofiler er som en udlejer, der kan smide én larmende lejer ud i stedet for at lukke hele opgangen. Loven prøver det samme for hele modeller: en smal bremse, som en domstol bruger, og kun ved en katastrofe.</p></div>

<p class="todo"><b>Gør dette:</b> Videresælger du Claude til dine egne kunder, så tilføj brugerprofiler i dine API-kald.</p>

Kilde: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/20/anthropic-pitches-ai-safety-bill-that-may-block-a-model-if-50-people-could-be-killed/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. ChatGPT kan låse dine samtaler, og OpenAI køber en startup til lægemiddelforsøg {#openai-lock-orchestra}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>ChatGPT kan nu gemme udvalgte samtaler bag en pinkode eller Face ID. OpenAI har også købt Orchestra Bio for at føje AI-agenter til sine værktøjer til medicinalfirmaer.</p>

#### <span>1 af 2</span> Låste samtaler forbliver private på en delt skærm
Mange spørger ChatGPT om helbred eller penge og giver så telefonen til en anden. Fra den 20. oktober kan du låse en samtale med en firecifret pinkode eller Face ID, skriver TechCrunch. Det virker på de fleste abonnementer, fra Free til Enterprise.

Låsen er et gardin, ikke et pengeskab. Den giver ingen ekstra kryptering, og den ændrer ikke, hvad OpenAI gemmer eller træner på. Nulstiller du pinkoden, slettes alle låste samtaler for altid.

#### <span>2 af 2</span> OpenAI går dybere ind i lægemiddeludvikling
OpenAI har købt Orchestra Bio, der laver agenter, som holder styr på budgetter og løser planlægningsproblemer i lægemiddelforsøg. Holdet kommer med i Rosalind, OpenAIs værktøjer til life science. Ifølge TechCrunch bruger Moderna og danske Novo Nordisk allerede Rosalind. Prisen er ikke oplyst.

<div class="why"><b>Derfor er det vigtigt</b><p>Begge træk viser, hvor chatbotterne er på vej hen: ind i de private og de alvorlige dele af livet. Låsen holder en nysgerrig ven ude, ikke en hacker. Det mest følsomme hører stadig ikke hjemme i en chat.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/10/20/chatgpt-now-lets-you-lock-your-chats) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/10/20/openai-acquires-startup-orchestra-bio%e2%81%a0-to-beef-up-its-biotech-business/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. TypeScripts compiler får en Rust-version, der er op til 8 gange hurtigere {#tsrs}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Cloudflare og partnere har udgivet tsrs, en eksperimentel TypeScript-compiler skrevet i Rust. De siger, den er op til 8 gange hurtigere end TypeScript 7.0.</p>

I store webprojekter kan det være langsomt at tjekke koden for typefejl. Den 20. oktober udgav Cloudflare, VoidZero og Max Schwenk fra Owner.com tsrs. Det er en Rust-version af TypeScripts compiler, lavet i samarbejde med TypeScript-teamet, som bevarer styringen af sproget.

Ifølge holdet er tsrs op til 8 gange hurtigere end TypeScript 7.0 og bruger omkring 70 % mindre hukommelse. Cloudflare skriver også, at de bedste AI-modeller nu næsten selv kan lave den slags porteringer på få dage. Den er stadig eksperimentel, og noget af outputtet afviger fra originalen.

<div class="why"><b>Derfor er det vigtigt</b><p>Kan AI lave sådan en portering på få dage, kan de værktøjer, udviklere venter på hver dag, blive hurtigere meget før.</p></div>

<p class="todo"><b>Prøv det:</b> Kør <code>npx tsrs</code> på et projekt, og sammenlign tiden med dit sædvanlige tjek.</p>

Kilde: [blog.cloudflare.com](https://blog.cloudflare.com/typescript-rust-port/) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### PyTorch 2.15 kører mixture-of-experts-modeller op til 6,5 gange hurtigere på Mac {#pytorch-2-15-mac}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Den næste PyTorch gør Mac'er med Apple Silicon meget hurtigere til at køre mange åbne modeller lokalt. Indtil videre er det en testudgave.</p>

Mange nye åbne modeller er mixtures of experts: De bruger kun en lille del af sig selv for hvert ord. På en Mac håndterede PyTorch dem dårligt, så de kørte langsomt.

Hugging Faces PyTorch-team siger, at version 2.15 retter det. Den slags modeller skriver nu deres svar 5 til 6,5 gange hurtigere end i 2.14. På en M3 Ultra gik Qwen3.6-35B-A3B fra 9 til 61 tokens i sekundet.

Det er en testudgave indtil videre, og den kræver macOS 15 eller nyere.

<div class="why"><b>Derfor er det vigtigt</b><p>Ni tokens i sekundet er som at vente på, at nogen skriver. Tres er hurtigere, end du kan læse. Den forskel afgør, om en privat model på din egen Mac overhovedet føles brugbar.</p></div>

Kilde: [huggingface.co](https://huggingface.co/blog/mps-pytorch-2-15) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Når en agents hukommelse skrumpes, testes den ofte på det forkerte spørgsmål {#compaction-later-questions}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Metoder til at forkorte en lang samtale ser gode ud på det spørgsmål, man stiller nu. På de spørgsmål, der kommer senere, er mange ikke bedre end at slette sætninger tilfældigt.</p>

Kodeagenter løber tør for plads i lange sessioner. Derfor komprimerer de: De skrumper historikken og beholder det, der virker vigtigt. Men det, der virker vigtigt nu, er måske ikke det, du spørger om bagefter.

Et hold under ledelse af Junwei Yao har testet det. Når man kun beholdt de sætninger, det aktuelle spørgsmål krævede, steg præcisionen på det spørgsmål med 11,4 point, med en fjerdedel af teksten. På senere spørgsmål var ingen af den slags metoder målbart bedre end tilfældig sletning. Et værktøj, der ignorerer spørgsmålet, LLMLingua-2, slog tilfældig sletning på senere spørgsmål i én test.

I agentopgaver, hvor de senere trin krævede præcise navne og id'er, vendte resultatet igen.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at pakke til en rejse og kun tænke på første dag. Forfatternes pointe er enkel: Test komprimering på det, der kommer bagefter, ikke på det, du lige har spurgt om.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.27301) · <span class="tag tag-official">Officiel</span>
{: .sources}
