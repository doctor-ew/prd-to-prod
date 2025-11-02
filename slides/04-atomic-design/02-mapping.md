---
layout: default
---

# Atomic Design Mapping

<div class="mt-8">

| Atomic Level | Dev Term | Notation | Example | Duration |
|--------------|----------|----------|---------|----------|
| **Organism** | Epic / Milestone | MS-01, MS-02 | "Core Navigation Features" | 3-6 hours |
| **Molecule** | Story / Feature | MS-01.01, MS-01.02 | "Google Maps Integration" | 45-90 min |
| **Atom** | Ticket / Task | MS-01.02-A, MS-01.02-B | "Install Maps Library" | 10-30 min |

</div>

<div class="mt-8 grid grid-cols-3 gap-4">

<div class="p-4 bg-blue-500/10 rounded-lg">

### Organism
**Grouping mechanism**

Multiple related features that belong together logically

</div>

<div class="p-4 bg-purple-500/10 rounded-lg">

### Molecule
**Feature scope**

A complete user-facing feature or technical capability

</div>

<div class="p-4 bg-green-500/10 rounded-lg">

### Atom
**Implementation unit**

The smallest meaningful work item that can be completed atomically

</div>

</div>

<div class="mt-4 text-center text-sm opacity-75">
Source: `docs/PromptTemplates/00-MASTER-GUIDE.md` - Atomic breakdown methodology
</div>

<!--
This hierarchy prevents scope creep and maintains clear boundaries.
-->
