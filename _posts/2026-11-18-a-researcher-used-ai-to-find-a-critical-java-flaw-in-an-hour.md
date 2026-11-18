---
title: "A researcher used AI to find a critical Java flaw in an hour"
summary: "A security firm used OpenAI's Codex to find a serious hole in Java for less than $200, and Oracle has fixed it. Also: new coding models from OpenAI and Microsoft, Nvidia's record quarter and Gemini does chores for free."
date: 2026-11-18 07:00:00 +0100
reviewed: false
checked: false
minutes: 7
explained: { main: "remote-code-execution", from: 1, more: ["cve", "benchmark"] }
today:
  - { t: "A researcher used AI to find a critical Java flaw for less than $200.", why: "Anyone who runs Java servers, like Jira or Jenkins." }
  - { t: "OpenAI and Microsoft both put new coding models into GitHub Copilot.", why: "Developers choosing which model writes their code." }
  - { t: "Nvidia's sales more than doubled, and its board won't bring Huang back.", why: "Anyone following the company that makes most AI chips." }
  - { t: "Gemini now does chores for free, and Google keeps chats for two months.", why: "Anyone who uses Gemini or lets an agent pay for things." }
other_lang_url: /da/2026/11/18/
items:
  - { n: 1, anchor: "java4shell", signal: big, tracks: [build, general], min: 1.5, source: official, number: "$200", number_label: "or less: what the AI cost to find the flaw and build a working attack, Calif says", topic: security, why: "When AI finds deep holes this cheaply, both defenders and attackers search more code, so fast updates matter more.", do: "Update Java on your servers to Oracle's November fix.", steps: { title: "How Java4Shell works", list: ["An attacker sends a crafted Base64 text", "Java's fast decoder writes past its memory", "The attacker can run code on the server"] } }
  - { n: 2, anchor: "gpt-6-2-mai-code-2", signal: big, tracks: [build], min: 1.5, source: official, number: "5%", number_label: "of the cost of Claude Opus 5.5, for 96% of its score on coding tests, Microsoft says of MAI Code 2", topic: code, why: "When one editor offers models from several labs, the labs must compete on price and quality every day.", do: "In Copilot, try GPT-6.2 Astra or MAI Code 2 on a task you know well." }
  - { n: 3, anchor: "nvidia-q3-huang", signal: worth, tracks: [general], min: 1, source: official, number: "$115.8B", number_label: "Nvidia's revenue last quarter, more than double a year ago", topic: business, why: "Demand for AI chips keeps growing even while Nvidia has no permanent leader." }
  - { n: 4, anchor: "gemini-tasks-retention", signal: worth, tracks: [general, europe], min: 1.5, source: official, topic: agent, why: "An agent that pays your bills needs your data, and Google now keeps chats longer.", do: "Check Gemini's new History and training settings when they reach you.", tiles: [{ n: "72 hours", t: "was how long Google kept chats with history off; now it is about two months" }] }
  - { n: 5, anchor: "sensenova-loop-9b", signal: worth, tracks: [build, europe], min: 1, source: official, number: "9B", number_label: "parameters, yet it matches a model three times its size on some agent tests", topic: open, why: "Models that think longer without more memory bring stronger AI to ordinary PCs." }
  - { n: 6, anchor: "multi-branch-transformer", signal: worth, tracks: [build, general], min: 1, source: official, number: "51.4%", number_label: "faster answers, at most, when a model's middle is split into parallel lanes", topic: research, why: "AI answers could get faster and cheaper without new chips, if the idea works at large scale.", tiles: [{ n: "34%", t: "less memory for the model's notes on earlier words" }] }
---

### 1. A researcher used AI to find a critical Java flaw in an hour {#java4shell}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>$200</b><span>or less: what the AI cost to find the flaw and build a working attack, Calif says</span></div>

<p class="short"><span>The short version</span>A security firm used OpenAI's Codex to find a serious hole in Java, which runs many business apps. Oracle fixed it on Tuesday, so update now.</p>

Java runs many business systems, from Jira to Jenkins. The language guards against data spilling past the memory it was given. But that guard does not cover the engine that runs Java itself.

