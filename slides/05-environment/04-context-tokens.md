---
layout: default
---

# Understanding Context & Tokens

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

## What Are Tokens?

Pieces of text that AI models process

### Examples
- `"Hello"` = 1 token
- `"Hello, world!"` = 4 tokens
- Your entire codebase = thousands/millions

### Why It Matters
AI "forgets" things outside its context window

</div>

<div>

## Context Window Comparison

```
Claude Code: 200,000 tokens
├─ ~150,000 words
├─ ~750 pages of text
└─ Roughly 50 medium files

Gemini: 2,000,000 tokens
├─ ~1,500,000 words
├─ ~7,500 pages of text
└─ Roughly 500 medium files
```

### The Tradeoff
**More context** = Can see more files at once
**Better quality** = Produces cleaner code

</div>

</div>

<div class="mt-8 p-4 bg-yellow-500/10 rounded-lg">

### 🧙‍♂️ "Chasing the Free"

Gemini offers a generous free tier with massive context. Claude charges per token. For learning and exploration, Gemini's free tier is hard to beat. For production code you'll deploy to clients? Claude's quality matters more.

</div>

<!--
This is the "tokens, chasing the free" breakdown from your spec.
Students need to understand why context matters and when to optimize for what.
-->
