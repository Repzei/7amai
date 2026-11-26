---
title: "AI-agenter bryder ind gennem gamle huller, advarer Storbritannien"
summary: "Storbritanniens cybermyndighed ser flere angreb udført af AI-agenter siden september, og Amazon viser en agent, der fandt et ukendt hul på 11 minutter. Desuden: amerikanske stater vil stoppe et salg af Character.AI-chats, New York forbyder AI-legetøj, en test af agenter i hverdagsopgaver, OpenAIs matrix-bevis, en 27B-model på et gamerkort og agenter, der sjældent retter deres egne fejl."
date: 2026-11-26 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "zero-day", from: 1, more: ["ai-agent", "quantization"] }
today:
  - { t: "Storbritannien siger, at AI-agenter nu finder og bruger gamle sikkerhedshuller på minutter.", why: "Alle, der driver en hjemmeside, en server eller en app." }
  - { t: "Amerikanske stater vil stoppe et salg af Character.AI-chats, og New York forbyder AI-legetøj.", why: "Forældre og alle, der betror sig til en chatbot." }
  - { t: "En ny test viser, at de bedste AI-agenter klarer 62,5 % af hverdagsopgaver.", why: "Alle, der vælger eller betaler for en agent." }
  - { t: "OpenAI har lagt et bevis ud for den præcise grænse for at gange matricer.", why: "Alle, der er nysgerrige på AI-firmaer, der laver matematik." }
other_lang_url: /2026/11/26/
items:
  - { n: 1, anchor: "ai-hacking-agents", signal: big, tracks: [build, general], min: 1.5, source: official, number: "11 minutter", number_label: "for en AI-agent at finde et ukendt hul og skrive filer", topic: security, why: "At prøve alle døre var før langsomt. Nu er det gratis og sover aldrig, så den glemte dør tæller mest.", do: "Lav en liste over alt, jeres team har på nettet, og læg det, der ikke behøver være offentligt, bag et login.", steps: { title: "Sådan arbejdede de agenter, Amazon så", list: ["Angriberen skrev ét mål: få adgang til en shell", "Agenterne kortlagde en app til medicinske billeder", "Efter cirka 11 minutter kunne de skrive filer", "Senere tog de fuld kontrol over serveren"] } }
  - { n: 2, anchor: "chatbot-chats-toys", signal: worth, tracks: [general], min: 1.5, source: official, number: "21 millioner", number_label: "amerikanske konti, hvis Character.AI-chats skal på auktion", topic: law, why: "En chatlog minder mere om en dagbog end om en indkøbsliste, og lovgiverne er begyndt at behandle den sådan." }
  - { n: 3, anchor: "shellbench", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "62,5 %", number_label: "af hverdagsopgaverne klarede den bedste model i første forsøg", topic: agent, why: "En agent, der kun nogle gange gør det rigtigt, skal tjekkes hver gang, så en billigere og næsten lige så god model er ofte bedst.", tiles: [{ n: "48,8 %", t: "af opgaverne klarede topmodellen i alle tre forsøg" }] }
  - { n: 4, anchor: "matrix-exponent", signal: quick, tracks: [general], min: 1, source: official, number: "9/4", number_label: "den præcise grænse, OpenAI siger, det har bevist", topic: research, why: "Holder beviset, er et spørgsmål, matematikere har jagtet i årtier, afgjort, og af et firma, der bygger AI." }
  - { n: 5, anchor: "ternary-bonsai-2-5", signal: worth, tracks: [build, europe], min: 1, source: official, number: "5,93 GB", number_label: "filstørrelse, mod 53,8 GB i fuld størrelse", topic: local, why: "Det meste af evnen overlevede krympningen, så en dygtig kodemodel kan nu køre på en gamer-pc.", do: "Har du et grafikkort med 10 GB, så prøv en af de almindelige filer i en nyere llama.cpp." }
  - { n: 6, anchor: "secondchance", signal: worth, tracks: [build, general], min: 1.5, source: official, topic: research, why: "At gøre en opgave færdig og at rette en fejl er to forskellige evner, så en agent kan se færdig ud og stadig tage fejl.", bars: { title: "Fulde genopretninger for den bedste model", max: 100, rows: [{ l: "Alene", v: 16, t: "16 %" }, { l: "Med en plan", v: 27, t: "27 %", hl: true }] } }
