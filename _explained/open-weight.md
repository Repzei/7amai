---
term: "Open-weight model"
title: "What does \"open-weight\" mean?"
summary: "What you get when a model's weights are public, and what you don't."
date: 2026-10-16
minutes: 2
other_lang_url: /da/explained/open-weight/
read_more:
  - { label: "Open Source Initiative: the Open Source AI Definition", url: "https://opensource.org/ai/open-source-ai-definition" }
short: |
  An AI model is a huge file of numbers called weights. "Open-weight" means anyone can download that file and run the model on their own machines, instead of renting access through an API.

  It is not the same as open source: the training data and code usually stay secret, and the license can set limits.
---
An AI model is, at its core, a huge file of numbers called weights. They are what the model learned during training. Whoever has that file can run the model.

When a company calls a model "open-weight", it means anyone can download that file. You can run it on your own servers, fine-tune it on your own data, and keep everything inside your company. With a closed model like GPT-6 or Claude, you only rent access through an API. The file never leaves the company that made it.

> **Think of it like this:** a closed model is a restaurant. You order and get the dish. An open-weight model is the finished dish to take home. You can reheat it and add spices, but you still do not get the full recipe.

That last part matters. Open-weight is not the same as open source. The training data and the code used to build the model usually stay secret. The license can also set limits, for example on how very large companies may use it.

**Why it matters to you:** open weights mean lower costs at scale, more control over your data, and no risk that a provider changes or removes the model. The price is that you run, secure and update it yourself.
