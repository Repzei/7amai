---
term: "Mixture of experts (MoE)"
title: "What is a mixture-of-experts (MoE) model?"
summary: "Why huge models only use a slice of themselves for each word."
date: 2026-10-16
minutes: 2
other_lang_url: /da/explained/mixture-of-experts/
read_more:
  - { label: "Hugging Face: Mixture of Experts Explained", url: "https://huggingface.co/blog/moe" }
short: |
  A mixture-of-experts model is split into many smaller specialist parts, called experts. For each word it writes, a small router picks only a few of them to do the work.

  So a model can have hundreds of billions of weights in total but use only a fraction per word. That makes it much faster and cheaper to run than a dense model of the same size.
---
A mixture-of-experts model is split into many smaller specialist parts, called experts. For each word it writes, a small part of the model called the router picks only a few experts to do the work. The rest stay idle.

> **Think of it like this:** a large hospital has hundreds of doctors, but you only see the two you need for your problem.

This is why a model can have hundreds of billions of weights in total but use only a fraction of them for each word. It still needs enough memory to hold all the experts, but each step is much faster and cheaper than in a "dense" model of the same size, where every weight works on every word.

That trade-off is why most of today's biggest models are built this way. It is also why tools for running models locally, like llama.cpp, add special tricks for MoE models: they can keep the experts that are rarely used in slower memory.

**Why it matters to you:** when you see a huge parameter count on an MoE model, look at the "active" parameters too. That number tells you more about speed and running costs.
