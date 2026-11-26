---
term: "Fine-tuning"
title: "What is fine-tuning of an AI model?"
summary: "Fine-tuning means training a ready-made AI model a little more, on examples for one job. Here is how it differs from training from scratch and from prompting."
date: 2026-11-26
minutes: 2
other_lang_url: /da/explained/fine-tuning/
read_more:
  - { label: "IBM: What is fine-tuning?", url: "https://www.ibm.com/think/topics/fine-tuning" }
  - { label: "Hugging Face: Fine-tuning (Transformers documentation)", url: "https://huggingface.co/docs/transformers/training" }
short: |
  Fine-tuning means taking an AI model that is already trained and training it a little more on a smaller set of examples for one job, such as a certain tone, a topic or a task.

  It needs far less computing power and data than training a model from scratch. The risk is that the model can forget some of what it knew before.
---
Fine-tuning means taking an AI model that is already trained and training it a bit more, on a smaller set of examples for one job. IBM describes it as adapting a pre-trained model for specific tasks or use cases.

> **Think of it like this:** a family doctor who takes a course to become a skin specialist. The doctor already knows medicine. The course adds focus, not a new education.

The first, big round of training is called pre-training. The model starts with random settings and learns from huge amounts of data. Fine-tuning starts from the settings that pre-training already produced. Hugging Face says that fine-tuning is the same as pre-training, except that you do not start from random settings. It also needs far less compute, data and time.

The most common kind is supervised fine-tuning. You give the model examples with the right answers, such as pairs of a question and a good reply. IBM lists uses like changing a model's tone, training it on code, teaching it to follow instructions, or adding knowledge for law, finance or medicine.

There are two main ways to do it. Full fine-tuning updates all of the model's settings. That can be very costly for a large model. IBM says it can need 12 to 20 times more graphics memory than the model itself takes up. Parameter-efficient methods, such as LoRA, change only a small part or add a small add-on, so they are cheaper.

Fine-tuning is not the same as prompting. A prompt tells the model what to do each time you ask. Fine-tuning changes the model itself, and it keeps the change.

There are risks. IBM names two. The model can forget some of its core knowledge, which is called catastrophic forgetting. And if the example set is small, the model can learn it by heart and do poorly on new input, which is called overfitting. Good results often take several rounds of trial and error.

**Why it matters to you:** many AI products are a general model that someone fine-tuned for one purpose, such as customer support or legal work. When a company says its model is fine-tuned, ask what examples it was trained on. That decides what the model is good at, and where it will be weak.
