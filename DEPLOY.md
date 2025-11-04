# Deployment Guide

Quick deployment guide for both projects to Vercel.

## 🚀 Deployment Options

**Option 1: GitHub Actions (Recommended)**
- Auto-deploy on push to `demo` branch
- See `.github/SETUP-GITHUB-ACTIONS.md` for setup

**Option 2: pnpm Scripts**
- Manual deploy via `pnpm run deploy`
- Detailed below

**Option 3: Vercel Dashboard**
- Web UI deployment
- See "Manual Deploy via Dashboard" section

---

## Prerequisites

```bash
# Install Vercel CLI globally (one-time)
pnpm add -g vercel

# Or use via pnpm dlx (no install needed)
pnpm dlx vercel --version
```

## 🎬 Deploy FIFA Traffic Demo

```bash
cd fifa-traffic-demo

# First time: Login to Vercel
pnpm dlx vercel login

# Deploy to production
pnpm run deploy

# Or preview deployment (non-production)
pnpm run deploy:preview
```

### Environment Variables (Required)

After first deployment, add in Vercel Dashboard:

1. Go to https://vercel.com/doctor-ew-labs/fifa-atlanta-navigator/settings/environment-variables
2. Add:

```bash
NEXT_PUBLIC_GMAK=your_google_maps_api_key
```

Optional (has defaults):
```bash
NEXT_PUBLIC_STADIUM_LAT=33.754542
NEXT_PUBLIC_STADIUM_LNG=-84.402492
NEXT_PUBLIC_STADIUM_NAME=Mercedes-Benz Stadium
```

3. Redeploy: `pnpm run deploy`

---

## 📊 Deploy Slides

```bash
cd slides

# Deploy to production
pnpm run deploy

# Or preview deployment
pnpm run deploy:preview
```

No environment variables needed - static site.

---

## Quick Commands

### FIFA Demo
```bash
cd fifa-traffic-demo
pnpm run deploy          # Deploy to production
pnpm run deploy:preview  # Deploy preview
```

### Slides
```bash
cd slides
pnpm run deploy          # Deploy to production
pnpm run deploy:preview  # Deploy preview
```

---

## First-Time Setup

On first deployment, Vercel will ask:

```
? Set up and deploy "~/prd-to-prod/fifa-traffic-demo"? [Y/n] y
? Which scope do you want to deploy to? doctor-ew-labs
? Link to existing project? [y/N] n
? What's your project's name? fifa-atlanta-navigator
? In which directory is your code located? ./
```

Answer:
- Scope: `doctor-ew-labs` (your hobby account)
- Link to existing: `N` (first time)
- Project name: Your choice
- Directory: `./` (current directory)

---

## Deployment URLs

After deployment, you'll get URLs like:

**FIFA Demo:**
- Production: `https://fifa-atlanta-navigator.vercel.app`
- Preview: `https://fifa-atlanta-navigator-<hash>.vercel.app`

**Slides:**
- Production: `https://prd-to-prod-slides.vercel.app`
- Preview: `https://prd-to-prod-slides-<hash>.vercel.app`

---

## Troubleshooting

### Build fails on Vercel

Check build logs in Vercel Dashboard:
```
https://vercel.com/doctor-ew-labs/<project-name>/deployments
```

### Environment variables not working

Make sure:
1. Variables are set in Vercel Dashboard
2. `NEXT_PUBLIC_*` prefix for client-side vars
3. Redeploy after adding variables

### pnpm not recognized

Vercel auto-detects pnpm from `vercel.json`. If issues:
1. Check `vercel.json` has `"installCommand": "pnpm install"`
2. Check `pnpm-lock.yaml` is committed to git

---

## Manual Deploy via Dashboard

Alternative to CLI:

1. Go to https://vercel.com/doctor-ew-labs
2. Click **Add New** → **Project**
3. Import Git Repository: `doctor-ew/prd-to-prod`
4. Configure:
   - **FIFA Demo**: Root Directory: `fifa-traffic-demo`
   - **Slides**: Root Directory: `slides`
5. Click **Deploy**

---

## CI/CD (Auto-Deploy on Git Push)

Once linked to Git:
- Push to `main` → Auto-deploy to production
- Push to other branches → Auto-deploy to preview

Configure in Vercel Dashboard:
- Settings → Git → Production Branch

---

**Happy Deploying!** 🚀
