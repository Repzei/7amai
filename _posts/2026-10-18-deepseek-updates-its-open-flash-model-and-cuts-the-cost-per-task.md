---
title: "DeepSeek updates its open Flash model and cuts the cost per task"
summary: "DeepSeek's new open model scores higher on coding tests and uses fewer words to get there. Also: Claude explains a 25-year-old crypto mystery, standalone Claude Design closes, and Replit picks OpenAI."
date: 2026-10-18 07:00:00 +0200
reviewed: false
checked: true
minutes: 7
explained: { main: "benchmark", from: 1, more: ["open-weight", "context-window"] }
other_lang_url: /da/2026/10/18/
items:
  - { n: 1, anchor: "deepseek-flash-1017", signal: big, tracks: [build], min: 1.5, source: official, number: "77.0", number_label: "DeepSWE score, vs 74.0 for Claude Opus 5 (DeepSeek's own run)" }
  - { n: 2, anchor: "nist-curve-seeds", signal: worth, tracks: [general], min: 1, source: official }
  - { n: 3, anchor: "quantum-circuits", signal: quick, tracks: [general], min: 0.5, source: official }
  - { n: 4, anchor: "claude-design-closes", signal: worth, tracks: [build, general], min: 0.5, source: official }
  - { n: 5, anchor: "replit-openai", signal: worth, tracks: [build], min: 1, source: reported }
  - { n: 6, anchor: "agent-incident-guide", signal: worth, tracks: [build, general], min: 1, source: official }
  - { n: 7, anchor: "meta-crawling-terms", signal: quick, tracks: [general], min: 0.5, source: reported }
  - { n: 8, anchor: "codex-crash-dumps", signal: quick, tracks: [general, build], min: 0.5, source: reported }
  - { n: 9, anchor: "llama-cpp-discover", signal: worth, tracks: [build, europe], min: 1, source: official }
  - { n: 10, anchor: "leash-escalation", signal: worth, tracks: [build], min: 1, source: official }
---

