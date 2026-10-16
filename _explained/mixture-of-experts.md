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
A mixture-of-experts model is split into many smaller specialist parts, called experts. For each word it writes, a small part of the model picks a few experts to do the work. That part is called the router. The rest of the experts stay idle.

> **Think of it like this:** a large hospital has hundreds of doctors, but you only see the two you need for your problem.

So a model can have hundreds of billions of weights in total but use only a fraction for each word. It still needs enough memory to hold all the experts. But each step is much faster and cheaper than in a "dense" model of the same size. In a dense model, every weight works on every word.

That trade-off is why most of today's biggest models are built this way. It also explains why local tools like llama.cpp add special tricks for MoE models. They can keep rarely used experts in slower memory.

**Why it matters to you:** when you see a huge parameter count on an MoE model, look at the "active" parameters too. That number tells you more about speed and running costs.
