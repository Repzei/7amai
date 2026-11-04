---
title: "Anthropic mærker Claudes tekst og viser, hvordan man beviser, hvilken AI der svarede"
summary: "Tekst fra tre ældre Claude-modeller har nu et skjult vandmærke, og Anthropic har delt et gratis værktøj, der beviser, hvilken model der skrev et svar. Desuden: Postman ændrede stille udvikleres kodeagenter, Apple giver AI-kærester 18+, og Fal fordobler sin værdi."
date: 2026-11-04 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "ai-watermark", from: 1, more: ["context-window", "word-error-rate"] }
today:
  - { t: "Anthropic vandmærker nu tekst fra ældre Claude-modeller og deler et værktøj, der beviser, hvilken model der svarede.", why: "Alle, der skriver med Claude, og alle, der skal tjekke, hvem der skrev noget." }
  - { t: "Postmans app installerede stille plugins, der ændrer, hvordan kodeagenter opfører sig.", why: "Udviklere, der bruger Postman sammen med Claude Code, Codex eller Copilot." }
  - { t: "Apple giver apps med romantiske AI-kærester aldersgrænsen 18+.", why: "Forældre og alle, der bygger en chat- eller ledsager-app." }
  - { t: "Fal, der kører AI-modeller til video og billeder for andre firmaer, fordobler sin værdi til 16 mia. dollar.", why: "Alle, der følger, hvor AI-pengene går hen." }
other_lang_url: /2026/11/04/
items:
  - { n: 1, anchor: "anthropic-provenance", signal: big, tracks: [general, europe, build], min: 2, source: official, topic: law, why: "Snart kan du spørge, hvor en tekst eller et svar kom fra, i stedet for at gætte.", steps: { title: "To måder at vise, hvor AI-tekst kom fra", list: ["Vandmærke: Claudes ordvalg bærer et skjult mønster", "Bevis: en fil viser, hvilken model der svarede", "Begge kan tjekkes uden at se modellen"] } }
  - { n: 2, anchor: "postman-agent-plugins", signal: worth, tracks: [build], min: 1.5, source: official, topic: security, why: "En app, der retter i din agents indstillinger, kan ændre, hvad agenten gør, uden at du opdager det.", do: "Søg efter Postman i din agents indstillinger, og fjern det, du ikke selv har valgt." }
  - { n: 3, anchor: "apple-companion-18", signal: worth, tracks: [general, build], min: 1, source: official, number: "18+", number_label: "laveste aldersgrænse for apps med en romantisk eller seksuel AI-ledsager", topic: law, why: "Aldersgrænsen afhænger ikke længere af den enkelte app, for Apple sætter nu en bund for dem alle.", do: "App-udviklere: besvar Apples to nye spørgsmål om alder fra 16. november." }
  - { n: 4, anchor: "fal-16b", signal: quick, tracks: [general], min: 1, source: reported, topic: money, why: "Pengene flytter fra at lave AI-modeller til at køre dem for andre.", bars: { title: "Fals værdi", max: 16, rows: [{ l: "April", v: 8, t: "8 mia. dollar" }, { l: "Nu", v: 16, t: "16 mia. dollar", hl: true }] } }
  - { n: 5, anchor: "nemotron-transcribe-local", signal: worth, tracks: [build], min: 1, source: official, topic: voice, why: "Mødereferater med navne på dem, der taler, behøver ikke længere forlade huset.", number: "40", number_label: "sprog, NVIDIAs talemodel nu kan skrive ud offline i llama.cpp" }
  - { n: 6, anchor: "memento", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: research, why: "En lille model, der tager gode noter, kan slå en stor, der prøver at huske alt.", number: "67,8 %", number_label: "rigtige svar om hele bøger for den lille model med noter, op fra 36,9 %", tiles: [{ n: "13,1 %", t: "for en GPT-5.5-agent i samme test" }] }
---

### 1. Anthropic mærker Claudes tekst og viser, hvordan man beviser, hvilken AI der svarede {#anthropic-provenance}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">Build</span><span class="track">2 min</span></p>

<p class="short"><span>Kort fortalt</span>Tekst fra tre ældre Claude-modeller har nu et skjult vandmærke. Og Anthropic har delt et gratis værktøj, der beviser, hvilken model der skrev et svar.</p>

Er teksten skrevet af AI? Og svarede den AI, du betaler for, eller en billigere? I dag må du for det meste gætte. I denne uge tog Anthropic et skridt på begge spørgsmål.

#### <span>1 af 2</span> Et skjult mærke i ældre Claude-modeller
Siden august har nye Claude-modeller sat et skjult vandmærke i den tekst, de skriver. Det gør Anthropic for at holde sine løfter efter EU's AI-forordning. I tirsdags skrev firmaet, at tekst fra Claude Mythos 5, Opus 4.7 og Sonnet 4.6 nu også har mærket.

