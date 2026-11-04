---
term: "AI watermark"
title: "What is an AI watermark?"
summary: "How an AI can hide a mark in ordinary text, and why a missing mark proves nothing."
date: 2026-11-04
minutes: 2
other_lang_url: /da/explained/ai-watermark/
read_more:
  - { label: "Anthropic: How Claude's text watermark works", url: "https://www.anthropic.com/news/claude-text-watermark" }
  - { label: "Google AI for Developers: SynthID Text", url: "https://ai.google.dev/responsible/docs/safeguards/synthid" }
short: |
  An AI watermark is a hidden pattern that a model puts into what it makes. You cannot see it, but someone with the right key can check for it later.

  In text, the mark sits in the choice of words. It gets weaker when the text is short or rewritten, and a missing mark never proves that a human wrote it.
---
An AI watermark is a hidden pattern that an AI model puts into the text, image or sound it makes. People cannot see it. But a checker with the right secret key can find it and say that the content probably came from that AI.

> **Think of it like this:** a printer that places tiny yellow dots on every page. You read the page as normal, but someone who knows the code can tell which printer made it.

For text, there is no room for hidden dots. So the mark sits in the words themselves. When a model writes, it often has several words that fit equally well. Normally a random number picks one. With a watermark, a secret key makes that choice instead, based on the words that came before.

One choice tells you nothing. But over many sentences, the choices form a pattern that would be very unlikely by chance. A checker with the key counts how well the words match that pattern. Google's SynthID and Anthropic's watermark for Claude both work this way. The text reads the same, and no hidden characters are added.

The mark has clear limits. It is weak in short texts, because there are few word choices to count. It is weak in factual answers and code, where there is often only one right word. And it fades when someone rewrites the text thoroughly.

That is why a checker gives a likelihood, not a verdict. A found mark is a strong signal that the AI was involved. A missing mark proves nothing: the text may be human, or it may just be edited, short, or from another AI.

In the EU, the AI Act asks AI providers to mark what their systems make in a machine-readable way. That is one reason more labs now add watermarks.

**Why it matters to you:** text you write with help from an AI may carry its mark, even after light editing. And if someone claims a text is "AI-made" or "human-made", ask how they checked, because the test can only ever say "probably".
