---
title: "Anthropic updates its usage policy from 12 November"
summary: "Anthropic's new usage policy tightens rules on surveillance and physical hardware. Also: a cyber defence programme, Copilot review billing, CodeQL's macOS 27 break and Ollama model upgrades."
date: 2026-10-12 07:00:00 +0200
reviewed: false
other_lang_url: /da/2026/10/12/
items:
  - { n: 1, anchor: "usage-policy", signal: big, tracks: [build, general] }
  - { n: 2, anchor: "cyber-mission", signal: worth, tracks: [general, build] }
  - { n: 3, anchor: "copilot-review-billing", signal: worth, tracks: [build] }
  - { n: 4, anchor: "codeql-macos-27", signal: worth, tracks: [build] }
  - { n: 5, anchor: "ollama-0-40", signal: quick, tracks: [build, europe] }
  - { n: 6, anchor: "grok-video-lite", signal: quick, tracks: [general] }
  - { n: 7, anchor: "draft-pr-limits", signal: quick, tracks: [build] }
---

### 1. Anthropic's updated usage policy takes effect on 12 November {#usage-policy}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span></p>

Announced on 8 October. Anthropic says most changes clarify existing rules, with new examples for longer autonomous work. A new section covers deceptive activity such as fake account networks and fabricated news sites. The election rules no longer include a blanket ban on personalised campaign targeting, but deceptive targeting is still barred. Claude may not be used for covert tracking or to decide who to investigate, arrest or charge. If Claude controls hardware that can act physically, a qualified operator must be able to observe and stop it, and the equipment must hold a safe state if Claude disconnects. The policy also clarifies that entities majority-owned from unsupported regions are barred.

> **So what:** If you build agents that track people, run campaigns or control hardware, read the policy before 12 November and check your use case against the new sections.

Source: [Anthropic](https://www.anthropic.com/news/2026-usage-policy-update)
{: .sources}

### 2. Anthropic launches a Cyber Mission with a critical-infrastructure programme and a free open-source scanner {#cyber-mission}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">General</span><span class="track">Build</span></p>

Announced on 8 October. The Critical Infrastructure Defense Program gives trusted operational-technology providers access to frontier Claude models, on-site engineers and threat research. It has 11 founding partners, including CrowdStrike, Palo Alto Networks and Rockwell Automation, and starts with a small cohort. OSS Scanner is a free, opt-in service that scans open-source projects and reports a proof of concept and a suggested fix where available. Reports are model-generated and sent without human review. Anthropic expects a true-positive rate above 90%, which is its own expectation, not a measured result.

> **So what:** If you maintain a critical open-source project, look at enrolling in OSS Scanner, and budget time to triage unreviewed reports.

Source: [Anthropic](https://www.anthropic.com/news/anthropic-cyber-mission)
{: .sources}

### 3. Copilot code review can now be billed to the organisation instead of each member {#copilot-review-billing}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span></p>

GitHub added a setting under organisation Copilot policies for how members with a Copilot licence are billed. The default is the member's own entitlement, and the review fails if that quota is used up. The alternative bills the organisation, which requires AI Credits paid usage and allows an optional budget. A second setting limits who can trigger reviews, so people using a licence from outside your organisation or enterprise cannot request them. If an owner turns it on, repository admins cannot turn it off. The post gives no prices or plan availability.

> **So what:** If reviews fail for your team when quotas run out, switch billing to the organisation and set a budget first, since it is paid usage.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls)
{: .sources}

### 4. CodeQL 2.27.2 stops working with autobuild on macOS 27 {#codeql-macos-27}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span></p>

Apple no longer ships the multi-architecture binaries CodeQL needs for traced analysis. Autobuild and manual build modes will not work for compiled languages on macOS 27, or on macOS 26 with Xcode 27. GitHub advises macOS 26 with Xcode 26 and is improving build mode none on macOS. The release also adds a C++ regex parser, Rust and JavaScript data-flow improvements and a Go control-flow change that may break custom queries. It deploys automatically on github.com.

> **So what:** If your CI runs CodeQL on macOS runners, keep them on macOS 26 and Xcode 26 for now, and check custom Go queries.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-09-codeql-2-27-2-improves-c-go-rust-and-javascript-analysis)
{: .sources}

### 5. Ollama 0.40.2 upgrades old downloaded models in the background {#ollama-0-40}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">Europe</span></p>

Since 8 October, older downloaded models are upgraded the first time you run them, for performance and llama.cpp compatibility. Backups stay on disk, so downgrading is safe, and the notes include a command to delete them. Version 0.40.3 on 11 October pauses background upgrades of embedding models to improve request performance. 0.40.2 also makes `ollama launch claude` use the model's full context length.

> **So what:** If you run local models, expect extra disk use from backups after the first run, and check free space on small drives.

Source: [Ollama releases](https://github.com/ollama/ollama/releases)
{: .sources}

### 6. xAI adds Grok Imagine Video 1.5 Lite, from $0.02 per second {#grok-video-lite}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">General</span></p>

Listed on 8 October as a text- or image-to-video model. LLM Gateway shows a headline price of $0.02 per second, while the xAI provider table lists $0.03 per second as the default. Resolution and clip length are not stated on the listing. I could not open an xAI announcement, so the details come from an aggregator.

> **So what:** Only worth a look if you generate video through an API. Check xAI's own pricing page before relying on the figures.

Source: [LLM Gateway](https://llmgateway.io/models/grok-imagine-video-1-5-lite)
{: .sources}

### 7. GitHub lets pull request limits count draft pull requests {#draft-pr-limits}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span></p>

Until now drafts did not count toward a user's pull request limit, so anyone could open unlimited drafts. Repositories can now configure the limit to include them. GitHub says this reduces clutter, notifications and CI runs caused by spam. It is a setting, and the post gives no rollout date or plan details.

> **So what:** If you maintain a busy public repository, enable it when you set pull request limits.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-08-draft-pull-requests-count-toward-pull-request-limits)
{: .sources}
