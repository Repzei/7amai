---
title: "Mistral Large 4 is in preview, with open weights due this month"
summary: "Mistral opens Large 4 as an API preview with open weights promised by month-end. Also: Copilot sandboxing, Googles Gemini agent and the next EU AI Act deadline."
date: 2026-10-10 07:00:00 +0200
reviewed: true
other_lang_url: /da/2026/10/10/
items:
  - { n: 1, anchor: "mistral-large-4", signal: big, tracks: [build, europe] }
  - { n: 2, anchor: "gemini-agent", signal: worth, tracks: [general, build] }
  - { n: 3, anchor: "copilot-local-sandboxing", signal: worth, tracks: [build] }
  - { n: 4, anchor: "ai-act-dates", signal: worth, tracks: [europe, build] }
  - { n: 5, anchor: "copilot-cli-ollama", signal: quick, tracks: [build, europe] }
  - { n: 6, anchor: "github-secret-model", signal: quick, tracks: [build] }
  - { n: 7, anchor: "genesis-mission", signal: quick, tracks: [general] }
---

### 1. Mistral Large 4 is in public preview, with open weights due by the end of October {#mistral-large-4}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">Europe</span></p>

Mistral announced Large 4 on 6 October: a mixture-of-experts model with about 1 trillion parameters (52 billion active), multimodal input and support for over 160 languages including all official EU languages. The API preview in Mistral Studio costs $1.36 per million input tokens and $4.18 per million output tokens. Mistral says the weights follow by the end of the month but names no licence or context window. It was trained on 3,800 NVIDIA Grace Blackwell GPUs in Mistral's own European datacentres and is served from there. The benchmark figures are Mistral's own: 61.7% on DeepSWE v1.1, and 3.74 in a blind human coding evaluation by Surge AI, second of five models behind Claude Opus 5 at 4.22.

> **So what:** Test it on your own coding prompts if you need EU-hosted inference, but wait for the licence before planning self-hosting. The preview may change before the weights ship.

Source: [Mistral](https://mistral.ai/news/mistral-large-4/)
{: .sources}

### 2. Google Cloud launches "Gemini agent", a single work agent, in private preview {#gemini-agent}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span></p>

At its Gemini at Work event on 8 October, Google Cloud introduced the Gemini agent. You mention @Gemini in Gmail, Docs, Sheets, Slides or Chat, or use it from the command line, Slack and Microsoft 365. A developer API lets you embed it as a headless agent. Each job runs on the model Google considers best for it, today Gemini and Claude models. It is in private preview for enterprise customers, with wider availability for select Workspace plans "soon". 9to5Google gives no pricing.

> **So what:** Nothing to do unless you are an enterprise Google customer: it is private preview with no prices. Note that Google routes work to Claude models too.

Source: [9to5Google](https://9to5google.com/2026/10/08/gemini-agent-google-cloud/)
{: .sources}

### 3. GitHub Copilot's local sandboxing is generally available on Windows, macOS and Linux {#copilot-local-sandboxing}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span></p>

Commands and tools that Copilot starts on your machine now run with restricted access to files, network and credentials, based on developer or organisation policy. It works in Copilot CLI, the Copilot app and VS Code sessions using Agent Host, and is built on Microsoft eXecution Container (MXC). It is included with Copilot at no extra cost. Organisations can require sandboxing through enterprise-managed settings. It covers tool execution, not the model, and local MCP and language server sandboxing applies only "where supported".

> **So what:** If you let Copilot agents run commands on your laptop, turn this on and check the docs for what is covered. Local MCP servers may still run outside the sandbox.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-07-local-sandboxing-for-github-copilot-now-generally-available)
{: .sources}

### 4. Reminder: the EU Digital Omnibus has moved the AI Act dates, and 2 December 2026 is next {#ai-act-dates}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Europe</span><span class="track">Build</span></p>

Regulation (EU) 2026/1744, the Digital Omnibus on AI, entered into force on 27 July 2026. Per Hunton, high-risk obligations for standalone Annex III systems now apply from 2 December 2027, and for AI embedded in regulated products from 2 August 2028. Marking of AI-generated content applies from 2 December 2026 for systems that were on the market before 2 August 2026. The omnibus also adds a ban on AI systems designed to generate non-consensual intimate imagery and child sexual abuse material. This is not new this week, but the next deadline is under two months away. The source is a law-firm summary, not the legal text.

> **So what:** If your product generates images, audio or video for EU users and was live before August 2026, check the marking requirement against the legal text before 2 December.

Source: [Hunton](https://www.hunton.com/privacy-and-cybersecurity-law-blog/eu-digital-omnibus-on-ai-enters-into-force)
{: .sources}

### 5. Copilot CLI can now discover models from a local Ollama instance {#copilot-cli-ollama}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">Europe</span></p>

From CLI version 1.0.94-0, the `/model` command lists models from a running Ollama server next to your cloud models. Nothing is added automatically: you pick a model, review its provider and endpoint, and add it. The model must support tool calling and streaming. Choosing a local model does not turn on offline mode or switch off GitHub telemetry; offline mode needs `COPILOT_OFFLINE=true`.

> **So what:** Useful for trying local models in an agent loop, but for privacy you still need to set offline mode yourself.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli)
{: .sources}

### 6. GitHub ships a purpose-built model for detecting leaked passwords and secrets {#github-secret-model}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span></p>

GitHub's fine-tuned model reads the code around a candidate to flag secrets with no recognisable token format, such as passwords. Customers with AI-detected password alerts were upgraded automatically. AI detection in push protection is in private preview, and `/security-review` checks in Copilot CLI are coming in private preview. The new opt-in checks use AI Credits and need GitHub Secret Protection or Advanced Security for push protection. GitHub gives no accuracy figures.

> **So what:** Check whether your org already has alerts upgraded, and set a budget before enabling the opt-in checks, since they consume credits.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-07-purpose-built-model-for-leaked-secret-detection)
{: .sources}

### 7. Anthropic commits $150 million over three years to the US Genesis Mission {#genesis-mission}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span></p>

Announced on 8 October at a White House science summit: the funding makes Claude available to more than 15 federal agencies, including NASA, NIH and NSF, and gives Claude, Claude Code and API credits to several hundred Genesis Mission projects. It also includes 10,000 free or discounted Claude seats for academic scientists. NVIDIA announced $1 billion over five years for US science at the same event. Neither release explains how to apply.

> **So what:** Mainly US news. It only matters to you if you work on a US research project; otherwise just note how much compute and credits labs are putting into science.

Source: [Anthropic](https://www.anthropic.com/news/genesis-mission-commitment) · [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-commits-1-billion-to-advance-us-science-over-the-next-five-years)
{: .sources}
