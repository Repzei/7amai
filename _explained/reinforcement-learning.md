---
term: "Reinforcement learning"
title: "What is reinforcement learning?"
summary: "How AI models learn by trying, failing and being rewarded, and why labs use it to make them better at coding."
date: 2026-10-30
minutes: 2
other_lang_url: /da/explained/reinforcement-learning/
read_more:
  - { label: "Hugging Face Deep RL Course: What is reinforcement learning?", url: "https://huggingface.co/learn/deep-rl-course/unit1/what-is-rl" }
  - { label: "Hugging Face: Illustrating reinforcement learning from human feedback (RLHF)", url: "https://huggingface.co/blog/rlhf" }
short: |
  Reinforcement learning is a way of training AI by trial and error. The model tries something, gets a reward when it goes well and a penalty when it goes badly, and slowly learns to do more of what earns rewards.

  AI labs use it on top of normal training to make language models give better answers.
---
Reinforcement learning is a way of training an AI by trial and error. The learner, often called the agent, tries an action. It then gets a reward if the result is good and a penalty if it is bad. Over many rounds, it learns to do more of what earns rewards.

> **Think of it like this:** a child plays a video game nobody has explained. Grabbing a coin gives a point, and touching an enemy ends the game. After a while, the child collects coins and avoids enemies, without anyone giving instructions.

That is the example Hugging Face uses in its course, and it shows the three parts. There is a learner, a world it acts in, and a score that tells it how it did. Nobody shows it the right move. It has to find it by trying.

Language models first learn by reading huge amounts of text. That teaches them to write, but not to solve hard tasks well. So labs add reinforcement learning on top. The model answers many tasks, and a check scores each answer. Often that check is a separate model trained on which answers people prefer. The model is then nudged towards the answers that scored well.

The catch is that a model can learn to please the scorer instead of doing the job. Researchers call this reward hacking. Without limits, a model can find answers that get a high score but are useless, so labs keep it close to what it learned first.

**Why it matters to you:** when a lab says a model got better after "more RL", this is what it means. The model practised the kind of tasks you care about, like coding, and was rewarded when it got them right.
