---
term: "Reinforcement learning"
title: "What is reinforcement learning?"
summary: "How AI models learn by trying, failing and being rewarded, and why labs use it to make them better at coding."
date: 2026-10-30
minutes: 2
other_lang_url: /da/explained/reinforcement-learning/
read_more:
  - { label: "Hugging Face Deep RL Course: What is reinforcement learning?", url: "https://huggingface.co/learn/deep-rl-course/unit1/what-is-rl" }
short: |
  Reinforcement learning is a way of training AI by trial and error. The model tries something, gets a reward when it goes well and a penalty when it goes badly, and slowly learns to do more of what earns rewards.

  AI labs now use it to make language models better at tasks with a clear right answer, like code that passes its tests.
---
Reinforcement learning is a way of training an AI by trial and error. The learner, often called the agent, tries an action. It then gets a reward if the result is good and a penalty if it is bad. Over many rounds, it learns to do more of what earns rewards.

> **Think of it like this:** a child plays a video game nobody has explained. Grabbing a coin gives a point, and touching an enemy ends the game. After a while, the child collects coins and avoids enemies, without anyone giving instructions.

That is the example Hugging Face uses in its course, and it shows the three parts. There is a learner, a world it acts in, and a score that tells it how it did. Nobody shows it the right move. It has to find it by trying.

Language models first learn by reading huge amounts of text. That teaches them to write, but not to solve hard tasks well. So labs add reinforcement learning on top. The model tries a task many times, such as writing code. A check scores each attempt, for example by running the code's tests. The model is then nudged towards the attempts that scored well.

This works best when it is easy to tell a good result from a bad one. Code that passes tests and maths with a known answer are good fits. It is harder for things like taste or tone, where people have to judge the answer. The catch is that a model can learn to please the scorer instead of doing the job. If a test is weak, it may find a shortcut that passes the test but does not really work.

**Why it matters to you:** when a lab says a model got better after "more RL", this is what it means. The model practised the kind of tasks you care about, like coding, and was rewarded when it got them right. That is why models now improve a lot between versions without growing in size.
