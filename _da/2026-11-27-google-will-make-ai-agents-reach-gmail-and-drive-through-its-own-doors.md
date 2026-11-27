---
title: "Google tvinger AI-agenter til at bruge sine egne døre ind til Gmail og Drive"
summary: "Googles nye vilkår siger, at AI-agenter skal bruge Googles egne MCP-servere til Gmail, Drive og Kalender, og agenter, der går udenom, får en lille kvote fra 1. februar 2027. Desuden: Nvidia sætter servere til Sydøstasien på pause, ChatGPT får én fælles grænse, prompts, der måske er endt hos ByteDance, llama.cpp 1.1 og bias-tests, der overser afvisninger."
date: 2026-11-27 07:00:00 +0100
reviewed: false
checked: false
control: pending
minutes: 7
explained: { main: "api", from: 1, more: ["mcp", "zero-data-retention"] }
today:
  - { t: "Googles nye vilkår tvinger AI-agenter til at bruge Googles MCP-servere til Gmail og Drive.", why: "Alle, der bygger eller bruger en agent, der læser mail." }
  - { t: "Nvidia har efter sigende stoppet servere til Sydøstasien, og S&P kan sænke ratingen.", why: "Alle, der lejer AI-regnekraft." }
  - { t: "ChatGPT tæller snart chat og agentarbejde mod én fælles grænse.", why: "Storbrugere på Plus, Pro og Business." }
  - { t: "En forsker siger, at nogle værter på OpenRouter sendte DeepSeek-prompts videre til ByteDance.", why: "Alle, der sender private data til åbne modeller." }
other_lang_url: /2026/11/27/
items:
  - { n: 1, anchor: "workspace-agents-mcp", signal: big, tracks: [build, general], min: 1.5, source: official, number: "1. februar 2027", number_label: "når agenter uden om Googles MCP-servere får en lille kvote", topic: agent, why: "Agenter får deres egen indgang med måler til din indbakke, så Google kan se dem, tælle dem og tage betaling.", do: "Lader dit værktøj en agent læse Gmail, Drive eller Kalender, så flyt det over på Googles MCP-servere før 1. februar 2027.", steps: { title: "Det ændrer sig for en agent", list: ["Den skal bruge Googles MCP-servere til Workspace", "Gratis brug stopper ved 5.000 kald om dagen", "Fra 1. februar 2027 får direkte API-kald den lille kvote", "Betalt MCP-brug af Gmail, Kalender og Drive koster fra 1. april 2027"] } }
  - { n: 2, anchor: "nvidia-southeast-asia-sp", signal: worth, tracks: [general], min: 1.5, source: reported, number: "24 %", number_label: "af Kinas AI-regnekraft kommer fra datacentre som disse", topic: chips, why: "Regler for, hvem der må bruge en chip, afgør nu, hvor AI-regnekraft bygges, og det når helt ud i prisen for at leje den." }
  - { n: 3, anchor: "chatgpt-shared-limit", signal: worth, tracks: [general], min: 1, source: official, topic: price, why: "Chat og agentopgaver trækker nu fra samme pulje, så meget agentbrug kan give mindre plads til at chatte." }
  - { n: 4, anchor: "openrouter-ark-routing", signal: worth, tracks: [build, general, europe], min: 1.5, source: official, number: "16", number_label: "endpoints fra Novita er fjernet fra OpenRouter", topic: security, why: "Din prompt kan komme forbi firmaer, du aldrig har valgt, og et privatlivsmærke holder kun, hvis de alle overholder det." }
  - { n: 5, anchor: "llama-cpp-1-1", signal: worth, tracks: [build, europe], min: 1, source: official, topic: local, why: "At tale med en model på din egen maskine kræver nu ét gratis program, ikke en stak værktøjer.", do: "Opdatér til llama.cpp 1.1, og prøv den nye side Llama Chat." }
  - { n: 6, anchor: "refusal-not-scored", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "2,15 gange", number_label: "så mange afvisninger for prompts om nordkoreanere som om amerikanere", topic: research, why: "En afvisning er også et svar, og en bias-test, der smider afvisninger væk, kan ikke se, hvem der bliver afvist." }
