---
title: "Google's new Gemini 4 Neon is a mid-priced model for coding agents"
summary: "Google released Gemini 4 Neon, a model between its top and budget tiers, and it is already in GitHub Copilot. Also: AI helped find critical holes in NGINX and Ruby, Anthropic prices its stock at $83, and banks put agent risk on you."
date: 2026-11-19 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "prompt-caching", from: 1, more: ["mixture-of-experts", "remote-code-execution"] }
today:
  - { t: "Google released Gemini 4 Neon, a mid-priced model for coding agents.", why: "Developers and companies paying for AI agents." }
  - { t: "AI helped find critical holes in NGINX and Ruby, and fixes are out.", why: "Anyone who runs websites or Ruby apps." }
  - { t: "Anthropic priced its stock at $83 a share, and trading starts today.", why: "Anyone following how much AI labs are worth." }
  - { t: "Big US banks say you carry the risk if your AI agent gets hacked.", why: "Anyone who lets an AI tool into their bank account." }
other_lang_url: /da/2026/11/19/
items:
  - { n: 1, anchor: "gemini-4-neon", signal: big, tracks: [build, general], min: 2, source: official, number: "$3", number_label: "per million input tokens, between Google's budget and top models", topic: model, why: "Most agent work does not need the most expensive model, so a good middle option lowers the bill.", do: "If you pay for Gemini 4 Carbon, run the same task on Neon and compare the cost." }
  - { n: 2, anchor: "nginx-ruby-ai-bugs", signal: big, tracks: [build, general], min: 1.5, source: official, number: "225 million", number_label: "websites run on NGINX, which had a critical hole found with AI", topic: security, why: "AI makes old code cheaper to search, so holes that hid for years now surface in weeks.", do: "Update NGINX to 1.30.7 or 1.31.9, and Ruby to 4.0.10, 3.4.13 or 3.3.14." }
  - { n: 3, anchor: "anthropic-ipo-83", signal: worth, tracks: [general], min: 1, source: official, number: "$83", number_label: "per share, above the $70 to $78 range Anthropic first set", topic: money, why: "From today, the public sets the price of an AI lab every day, not a few investors." }
  - { n: 4, anchor: "banks-ai-agent-liability", signal: worth, tracks: [general], min: 1.5, source: reported, topic: money, why: "An agent with your bank login acts as you, so the bank treats its mistakes as yours.", do: "Before you give an AI tool access to your bank, read your bank's terms." }
  - { n: 5, anchor: "moe-expert-streaming", signal: worth, tracks: [build, europe], min: 1.5, source: official, number: "180B", number_label: "parameters, running on a laptop with 32 GB of memory", topic: local, why: "Large models can run on your own laptop, where your data stays with you.", tiles: [{ n: "13.9", t: "tokens per second, fast enough to read along" }] }
  - { n: 6, anchor: "resolution-hypothesis", signal: worth, tracks: [build, general], min: 1, source: official, number: "10 million", number_label: "AI calls, to test whether self-improving agents really improve", topic: research, why: "Claims that an agent improves itself may be luck, unless the test can tell better from worse." }
---

### 1. Google's new Gemini 4 Neon is a mid-priced model for coding agents {#gemini-4-neon}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">2 min</span></p>
<div class="number"><b>$3</b><span>per million input tokens, between Google's budget and top models</span></div>

<p class="short"><span>The short version</span>Google released Gemini 4 Neon, a model that sits between its top model Carbon and its budget model Hydrogen. It is already in GitHub Copilot, and Google says it does a task for less than Carbon.</p>

#### <span>1 of 2</span> A middle model for long jobs
An AI agent that writes code works for minutes or hours. It reads the same files again and again, so the price adds up fast.

Neon is Google's answer. It costs $3 per million input tokens, the small pieces of text a model reads. Repeated text that the model has seen before costs only $0.15, a 95% discount, Google says. That discount is called caching (see Explained below). On a broad outside test, a task costs 32% less with Neon than with Carbon, Google says.

It is in Google's API and for paying Gemini app users. On the same day, GitHub added it to Copilot's paid plans.

The catch: Google chose which results to show. On the overall ranking from Artificial Analysis, Neon is third, behind larger and slower models.

#### <span>2 of 2</span> An agent that keeps improving your app
Google Labs also showed Stitch Loop, an experiment for software that is already live. It reads your code, logs and user feedback, suggests a fix, builds it and opens a pull request on GitHub. Nothing merges until a person reviews it. For now, there is only a waitlist.

<div class="why"><b>Why it matters</b><p>Most agent work is not the hardest problem in the world. It is long, repetitive work, like a carpenter's day of measuring and cutting. A good middle model is like a solid tool at a fair price: you save the expensive one for the few jobs that need it.</p></div>

<p class="todo"><b>Try it:</b> If you pay for Gemini 4 Carbon, run the same task on Neon and compare the cost.</p>

