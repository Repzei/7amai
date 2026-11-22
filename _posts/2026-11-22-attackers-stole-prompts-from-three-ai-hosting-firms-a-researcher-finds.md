---
title: "Attackers stole prompts from three AI hosting firms, a researcher finds"
summary: "A researcher planted fake secrets in about 2 million AI prompts and found that attackers stole data from three hosting firms. Also: OpenAI says its models improved AMD's chip designs, AI reads programs as raw bytes, China plans rules for billing tokens, adapters that fit an open model to coding tools, and a model that edits its own weights."
date: 2026-11-22 07:00:00 +0100
reviewed: false
checked: true
minutes: 7
explained: { main: "zero-data-retention", from: 1, more: ["token", "open-weight"] }
today:
  - { t: "Attackers stole prompts from three AI hosting firms, and some no-storage promises failed.", why: "Anyone who sends code or customer data to AI models." }
  - { t: "OpenAI says its models made parts of AMD's chip designs up to 14% better.", why: "Anyone watching the price and supply of AI chips." }
  - { t: "An AI model read, fixed and wrote small programs straight from their raw bytes.", why: "Security teams and anyone checking suspicious files." }
  - { t: "China plans standards for how AI tokens are measured and billed.", why: "Anyone comparing what AI services cost." }
other_lang_url: /da/2026/11/22/
items:
  - { n: 1, anchor: "ai-prompt-leaks", signal: big, tracks: [build, general, europe], min: 2, source: official, number: "2 million", number_label: "test prompts with planted fake secrets", topic: security, why: "A privacy setting only binds the first company your prompt reaches, not the ones behind it.", do: "Keep passwords and keys out of what you send to AI models, and check for a notice from OpenRouter or Together." }
  - { n: 2, anchor: "openai-amd-chip-design", signal: worth, tracks: [general], min: 1, source: official, number: "14%", number_label: "better on AMD's GPU design, at best", topic: chips, why: "AI is starting to improve the chips that AI itself runs on." }
  - { n: 3, anchor: "ai-reads-machine-code", signal: worth, tracks: [build], min: 1.5, source: official, topic: security, why: "Reading raw machine code was a rare skill, and now a model can do it for small programs." }
  - { n: 4, anchor: "china-token-standards", signal: quick, tracks: [general], min: 1, source: reported, topic: price, why: "A shared way to count tokens would make AI prices easier to compare.", bars: { title: "Daily AI tokens used in China", rows: [{ l: "March", v: 140, t: "140 trillion" }, { l: "June", v: 500, t: "500 trillion", hl: true }] } }
  - { n: 5, anchor: "harness-adapters", signal: worth, tracks: [build, europe], min: 1.5, source: official, topic: open, why: "You can get more out of an open model you already run, without a bigger one.", do: "If you run Qwen3.8-27B with OpenCode, try the OpenCode adapter on Hugging Face.", bars: { title: "Terminal-Bench tasks passed with pi", max: 100, rows: [{ l: "Base model", v: 39, t: "39%" }, { l: "With adapter", v: 55, t: "55%", hl: true }] } }
  - { n: 6, anchor: "model-rewrites-own-weights", signal: worth, tracks: [general], min: 1.5, source: official, number: "6.6", number_label: "points more accurate on unseen problems after its own edit", topic: research, why: "A model can improve itself without training, as long as every change is checked by tests." }
---

### 1. Attackers stole prompts from three AI hosting firms, a researcher finds {#ai-prompt-leaks}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">2 min</span></p>
<div class="number"><b>2 million</b><span>test prompts with planted fake secrets</span></div>

<p class="short"><span>The short version</span>A security researcher planted fake secrets in about 2 million AI prompts and watched where they went. Attackers stole data from three hosting firms, and some prompts marked "do not keep" were read anyway.</p>

When you use an open model through an app, your prompt often passes through several companies. A router such as OpenRouter sends it to a hosting firm, which runs the model. Many promise zero data retention (see Explained below): they do not store what you send.

