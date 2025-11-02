# Slim Version Guide

## Overview

Two presentation versions are available:
- **`slides.md`**: Full version (46 slides) - comprehensive workshop
- **`slides-slim.md`**: Slim version (36 slides) - focused presentation

## How to Use

```bash
# Run FULL version (46 slides)
npx @slidev/cli slides.md

# Run SLIM version (36 slides)
npx @slidev/cli slides-slim.md
```

## What's in Each Version

### FULL Version (46 slides)

All sections included with maximum detail.

### SLIM Version (36 slides)

**Kept Sections (Complete):**
- ✅ **Title/Intro** (4 slides) - All kept
- ✅ **01-vibe-coding** (4 slides) - All kept per user request
- ✅ **02-spec-driven** (3 slides) - All kept
- ✅ **09-wrap-up** (4 slides) - All kept

**Trimmed Sections:**

| Section | Full | Slim | Removed Slides |
|---------|------|------|----------------|
| **03-pipeline** | 6 | 5 | `02-prd-phase.md` (PRD is straightforward) |
| **04-atomic-design** | 4 | 3 | `04-visual.md` (detailed diagram) |
| **05-environment** | 6 | 3 | `02-devcontainer.md`, `03b-when-to-use.md`, `04-context-tokens.md` |
| **06-framework** | 7 | 4 | `02-master-guide.md`, `05-selection-logic.md`, `06-visual-flow.md` |
| **07-guardrails-ac** | 6 | 4 | `05-mapping-table.md`, `06-hands-on-start.md` |
| **08-milestones** | 3 | 2 | `03-reflection-questions.md` |

## Slide-by-Slide Comparison

### Title Section (4 slides) - UNCHANGED
- ✅ 01-intro.md
- ✅ 02-agenda.md
- ✅ 03-what-we-build.md

### 01-vibe-coding (4 slides) - UNCHANGED
- ✅ 01-what-is-vibe.md
- ✅ 02-databaseless-apps.md
- ✅ 03-when-vibe-works.md
- ✅ 04-trust-warning.md

### 02-spec-driven (3 slides) - UNCHANGED
- ✅ 01-what-is-spec.md
- ✅ 02-contrast.md
- ✅ 03-why-it-matters.md

### 03-pipeline (5 of 6 slides)
- ✅ 01-overview.md
- ❌ 02-prd-phase.md → REMOVED (obvious starting point)
- ✅ 03-spec-phase.md
- ✅ 04-guardrails-phase.md
- ✅ 05-ac-phase.md
- ✅ 06-full-flow.md

### 04-atomic-design (3 of 4 slides)
- ✅ 01-intro.md
- ✅ 02-mapping.md
- ✅ 03-example.md
- ❌ 04-visual.md → REMOVED (detailed diagram, covered in example)

### 05-environment (3 of 6 slides)
- ✅ 01-fork-repo.md
- ❌ 02-devcontainer.md → REMOVED (too detailed for short version)
- ✅ 03-choose-ai.md
- ❌ 03b-when-to-use.md → REMOVED (redundant with choose-ai)
- ❌ 04-context-tokens.md → REMOVED (advanced topic)
- ✅ 05-setup-keys.md

### 06-framework (4 of 7 slides)
- ✅ 01-intro.md
- ❌ 02-master-guide.md → REMOVED (detailed walkthrough in docs)
- ✅ 03-meta-framework.md (key visual)
- ✅ 04-eight-frameworks.md (overview)
- ❌ 05-selection-logic.md → REMOVED (in quick reference card)
- ❌ 06-visual-flow.md → REMOVED (redundant with meta-framework)
- ✅ 07-target-reference.md (FIFA demo screenshot)

### 07-guardrails-ac (4 of 6 slides)
- ✅ 01-guardrails-defined.md
- ✅ 02-guardrails-examples.md
- ✅ 03-ac-defined.md
- ✅ 04-ac-examples.md
- ❌ 05-mapping-table.md → REMOVED (too detailed)
- ❌ 06-hands-on-start.md → REMOVED (transition slide, jump straight in)

### 08-milestones (2 of 3 slides)
- ✅ 01-review-process.md
- ✅ 02-atomic-correspondence.md
- ❌ 03-reflection-questions.md → REMOVED (12 questions too long)

### 09-wrap-up (4 slides) - UNCHANGED
- ✅ 01-key-takeaways.md
- ✅ 02-repo-to-fork.md
- ✅ 03-next-steps.md
- ✅ 04-wizard-wisdom.md

## Use Case Recommendations

### Use FULL Version (slides.md) When:
- Teaching a 3-hour comprehensive workshop
- Students need deep understanding of all 8 frameworks
- Time for detailed environment setup discussion
- Want to include all reflection questions
- Showing complete methodology end-to-end

### Use SLIM Version (slides-slim.md) When:
- Limited presentation time (90-120 minutes)
- Conference talk or guest lecture
- Audience already familiar with dev environments
- Focus on core concepts over implementation details
- Want to move faster to hands-on coding

## Timing Estimates

**FULL Version (46 slides):**
- Presentation: ~90 minutes
- Hands-on: ~50 minutes
- Total: ~2.5 hours (+ Q&A = 3 hours)

**SLIM Version (36 slides):**
- Presentation: ~60 minutes
- Hands-on: ~50 minutes
- Total: ~2 hours (+ Q&A = 2.5 hours)

## Export Both Versions

```bash
# Export full version PDF
npx @slidev/cli export slides.md --output prd-to-prod-FULL.pdf

# Export slim version PDF
npx @slidev/cli export slides-slim.md --output prd-to-prod-SLIM.pdf
```

## Notes

- All slide files remain in their original directories
- Both master files reference the same content files
- Easy to switch between versions or customize further
- No duplication of slide content
- Both versions maintain the same pedagogical flow

## Customization

To create your own version:
1. Copy `slides.md` or `slides-slim.md` to `slides-custom.md`
2. Add/remove `src:` references as needed
3. Run: `npx @slidev/cli slides-custom.md`

---

**Updated**: 2025-11-02
**Full Version**: 46 slides
**Slim Version**: 36 slides (-10 slides, -22%)
