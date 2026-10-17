---
term: "Quantization"
title: "What is quantization?"
summary: "How AI models are shrunk to fit on smaller computers, and what it costs."
date: 2026-10-17
minutes: 2
other_lang_url: /da/explained/quantization/
read_more:
  - { label: "Hugging Face Transformers docs: Quantization overview", url: "https://huggingface.co/docs/transformers/main/en/quantization/overview" }
short: |
  Quantization makes an AI model smaller by storing each of its numbers with less detail. A model that needs 16 bits per number can often get by with 8 or 4.

  The model then needs much less memory and often runs faster. The price is a small loss of accuracy, which grows the further you compress.
---
Quantization is a way to make an AI model smaller by storing its numbers with less detail. It is one of the main reasons large models can run on gaming PCs and laptops.

A model is a huge file of numbers called weights. Each weight is often stored with 16 bits, sometimes 32, which is a lot of detail. Quantization rounds each weight so it fits in fewer bits, such as 8 or 4. A model stored with 4 bits per weight needs about a quarter of the memory it did with 16.

> **Think of it like this:** a photo saved as a smaller JPEG. It takes far less space and still looks right, but zoom in and some fine detail is gone. Where the comparison fails: you can't see the loss in a model. It can get worse on some tasks with no visible sign.

You will see the formats in model names: FP8 and INT8 use 8 bits, while INT4 and NVFP4 use 4. GGUF is a common file format for quantized models in tools like llama.cpp and Ollama. Some newer methods go down to 1 or 2 bits, but those usually need extra care to keep quality up.

The trade-off is simple. Fewer bits means less memory and often faster answers. It also means some loss of accuracy, which is small at 8 bits and grows below 4. Labs often test their quantized versions and publish the scores, so you can compare.

**Why it matters to you:** quantization decides which models fit on your hardware. When a model says it runs on an 8 GB or 24 GB graphics card, it is usually a quantized version. Test it on your own tasks, because the loss is not the same everywhere.
