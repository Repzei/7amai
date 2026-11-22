---
term: "Zero data retention"
title: "What is zero data retention?"
summary: "What an AI provider promises when it says it keeps none of your data, and where that promise stops."
date: 2026-11-22
minutes: 2
other_lang_url: /da/explained/zero-data-retention/
read_more:
  - { label: "OpenRouter: Zero Data Retention (ZDR)", url: "https://openrouter.ai/docs/features/zdr" }
short: |
  Zero data retention, or ZDR, is a promise from an AI provider. It will not store your prompts or the model's answers after it has handled the request. Because nothing is kept, it cannot train on it either.

  The promise only covers the company that makes it. If your prompt passes through a router or a reseller, each of them has its own rules.
---
Zero data retention, or ZDR, is a promise from an AI provider. It does not store your prompts or the model's answers once your request is handled.

> **Think of it like this:** a shredder next to the photocopier. You hand over a page, get your copy, and the original goes straight into the shredder instead of a drawer.

When you send a prompt to an AI model, the provider has to read it to answer. The question is what happens afterwards. Some providers keep prompts to train new models. Others keep them for a while to look for abuse. A ZDR provider keeps nothing routinely once the request is done, and so it cannot train on your data either.

The router OpenRouter, for example, sorts providers into three groups. ZDR keeps nothing. Safety retention may keep data to stop abuse, but not for training. The third group keeps data and trains on it. You can tell it to send your requests only to ZDR providers. OpenRouter notes some limits. Keeping a prompt in memory to answer faster does not count as storing it. Content flagged in a screening for child abuse may also be kept for review. And tools you add, such as web search, may have their own rules.

The biggest limit is that the promise only binds the company that makes it. Your prompt may pass through an app, a router and a hosting firm on its way to the model. If one of them logs it, or is hacked, the ZDR label does not help.

**Why it matters to you:** ZDR lowers the risk that your data ends up in a training set or a leak. But it is a promise, not a lock. For data that must never leak, the safest choice is to leave it out of the prompt, or to run the model yourself.
