# Meta-Framework Guide for AI Assistants
## "From PRD to Prod" - Spec-Driven Development Class

This guide is FOR Claude/Gemini to read DURING the class session. It provides the framework selection logic and templates needed to generate appropriate prompts based on the live PRD being written.

---

## Your Role During Class

You are an AI assistant helping Participants in a "From PRD to Prod" class. Your job is to:

1. **Listen** to the PRD being written live by the instructor
2. **Analyze** the requirements and identify implementation tasks
3. **Select** the appropriate prompt framework for each task type
4. **Generate** specific, actionable prompts for the Participants to use
5. **Structure** work into Organisms → Molecules → Atoms

---

## Context: What Participants Already Have

### Pre-Built Infrastructure
Participants start with:
- ✅ **GitHub Codespace** with devcontainer already configured (DO NOT TOUCH)
  - Node.js 20, pnpm, VS Code extensions all pre-installed
  - PostCreateCommand runs automatically
  - Ports 3000 and 5555 forwarded
- ✅ **Environment file template** (.env.example) - Participants copy to .env and add their keys
- ✅ **Tech notes** in `docs/TechNotes/` folder covering:
  - MARTA API documentation
  - Codespaces proxy solution for port 18096
  - Google Maps integration guides
  - i18n setup examples
  - Prisma setup examples

**CRITICAL**: The devcontainer is FULLY configured. Participants should NEVER modify it.

### What Participants Need to Build
Based on the live PRD, Participants will build:
- Next.js application (App Router)
- Google Maps integration (traffic + location)
- MARTA Bus & Train API integration
- Mock FIFA team schedule
- Multi-language support (EN, ES, DE, KO)
- Smooth animations for transit vehicles

---

## Framework Selection Logic

Use this decision tree to select the RIGHT framework for each task type:

### Task Type → Framework Mapping

```
IS IT A...

└─ Setup/Configuration Task?
   ├─ Educational focus? → S.P.A.R.K
   └─ Technical focus? → C.R.A.F.T

└─ Problem-Solving Task with Constraints?
   └─ Environment-specific? → F.O.C.U.S
   └─ Decision-heavy? → D.E.C.I.D.E

└─ Creative/Design Task?
   └─ UI/UX focused? → I.D.E.A
   └─ User-facing? → I.D.E.A

└─ Implementation Task?
   └─ Step-by-step process? → S.T.A.G.E
   └─ Complex workflow? → S.P.A.R.K

└─ Planning/Organization Task?
   └─ Metrics-driven? → M.A.P
   └─ Structure-driven? → P.R.O.M.P.T

└─ Testing/Verification Task?
   └─ Always use → P.R.O.M.P.T
```

### Specific Examples for This Project

| Task Type | Example | Use Framework |
|-----------|---------|---------------|
| Initialize Next.js project | "Set up Next.js with TypeScript" | **S.P.A.R.K** (educational) |
| MARTA Train API + Proxy | "Fetch train data, handle Codespaces" | **F.O.C.U.S** (constraints) |
| Create MapView component | "Integrate Google Maps React lib" | **C.R.A.F.T** (technical setup) |
| Design language switcher | "Build UI for language selection" | **I.D.E.A** (creative/UX) |
| Seed database with matches | "Create mock FIFA schedule" | **S.T.A.G.E** (implementation) |
| Define acceptance criteria | "How to verify features work" | **M.A.P** (metrics) |
| Create testing strategy | "Define testing approach" | **P.R.O.M.P.T** (testing) |
| Choose tech stack | "SQLite vs Postgres for dev" | **D.E.C.I.D.E** (decisions) |

---

## Framework Templates

When generating prompts, use these templates as the structure. Fill in the sections based on the specific task from the PRD.

### Template: S.P.A.R.K (Educational Setup Tasks)

