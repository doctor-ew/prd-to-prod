# From PRD to Prod: Spec-Driven Development Slides

Comprehensive slide deck for teaching Spec-Driven Development with AI assistants.

## 📊 Two Versions Available

**FULL Version** (`slides.md`) - 46 slides
- Comprehensive 3-hour workshop
- All 8 frameworks detailed
- Complete environment setup
- In-depth atomic design visuals

**SLIM Version** (`slides-slim.md`) - 36 slides
- Focused 2-hour presentation
- Core concepts and essential frameworks
- Streamlined for faster delivery
- All vibe coding context retained

See `SLIM-VERSION.md` for detailed comparison.

## 🎯 Workshop Overview

This workshop contrasts **Vibe Coding** with **Spec-Driven Development**, showing students how to transform Product Requirements Documents into production-ready code using structured AI-assisted frameworks.

## 📚 Slide Structure

### 00-title (2 slides)
- Workshop introduction
- Agenda and learning outcomes

### 01-vibe-coding (3 slides)
- What is vibe coding?
- The "databaseless apps" problem (with Sahil Gulihar tweet)
- When vibe coding works vs doesn't work

### 02-spec-driven (3 slides)
- What is Spec-Driven Development?
- Vibe vs Spec contrast table
- Why Spec-Driven matters

### 03-pipeline (6 slides)
- Pipeline overview
- Phase 1: PRD (Product Requirements Document)
- Phase 2: SPEC (Technical Specification)
- Phase 3: Guardrails (Do's & Don'ts)
- Phase 4: Acceptance Criteria (Success Metrics)
- Complete pipeline flow diagram

### 04-atomic-design (4 slides)
- Introduction to Organisms → Molecules → Atoms
- Mapping table (Atomic Level → Dev Terms)
- FIFA Navigator breakdown example
- Visual diagram (DoctorEw's atomic design)

### 05-environment (5 slides)
- Fork repository instructions
- DevContainer contents (pre-configured)
- Claude vs Gemini comparison
- Context windows & tokens explained ("chasing the free")
- API keys setup

### 06-framework (6 slides)
- The 8 frameworks introduction
- Master Guide loading
- Meta-Framework Guide loading
- All 8 frameworks detailed (S.P.A.R.K, F.O.C.U.S, C.R.A.F.T, I.D.E.A, S.T.A.G.E, M.A.P, P.R.O.M.P.T, D.E.C.I.D.E)
- Framework selection decision tree
- Complete workflow visualization

### 07-guardrails-ac (5 slides)
- Guardrails & AC introduction
- Guardrails deep dive with examples
- Acceptance Criteria deep dive
- AC examples (FIFA Navigator checklist)
- Intent → Constraint → Metric mapping table

### 08-milestones (3 slides)
- Milestone review process
- Atomic design correspondence with milestones
- Reflection questions (12 questions)

### 09-wrap-up (4 slides)
- Key takeaways (what you learned + what you built)
- Repository contents (docs, DevContainer, FIFA Navigator)
- Next steps (immediate, this week, advanced challenges)
- Wizard's Final Wisdom (inspirational quotes)

## 🎨 Using These Slides

### With Slidev (Recommended)

```bash
# Navigate to slides directory
cd /Users/drew.schillinger/shuttlebay/DoctorEw/prd-to-prod/slides

# Run FULL version (46 slides)
npx @slidev/cli slides.md

# Run SLIM version (36 slides)
npx @slidev/cli slides-slim.md

# Export FULL version to PDF
npx @slidev/cli export slides.md --output prd-to-prod-FULL.pdf

# Export SLIM version to PDF
npx @slidev/cli export slides-slim.md --output prd-to-prod-SLIM.pdf
```

### Slide Sections Reference

All slides reference canonical source documents from `docs/PromptTemplates/`:

| Slide Section | Primary Source Document |
|---------------|------------------------|
| Pipeline | `00-MASTER-GUIDE.md` |
| 8 Frameworks | `00-META-FRAMEWORK-GUIDE.md` + `01-QUICK-REFERENCE-CARD.md` |
| Environment Setup | `CLAUDE.md` + `.devcontainer/devcontainer.json` |
| Guardrails & AC | `02-PHASE-2-Implementation-Prompts.md` |
| Milestones | `03-PHASE-3-Milestone-Prompts.md` |
| Workflow | `02-CLASS-SESSION-WORKFLOW.md` |

## 📋 Quality Checklist

Each slide follows these principles:

- ✅ References source document in speaker notes
- ✅ Uses DoctorEw's witty, confident tone
- ✅ Ends sections with "Wizard's Wisdom" one-liners
- ✅ Includes visual diagrams where helpful
- ✅ Provides actionable examples (not just theory)
- ✅ Reinforces Spec-Driven > Vibe Coding contrast

## 🔧 Customization

To adapt these slides for your own workshop:

1. **Update Repository URL**: Change fork URL in `05-environment/01-fork-repo.md`
2. **Modify Project**: Replace FIFA Navigator with your example project throughout
3. **Adjust Timing**: Update class duration references if needed
4. **Add Branding**: Replace background images and logos in frontmatter

## 📊 Workshop Flow

Recommended 3-hour workshop schedule:

```
0:00-0:20  Introduction + Vibe vs Spec (slides 00-02)
0:20-0:40  Pipeline Deep Dive (slides 03)
0:40-0:55  Atomic Design (slides 04)
0:55-1:15  Environment Setup + BREAK (slides 05)
1:15-1:35  8 Frameworks Overview (slides 06)
1:35-1:50  Guardrails & AC (slides 07)
1:50-2:40  HANDS-ON: Build FIFA Navigator (50 min)
2:40-2:50  Milestones & Reflection (slides 08)
2:50-3:00  Wrap-Up + Q&A (slides 09)
```

## 🎓 Learning Objectives

By the end of this workshop, students will:

1. Understand the difference between vibe coding and spec-driven development
2. Master the PRD → SPEC → Guardrails → AC pipeline
3. Use the Organism → Molecule → Atom hierarchy for project structure
4. Select appropriate frameworks from the 8 available options
5. Generate production-ready code using AI assistants
6. Build a working Next.js application (FIFA Navigator)
7. Deploy to Vercel

## 🧙‍♂️ Wizard's Notes

> "These slides are not meant to be read linearly - they're meant to be experienced interactively. Let students ask questions. Let them explore. Let them discover why structure matters by seeing where vibes fail."

> "The goal is not to memorize 8 frameworks. The goal is to internalize when to use structure and when to use intuition."

> "By the end, students should feel empowered, not overwhelmed. If they feel overwhelmed, slow down the hands-on section."

---

**Generated**: 2025-11-01
**Author**: DoctorEw
**Version**: 1.0
**Based on**: prd-to-prod curriculum (demo branch)
