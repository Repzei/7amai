---
term: "Large language model (LLM)"
title: "What is a large language model (LLM)?"
summary: "The kind of AI model behind ChatGPT, Claude and Gemini: how it learns from text, what it does well, and where it goes wrong."
date: 2026-11-26
minutes: 2
other_lang_url: /da/explained/large-language-model/
read_more:
  - { label: "IBM: What are large language models (LLMs)?", url: "https://www.ibm.com/think/topics/large-language-models" }
  - { label: "Google for Developers: Language models, Machine Learning Crash Course", url: "https://developers.google.com/machine-learning/crash-course/llm" }
  - { label: "Vaswani et al.: Attention Is All You Need (the paper behind the transformer)", url: "https://arxiv.org/abs/1706.03762" }
short: |
  A large language model, or LLM, is an AI model trained on very large amounts of text. It learns to predict the next word in a sequence, and from that it can write, summarize and answer questions.

  ChatGPT, Claude and Gemini are built on LLMs. They can sound sure even when they are wrong.
---
A large language model (LLM) is an AI model trained on very large amounts of text. IBM describes it as a model that repeatedly predicts the next word in a sequence. By doing that again and again, it can write, summarize, translate and answer questions. ChatGPT, Claude, Gemini and Llama are all examples of LLMs.

> **Think of it like this:** it is like the autocomplete on your phone, but trained on a huge library of text. It can continue not just one word, but a whole answer.

A language model, in Google's words, estimates how likely a word or word piece is to come next in a longer text. Those pieces are called tokens. During training, the model reads billions or even trillions of words. It sees no answer key. It learns by finding patterns in the text itself.

Most LLMs use a design called the transformer. It was introduced in 2017 in a paper called "Attention Is All You Need". Its key idea is self-attention. This lets the model weigh how each token relates to the others, including ones far away in the text. Transformers also work on many tokens at once, which makes training much faster than older methods.

The model's internal settings are called parameters. Training adjusts them. Some LLMs have billions of them. After the first round of training, a model can be trained further for a job, for example with feedback from people.

LLMs have limits. Because they pick likely words, they can write things that sound right but are false. This is called hallucination. They can also copy biases from the text they learned from. And training and running them needs a lot of computing power and energy.

**Why it matters to you:** when you chat with an AI assistant, you are talking to an LLM. It is a strong tool for drafts, summaries and ideas. But it does not look facts up unless it is built to. Check anything important, especially numbers, names and sources.
