---
term: "Word error rate"
title: "What is word error rate?"
summary: "The standard score for speech-to-text: how many words a model gets wrong, and why lower is better."
date: 2026-10-21
minutes: 2
other_lang_url: /da/explained/word-error-rate/
read_more:
  - { label: "Hugging Face Audio Course: Evaluation metrics for ASR", url: "https://huggingface.co/learn/audio-course/chapter5/evaluation" }
short: |
  Word error rate, or WER, is the usual way to score speech-to-text. You compare the model's text with a correct transcript and count the words it got wrong.

  A WER of 4% means about 4 mistakes per 100 words. Lower is better, and 0% is perfect. It is the number to look at when you compare transcription tools.
---
Word error rate, or WER, is a score for how well a speech-to-text model writes down what people say. It counts the words the model gets wrong.

To measure it, you need a recording and a correct transcript written by a person. The model's text is compared with that transcript, word by word. Three kinds of mistakes count. A wrong word is a substitution. A missing word is a deletion. An extra word is an insertion. You add up all the mistakes and divide by the number of words in the correct transcript.

> **Think of it like this:** a teacher marks a dictation. Every wrong, missing or extra word gets a red mark. WER is the number of red marks divided by the number of words in the text.

Here is an example from Hugging Face's course. The correct text is "the cat sat on the mat", six words. The model writes "the cat sit on the". That is one wrong word and one missing word, so two mistakes out of six, or about 33%.

Lower is better, and a perfect model scores 0%. WER can even go above 100%, if a model adds many extra words. Scores also depend on the test. Removing capital letters and punctuation first makes WER lower. So two scores are only comparable when they come from the same test with the same rules.

**Why it matters to you:** when a company says its model has a lower WER, it means fewer words you have to fix by hand. Check that the test includes your language, because scores can be very different from one language to the next.
