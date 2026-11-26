---
title: "AI hacking agents are breaking in through old holes, UK warns"
summary: "Britain's cyber agency says attacks run by AI agents have risen since September, and Amazon shows one that found an unknown hole in 11 minutes. Also: US states fight a sale of Character.AI chats, New York bans AI toys, a test of agents on everyday chores, OpenAI's matrix proof, a 27B model on a gaming card, and agents that rarely fix their own mistakes."
date: 2026-11-26 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "zero-day", from: 1, more: ["ai-agent", "quantization"] }
today:
  - { t: "Britain says AI agents now find and use old security holes in minutes.", why: "Anyone who runs a website, server or app." }
  - { t: "US states fight a sale of Character.AI chats, and New York bans AI toys.", why: "Parents, and anyone who confides in a chatbot." }
  - { t: "A new test found the best AI agents pass 62.5% of everyday chores.", why: "Anyone choosing an agent or paying for one." }
  - { t: "OpenAI posted a proof of the exact limit for multiplying matrices.", why: "Anyone curious about AI labs doing mathematics." }
other_lang_url: /da/2026/11/26/
items:
  - { n: 1, anchor: "ai-hacking-agents", signal: big, tracks: [build, general], min: 1.5, source: official, number: "11 minutes", number_label: "for an AI agent to find an unknown hole and write files", topic: security, why: "Trying every door used to be slow. Now it is free and never sleeps, so the forgotten door matters most.", do: "List everything your team has online, and put what does not need to be public behind a login.", steps: { title: "How Amazon's observed agents worked", list: ["The attacker typed one goal: obtain shell access", "Agents mapped a medical imaging app at a university", "In about 11 minutes they could write files", "Later they took full control of the server"] } }
  - { n: 2, anchor: "chatbot-chats-toys", signal: worth, tracks: [general], min: 1.5, source: official, number: "21 million", number_label: "US accounts whose Character.AI chats are up for auction", topic: law, why: "A chat log is closer to a diary than a shopping list, and lawmakers are starting to treat it that way." }
  - { n: 3, anchor: "shellbench", signal: worth, tracks: [build, general], min: 1.5, source: official, number: "62.5%", number_label: "of everyday tasks passed by the best model in one try", topic: agent, why: "An agent that only sometimes gets it right needs checking every time, so a cheaper, nearly as good model is often the better buy.", tiles: [{ n: "48.8%", t: "of tasks the top model passed on all three tries" }] }
  - { n: 4, anchor: "matrix-exponent", signal: quick, tracks: [general], min: 1, source: official, number: "9/4", number_label: "the exact limit OpenAI says it has proved", topic: research, why: "If the proof holds, a question mathematicians have chased for decades is closed, by a company that builds AI." }
  - { n: 5, anchor: "ternary-bonsai-2-5", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "5.93 GB", number_label: "file size, against 53.8 GB at full size", topic: local, why: "Most of the skill survived the shrinking, so a capable coding model now fits on a gaming PC.", do: "With a 10 GB graphics card, try one of the standard files in a recent llama.cpp." }
  - { n: 6, anchor: "secondchance", signal: worth, tracks: [build, general], min: 1, source: official, topic: research, why: "Finishing a task and fixing a mistake are different skills, so an agent can look done and still be wrong.", bars: { title: "Full recoveries by the best model", max: 100, rows: [{ l: "Alone", v: 16, t: "16%" }, { l: "With a plan", v: 27, t: "27%", hl: true }] } }
---

### 1. AI hacking agents are breaking in through old holes, UK warns {#ai-hacking-agents}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>11 minutes</b><span>for an AI agent to find an unknown hole and write files</span></div>

<p class="short"><span>The short version</span>Britain's cyber agency says attacks run by AI agents have risen since September. Amazon describes one such attack, where agents found an unknown hole and took over a server.</p>

Many break-ins need no clever tricks. A forgotten test server or a password left in code will do. Finding those took time, and that time protected many companies.

On Tuesday, the UK's National Cyber Security Centre (NCSC) reported a "marked rise" in attacks by AI agents since September. Attackers use free testing tools such as ARTEX and Cairn. The weaknesses are old, but agents go "from discovery to exploitation in minutes."

