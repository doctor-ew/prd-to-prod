---
layout: default
---

# Step 3: Configure API Keys

<div class="mt-8">

## Environment Variables Setup

```bash
# In your Codespace terminal
cd fifa-traffic-demo
cp .env.example .env
```

Then edit `.env` with your keys:

```bash
# Google Maps (required)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# MARTA APIs (required)
MARTA_API_KEY=your_key_here
MARTA_TRAIN_API_KEY=your_key_here

# Stadium location (already configured)
NEXT_PUBLIC_STADIUM_NAME="Mercedes-Benz Stadium"
NEXT_PUBLIC_STADIUM_LAT="33.754542"
NEXT_PUBLIC_STADIUM_LNG="-84.402492"
```

</div>

<div class="mt-4 p-4 bg-blue-500/10 rounded-lg">
💡 **Important**: `NEXT_PUBLIC_*` variables are exposed to the browser
</div>

<div class="mt-4 p-4 bg-green-500/10 rounded-lg">
✅ **AI Keys**: Add `ANTHROPIC_API_KEY` or `GEMINI_API_KEY` to your Codespace secrets
</div>

<!--
Source: CLAUDE.md - Environment Variables section
These are the keys needed to run the FIFA Navigator demo.
-->
