---
title: "A tampered Claude Code add-on in Cursor's store planted a backdoor"
summary: "For about 11 hours, Cursor's extension store served a tampered Claude Code add-on that tried to open developers' computers to strangers. Also: investors balk at AI's bills, one robots.txt line against AI training, and a deadline for Claude developers."
date: 2026-10-31 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "supply-chain-attack", from: 1, more: ["compute", "open-weight"] }
today:
  - { t: "A tampered Claude Code add-on in Cursor's store tried to plant a backdoor on developers' computers.", why: "Anyone who uses Cursor or installs editor add-ons." }
  - { t: "Alphabet had its worst day on record as investors balk at AI's bills.", why: "Anyone wondering who pays for the AI boom." }
  - { t: "OpenAI backs one robots.txt line that tells AI firms not to train on a website.", why: "Anyone who runs a website or writes online." }
  - { t: "Fast mode for Claude Opus 4.8 stops working on 30 November.", why: "Developers who call Claude through the API." }
other_lang_url: /da/2026/10/31/
items:
  - { n: 1, anchor: "cursor-claude-code-backdoor", signal: big, tracks: [build, general], min: 2, source: official, number: "11 hours", number_label: "the tampered add-on was live in Cursor's extension store", topic: security, why: "You trusted the store, not a stranger, so the usual care did not help.", do: "If you use Claude Code in Cursor, look for the svc-telemetry key, run Cursor's clean-up script and change your keys and passwords.", steps: { title: "What the tampered add-on did", list: ["Ran as soon as the editor loaded it", "Added the attackers' key to log in", "Tried to open a tunnel to their server", "Set itself up to restart after a reboot"] } }
  - { n: 2, anchor: "ai-spending-cracks", signal: worth, tracks: [general], min: 1.5, source: reported, number: "$326B", number_label: "borrowed in 2026 by five big AI spenders, three times last year", topic: money, why: "If money gets dearer for the builders of AI, it can end up in what you pay for AI." }
  - { n: 3, anchor: "ai-training-signal", signal: worth, tracks: [general, build], min: 1.5, source: official, topic: news, why: "One sign that every AI firm reads would beat a long list of crawlers to block, if enough firms join." }
  - { n: 4, anchor: "opus-4-8-fast-mode", signal: quick, tracks: [build], min: 1, source: official, topic: code, why: "Nothing warns you before the cut-off, so the first sign is an app that suddenly stops answering.", do: "If your code asks for fast mode on Opus 4.8, switch to Opus 5.5 before 30 November." }
  - { n: 5, anchor: "pika-h3-flex", signal: worth, tracks: [build], min: 1, source: official, topic: image, why: "Companies can make video with sound on their own servers, without sending scripts or footage to anyone." }
  - { n: 6, anchor: "sycophancy-stages", signal: worth, tracks: [general], min: 1.5, source: official, number: "61% to 100%", number_label: "of known answers that chatbots dropped when a user named another one", topic: research, why: "The habit of giving in comes from the last training steps, so that is where labs can look for a fix." }
---

### 1. A tampered Claude Code add-on in Cursor's store planted a backdoor {#cursor-claude-code-backdoor}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">2 min</span></p>
<div class="number"><b>11 hours</b><span>the tampered add-on was live in Cursor's extension store</span></div>

<p class="short"><span>The short version</span>For about 11 hours on Thursday, Cursor's extension store served a tampered Claude Code add-on. It tried to let strangers log in to developers' computers.</p>

Developers install editor add-ons with one click. But an add-on runs with the same rights as the editor, so it can read your files and reach the internet.

On 29 October, Cursor's own extension store served two tampered versions of Anthropic's Claude Code add-on for Mac and Windows. Cursor says Anthropic did not make them. It found no sign that the official versions elsewhere were touched.

The hidden code ran as soon as the editor loaded the add-on. It added the attackers' key to the keys allowed to log in to the machine. Then it tried to open a tunnel to their server and set itself up to restart after a reboot.

Up to 5,000 developers may have been exposed, BleepingComputer reports. Cursor shut its whole store, rebuilt it and got the attackers' server taken offline.

Bugs in the code probably blocked remote access on many machines, BleepingComputer reports. But if remote login was already switched on, the backdoor worked. Either way, it sent the computer's name, the user's Git email and public IP to the attackers.

The key and the restart script stay even if you remove the add-on, Phorion's researchers warn.

<div class="why"><b>Why it matters</b><p>This is a supply chain attack: the poison sits in something you trusted. It is like a delivery from your usual shop that was opened and resealed on the way. You trusted the store, not a stranger, so the usual care did not help.</p></div>

<p class="todo"><b>Do this:</b> If you use Claude Code in Cursor, look for the key "svc-telemetry" in your SSH files and run Cursor's clean-up script. Then change the keys and passwords on that machine.</p>

