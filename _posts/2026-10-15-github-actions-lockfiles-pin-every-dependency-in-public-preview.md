---
title: "GitHub Actions lockfiles pin every dependency, in public preview"
summary: "GitHub adds a lockfile for Actions workflows so a moved tag can't change what runs. Also: HydraFusion gets a Max option. A quiet day."
date: 2026-10-15 07:00:00 +0200
reviewed: false
checked: false
minutes: 1.5
other_lang_url: /da/2026/10/15/
items:
  - { n: 1, anchor: "actions-lockfiles", signal: worth, tracks: [build], min: 1, source: official }
  - { n: 2, anchor: "hydrafusion-max", signal: quick, tracks: [build], min: 0.5, source: official }
---

### 1. GitHub Actions workflow lockfiles are in public preview {#actions-lockfiles}
<p class="item-meta"><span class="signal signal-worth">Worth knowing</span><span class="track">Build</span><span class="track">1 min</span></p>

Announced on 14 October. Tags and branches can move after you review a workflow, so a later run may execute different code. A new lockfile, `.github/workflows/actions.lock`, pins actions, their transitive dependencies and reusable workflows to exact commits. You generate it with the `gh actions-lock` extension for the GitHub CLI and onboard workflows one at a time. Once a workflow is onboarded, every dependency needs a lockfile entry. Dependabot version updates regenerate the matching entries in the same pull request. Admins can turn on a "Require lockfile" policy, and CI can check that the file is current. It is available on Free, Team and Enterprise Cloud. Locking does not make a dependency safe: GitHub says to review dependencies before locking them.

> **So what:** Try it on one non-critical workflow first. Review what you lock, then add the CI check so the lockfile can't drift.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-14-github-actions-workflow-lockfiles-in-public-preview) · <span class="tag tag-official">Official</span>
{: .sources}

### 2. Copilot's HydraFusion gets a Max option and a new model pool {#hydrafusion-max}
<p class="item-meta"><span class="signal signal-quick">Quick hit</span><span class="track">Build</span><span class="track">½ min</span></p>

HydraFusion is GitHub's research preview that orchestrates several models per task. On 14 October GitHub updated its pool to Claude Opus 5.5, GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna, and added HydraFusion Max for harder tasks with more reasoning effort. Drafts now run at medium effort and reviews at high. It works in VS Code, the Copilot app and Copilot CLI on Pro, Pro+, Business and Enterprise, with preview features enabled and subject to organisation model policy. The post gives no prices and no benchmark numbers.

> **So what:** Try it only if you are comfortable with preview features, and watch your usage, since GitHub states no costs.

Source: [GitHub changelog](https://github.blog/changelog/2026-10-14-hydrafusion-updates-and-new-max-option) · <span class="tag tag-official">Official</span>
{: .sources}
