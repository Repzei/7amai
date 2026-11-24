---
title: "OpenAI and Cisco release open-source shields for unpatched Linux servers"
summary: "OpenAI and Cisco released Shirudo, a free tool that blocks a known hole on a running Linux server until the patch is in. Also: Nvidia brings Jensen Huang back, Google's AI Mode reads your Wallet, Anthropic's agents approve code, Amazon buys Decart's chip software, a llama.cpp update fits models to your memory, and a study of agent skills."
date: 2026-11-24 07:00:00 +0100
reviewed: false
checked: false
control: pending
minutes: 7
explained: { main: "ebpf", from: 1, more: ["quantization", "ai-agent"] }
today:
  - { t: "OpenAI and Cisco released a free tool that blocks known holes until servers are patched.", why: "Anyone who runs Linux servers or keeps software up to date." }
  - { t: "Nvidia's board brought back Jensen Huang as CEO, less than two weeks after he quit.", why: "Anyone who follows the company behind most AI chips." }
  - { t: "Google's AI Mode in Search can now read your Wallet, and soon your Drive.", why: "Anyone who uses Google Search and cares about privacy." }
  - { t: "Anthropic launched Claude Ship, agents that fix and approve routine code changes.", why: "Teams drowning in pull requests from coding agents." }
  - { t: "Amazon is buying Decart's software that runs AI models well on many chips.", why: "Anyone watching for alternatives to Nvidia chips." }
other_lang_url: /da/2026/11/24/
items:
  - { n: 1, anchor: "shirudo-shields", signal: big, tracks: [build, general], min: 1.5, source: official, topic: security, why: "AI finds holes in hours, but patches take longer, so a shield blocks the hole in the meantime.", steps: { title: "How a Shirudo shield works", list: ["A known hole is found", "AI drafts a shield for it", "A person approves the shield", "It blocks the attack without a restart"] } }
  - { n: 2, anchor: "nvidia-huang-returns", signal: big, tracks: [general], min: 1, source: official, number: "27%", number_label: "rise in Nvidia's shares on Monday morning", topic: chips, why: "The company that makes most AI chips has its old leader back, but the questions are not settled." }
  - { n: 3, anchor: "ai-mode-wallet-drive", signal: worth, tracks: [general, europe], min: 1, source: official, topic: news, why: "A search box that knows your cards and files gives better answers, but holds all of it in one place." }
  - { n: 4, anchor: "claude-ship", signal: worth, tracks: [build], min: 1.5, source: official, topic: code, why: "When machines write most of the code, checking is the slow step, so people write the rules instead." }
  - { n: 5, anchor: "amazon-decart", signal: quick, tracks: [general], min: 1, source: official, number: "$7.5B", number_label: "what Amazon pays for Decart's technology, Bloomberg reports", topic: money, why: "A rival chip only helps if your software runs well on it." }
  - { n: 6, anchor: "llama-cpp-target-size", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: local, why: "You can now get the best model quality that fits your exact memory, without guessing.", do: "Update llama.cpp and try llama-quantize with --target-size set just below your memory." }
  - { n: 7, anchor: "skillprivus", signal: worth, tracks: [general, build], min: 1, source: official, number: "307", number_label: "of 563 agent skills that touch personal data were flagged", topic: research, why: "A skill can do exactly what it promises and still take more data than it needs." }
---

### 1. OpenAI and Cisco release open-source shields for unpatched Linux servers {#shirudo-shields}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>OpenAI and Cisco released Shirudo, a free tool that blocks a known hole on a running Linux server while the real patch is tested. AI can write the shield, but a person must approve it.</p>

Last week we wrote that a researcher used AI to find a critical Java flaw, Java4Shell, in about an hour. But fixing holes still takes time, because teams test each patch first. In that gap, servers are open.

On Monday OpenAI and Cisco released Shirudo, Japanese for "shield". It uses eBPF (see Explained below), a way to run small checked programs inside Linux. A shield blocks the exact code behind one hole, without a restart.