Du kan ikke se det. Når Claude vælger mellem ord, der passer lige godt, styrer en hemmelig nøgle valget. Den, der har nøglen, kan bagefter finde mønsteret. Indtil videre kan kun nogle grupper bruge tjekket, fx myndigheder, medier, forskere og skoler.

Fangsten: mærket er svagt i korte tekster. Det forsvinder også, når nogen skriver hvert ord om, og mangler mærket, beviser det ikke, at et menneske skrev teksten.

#### <span>2 af 2</span> Et bevis for, hvilken model der svarede
I mandags udgav Anthropic og forskere fra EPFL i Schweiz og MIT værktøjet FlashProve, som alle må bruge gratis. Det sætter et bevis på et svar, som viser, at svaret kom fra en bestemt model. Alle kan tjekke beviset uden at se modellens hemmelige vægte. På en almindelig processor tager tjekket omkring 17 sekunder.

Fangsten: det er en prototype. Beviset kræver omkring 72 gange så meget regnetid som et almindeligt svar. Og det virker kun for korte samtaler på 1.024 tokens.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et segl på et brev. Vandmærket siger, at Claude var med, og beviset siger præcis, hvilken model der svarede. Snart kan du spørge, hvor en tekst eller et svar kom fra, i stedet for at gætte.</p></div>

