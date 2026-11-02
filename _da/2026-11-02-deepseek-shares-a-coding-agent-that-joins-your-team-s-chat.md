---
title: "DeepSeek deler en kodeagent, der lytter med i holdets chat"
summary: "DeepSeek har lagt koden til Super-Agent ud: en gratis kodeagent, der følger et teams GitHub og chat og træder til, når nogen beder om det. Desuden: AI-fejlrapporter forsinker Postgres 19, malware der spørger AI, hvad du er værd, nye regler i chatbots og EU's frist for AI-gigafabrikker."
date: 2026-11-02 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "open-source", from: 1, more: ["ai-agent", "prompt-injection"] }
today:
  - { t: "DeepSeek har delt en gratis kodeagent, der arbejder ud fra holdets GitHub og chat.", why: "Udviklere, der jonglerer med flere kodeagenter." }
  - { t: "AI finder så mange fejl, at PostgreSQL 19 sandsynligvis kommer for sent.", why: "Alle, der er nysgerrige på, hvordan AI ændrer den software, de bruger." }
  - { t: "Et program, der stjæler adgangskoder, beder AI-modeller vurdere, hvad ofrene er værd.", why: "Alle med adgangskoder eller krypto på en Windows-pc." }
  - { t: "Claude bygger ikke længere kendte spil efter, og ChatGPT begrænser betalte konti pr. enhed.", why: "Alle, der laver spil med AI eller deler et ChatGPT-abonnement." }
  - { t: "Fristen for bud på EU's AI-gigafabrikker er 12. november.", why: "Alle, der går op i, hvor Europas AI skal køre." }
other_lang_url: /2026/11/02/
items:
  - { n: 1, anchor: "deepseek-super-agent", signal: big, tracks: [build, general], min: 1.5, source: official, number: "30 %", number_label: "lavere succes for kodeagenter, der arbejder som hold, i et tidligere studie", topic: agent, why: "Det knappe er ikke længere AI'ens tid, men din, så agenterne vil konkurrere på, hvor lidt de forstyrrer.", do: "Udviklere kan læse koden og opsætningsguiden på GitHub, som forskningskode." }
  - { n: 2, anchor: "postgres-19-late", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "1.169", number_label: "rettelser til den nyeste udgivelsesgren i år, op fra 724", topic: code, why: "AI gør software bedre tjekket, men køen flytter over til de mennesker, der gennemgår rettelserne." }
  - { n: 3, anchor: "volta-infostealer", signal: worth, tracks: [general], min: 1, source: official, topic: security, why: "Det hjælper ikke, at én model siger nej, når den næste kun er én kodelinje væk.", do: "Gem adgangskoder og wallet-sætninger i en adgangskodemanager eller et hardwarelager, ikke i almindelige filer.", steps: { title: "Sådan bruger VOLTA AI", list: ["Stjæler adgangskoder, kort og krypto-wallets", "Sender en rapport til en AI-model", "Modellen vurderer, hvad der er mest værd", "Siger den nej, prøver den næste model"] } }
  - { n: 4, anchor: "chatbot-rule-changes", signal: worth, tracks: [general], min: 1, source: reported, topic: business, why: "Reglerne omkring en chatbot afgør nu, hvad du kan lave med den, og hvad du betaler." }
  - { n: 5, anchor: "eu-ai-gigafactories", signal: quick, tracks: [europe, general], min: 1, source: official, number: "10 mia. euro", number_label: "fra EU og medlemslandene til Europas AI-gigafabrikker", topic: chips, why: "Europa vil have AI-computere, det selv styrer, også selvom de koster mere og tager længere tid." }
  - { n: 6, anchor: "strata-0-2-9", signal: worth, tracks: [build], min: 1, source: official, number: "1.424", number_label: "tokens i sekundet, når en Strix Halo-pc læser en lang prompt, op fra 791", topic: local, why: "Ventetiden før første ord er det, du mærker ved lange dokumenter, og den er blevet kortere." }
  - { n: 7, anchor: "llmon", signal: worth, tracks: [build, general], min: 1, source: official, number: "5,6 %", number_label: "lykkedes angrebene højst efter træningen, ned fra helt op til 100 %", topic: research, why: "Agenters sikkerhed kan komme fra, hvordan modellen trænes, ikke kun fra filtre foran den." }
