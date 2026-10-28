---
term: "P vs NP"
title: "What is the P vs NP problem?"
summary: "The biggest open question in computer science: if an answer is easy to check, is it also easy to find?"
date: 2026-10-28
minutes: 2
other_lang_url: /da/explained/p-vs-np/
read_more:
  - { label: "Clay Mathematics Institute: P vs NP", url: "https://www.claymath.org/millennium/p-vs-np/" }
  - { label: "Wikipedia: Exponential time hypothesis", url: "https://en.wikipedia.org/wiki/Exponential_time_hypothesis" }
short: |
  P vs NP asks a simple question: if it is easy to check that an answer is right, is it also easy to find that answer?

  Most experts think the answer is no, but nobody has proven it. It is one of the Millennium Prize Problems, and much of computer science, including encryption, is built on the guess that some problems really are hard.
---
P vs NP is the biggest open question in computer science. It asks: if it is easy to check that an answer is right, is it also easy to find that answer?

"P" stands for problems a computer can solve fast. "NP" stands for problems where a computer can check a proposed answer fast. Every problem in P is also in NP. The question is whether the two groups are really the same.

> **Think of it like this:** a jigsaw puzzle is slow to put together, but a glance tells you if a finished one is right. P vs NP asks if there is always a clever shortcut, so building the puzzle is never hopelessly slower than checking it.

The Clay Mathematics Institute gives an example. You must pick 100 of 400 students for a dorm, and some pairs must never live together. If a coworker hands you a list, you can check it quickly. But finding a good list yourself seems hopeless, because there are more possible lists than atoms in the known universe.

Stephen Cook and Leonid Levin first stated the problem in 1971, each on their own. It is one of the Millennium Prize Problems, and it is still unsolved.

Researchers also use stricter guesses. One is the Exponential Time Hypothesis, from 1999. It says that for a well-known logic puzzle called 3-SAT, the time needed grows exponentially with the puzzle's size, whatever trick you use. If that guess is true, P and NP are different. But proving it false would not mean P equals NP.

**Why it matters to you:** much of your online safety relies on some problems being very hard to solve. The encryption behind your bank login is one example. That is why claims that AI has shaken one of these beliefs get so much attention.
