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
docs/FromProd/PRD.MD