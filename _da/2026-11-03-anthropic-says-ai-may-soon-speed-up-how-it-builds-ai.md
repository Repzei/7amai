---
title: "Anthropic siger, at AI snart kan sætte fart i, hvordan firmaet bygger AI"
summary: "I sit opdaterede børsprospekt advarer Anthropic om, at firmaet snart kan nå sin egen grænse for AI, der sætter fart i AI-forskningen, og viser en kvartalsomsætning på 17,0 mia. dollar. Desuden: et AI-hjulpet indbrud, New York Times sagsøger Brave, OpenAIs løfte til elnettet og sikrere standarder for udviklere."
date: 2026-11-03 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "recursive-self-improvement", from: 1, more: ["red-teaming", "ai-agent"] }
today:
  - { t: "Anthropic siger, at AI snart kan sætte fart i firmaets egen forskning, med mennesker ved roret.", why: "Alle, der undrer sig over, hvor hurtigt AI bliver bedre herfra." }
  - { t: "Angribere brugte et AI-værktøj til at bryde ind hos WorkOS, og Storbritannien venter flere.", why: "Alle, hvis arbejde kører på software og skyen." }
  - { t: "New York Times sagsøger Brave for at sælge avisens artikler til AI-firmaer.", why: "Alle, der bruger chatbots, som søger på nettet." }
  - { t: "OpenAI lover at skrue ned for et datacenters strøm, når elnettet er presset.", why: "Alle, der frygter, at AI hæver deres elregning." }
  - { t: "GitHub lukker en risikabel CI-udløser, og Claude Code passer på din mailadresse.", why: "Udviklere, der vedligeholder open source-projekter eller kører agenter." }