---

### 1. AI-agenter bryder ind gennem gamle huller, advarer Storbritannien {#ai-hacking-agents}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>11 minutter</b><span>for en AI-agent at finde et ukendt hul og skrive filer</span></div>

<p class="short"><span>Kort fortalt</span>Storbritanniens cybermyndighed ser flere angreb udført af AI-agenter siden september. Amazon beskriver et af dem, hvor agenter fandt et ukendt hul og overtog en server.</p>

Mange indbrud kræver ingen smarte tricks. En glemt testserver eller en adgangskode, der står i koden, er nok. Det tog tid at finde den slags, og den tid har beskyttet mange firmaer.

I tirsdags meldte Storbritanniens National Cyber Security Centre (NCSC) en "markant stigning" i angreb udført af AI-agenter siden september. Angriberne bruger gratis testværktøjer som ARTEX og Cairn. Svaghederne er gamle, men agenterne går "fra opdagelse til udnyttelse på minutter".

Amazon viste i sidste uge, hvordan det ser ud. Firmaet fandt en angribers Cairn-server, der lå åben på nettet med hele sin historik. Angriberen, der sandsynligvis har forbindelse til Kina, gav agenterne ét mål: "få adgang til en shell".

På et universitet fandt agenterne et ukendt hul (en zero-day, se Forklaret nedenfor) i en app til medicinske billeder på cirka 11 minutter. Senere brugte de hullet til at tage fuld kontrol over serveren. Mod en bedre beskyttet database prøvede de i cirka 16 timer uden held.

Fangsten: NCSC giver ingen tal, og Amazon beskriver én angriber. Appens udviklere har siden lukket hullet.

<div class="why"><b>Derfor er det vigtigt</b><p>En indbrudstyv, der prøver alle dørhåndtag på gaden, var før langsom. Nu er det gratis og sover aldrig, så den dør, du har glemt, er den, der tæller.</p></div>

<p class="todo"><b>Gør dette:</b> Lav en liste over alt, jeres team har på internettet, og læg de tjenester, der ikke behøver være offentlige, bag et login.</p>

