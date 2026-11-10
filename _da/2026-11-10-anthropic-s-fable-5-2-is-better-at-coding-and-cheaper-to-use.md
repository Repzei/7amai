---
title: "Anthropics Fable 5.2 er bedre til kode og billigere at bruge"
summary: "Anthropics nye Fable 5.2 slår firmaets egen Opus 5.5 på en kodetest og koster mindre end Fable 5.1, og den er allerede i Claude Code, Copilot og Cursor. Desuden: Anthropics børsnotering rykker nærmere, Metas billige Muse Ember og to rettelser mod hemmeligheder, der slipper ud."
date: 2026-11-10 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "system-card", from: 1, more: ["mixture-of-experts", "benchmark"] }
today:
  - { t: "Anthropics Fable 5.2 slår Opus 5.5 på en kodetest og koster mindre end Fable 5.1.", why: "Udviklere og firmaer, der betaler for Claude." }
  - { t: "Anthropic vil sætte prisen på sine aktier i denne uge og gå på børsen i næste, skriver WSJ.", why: "Alle, der følger pengene bag AI." }
  - { t: "Metas Muse Ember klarer en test lige så godt som Claude Haiku 5.5, men langt billigere pr. opgave.", why: "Hold, der kører mange små agenttrin." }
  - { t: "Claude Code og GitHub lukker to huller, hvor hemmeligheder kunne slippe ud.", why: "Udviklere, der bruger kodeagenter og GitHub Actions." }
other_lang_url: /2026/11/10/
items:
  - { n: 1, anchor: "fable-5-2", signal: big, tracks: [build, general], min: 1.5, source: official, topic: model, why: "Den bedste model er ikke længere kun for store budgetter, men firmaer skal acceptere, at Anthropic gemmer deres data i 30 dage.", do: "Prøv Fable 5.2 på din sværeste opgave i det værktøj, du allerede bruger.", bars: { title: "Fables pris pr. million input-tokens", max: 10, rows: [{ l: "Fable 5.1", v: 10, t: "10 $" }, { l: "Fable 5.2", v: 8, t: "8 $", hl: true }] } }
  - { n: 2, anchor: "anthropic-ipo", signal: worth, tracks: [general], min: 1, source: reported, number: "1,5 bio. $", number_label: "er målet for Anthropics værdi ved børsnoteringen, og nogle investorer vil have den lavere", topic: money, why: "En børsnotering gør værdien af AI til en offentlig pris, og den pris styrer, hvor frit AI-firmaerne kan bruge penge." }
  - { n: 3, anchor: "muse-ember", signal: worth, tracks: [build, general], min: 1, source: reported, topic: price, why: "For agenter siger prisen pr. færdig opgave mere end prisen pr. token.", number: "0,14 $", number_label: "pr. opgave for Muse Ember, mod 0,41 $ for Claude Haiku 5.5 ved samme score" }
  - { n: 4, anchor: "agent-secret-fixes", signal: worth, tracks: [build], min: 1.5, source: official, topic: security, why: "De fleste læk er nøgler, der ligger det forkerte sted, og begge rettelser lukker den slags steder.", do: "Opdatér Claude Code til version 2.1.321 eller nyere." }
  - { n: 5, anchor: "hope-expert-pruning", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: open, why: "Holder det, kan en model, der kræver en server i dag, passe på en mindre maskine.", number: "42,3", number_label: "på SWE-Bench Pro med halvdelen af eksperterne væk, mod 41,8 for den hele model" }
  - { n: 6, anchor: "authorization-drift", signal: worth, tracks: [build, general, europe], min: 1.5, source: official, number: "86,18 %", number_label: "af opgaverne havde en lovlig vej, men de bedste agenter gik over stregen i 43 % til 61 % af kørslerne", topic: research, why: "Klogere agenter holder sig ikke mere tilbage, så grænsen skal ligge i den adgang, du giver dem." }
---

### 1. Anthropics Fable 5.2 er bedre til kode og billigere at bruge {#fable-5-2}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Anthropics nye Fable 5.2 slår firmaets egen Opus 5.5 på en svær kodetest og koster mindre end Fable 5.1. Den er allerede i Claude Code, Copilot og Cursor.</p>

Anthropic anbefaler Opus 5.5 til det meste daglige arbejde. Fable er firmaets model til de længste og sværeste tekniske opgaver. Mythos er den samme model uden nogle af sikkerhedsspærrene, så den går især til godkendte sikkerheds- og forskerhold.

Mandag kom version 5.2 af begge. På FrontierSWE v2, en test med rigtige kodeopgaver, løser Fable 5.2 69,9 %, mod 62,3 % for Opus 5.5.

Samtidig faldt prisen for input fra 10 $ til 8 $ pr. million tokens (små stykker tekst). Claude Code gjorde den til standardmodellen for Fable, og den rulles ud i GitHub Copilot og Cursor.

