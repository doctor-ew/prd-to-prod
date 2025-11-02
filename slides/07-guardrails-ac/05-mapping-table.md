---
layout: default
---

# Intent → Constraint → Metric Mapping

<div class="mt-8">

## How They Work Together

| User Intent (PRD) | Guardrail (Constraint) | Acceptance Criteria (Metric) |
|-------------------|------------------------|------------------------------|
| "Show transit in real-time" | ✅ MUST poll every 30s<br>❌ NEVER use long-polling | ✅ Markers update every 30s<br>✅ Console shows timestamp |
| "Work in Codespaces" | ✅ MUST detect environment<br>❌ NEVER hardcode proxy | ✅ Console logs env detection<br>✅ Both envs work |
| "Support 4 languages" | ✅ MUST use i18n library<br>❌ NEVER hardcode strings | ✅ All 4 langs selectable<br>✅ No English in KO mode |
| "Mobile-friendly" | ✅ MUST use responsive design<br>❌ NEVER fixed widths | ✅ Works on 320px width<br>✅ Touch gestures work |
| "Fast loading" | ✅ MUST lazy-load maps<br>❌ NEVER bundle all upfront | ✅ Loads < 3s on 3G<br>✅ Lighthouse score > 90 |

</div>

<div class="mt-8 text-center">

### 🧙‍♂️ <span class="italic">"Intent defines what. Guardrails prevent what-not. AC proves it works."</span>

</div>

<!--
This table shows how PRD → Guardrails → AC form a continuous chain.
Each row is a traceable requirement from business need to measurable outcome.
-->