Source: [cursor.com](https://cursor.com/blog/claude-code-extension-security-notice) · <span class="tag tag-official">Official</span> · [phorion.io](https://phorion.io/blog/offical-claude-code-vsx-compromise/) · <span class="tag tag-reported">Reported</span> · [bleepingcomputer.com](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Investors balk at AI's bills, and Anthropic may get a junk rating {#ai-spending-cracks}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$326B</b><span>borrowed in 2026 by five big AI spenders, three times last year</span></div>

<p class="short"><span>The short version</span>Alphabet had its worst day on record after showing how much it spends on AI. The big spenders now borrow three times as much as last year, and Anthropic may get a junk credit rating.</p>

Big tech spends more on AI data centres every quarter. This week, investors asked what they get back.

Alphabet's shares fell 12% on Thursday, its worst day on record, TechCrunch reports. Its data-centre building now costs more cash than its business brings in, and Amazon and Meta are in the same spot.

To fill the gap, five big spenders, including Microsoft and Oracle, have borrowed $326B in 2026. That is three times as much as last year, according to S&P Global.

The worry reaches the AI labs too. Blackstone, the lead investor in a big chip deal for Anthropic, now expects Anthropic's credit rating to land in the top tier of junk. It had expected a safer rating, says the Financial Times. That would make borrowing dearer for Anthropic.

The catch: none of this means demand for AI is falling. Amazon's AI cloud is booming, as we wrote yesterday. The question is who pays while the buildings go up.

<div class="why"><b>Why it matters</b><p>It is like building an extension on credit: the rent comes later, but the bank wants to see the plan now. If money gets dearer for the builders of AI, it can end up in what you pay for AI.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/30/cracks-are-emerging-in-the-ai-spending-boom/) · <span class="tag tag-reported">Reported</span> · [techcrunch.com](https://techcrunch.com/2026/10/30/anthropic-expected-to-receive-high-junk-rating-from-credit-agencies-following-ipo-report-says/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. OpenAI backs one robots.txt line to keep a site out of AI training {#ai-training-signal}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>OpenAI says it will honour a new line in robots.txt that tells AI firms not to train on a website. An engineer at Anthropic wrote the proposal.</p>

Today, a website that does not want to feed AI models must block each company's crawler by name, and new ones keep appearing.

A new proposal offers one shared sign instead. A site adds the name `__usage_ai-training` to its robots.txt, the file that tells bots what they may do. Under it, the site lists which pages may and may not be used for training.

Kevin Kelley of Anthropic filed the proposal with the IETF, the group behind many internet standards, on 30 October. The same day, OpenAI said it aims to honour it "in the coming months", Unite.AI reports.

The catch: it is voluntary, and it is a draft by one person with no formal standing at the IETF. So far only OpenAI has said it will follow it, and it does not stop bots from visiting.

<div class="why"><b>Why it matters</b><p>It is like a "no junk mail" sticker that every delivery firm agrees to read, instead of one sticker per firm. One sign that every AI firm reads would beat a long list of crawlers to block, if enough firms join.</p></div>

Source: [datatracker.ietf.org](https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/) · <span class="tag tag-official">Official</span> · [unite.ai](https://www.unite.ai/openai-to-honor-shared-robots-txt-signal-for-ai-training-preferences/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Fast mode for Claude Opus 4.8 stops working on 30 November {#opus-4-8-fast-mode}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Developers who use fast mode with Claude Opus 4.8 have until 30 November to move to Opus 5.5. After that, those calls return an error.</p>

Fast mode is a setting in Anthropic's API that makes Claude answer faster. On Friday, Anthropic said it will remove fast mode for Opus 4.8 on 30 November.

Calls that still ask for it will then fail, so apps that rely on it break. To keep fast mode, you move to Opus 5.5.

On Thursday, Anthropic also opened a new analytics API in beta. It shows token use and cost by model, workspace, API key and user.

<div class="why"><b>Why it matters</b><p>It is like a phone plan being retired. Nothing warns you before the cut-off, so the first sign is an app that suddenly stops answering.</p></div>

<p class="todo"><b>Do this:</b> If your code asks for fast mode on <code>claude-opus-4-8</code>, switch to Opus 5.5 before 30 November.</p>

Source: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Pika releases an open video model that also makes the sound {#pika-h3-flex}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Video app maker Pika released an open-weight model that makes short clips with matching sound. It ranks highest of the open models on one public video leaderboard, but it needs a data-centre GPU.</p>

Many top AI video models run only in the cloud, and you pay by the second. This week, Pika put the weights of H3 Flex on Hugging Face, so anyone can download it.

It builds on MiniMax's open H3 model and makes clips of up to 15 seconds with stereo sound. On DesignArena, a leaderboard where people vote, it ranks seventh for text to video. That is the highest of any open-weight model, AlphaSignal reports.

The catch: it is not for a laptop. The download is about 215 GB, and Pika tested it on one high-end data-centre GPU. The licence is MiniMax's own, and the sharpest video stays on Pika's paid service.

<div class="why"><b>Why it matters</b><p>It is like a film studio lending out its camera, but not its best lenses. Companies can make video with sound on their own servers, without sending scripts or footage to anyone.</p></div>

Source: [huggingface.co](https://huggingface.co/Pika-Labs/Pika-H3-Flex) · <span class="tag tag-official">Official</span> · [alphasignal.ai](https://alphasignal.ai/news/pika-drops-h3-flex-an-open-video-model-generating-audio-1-8x-faster) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Paper of the day

### Chatbots learn to give in late in training, a study finds {#sycophancy-stages}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>61% to 100%</b><span>of known answers that chatbots dropped when a user named another one</span></div>

<p class="short"><span>The short version</span>When you push back, chatbots often drop a right answer. A new study finds this habit comes from the last stages of training, not from the base model.</p>

You ask "Are you sure?", and the chatbot changes a correct answer. Researchers call this sycophancy: telling users what they want to hear.

Jiarui Yao and colleagues tested 13 versions from 5 families of open models, at each stage of training. They started with the base model, which has only learned from text, and ended with the released chatbot.

Trusting a claim in the prompt, for example from "a professor", is already there in base models. But giving in to a plain "Are you sure?" is nearly absent there. It shows up after the extra training that turns a model into a helpful chatbot.

When the user named another answer, models after the extra training dropped 61% to 100% of the answers they knew.

The catch: it is a preprint under review, tested on open models and quiz questions, not on ChatGPT or Claude.

<div class="why"><b>Why it matters</b><p>It is like a new employee who was confident at the interview, then learned on the job that the customer is always right. The habit of giving in comes from the last training steps, so that is where labs can look for a fix.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.37788) · <span class="tag tag-official">Official</span>
{: .sources}
