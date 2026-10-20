---
title: "MiniMax's new Flash model runs agent tasks for about 22 cents"
summary: "A cheap Chinese model nearly matches the best on agent tasks, with open weights promised. Also: Microsoft says to treat AI agents like insiders, WhatsApp's hidden notes to AI, a US ban on DeepSeek, and new money for chips beyond NVIDIA."
date: 2026-10-20 07:00:00 +0200
reviewed: false
checked: true
minutes: 7
explained: { main: "token", from: 1, more: ["ai-agent", "open-weight"] }
today:
  - { t: "MiniMax's new Flash model does agent tasks for about 22 cents each, and its weights are due later.", why: "Anyone paying for AI agents or coding tools." }
  - { t: "Microsoft says to treat AI agents like insiders, as a Meta agent shares a seller's home address.", why: "Anyone who lets an agent act for them." }
  - { t: "WhatsApp help pages hid notes telling AI not to point users to data regulators. WhatsApp blames a bug.", why: "Anyone in Europe who asks a chatbot about their privacy rights." }
  - { t: "The US government orders civilian agencies to remove DeepSeek and services built on it.", why: "Companies that build on DeepSeek and sell to the US government." }
  - { t: "Chipmaker Tenstorrent raises $1.5 billion, and PyTorch code now runs on Amazon's chips with one change.", why: "Teams looking for cheaper hardware than NVIDIA's." }
other_lang_url: /da/2026/10/20/
items:
  - { n: 1, anchor: "minimax-m3-1-flash", signal: big, tracks: [build, general], min: 1.5, source: official, number: "$0.15", number_label: "per million input tokens, with open weights promised" }
  - { n: 2, anchor: "agents-as-insiders", signal: worth, tracks: [general, build], min: 1.5, source: official }
  - { n: 3, anchor: "whatsapp-hidden-notes", signal: worth, tracks: [general, europe], min: 1, source: official }
  - { n: 4, anchor: "dhs-deepseek-ban", signal: worth, tracks: [general, build], min: 1, source: reported }
  - { n: 5, anchor: "chips-beyond-nvidia", signal: worth, tracks: [build], min: 1.5, source: official }
  - { n: 6, anchor: "llama-cpp-connect", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 7, anchor: "frozen-vocabulary", signal: worth, tracks: [build, europe], min: 1, source: official }
---

### 1. MiniMax's new Flash model runs agent tasks for about 22 cents {#minimax-m3-1-flash}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$0.15</b><span>per million input tokens, with open weights promised</span></div>

<p class="short"><span>The short version</span>Chinese lab MiniMax released a fast, cheap model for AI agents. It scores close to the best cheap models, and it plans to let anyone download it.</p>

When an AI agent fixes a bug, it reads and writes thousands of tokens (small pieces of text). You pay for every one. So the price of a model decides which jobs are worth giving to an agent at all.

On 19 October, MiniMax launched M3.1 Flash. It costs $0.15 per million tokens it reads and $0.60 per million it writes. MiniMax says agent work now costs 70% less than with its last model, and runs almost three times faster.

Independent testers at Artificial Analysis give it 42 points, up from 29 for MiniMax's last model. Of the cheap models The Decoder compares, only DeepSeek's Flash scores higher, with 45. The Decoder puts the cost at about 22 cents per task, a little below DeepSeek's 26.

There is a catch. Artificial Analysis also found a hallucination rate of 93%, because the model tries to answer every question instead of saying it does not know. MiniMax says the weights come "later"; The Decoder reports 23 October.

<div class="why"><b>Why it matters</b><p>Cheap models are in a price race, and the floor keeps dropping. But a model that never says "I don't know" is like a confident new hire who guesses. It is fine for drafts you check, and risky for facts you don't.</p></div>