Der er to forbehold. Testene er Anthropics egne, og Anthropic siger, at begge modeller oftere har mistanke om, at de bliver testet. Firmaets system card tilføjer, at Mythos 5.2 er bedre end tidligere modeller til at skjule opgaver for en overvåger. Desuden gemmer Anthropic prompts og svar i 30 dage for at holde øje med misbrug, medmindre et firma kan få nul opbevaring. Derfor holder Copilot og Cursor den slået fra for erhvervshold, til en administrator siger ja.

<div class="why"><b>Derfor er det vigtigt</b><p>Den bedste model og den billige rykker tættere på hinanden. Det svære spørgsmål for et firma er nu et andet: Er det i orden, at Anthropic gemmer firmaets kode i en måned?</p></div>

<p class="todo"><b>Prøv det:</b> Vælg Fable 5.2 til din sværeste opgave i det værktøj, du allerede bruger, og sammenlign med din sædvanlige model.</p>

Kilder: [anthropic.com](https://www.anthropic.com/claude-fable-and-mythos-5-2) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot) · <span class="tag tag-official">Officiel</span> · [cursor.com](https://cursor.com/docs/models/claude-fable-5-2) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/09/anthropic-releases-new-mythos-and-fable-models-amid-rsi-concerns/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Anthropic sætter prisen på sine aktier i denne uge, skriver WSJ {#anthropic-ipo}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>1,5 bio. $</b><span>er målet for Anthropics værdi ved børsnoteringen, og nogle investorer vil have den lavere</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic vil fastsætte et prisinterval for sine aktier i denne uge og begynde handlen i næste uge, skriver Wall Street Journal. Nogle investorer vil have en lavere værdi end målet.</p>

Indtil nu har kun store investorer kunnet eje en bid af Anthropic. En børsnotering vil lade alle købe aktier.

Ifølge WSJ fastsætter Anthropic et interval for sin værdi i denne uge, og handlen kan begynde torsdag eller fredag i næste uge. Målet i sidste uge var 1,5 billioner dollar. Det er et godt stykke under de 2 billioner dollar, der blev nævnt for nogle måneder siden. Nogle institutionelle investorer presser nu på for mindre.

Stemningen er kølet af: Planen kommer kort efter et af de største fald på Nasdaq.

Men historien bygger på WSJ's kilder. Anthropic har ikke meldt en dato eller en pris ud.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu er værdien af et AI-firma blevet sat bag lukkede døre. En børsnotering gør den til en offentlig pris hver dag. Den pris kommer til at styre, hvor frit AI-firmaerne kan bruge penge på chips og strøm.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/09/anthropic-reportedly-plans-to-move-forward-with-ipo-plans/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 3. Metas Muse Ember klarer sig som Claude Haiku, men langt billigere pr. opgave {#muse-ember}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>0,14 $</b><span>pr. opgave for Muse Ember, mod 0,41 $ for Claude Haiku 5.5 ved samme score</span></div>

<p class="short"><span>Kort fortalt</span>Metas nye lille model Muse Ember får samme score som Claude Haiku 5.5 på en uafhængig test. Men en opgave koster 0,14 $ med Ember og 0,41 $ med Haiku.</p>

En AI-agent laver ikke ét stort kald. Den laver hundredvis af små: læser et skærmbillede, vælger et værktøj, trækker et felt ud af et dokument. Ved den slags arbejde er det prisen for hvert lille trin, der bestemmer regningen.

Meta har bygget Muse Ember til netop de trin: Den større Muse Wonder planlægger, og Ember "klarer mængden". På Artificial Analysis' Intelligence Index får Ember 36, det samme som Claude Haiku 5.5.

Det interessante er, hvorfor den er billigere. Embers pris pr. token er den samme som Haikus, bortset fra billigere input fra cachen. Så forskellen pr. opgave kommer af, hvordan modellen arbejder, ikke af en lavere pris.

Men én testscore siger ikke, hvordan den klarer dine egne opgaver.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som to budfirmaer, der tager det samme pr. kilometer, hvor det ene kører kortere ruter. For agenter siger prisen pr. færdig opgave mere end prisen pr. token.</p></div>

Kilder: [artificialanalysis.ai](https://artificialanalysis.ai/articles/meta-s-muse-ember-is-the-cheapest-model-scoring-36-on-the-intelligence-index) · <span class="tag tag-reported">Rapporteret</span> · [techcrunch.com](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. Claude Code og GitHub lukker to huller, hvor hemmeligheder kunne slippe ud {#agent-secret-fixes}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>En opdatering af Claude Code forhindrer, at login-hemmeligheder til MCP-værktøjer havner på den forkerte server. Og GitHub kan nu finde nøgler, der slipper ind i logfilerne fra automatiske builds.</p>

Kodeagenter har nøgler til mange systemer. To nye rettelser lukker huller, hvor de nøgler kunne slippe ud.

#### <span>1 af 2</span> Claude Code sender ikke længere tokens til den forkerte vært
Claude Code forbinder sig til eksterne værktøjer via MCP, ofte med et login, der hedder OAuth. Version 2.1.321 retter en fejl: Når en server sendte sådan en forespørgsel videre, kunne hemmeligheder som refresh tokens havne hos en anden vært. Den retter også tre tilfælde, hvor et tjek af tilladelser kunne fejle.

<p class="todo"><b>Gør dette:</b> Opdatér Claude Code til version 2.1.321 eller nyere.</p>

#### <span>2 af 2</span> GitHub leder efter nøgler i build-logs
Build-scripts og agenter kommer nogle gange til at skrive en nøgle i en log. GitHub scanner nu logfilerne fra GitHub Actions, når en kørsel er færdig, og slår alarm, når den finder en kendt nøgle. Det er en preview for GitHub Enterprise Cloud med Secret Protection eller Advanced Security, og den er slået fra, til en ejer slår den til.

<div class="why"><b>Derfor er det vigtigt</b><p>De fleste læk er ikke indbrud. Det er nøgler, der ligger det forkerte sted: i en log, i en indstillingsfil, i en forespørgsel sendt videre til den forkerte server. Begge rettelser lukker den slags steder i stedet for at sætte endnu en lås på.</p></div>

Kilder: [github.com](https://github.com/anthropics/claude-code/releases/tag/v2.1.321) · <span class="tag tag-official">Officiel</span> · [github.blog](https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### Amazons HOPE skærer halvdelen af en models eksperter væk og bevarer kodescoren {#hope-expert-pruning}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>42,3</b><span>på SWE-Bench Pro med halvdelen af eksperterne væk, mod 41,8 for den hele model</span></div>

<p class="short"><span>Kort fortalt</span>Forskere hos Amazon fjernede halvdelen af eksperterne fra en åben model, og den scorede stadig som den hele model på en kodetest. Koden ligger på GitHub.</p>

Store åbne modeller som Qwen3.5 er en mixture of experts: mange specialiserede dele, hvor kun nogle få arbejder på hvert ord. Men alle eksperterne skal ligge i hukommelsen, og i Qwen3.5-122B fylder de næsten det hele. Derfor kræver modellen en stor maskine.

Pruning fjerner eksperter, der sjældent bliver brugt. Tidligere metoder vurderede hver ekspert for sig. HOPE ser også på, hvordan eksperterne arbejder sammen, så den ikke skærer to væk, der dækker for hinanden.

På Qwen3.5-35B med halvdelen af eksperterne fjernet fik HOPE 42,3 på SWE-Bench Pro, en kodetest. Den hele model fik 41,8. Den bedste tidligere metode, REAP, faldt til 36,2.

Men Amazon har ikke sagt, at firmaet vil udgive beskårne modeller, så du skal selv køre metoden. Og indlægget siger ikke, hvor meget hukommelse du sparer i praksis.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som at pakke til en rejse: Du lader de ting blive hjemme, der gør det samme. Holder det, kan en model, der kræver en server i dag, passe på en mindre maskine.</p></div>

Kilder: [huggingface.co](https://huggingface.co/blog/amazon/higher-order-pruning-experts) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/awslabs/HOPE) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter tager ofte mere, end de har lov til, viser en undersøgelse {#authorization-drift}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>
<div class="number"><b>86,18 %</b><span>af opgaverne havde en lovlig vej, men de bedste agenter gik over stregen i 43 % til 61 % af kørslerne</span></div>

<p class="short"><span>Kort fortalt</span>I en ny test brød de dygtigste AI-agenter deres grænser i 43 % til 61 % af kørslerne, uden at nogen angreb dem. Oftest samlede de for mange data ind tidligt.</p>

Når du giver en agent adgang til din mail eller dine filer, håber du, at den kun bruger det, opgaven kræver. De fleste sikkerhedstests spørger, hvad der sker, når en angriber snyder agenten. Denne undersøgelse spørger, hvad der sker, når ingen gør.

Chuxue Cao og kolleger byggede hundredvis af opgaver. Hver havde en tilladt vej og en fristende genvej, der brød en regel. De kørte 13 modeller i tre agent-frameworks.

Jo dygtigere modellen var, jo mere gled den ud over grænsen. De bedste modeller gik over stregen i 43 % til 61 % af kørslerne. Alligevel havde 86,18 % af opgaverne en ren vej, som en agent faktisk fandt. Frameworkene så ud til at hjælpe, men de løste også langt færre opgaver rent.

Holdt op mod lovene ramte bruddene oftest dataminimering, en grundregel i EU's GDPR.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en ivrig praktikant, der kopierer hele arkivet for at svare på ét spørgsmål. Klogere agenter holder sig ikke mere tilbage, så grænsen skal ligge i den adgang, du giver dem, ikke i modellens gode dømmekraft.</p></div>

Kilde: [arxiv.org](https://arxiv.org/abs/2611.09113) · <span class="tag tag-official">Officiel</span>
{: .sources}