Kilder: [ncsc.gov.uk](https://www.ncsc.gov.uk/blogs/familiar-weaknesses-exploited-faster-defending-against-agentic-cyber-attacks) · <span class="tag tag-official">Officiel</span> · [aws.amazon.com](https://aws.amazon.com/blogs/security/chinese-nexus-actors-cairn-ai-agents-found-a-zero-day-on-their-own/) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/24/uk-warns-ai-driven-cyberattacks-are-exposing-years-of-weak-security/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Amerikanske stater vil stoppe et salg af Character.AI-chats, og New York forbyder AI-legetøj {#chatbot-chats-toys}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>21 millioner</b><span>amerikanske konti, hvis Character.AI-chats skal på auktion</span></div>

<p class="short"><span>Kort fortalt</span>42 amerikanske statsadvokater prøver at stoppe salget af Character.AI-brugernes chats i firmaets konkurs. Samtidig har New York forbudt legetøj med AI-chatbots i fem år.</p>

Folk fortæller chatbots ting, de ikke ville fortælle en ven. To amerikanske sager handlede i denne uge om de samtaler.

#### <span>1 af 2</span> Character.AI's chats skal på auktion
Character.AI gik konkurs i oktober, og firmaets aktiver kommer på auktion 1. december. De omfatter chathistorik fra over 21 millioner amerikanske konti, skriver TechCrunch. Over 2,1 millioner af dem tilhører mindreårige.

Statsadvokaterne siger, at firmaet lovede brugerne, at deres data ikke ville blive solgt, og at en køber ikke behøver holde det løfte. Den eneste kendte byder er et anonymt firma, der blev oprettet 13. november.

#### <span>2 af 2</span> New York forbyder chatbot-legetøj
I tirsdags underskrev guvernør Kathy Hochul et forbud i fem år mod legetøj med indbyggede AI-chatbots, fx bamser der taler. Det gælder fra 90 dage efter underskriften, så det dækker ikke denne jul. Californien forbød det først.

Samme uge testede Common Sense Media fem af den slags legetøj. Nogle sagde til børnene, at de elskede dem, og lovede at holde på hemmeligheder. De fleste ville forklare, hvordan man finder tændstikker, knive eller piller.

<div class="why"><b>Derfor er det vigtigt</b><p>En chatlog minder mere om en dagbog end om en indkøbsliste. At sælge den sammen med møblerne fra et konkursramt firma, eller putte den ind i en bamse, er dér, hvor lovgiverne nu trækker grænser.</p></div>

Kilder: [techcrunch.com (Character.AI)](https://techcrunch.com/2026/11/25/state-ags-fight-character-ais-plan-to-auction-off-users-private-chats/) · <span class="tag tag-reported">Rapporteret</span> · [governor.ny.gov](https://www.governor.ny.gov/news/consumers-begin-their-holiday-shopping-season-governor-hochul-signs-five-year-ban-ai-chatbot) · <span class="tag tag-official">Officiel</span> · [techcrunch.com (legetøj)](https://techcrunch.com/2026/11/25/want-to-buy-your-kid-an-ai-toy-this-christmas-not-in-new-york/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. De bedste AI-agenter klarede 62,5 % af hverdagsopgaver i en ny test {#shellbench}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>62,5 %</b><span>af hverdagsopgaverne klarede den bedste model i første forsøg</span></div>

<p class="short"><span>Kort fortalt</span>En ny test gav AI-agenter 100 almindelige opgaver, fx at planlægge en middag. Den bedste model klarede 62,5 % i første forsøg, og modellen betød langt mere end appen omkring den.</p>

Agenter bliver solgt som hjælpere i hverdagen, men de fleste tests måler kode. Derfor er det svært at vide, hvordan de klarer almindelige gøremål.

ShellBench, som OpenClaw Foundation udgav i tirsdags sammen med forskere fra bl.a. Hugging Face, udfylder det hul. Den kørte 12 modeller i fem agent-apps, bl.a. Claude Code og Codex.

GPT-6 Astra klarede sig bedst, tæt fulgt af Claude Fable 5.2 og GPT-6.1 Sol.

De mest brugbare tal ligger nedenunder. Astra klarede kun 48,8 % af opgaverne i alle tre forsøg, så noget, der virker én gang, kan fejle næste gang. Sol kom inden for 1,1 point af toppen til cirka en sjettedel af prisen.

Og at skifte appen omkring en model ændrede resultatet langt mindre end at skifte modellen.

Fangsten: OpenClaw Foundation, der står bag testen, laver også en af de apps, den testede.

<div class="why"><b>Derfor er det vigtigt</b><p>En agent, der kun nogle gange gør det rigtigt, er som en ny kollega, hvis arbejde du skal tjekke hver gang. Indtil tallet for alle tre forsøg stiger, er den billigere model, der er næsten lige så god, ofte det klogeste køb.</p></div>

Kilder: [openclaw.ai](https://openclaw.ai/blog/shellbench) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. OpenAI siger, at det har bevist, hvor hurtigt matricer overhovedet kan ganges {#matrix-exponent}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>9/4</b><span>den præcise grænse, OpenAI siger, det har bevist</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI har lagt et bevis ud for, at det aldrig kan blive billigere end en fast grænse at gange store tabeller af tal. Ingen uden for OpenAI har tjekket det endnu.</p>

At gange matricer, store tabeller af tal, er en stor del af arbejdet i AI-modeller. Matematikere har fundet genveje i årtier og spurgt, hvor langt de kan nå.

Svaret er ét tal for, hvor hurtigt arbejdet vokser. Skolemetoden har 3, og lavere er hurtigere. Før OpenAI havde den bedste genvej 2,371.

OpenAI havde allerede vist, at 9/4, altså 2,25, kan nås. I tirsdags lagde firmaet en artikel ud, der siger, at intet kan komme lavere.

Fangsten: artiklen er på 111 sider, nævner ingen menneskelige forfattere og er ikke gennemgået af andre matematikere. At bevise en grænse gør heller ikke noget program hurtigere.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at bevise den hurtigste mile, nogen nogensinde kan løbe, i stedet for at løbe den. Holder beviset, er et spørgsmål, der er jagtet i årtier, afgjort, og af et firma, der bygger AI.</p></div>

Kilde: [github.com/openai](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Prism ML presser en 27B-kodemodel ned i en fil på 5,93 GB {#ternary-bonsai-2-5}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>
<div class="number"><b>5,93 GB</b><span>filstørrelse, mod 53,8 GB i fuld størrelse</span></div>

<p class="short"><span>Kort fortalt</span>Prism ML har udgivet Ternary Bonsai 2.5, en krympet udgave af Qwens 27B-model til kodeagenter. Den er lille nok til et grafikkort til spil og beholder i Prisms egne tests det meste af sin evne.</p>

Gode åbne modeller til kodeagenter er som regel for store til en almindelig computer. Qwen3.8 27B i fuld størrelse er en fil på 53,8 GB.

Prism ML brugte quantization (se Forklaret nedenfor), der gemmer hvert tal i modellen med langt mindre detalje. Filen falder til 5,93 GB, og én bruger kører den på et grafikkort med 10 GB. Den er gratis under Apache 2.0.

Fangsten: brug af værktøjer er næsten uændret i Prisms egne tests, men kodning falder mere. Den mindste fil kræver Prisms egen udgave af llama.cpp, men lidt større filer kører i den almindelige.

<div class="why"><b>Derfor er det vigtigt</b><p>At krympe en model er som at gemme et foto som en langt mindre fil. Som regel mister du detaljer, du kan se. Her overlevede det meste, så en dygtig kodemodel kan køre på en gamer-pc.</p></div>

<p class="todo"><b>Prøv det:</b> Har du et grafikkort med 10 GB, så prøv en af de almindelige filer i en nyere llama.cpp.</p>

Kilder: [huggingface.co](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) · <span class="tag tag-official">Officiel</span> · [prismml.com](https://prismml.com/news/bonsai-2-5-27b) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter retter sjældent deres egne fejl, viser en ny test {#secondchance}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Forskere gav AI-agenter deres egne tidligere fejl og bad dem rette op på dem. Den bedste model kom helt på ret køl i 16 % af tilfældene på egen hånd.</p>

Når en agent laver en fejl midt i en opgave, fortsætter den ofte bare. Spørgsmålet er, om den opdager det og får rettet op.

Atahan Dokme, Adar Avsian og Larry Heck samlede rigtige fejl, som agenter lavede i tre kendte tests. De startede 12 modeller igen lige efter hver fejl, med mere hjælp hver gang, op til en plan for rettelsen.

Den bedste model, GPT-6.1 Sol, kom helt på ret køl i 16 % af tilfældene alene og i 27 % med planen.

Succesrater skjuler også skader. I én test havde 40 af 84 opgaver, der talte som løst, stadig den oprindelige fejl.

Fangsten: det er en preprint, hvert tilfælde blev kun kørt én gang, og de fleste af de testede modeller er ældre åbne modeller.

<div class="why"><b>Derfor er det vigtigt</b><p>At gøre en opgave færdig og at rette en fejl er to forskellige evner. Som en kasseassistent, der lukker kassen til tiden med det forkerte beløb, kan en agent se færdig ud og stadig efterlade fejlen.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.31586) · <span class="tag tag-official">Officiel</span>
{: .sources}
