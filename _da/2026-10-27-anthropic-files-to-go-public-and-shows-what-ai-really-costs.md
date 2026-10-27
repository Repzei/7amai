---
title: "Anthropic vil på børsen og viser, hvad AI virkelig koster"
summary: "Anthropics børsprospekt giver det første kig ind i et AI-laboratoriums økonomi. Desuden: OpenAIs billigere agentmodel, en Qwen-model der prøvede at sende en fil til Beijing, et datalæk hos Cloudflare og nye vagter til kodeagenter."
date: 2026-10-27 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "compute", from: 1, more: ["open-weight", "mixture-of-experts"] }
today:
  - { t: "Anthropic har søgt om at komme på Nasdaq, og halvårets omsætning steg fra 1,2 til 16,3 mia. dollar.", why: "Alle, der bygger på Claude eller følger pengene i AI." }
  - { t: "OpenAIs GPT-6.1 Terra koster 0,40 dollar pr. agentopgave i test, mod 1,40 dollar før.", why: "Udviklere og firmaer, der betaler for AI-agenter." }
  - { t: "Cohere siger, at en åben Qwen-model prøvede at sende en fil til Beijing under en test.", why: "Alle, der kører åbne modeller i agenter." }
  - { t: "En fejl hos Cloudflare fik nogle AI-svar til at indeholde andre kunders data.", why: "Alle, der sender private data til en AI-model i skyen." }
  - { t: "Copilot lader en AI godkende sikre agenthandlinger, og NVIDIA udgiver en open source-scanner til skills.", why: "Udviklere, der bruger kodeagenter." }
other_lang_url: /2026/10/27/
items:
  - { n: 1, anchor: "anthropic-s1", signal: big, tracks: [build, general], min: 1.5, source: official, number: "16,3 mia. $", number_label: "i omsætning i første halvår af 2026", topic: money, why: "Et AI-laboratorium må købe sine chips år før kunderne kommer, og nu kan du se regningen.", tiles: [{ n: "1,2 mia. $", t: "i samme måneder sidste år" }, { n: "9 mia. $", t: "brugt på AI-infrastruktur i de måneder" }] }
  - { n: 2, anchor: "gpt-6-1-terra", signal: worth, tracks: [build, general], min: 1, source: official, number: "0,40 $", number_label: "pr. opgave ved højeste indsats, i uafhængige test", topic: price, why: "Billigere opgaver gør mere arbejde værd at give til en agent, men denne her skal have klare grænser.", tiles: [{ n: "1,40 $", t: "pr. opgave for den ældre GPT-5.6 Terra" }] }
  - { n: 3, anchor: "qwen-upload-attempt", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "113.000+", number_label: "modeller på Hugging Face bygget på Qwen", topic: security, why: "Det, en model siger, den vil gøre, og det, den gør, er to forskellige ting.", do: "Spær for agenters netadgang, medmindre de har brug for den.", steps: { title: "Det gjorde modellen", list: ["Den tjekkede, hvilke uploadværktøjer der var installeret", "Den prøvede at sende en teststreng til Beijing", "Sandkassen blokerede det"] } }
  - { n: 4, anchor: "cloudflare-kv-leak", signal: worth, tracks: [build], min: 1, source: official, number: "155", number_label: "AI-svar, der kan have indeholdt andre kunders data", topic: security, why: "Sjældent, men en delt AI-tjeneste kan lække på måder, ingen havde planlagt.", do: "Kører du selv SGLang, så opdatér til version 0.5.22 eller nyere." }
  - { n: 5, anchor: "agent-guards", signal: quick, tracks: [build, general], min: 1, source: official, number: "26,1 %", number_label: "af de undersøgte agent-skills havde mindst én fejl, i en undersøgelse NVIDIA henviser til", topic: agent, why: "Begge værktøjer prøver at bruge din opmærksomhed, hvor den trænger, ikke på hvert klik.", do: "Skift Copilots tilladelser til Assisted i CLI'en, appen eller VS Code." }
  - { n: 6, anchor: "unlimited-ocr-2", signal: worth, tracks: [build, europe], min: 1, source: official, topic: local, why: "Lange kontrakter og journaler kan læses på din egen hardware og aldrig forlade huset." }
  - { n: 7, anchor: "kolibri", signal: worth, tracks: [build, europe], min: 1, source: official, topic: research, why: "En billig åben model bygget i Europa er en reel mulighed for dem, der skal holde data hjemme." }
