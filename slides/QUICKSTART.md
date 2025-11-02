# Slides Quick Start Guide

## 🚀 Get Presenting in 60 Seconds

### Option 1: Slidev (Recommended)

```bash
# 1. Navigate to slides directory
cd /Users/drew.schillinger/shuttlebay/DoctorEw/prd-to-prod/slides

# 2. Run Slidev (installs on first run)
npx @slidev/cli slides.md

# 3. Open browser to http://localhost:3030
# 4. Press Space to advance slides
```

### Option 2: Export to PDF First

```bash
# Generate PDF handout
npx @slidev/cli export slides.md --output workshop.pdf

# Then present the PDF (or print for students)
open workshop.pdf
```

## ⌨️ Keyboard Shortcuts (During Presentation)

- `Space` or `→` - Next slide
- `Shift + Space` or `←` - Previous slide
- `F` - Fullscreen
- `O` - Overview mode (see all slides)
- `D` - Drawing mode (annotate slides)
- `G` - Go to specific slide number
- `Esc` - Exit fullscreen/overview

## 📋 Pre-Workshop Checklist

### Before Students Arrive

- [ ] Test slides locally (`npx @slidev/cli slides.md`)
- [ ] Verify all images load (check internet connection)
- [ ] Test screen sharing (if remote workshop)
- [ ] Have GitHub repo URL ready: `https://github.com/doctor-ew/prd-to-prod/tree/demo`
- [ ] Test prompt_framework.gif loads from GitHub
- [ ] Have your API keys ready (to demo setup)

### Student Pre-Requisites

- [ ] GitHub account
- [ ] Codespaces access (comes with GitHub account)
- [ ] Google Maps API key (guide them through getting one)
- [ ] MARTA API keys (provide if available)
- [ ] Claude or Gemini API key (for AI assistant)

## 🎓 Teaching Tips

### Slide Pacing

**Slower Sections** (Concept-heavy):
- 01-vibe-coding (5-7 min each slide - let them discuss)
- 03-pipeline (3-5 min each slide - lots to absorb)
- 06-framework (4-6 min each slide - reference material)

**Faster Sections** (Reference material):
- 00-title (2 min each)
- 04-atomic-design (3 min each - save details for hands-on)
- 08-milestones (2-3 min each)
- 09-wrap-up (2 min each)

**Interactive Sections** (Student-led):
- 05-environment (15-20 min TOTAL including setup time)
- 07-guardrails-ac (10 min - have them suggest examples)

### When to Pause

Pause for questions after:
- Slide 02: Vibe vs Spec contrast (students will have opinions)
- Slide 03-06: Full pipeline diagram (make sure everyone gets it)
- Slide 04-03: FIFA Navigator breakdown (this is complex)
- Slide 06-04: Eight frameworks (students should ask which to use)
- Slide 07-05: Mapping table (this ties everything together)

### Demo Moments

**Live Demo Opportunities**:
1. After slide 05-02 (DevContainer): Show your actual Codespace
2. After slide 06-02 (Master Guide): Feed it to Claude/Gemini live
3. After slide 06-06 (Visual Flow): Actually generate a SPEC from a mini-PRD
4. During hands-on: Walk through one Atom implementation live

## 🛠️ Troubleshooting

### Slides Won't Load
```bash
# Clear npm cache
npx clear-npx-cache

# Try again
npx @slidev/cli slides.md
```

### Images Not Loading
- Check internet connection (images hosted on Unsplash, doctorew.com, GitHub)
- Replace URLs in slide files with local images if needed
- Edit `slides.md` and individual files to update URLs

### Mermaid Diagrams Not Rendering
- Slidev should handle this automatically
- If not, update Slidev: `npm i -g @slidev/cli@latest`
- Or export to PDF (Mermaid renders during export)

### Tweet Component Not Working
- Requires internet connection
- If offline, replace `<Tweet>` component with screenshot
- Edit `01-vibe-coding/02-databaseless-apps.md`

## 📱 Remote Workshop Tips

If teaching remotely:

1. **Share entire screen** (not just browser window)
2. **Test screen share** before workshop starts
3. **Use presenter mode** in Slidev (shows notes on second screen)
4. **Record session** for students who miss it
5. **Share PDF** after workshop for reference

### Zoom/Meet Specific

```bash
# Before sharing screen, start Slidev with larger text
npx @slidev/cli slides.md --port 3030

# Then use browser zoom (Cmd/Ctrl +) to increase size
# Aim for ~125-150% zoom for readability
```

## 🎯 Slide-by-Slide Notes

### Critical Slides (Must Nail These)

**Slide 02-02: Vibe vs Spec Contrast**
- This is THE money slide
- Students need to viscerally understand the difference
- Ask: "Who has built a databaseless app by accident?"

**Slide 03-06: Full Pipeline Diagram**
- Draw this on a whiteboard too if possible
- Make sure everyone can recite: PRD → SPEC → Guardrails → AC
- Quiz them: "What framework generates SPEC?" (C.R.A.F.T)

**Slide 04-02: Atomic Mapping Table**
- Students confuse Molecules and Atoms often
- Rule of thumb: "If it takes more than 30 min, it's not an Atom"
- Have them break down a feature live

**Slide 06-04: Eight Frameworks**
- DON'T try to memorize all 8 in workshop
- Focus on: C.R.A.F.T, F.O.C.U.S, M.A.P, I.D.E.A (most common)
- Tell them: "Meta-Framework Guide chooses for you"

**Slide 07-05: Mapping Table**
- This is where it all clicks
- Spend extra time here
- Have students map one of their own features

### Skippable If Time Is Short

- Slide 00-02: Agenda (if already sent agenda via email)
- Slide 01-03: When Vibe Works (obvious to most)
- Slide 05-04: Context/Tokens (nice to know, not critical for building)
- Slide 08-03: Reflection Questions (can be homework)

## 📦 Post-Workshop

### Send to Students

1. **PDF of slides** (exported version)
2. **Link to GitHub repo**: https://github.com/doctor-ew/prd-to-prod/tree/demo
3. **Your deployed FIFA Navigator** (as example)
4. **Recording link** (if recorded)
5. **Reflection questions doc** (slide 08-03 content)

### Follow-Up Email Template

```
Subject: From PRD to Prod - Workshop Resources

Hi [Class],

Thanks for attending today's Spec-Driven Development workshop!

Here are the resources we covered:

📚 Slides (PDF): [attach or link]
🔗 GitHub Repo to Fork: https://github.com/doctor-ew/prd-to-prod/tree/demo
🎥 Workshop Recording: [link if available]
🚀 Example Deployment: [your FIFA Navigator URL]

Next Steps:
1. Deploy your FIFA Navigator to Vercel
2. Answer the reflection questions from Slide 08-03
3. Try building your own project using the 8 frameworks

Questions? Reply to this email or tag me on Twitter: @DoctorEw

Keep building intentionally! 🧙‍♂️

- DoctorEw
```

## 🧙‍♂️ Final Wisdom

**Before Workshop:**
- Arrive early, test everything
- Have backup plan (PDF if Slidev fails)
- Hydrate, caffeinate, meditate

**During Workshop:**
- Energy matters more than perfection
- Let students struggle (builds learning)
- Celebrate small wins (first API call working)

**After Workshop:**
- Share students' deployed apps on Twitter
- Collect feedback for next iteration
- Update slides based on what resonated

---

**Remember**: You're not teaching frameworks. You're teaching *intentional building*. The frameworks are just tools. The mindset is the magic.

🔮 Now go teach something remarkable.