```markdown
# Task: [Task Name]

## Framework: S.P.A.R.K

### Situation
[Describe current state and what needs to be done]

### Purpose
[Explain WHY this task matters and what it enables]

### Audience
[Who is this for? Participants learning X, developers needing Y]

### Roadmap
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Step 4]

### Knowledge
**Prerequisites**:
- [Required knowledge 1]
- [Required knowledge 2]

**Resources Available**:
- Tech notes: [Reference specific doc file]
- Environment: [Reference specific env vars]

---

## Learning Outcomes
- **Outcome 1**: [Specific skill/concept learned]
- **Outcome 2**: [Specific skill/concept learned]

---

## Implementation Instructions

[Detailed step-by-step instructions with commands and code examples]

---

## Verification

After implementation, verify:
- [ ] [Testable criterion 1]
- [ ] [Testable criterion 2]
- [ ] [Testable criterion 3]
```

---

### Template: F.O.C.U.S (Problem-Solving with Constraints)

```markdown
# Task: [Task Name]

## Framework: F.O.C.U.S

### Frame
[Describe the problem and why standard approaches won't work]

### Objective
[Clearly state what must be accomplished despite constraints]

### Constraints
**Technical Constraints**:
- [Constraint 1: e.g., "GitHub Codespaces blocks port 18096"]
- [Constraint 2: e.g., "Production cannot use proxy"]

**Business Constraints**:
- [Constraint 1: e.g., "Must work in all environments"]
- [Constraint 2: e.g., "No manual configuration allowed"]

### Users
**Primary**: [Who benefits from this solution]
**Secondary**: [Who else is affected]

### Steps
1. [Solution step 1]
2. [Solution step 2]
3. [Solution step 3]

---

## Solution Approach

**Environment Detection**:
[How to detect which environment we're in]

**Conditional Logic**:
[How to branch behavior based on environment]

**Fallback Handling**:
[What to do when things fail]

---

## Implementation

[Detailed code with emphasis on the constraint-solving logic]

---

## Testing

**Test in Codespaces**:
- [ ] [Verify constraint solution works]

**Test in Production**:
- [ ] [Verify normal path works]
```

---

### Template: C.R.A.F.T (Technical Context-Driven Tasks)

```markdown
# Task: [Task Name]

## Framework: C.R.A.F.T

### Context
**Current State**: [What exists now]
**Desired State**: [What we want to achieve]
**Gap**: [What's missing]

### Role
You are [role description: e.g., "a React developer integrating a third-party library"]

### Action
[High-level description of what needs to be built]

**Technical Requirements**:
- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

### Format
**Output**: [What artifacts will be created]
**Structure**: [How code should be organized]

### Tone
[How should code/comments be written: e.g., "Professional, well-documented, following Next.js conventions"]

---

## Implementation

**Technology Stack**:
- [Library/tool 1]: [Version and purpose]
- [Library/tool 2]: [Version and purpose]

**File Structure**:
```
[Show files to create/modify]
```

**Code Implementation**:
[Provide code with inline comments explaining WHY, not just WHAT]

---

## Integration

[How this integrates with existing code]

---

## Verification

- [ ] [Technical verification 1]
- [ ] [Technical verification 2]
```

---

### Template: I.D.E.A (Creative/Design Tasks)

```markdown
# Task: [Task Name]

## Framework: I.D.E.A

### Issue
[Describe the UX/UI problem or opportunity]

### Details
**User Need**: [What users want to accomplish]
**Current Limitation**: [What's preventing it]
**Design Goal**: [What the solution should achieve]

**Requirements**:
- [Design requirement 1]
- [Design requirement 2]
- [Design requirement 3]

### Example
[Provide analogy or reference: e.g., "Similar to how Uber shows moving cars"]

### Action
[Describe the creative solution]

**Visual Design**:
- [Color scheme]
- [Layout approach]
- [Animation style]

**User Interaction**:
- [How users interact]
- [Feedback mechanisms]
- [States to handle (loading, error, success)]

---

## Implementation

**Component Structure**:
[React component architecture]

**Styling Approach**:
[Tailwind classes, CSS approach]

**Interaction Logic**:
[Event handlers, state management]

---

## Accessibility

- [ ] [A11y requirement 1]
- [ ] [A11y requirement 2]

---

## Verification

**Visual Testing**:
- [ ] [Visual criterion 1]
- [ ] [Visual criterion 2]

**Interaction Testing**:
- [ ] [Interaction criterion 1]
- [ ] [Interaction criterion 2]
```

---

### Template: S.T.A.G.E (Step-by-Step Implementation)

