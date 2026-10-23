---
term: "Formal verification"
title: "What is formal verification?"
summary: "How a math-style proof can show that code behaves correctly for every input, not just the ones you tested."
date: 2026-10-23
minutes: 2
other_lang_url: /da/explained/formal-verification/
read_more:
  - { label: "seL4: Verification", url: "https://sel4.systems/Verification/" }
  - { label: "The Rocq Prover", url: "https://rocq-prover.org/" }
  - { label: "Anthropic: formal verification with Claude", url: "https://www.anthropic.com/research/formal-verification" }
short: |
  Formal verification means proving, like in math, that a program always does what a written rule says. A test checks some inputs. A proof covers every input.

  A computer program called a proof checker reads each step, so a wrong proof is caught. The catch is cost: proofs are slow to write, so they have mostly been used where bugs are very dangerous.
---
Formal verification is a way to prove that a program follows a precise rule, such as "this code never crashes". The proof is written step by step, like a proof in math class, and a computer checks it.

Normal testing works differently. You run the program with many inputs and see if anything goes wrong. That finds a lot of bugs, but it can never try every input. A proof covers all of them at once.

> **Think of it like this:** a test is like driving a car over a bridge a thousand times and seeing that it holds. A proof is like an engineer's calculation that shows the bridge holds for every load up to its limit. Where the comparison fails: the calculation is only as good as its assumptions. If the real bridge is built from other materials than the drawing, the proof says nothing about it.

It works in three steps. First, someone writes the rule, called a specification. Then someone writes the proof that the code meets it. Finally, a tool called a proof checker, such as Rocq, checks every step. If one step is wrong, the checker refuses the proof.

The hard part is writing the proof. It can be far longer than the program itself, so it has been slow and costly work. That is why it has mostly been used for software where a bug would be very dangerous, such as the seL4 operating system kernel. AI models can now write much of this work, which may make proofs cheap enough for ordinary code.

**Why it matters to you:** much of the software on your phone and laptop is built on shared open-source code. If that code is proven, not just tested, whole kinds of crashes and security holes are ruled out.
