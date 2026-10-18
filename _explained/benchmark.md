---
term: "Benchmark"
title: "What is a benchmark?"
summary: "How AI models are tested and scored, and why a high score is not the whole story."
date: 2026-10-18
minutes: 2
other_lang_url: /da/explained/benchmark/
read_more:
  - { label: "Hugging Face LLM Evaluation Guidebook: Automated benchmarks basics", url: "https://github.com/huggingface/evaluation-guidebook/blob/main/contents/automated-benchmarks/basics.md" }
short: |
  A benchmark is a fixed test for AI models: a set of tasks plus a way to score the answers. Every model takes the same test, so you can compare the scores.

  Scores are useful but limited. A lab often runs the test on its own model, and test questions can leak into the data a model learned from.
---
A benchmark is a fixed test for AI models. It is a set of tasks, such as coding problems or exam questions, plus a rule for scoring each answer.

Because every model takes the same test, you can line up the scores. That is why AI news is full of names like SWE-bench, Terminal-Bench or HLE. Each one tests a different skill, from fixing real code to answering hard expert questions.

> **Think of it like this:** a driving test. Everyone drives the same route, and the examiner uses the same checklist, so the results are comparable. Where the comparison fails: a driving test has an independent examiner. With AI, the company that built the model often runs the test and reports the score.

A few things limit what a score tells you. First, who ran it. A lab's own numbers are claims until someone else repeats them. Second, the setup. The same model can score differently with a different tool, prompt or time limit.

Third, leaks. Once a test is public, its questions can end up in the data a model learns from. The model may then have seen the answers before. Hugging Face's evaluation guide warns about this directly.

Last, a benchmark only measures what it tests. A model can top a coding test and still be weak at the work you need.

**Why it matters to you:** use benchmark scores to make a short list, not to decide. Check who ran the test, then try the top few models on your own tasks.
