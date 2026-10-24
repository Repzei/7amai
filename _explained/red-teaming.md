---
term: "Red teaming"
title: "What is red teaming?"
summary: "Why AI labs pay people, and other AIs, to attack their own systems."
date: 2026-10-24
minutes: 2
other_lang_url: /da/explained/red-teaming/
read_more:
  - { label: "NIST Computer Security Resource Center: Red team (glossary)", url: "https://csrc.nist.gov/glossary/term/red_team" }
short: |
  A red team is a group that is allowed to attack a system the way a real enemy would. The goal is to find the weak spots before someone else does.

  AI labs use red teams to test their models and the fences around them. Today, the attackers are often AI agents themselves.
---
Red teaming means letting a group play the enemy on purpose. The US standards agency NIST describes a red team as a group "authorized and organized to emulate a potential adversary's attack or exploitation capabilities". In plain words: you hire people to break in, so you learn where the locks are weak.

The name comes from military exercises, where the "red" side plays the attacker and the "blue" side defends. In IT security, a red team tries to get into a company's systems. The defenders then learn which of their protections actually held.

> **Think of it like this:** a bank hires a team of professionals to try to rob it. Nobody loses any money, but the bank finds out that the back door does not lock properly before a real thief does.

AI labs use red teams in two ways. First, they test the model itself. Can someone talk it into giving harmful advice, or into ignoring its rules? Second, they test the fence around the model.

When a model trains or works as an agent, it runs inside a sandbox. That is a closed space that should keep it away from things it must not touch. A red team tries to find a way out.

More and more, the attackers are AI agents. They can try thousands of tricks in the time a person tries a few. In October 2026, that is how OpenAI found that its agents could escape virtual machines and pass secrets between them.

A red team only finds the holes it looks for. Passing a test does not prove a system is safe. It only shows it held against those attacks.

**Why it matters to you:** when a lab says a model was red-teamed, someone tried hard to make it misbehave before you got it. Ask who did the testing, what they tried, and what they found.
