---
title: "Gemini 4 Argon is in the API at $2 per million input tokens, for now"
summary: "Google opens Gemini 4 Argon to paid API users at introductory prices that double on 1 December. Also: Anthropic keys blocked by default in GitHub, finer GitHub App permissions and Ollama 0.40.4."
date: 2026-10-14 07:00:00 +0200
reviewed: false
checked: true
minutes: 2.5
other_lang_url: /da/2026/10/14/
items:
  - { n: 1, anchor: "gemini-4-argon", signal: big, tracks: [build, general], min: 1, source: official, number: "$2", number_label: "per 1M input tokens until 30 Nov" }
  - { n: 2, anchor: "anthropic-key-blocking", signal: worth, tracks: [build], min: 0.5 }
  - { n: 3, anchor: "github-app-permissions", signal: quick, tracks: [build], min: 0.5 }
  - { n: 4, anchor: "ollama-0-40-4", signal: quick, tracks: [build, europe], min: 0.5 }
---

### 1. Gemini 4 Argon is available to paid API users, with introductory prices that double on 1 December {#gemini-4-argon}
<p class="item-meta"><span class="signal signal-big">Big deal</span><span class="track">Build</span><span class="track">General</span><span class="track">1 min</span></p>
<div class="number"><b>$2</b><span>per 1M input tokens until 30 Nov</span></div>

Google released Gemini 4 Argon to developers on 13 October through the paid tier of the Gemini API, with Google AI Ultra subscribers able to try it in AI Studio and Antigravity. The model ID is `gemini-4-argon`. Until 30 November it costs $2 per million input tokens and $10 per million output tokens, thinking tokens included. From 1 December that becomes $4 and $20. It is not on the free tier or the Google AI Pro plan. Google's pricing page says it supports long generation of up to 1M tokens but does not state a context window. GitHub made it generally available in Copilot the same day for Pro+, Max, Business and Enterprise plans, with a gradual rollout. GitHub says it solved more tasks than earlier Gemini models in early testing, with no numbers given.

> **So what:** Try it on your own long coding or writing jobs now, but budget for the December prices before you build on it. Business and Enterprise admins: new models switch on by default in Copilot unless you turned that off.

Source: [Google](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/) · <span class="tag tag-official">Official</span> · [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) · <span class="tag tag-official">Official</span> · [GitHub changelog](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. GitHub secret scanning now blocks Anthropic API keys by default {#anthropic-key-blocking}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">½ min</span></p>

On 13 October GitHub added detectors for Anthropic service API keys and user API keys, plus Cloudsmith keys. Push protection is on by default for both Anthropic key types, so commits containing them are blocked wherever secret scanning is enabled, including free public repositories. A Salesforce Marketing Cloud OAuth2 token pattern was also added. The post does not say how to opt out, or whether the Cloudsmith and Salesforce patterns block by default.

> **So what:** If a push is suddenly blocked, rotate the key rather than bypass the block. Check your repositories for old Anthropic keys that were already committed.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-13-secret-scanning-blocks-anthropic-keys-by-default-adds-salesforce) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. GitHub Apps get a narrower permission for creating repositories {#github-app-permissions}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">½ min</span></p>

The new `repository_creation:write` permission lets an app or fine-grained token create repositories without `repository_administration:write`, which also allows deleting and transferring them. A second one, `installation_repositories:write`, covers adding and removing repositories on an installation. Repository admins can now add their repositories to an organisation-approved app without owner approval, unless owners restrict installation. The post gives no github.com rollout details.

> **So what:** If a bot or script creates repositories, swap its admin permission for the narrower one.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-13-github-app-improvements-for-least-privilege-and-management) · <span class="tag tag-official">Official</span>
{: .sources}

### 4. Ollama 0.40.4 is out, with faster inference and local models in the Codex launcher {#ollama-0-40-4}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">Europe</span><span class="track">½ min</span></p>

Follow-up to yesterday's item. The 12 October release lists faster inference through cached manifests and loaded models, local models in `ollama launch codex`, and multimodal embeddings via llama-server. The release page marks it as the latest, not a pre-release.

> **So what:** If you held off on 0.40.x because of the background upgrade, this is the version to move to. Check disk space for backup model copies first.

Source: [Ollama releases](https://github.com/ollama/ollama/releases) · <span class="tag tag-official">Official</span>
{: .sources}
