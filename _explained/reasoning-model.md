---
term: "Reasoning model"
title: "What is a reasoning model?"
summary: "Why some AI models think before they answer, and why you pay for that thinking."
date: 2026-11-11
minutes: 2
other_lang_url: /da/explained/reasoning-model/
read_more:
  - { label: "Google AI Studio: Gemini thinking", url: "https://aistudio.google.com/docs/thinking" }
short: |
  A reasoning model works through a problem step by step before it gives you an answer. It writes out its thinking first, often hidden from you, and then answers.

  That makes it better at hard tasks like code, math and planning. But the thinking counts as output, so you pay for it, and the answer takes longer.
---
A reasoning model is an AI model that works through a problem step by step before it answers. Most top models from Google, OpenAI and Anthropic can work this way.

An ordinary chat model starts writing the answer right away, one word at a time. A reasoning model first writes out its thinking: it breaks the task into steps, tries an approach, and checks its own work. Only then does it write the answer you see. Often you get just a short summary of the thinking, or nothing at all.

> **Think of it like this:** an ordinary model answers like someone asked a question at a party. A reasoning model is like someone who takes a notepad, works it out, and checks the result before answering.

The thinking is made of tokens, the small pieces of text a model reads and writes. Google's documentation says that when thinking is on, you pay for the thinking tokens as well as the answer. So a reasoning model can cost more per question, even at the same price per token. Many models let you choose how much to think, for example a low or high level. More thinking usually helps on hard tasks, like complex code or planning. On simple tasks, such as sorting mail, it mostly adds cost and waiting time.

That is why the price per token says little on its own. A model that thinks longer may still be cheaper per finished task, if it gets the answer right the first time.

**Why it matters to you:** when you pick a model, look at the cost and time for a whole task. The price per token is only part of it. Use high thinking for hard problems and low thinking for easy ones.