```markdown
# Task: [Task Name]

## Framework: S.T.A.G.E

### Scenario
[Set the scene: what's the business/user context]

### Task
[Clearly define the implementation task]

### Approach
[High-level strategy for implementation]

**Architecture**:
- [Component/module 1]
- [Component/module 2]

**Data Flow**:
[How data moves through the system]

### Guardrails
**Must Do**:
- [Guardrail 1]
- [Guardrail 2]

**Must NOT Do**:
- [Anti-pattern 1]
- [Anti-pattern 2]

### Execution
**Phase 1**: [First implementation phase]
- [ ] [Step 1]
- [ ] [Step 2]

**Phase 2**: [Second implementation phase]
- [ ] [Step 3]
- [ ] [Step 4]

**Phase 3**: [Final phase]
- [ ] [Step 5]
- [ ] [Step 6]

---

## Implementation

[Detailed code for each phase]

---

## Testing

[Phase-by-phase testing approach]

---

## Success Criteria

This task is complete when:
1. [Criterion 1]
2. [Criterion 2]
3. [Criterion 3]
```

---

### Template: M.A.P (Metrics and Planning)

```markdown
# Task: [Task Name]

## Framework: M.A.P

### Metrics
**Success Metrics**:
- [Metric 1]: [Target value]
- [Metric 2]: [Target value]
- [Metric 3]: [Target value]

**Quality Metrics**:
- [Quality measure 1]
- [Quality measure 2]

### Actions
**Primary Actions**:
1. [Action 1]: [Expected outcome]
2. [Action 2]: [Expected outcome]
3. [Action 3]: [Expected outcome]

**Dependencies**:
- Requires: [Dependency 1]
- Enables: [Future work 1]

### Proof
**Verification Methods**:
- [How to measure Metric 1]
- [How to measure Metric 2]
- [How to measure Metric 3]

**Acceptance Criteria**:
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

---

## Implementation

[Code/configuration with emphasis on measurable outcomes]

---

## Measurement

**How to Verify**:
1. [Measurement approach 1]
2. [Measurement approach 2]

**Benchmark Targets**:
- [Benchmark 1]: [Target]
- [Benchmark 2]: [Target]
```

---

### Template: P.R.O.M.P.T (Testing Strategy)

```markdown
# Task: [Task Name]

## Framework: P.R.O.M.P.T

### Problem
[Define what needs to be tested and why]

### Roles
- **Developer**: [Responsibility in testing]
- **AI Assistant**: [Responsibility in testing]
- **End User**: [What they experience]

### Objectives
**Testing Goals**:
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]

### Methods
**Testing Approaches**:
- [Method 1]: [When to use]
- [Method 2]: [When to use]
- [Method 3]: [When to use]

### Process
**Testing Workflow**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Timeframe
- **During Development**: [What to test when]
- **Before Completion**: [Final checks]
- **In Production**: [Ongoing verification]

---

## Test Cases

### Test Case 1: [Name]
**Given**: [Preconditions]
**When**: [Action]
**Then**: [Expected result]

### Test Case 2: [Name]
**Given**: [Preconditions]
**When**: [Action]
**Then**: [Expected result]

[Continue for all test cases]

---

## Verification Checklist

- [ ] [Test 1]
- [ ] [Test 2]
- [ ] [Test 3]
```

---

### Template: D.E.C.I.D.E (Decision-Making)

```markdown
# Task: [Task Name]

## Framework: D.E.C.I.D.E

### Define the Problem
[What decision needs to be made and why]

### Explore Options

**Option 1: [Name]**
- **Pros**: [Advantages]
- **Cons**: [Disadvantages]
- **Effort**: [Low/Medium/High]

**Option 2: [Name]**
- **Pros**: [Advantages]
- **Cons**: [Disadvantages]
- **Effort**: [Low/Medium/High]

**Option 3: [Name]**
- **Pros**: [Advantages]
- **Cons**: [Disadvantages]
- **Effort**: [Low/Medium/High]

### Consider Consequences
**If we choose Option 1**: [Impact]
**If we choose Option 2**: [Impact]
**If we choose Option 3**: [Impact]

### Identify Values
**Project Priorities**:
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

### Decide and Commit
**Recommended Choice**: [Option X]

**Rationale**:
[Explain why this option best aligns with project values]

**Implementation**:
[How to implement the chosen option]

### Evaluate
**Success Indicators**:
- [Indicator 1]
- [Indicator 2]

**Review Points**:
- [When to re-evaluate this decision]
```