---

### 1. Google tvinger AI-agenter til at bruge sine egne døre ind til Gmail og Drive {#workspace-agents-mcp}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>1. februar 2027</b><span>når agenter uden om Googles MCP-servere får en lille kvote</span></div>

<p class="short"><span>Kort fortalt</span>Googles nye vilkår siger, at AI-agenter skal bruge Googles egne MCP-servere til Gmail, Drive og de andre Workspace-apps. Fra 1. februar 2027 får agenter, der kalder Googles almindelige API'er direkte, kun en lille gratis kvote.</p>

AI-assistenter, der sorterer din mail eller finder en fil i Drive, bruger ofte Googles API'er (se Forklaret nedenfor). Alle andre apps bruger de samme indgange, så Google kunne ikke let skelne en agent fra en kalender-app.

Det ændrede sig i tirsdags. Google føjede et "AI Tools Addendum" til sine Workspace-vilkår. Et værktøj, der er eller styres af en AI-agent, skal bruge en MCP-server fra Google, og det må ikke skjule, hvad det er. MCP er standarden for, hvordan en assistent bruger værktøjer udefra. Googles MCP-servere til Gmail, Drive, Docs, Sheets, Kalender og andre apps er nu klar til alle.

Der følger en måler med. Det gratis niveau giver 5.000 kald om dagen pr. projekt og pr. app. Fra 1. februar 2027 bliver agenter, der kalder de almindelige API'er direkte, holdt til den gratis kvote. Fra 1. april 2027 koster betalt MCP-brug af Gmail, Kalender og Drive fra første kald.

Udviklerne må heller ikke træne modeller på dine data eller beholde dem, når du fjerner værktøjet.

Fangsten: Google bestemmer selv, hvad der tæller som en agent. Og på de betalte planer betaler agenter fra første kald, mens almindelige apps får store gratis kvoter hver dag.

<div class="why"><b>Derfor er det vigtigt</b><p>Tænk på en kontorbygning, der giver budrobotter deres egen dør med en skranke. Besøgende bliver mere trygge, fordi vagten ser hver robot. Men ejeren kan også tælle hvert besøg og sende regningen.</p></div>

<p class="todo"><b>Gør dette:</b> Lader dit værktøj en agent læse Gmail, Drive eller Kalender, så flyt det over på Googles MCP-servere før 1. februar 2027.</p>