---

### 1. DeepSeek deler en kodeagent, der lytter med i holdets chat {#deepseek-super-agent}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>30 %</b><span>lavere succes for kodeagenter, der arbejder som hold, i et tidligere studie</span></div>

<p class="short"><span>Kort fortalt</span>DeepSeek har lagt koden til Super-Agent ud: en gratis kodeagent, der følger et teams GitHub og chat og træder til, når nogen beder om det. Det er en forskningsprototype, ikke et produkt.</p>

Nutidens kodeagenter venter på dig. Du skriver en opgave og ser på. Kører du flere ad gangen, bliver du den, der deler arbejdet ud og tjekker det.

Det vil det kinesiske AI-firma DeepSeek vende om. Super-Agent holder øje med ét GitHub-projekt og, hvis du vil, arbejdschatten Feishu. Når en godkendt person beder om noget, opretter den en opgave og løser den selv. Derefter svarer den i samme tråd, for eksempel med et forslag til en kodeændring.

Manualen har ét mål: "take as little human attention as possible" (brug så lidt menneskelig opmærksomhed som muligt). Agenten handler kun, når nogen beder om det, eller når en regel fra holdet tillader det. Koden er gratis under MIT-licensen, og ifølge Bloomberg sigter DeepSeek mod Claude Code.

Et nyt design er værd at prøve. I et studie fra januar lykkedes kodeagenter, der arbejdede som hold, cirka 30 % sjældnere end agenter, der arbejdede alene. Super-Agent var ikke med i den test.

Fangsten: DeepSeek kalder den en "research prototype" og "not an official DeepSeek product". Kodeagenter har skrevet meget af koden.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er open source, så alle må læse, ændre og dele koden. Tænk på en kollega, der læser holdets chat og selv tager sine opgaver. Det er noget andet end en håndværker, du skal ringe til hver morgen. Det knappe er ikke længere AI'ens tid, men din, så agenterne vil konkurrere på, hvor lidt de forstyrrer.</p></div>

<p class="todo"><b>Prøv det:</b> Udviklere kan læse koden og opsætningsguiden på GitHub, som forskningskode.</p>