HD Moore at the security firm Dragos tested that promise. From July to November, his team sent about 2 million prompts. Each held unique web links and bait logins, called canaries, so Dragos would see if anyone used them.

The results were bad. Attackers stole data from three hosting firms, and none of them knew until Dragos told them. In one case, attackers took a couple hundred bait AWS keys and tried them. And a Chinese AI lab's systems visited the secret links from more than half the prompts sent to its models. That included about two-thirds of those marked "no data collection".

The fallout came this weekend. Together AI said an AI coding agent had put a login key for its stored prompt samples in a public GitHub project. Someone used it to download them. OpenRouter dropped three providers and removed 125 endpoints from its zero-retention list. OpenRouter says it was not breached itself.

The catch: Dragos does not name most of the firms. But it says real customer requests were almost certainly copied along with its bait.

<div class="why"><b>Why it matters</b><p>A privacy setting only binds the first company your prompt reaches. It is like a letter marked "confidential" that passes through three post offices. The label is only as good as the least careful office on the way.</p></div>

<p class="todo"><b>Do this:</b> Keep passwords and keys out of what you send to AI models, and check for a notice from OpenRouter or Together.</p>

Sources: [dragos.com](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) · <span class="tag tag-official">Official</span> · [together.ai](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026) · <span class="tag tag-official">Official</span> · [openrouter.ai](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. OpenAI says its models made parts of AMD's chip designs up to 14% better {#openai-amd-chip-design}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>14%</b><span>better on AMD's GPU design, at best</span></div>

<p class="short"><span>The short version</span>OpenAI says its models rewrote parts of AMD's flagship graphics chip design. Power, speed and size together got up to 14% better. AMD has already put some of the changes in a chip sent for manufacturing.</p>

Chip designers trade off three things: how much power a chip uses, how fast it is and how much space it takes.

This week OpenAI said its models rewrote the code that describes AMD's circuits. Design software from Synopsys checked that each change still did the same job. On AMD's flagship GPU design, the gains reached up to 14% against heavily optimized starting points. AMD also confirmed single-digit gains on key parts of its next flagship CPU.

The catch: "up to" is the best case, not the average. OpenAI does not say how the gain splits between the three.

<div class="why"><b>Why it matters</b><p>AI chips are scarce and expensive. Now AI is helping to design the next ones. It is like an apprentice who starts sharpening the workshop's own tools: each gain is small, but every chip made afterwards benefits.</p></div>

Sources: [openai.com](https://openai.com/index/advancing-chip-design-with-our-models/) · <span class="tag tag-official">Official</span> · [thenextweb.com](https://thenextweb.com/news/openai-models-amd-gpu-chip-design-14-percent) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. An AI model read, fixed and wrote small programs straight from their raw bytes {#ai-reads-machine-code}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Two researchers showed that OpenAI's GPT-6.1 Sol can understand, patch and even write small programs from their raw machine code, with no extra tools.</p>

The programs on your computer are machine code: long rows of bytes. To read one without its source code, experts normally use special tools.

George Xenos and Sotiris Giannopoulos gave GPT-6.1 Sol only a hex dump, which is the raw bytes written out as text. The model named all four programs. It also found a real bug in one of them, FreeBSD's ministat. It added features by editing bytes, and all three patched programs passed hidden tests. It even wrote small working programs from a spec.

Then it looked at one Windows malware sample. It concluded that the file downloads code and runs it, and a public sandbox report shows the same server address. The open model DeepSeek V4.1 Flash got the same answer, but with fewer details right and about 17 times as many reasoning tokens.

The catch: the programs were small, and the largest was 67 KB. Each byte costs about 2.4 tokens, so big programs do not fit in a model's working memory. It is one team's single runs.

<div class="why"><b>Why it matters</b><p>Reading machine code is a rare specialist skill. If a model can do it, checking a suspicious file gets faster for defenders. But it also gets faster for attackers.</p></div>

Source: [sgiannopoulos.github.io](https://sgiannopoulos.github.io/blog/machine-code-programming/) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. China plans standards for how AI tokens are measured and billed {#china-token-standards}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">1 min</span></p>

<p class="short"><span>The short version</span>China's data regulator says it will set standards for how AI tokens are measured, billed and checked for quality. It has not said when.</p>

AI services charge by the token, a small piece of text (see Explained below). But a token is not a fixed size, so two prices per token are hard to compare.

On Saturday, Liu Liehong, head of China's National Data Administration, posted that the agency will improve those standards. The Next Web reports it, citing Bloomberg. He said firms that sell tokens as a service, "token factories", are becoming an industry. Daily token use in China passed 140 trillion in March and 500 trillion in June, according to the agency.

The catch: there is no date yet, so nobody knows what the rules will say or when.

<div class="why"><b>Why it matters</b><p>Today a token is a bit like a "cup" in old recipes: everyone uses the word, but the size varies. A shared measure would let buyers compare prices, the way the kilowatt-hour made power bills comparable.</p></div>

Source: [thenextweb.com](https://thenextweb.com/news/chinas-data-regulator-plans-standards-for-measuring-and-billing-ai-tokens) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### Hugging Face trains small add-ons that fit an open model to coding tools {#harness-adapters}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1½ min</span></p>

<p class="short"><span>The short version</span>Hugging Face released add-ons that teach the open model Qwen3.8-27B to work better inside three coding-agent tools. On one test it solved more tasks with about half the tokens.</p>

A coding agent has two parts: the model, and the harness that gives it tools and runs the loop. A model is often trained for one harness and used in others.

Hugging Face tried to close that gap with LoRA adapters. An adapter is a small add-on file that adjusts a model without retraining all of it. The team trained one adapter each for three open harnesses: pi, Hermes Agent and OpenCode. The model practiced tasks inside each one and was rewarded when it succeeded.

With pi, the adapted model passed about 55% of the Terminal-Bench tasks, up from about 39%. It also used 1.5K tokens per task instead of 2.9K.

The catch: these are Hugging Face's own tests, and on a different kind of test the gains were mostly within noise.

<div class="why"><b>Why it matters</b><p>It is like adjusting the seat and mirrors of a car to the driver. You can get more out of a model you already run at home, without moving to a bigger one.</p></div>

<p class="todo"><b>Try it:</b> If you run Qwen3.8-27B with OpenCode, try the OpenCode adapter on Hugging Face. There is also a GGUF build for local tools.</p>

Sources: [huggingface.co (blog)](https://huggingface.co/blog/harness-adapters-at-scale) · <span class="tag tag-official">Official</span> · [huggingface.co (adapter)](https://huggingface.co/harness-hub/Qwen3.8-27B-super-adapter) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### A language model got better by editing its own weights {#model-rewrites-own-weights}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1½ min</span></p>
<div class="number"><b>6.6</b><span>points more accurate on unseen problems after its own edit</span></div>

<p class="short"><span>The short version</span>Researchers let an open 27B model study its own weights and its mistakes. It then edited those weights and got better, with no training run.</p>

Normally a model only improves through training, a slow and costly process. The model itself has no say.

Jiajun Fan and ten colleagues tried something else. They gave an open 27B model its own weights, its graded answers and the ability to run itself. It worked out why it failed and rewrote the weights behind it. It tested each edit on practice problems and kept only the ones that helped.

Its own edit made it 6.6 points more accurate on problems it had never seen. Over eight sessions in a row, its accuracy only went up. Given a broken copy of itself, it repaired the copy to over 80% of the original accuracy on image tasks.

The catch: only the largest model in the family managed this. Smaller ones failed or broke themselves, and the paper has not been peer reviewed yet.

<div class="why"><b>Why it matters</b><p>Earlier this week we wrote that self-improving agents often cannot tell better from worse. Here the model checks every edit against tests first. It is like a student who corrects their own exam, but only keeps a change when the answer key agrees.</p></div>

Source: [arxiv.org](https://arxiv.org/abs/2611.21885) · <span class="tag tag-official">Official</span>
{: .sources}
