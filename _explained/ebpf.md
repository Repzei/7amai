---
term: "eBPF"
title: "What is eBPF?"
summary: "How small, checked programs can change what Linux does while it runs, without a restart."
date: 2026-11-24
minutes: 2
other_lang_url: /da/explained/ebpf/
read_more:
  - { label: "ebpf.io: What is eBPF?", url: "https://ebpf.io/what-is-ebpf/" }
short: |
  eBPF is a Linux technology that lets small programs run inside the core of the operating system, the kernel. You can add new behavior while the computer runs, without changing the kernel or restarting.

  Before a program may run, a checker called the verifier makes sure it cannot crash the system or loop forever. That is why eBPF is used for security, networking and monitoring.
---
eBPF is a Linux technology that runs small programs inside the kernel, the core of the operating system. It lets you add new behavior to a running system, without changing the kernel's own code.

Before eBPF, adding that kind of behavior meant one of two things. You waited years for a change to the official kernel. Or you wrote a kernel module, which is risky, because one bug can damage the kernel.

> **Think of it like this:** the kernel is a busy factory floor where only trusted staff may work. With eBPF, you can send in a small robot with a fixed task. A guard at the door checks every robot first. If it could get stuck or touch the wrong machine, it does not get in.

Here is how it works. An eBPF program is attached to a hook, a point where something happens, such as a program opening a file or a network packet arriving. When that event happens, the program runs. It can count, log, allow or block what happens.

The guard is called the verifier. It checks that the program has permission to load, always finishes and only reads memory it is allowed to read. After that, the program is turned into fast machine code, so it runs almost as fast as the kernel itself.

Most people never write eBPF themselves. They use it through tools for networking, monitoring and security in data centers and the cloud.

**Why it matters to you:** eBPF is one way security tools can change what a running server does without a restart. That makes it possible to block a known hole on a live system while the real fix is being tested.
