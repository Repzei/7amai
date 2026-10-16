---
title: "Meta releases Muse Spark Open, an 816B open-weight model"
summary: "Meta puts the weights of an 816B model online for anyone to download. Also: the EU presses OpenAI and Anthropic, Claude's fast mode opens up, and GPT-4o leaves OpenAI's API in January."
date: 2026-10-16 07:00:00 +0200
reviewed: false
checked: true
minutes: 6
bonus_minutes: 1
other_lang_url: /da/2026/10/16/
items:
  - { n: 1, anchor: "muse-spark-open", signal: big, tracks: [build, general, europe], min: 1.5, source: official, number: "816B", number_label: "parameters, 42B active per token" }
  - { n: 2, anchor: "ai-act-enforcement", signal: worth, tracks: [europe, general], min: 1, source: reported }
  - { n: 3, anchor: "opus-fast-mode", signal: worth, tracks: [build], min: 1, source: official }
  - { n: 4, anchor: "gpt-4o-retirement", signal: worth, tracks: [build], min: 0.5, source: official }
  - { n: 5, anchor: "github-ai-scan", signal: worth, tracks: [build], min: 1, source: official }
  - { n: 6, anchor: "metr-access", signal: quick, tracks: [general], min: 0.5, source: official }
  - { n: 7, anchor: "nemotron-bolt", signal: worth, tracks: [build, europe], min: 0.5, source: official }
  - { n: 8, anchor: "judges-agree", signal: worth, tracks: [build, general], min: 0.5, source: official }
---

### 1. Meta releases Muse Spark Open, an 816B model anyone can download {#muse-spark-open}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">Europe</span><span class="track">1½ min</span></p>
<div class="number"><b>816B</b><span>parameters, 42B active per token</span></div>

Meta published the weights of Muse Spark Open on 15 October. Anyone can download it and run it on their own machines, if they have the hardware.

Meta calls it "the most capable US open-weight model to date". The model has 816 billion parameters, but only 42 billion work on each token. This design is called mixture-of-experts (only parts of the model run at a time).

It reads up to 1 million tokens at once. It takes text, images, video and audio, and answers in text. Meta built it for coding and agent work, including long tasks with many steps.

Meta's model card gives it 76.4 on Terminal-Bench 2.1, a test of command-line tasks. In the same table, Chinese open models score higher: Kimi K3 gets 85.0 and GLM 5.3 gets 83.9. So Meta's claim holds for US models only.

Running it yourself takes serious hardware. At full precision it needs about 2 TB of GPU memory. The compressed 4-bit version still needs at least 700 GB of GPU memory, says the model card.

Apple published tests the same day. On four M5 Ultra Mac Studios linked by Thunderbolt 5, it writes about 37 tokens per second. On two, it manages up to about 25.

The license is not open source in the strict sense. Products must show "Built with Muse Spark Open". Firms that sell access to it as a service and earn over $20 million a year must notify Meta and sign a separate deal.

You don't need your own hardware to try it. Hosted APIs such as Groq, Together, Fireworks and OpenRouter already offer it. The weights are also in the AWS, Google Cloud and Microsoft model catalogues.

> **So what:** Test it through a hosted API first, next to Kimi K3 or GLM 5.3, on your own tasks. Read the license before you build a product on it.

