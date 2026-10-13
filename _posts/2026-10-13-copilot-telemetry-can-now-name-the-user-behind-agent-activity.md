---
title: "Copilot telemetry can now name the user behind agent activity"
summary: "GitHub adds opt-in user attribution and fine-grained capture controls to Copilot telemetry. Also: JetBrains admin controls and a pause in Ollama's model upgrades. A quiet day."
date: 2026-10-13 07:00:00 +0200
reviewed: false
minutes: 2
other_lang_url: /da/2026/10/13/
items:
  - { n: 1, anchor: "copilot-telemetry", signal: worth, tracks: [build, europe], min: 1 }
  - { n: 2, anchor: "copilot-jetbrains", signal: quick, tracks: [build], min: 0.5 }
  - { n: 3, anchor: "ollama-0-40-3", signal: quick, tracks: [build, europe], min: 0.5 }
---

### 1. Copilot telemetry can attribute activity to a named user, with five separate capture switches {#copilot-telemetry}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">Europe</span><span class="track">1 min</span></p>

Announced on 12 October. Enterprise admins can set `telemetry.capture.identity` in managed settings to add three OpenTelemetry attributes: `user.name` (currently the GitHub login), `process.user.name` (the local OS account) and `host.name` (the machine name). Separately, five capture classes can be enabled one by one: `prompts`, `responses`, `toolArguments`, `toolOutput` and `policyDetail`. Everything is off by default, and managed values override local settings, the SDK and environment variables. The older `captureContent` setting still works but does not turn on identity. It applies to Copilot CLI, the GitHub Copilot app and VS Code sessions using Agent Host. The post gives no rollout date or plan requirements.

> **So what:** If you run Copilot in a company, decide which classes you actually need for audit before switching any on. Captured data can include source code, commands and file paths, and named employees raise privacy and works-council questions in the EU.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-12-client-telemetry-user-attribution-and-configurable-capture) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Copilot for JetBrains lets admins set the default model and stop MCP servers auto-starting {#copilot-jetbrains}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">½ min</span></p>

Released on 10 October. Enterprise admins can set any available agent model as the default for new conversations; users can still pick another. A new setting turns off automatic startup of Copilot and Claude MCP servers. Diagnostics get a Fix action that opens inline chat. JetBrains IDE 2025.1 is no longer supported, so you need 2025.2 or later.

> **So what:** If your team is on JetBrains 2025.1, upgrade the IDE before the plugin stops updating for you.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-10-new-controls-and-chat-improvements-in-copilot-for-jetbrains) · <span class="tag tag-official">Official</span>
{: .sources}

### 3. Ollama 0.40.3 pauses the background model upgrade it introduced in 0.40.2 {#ollama-0-40-3}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">Europe</span><span class="track">½ min</span></p>

Follow-up to Monday's item. The 11 October release pauses the background upgrade of downloaded models and removes warnings from `ollama launch claude` and `ollama launch codex`. A 0.40.4 release candidate from 12 October updates llama.cpp and adds installed models to the Codex model picker. Models already upgraded by 0.40.2 still have backup copies on disk, and going below 0.40 means re-pulling them.

> **So what:** If disk space is tight, check for backup copies of models you already ran on 0.40.2, and wait for the final 0.40.4 before updating.

Source: [Ollama releases](https://github.com/ollama/ollama/releases) · <span class="tag tag-official">Official</span>
{: .sources}