Kilde: [github.com](https://github.com/deepseek-ai/dsh-superagent-prototype) · <span class="tag tag-official">Officiel</span> · [thenextweb.com](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. AI finder så mange fejl, at Postgres 19 er forsinket {#postgres-19-late}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>1.169</b><span>rettelser til den nyeste udgivelsesgren i år, op fra 724</span></div>

<p class="short"><span>Kort fortalt</span>PostgreSQL, en af de mest brugte databaser, kommer sandsynligvis først med version 19 i november i stedet for som normalt i efteråret. En af kerneudviklerne siger, at AI-værktøjer fandt fejl hurtigere, end folk kunne rette dem.</p>

PostgreSQL gemmer data bag et kæmpe antal apps. Nye versioner kommer normalt senest i midten af oktober.

I år bliver det højst sandsynligt november, skriver Robert Haas, der har udviklet på Postgres i mange år. Hans svar på hvorfor: "LLMs happened" (sprogmodellerne kom). Folk bruger nu AI til at lede efter fejl i koden, og de finder mange.

Fra april til slutningen af september steg rettelserne til den nyeste udgivelsesgren fra 724 sidste år til 1.169 i år. Tre store funktioner blev taget ud sent i testen.

Fangsten ligger i at rette fejlene. AI's forslag til rettelser er ikke altid rigtige, så et menneske skal stadig gennemgå hver eneste. Og tid, der skulle bruges på at gennemgå udgivelsen, gik til at rette gamle fejl.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en røgalarm, der pludselig hører hver eneste gnist. Huset bliver mere sikkert, men nogen skal stadig tjekke hvert rum. AI gør software bedre tjekket, men køen flytter over til de mennesker, der gennemgår rettelserne. Haas siger, at alle Postgres-udviklere må "raise their game" (hæve niveauet).</p></div>

Kilde: [rhaas.blogspot.com](https://rhaas.blogspot.com/2026/10/postgres-19-is-late-and-its-ais-fault.html) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. Malware spørger AI-modeller, hvad en stjålet computer er værd {#volta-infostealer}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>Sikkerhedsforskere hos Cisco Talos har fundet et program, der stjæler adgangskoder og sender byttet til en AI-model. Modellen rangerer, hvilke af offerets konti og wallets der er mest værd.</p>

Programmer, der stjæler adgangskoder, er ikke nye. Det svære for kriminelle er at sortere tusindvis af stjålne logins og finde dem, der kan betale sig.

VOLTA giver den opgave til AI. Programmet tager adgangskoder, betalingskort og krypto-wallets fra Windows-pc'er. Så sender det en rapport til en AI-model, der skal spille "a forensic intelligence analyst" (en efterforsker). Svaret har et afsnit, der hedder "WHAT THEY'RE WORTH" (hvad de er værd).

Først prøver det Claude Opus 4.6. Siger den model nej, går det videre til Kimi K2 og derefter Gemini 2.5 Flash.

Fangsten: AI'en stjæler ikke noget. Skaden er sket, før modellen bliver spurgt.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en indbrudstyv, der ringer efter en vurderingsmand efter indbruddet. Det hjælper ikke, at én model siger nej, når den næste kun er én kodelinje væk.</p></div>

<p class="todo"><b>Gør dette:</b> Gem adgangskoder og wallet-sætninger i en adgangskodemanager eller et hardwarelager, ikke i almindelige filer.</p>

Kilde: [blog.talosintelligence.com](https://blog.talosintelligence.com/appraisal-by-ai-model-driven-victim-prioritization-in-the-volta-infostealer/) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 4. Claude kopierer ikke længere kendte spil, og ChatGPT begrænser konti pr. enhed {#chatbot-rule-changes}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>To chatbots har ændret deres regler i weekenden. Claude afviser nu at genskabe et bestemt eksisterende spil, og ChatGPT sætter loft over, hvor mange betalte konti én enhed eller ét kort må bruge.</p>

#### <span>1 af 2</span> Claude siger nej til spilkopier
Folk har brugt AI til at bygge kendte spil som Halo efter i browseren. Claudes retningslinjer siger nu: "Do not build a recreation of a specific existing game" (byg ikke en kopi af et bestemt eksisterende spil). Egne spil og spil ud fra dine egne tegninger er stadig i orden, skriver Engadget.

#### <span>2 af 2</span> ChatGPT tæller dine enheder
ChatGPT begrænser nu antallet af betalte konti pr. enhed og pr. betalingskort, skriver The Decoder med henvisning til OpenAIs hjælpeside. Rammer du loftet, ser du "Device limit reached". Artiklen nævner ingen præcise grænser, og OpenAI peger i stedet på at købe ekstra kreditter.

<div class="why"><b>Derfor er det vigtigt</b><p>Modellerne kan stadig begge dele. Det, der har ændret sig, er reglerne omkring dem. Det er som en kopibutik, der vil printe alt undtagen en hel bog. Maskinen er den samme, men husets regler bestemmer, hvad du kan lave, og hvad du betaler.</p></div>

Kilde: [engadget.com](https://engadget.com/2303469/anthropic-updates-claude-to-stop-it-from-recreating-existing-video-games) · <span class="tag tag-reported">Rapporteret</span> · [the-decoder.com](https://the-decoder.com/openai-is-steering-chatgpt-users-toward-more-paid-usage/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. Fristen for bud på EU's AI-gigafabrikker er 12. november {#eu-ai-gigafactories}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Europa</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>10 mia. euro</b><span>fra EU og medlemslandene til Europas AI-gigafabrikker</span></div>

<p class="short"><span>Kort fortalt</span>EU's udbud af kæmpestore AI-datacentre, som EU kalder gigafabrikker, lukker 12. november. Op til 10 mia. euro i offentlige penge skal trække 20 mia. euro mere med fra private investorer.</p>

EU siger, at det er afhængigt af lande uden for EU for over 80 % af de vigtigste digitale produkter, tjenester og infrastruktur. AI-computere er en del af det.

Gigafabrikkerne er svaret: meget store centre til at træne og køre AI-modeller. Firmaer og investorer kan byde sammen, og de fleste EU-lande, Danmark iblandt, køber ind i fællesskab.

Fangsten: beslutningerne kommer omkring starten af 2027, og derefter skal anlæggene bygges.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en by, der bygger sit eget kraftværk i stedet for at købe strøm hos naboen. Europa vil have AI-computere, det selv styrer, også selvom de koster mere og tager længere tid.</p></div>

Kilde: [digital-skills-jobs.europa.eu](https://digital-skills-jobs.europa.eu/en/latest/news/eu-ai-gigafactories-call-open-until-12-november-targeting-over-eu30-billion-investment) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### En gratis opdatering får store lokale modeller til at læse prompts meget hurtigere {#strata-0-2-9}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>1.424</b><span>tokens i sekundet, når en Strix Halo-pc læser en lang prompt, op fra 791</span></div>

<p class="short"><span>Kort fortalt</span>Strata, en gratis app til at køre store AI-modeller derhjemme, læser nu lange prompts meget hurtigere på AMD's Strix Halo-minipc'er. Den kan også køre en 1-bit-udgave af DeepSeek.</p>

Før en model skriver et ord, skal den læse hele din prompt. Derhjemme, med et langt dokument, tager det tid.

Strata kører Qwen- og DeepSeek-modeller på din egen pc. I version 0.2.9 læser en Strix Halo-pc en lang prompt med 1.424 tokens i sekundet, op fra 791. Skrivefarten er cirka den samme. Opdateringen kan også køre 1-bit-udgaver af DeepSeek.

Fangsten: tallene kommer fra projektets egne test, og udgivelsessiden nævner ingen licens.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en kollega, der skimmer meget hurtigere, men skriver i samme tempo. Ved lange dokumenter og chathistorikker er det ventetiden før første ord, du mærker, og den er blevet kortere.</p></div>

Kilde: [github.com](https://github.com/Niko1221/Strata/releases/tag/v0.2.9) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### En model, der lærer at skelne ordrer fra data, stopper næsten prompt injection {#llmon}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>5,6 %</b><span>lykkedes angrebene højst efter træningen, ned fra helt op til 100 %</span></div>

<p class="short"><span>Kort fortalt</span>Forskere trænede små modeller til kun at følge tydeligt markerede instrukser. De fleste angreb gemt i websider og filer holdt op med at virke.</p>

AI-agenter læser mails, websider og filer. Prompt injection gemmer en ordre i den tekst, og mange modeller adlyder den, fordi de behandler hvert ord ens.

Basel Shbita og kolleger prøvede at løse det i træningen. Deres metode, LLMON, markerer, hvilke dele af input der er instrukser, og hvilke der kun er data. Modellen lærer kun at handle på markerede instrukser.

I test med skjulte angreb faldt andelen af vellykkede angreb fra mellem 53 % og 100 % til højst 5,6 %. Forfatterne siger, at modellerne beholdt deres generelle evner.

Fangsten: det er en preprint, kun testet på små modeller, og input skal være markeret på den måde.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en bankassistent, der kun handler på stemplede blanketter, ikke på sedler, der er stukket ind i kuverten. Holder det på større modeller, kan agenters sikkerhed komme fra, hvordan modellen trænes, ikke kun fra filtre foran den.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.38120) · <span class="tag tag-official">Officiel</span>
{: .sources}