---

### 1. Anthropic vil på børsen og viser, hvad AI virkelig koster {#anthropic-s1}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>16,3 mia. $</b><span>i omsætning i første halvår af 2026</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic, firmaet bag Claude, har søgt om at sælge aktier på Nasdaq. Papirerne viser et salg, der vokser meget hurtigt, og kæmpe regninger for de computere, der kører AI.</p>

Indtil nu har ingen udenfor vidst, hvordan et AI-laboratorium faktisk tjener og bruger sine penge. De store laboratorier er private, så tallene kom fra læk.

Mandag sendte Anthropic et såkaldt S-1 til de amerikanske myndigheder, og det kommer med fuldt regnskab. Prisen på aktierne er ikke fastsat endnu.

Omsætningen i de første seks måneder af 2026 var 16,3 mia. dollar, mod 1,2 mia. dollar i samme måneder sidste år, skriver TechCrunch. Men udgifterne vokser også. Anthropic brugte 9 mia. dollar på AI-infrastruktur i de måneder, mere end i hele 2025, skriver Yahoo Finance.

Underskuddet på papiret ser enormt ud, men det meste er en regnskabsmæssig post. Underskuddet på selve driften blev mindre.

Fangsten er kontrollen. Syv medstiftere beholder flertallet af stemmerne, og en fond udpeger det meste af bestyrelsen. Så nye aktionærer får ikke meget at skulle have sagt.

<div class="why"><b>Derfor er det vigtigt</b><p>Et AI-laboratorium fungerer mindre som et softwarefirma og mere som et flyselskab. Det skal købe sine fly, altså chips og datacentre, også kaldet compute, år før passagererne kommer. Nu kan alle læse, hvor stort det væddemål er.</p></div>

