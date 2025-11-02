---
layout: default
---

# Acceptance Criteria Examples

<div class="mt-4">

## FIFA Navigator AC Checklist

### 🗺️ Map Component
- [ ] Map renders centered on Mercedes-Benz Stadium (33.754542, -84.402492)
- [ ] Traffic layer displays current road conditions
- [ ] Map is interactive (pan, zoom, rotate work)
- [ ] Mobile: Map takes full viewport minus header
- [ ] Desktop: Map takes 60% width, schedule takes 40%
- [ ] Loads in < 3 seconds on 3G connection

### 🚌 Transit Data
- [ ] Blue markers show current bus locations
- [ ] Red markers show current train locations
- [ ] Markers update automatically every 30 seconds
- [ ] Codespaces environment: Console logs "Using proxy URL"
- [ ] Production environment: Console logs "Direct connection"
- [ ] No CORS errors in console
- [ ] Graceful fallback if API fails (show last known data)

### 🌍 Internationalization
- [ ] Language switcher visible in top-right corner
- [ ] All 4 languages selectable: EN, ES, DE, KO
- [ ] Changing language updates all UI text immediately
- [ ] Schedule times display in local time zone
- [ ] No English strings visible in ES/DE/KO modes
- [ ] Language preference persists across page reloads

</div>

<!--
Notice how every AC is a checkbox - binary true/false. No ambiguity.
Source: docs/PromptTemplates/02-CLASS-SESSION-WORKFLOW.md - Phase 5: Integration Testing
-->