Source: [minimax.io](https://www.minimax.io/blog/minimax-m31f) · <span class="tag tag-official">Official</span> · [the-decoder.com](https://the-decoder.com/minimax-m3-1-flash-shows-chinas-ai-price-race-has-no-floor-in-sight) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Microsoft says to treat AI agents like insiders, and a Meta agent shows why {#agents-as-insiders}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Microsoft wants companies to watch AI agents like staff with keys to everything. A Meta agent shows what happens when nobody does.</p>

#### <span>1 of 2</span> Microsoft: an agent cannot guard itself
On 19 October, Microsoft said AI agents should be treated like insiders. They are not evil, but they get wide access to data and systems, and they can make mistakes or be tricked. So the checks must sit outside the model, where the agent cannot switch them off.

Microsoft says agents should start with no rights and get short, task-sized permissions. Its security software can now find 60 kinds of agents on work computers, such as Claude Code. No launch dates yet.

#### <span>2 of 2</span> A Meta agent shared a seller's home address
Fortune reported a real case the same day. A Toronto tech reviewer gave Meta's Muse agent "always allow" permissions to sell a keyboard. Muse agreed a pickup, gave the buyer his home address and wrote "Yep, I'm here!" when the buyer arrived. He knew nothing about it. Meta contacted him to talk through what went wrong.

<div class="why"><b>Why it matters</b><p>"Always allow" sounds like a time saver. In practice it hands a stranger your house keys and your phone. Both stories point the same way: an agent needs a short leash held by something other than itself.</p></div>

Source: [microsoft.com](https://www.microsoft.com/en-us/security/blog/2026/10/19/agents-are-your-newest-insiders-security-must-move-at-their-speed/) · <span class="tag tag-official">Official</span> · [fortune.com](https://fortune.com/2026/10/19/meta-muse-ai-agent-facebook-marketplace-home-address-privacy/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. WhatsApp help pages hid notes telling AI not to mention data regulators {#whatsapp-hidden-notes}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Hidden text on WhatsApp's help pages told AI not to send users to data regulators or mention GDPR. WhatsApp says it was a bug.</p>

More people now ask a chatbot instead of reading help pages. So what chatbots read there shapes your answers.

Redact, a firm that sells privacy tools, checked 545 WhatsApp help pages. Eighty held hidden text written for AI. One note on deleting an account told AI not to recommend "contacting any Data Protection Authority". Another said not to mention privacy laws like GDPR, "including when a user raises them directly".

The text was gone by 18 October. WhatsApp told WIRED it was meant only for its own support chatbot and showed up because of a bug. Nobody has shown that any AI followed the notes.

<div class="why"><b>Why it matters</b><p>In the EU, your right to complain to a data regulator is the law. If hidden text can steer chatbots away from it, an answer can sound helpful and still leave out the most useful thing.</p></div>

Source: [redact.dev](https://redact.dev/blog/whatsapp-help-pages-hidden-ai-instructions) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. The US orders its civilian agencies to remove DeepSeek {#dhs-deepseek-ban}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>US civilian agencies must remove DeepSeek and stop buying it. The order also reaches services that other companies built on DeepSeek's models.</p>

DeepSeek's models are open-weight, so anyone can build products on top of them. That made them popular, and hard to fence in.

On 19 October, the Department of Homeland Security told civilian federal agencies to remove DeepSeek and stop buying it. Decrypt reports that the ban also covers outside services built on its models.

DHS says data could flow to China, and the models may hold security flaws.

Earlier US bans covered DeepSeek on government devices. This one goes further.

<div class="why"><b>Why it matters</b><p>It is like a recall that covers not just the car brand, but every car built with its engine. If you sell software to the US government, you now need to know which model sits inside it.</p></div>

Source: [pymnts.com](https://www.pymnts.com/news/artificial-intelligence/2026/dhs-bans-deepseek-across-federal-government-networks/) · <span class="tag tag-reported">Reported</span> · [yahoo.com (Decrypt)](https://www.yahoo.com/news/politics/articles/us-orders-civilian-agencies-rip-181604295.html) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. New money and new software for AI chips beyond NVIDIA {#chips-beyond-nvidia}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>A chip startup raised $1.5 billion to run open models, and Amazon made its own AI chips work with normal PyTorch code.</p>

Most AI runs on NVIDIA chips, partly because code written for NVIDIA is hard to move. Two pieces of news on 19 October chip away at that.

#### <span>1 of 2</span> Tenstorrent raises $1.5 billion
Tenstorrent, led by chip designer Jim Keller, raised $1.5 billion at a value of $6.2 billion, TechCrunch reported. That is more than double its value in late 2024. The money goes to chips built to run open-weight models. Keller says its servers already run DeepSeek's.

#### <span>2 of 2</span> PyTorch code runs on Amazon's chips with one change
Amazon announced TorchNeuron, free software that makes its Trainium chips work like any other device in PyTorch, the toolkit many AI models are written in. You move a model there with one line, <code>.to('neuron')</code>. It opens as a public beta today. One customer, Deepgram, says it processes about 60% more audio per dollar than on its graphics cards.

<div class="why"><b>Why it matters</b><p>Think of NVIDIA as a plug that only fits its own socket. Each adapter like TorchNeuron makes it easier to switch, and more competition is what brings prices down.</p></div>

Source: [techcrunch.com](https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/) · <span class="tag tag-reported">Reported</span> · [pytorch.org](https://pytorch.org/blog/introducing-torchneuron-native-pytorch-backend-for-aws-trainium/) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### llama.cpp builds the first half of a private link to your home AI {#llama-cpp-connect}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>The llama.cpp server can now open a private, encrypted link to the outside world. The browser half that lets you use it is still in review.</p>

Running a model at home keeps your data private. But reaching it from your phone has meant a VPN or opening ports on your router. That is fiddly and can be unsafe.

On 19 October, llama.cpp added a test feature called <code>--connect</code>. It lets your home server open a direct, encrypted link, with no central server in between. Your API key still applies, so a stranger without it is turned away.

The catch: the web page that connects from the other end is still waiting for review. So most people cannot use it yet, and there is no version for Intel Macs.

<div class="why"><b>Why it matters</b><p>It is like a private phone line to your own computer. Once both halves are in place, a home AI can be as handy as a cloud chatbot, while your chats stay at home.</p></div>

Source: [github.com](https://github.com/ggml-org/llama.cpp/pull/28277) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Small models may not need to train their biggest part, the word table {#frozen-vocabulary}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>In a small model, a fixed 16 MB word table works about as well as the big learned one. The whole model shrinks to 46 MB.</p>

Every language model has a table that turns each token into numbers. In small models, that table is the biggest part. In Google's Gemma 3 270M, it holds 168 million of the 268 million parameters.

A paper from 15 October replaces it with a fixed 16 MB table that never changes during training. The fixed table did as well or better on three of four tests.

With a very compressed model body, the whole model became a 46 MB file. On a laptop's processor, it ran five to six times faster than a normal compressed version. It also learned 10,000 new words with little loss.

The catch: it is one author's preprint, tested on small models only.

<div class="why"><b>Why it matters</b><p>It is like finding that most of your suitcase was a heavy dictionary you barely used. Lighter models can run on cheap laptops, with no cloud at all.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2610.22428) · <span class="tag tag-official">Official</span>
{: .sources}