That is where the security firm Calif found Java4Shell. It sits in a fast shortcut for decoding Base64, a common way to send data as text. A crafted string makes it write past its memory. Then an attacker can run their own code on servers like Jira, without logging in.

Researcher Quang Luong found the bug with OpenAI's Codex in about an hour. A working attack took two more hours. The AI cost less than $200 in total, Calif says.

The catch: only newer Intel and AMD chips with special instructions are affected. Each app also needs its own way to get the bad text in.

<div class="why"><b>Why it matters</b><p>Searching deep inside software for holes takes rare skill and time. When AI does the hard part for less than $200, defenders and attackers can both search far more code. Like cheap metal detectors, more gets found, by everyone. So how fast you update matters more.</p></div>

<p class="todo"><b>Do this:</b> Update Java on your servers to Oracle's November fix. If you cannot yet, Calif suggests starting Java with <code>-XX:-UseBASE64Intrinsics</code> for now.</p>

Sources: [calif.io](https://calif.io/java4shell/) · <span class="tag tag-official">Official</span> · [bleepingcomputer.com](https://www.bleepingcomputer.com/news/security/critical-java4shell-flaw-allows-rce-attacks-on-major-java-applications/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. OpenAI and Microsoft both launch new AI models for coding {#gpt-6-2-mai-code-2}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>5%</b><span>of the cost of Claude Opus 5.5, for 96% of its score on coding tests, Microsoft says of MAI Code 2</span></div>

<p class="short"><span>The short version</span>OpenAI released GPT-6.2 Astra and Sol, and Microsoft released its own MAI Code 2. Both are in GitHub Copilot now, and the fight is about price.</p>

#### <span>1 of 2</span> OpenAI makes its top model cheaper
A coding agent reads and writes a lot of text, so price adds up fast. OpenAI's new top model, GPT-6.2 Astra, costs 80% of what GPT-6 Astra cost. That is the same price as Anthropic's Claude Fable 5.2, Simon Willison writes. The smaller GPT-6.2 Sol keeps its old price.

The catch: Astra scores below Fable 5.2 on several tests, and early reviews are mixed. One tester saw it stop a long task for two hours to ask about a small detail.

#### <span>2 of 2</span> Microsoft brings its own coding model
Microsoft now puts its own models in Copilot: MAI Code 2 and a cheaper Flash version for routine work. Microsoft says MAI Code 2 reaches 96% of Claude Opus 5.5's score on four coding tests, at 5% of the cost.

The catch: Microsoft ran most of the tests itself, and its costs count a launch discount. It gives no prices in dollars.

<div class="why"><b>Why it matters</b><p>Picking an AI model for code used to mean picking a lab. Now one editor offers models from several labs, and you switch with a menu. It is like a fuel station with several brands at the pump: each brand must win you over at every fill-up.</p></div>

<p class="todo"><b>Try it:</b> In Copilot, run GPT-6.2 Astra or MAI Code 2 on a task you know well. MAI Code 2 Flash is also listed for the free plan.</p>

Sources: [github.blog (GPT-6.2)](https://github.blog/changelog/2026-11-17-openais-gpt-6-2-astra-and-gpt-6-2-sol-now-available) · <span class="tag tag-official">Official</span> · [simonwillison.net](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/) · <span class="tag tag-reported">Reported</span> · [microsoft.ai](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) · <span class="tag tag-official">Official</span> · [github.blog (MAI Code 2)](https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Nvidia's sales more than double, and its board won't bring Huang back {#nvidia-q3-huang}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$115.8B</b><span>Nvidia's revenue last quarter, more than double a year ago</span></div>

<p class="short"><span>The short version</span>Nvidia sold for $115.8B last quarter, more than twice as much as a year ago. On the same call, its chairman said Jensen Huang will not return as CEO.</p>

Most AI chips come from Nvidia, so its results show how much the world spends on AI. These were the first since Huang resigned.

Almost all of the money came from chips for data centers. For the next quarter, Nvidia expects $130.0B, without counting any data center sales in China.

Huang wrote on X that he would be honored to return. But chairman Harvey Jones said the board "does not intend to reinstate Jensen as CEO." Finance chief Colette Kress leads for now.

The catch: the board is investigating Huang, and the SEC is probing Nvidia, TechCrunch reports.

<div class="why"><b>Why it matters</b><p>The company at the center of the AI boom keeps growing fast while it has no permanent leader. It is like a record harvest in the year the farmer left. For now, demand for AI chips does not depend on one person.</p></div>

Sources: [nvidianews.nvidia.com](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-third-quarter-fiscal-2027) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/17/nvidia-says-it-doesnt-plan-to-reappoint-jensen-huang-as-ceo/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Gemini can now do chores for free, and Google keeps chats longer {#gemini-tasks-retention}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Gemini can now book, pay and shop for you, free in six countries. Separately, Google will keep chats for about two months, even with history turned off.</p>

#### <span>1 of 2</span> An agent for everyday chores
An AI agent does a job for you instead of just answering. Google's new Tasks in Gemini can book appointments, manage bills and buy groceries, using your email, calendar and payment methods. It is free in six countries, including the US and India.

Tasks run in a sealed-off computer just for your account. Gemini stops to ask before steps like clicking "Buy", and you can set a hard spending limit. The catch: Google says tasks can still fail, and its post does not mention Europe.

#### <span>2 of 2</span> Chats kept for two months
In a separate change, chats you have with history turned off will be kept for around two months. Before, it was 72 hours, TechCrunch reports, based on an older version of Google's privacy page. Google also splits one setting into two, so you can keep your history but say no to AI training.

<div class="why"><b>Why it matters</b><p>An agent that pays your bills needs to know a lot about you. So the two changes belong together: more help also means more of your data with Google, for longer. It is like giving a helper your house key: useful, but you want to know who keeps a copy, and for how long.</p></div>

<p class="todo"><b>Do this:</b> When the update reaches you, open Gemini's settings and check the new History and training switches.</p>

Sources: [blog.google (Tasks)](https://blog.google/innovation-and-ai/products/gemini-app/tasks-in-gemini-free-new-features/) · <span class="tag tag-official">Official</span> · [blog.google (settings)](https://blog.google/innovation-and-ai/products/gemini-app/updated-controls/) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### SenseNova's 9B model runs its layers twice to think longer {#sensenova-loop-9b}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>
<div class="number"><b>9B</b><span>parameters, yet it matches a model three times its size on some agent tests</span></div>

<p class="short"><span>The short version</span>SenseNova has released a free 9B model that runs most of its middle layers twice. It fits on a home graphics card and matches a much bigger model on some tests.</p>

A bigger model is usually smarter, but it also needs a bigger computer.

SenseNova-Loop-9B runs most of its middle layers twice, so it thinks longer without more memory. Compressed, it needs about 12 to 15 GiB of graphics memory, even for long texts. It reads text and images, under the free Apache 2.0 license.

On two agent tests, it scores like Qwen3.8-27B, a model three times its size. On a third test, it trails.

The catch: SenseNova ran the tests itself. You also have to log in and accept terms on Hugging Face to download it.

<div class="why"><b>Why it matters</b><p>Running layers twice is like reading a hard paragraph again: no new knowledge, but more time to think. If it holds up, stronger models can run on ordinary PCs, where your data never leaves the machine.</p></div>

Source: [huggingface.co](https://huggingface.co/sensenova/SenseNova-Loop-9B) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Splitting an AI model into parallel lanes makes it answer faster {#multi-branch-transformer}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>51.4%</b><span>faster answers, at most, when a model's middle is split into parallel lanes</span></div>

<p class="short"><span>The short version</span>Researchers split the middle of a language model into lanes that work side by side. It answered up to 51.4% faster, used less memory and learned more from the same training.</p>

A language model works like an assembly line: each layer waits for the one before. For long texts, it also keeps notes on earlier words, which fill up memory.

Gaotang Li and colleagues split the middle layers into branches that share one set of notes. A normal model needed up to 1.26 times as much training to match it. The notes took up to 34% less memory, and answers came up to 51.4% faster.

The catch: they only tested small models, and nobody has reviewed the paper yet.

<div class="why"><b>Why it matters</b><p>It is like opening more checkout lanes in a supermarket with the same staff: the line moves faster. If the idea works for big models too, AI answers could get faster and cheaper without new chips.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.19800) · <span class="tag tag-official">Official</span>
{: .sources}