In a test, OpenAI's Codex wrote a shield for Java4Shell. It added a check on the input to Java's Base64 decoder. The shield then stopped an attack on a running Elasticsearch server, and the service stayed up.

Control stays with people. Every shield is signed and checked before it loads, and operators can watch what it would block before turning it on.

The catch: Shirudo is still a pre-release. It needs kernel patches and a TPM chip, so servers need changes before they can use it. And the Java4Shell result is one controlled test.

<div class="why"><b>Why it matters</b><p>A patch is like replacing a broken lock, which takes time. A shield is like putting a bar across the door until the new lock arrives. If AI finds holes in hours, defenders need a bar they can put up in hours too.</p></div>

Sources: [openai.com](https://openai.com/index/introducing-shirudo/) · <span class="tag tag-official">Official</span> · [github.com](https://github.com/shirudo-dev/shirudo) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Nvidia brings back Jensen Huang as CEO, less than two weeks after he quit {#nvidia-huang-returns}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>27%</b><span>rise in Nvidia's shares on Monday morning</span></div>

<p class="short"><span>The short version</span>Nvidia's board unanimously made Jensen Huang CEO again on Monday. It says US officials told it his return poses no national security risk.</p>

Huang resigned on 12 November. Reports had linked him to a woman whom the US government suspects of spying for China. Last week, the chairman still said the board did not intend to bring him back.

Now the board has changed its mind. It says it is satisfied with his "candor and ability to lead", after input from senior US officials. President Trump said the government has no evidence that Huang broke the law, TechCrunch reports. The shares were up 27% on Monday morning.

The catch: the questions are not settled. An independent board committee is still investigating whether Huang was targeted by a foreign spy effort. Nvidia is also adding a committee for export rules and national security.

<div class="why"><b>Why it matters</b><p>Most AI is trained on Nvidia chips, so its leadership affects the whole industry. The captain is back on the bridge. But the board has also put new people in charge of watching the compass.</p></div>

Sources: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/23/nvidia-reverses-course-and-brings-jensen-huang-back-as-ceo/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Google's AI Mode in Search can now read your Wallet, and soon your Drive {#ai-mode-wallet-drive}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Google is letting AI Mode in Search use your Google Wallet to answer money questions. Drive and the Gemini app follow in the coming weeks, and it is all opt-in.</p>

AI Mode is the chat-style search in Google. If you allow it, it can already use your Gmail, Calendar and Photos.

On Monday Google started adding Wallet, so AI Mode can help you cut spending or use your card rewards. Google says it can only read your accounts, not move your money. Your files in Drive and your Gemini chats come next.

You choose which apps to connect in your Search settings, and you can turn them off again. Google also plans an icon that shows which of your data an answer used.

The catch: that icon is not there yet, and Google does not say which countries get this.

<div class="why"><b>Why it matters</b><p>A search box that knows your cards and your files gives better answers. But it also becomes the one place where all of that meets. It is like giving one person the keys to your mailbox, your desk and your wallet.</p></div>

Source: [blog.google](https://blog.google/products-and-platforms/products/search/google-search-personal-intelligence-apps/) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Anthropic's Claude Ship lets agents fix and approve routine code changes {#claude-ship}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Anthropic launched Claude Ship, a set of agents that review code changes, fix failing checks and can approve routine changes under rules your team writes.</p>

Coding agents now write code faster than people can review it. So the queue of pull requests, the proposed changes waiting for a human, keeps growing.

Claude Ship tackles that queue in three parts. Code Review, which already exists, flags problems in each change. PR Steward, in beta, fixes failing tests and review comments, but never approves. Claude Approvals, also in beta, approves changes that match a policy your team writes in plain language.

Anthropic says that on its Claude Code team, merged changes more than doubled from June to September. The share of changes that had to be undone fell by more than 40%.

The catch: those are Anthropic's own numbers about its own team. It is only for Team and Enterprise plans on GitHub, and you pay per token.

<div class="why"><b>Why it matters</b><p>When machines write most of the code, the slow step is no longer typing. It is checking. Claude Ship moves the human from checking every change to writing the rules for which changes need them.</p></div>

Sources: [claude.com](https://claude.com/resources/articles/introducing-claude-ship) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. Amazon buys Decart's software that runs AI models well on many chips {#amazon-decart}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$7.5B</b><span>what Amazon pays for Decart's technology, Bloomberg reports</span></div>

<p class="short"><span>The short version</span>Amazon is buying the technology and team behind Decart's software that makes AI models run efficiently on different chips. Bloomberg puts the price at about $7.5B.</p>

Nvidia wins partly on software. Most AI code is written for its chips, so switching is hard.

Decart, an Israeli startup, built software that runs AI models fast on chips from Nvidia, Amazon and Google. Amazon takes that technology and the team. TechCrunch reports that Amazon is preparing to sell its own Trainium chip to other companies.

The catch: Amazon has not confirmed the price, and the deal still needs approval from regulators.

<div class="why"><b>Why it matters</b><p>A rival chip only helps if your software runs well on it. Decart's tools are like an adapter plug that makes the new socket usable.</p></div>

Sources: [aboutamazon.com](https://www.aboutamazon.com/news/company-news/amazon-decart-ai-optimization) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### llama.cpp can now shrink a model to fit your exact memory {#llama-cpp-target-size}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>The local AI tool llama.cpp can now shrink a model to exactly the size you ask for. It picks the mix that loses the least quality.</p>

To run a model at home, you usually shrink it with quantization (see Explained below). But the ready-made sizes rarely match your computer. One file may leave memory unused, and the next one up does not fit.

A change merged into llama.cpp on Monday fixes that. You give llama-quantize a target, such as --target-size 23.85g for a 24 GB graphics card. It then gives more detail to the parts of the model where it matters most.

The author tested it on 34 models. It beat the standard sizes in 195 of 238 comparisons, and tied in 26 more.

The catch: those are the author's own tests, and another tester found one model that got worse at most sizes.

<div class="why"><b>Why it matters</b><p>It is like packing a suitcase by weight limit instead of by fixed bag sizes. You get to bring the most model your machine can carry.</p></div>

<p class="todo"><b>Try it:</b> Update llama.cpp and try llama-quantize with --target-size set just below your memory. It needs a fresh importance file from llama-imatrix.</p>

Sources: [github.com (change)](https://github.com/ggml-org/llama.cpp/pull/15550) · <span class="tag tag-official">Official</span> · [github.com (release)](https://github.com/ggml-org/llama.cpp/releases/tag/b12669) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### More than half of agent skills that touch personal data may misuse it {#skillprivus}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span><span class="track">1 min</span></p>
<div class="number"><b>307</b><span>of 563 agent skills that touch personal data were flagged</span></div>

<p class="short"><span>The short version</span>Researchers checked 726 public skills for AI agents before installing them. Of the 563 that handle personal data, 307 were flagged for possible privacy harms.</p>

Skills are small add-ons that teach an AI assistant a new task, such as sorting email or filling in forms. You install them like apps, and they can reach your files.

Mariana Fernandez-Espinosa and three colleagues built SkillPrivus, a tool that reads a skill's code and instructions without running it. It checks whether each use of data fits the task. A doctor may share your file with a nurse, but not with your boss.

The harms were not malware. Skills that did their job still guessed sensitive facts about users, kept data they did not need, or sent it to someone unexpected. The tool agreed with three human checkers 83.2% of the time.

The catch: a flag means a possible harm, not a proven one. The paper has not been peer reviewed yet.

<div class="why"><b>Why it matters</b><p>A skill can do exactly what it promises and still take more than it needs. What it does with your data matters as much as whether it works.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.26747) · <span class="tag tag-official">Official</span>
{: .sources}