### 1. DeepSeek's updated Flash model scores higher and costs less per task {#deepseek-flash-1017}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">1½ min</span></p>
<div class="number"><b>77.0</b><span>DeepSWE score, vs 74.0 for Claude Opus 5 (DeepSeek's own run)</span></div>

DeepSeek released DeepSeek-V4.1-Flash-1017 on 17 October. It is an update to its Flash model, and it already runs in DeepSeek's app, website and API.

Anyone can download the weights from Hugging Face. They use the MIT license, one of the most permissive open-source licenses. The model reads up to 1 million tokens at once.

DeepSeek says the model finishes tasks faster and writes shorter answers. Shorter answers mean fewer tokens, and you pay per token.

In DeepSeek's own run of the DeepSWE coding test, it scores 77.0, up from 74.2 for the previous version. The Decoder reads DeepSeek's chart as just under $0.20 per task, down from about $0.50.

On the same chart, rivals cost $2 or more per task. Claude Opus 5 scores 74.0 on that test.

Read the whole table, though. Opus 5 still scores higher on most of its tests. On Terminal-Bench 4.0, it scores 51.8 against 42.3. Nobody has tested the new model independently yet.

DeepSeek also opened its own web search to developers. The Search and Fetch APIs cost $0.75 per 1,000 calls each.

Search and Fetch calls made through Claude Code, Codex or DeepSeek's own tool are free until 31 October at 16:00 UTC.

Running it yourself takes serious hardware. The Hugging Face page lists 763 billion parameters.

> **So what:** If you pay for many coding-agent runs, test this model on your own tasks through DeepSeek's API. Compare the cost per finished task, not the price per token.

Source: [api-docs.deepseek.com](https://api-docs.deepseek.com/news/news261017) · <span class="tag tag-official">Official</span> · [huggingface.co](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) · <span class="tag tag-official">Official</span> · [the-decoder.com](https://the-decoder.com/deepseek-v4-1-flash-1017-beats-larger-rivals-in-agentic-tasks-while-once-again-massively-cutting-per-task-costs/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 2. Claude explains where the numbers behind widely used encryption curves came from {#nist-curve-seeds}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">1 min</span></p>

Anthropic said on 16 October that Claude solved a 25-year-old puzzle in cryptography. It found where the starting numbers for most of the NIST curves came from.

These curves belong to ECDSA, the most widely used standard of its kind. P-256 is the best known.

The NSA supplied the starting numbers, called seeds, in the late 1990s. It never explained them, which fed fears of a hidden backdoor.

Claude found that the seeds came from an ordinary C random-number function. Unix timestamps from 1997 and 1998 set it going.

It took under half an hour. P-256's seed was the 1,842nd number the method produced.

Anthropic says this is not a break and not a weakness. It makes a backdoor less likely. The $36,864 bounty will go to the nonprofit behind Let's Encrypt.

> **So what:** Change nothing in your systems. Note it as a sign that AI can now help settle old questions in security research.

Source: [anthropic.com](https://www.anthropic.com/research/ecdsa-curve-origins) · <span class="tag tag-official">Official</span> · [coindesk.com](https://coindesk.com/tech/2026/10/17/wow-it-s-a-real-discovery-claude-cracks-a-25-year-nsa-number-mystery) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 3. Claude designed quantum circuits that need far fewer steps {#quantum-circuits}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">½ min</span></p>

Anthropic also said on 16 October that Claude beat the best published designs for eight quantum circuits. The designs needed fewer qubits and fewer gates (the basic steps).

One circuit traded 12% more qubits for 17 times fewer gates. These are designs for future machines, not runs on real hardware.

> **So what:** Nothing to do today. Expect AI to speed up research where a computer can check each answer automatically.

Source: [anthropic.com](https://www.anthropic.com/research/designing-efficient-quantum-circuits) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Standalone Claude Design closes on 14 December, so save your projects {#claude-design-closes}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">½ min</span></p>

Anthropic will close the standalone Claude Design site on 14 December. After that, claude.ai/design will open Claude itself.

Design systems can move into Claude now as artifacts. Projects can't move yet. Chats and comments will be deleted in December, and public project links will stop working.

> **So what:** If you use Claude Design, download each project you need as a .zip. Use Share, then Project HTML, and keep "Project archive" selected. Do it before 14 December.

Source: [support.claude.com](https://support.claude.com/en/articles/17440474-migrate-from-standalone-claude-design-to-claude) · <span class="tag tag-official">Official</span>
{: .sources}

### 5. Replit makes OpenAI the default model for its coding agent {#replit-openai}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

Replit's CEO, Amjad Masad, said onstage at TechCrunch Disrupt that OpenAI now powers Replit Agent by default. Replit is a popular platform for building apps by chatting with an AI.

Masad said Replit was until recently one of Anthropic's five largest customers. He named cost, the partnership and performance as reasons. "I think ChatGPT is better now," he said.

Claude is still available on Replit. But most users keep the default, so the change matters. One unnamed insider told TechCrunch the Anthropic partnership is still in place.

> **So what:** If you build on Replit, check which model your agent now uses. Compare results on a real project before you accept the new default.

Source: [techcrunch.com](https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 6. US agencies publish a playbook for when an AI agent goes rogue {#agent-incident-guide}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>

NIST, the NSA and CISA published joint guidance on 16 October for AI incidents during training and testing. An incident here means an AI agent takes a big action nobody asked for, against the operator's rules.

The guide is voluntary. It sets out ten practices in five stages: prepare, detect, respond, recover and report.

It is written for the largest AI labs. The US government uses the term "super intelligence" for such advanced AI.

> **So what:** If you run agents with real access, write down now who stops them and how. Use the five stages as a checklist.

Source: [nist.gov](https://www.nist.gov/news-events/news/2026/10/key-practices-incident-readiness-and-response-super-intelligence-training) · <span class="tag tag-official">Official</span>
{: .sources}

### 7. Meta drops wording that let it train AI on business websites {#meta-crawling-terms}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">½ min</span></p>

Meta has removed a clause from its updated business terms, TechCrunch reported on 17 October. It let Meta use content from the websites of firms with Meta business accounts to train its products.

Legal experts had warned it could cover publishers' sites. Meta says the terms only applied to its ads and business products.

> **So what:** If your company has a Meta business account, read the updated terms and check what they allow Meta to do with your site.

Source: [techcrunch.com](https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/) · <span class="tag tag-reported">Reported</span>
{: .sources}

### 8. Codex on Mac can quietly fill your disk with crash files {#codex-crash-dumps}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span><span class="track">Build</span><span class="track">½ min</span></p>

Users of OpenAI's Codex desktop app on Apple Silicon Macs report a bug that keeps writing crash files. One user found about 323 GB this week, spread over two folders. The bug was first reported in June, and OpenAI has not replied in the thread.

> **So what:** If you use Codex on a Mac, quit the app and check `~/Library/Application Support/Codex/Crashpad/pending`. Also check `~/Library/Application Support/com.openai.codex/web/Crashpad/pending`, and empty both.

Source: [github.com](https://github.com/openai/codex/issues/25921) · <span class="tag tag-reported">Reported</span>
{: .sources}

## Open source & local AI

### llama.cpp can now find and download models for you {#llama-cpp-discover}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

The llama.cpp project added a Discover Models view to its built-in web app on 17 October. It is the free engine behind many tools that run AI models on your own computer.

Until now, you had to find a model file on Hugging Face yourself. The new view lets you search Hugging Face from the app and filter by size. It shows which versions fit in your computer's memory.

Downloads can be paused and resumed. The app also fetches a small helper model that speeds up answers. That makes plain llama.cpp closer to easier apps like LM Studio and Ollama.

The feature is off by default. You turn it on with the setting "Enable Discover Models".

> **So what:** If you run llama.cpp's server, update it and turn the setting on. Pick a version it marks as fitting your memory, and keep your data on your own machine.

Source: [github.com](https://github.com/ggml-org/llama.cpp/pull/29584) · <span class="tag tag-official">Official</span>
{: .sources}

## Paper of the day

### A small model that asks for help when unsure matches a top model for less {#leash-escalation}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

A paper posted on arXiv on 15 October shows how to make computer-use agents cheaper. These agents click and type on a computer to finish tasks. The method is called LEASH.

Running a top model at every step is expensive. Small open models are cheap, but they often fail alone. LEASH lets a small model do the work and pass control to a strong model only when it is unsure.

The trick is how it measures doubt. It compares the small model's inner state with its earlier wins and failures.

If the current state looks like a past failure, it asks for help. It reuses work the model already does, so it needs no extra pass.

On the OSWorld test, a cheaper Qwen model with LEASH solved 73.7% of tasks. Using Claude Opus 5 at every step solved 72.9%. LEASH did it for 19% less money.

> **So what:** If you run long agent tasks, try a cheap model first and hand off only the hard steps. Measure where it fails before you pay for a top model everywhere.

Source: [arxiv.org](https://arxiv.org/abs/2610.22280) · <span class="tag tag-official">Official</span>
{: .sources}
