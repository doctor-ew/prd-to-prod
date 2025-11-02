---
layout: default
---

# Guardrails Deep Dive

<div class="mt-8">

## What Are Guardrails?

Explicit **constraints** that prevent AI from generating problematic code

### Purpose
- 🚫 Prevent anti-patterns
- ✅ Enforce architecture decisions
- 📐 Maintain consistency
- 🛡️ Protect critical infrastructure

</div>

<div class="mt-8 grid grid-cols-2 gap-4">

<div class="p-4 bg-green-500/10 rounded-lg">

### ✅ MUST DO (Positive Guardrails)

```markdown
- Use `NEXT_PUBLIC_*` for client env vars
- Detect Codespaces for Train API proxy
- Use pnpm (never npm/yarn)
- Follow App Router patterns
- All strings via i18n (no hardcoding)
- Error boundaries on all async components
- Type all API responses
```

</div>

<div class="p-4 bg-red-500/10 rounded-lg">

### ❌ MUST NOT DO (Negative Guardrails)

```markdown
- Never modify .devcontainer files
- Never use Pages Router
- Never hardcode coordinates
- Never skip type definitions
- Never use synchronous API calls
- Never commit .env files
- Never inline secrets in code
```

</div>

</div>

<div class="mt-4 text-center text-sm opacity-75">
Source: `docs/PromptTemplates/02-PHASE-2-Implementation-Prompts.md` - Guardrails section
</div>

<!--
Guardrails are generated using the D.E.C.I.D.E framework from your SPEC.
They're the "rules of the road" that keep AI on track.
-->