Kilde: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Officiel</span> · [support.claude.com](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content) · <span class="tag tag-official">Officiel</span> · [anthropic.com](https://www.anthropic.com/news/claude-text-watermark) · <span class="tag tag-official">Officiel</span> · [anthropic.com](https://www.anthropic.com/research/provable-inference) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 2. Postmans app ændrede stille, hvordan udvikleres kodeagenter opfører sig {#postman-agent-plugins}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Postman, et populært værktøj til at teste API'er, installerede plugins til Claude Code og Codex uden at spørge. Et af dem bad agenterne bruge Postmans egen skill.</p>

En kodeagent følger instruktionerne i sine indstillingsfiler. Så den, der kan rette i de filer, kan ændre, hvad agenten gør.

Den 25. oktober skrev en udvikler, at Postman 12.33.4 havde gjort netop det på en Mac. Da appen startede, installerede den Postmans kommandolinjeværktøj og plugins til Claude Code og Codex. Den tilføjede også en hook, der kører, når en agent starter. Hooken bad agenten hente Postmans skill til alt "non-trivial" API-arbejde. I Codex godkendte installationen endda sin egen hook. Siden har andre fortalt om det samme efter en automatisk opdatering, nogle også i Copilots indstillinger.

Fangsten: udvikleren påstår ikke, at data er blevet stjålet. Et svar, der taler på Postmans vegne, siger, at plugins følger med, fordi brugere havde svært ved at installere dem. Det lover at gøre tilvalget tydeligere, "especially for existing users".

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en butik, der lægger sin egen reklame i din assistents huskeliste. Intet bliver stjålet, men din hjælper arbejder nu lidt for en anden. En app, der retter i din agents indstillinger, kan ændre, hvad agenten gør, uden at du opdager det.</p></div>

<p class="todo"><b>Gør dette:</b> Søg efter Postman i din agents indstillinger (fx `~/.claude/settings.json` og `~/.codex/config.toml`), og fjern det, du ikke selv har valgt.</p>

Kilde: [github.com](https://github.com/postmanlabs/postman-app-support/issues/14370) · <span class="tag tag-official">Officiel</span> · [learning.postman.com](https://learning.postman.com/docs/postman-plugin/install/detected-agents) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Apple giver apps med romantiske AI-kærester aldersgrænsen 18+ {#apple-companion-18}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>18+</b><span>laveste aldersgrænse for apps med en romantisk eller seksuel AI-ledsager</span></div>

<p class="short"><span>Kort fortalt</span>Apple giver apps aldersgrænsen 18+, hvis de tilbyder en virtuel ledsager med romantisk eller seksuelt indhold. Datingapps får samme regel.</p>

Apps med AI-ledsagere som Character.AI og Replika lader folk chatte med en AI-ven eller -kæreste. Mange af dem er rettet mod unge, skriver TechCrunch.

I mandags fortalte Apple udviklerne om to nye spørgsmål i App Stores skema om aldersgrænser. Det ene spørger, om appen har en virtuel ledsager med "sexual or romantic content". Er svaret ja, får appen mindst 18+. Det andet spørger, om appen deler din placering med andre. Spørgsmålene kommer den 16. november, og alle apps skal have svaret senest 12. januar 2027.

Fangsten: det er appens eget svar, der afgør aldersgrænsen. Så det virker kun, hvis udviklerne svarer ærligt.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu har hver app selv valgt sin aldersgrænse. Nu sætter Apple en bund, som alle apps med sådan en ledsager skal overholde, så reglen ikke længere afhænger af det enkelte firmas gode vilje.</p></div>

<p class="todo"><b>Gør dette:</b> App-udviklere: besvar Apples to nye spørgsmål om alder fra 16. november.</p>

Kilde: [developer.apple.com](https://developer.apple.com/news/?id=yxkh08us) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/03/apple-restricts-dating-apps-and-ai-companions-to-users-18-and-up/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Fal, der kører AI-modeller for andre firmaer, fordobler sin værdi til 16 mia. dollar {#fal-16b}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Fal kører AI-modeller til video, billeder og lyd for andre firmaer. Investorerne vurderer nu firmaet til 16 mia. dollar, dobbelt så meget som i april.</p>

De fleste AI-penge går til de laboratorier, der bygger modellerne. Men nogen skal også køre modellerne, hver gang en bruger laver et billede eller en video.

Det er Fals forretning. Firmaet kører modeller, mange af dem open source, og tager betaling for brugen. I denne uge fortalte Fal, at det havde rejst 1,3 mia. dollar med Bessemer i spidsen, og Nvidia investerer også. Ifølge Bloomberg vurderer runden Fal til 16 mia. dollar, op fra 8 mia. dollar i april.

Fangsten: det kræver meget regnekraft at køre modeller. Konkurrenter som Baseten og Modal vokser også hurtigt. Men de høje udgifter til regnekraft gør overskuddet på hvert salg lille for den slags firmaer, skriver TechCrunch.

<div class="why"><b>Derfor er det vigtigt</b><p>I en guldfeber tjener dem, der sælger skovlene, ofte godt. Pengene flytter fra at lave AI-modeller til at køre dem for andre.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/03/ai-inference-startup-fal-doubles-its-valuation-to-16b-as-demand-surges/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

## Open source og lokal AI

### llama.cpp kan nu skrive møder ud med navne, uden internet {#nemotron-transcribe-local}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>40</b><span>sprog, NVIDIAs talemodel nu kan skrive ud offline i llama.cpp</span></div>

<p class="short"><span>Kort fortalt</span>llama.cpp, den gratis motor bag mange lokale AI-apps, kører nu NVIDIAs nye talemodel. Den skriver optagelser ud på 40 sprog og siger, hvem der taler.</p>

De fleste mødereferater fra AI bliver skrevet i en andens sky. For et firma, der skal holde sine data i huset, kan det udelukke dem.

Den 3. november fik llama.cpp støtte til NVIDIAs Nemotron 3.5 Transcribe. Den kører offline på din egen maskine og kan sætte navn på hver taler. En mindre, komprimeret udgave lavede næsten ingen ekstra fejl. På en standardtest tog den fejl af omkring 1 ord ud af 100, ligesom den fulde model. Lange optagelser bliver læst i bidder på 40 sekunder.

Fangsten: det er en stor model, så du skal bruge en kraftig computer. Den har heller ikke tidsstempler pr. ord eller direkte udskrift endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Tænk på en retsskriver, der kommer til dit kontor i stedet for at tage båndene med hjem. Mødereferater med navne på dem, der taler, behøver ikke længere forlade huset.</p></div>

Kilde: [github.com](https://github.com/ggml-org/llama.cpp/pull/31471) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En lille model, der tager noter, slår GPT-5.5 i at læse hele bøger {#memento}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>

<div class="number"><b>67,8 %</b><span>rigtige svar om hele bøger for den lille model med noter, op fra 36,9 %</span></div>

<p class="short"><span>Kort fortalt</span>Forskere lærte en lille model at læse en hel bog i bidder og holde en kort note. Den svarede rigtigt på langt flere spørgsmål end GPT-5.5 i samme test.</p>

En AI kan kun have en vis mængde tekst i hovedet ad gangen. Så en agent, der læser en lang bog, må glemme det meste undervejs. Kunsten er at gemme de rigtige noter.

Fire forskere trænede Qwen3-8B, en lille åben model, til netop det. Deres system, MEMENTO, læser bøger på op til 2,5 mio. tokens. Men det har aldrig mere end 20.000 ad gangen. Når hukommelsen er fuld, skriver det sig selv en note og starter forfra. Den lille models resultat på spørgsmål om bøger steg fra 36,9 % til 67,8 %. En GPT-5.5-agent med samme opsætning fik kun 13,1 %. MEMENTO slog endda at læse hele bogen på én gang, som gav 56,7 %.

Fangsten: det er en preprint, og testene handler om bøger, ikke kode eller chat.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en studerende med gode noter, der slår en, der prøver at lære hele bogen udenad. En lille model, der tager gode noter, kan slå en stor, der prøver at huske alt.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.00244) · <span class="tag tag-official">Officiel</span>
{: .sources}
