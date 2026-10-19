---
term: "AI agent"
title: "What is an AI agent?"
summary: "What makes an agent different from a chatbot, and why that changes the risks."
date: 2026-10-19
minutes: 2
other_lang_url: /da/explained/ai-agent/
read_more:
  - { label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents" }
short: |
  An AI agent is an AI model that does not just answer, but acts. It decides its own next step, uses tools like a browser, a code editor or a payment page, and keeps going until the task is done.

  That makes it useful for open-ended jobs. It also means mistakes can pile up, so agents need limits on what they may touch.
---
An AI agent is an AI model that does not just answer you, but acts for you. It chooses its own next step, uses tools, and keeps going until the task is done.

A normal chatbot works like a question and an answer. You ask, it replies, and you decide what happens next. An agent gets a goal instead, such as "fix this bug" or "book the cheapest flight". It then plans the steps itself. It might search the web, open files, run code or fill in a form, look at the result, and decide what to do next.

> **Think of it like this:** a chatbot is a friend you call for advice. An agent is a friend you give your keys to, so they can go and do the errand for you. That is far more useful, but you have to trust what they do while you are not watching.

Anthropic describes the difference like this. In a fixed workflow, the steps are written in code ahead of time. In an agent, the model directs its own process and decides which tools to use. That makes agents good at open-ended problems, where nobody can say in advance how many steps it will take.

The price is cost and risk. An agent often uses many more words, and so more money, than a single answer. And because each step builds on the last, a small mistake early on can grow into a big one. That is why builders test agents in a safe sandbox first and limit what they may touch, for example read-only access to a bank account.

**Why it matters to you:** more and more AI products are agents, from coding tools to shopping helpers. Before you let one act for you, ask what it can reach, what it can change, and who is responsible if it gets something wrong.
