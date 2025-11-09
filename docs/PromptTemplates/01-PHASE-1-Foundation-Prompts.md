# Phase 1: Foundation Document Generation Prompts
## Creating spec.md, guardrails.md, and acceptance_criteria.md

These prompts use 4 different AI prompting frameworks from the prompt_framework.gif. Students will use these to generate the technical foundation documents from the PRD.

---

## Input Required

Before using these prompts, you need:
- ✅ **PRD.md** (Product Requirements Document) - in FromProd folder. provided by instructor during class
- run the /init command to initialize the AI coding assistant in the existing environment
  - this generates a CLAUDE.MD file. 
    - Common development commands (e.g., build, lint, test, run single tests). 
    - High-level project architecture and structure (e.g., key files, modules, big-picture overview). 
    - Code style guidelines, usage notes, and other context-specific details to onboard future Claude sessions quickly.

    - best practices
      - Run /init the first time you use Claude Code in a project, or after major changes to refresh the context.
---

## Prompt 1: Generate Technical Specification (CRAFT Framework) (spec.md)

### Instructions for Students
to generate spec.md from PRD.md, Copy this prompt and send it to Claude or Gemini, along with the PRD.md content:

```
I need you to use the CRAFT framework to generate a detailed technical specification document for the Atlanta FIFA Navigator project.

**Context**: I'm building a Next.js web application to help FIFA World Cup visitors navigate Atlanta using real-time MARTA transit data, Google Maps, and multi-language support.

**Role**: You are a senior technical architect who specializes in modern web applications, API integrations, and internationalization.

**Action**: Generate a comprehensive `spec.md` file that includes:
1. **Technology Stack**: List all technologies, libraries, and versions
   - Next.js (App Router)
   - TypeScript
   - Prisma ORM with SQLite
   - Google Maps API (@vis.gl/react-google-maps)
   - MARTA APIs (Bus and Train)
   - i18n library for translations
   - Tailwind CSS for styling

2. **Data Models**: Define Prisma schema for:
   - Events (FIFA matches with venue, date, teams)
   - Venues (stadiums with coordinates)
   - Users (language preference)

3. **API Endpoints**: Define all Next.js API routes:
   - `/api/transit` - Returns real-time bus and train data
   - `/api/events` - Returns FIFA match schedule
   - `/api/user` - Manages user preferences

4. **Component Architecture**: Describe React components:
   - MapView (main map component)
   - TransitMarkers (animated bus/train markers)
   - EventList (match schedule display)
   - LanguageSwitcher (toggle between EN/ES/DE/KO)

5. **Environment Variables**: List all required API keys and config:
   - NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   - MARTA_BUS_API_KEY
   - MARTA_TRAIN_API_KEY
   - DATABASE_URL

6. **Special Considerations**:
   - GitHub Codespaces proxy solution for MARTA Train API (port 18096)
   - Environment detection logic (isRunningInCodespaces)
   - Mock data structure for FIFA team schedules

**Format**: The output should be a complete markdown file ready to save as `spec.md`

**Tone**: Technical, precise, and comprehensive

Here is the PRD:
[PASTE PRD.md CONTENT HERE]
```

### Expected Output
A complete technical specification document that developers and AI assistants can reference during implementation.
/fifa-traffic-demo/spec.md
---

## Prompt 2: Generate Guardrails (DECIDE Framework)

### Instructions for Students
Copy this prompt and send it to Claude or Gemini:

