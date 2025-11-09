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
docs/FromProd/PRD.MD
docs/ForCode/spec.md