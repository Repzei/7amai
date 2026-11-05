---
term: "Parameter"
title: "What is a parameter in an AI model?"
summary: "The numbers a model learns in training, and why more of them is not always better."
date: 2026-11-05
minutes: 2
other_lang_url: /da/explained/parameter/
read_more:
  - { label: "Google Machine Learning Glossary: parameter", url: "https://developers.google.com/machine-learning/glossary#parameter" }
short: |
  A parameter is one of the numbers inside an AI model that it learns during training. Together they hold everything the model knows. When you read "a 70B model", it means 70 billion such numbers.

  More parameters can hold more knowledge, but the model also needs more memory and more computing power for each answer.
---
A parameter is one of the numbers inside an AI model that the model learns during training. Google's glossary calls them the weights and biases a model learns. Together, they are what the model knows.

At the start of training, the numbers are random. The model then reads huge amounts of text and guesses the next word again and again. Each time it guesses wrong, training nudges the numbers a little, so the next guess is better. After billions of such nudges, the numbers hold patterns of language, facts and skills.

> **Think of it like this:** a mixing desk in a studio has many small knobs. One knob alone does little. But set all of them just right, and the song sounds good. Parameters are the knobs, and training is the sound engineer turning them, billions of times, until the result sounds right.

That is why model sizes are given as a count. "8B" means 8 billion parameters, and "2.8T" means 2.8 trillion. The file you download for an open model is mostly these numbers.

The count tells you two things. A bigger model can usually hold more knowledge and handle harder tasks. But it also needs more memory, and every answer takes more computing power. Some big models, called mixture-of-experts models, only use a small part of their parameters for each word. So they speak of "total" and "active" parameters.

There is a catch with comparing counts. A smaller model trained on better data can beat a bigger one. So the number is a hint about cost and power, not a score.

**Why it matters to you:** the parameter count tells you roughly what a model costs to run and what machine it needs. A model with a few billion parameters can run on a laptop. One with trillions needs a data centre.