Sources: [blog.google (Neon)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-11-18-gemini-4-neon-in-github-copilot) · <span class="tag tag-official">Official</span> · [blog.google (Stitch Loop)](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-loop/) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. AI helped find critical holes in NGINX and Ruby, and fixes are out {#nginx-ruby-ai-bugs}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>225 million</b><span>websites run on NGINX, which had a critical hole found with AI</span></div>

<p class="short"><span>The short version</span>Security researchers used AI to find serious holes in NGINX, a web server behind a huge share of websites, and in the Ruby language. Both have fixes, so update now.</p>

NGINX is the program that sends web pages to your browser on more than 225 million websites. The security firm Wiz says its AI scanning tool found two critical holes in its HTTP/2 code, a modern way to load pages faster. Wiz then used Gemini and ChatGPT to check how bad they were.

One of the holes works in the normal setup and has been there since 2015. An attacker could run their own code on the server. Wiz keeps its attack code private for now.

On the same day, Ruby fixed seven holes in how it handles text patterns. Four of them were found by a researcher at Ada Logics together with Anthropic, the maker of Claude. Some could let an attacker run code, if an app lets users write their own search patterns.

<div class="why"><b>Why it matters</b><p>Bugs that hid for ten years are not easy to find. They hid because people only had time to look at so much code. AI is like a searchlight that never gets tired, so old holes now surface in weeks. That is good for defenders, but only if updates come fast.</p></div>

<p class="todo"><b>Do this:</b> Update NGINX to 1.30.7 or 1.31.9, and Ruby to 4.0.10, 3.4.13 or 3.3.14. Ruby 3.2 and older get no fix. If you cannot update NGINX yet, Wiz suggests turning HTTP/2 off for now.</p>

Sources: [wiz.io](https://www.wiz.io/blog/nginx-http2-rce-vulnerabilities) · <span class="tag tag-official">Official</span> · [ruby-lang.org](https://www.ruby-lang.org/en/news/2026/11/18/multiple-vulnerabilities-in-regexp-and-string/) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Anthropic prices its stock at $83 a share, above its own range {#anthropic-ipo-83}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$83</b><span>per share, above the $70 to $78 range Anthropic first set</span></div>

<p class="short"><span>The short version</span>Anthropic, the maker of Claude, sold its shares for $83 each, more than the range it set last week. Trading starts today on Nasdaq under the name ANT.</p>

Last week, we wrote that Anthropic planned to sell its shares for $70 to $78. Now the final price is set, and it is higher.

Anthropic also sells more shares than planned: 980 million in total, most of them new. At that price, the company is worth about $1.5 trillion, TechCrunch reports. Chip and cloud firms like Nvidia and Microsoft also buy shares on the side, TechCrunch writes.

A note from us: 7am AI is written with Claude, so we give Anthropic no more room than any other company.

The catch: a high first price says what buyers paid today, not what the shares will be worth in a year.

<div class="why"><b>Why it matters</b><p>Until now, a few big investors decided what an AI lab was worth. From today, that price moves every day, in public. A strong price makes it easier to pay for chips and power, and a falling one makes it harder.</p></div>

Sources: [anthropic.com](https://www.anthropic.com/news/anthropic-prices-initial-public-offering) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/11/18/anthropic-reportedly-prices-ipo-at-83-a-share-above-projected-range/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 4. Big US banks say you carry the risk if your AI agent gets hacked {#banks-ai-agent-liability}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Citi and PNC have changed their terms, so customers are responsible for what an outside AI agent does in their account. That also counts if the agent is hacked.</p>

AI agents that pay bills for you are coming fast. But who pays if something goes wrong?

US banks have started to answer, and the answer is you. Citi changed its online terms this week, and PNC changed its terms on Wednesday, TechCrunch reports. JPMorgan and Bank of America did something similar last month. If an agent leaks your login or gets hacked, you are responsible for what the hackers do, Citi's terms say.

There is an exception. Agents that Citi offers itself do not carry that risk for you, its terms say.

The catch: so far, this is only about US banks, and the report does not mention European banks.

<div class="why"><b>Why it matters</b><p>Giving an agent your bank login is like giving a stranger your card and PIN. The bank cannot tell the agent from you, so it treats the agent's mistakes as yours.</p></div>

<p class="todo"><b>Do this:</b> Before you give an AI tool access to your bank, read your bank's terms.</p>

Source: [techcrunch.com](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### A 180B model runs on a 32 GB laptop by reading parts from disk {#moe-expert-streaming}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>180B</b><span>parameters, running on a laptop with 32 GB of memory</span></div>

<p class="short"><span>The short version</span>A developer writing on Hugging Face's blog ran a 180B model on a MacBook with 32 GB of memory. The trick is to keep most of the model on the disk and read only the parts it needs.</p>

Big models usually need more memory than a laptop has. But some are built from many small experts, and only a few work on each word (see Explained below).

Tarek Ziadé used that by shrinking the experts and leaving them on the disk. When the model needs an expert, it reads it from the disk, and it guesses ahead which ones come next. The model used about 18 GiB of memory after loading. It wrote 13.9 tokens per second, fast enough to read along.

The catch: it is one person's test, and the code is not part of Transformers yet. Converting the model took about 5 hours.

<div class="why"><b>Why it matters</b><p>It is like a library that keeps most books in the basement and fetches the few you ask for. You do not need a bigger building, just a fast stairway. So large models can run on your own laptop, where your data stays with you.</p></div>

Source: [huggingface.co](https://huggingface.co/blog/moe-expert-streaming) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Self-improving AI agents often cannot tell better from worse {#resolution-hypothesis}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>10 million</b><span>AI calls, to test whether self-improving agents really improve</span></div>

<p class="short"><span>The short version</span>Researchers tested seven methods that let AI agents improve their own prompts and skills. The agents found good changes, but their tests picked the good ones no better than chance.</p>

Many tools promise agents that get better on their own: the agent writes new versions of its instructions, tests them and keeps the best.

Yuanhao Zeng and colleagues checked if that works. They ran seven such methods on six models, with more than 10 million AI calls in total. Helpful changes did show up. But the tests were so noisy that picking the winner was close to random. The typical gaps of a few points between methods were smaller than the gap between two runs of the same method.

The catch: the paper has not been peer reviewed yet.

<div class="why"><b>Why it matters</b><p>It is like a coach who picks players from one noisy practice match: the team may get worse by luck. Before you trust a claim that an agent improved itself, ask how the test was run, and if it was run more than once.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.23068) · <span class="tag tag-official">Official</span>
{: .sources}