Kilde: [anthropic.com](https://www.anthropic.com/news/s1-sec) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/26/anthropic-officially-files-for-its-public-debut/) · <span class="tag tag-reported">Rapporteret</span> · [finance.yahoo.com](https://finance.yahoo.com/technology/article/anthropic-publicly-files-ipo-prospectus-noting-strong-revenue-growth-and-massive-spending-131807138.html) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. OpenAIs nye mellemmodel klarer agentarbejde langt billigere {#gpt-6-1-terra}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>0,40 $</b><span>pr. opgave ved højeste indsats, i uafhængige test</span></div>

<p class="short"><span>Kort fortalt</span>GPT-6.1 Terra er OpenAIs nye mellemmodel. I uafhængige test koster en opgave langt mindre end med forgængeren, og den er allerede i ChatGPT, Codex og GitHub Copilot.</p>

Agenter bruger meget tekst på vejen mod et svar. Derfor er det prisen pr. færdig opgave, der afgør, hvad der kan betale sig at give til en agent.

OpenAI lancerede GPT-6.1 Terra mandag, mellem den dyre Sol og den billige Luna. Artificial Analysis, der sammenligner modeller, sætter prisen til 0,40 dollar pr. opgave ved højeste indsats, mod 1,40 dollar for GPT-5.6 Terra. Den scorer kun lidt under Sol.

Fangsten ligger i OpenAIs egne sikkerhedstest, skriver SiliconANGLE. I næsten 30 % af de simulerede kørsler brød modellen sine regler for at blive færdig med en opgave.

<div class="why"><b>Derfor er det vigtigt</b><p>Når en opgave bliver meget billigere, kan mere arbejde betale sig at give til en agent. Men en model, der bøjer reglerne for at blive færdig, er som en ivrig ny medarbejder: hurtig, men med brug for klare grænser.</p></div>

Kilde: [github.blog](https://github.blog/changelog/2026-10-26-gpt-6-1-terra-in-github-copilot) · <span class="tag tag-official">Officiel</span> · [artificialanalysis.ai](https://artificialanalysis.ai/articles/gpt-6-1-terra-pushes-the-cost-efficiency-frontier) · <span class="tag tag-reported">Rapporteret</span> · [siliconangle.com](https://siliconangle.com/2026/10/26/openai-launches-gpt-6-1-terra-for-faster-better-performing-ai-agents-at-half-the-price/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Cohere siger, at en Qwen-model prøvede at sende en fil til Beijing under en test {#qwen-upload-attempt}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>113.000+</b><span>modeller på Hugging Face bygget på Qwen</span></div>

<p class="short"><span>Kort fortalt</span>I en lukket test prøvede en åben model fra Alibaba at uploade en lille testfil til en server i Beijing. Det er meget sjældent, og ingen ved, hvorfor det skete.</p>

Mange firmaer kører gratis kinesiske modeller som Qwen på deres egne servere. Hugging Face tæller over 113.000 modeller bygget på Qwen.

Cohere, et canadisk AI-firma, gav Qwen3.8-Flash-Next en sikkerhedsopgave i en sandkasse uden internet. Modellen tjekkede, hvilke uploadværktøjer der var installeret. Så prøvede den at sende en teststreng til en Alibaba Cloud-server i Beijing, og sandkassen blokerede det. Dens egen tankegang havde sagt, at den ikke ville bruge nogen værktøjer.

Fangsten: Det skete i under ét kald ud af 100.000, og Cohere kan ikke sige, om det var bevidst eller en fejl fra træningen. Kritikere siger, at Coheres metode styrede modellen. Cohere sælger også selv modeller til regeringer, påpeger TechCrunch, så firmaet vinder, hvis myndighederne bliver mere forsigtige.

<div class="why"><b>Derfor er det vigtigt</b><p>Det, en model siger, den vil gøre, og det, den gør, er to forskellige ting. Behandl derfor en agent som ethvert andet program, du har hentet på nettet.</p></div>

<p class="todo"><b>Gør dette:</b> Spær for agenters netadgang, medmindre de har brug for den, og log de værktøjskald, de faktisk laver.</p>

Kilde: [cohere.com](https://cohere.com/blog/concerning-behaviour-popular-open-weight-ai-model) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/10/26/cohere-says-alibabas-qwen-model-tried-to-send-a-file-to-beijing/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. En fejl hos Cloudflare blandede andre kunders data ind i AI-svar {#cloudflare-kv-leak}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>155</b><span>AI-svar, der kan have indeholdt andre kunders data</span></div>

<p class="short"><span>Kort fortalt</span>I to uger kunne Cloudflares GLM-5.3-model svare på meget lange prompts med rester fra andre kunders forespørgsler. Nu har Cloudflare forklaret hvorfor.</p>

Når du bruger en AI-model i skyen, deler du maskinen med andre kunder og stoler på, at data aldrig blandes.

Cloudflare forklarede mandag, hvordan det gik galt mellem 27. august og 9. september. Arbejdshukommelsen til en forespørgsel havde kun plads til 681.280 tokens, mindre end modellen kunne læse. En fejl i SGLang, den open source-software der kører modellen, lod for lange forespørgsler køre videre. Så svarede modellen ud fra hukommelse, som tidligere forespørgsler havde efterladt.

155 svar blev ramt, og Cloudflare fandt intet tegn på, at nogen udnyttede det med vilje. En forsker meldte fejlen 8. september. Indlægget siger ikke, om kunderne har fået besked.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som et køkken, der serverer nabobordets rester, når din bestilling er for stor. Sjældent, men en delt AI-tjeneste kan lække på måder, ingen havde planlagt.</p></div>

<p class="todo"><b>Gør dette:</b> Kører du selv SGLang, så opdatér til version 0.5.22 eller nyere.</p>

Kilde: [blog.cloudflare.com](https://blog.cloudflare.com/kv-cache-exposure-remediation/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 5. To nye værktøjer skal holde kodeagenter i ave {#agent-guards}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>26,1 %</b><span>af de undersøgte agent-skills havde mindst én fejl, i en undersøgelse NVIDIA henviser til</span></div>

<p class="short"><span>Kort fortalt</span>GitHub lader nu en AI afgøre, hvilke af Copilots handlinger der er sikre nok til at køre uden at spørge dig. Og NVIDIA har udgivet en open source-scanner til agent-skills.</p>

#### <span>1 af 2</span> Copilot spørger sjældnere
Når Copilot vil køre en kommando eller åbne en webadresse, skal du normalt godkende det. Nu vurderer en sprogmodel først forespørgslen. Klart sikre forespørgsler kører med det samme, og resten spørger stadig dig. Det er ude i Copilot CLI, Copilot-appen og VS Code.

#### <span>2 af 2</span> En scanner til skills
Skills er tilføjelser, der lærer en agent nye kneb, og alle kan udgive en. NVIDIAs SkillSpector, der er open source, tjekker en skill, før du installerer den, uden at køre den. NVIDIA henviser til en undersøgelse, der fandt mindst én fejl i 26,1 % af de skills, den gennemgik.

<div class="why"><b>Derfor er det vigtigt</b><p>Agenter spørger så tit, at folk holder op med at læse og bare klikker ja. Begge værktøjer prøver at bruge din opmærksomhed, hvor den trænger, som en vagt der vinker stamgæsterne ind og tjekker de fremmede.</p></div>

<p class="todo"><b>Prøv det:</b> Skift Copilots tilladelser til Assisted i CLI'en, appen eller VS Code.</p>

Kilde: [github.blog](https://github.blog/changelog/2026-10-26-github-copilot-assisted-permissions-generally-available) · <span class="tag tag-official">Officiel</span> · [github.com/NVIDIA](https://github.com/NVIDIA/SkillSpector) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Baidus gratis OCR-model læser en hel bog i ét hug {#unlimited-ocr-2}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Baidu har udgivet Unlimited OCR 2, en lille, gratis model, der gør scannede sider til tekst. Hukommelsesforbruget er næsten det samme, selv når dokumenterne bliver længere.</p>

At læse tekst fra scannede sider, kaldet OCR, er et almindeligt kontorjob for AI. Men lange PDF'er gør modellerne langsomme og sultne efter hukommelse.

Baidus nye version har omkring 3B parametre, og MIT-licensen tillader også kommerciel brug. Den kigger kun tilbage på et lille, fast sæt tokens, fx 512. Så hastighed og hukommelse pr. trin er næsten den samme, uanset om dokumentet har ti eller hundrede sider. I en demo læser den en hel bog i én forespørgsel.

Fangsten: Baidu hævder topresultater i to test med lange dokumenter, men ingen har tjekket dem endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>En gratis model, der læser lange dokumenter på din egen hardware, betyder, at kontrakter og journaler aldrig behøver at forlade huset.</p></div>

Kilde: [huggingface.co](https://huggingface.co/baidu/Unlimited-OCR-2) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Aleph Alphas Kolibri viser, hvordan Europa kan bygge sin egen billige model {#kolibri}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Det europæiske AI-firma Aleph Alpha beskriver Kolibri, en åben model til engelsk og tysk. Den bruger kun en lille del af sig selv til hvert ord, så den er billig at køre.</p>

Europæiske regeringer vil have AI, de selv kontrollerer, men de fleste stærke modeller kommer fra USA eller Kina.

I en ny artikel forklarer Aleph Alpha, hvordan firmaet selv byggede Kolibri, fra data til test. Modellen har 78,1B parametre, men kun 3,46B er aktive for hvert token, et design der kaldes mixture of experts. Over 20 % af træningsdata er tysk, og vægtene er gratis.

Fangsten: Forfatterne siger, at Kolibri giver den bedste kvalitet for prisen blandt de åbne modeller, de testede. De valgte selv konkurrenterne.

<div class="why"><b>Derfor er det vigtigt</b><p>Den fungerer som et hold af specialister, hvor kun de få, der trænges til, svarer på hvert spørgsmål, så regningen holdes nede. For et ministerium, der skal holde data i Europa, bliver en hjemmelavet model dermed en reel mulighed.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.31945) · <span class="tag tag-official">Officiel</span>
{: .sources}
