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
docs/FromProd/PRD.MD
docs/ForCode/spec.md
docs/ForCode/acceptance_criteria.md