```
I need you to use the DECIDE framework to generate a guardrails document that defines what we MUST do and MUST NOT do during the Atlanta FIFA Navigator project.

**Define the Problem**: We need clear boundaries and constraints to ensure the project stays on track, uses approved technologies, and avoids common pitfalls in web development and API integration.

**Explore Options**: Consider multiple aspects:
- Technology choices (approved vs forbidden)
- Security practices (API key management, CORS, XSS prevention)
- Performance requirements (load times, API caching)
- Development environment constraints (Codespaces vs local vs production)
- Code quality standards (TypeScript strict mode, ESLint rules)

**Consider Consequences**: What happens if we:
- Use forbidden technologies?
- Expose API keys client-side?
- Skip error handling?
- Ignore accessibility?

**Identify Values**: Our priorities are:
1. Security first (no exposed secrets)
2. User experience (fast load times, smooth animations)
3. Accessibility (WCAG 2.1 AA compliance)
4. Maintainability (clean, documented code)

**Decide and Commit**: Generate a `guardrails.md` file with these sections:

1. **APPROVED Technologies**:
   - Must use Next.js 14+ with App Router
   - Must use TypeScript in strict mode
   - Must use pnpm (not npm or yarn)
   - Must use @vis.gl/react-google-maps (not other Google Maps libraries)

2. **FORBIDDEN Technologies**:
   - Do NOT use any other package manager
   - Do NOT use Pages Router
   - Do NOT use any other database except SQLite for development
   - Do NOT use inline API keys or hardcoded secrets

3. **Security Guardrails**:
   - All API keys MUST be in environment variables
   - Client-side keys MUST use NEXT_PUBLIC_ prefix
   - Server-side keys MUST NEVER be exposed to the client
   - Use encodeURIComponent when passing URLs to proxies

4. **Performance Guardrails**:
   - Map must load in under 3 seconds
   - API responses must be cached (30 second revalidation)
   - Use parallel data fetching with Promise.all
   - Timeout API calls after 10 seconds

5. **Development Environment Guardrails**:
   - Primary environment MUST be GitHub Codespaces
   - Proxy MUST ONLY be used in Codespaces (not production)
   - Environment detection MUST be explicit (check CODESPACES env var)

6. **Code Quality Guardrails**:
   - All components must have proper TypeScript types
   - No `any` types without justification
   - All API errors must be handled gracefully
   - Console logs must indicate environment and action

**Evaluate**: Review the guardrails to ensure they're specific, actionable, and verifiable.

**Format**: Output should be a complete markdown file ready to save as `guardrails.md`

Here is the PRD and spec.md for context:
[PASTE PRD.md AND spec.md CONTENT HERE]
```

### Expected Output
A clear guardrails document with specific do's and don'ts that prevent common mistakes.

---

## Prompt 3: Generate Acceptance Criteria (MAP Framework)

### Instructions for Students
Copy this prompt and send it to Claude or Gemini:

