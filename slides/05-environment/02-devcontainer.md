---
layout: default
---

# Step 1: Fork the Repository

<div class="mt-8">

## Repository URL

```bash
https://github.com/doctor-ew/prd-to-prod/tree/demo
```

### What's Pre-Configured?

<div class="grid grid-cols-2 gap-8 mt-4">

<div>

#### DevContainer Includes
- ✅ Node.js 20 (Bookworm)
- ✅ pnpm 8 package manager
- ✅ Bun runtime
- ✅ VS Code extensions
  - Claude Code
  - Gemini Code Assist
  - ESLint, Prettier

</div>

<div>

#### Auto-Installed CLIs
- ✅ Vercel CLI (deployment)
- ✅ Claude CLI (if `ANTHROPIC_API_KEY` present)
- ✅ Gemini CLI (always)
- ✅ OpenAI Codex (if `OPENAI_API_KEY` present)

#### MCP Servers
- ✅ Serena MCP (pre-configured)

</div>

</div>

</div>

<div class="mt-4 p-4 bg-red-500/10 rounded-lg">
⚠️ **DO NOT MODIFY** `.devcontainer/` files — they're production-ready
</div>

<!--
Source: CLAUDE.md - DevContainer Setup section
Everything is configured. Your job is to ADD API keys, not modify infrastructure.
-->