other_lang_url: /2026/11/03/
items:
  - { n: 1, anchor: "anthropic-ai-builds-ai", signal: big, tracks: [general, build], min: 1.5, source: official, number: "17,0 mia. dollar", number_label: "i omsætning hos Anthropic fra juli til september, op 1.127 % på et år", topic: business, why: "Sætter AI fart i at lave AI, kan de værktøjer, du bruger, ændre sig meget hurtigere end i dag." }
  - { n: 2, anchor: "ai-assisted-attacks", signal: worth, tracks: [general, europe], min: 1.5, source: official, topic: security, why: "AI gør det kedelige arbejde i hacking billigt, så angreb bliver hyppigere, ikke klogere.", do: "WorkOS-kunder: tjek enhver uventet henvendelse, også hvis den citerer en rigtig samtale." }
  - { n: 3, anchor: "nyt-sues-brave", signal: worth, tracks: [general], min: 1, source: reported, number: "30 mia.", number_label: "websider i Braves søgeindeks ifølge søgsmålet", topic: law, why: "Kampen om ophavsret flytter til de søgetjenester, der giver chatbots deres svar." }
  - { n: 4, anchor: "openai-grid-protectors", signal: worth, tracks: [general], min: 1, source: reported, number: "1.000 MW", number_label: "strøm, som OpenAIs campus i Georgia kan give tilbage til elnettet, når det er travlt", topic: chips, why: "Et datacenter, der kan skrue ned for sig selv, kræver mindre nyt elnet, så regningen vokser mindre for alle." }
  - { n: 5, anchor: "developer-safety-defaults", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Begge ændringer gør det sikre valg til standard, så en glemt indstilling ikke længere lækker hemmeligheder.", do: "Tjek GitHub Insights før 9. november for at se, hvilke workflows den nye regel vil blokere.", steps: { title: "Det ændrer sig på GitHub", list: ["9. og 16. november: blokeringer på prøve i to timer", "2. december: udløseren er blokeret som standard", "Vedligeholdere kan tillade den for udvalgte workflows"] } }
  - { n: 6, anchor: "llama-cpp-multi-seq", signal: worth, tracks: [build], min: 1, source: official, topic: local, why: "Flere agenter på én lokal model giver nu meget mindre ventetid.", number: "8.625", number_label: "tokens i sekundet, når Gemma 4 læser prompts for 4 brugere, op fra 2.982" }
  - { n: 7, anchor: "blind-to-change", signal: worth, tracks: [general, build], min: 1, source: official, topic: research, why: "En søgeagent tjekker kun for nyt, når du giver et hint, så hintet er din opgave indtil videre.", do: "Afhænger svaret af nylige begivenheder, så bed agenten tjekke, hvad der har ændret sig.", number: "69,0 %", number_label: "rigtige svar fra Claude Opus 4.7, når opgaven ikke nævnte ændringen, mod 96,5 %, når den blev spurgt" }
---

### 1. Anthropic siger, at AI snart kan sætte fart i, hvordan firmaet bygger AI {#anthropic-ai-builds-ai}
<p class="item-meta"><span class="signal signal-big">Stor nyhed</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>17,0 mia. dollar</b><span>i omsætning hos Anthropic fra juli til september, op 1.127 % på et år</span></div>

<p class="short"><span>Kort fortalt</span>Anthropic skriver i sit opdaterede børsprospekt, at firmaet snart kan nå sin egen grænse for AI, der sætter fart i AI-forskningen. Mennesker skal stadig have kontrollen, lover firmaet.</p>

Bliver en AI god nok til at hjælpe med at bygge den næste AI, kan udviklingen sætte fart i sig selv. Idéen hedder rekursiv selvforbedring, og mange har kaldt den hype.

I mandags skrev Anthropic, firmaet bag Claude, den ind i et juridisk dokument. Ifølge det opdaterede børsprospekt "may imminently meet" firmaet (kan snart nå) grænsen i sine sikkerhedsregler for "dramatically accelerated progress attributable to AI".

Anthropic tilføjer, at ingen nuværende model er over grænsen. Men firmaet indrømmer, at det tidligere først har opdaget store spring i sine modeller, efter de skete.

Prospektet viser også pengene. Omsætningen fra juli til september var 17,0 mia. dollar, op 1.127 % på et år. Og Anthropic har lovet omkring 895,4 mia. dollar til computere og datacentre, som skal bruges inden 2045.

Fangsten: Skeptikere kan sige, at et prospekt både er en advarsel og et salgsargument, skriver TechCrunch.

Anthropic regner ikke med at lade Claude designe nye frontiermodeller på egen hånd "without meaningful human supervision" (uden reelt menneskeligt tilsyn). Firmaet overvejer nye regler for at "keep humans in control" (holde mennesker ved roret).

<div class="why"><b>Derfor er det vigtigt</b><p>Tænk på en fabrik, der begynder at bruge sine egne maskiner til at bygge bedre maskiner. Hver runde går hurtigere end den forrige. Sætter AI fart i at lave AI, kan de værktøjer, du bruger, ændre sig meget hurtigere end i dag, og det samme kan risiciene.</p></div>

Kilde: [sec.gov](https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm) · <span class="tag tag-official">Officiel</span> · [techcrunch.com](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 2. Angribere brugte et AI-værktøj til at bryde ind hos WorkOS, og Storbritannien venter flere {#ai-assisted-attacks}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Europa</span><span class="track">1½ min</span></p>

<p class="short"><span>Kort fortalt</span>Et firma, der står for login i mange apps, blev hacket med hjælp fra et AI-værktøj. Og Storbritanniens cybermyndighed advarer nu om, at AI-malware sandsynligvis rammer landets kritiske tjenester inden 2028.</p>

#### <span>1 af 2</span> Et AI-værktøj hjalp med indbruddet hos WorkOS
WorkOS driver login-systemerne bag mange forretningsapps. Den 30. oktober fandt firmaet fremmede inde i et værktøj, som salgsteamet bruger. De fik adgang til kontaktoplysninger, noter fra salgsopkald og dele af kunders Slack-samtaler.

Ifølge WorkOS brugte angrebet "an AI-assisted offensive security framework" (et AI-hjulpet angrebsværktøj) til at lede efter svage punkter og prøve veje ind. Firmaet har "no evidence" (intet bevis) for, at data i selve appen blev rørt.

<p class="todo"><b>Gør dette:</b> WorkOS-kunder: tjek enhver uventet henvendelse, også hvis den citerer en rigtig samtale.</p>

#### <span>2 af 2</span> Storbritannien venter AI-malware i et angreb på vigtige tjenester
I dag udgav Storbritanniens National Cyber Security Centre sin årlige gennemgang. Ifølge den er det "highly likely" (meget sandsynligt), at AI-malware bliver brugt i et ransomware-angreb på landets kritiske tjenester inden 2028. I en tale skal myndighedens chef, Richard Horne, sige: "For decades, we have collectively got away with doing tech on the cheap." (I årtier er vi sluppet afsted med at lave it billigt.)

<div class="why"><b>Derfor er det vigtigt</b><p>AI opfinder ikke nye tricks her. Den laver det langsomme arbejde med at prøve dør efter dør, gratis og døgnet rundt. Det gør angreb hyppigere, ikke klogere, så de basale låse betyder mere end nogensinde.</p></div>

Kilde: [workos.com](https://workos.com/security/bulletins/october-30th-2026-data-security-incident) · <span class="tag tag-official">Officiel</span> · [ncsc.gov.uk](https://www.ncsc.gov.uk/news/cyber-chief-uk-facing-ai-powered-attacks-on-critical-infrastructure-in-two-years) · <span class="tag tag-official">Officiel</span>
{: .sources}

### 3. New York Times sagsøger Brave for at sælge avisens artikler til AI-firmaer {#nyt-sues-brave}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>30 mia.</b><span>websider i Braves søgeindeks ifølge søgsmålet</span></div>

<p class="short"><span>Kort fortalt</span>New York Times har sagsøgt Brave, firmaet bag browseren og søgemaskinen, for at kopiere avisens artikler og sælge dem til AI-firmaer. Tre andre aviser har anlagt en lignende sag.</p>

Når en chatbot søger på nettet for dig, bruger den ofte en andens søgemaskine. Brave sælger en.

I mandags sagsøgte avisen Brave ved den føderale domstol på Manhattan. Ifølge søgsmålet kopierede Brave artiklerne med en crawler, som sider ikke kan blokere. Bagefter solgte Brave dem til AI-kunder, blandt andre Anthropic, Perplexity, Mistral, xAI og Cohere. Avisen kalder Brave "an AI 'fence' that sells stolen content" (en AI-hæler, der sælger stjålet indhold). Braves indeks dækker over 30 mia. websider, står der i søgsmålet.

Fangsten: Det er påstande, ikke en dom. Brave havde ikke kommenteret sagen, da TechCrunch og Bloomberg Law skrev om den.

<div class="why"><b>Derfor er det vigtigt</b><p>Indtil nu har aviser mest sagsøgt de firmaer, der træner AI-modeller. Denne sag går efter mellemmanden. Kampen om ophavsret flytter til de søgetjenester, der giver chatbots deres svar.</p></div>

Kilde: [techcrunch.com](https://techcrunch.com/2026/11/02/new-york-times-and-other-outlets-sue-web-browser-brave-over-alleged-content-scraping/) · <span class="tag tag-reported">Rapporteret</span> · [news.bloomberglaw.com](https://news.bloomberglaw.com/ip-law/new-york-times-daily-news-sue-over-ai-scraping-selling-content) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 4. OpenAI lover at skrue ned for et datacenters strøm, når elnettet er presset {#openai-grid-protectors}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">1 min</span></p>
<div class="number"><b>1.000 MW</b><span>strøm, som OpenAIs campus i Georgia kan give tilbage til elnettet, når det er travlt</span></div>

<p class="short"><span>Kort fortalt</span>OpenAI siger, at firmaets fremtidige datacentre vil bruge mindre strøm, når det lokale elnet er presset. Det første, i den amerikanske delstat Georgia, kan give omtrent lige så meget strøm tilbage, som 700.000 hjem bruger.</p>

Mange amerikanere frygter, at AI-datacentre vil hæve deres elregning. Den vrede bremser nye projekter.

OpenAIs svar er en ordning, der hedder Grid Protectors. På den planlagte campus i Georgia kan det lokale elselskab skære op til 1.000 MW væk, når der er travlt på nettet. OpenAI betaler også for de elledninger, campussen kræver. Familier og små virksomheder skal ikke betale til et datacenters strøm, skriver firmaet.

Fangsten: OpenAI indrømmer, at "flexibility cannot replace new power plants and power lines" (fleksibilitet kan ikke erstatte nye kraftværker og elledninger). Firmaet har ikke nævnt andre steder endnu.

<div class="why"><b>Derfor er det vigtigt</b><p>Elnet bygges til årets varmeste eftermiddag. Et datacenter, der kan skrue ned for sig selv i de øjeblikke, kræver mindre nyt elnet, så regningen vokser mindre for alle.</p></div>

Kilde: [thenextweb.com](https://thenextweb.com/news/openai-grid-protectors-program-demand-response-georgia) · <span class="tag tag-reported">Rapporteret</span>
{: .sources}

### 5. GitHub lukker en risikabel CI-udløser, og Claude Code passer på din mail {#developer-safety-defaults}
<p class="item-meta"><span class="signal signal-quick">Kort nyt</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>Kort fortalt</span>GitHub blokerer en workflow-udløser, der lader kode fra fremmede nå et projekts hemmeligheder. Og Claude Code spørger nu, før et værktøjskald sender din mailadresse ud.</p>

#### <span>1 af 2</span> GitHub blokerer `pull_request_target` som standard
Udløseren kører et workflow med hovedprojektets rettigheder, også ved en pull request fra en fremmeds kopi. Ifølge GitHub "can access its secrets" (kan den nå projektets hemmeligheder). Fra 2. december blokerer offentlige repositories den, medmindre en politik tillader den. Blokeringer på prøve kører 9. og 16. november fra 16:00 til 18:00 UTC.

<p class="todo"><b>Gør dette:</b> Tjek GitHub Insights før 9. november for at se, hvilke workflows den nye regel vil blokere.</p>

#### <span>2 af 2</span> Claude Code spørger, før din mail sendes ud
Version 2.1.317 spørger, før et web- eller shell-værktøjskald sender din kontos mailadresse ud på nettet. Den advarer også, når en ny planlagt opgave får connectors, du ikke har bedt om.

<div class="why"><b>Derfor er det vigtigt</b><p>Begge ændringer gør det sikre valg til standard. En glemt indstilling eller en travl agent deler ikke længere hemmeligheder ud i stilhed.</p></div>

Kilde: [github.blog](https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2) · <span class="tag tag-official">Officiel</span> · [github.com](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Open source og lokal AI

### llama.cpp betjener flere brugere ad gangen næsten tre gange hurtigere {#llama-cpp-multi-seq}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>8.625</b><span>tokens i sekundet, når Gemma 4 læser prompts for 4 brugere, op fra 2.982</span></div>

<p class="short"><span>Kort fortalt</span>En ændring i llama.cpp, den gratis motor bag mange lokale AI-apps, får én model til at læse lange prompts for flere brugere langt hurtigere.</p>

Kører du en lokal model for flere agenter ad gangen, deler de én hukommelse, kaldet cachen. Indtil nu skulle hver forespørgsel sortere de andres dele fra.

Rettelsen kom ind 2. november og lader hver forespørgsel kigge på sine egne rækker. I udviklerens test af en tidlig udgave på et NVIDIA-kort læste Gemma 4 prompts for 4 brugere med 8.625 tokens i sekundet, op fra 2.982. Skrivefarten steg kun lidt.

Fangsten: Mac'er får ingen gevinst endnu. Og en tester har meldt en serverfejl med en fartfunktion, som stadig bliver rettet.

<div class="why"><b>Derfor er det vigtigt</b><p>Det er som en bibliotekar, der ikke længere skal læse alle lånernes noter for at finde dine. Flere agenter på én lokal model giver nu meget mindre ventetid.</p></div>

Kilde: [github.com](https://github.com/ggml-org/llama.cpp/pull/29510) · <span class="tag tag-official">Officiel</span>
{: .sources}

## Dagens forskningsartikel

### AI-agenter overser nye nyheder, medmindre du spørger til dem {#blind-to-change}
<p class="item-meta"><span class="signal signal-worth">Værd at vide</span><span class="track">Generelt</span><span class="track">Build</span><span class="track">1 min</span></p>

<div class="number"><b>69,0 %</b><span>rigtige svar fra Claude Opus 4.7, når opgaven ikke nævnte ændringen, mod 96,5 %, når den blev spurgt</span></div>

<p class="short"><span>Kort fortalt</span>Søgeagenter kan godt finde ud af, at noget har ændret sig, når du spørger. Men gør du ikke, springer de ofte tjekket over og giver et forældet svar.</p>

AI-agenter med websøgning ved kun det, de gider slå op.

Tre forskere byggede en test, der hedder BlindToChange. En opgave beder om britiske dataloger, der kan skrive forord til en bog. Tony Hoare er et oplagt valg, men han døde i marts 2026.

Spurgt direkte vidste Claude Opus 4.7 besked om den slags dødsfald 96,5 % af gangene. Nævnte opgaven det ikke, svarede den rigtigt 69,0 % af gangene. I over halvdelen af fejlene søgte agenten aldrig efter, hvad der havde ændret sig.

Fangsten: Det er en preprint, og de testede modeller er ældre end dagens bedste.

<div class="why"><b>Derfor er det vigtigt</b><p>En søgeagent er som en belæst ven, der holdt op med at læse avisen sidste forår. Den tjekker kun for nyt, når du giver et hint, så hintet er din opgave indtil videre.</p></div>

<p class="todo"><b>Prøv det:</b> Afhænger svaret af nylige begivenheder, så bed agenten tjekke, hvad der har ændret sig.</p>

Kilde: [arxiv.org](https://arxiv.org/abs/2610.41435) · <span class="tag tag-official">Officiel</span>
{: .sources}
