---
term: "System card"
title: "What is a system card?"
summary: "The report an AI lab publishes on what a new model can do and how it was tested."
date: 2026-11-10
minutes: 2
other_lang_url: /da/explained/system-card/
read_more:
  - { label: "Anthropic: model system cards", url: "https://www.anthropic.com/system-cards" }
  - { label: "Mitchell et al.: Model Cards for Model Reporting", url: "https://arxiv.org/abs/1810.03993" }
short: |
  A system card is a report that an AI lab publishes with a new model. It says what the model can do, how it was tested for safety, and why the lab chose to release it the way it did.

  It is written by the lab itself. So it is a useful look inside, but not an outside check.
---
A system card is a report that an AI lab publishes when it releases a new model. It describes what the model can do, how it was tested for safety, and the choices the lab made about who gets to use it.

The idea comes from "model cards", which researchers proposed in 2018. A model card says how a model performs in different situations, what it is meant to be used for, and how it was tested. Big labs now publish much longer versions for their top models. Anthropic calls them system cards.

> **Think of it like this:** a system card is like the test report a carmaker publishes for a new car. It shows the crash tests, the fuel use and the known weak spots. But the carmaker ran most of the tests itself.

A typical system card has test scores on skills like coding or math. It also has safety tests. Can the model help with a cyberattack? Does it try to escape a sandbox? Does it notice a test? Outside testers, like government AI institutes, are often named, but the lab writes the report.

That is why system cards matter and why they have limits. They often say more than the launch blog post, including problems the lab found. But there is usually no independent body that checks the numbers.

**Why it matters to you:** the system card is the best place to find a new model's weak spots, not only its strengths. Read it as the maker's own report, and look for outside tests before you trust it with something important.