Kilder: [workspace.google.com](https://workspace.google.com/terms/ai-tools) · <span class="tag tag-official">Officiel</span> · [developers.google.com (kvoter)](https://developers.google.com/workspace/tools-safety) · <span class="tag tag-official">Officiel</span> · [developers.google.com (Gmail)](https://developers.google.com/workspace/gmail/api/guides/quotas) · <span class="tag tag-official">Officiel</span> · [techstackups.com](https://techstackups.com/articles/google-workspace-ai-agents-mcp/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Nvidia sætter efter sigende servere til Sydøstasien på pause, og S&P kan sænke ratingen {#nvidia-southeast-asia-sp}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>24 %</b><span>af Kinas AI-regnekraft kommer fra datacentre som disse</span></div>

<p class="short"><span>Kort fortalt</span>Nvidia har bedt sine partnere stoppe leverancer af servere til fire lande i Sydøstasien, skriver Wall Street Journal. Samtidig overvejer S&P at sænke Nvidias kreditvurdering.</p>

I tirsdags skrev vi, at Jensen Huang var tilbage som Nvidias chef. Siden er der dukket to nye problemer op.

#### <span>1 af 2</span> Pause for fire lande
Nvidia har bedt partnere som Dell og Super Micro om at stoppe leverancer af servere til Malaysia, Singapore, Thailand og Indonesien. Firmaet undersøger, om partnerne dér følger de amerikanske eksportregler. Der er ingen slutdato.

Årsagen er et smuthul. Kinesiske firmaer har efter sigende brugt Nvidia-chips i datacentre i de lande over nettet. Tænketanken Institute for Progress anslår, at den slags datacentre leverer 24 % af Kinas AI-regnekraft. USA lukkede smuthullet tidligere på måneden.

#### <span>2 af 2</span> Måske en lavere rating
S&P gennemgår Nvidias kreditvurdering, som kan falde fra AA til AA-. Bureauet peger på svagt tilsyn med ledelsen og manglende plan for en efterfølger efter Huangs exit og comeback. Nvidia har lovet at garantere for 25 % af lånene i en stor finansieringsplan for AI-datacentre.

Fangsten: begge historier kommer via TechCrunch, og Nvidia har ikke kommenteret pausen.

<div class="why"><b>Derfor er det vigtigt</b><p>En chip er kun nyttig der, hvor den må køre. Eksportregler afgør nu, hvor AI-datacentre bliver bygget, og en svagere garanti fra Nvidia gør lånene bag dem dyrere. Begge dele ender i prisen for at leje AI-regnekraft.</p></div>

Kilder: [techcrunch.com (pause)](https://techcrunch.com/2026/11/26/nvidia-hits-pause-on-chip-shipments-to-southeast-asia/) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com (S&P)](https://techcrunch.com/2026/11/25/sp-considers-nvidia-credit-downgrade-over-governance-and-key-man-risks/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. ChatGPT tæller snart chat og agentarbejde mod én fælles grænse {#chatgpt-shared-limit}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>OpenAI slår chat og Work, firmaets værktøjer til større opgaver, sammen i ChatGPT. Begge trækker fra én fælles pulje, og nogle få af de tungeste brugere kan ramme grænsen hurtigere.</p>

Et betalt ChatGPT-abonnement har grænser, men de fleste ser dem aldrig. Det kan ændre sig for nogle.

OpenAIs hjælpeside siger, at puljen bliver delt mellem ChatGPT og Codex, firmaets kodeagent, på Plus, Pro og Business. Det starter i december, og en lille gruppe Pro-brugere har det allerede. Samtaler med Instant-modellen tæller ikke med.

OpenAI siger, at de fleste ikke vil opleve, at grænsen nulstilles oftere. Men "en lille del af de tungeste brugere kan ramme grænsen hurtigere", sagde en talsperson til TechCrunch. Nogle abonnenter frygter, at de får mindre adgang til de stærkere ræsonnerende modeller for samme pris. Anthropic lavede en lignende sammenlægning i september.

<div class="why"><b>Derfor er det vigtigt</b><p>Én fælles måler svarer til en familie, der deler ét mobilabonnement med data: den, der streamer video, bestemmer, hvor meget der er tilbage til resten. Her trækker lange agentopgaver og hurtige chats fra den samme pulje.</p></div>

Kilder: [help.openai.com](https://help.openai.com/en/articles/20001625) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/25/openai-says-heavy-chatgpt-users-may-hit-limits-sooner-as-it-merges-chat-and-work/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. En forsker siger, at nogle værter på OpenRouter sendte DeepSeek-prompts videre til ByteDance {#openrouter-ark-routing}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>16</b><span>endpoints fra Novita er fjernet fra OpenRouter</span></div>

<p class="short"><span>Kort fortalt</span>En forsker har fundet tegn på, at tre firmaer, der kører DeepSeek-modeller på OpenRouter, sendte nogle forespørgsler videre til ByteDances egen AI-tjeneste. Ingen af firmaerne har bekræftet det.</p>

I søndags skrev vi, at prompts var lækket fra firmaer, der kører AI-modeller. OpenRouter, der sender din prompt videre til en af mange værter, smed flere af dem ud. Nu har en forsker fulgt sporet længere.

Forskeren bag kendell.dev sendte testforespørgsler til alle værter af en DeepSeek-model på OpenRouter. Hos Novita, StreamLake og Ant Digital havde svarene ID-formater fra ByteDances tjeneste. Billeder i prompterne blev hentet fra ByteDances sky i Singapore og Beijing. Testdataene ligger offentligt på GitHub.

Værterne havde allerede problemer. OpenRouter fjernede 22. november Ant Digitals mærke for zero data retention (se Forklaret nedenfor). Novita kaldte et tidligere problem med videresendelse et "routing configuration issue", og 16 af firmaets endpoints er siden fjernet.

Fangsten: beviserne er indirekte, ruterne skifter, og forskeren har fået et legat fra OpenRouter.

<div class="why"><b>Derfor er det vigtigt</b><p>At bruge en åben model gennem en router er som at bestille en taxa i en app. Du har valgt firmaet, men du ved måske ikke, hvem der kører. Et løfte om privatliv holder kun, hvis alle led i kæden overholder det.</p></div>

Kilder: [kendell.dev](https://kendell.dev/blog/arkwrapper/) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/KTibow/the-ark-of-deepseek-v4.1-flash/releases/tag/probe-44960395726) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### llama.cpp 1.1 får en chat, man kan tale til, og en offentlig fartmåler for AMD {#llama-cpp-1-1}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>llama.cpp, den gratis motor bag mange lokale AI-apps, har nu en chatside, du kan tale til. Holdet bag har også lanceret et dashboard, der måler farten på AMD-chips.</p>

Version 1.1.0 kom i torsdags. Den indbyggede webside hedder nu Llama Chat. Du kan tale til den, og den viser teksten live. Når en model arbejder som agent, bliver trinene samlet. Versionen tilføjer også nye modeller, flere af dem til stemme.

Samme dag lancerede holdet et offentligt dashboard på Hugging Face. Hver uge tester det farten på to AMD Radeon-chips. Det måler, hvor hurtigt en model læser 512 tokens (orddele) og skriver 128.

Fangsten: dashboardet dækker kun to AMD-chips, og udviklere, der bruger den gamle batch-grænseflade, skal opdatere deres kode.

<div class="why"><b>Derfor er det vigtigt</b><p>At tale med en model på din egen maskine kræver nu ét gratis program, ikke en stak værktøjer. Og folk, der køber AMD, får målte tal i stedet for gæt fra fora.</p></div>

<p class="todo"><b>Prøv det:</b> Opdatér til llama.cpp 1.1, og prøv den nye side Llama Chat.</p>

Kilder: [github.com](https://github.com/ggml-org/llama.cpp/releases/tag/v1.1.0) · <span class="tag tag-official">Officiel</span> · [huggingface.co](https://huggingface.co/blog/ggml-org/llamacpp-amd-bench) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### Bias-tests overser det, når en model bare afviser nogle grupper {#refusal-not-scored}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>
<div class="number"><b>2,15 gange</b><span>så mange afvisninger for prompts om nordkoreanere som om amerikanere</span></div>

<p class="short"><span>Kort fortalt</span>Værktøjer, der tjekker AI-modeller for bias, giver kun point til det, modellen skriver. En ny artikel viser, at de overser det, når en model afviser at svare om nogle grupper oftere end andre.</p>

Før en model bliver udgivet, tjekker testere ofte dens svar for bias. Et tidligt skridt er ofte at fjerne afvisningerne, fordi der ikke er noget at give point.

Afifah Kashif, Malak Sadek, Jin Huang og Hatice Gunes spurgte, hvad det skjuler. De kørte syv bias-værktøjer på to sæt med 360 svar fra tre modeller. Tre af værktøjerne tæller ladede ord, og fire bruger en anden AI-model som dommer.

Én model afviste prompts om nordkoreanere 2,15 gange så ofte som prompts om amerikanere. Ingen af de syv værktøjer opdagede det. En ordliste så ud til at gøre det, men kun fordi "can" i "I can't" stod på listen.

Fangsten: undersøgelsen er lille, og artiklen er ikke fagfællebedømt endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en restaurantinspektør, der bedømmer hver ret, der bliver serveret, men aldrig ser, at nogle gæster bliver afvist ved døren. En afvisning er også et svar, og en test, der smider den væk, kan ikke se, hvem der bliver holdt ude.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.33690) · <span class="tag tag-official">Officiel</span>
{: .sources}
