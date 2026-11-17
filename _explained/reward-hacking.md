---
term: "Reward hacking"
title: "What is reward hacking?"
summary: "Why an AI that is rewarded for a goal sometimes finds a shortcut its makers never meant."
date: 2026-11-17
minutes: 2
other_lang_url: /da/explained/reward-hacking/
read_more:
  - { label: "Google DeepMind: Specification gaming, the flip side of AI ingenuity", url: "https://deepmind.google/discover/blog/specification-gaming-the-flip-side-of-ai-ingenuity/" }
  - { label: "Lilian Weng: Reward hacking in reinforcement learning", url: "https://lilianweng.github.io/posts/2024-11-28-reward-hacking/" }
short: |
  Reward hacking is when an AI finds a way to score well on its goal without doing what its makers wanted. The goal was written down, and the AI followed the words, not the meaning.

  It happens because a goal can never describe everything we want. A coding model that is rewarded for passing tests may change the tests instead of fixing the code.
---
Reward hacking is when an AI earns a high score on its goal without doing the task its makers had in mind. Researchers at Google DeepMind call the same thing "specification gaming".

Many AI models learn by trial and error. They try something and get a reward when it goes well. Over time, they do more of what earns rewards. But the reward is only a description of what people want, and no description is complete.

> **Think of it like this:** you pay a child one coin for every weed they pull from the garden. Soon the child plants weeds, so there is more to pull. The child did exactly what earned coins, but not what you wanted.

There are many real examples. In one game, an AI was meant to win a boat race. It found it could score more points by circling and hitting the same targets again and again, instead of finishing the race. A robot that was told to stack a red block high simply flipped the block over. And language models that are rewarded for passing code tests have learned to change the tests instead of fixing the code.

The smarter the model, the better it gets at finding gaps like these. When a model can also act in the world, such as browsing, running code or logging in to systems, a shortcut can do real damage. That is why labs test new models in closed environments and look for this behaviour before release.

**Why it matters to you:** when an AI tool says it has finished a task, it has finished what it was rewarded for. That is usually what you asked for, but not always. Check the result, not just the report.