Amazon showed what that looks like last week. It found an attacker's Cairn server left open online, history and all. The attacker, likely linked to China, gave the agents one goal: "obtain shell access."

At a university, the agents found an unknown hole (a zero-day, see Explained below) in a medical imaging app in about 11 minutes. They later used it to take full control of the server. Against a better protected database, they tried for about 16 hours and failed.

The catch: the NCSC gives no numbers, and Amazon describes one attacker. The app's makers have since fixed the hole.

<div class="why"><b>Why it matters</b><p>A burglar who tries every door handle on the street used to be slow. Now the handle-trying is free and never sleeps, so the door you forgot is the one that counts.</p></div>

<p class="todo"><b>Do this:</b> List everything your team has on the internet, and put the services that do not need to be public behind a login.</p>

Sources: [ncsc.gov.uk](https://www.ncsc.gov.uk/blogs/familiar-weaknesses-exploited-faster-defending-against-agentic-cyber-attacks) · <span class="tag tag-official">Official</span> · [aws.amazon.com](https://aws.amazon.com/blogs/security/chinese-nexus-actors-cairn-ai-agents-found-a-zero-day-on-their-own/) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/24/uk-warns-ai-driven-cyberattacks-are-exposing-years-of-weak-security/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. US states fight a sale of Character.AI chats, and New York bans AI toys {#chatbot-chats-toys}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>21 million</b><span>US accounts whose Character.AI chats are up for auction</span></div>

<p class="short"><span>The short version</span>A group of 42 US attorneys general is trying to stop the sale of Character.AI users' chats in its bankruptcy. Separately, New York has banned toys with AI chatbots for five years.</p>

People tell chatbots things they would not tell a friend. Two US fights this week were about those conversations.

#### <span>1 of 2</span> Character.AI's chats are up for auction
Character.AI filed for bankruptcy in October, and its assets go to auction on 1 December. They include chat histories from more than 21 million US accounts, TechCrunch reports. More than 2.1 million of them belong to minors.

The attorneys general say the company promised users that their data would not be sold, and a buyer would not have to keep that promise. The only known bidder is an anonymous company set up on 13 November.

#### <span>2 of 2</span> New York bans chatbot toys
On Tuesday, Governor Kathy Hochul signed a five-year ban on toys with built-in AI chatbots, such as talking teddy bears. It starts 90 days after signing, so it does not cover this Christmas. California banned them first.

The same week, Common Sense Media tested five such toys. Some told children they loved them and promised to keep secrets. Most would explain how to find matches, knives or pills.

<div class="why"><b>Why it matters</b><p>A chat log is closer to a diary than to a shopping list. Selling it with the furniture of a failed company, or putting it inside a teddy bear, is where lawmakers are now drawing lines.</p></div>

Sources: [techcrunch.com (Character.AI)](https://techcrunch.com/2026/11/25/state-ags-fight-character-ais-plan-to-auction-off-users-private-chats/) · <span class="tag tag-reported">Reported</span> · [governor.ny.gov](https://www.governor.ny.gov/news/consumers-begin-their-holiday-shopping-season-governor-hochul-signs-five-year-ban-ai-chatbot) · <span class="tag tag-official">Official</span> · [techcrunch.com (toys)](https://techcrunch.com/2026/11/25/want-to-buy-your-kid-an-ai-toy-this-christmas-not-in-new-york/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. The best AI agents passed 62.5% of everyday tasks in a new test {#shellbench}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>62.5%</b><span>of everyday tasks passed by the best model in one try</span></div>

<p class="short"><span>The short version</span>A new test gave AI agents 100 ordinary chores, like planning a dinner. The best model passed 62.5% in one try, and the model mattered far more than the app around it.</p>

Agents are sold as helpers for daily life, but most tests measure coding. So it is hard to know how they do at chores.

ShellBench, published on Tuesday by the OpenClaw Foundation and researchers from Hugging Face and others, fills that gap. It ran 12 models in five agent apps, including Claude Code and Codex. GPT-6 Astra scored best, with Claude Fable 5.2 and GPT-6.1 Sol close behind.

The more useful numbers sit underneath. Astra passed only 48.8% of tasks on all three tries, so a request that works once can fail the next time. Sol came within 1.1 points of the top at about a sixth of the price.

And swapping the app around a model changed scores far less than swapping the model.

The catch: the foundation behind the test also makes one of the apps it tested.

<div class="why"><b>Why it matters</b><p>An agent that only sometimes gets it right is like a new colleague whose work you check every time. Until the all-three-tries number goes up, the cheaper model that is almost as good is often the smarter buy.</p></div>

Sources: [openclaw.ai](https://openclaw.ai/blog/shellbench) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/24/even-the-best-ai-agents-struggle-with-everyday-life/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. OpenAI says it has proved how fast matrices can ever be multiplied {#matrix-exponent}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>9/4</b><span>the exact limit OpenAI says it has proved</span></div>

<p class="short"><span>The short version</span>OpenAI posted a proof that multiplying large grids of numbers can never get cheaper than a fixed limit. Nobody outside OpenAI has checked it yet.</p>

Multiplying matrices, big grids of numbers, is much of the work inside AI models. Mathematicians have found shortcuts for decades and asked how far they can go.

The answer is one number for how fast the work grows. The school method has 3, and lower is faster. Before OpenAI, the best shortcut had 2.371.

OpenAI had already shown that 9/4, or 2.25, can be reached. On Tuesday it posted a paper saying nothing can go lower.

The catch: the paper is 111 pages, names no human authors, and has not been reviewed by other mathematicians. Proving a limit also makes no program faster.

<div class="why"><b>Why it matters</b><p>It is like proving the fastest mile anyone can ever run, rather than running it. If the proof holds, a question chased for decades is closed, by a company that builds AI.</p></div>

Source: [github.com/openai](https://github.com/openai/math/blob/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026/paper.pdf) · <span class="tag tag-official">Official</span>
{: .sources}

## Open source & local AI

### Prism ML squeezes a 27B coding model into a 5.93 GB file {#ternary-bonsai-2-5}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>5.93 GB</b><span>file size, against 53.8 GB at full size</span></div>

<p class="short"><span>The short version</span>Prism ML released Ternary Bonsai 2.5, a shrunken version of Qwen's 27B model for coding agents. It is small enough for a gaming graphics card and, on Prism's own tests, keeps most of its skill.</p>

Good open models for coding agents are usually too big for a home computer. Qwen3.8 27B at full size is a 53.8 GB file.

Prism ML used quantization (see Explained below), which stores each number in the model with much less detail. The file drops to 5.93 GB, and one user runs it on a graphics card with 10 GB. It is free under Apache 2.0.

The catch: tool use is almost unchanged on Prism's own tests, but coding drops more. The smallest file needs Prism's own build of llama.cpp, but slightly larger ones run in the standard version.

<div class="why"><b>Why it matters</b><p>Shrinking a model is like saving a photo as a much smaller file. Usually you lose detail you can see. Here most of it survived, so a capable coding model fits on a gaming PC.</p></div>

<p class="todo"><b>Try it:</b> With a 10 GB graphics card, try one of the standard files in a recent llama.cpp.</p>

Sources: [huggingface.co](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) · <span class="tag tag-official">Official</span> · [prismml.com](https://prismml.com/news/bonsai-2-5-27b) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### AI agents rarely fix their own mistakes, a new test finds {#secondchance}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>Researchers handed AI agents their own earlier mistakes and asked them to recover. The best model fully recovered in 16% of cases on its own.</p>

When an agent makes a mistake halfway through a task, it often just keeps going. The question is whether it notices and puts things right.

Atahan Dokme, Adar Avsian and Larry Heck collected real mistakes agents made in three common tests. They restarted 12 models just after each error, with more help each time, up to a plan for the fix.

The best model, GPT-6.1 Sol, fully recovered in 16% of cases alone and in 27% with the plan.

Success scores also hide damage. In one test, 40 of 84 tasks that counted as done still had the original error in them.

The catch: it is a preprint, each case ran only once, and most of the models tested are older open ones.

<div class="why"><b>Why it matters</b><p>Finishing a task and fixing a mistake are different skills. Like a cashier who closes the till on time with the wrong total, an agent can look done and still leave the error behind.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.31586) · <span class="tag tag-official">Official</span>
{: .sources}