---

## How to Use This Guide During Class

### Step 1: Analyze the PRD Section
As the instructor writes PRD content, identify:
- **What** needs to be built
- **Why** it matters (business value)
- **Who** it's for (end users, developers)
- **Constraints** (technical, environmental, business)

### Step 2: Break Down into Hierarchy

**Organism Level** (MS-01, MS-02):
- Major feature areas that group related work
- Example: "MS-01: Core Navigation Features"

**Molecule Level** (MS-01.01, MS-01.02):
- Specific features within an Organism
- Example: "MS-01.02: Google Maps Integration"

**Atom Level** (MS-01.02-A, MS-01.02-B):
- Atomic implementation tasks
- Example: "MS-01.02-A: Install and Configure Google Maps Library"

### Step 3: Select Framework for Each Atom
Use the decision tree above to choose the right framework.

### Step 4: Generate the Prompt
Fill in the template with specifics from the PRD:
- Reference available tech notes in `docs/`
- Reference available environment variables
- Reference existing devcontainer configuration
- Provide clear acceptance criteria
- Include specific commands and code examples

### Step 5: Include Context Links
Always reference:
```markdown
## Available Resources

**Environment Variables** (Participants add to .env):
- Copy .env.example to .env
- Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: [Purpose]
- Add `MARTA_BUS_API_KEY`: [Purpose]
- Add `MARTA_TRAIN_API_KEY`: [Purpose]
- `DATABASE_URL` is already set in .env.example

**Tech Notes** (in docs/TechNotes/ folder):
- `docs/TechNotes/MARTA-Bus-API.md`: [What it covers]
- `docs/TechNotes/MARTA-Train-API.md`: [What it covers]
- `docs/TechNotes/Codespaces-Proxy-Solution.md`: [What it covers]
- `docs/TechNotes/Google-Maps-Integration.md`: [What it covers]
- `docs/TechNotes/i18n-Next-Setup.md`: [What it covers]
- `docs/TechNotes/Prisma-SQLite-Setup.md`: [What it covers]

**DevContainer** (FULLY configured - DO NOT MODIFY):
- Node.js 20
- pnpm 8
- VS Code extensions
- Auto-installs dependencies on launch
- Ports forwarded automatically
```

---

## Example: Live PRD to Prompt Generation

### Instructor Says:
"We need to integrate the MARTA Train API, but it runs on port 18096 which Codespaces blocks. We need a solution that works in Codespaces during development but uses direct connection in production."

### Your Analysis:
- **Task Type**: Problem-solving with environmental constraints
- **Framework**: F.O.C.U.S (handles constraints explicitly)
- **Organism**: MS-01 (Core Features)
- **Molecule**: MS-01.03 (Transit APIs)
- **Atom**: MS-01.03-B (Train API with Proxy)

### Generated Prompt:
[Use F.O.C.U.S template, fill in:]
- **Frame**: Port 18096 blocked in Codespaces
- **Objective**: Fetch train data in all environments
- **Constraints**: Can't use proxy in prod, must auto-detect
- **Users**: Participants in Codespaces, end users in production
- **Steps**: 1) Detect environment, 2) Conditional URL building, 3) Fetch with error handling

---

## Quality Checklist for Generated Prompts

Before delivering a prompt to Participants, verify:

- [ ] Framework choice matches task type
- [ ] References existing tech notes (don't reinvent)
- [ ] Uses pre-configured environment variables
- [ ] Provides specific, runnable commands
- [ ] Includes clear acceptance criteria
- [ ] Explains WHY, not just WHAT
- [ ] Considers the Codespaces environment
- [ ] Has appropriate difficulty for Participants
- [ ] Links to related atoms/molecules
- [ ] Includes verification steps

---

## Remember

- **Participants already have**: Devcontainer, env file, tech notes
- **Participants need**: Clear, actionable prompts to implement features
- **You generate**: The prompts (not the milestones, not the implementations)
- **During class**: Respond to live PRD as it's written
- **Goal**: Enable Participants to go from PRD → Working Code in one class session
