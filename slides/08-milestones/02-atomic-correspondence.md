---
layout: default
---

# Milestones ↔ Atomic Design

<div class="mt-8">

## How They Correspond

<div class="grid grid-cols-3 gap-4">

<div class="p-4 bg-blue-500/10 rounded-lg">

### Organism = Milestone

**MS-01: Core Features**

Represents a major deliverable or release phase

**Tracks**:
- Epic-level progress
- Team capacity
- Release readiness

</div>

<div class="p-4 bg-purple-500/10 rounded-lg">

### Molecule = Sub-Milestone

**MS-01.02: Google Maps**

Represents a user-facing feature or technical capability

**Tracks**:
- Feature completion
- Integration status
- User story fulfillment

</div>

<div class="p-4 bg-green-500/10 rounded-lg">

### Atom = Task Checkpoint

**MS-01.02-A: Install library**

Represents an atomic unit of work

**Tracks**:
- Individual commits
- AC verification
- Technical debt

</div>

</div>

</div>

<div class="mt-8">

```
📊 MS-01 Progress: 80% Complete
├─ ✅ MS-01.01: Project Setup (100%)
├─ ✅ MS-01.02: Google Maps (100%)
├─ 🟡 MS-01.03: MARTA APIs (75% - Train proxy pending)
└─ ⬜ MS-01.04: Schedule Display (0% - blocked by MS-01.03)
```

</div>

<!--
Source: docs/PromptTemplates/03-PHASE-3-Milestone-Prompts.md
Milestones are just another view of your atomic hierarchy.
They're for tracking progress, not for changing structure.
-->
