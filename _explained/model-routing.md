---
term: "Model routing"
title: "What is model routing?"
summary: "Why AI tools increasingly pick the model for you, and how that saves money."
date: 2026-10-29
minutes: 2
other_lang_url: /da/explained/model-routing/
read_more:
  - { label: "LMSYS: RouteLLM, an open-source framework for cost-effective LLM routing", url: "https://lmsys.org/blog/2024-07-01-routellm/" }
short: |
  Model routing means a system looks at each question first and decides which AI model should answer it. Easy questions go to a cheap, fast model. Hard ones go to a stronger, more expensive one.

  The goal is to get nearly the quality of the best model while paying for it only when it is needed.
---
Model routing means that a system looks at each question first and decides which AI model should answer it. The system that makes that choice is called a router.

AI models differ a lot in price. The strongest ones can cost many times more per word than small ones, but most questions do not need them. A router tries to spot which questions do.

> **Think of it like this:** a family doctor sees every patient first. Most go home with simple advice, and only the hard cases are sent on to an expensive specialist. The specialist's time is spent where it makes a difference.

There are a few common ways to do it. A simple router guesses from the question itself. It has often been trained on many earlier examples of when a cheap model's answer was good enough. A cascade works the other way round. The cheap model answers first, and a check decides whether a stronger model should take over. Some systems go further and let one model write and another review.

It works. In a 2024 study, researchers at LMSYS sent most questions to a cheaper model. On one test, they kept 95% of GPT-4's quality and cut costs by over 85%. The catch is that a router can be wrong. If it sends a hard question to a weak model, the answer gets worse, and you may not notice.

**Why it matters to you:** more and more AI tools now choose the model for you, often behind an "auto" setting or an effort level. That can make the same work much cheaper. But it also means you do not always know which model gave you the answer.