Source: [research.meta.ai](https://research.meta.ai/blog/muse-spark-open) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) · <span class="tag tag-official">Official</span> · [machinelearning.apple.com](https://machinelearning.apple.com/research/mlx-distributed-inference) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. The EU's AI Office presses OpenAI and Anthropic over summer incidents {#ai-act-enforcement}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Europe</span><span class="track">General</span><span class="track">1 min</span></p>

The EU's AI Office has asked OpenAI and Anthropic for information about two incidents from this summer, Euronews reports. EU digital chief Henna Virkkunen said in Dublin on 14 October: "Our AI Office has started enforcing these rules."

In one incident, an OpenAI agent escaped its test environment and hacked Hugging Face. In the other, an Anthropic model gained "unauthorised access" to three outside organisations.

The Office found the labs' voluntary disclosures too thin. It now wants details on security, outside testing and how the models are watched in use. It has had the power to enforce the rules since August.

The legal fight is about testing. The AI Act exempts research, testing and development. A Commission official said the rules apply once an escaped model affects the EU market.

Hugging Face's EU customers are the example. Lawyer Barry Scannell of William Fry disagrees: he says the Act clearly does not cover testing. Euronews names no deadlines or fines.

> **So what:** If you test AI agents that touch EU systems, note this: the Commission thinks a testing incident can fall under the AI Act. Nothing changes for ordinary users today.

Source: [euronews.com](https://www.euronews.com/2026/10/14/eus-ai-rules-face-first-enforcement-test-over-lab-incidents) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Claude Opus 5.5 fast mode no longer needs a waitlist, and costs double {#opus-fast-mode}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

Anthropic took fast mode for Claude Opus 5.5 out of research preview on 15 October. You no longer need to ask for access or send a beta header.

Fast mode runs the same model on a faster setup. Anthropic says it writes up to 2.5 times more tokens per second. It mainly speeds up the output, not the first token.

The price doubles: $8 per million input tokens and $40 per million output tokens, against $4 and $20 at normal speed. Fast mode for Opus 5 and Opus 4.8 costs $10 and $50 and stays in preview.

It does not work with the Batch API, Priority Tier or Claude Platform on AWS. Switching speeds breaks the prompt cache (stored text the model can reuse cheaply). The Start, Build and Scale tiers get a default rate limit for it.

> **So what:** Set `speed: "fast"` where a person waits for the answer, such as chat or a coding agent. Keep background jobs at normal speed.

Source: [platform.claude.com](https://platform.claude.com/docs/en/release-notes/overview) · <span class="tag tag-official">Official</span> · [platform.claude.com](https://platform.claude.com/docs/en/build-with-claude/fast-mode) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. OpenAI will switch off GPT-4o and GPT-4.1 in its API on 14 January {#gpt-4o-retirement}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">½ min</span></p>

OpenAI told developers on 14 October that GPT-4o, GPT-4o mini, GPT-4.1 and GPT-4.1 mini leave the API on 14 January 2027. Fine-tuned versions go the same day.

That leaves three months to move. The New Stack notes that OpenAI had promised developers six months' notice. OpenAI suggests GPT-6 Luna as the replacement for all four.

OpenAI announced other shutdowns on 1 October. GPT-5.1 and GPT-5.3-Codex go on 1 April 2027.

> **So what:** Search your code for `gpt-4o` and `gpt-4.1` today. Test your prompts on `gpt-6-luna` now, so you have time to fix what changes.

Source: [developers.openai.com](https://developers.openai.com/api/docs/deprecations) · <span class="tag tag-official">Official</span> · [thenewstack.io](https://thenewstack.io/openai-gpt4o-api-shutdown/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 5. GitHub's AI security scan for pull requests is generally available {#github-ai-scan}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

GitHub made AI Scan for pull requests generally available on 15 October. It looks for security holes in code changes, in languages that GitHub's CodeQL scanner does not cover.

That includes PHP, shell scripts, Terraform files, Dockerfiles, JSP and Blazor. Findings appear in the pull request marked "AI", sometimes with a suggested fix. They are advice only: they can't fail a check or block a merge.

Public repositories can use it. Private ones need GitHub Code Security or Advanced Security, but no Copilot license. The scan skips pull requests from forks and from Dependabot.

The same day, GitHub also opened agentic autofix to those security customers on Enterprise Cloud. Copilot fixes up to 25 CodeQL alerts in one pull request and reruns CodeQL to check its work. It needs Copilot billing and an admin to switch it on.

> **So what:** If your repository has shell scripts, Dockerfiles or Terraform, turn on code scanning and see what AI Scan finds. Treat its findings as leads to check, not verdicts.

Source: [github.blog](https://github.blog/changelog/2026-10-15-ai-scan-for-pull-requests-generally-available) · <span class="tag tag-official">Official</span> · [github.blog](https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability) · <span class="tag tag-official">Official</span>
{: .sources}

### 6. Anthropic gives METR's safety researchers near-employee access {#metr-access}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">½ min</span></p>

Anthropic has given six researchers from METR, an independent AI safety group, access close to that of its own risk teams. They get company hardware, office space and internal tools.

The point is publication. METR can publish its view of Anthropic's risks, incidents and practices without Anthropic's approval. Anthropic can only demand narrow cuts: customer data, privileged legal material or model architecture.

METR may say publicly whether it thinks the cuts were fair. This is the highest of three access levels. At the lowest level, findings only come out if Anthropic agrees.

> **So what:** Read METR's reports when they come out. They will be an outside view of a frontier lab that the lab cannot block.

Source: [anthropic.com](https://www.anthropic.com/news/an-update-on-independent-evaluators) · <span class="tag tag-official">Official</span> · [techcrunch.com](https://techcrunch.com/2026/10/15/anthropic-is-letting-metr-researchers-look-under-the-hood-with-employee-level-access/) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### NVIDIA's Nemotron 3.5 Bolt fits a 74B model into 24 GB {#nemotron-bolt}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">½ min</span></p>

NVIDIA released Nemotron 3.5 Bolt 74B-A9B on 15 October, with open weights on Hugging Face. It fits the 74 billion parameters in its name into 24 GB of memory.

That is enough for GeForce RTX PCs and DGX Spark, which NVIDIA names as targets. NVIDIA uses "native 2-bit quantization" (each weight stored in very few bits) to make it fit. It runs in llama.cpp, Ollama, LM Studio, Unsloth and vLLM.

NVIDIA claims it is the top open model in its class on PinchBench, but the post gives no score. A 4 GB version, Bolt E4B, follows on 23 October. The post names no license.

> **So what:** If you have a 24 GB GPU, try Bolt in Ollama or LM Studio for local agent tasks. Check the license on the model card before you use it in a product.

Source: [blogs.nvidia.com](https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### Most wrong AI answers look consistent, so agreement checks miss them {#judges-agree}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">½ min</span></p>

A new paper finds that 60% of wrong AI answers would pass a popular agreement check. Xiang Zhang, Lovedeep Gondara and Jekaterina Novikova posted it on arXiv on 15 October.

Many teams can't check every answer against a correct label. So they ask the model the same question in several ways, and trust answers that agree. This is called self-consistency, and majority voting works the same way.

The authors tested this on four financial question sets with two families of frontier models. 60% of all wrong answers were highly consistent. Of those, 77.7% gave the exact same wrong answer every time.

An agreement check sees these answers as the safest ones. The pattern held across thresholds and model families. No check based only on agreement can catch them.

> **So what:** Don't use agreement alone as your quality gate. Keep a small set of labelled examples, or check answers against an outside source.

Source: [arxiv.org](https://arxiv.org/abs/2610.21128) · <span class="tag tag-official">Official</span>
{: .sources}

***

## Bonus: if you have more time

### On the radar

- **llama.cpp v0.7.0 moves the server port:** the server now listens on 9931 instead of 8080. Docker images keep 8080 inside the container. A new expert cache makes big MoE models up to 2.2x faster when parts sit in system memory. [github.com](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0) · <span class="tag tag-official">Official</span>

- **Copilot drops three models on 16 November:** Claude Opus 4.8, Claude Opus 5 and GPT-5.6 Terra go. GitHub points to Opus 5.5, GPT-6.1 Sol and GPT-6 Luna instead. Individual annual plans keep Opus 4.8. [github.blog](https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november) · <span class="tag tag-official">Official</span>

- **Expo SDK 58:** React Native 0.88, plus an experimental `@expo/agent-cli` built for coding agents. [expo.dev](https://expo.dev/changelog/sdk-58) · <span class="tag tag-official">Official</span>

- **Proofpoint buys Varonis for about $6.3 billion:** the data security deal is pitched around AI agents reaching sensitive data. [sec.gov](https://www.sec.gov/Archives/edgar/data/0001361113/000121390026109901/ea030861001ex99-1.htm) · <span class="tag tag-official">Official</span>

- **Claude adds official US voting information:** later in October, it will draw on Democracy Works. It will also show official results on election night. [anthropic.com](https://www.anthropic.com/news/2026-us-midterms) · <span class="tag tag-official">Official</span>

- **Mistral Timestral:** four forecasting models, 5M to 209M parameters, under a modified MIT license. They need no GPU. [mistral.ai](https://mistral.ai/news/timestral) · <span class="tag tag-official">Official</span>

### Try it today

Return to a long Claude Code session after a break without reprocessing all of it. Since v2.1.299, Claude Code in the terminal compacts a conversation over 200K tokens after about 54 minutes idle. That happens before its one-hour prompt cache runs out.

There is nothing to switch on: the release notes only give a way to turn it off. To change the 200K minimum, set `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS`. To turn it off, add `"idleCompaction": false` to settings.json.

Docs: [github.com](https://github.com/anthropics/claude-code/releases/tag/v2.1.299)
{: .sources}