```
I need you to use the MAP framework to generate comprehensive acceptance criteria for the Atlanta FIFA Navigator project.

**Metrics**: Define how we will measure success. For each major feature, specify:
- Quantitative metrics (load time < 3s, 99% uptime, etc.)
- Qualitative metrics (user can successfully navigate, map is interactive, etc.)
- Testing metrics (all API endpoints return 200, no console errors, etc.)

**Actions**: Define the specific user actions and system behaviors that must work:
1. User opens the application → sees a full-screen map of Atlanta
2. User sees real-time MARTA buses and trains on the map
3. User clicks language switcher → interface changes to selected language
4. User views match schedule → sees FIFA events with venue and time
5. Transit markers animate smoothly across the map (like Uber cars)

**Proof**: Define how we will verify each requirement is met:
- Manual testing checklists
- API response validation
- Visual inspection criteria
- Performance benchmarks
- Cross-browser testing requirements

Generate an `acceptance_criteria.md` file with these sections:

## 1. Organism MS-01: Project Setup & Core Features

### Molecule MS-01.01: Project Initialization
**Given** a new GitHub Codespace is launched
**When** the environment loads
**Then**:
- [ ] All dependencies install automatically
- [ ] Database migrations run successfully
- [ ] `pnpm dev` starts the application without errors
- [ ] The Next.js welcome page loads in under 3 seconds

### Molecule MS-01.02: Google Maps Integration
**Given** the application is running
**When** a user opens the homepage
**Then**:
- [ ] A full-screen Google Map is visible
- [ ] The map is centered on Atlanta (33.749, -84.388)
- [ ] The map is interactive (pan and zoom work)
- [ ] No errors appear in the browser console
- [ ] Map loads in under 3 seconds

### Molecule MS-01.03: MARTA API Integration
**Given** the application is running in Codespaces
**When** the `/api/transit` endpoint is called
**Then**:
- [ ] Bus data is returned in the correct format
- [ ] Train data is returned in the correct format
- [ ] Console logs show "Using proxy" message in Codespaces
- [ ] Data refreshes every 30 seconds
- [ ] Failed API calls return empty arrays (not errors)

**Given** the application is deployed to production
**When** the `/api/transit` endpoint is called
**Then**:
- [ ] Direct connection is used (not proxy)
- [ ] Console logs show "Direct connection" message

### Molecule MS-01.04: Display Mock Schedule
**Given** the database has seed data
**When** a user views the event list
**Then**:
- [ ] All FIFA matches are displayed
- [ ] Each match shows: teams, venue, date, time
- [ ] Clicking an event centers the map on that venue
- [ ] Events are sorted by date/time

## 2. Organism MS-02: Internationalization

### Molecule MS-02.01: Multi-language Support
**Given** the application supports 4 languages
**When** a user clicks the language switcher
**Then**:
- [ ] Interface immediately switches to selected language
- [ ] All static text is translated
- [ ] All dynamic content is translated
- [ ] User preference is saved
- [ ] Page does not reload during language change

**Languages to test**:
- [ ] English (EN)
- [ ] Spanish (ES)
- [ ] German (DE)
- [ ] Korean (KO)

## 3. Performance Acceptance Criteria

- [ ] Time to First Byte (TTFB) < 500ms
- [ ] First Contentful Paint (FCP) < 2s
- [ ] Largest Contentful Paint (LCP) < 3s
- [ ] API responses cached for 30 seconds
- [ ] No memory leaks during extended use

## 4. Security Acceptance Criteria

- [ ] No API keys visible in client-side code
- [ ] No API keys in Git history
- [ ] All environment variables properly prefixed
- [ ] HTTPS used for all API calls
- [ ] Input sanitization on all user inputs

## 5. Accessibility Acceptance Criteria

- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader announces map updates
- [ ] Color contrast meets WCAG 2.1 AA standards
- [ ] All images have alt text
- [ ] Language switcher is keyboard accessible

Here is the PRD and spec.md for context:
[PASTE PRD.md AND spec.md CONTENT HERE]
```

### Expected Output
A comprehensive checklist-style document that defines success criteria for every feature.

---

## Prompt 4: Generate Testing Requirements (PROMPT Framework)

### Instructions for Students
Copy this prompt and send it to Claude or Gemini:

