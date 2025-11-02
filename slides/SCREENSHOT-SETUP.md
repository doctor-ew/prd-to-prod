# How to Add the FIFA Navigator Screenshot

## Option 1: Using the Screenshot Directly (Recommended)

### Step 1: Save the Screenshot

Save the screenshot you provided to:
```
/Users/drew.schillinger/shuttlebay/DoctorEw/prd-to-prod/slides/public/fifa-navigator-demo.png
```

### Step 2: Create the public directory

```bash
cd /Users/drew.schillinger/shuttlebay/DoctorEw/prd-to-prod/slides
mkdir -p public
# Then move/save your screenshot to public/fifa-navigator-demo.png
```

### Step 3: Update the slide

The slide `00-title/03-what-we-build.md` is already configured to use it.

Just change the image path from:
```
image: https://github.com/user-attachments/assets/fifa-navigator-demo.png
```

To:
```
image: /fifa-navigator-demo.png
```

## Option 2: Use the ALTERNATE Version

If you want more control over layout, use:
```
00-title/03-what-we-build-ALTERNATE.md
```

This version uses a two-column layout with feature list on the left and screenshot on the right.

To activate it:

1. Save screenshot to `public/fifa-navigator-demo.png`
2. In `slides.md`, change the import from:
   ```
   src: ./00-title/03-what-we-build.md
   ```
   To:
   ```
   src: ./00-title/03-what-we-build-ALTERNATE.md
   ```

## Option 3: Host Screenshot Online

If you prefer not to commit the image to the repo:

1. Upload screenshot to GitHub Issues (drag & drop into a comment)
2. Copy the generated URL (looks like: `https://github.com/user-attachments/assets/...`)
3. Update the `image:` field in the slide with that URL

## Where the Screenshot Appears

Currently configured to appear on **Slide 3** (right after Agenda, before "What is Vibe Coding?")

This gives students an immediate visual goal: "Here's what you're building today"

## What the Screenshot Shows

The screenshot demonstrates the completed FIFA Navigator app with:

### Visible Features
- ✅ Google Maps centered on Atlanta
- ✅ Traffic layer ON (green roads = clear traffic)
- ✅ Blue bus markers (multiple locations)
- ✅ Red train markers (station locations)
- ✅ Right sidebar: Event schedule ("Calendario FIFA")
- ✅ Language picker showing: Español ✓ (currently selected)
- ✅ Other languages available: English, Français, Deutsch, 한국어

### Event Details Shown
1. **Copa Mundial FIFA 2026 Inaugural** (June 11, 2026, 15:00)
2. **Grupo A: México vs. Polonia** (June 15, 2026, 12:00)
3. **Grupo B: España vs. Marruecos** (June 19, 2026, 9:00)
4. **Grupo C: Argentina vs. Australia** (June 23, 2026, 15:00)
5. **Partido de Octavos de Final** (June 28, 2026, 11:00)

### UI Elements Visible
- Soccer ball icon in top-left header
- "Navegador FIFA de Atlanta" title
- "Traffic: ON" toggle (bottom-left)
- Google Maps attribution (bottom-right)
- Mercedes-Benz Stadium marker visible

## Alternative Slides Using This Screenshot

You might also want to use this screenshot on:

### Slide 04-03: FIFA Navigator Breakdown
Shows the Organism → Molecule → Atom structure. Could reference specific features visible in the screenshot.

### Slide 05-05: Setup Keys
Shows what environment variables enable (map, transit, events).

### Hands-On Reference Slide (NEW)
Create a slide students can reference during coding:

```markdown
---
layout: image
image: /fifa-navigator-demo.png
backgroundSize: contain
---

# Your Target: This

<!--
Keep this slide open in a second browser tab during hands-on coding.
This is what "done" looks like.
-->
```

Save to: `slides/06-framework/07-target-reference.md`

Then add to `slides.md`:
```
---
src: ./06-framework/07-target-reference.md
---
```

## Testing the Screenshot

After adding the screenshot, test it:

```bash
cd /Users/drew.schillinger/shuttlebay/DoctorEw/prd-to-prod/slides
npx @slidev/cli slides.md
```

Navigate to slide 3 and verify the image loads correctly.

## Troubleshooting

### Image doesn't load
- Check file path is correct: `slides/public/fifa-navigator-demo.png`
- Verify image format is PNG or JPG
- Try refreshing browser (Cmd/Ctrl + R)
- Check browser console for 404 errors

### Image too large/small
- Edit the slide and add `backgroundSize: contain` or `backgroundSize: cover`
- For more control, use the ALTERNATE version

### Image quality poor
- Ensure original screenshot is high-resolution (2x or 3x retina if possible)
- Recommended: 1920x1080 or larger
- Compress with: `pngquant fifa-navigator-demo.png` (reduces file size)

---

**Quick Command Reference**

```bash
# Create public directory
mkdir -p slides/public

# Save screenshot (then manually move file)
# From: ~/Downloads/fifa-navigator-screenshot.png
# To: slides/public/fifa-navigator-demo.png

# Test slides
cd slides
npx @slidev/cli slides.md

# Export with screenshot included
npx @slidev/cli export slides.md --output workshop.pdf
```

The screenshot will be embedded in the PDF export automatically.
