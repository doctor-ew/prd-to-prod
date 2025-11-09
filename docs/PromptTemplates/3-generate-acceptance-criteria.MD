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
docs/FromProd/PRD.MD
docs/ForCode/spec.md