```
I need you to use the PROMPT framework to generate a testing strategy document for the Atlanta FIFA Navigator project.

**Problem**: Define the testing challenge:
We need a comprehensive testing strategy that ensures the application works correctly across different environments (Codespaces, local, production), handles API failures gracefully, and provides a smooth user experience.

**Roles**: Define who tests what:
- **Students**: Manual testing, user acceptance testing
- **AI Assistant**: Unit test suggestions, integration test structure
- **Instructor**: Final verification, edge case testing

**Objectives**: Define what testing must accomplish:
1. Verify all features work as specified
2. Ensure no regressions when adding new features
3. Validate environment-specific behavior (proxy vs direct)
4. Confirm error handling works correctly
5. Test performance under realistic conditions

**Methods**: Define testing approaches:
- Manual testing checklists
- API endpoint testing (using browser or curl)
- Console log verification
- Visual inspection of UI
- Cross-environment testing

**Process**: Define the testing workflow:
1. Test in Codespaces first (primary environment)
2. Verify environment detection works
3. Test all API endpoints return expected data
4. Test all user interactions
5. Test language switching
6. Test error conditions (bad API keys, network failures)

**Timeframe**: Define when testing happens:
- After each ticket implementation
- Before marking a story as complete
- Before marking an epic as complete
- Final full regression test before submission

Generate a `testing_requirements.md` file with these sections:

## Testing Strategy Overview

### Test Environments
1. **GitHub Codespaces** (Primary)
2. **Local Development** (Optional)
3. **Vercel Production** (Deployment)

### Testing Types

#### 1. Manual Testing Checklist
For each implemented feature, verify:
- [ ] Feature works as described in acceptance criteria
- [ ] No console errors
- [ ] No visual glitches
- [ ] Performance is acceptable
- [ ] Works in all supported languages

#### 2. API Endpoint Testing
Test each endpoint:

**GET /api/transit**
```bash
curl http://localhost:3000/api/transit
```
Expected:
- Returns JSON with `buses` and `trains` arrays
- Each vehicle has: id, lat, lon, route, type
- Response time < 5 seconds
- Returns empty arrays on error (not 500 status)

**GET /api/events**
```bash 
curl http://localhost:3000/api/events
```
Expected:
- Returns JSON array of FIFA matches
- Each event has: id, homeTeam, awayTeam, venue, date
- Sorted by date ascending

#### 3. Environment-Specific Testing

**Codespaces Environment**:
- [ ] CODESPACES env var is set
- [ ] Console shows "Using proxy" for train API
- [ ] Proxy URL is used for train data
- [ ] All features work correctly through proxy

**Production Environment**:
- [ ] CODESPACES env var is not set
- [ ] Console shows "Direct connection" for train API
- [ ] No proxy is used
- [ ] All features work correctly with direct connection

#### 4. Error Condition Testing

Test how the application handles:
- [ ] Invalid Google Maps API key → graceful error message
- [ ] MARTA API timeout → empty array returned
- [ ] MARTA API returns invalid JSON → empty array returned
- [ ] Database connection failure → appropriate error page
- [ ] Missing environment variables → clear error message

#### 5. User Experience Testing

- [ ] Map loads within 3 seconds
- [ ] Transit markers appear on map
- [ ] Language switcher changes text immediately
- [ ] No page reloads during language change
- [ ] Match schedule displays correctly
- [ ] Clicking a match centers map on venue

#### 6. Cross-Language Testing

Test all features in each language:
- [ ] English
- [ ] Spanish
- [ ] German
- [ ] Korean

Verify:
- All text is translated (no English fallbacks in other languages)
- Numbers, dates, times use correct locale formatting
- Map and data still work correctly

## Testing Workflow for Students

### After Implementing Each Atom:
1. Run `pnpm dev`
2. Check console for errors
3. Test the specific feature implemented
4. Verify acceptance criteria for that atom
5. Mark atom as complete only if all criteria pass

### After Completing Each Molecule:
1. Test all atoms in that molecule together
2. Verify the molecule's overall acceptance criteria
3. Check for integration issues between atoms
4. Document any issues found

### After Completing Each Organism:
1. Full regression test of all previous features
2. Performance testing
3. Cross-language testing
4. Error condition testing
5. Documentation review

## Common Issues to Watch For

- **Issue**: Map doesn't load
  **Check**: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set correctly

- **Issue**: No transit data appears
  **Check**: Console for API errors, verify MARTA API keys

- **Issue**: Train API fails in Codespaces
  **Check**: isRunningInCodespaces() returns true, proxy URL is correct

- **Issue**: Translations don't work
  **Check**: i18n configured correctly, translation files exist

- **Issue**: Database errors
  **Check**: Prisma migrations ran successfully, dev.db exists

Here is the PRD, spec.md, and acceptance_criteria.md for context:
[PASTE PRD.md, spec.md, AND acceptance_criteria.md CONTENT HERE]
```

### Expected Output
A comprehensive testing strategy document with checklists and procedures.

---

## Phase 1 Completion Checklist

Before moving to Phase 2, ensure you have:

- [ ] **spec.md** - Complete technical specification
- [ ] **guardrails.md** - Clear do's and don'ts
- [ ] **acceptance_criteria.md** - Feature verification checklists
- [ ] **testing_requirements.md** - Testing strategy and procedures

All four documents should be reviewed and understood before proceeding to implementation.

---

## Next Steps

Once Phase 1 is complete, proceed to:
- **Phase 2**: [02-PHASE-2-Implementation-Prompts.md](./02-PHASE-2-Implementation-Prompts.md)
