# Prompt Template Master Guide
## FIFA Atlanta Navigator Project - Educational Workflow

This guide provides a complete workflow for Participants to use AI assistants (Claude/Gemini) to go from a Product Requirements Document (PRD) to fully implemented code.

---

## Overview of the Complete Workflow

```
Phase 1: Foundation Documents (Participants → AI)
  └─> Generate: spec.md, guardrails.md, acceptance_criteria.md from PRD

Phase 2: Implementation (Participants/AI → AI)
  └─> Execute: Individual spec-driven prompts using AI coding assistants

Phase 3: Milestone Planning (Participants → AI)
  └─> Generate: Organism-level milestones (MS-01, MS-02, etc.) -- ie Epics
      └─> Each Organism contains Molecules (MS-01.01, MS-01.02, etc.)
          └─> Each Molecule contains Atoms (MS-01.01-A, MS-01.01-B, etc.)
  └─> Deploy to vercel
```

---

## What Participants Will Build

A Next.js application featuring:
- **Epic 1 (MS-01)**: Project Setup & Core Features
  - Next.js project initialization
  - Google Maps integration (traffic & location)
  - MARTA Bus & Train API integration (with Codespaces proxy solution)
  - Mock FIFA team schedule display

- **Epic 2 (MS-03)**: Polish & Animation (if time permits)
  - Smooth animations for transit vehicles (like Uber cars)
  - Enhanced UX and visual polish

- **Epic 3 (MS-02)**: Internationalization
  - Multi-language support (English, Spanish, German, Korean)
  - Language switcher UI
  - Translated content across the application


---

## The Three Phases Explained

### Phase 1: Foundation Documents
**Who Does This**: Participants
**Tool**: AI Assistant (Claude/Gemini)
**Input**: PRD.md (provided during class)
**Output**: Technical foundation documents

Participants will feed the PRD to an AI assistant using 4 different prompt frameworks:
- **CRAFT**: Generate `spec.md` (technical specification)
- **DECIDE**: Generate `guardrails.md` (what to do/not do)
- **MAP**: Generate `acceptance_criteria.md` (how to verify success)
- **PROMPT**: Generate testing requirements

### Phase 2: Implementation
**Who Does This**: AI Coding Assistant (with Participant guidance)
**Tool**: Claude Code / Gemini Code
**Input**: Individual ticket files from Phase 3
**Output**: Working code

Participants will feed each milestone prompt (atom) to an AI coding assistant, which will:
1. Read the requirements
2. Implement the code
3. Test the implementation
4. Verify acceptance criteria

### Phase 3: Milestone Planning
**Who Does This**: Participants
**Tool**: AI Assistant (Claude/Gemini)
**Input**: Foundation documents from Phase 1
**Output**: Hierarchical milestone structure

To reduce "hallucinations", feature drift, losing context, Participants will use AI to break down the project into:
- **Organisms** (MS-01, MS-02): Major feature areas. Think Epics
- **Molecules** (MS-01.01, MS-01.02): Specific features within an Organism (Think Stories)
- **Atoms** (MS-01.01-A, MS-01.01-B): Atomic implementation tasks


---

## File Structure Overview

```
docs/
├── PromptTemplates/
│   ├── 00-MASTER-GUIDE.md (this file)
│   ├── 01-PHASE-1-Foundation-Prompts.md
│   ├── 02-PHASE-2-Implementation-Prompts.md
│   └── 03-PHASE-3-Milestone-Prompts.md
```

---

## Important Notes

- Phases 1 and 2 happen during class for actual development
- Phase 3 is for documenting what was built (creating the milestone structure)
- The AI assistant is a tool, not a replacement for understanding
- Participants should review and understand all generated documents
- The Atomic/hierarchical structure (Organism → Molecule → Atomic) is critical for organization

---

## Learning Objectives

By completing this workflow, Participants will learn:
1. How to work effectively with AI coding assistants
2. How to structure complex projects into manageable tasks
3. Modern web development with Next.js, TypeScript, and APIs
4. Environment-specific development (GitHub Codespaces)
5. Internationalization and accessibility best practices
6. The importance of proper documentation and planning

---

## Next Steps

Proceed to:
- **Phase 1**: [01-PHASE-1-Foundation-Prompts.md](./01-PHASE-1-Foundation-Prompts.md)

Once Phase 1 is complete, move to Phase 2, then Phase 3.
