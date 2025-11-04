# GitHub Actions Setup for Auto-Deploy

This guide helps you configure GitHub Actions to automatically deploy both projects to Vercel when pushing to the `demo` branch.

## Required GitHub Secrets

You need to add these secrets to your GitHub repository:

### 1. Get Vercel Token

```bash
# Login to Vercel CLI
pnpm dlx vercel login

# Get your token
pnpm dlx vercel token create github-actions
```

Copy the token - you'll use it as `VERCEL_TOKEN`.

### 2. Get Vercel Organization ID

```bash
# In fifa-traffic-demo directory
cd fifa-traffic-demo
pnpm dlx vercel link

# This creates .vercel/project.json
cat .vercel/project.json
```

Copy the `orgId` value - you'll use it as `VERCEL_ORG_ID`.

### 3. Get Vercel Project IDs

**For FIFA Demo:**
```bash
cd fifa-traffic-demo
cat .vercel/project.json
```
Copy the `projectId` - you'll use it as `VERCEL_FIFA_PROJECT_ID`.

**For Slides:**
```bash
cd slides
pnpm dlx vercel link
cat .vercel/project.json
```
Copy the `projectId` - you'll use it as `VERCEL_SLIDES_PROJECT_ID`.

---

## Add Secrets to GitHub

1. Go to your GitHub repo: https://github.com/doctor-ew/prd-to-prod
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add each secret:

| Secret Name | Value | Where to Find |
|-------------|-------|---------------|
| `VERCEL_TOKEN` | `vercel_...` | From step 1 above |
| `VERCEL_ORG_ID` | `team_...` | From `.vercel/project.json` |
| `VERCEL_FIFA_PROJECT_ID` | `prj_...` | From `fifa-traffic-demo/.vercel/project.json` |
| `VERCEL_SLIDES_PROJECT_ID` | `prj_...` | From `slides/.vercel/project.json` |

---

## How It Works

The workflow (`.github/workflows/deploy-demo.yml`) will:

1. **Trigger on**:
   - Push to `demo` branch
   - Manual workflow dispatch (GitHub Actions UI)

2. **Deploy FIFA Demo**:
   - Checkout code
   - Install pnpm dependencies
   - Build and deploy to Vercel production

3. **Deploy Slides**:
   - Checkout code
   - Install pnpm dependencies
   - Build and deploy to Vercel production

Both jobs run in parallel for faster deployment.

---

## Quick Setup Script

```bash
#!/bin/bash
# Run from repo root

echo "=== Setting up Vercel for GitHub Actions ==="

# 1. Create token
echo "Creating Vercel token..."
TOKEN=$(pnpm dlx vercel token create github-actions)
echo "VERCEL_TOKEN: $TOKEN"

# 2. Link FIFA demo
echo "Linking FIFA demo..."
cd fifa-traffic-demo
pnpm dlx vercel link
ORG_ID=$(cat .vercel/project.json | grep orgId | cut -d'"' -f4)
FIFA_PROJECT_ID=$(cat .vercel/project.json | grep projectId | cut -d'"' -f4)
echo "VERCEL_ORG_ID: $ORG_ID"
echo "VERCEL_FIFA_PROJECT_ID: $FIFA_PROJECT_ID"

# 3. Link slides
echo "Linking slides..."
cd ../slides
pnpm dlx vercel link
SLIDES_PROJECT_ID=$(cat .vercel/project.json | grep projectId | cut -d'"' -f4)
echo "VERCEL_SLIDES_PROJECT_ID: $SLIDES_PROJECT_ID"

echo ""
echo "=== Add these to GitHub Secrets ==="
echo "VERCEL_TOKEN: $TOKEN"
echo "VERCEL_ORG_ID: $ORG_ID"
echo "VERCEL_FIFA_PROJECT_ID: $FIFA_PROJECT_ID"
echo "VERCEL_SLIDES_PROJECT_ID: $SLIDES_PROJECT_ID"
echo ""
echo "Go to: https://github.com/doctor-ew/prd-to-prod/settings/secrets/actions"
```

Save as `setup-vercel-secrets.sh`, make executable with `chmod +x`, and run it.

---

## Test the Workflow

### Option 1: Push to demo branch
```bash
git checkout demo
git add .
git commit -m "Test auto-deploy"
git push origin demo
```

### Option 2: Manual trigger
1. Go to https://github.com/doctor-ew/prd-to-prod/actions
2. Click "Deploy to Vercel (Demo Branch)"
3. Click "Run workflow" → Select `demo` branch → "Run workflow"

---

## Monitor Deployments

Watch progress:
1. GitHub Actions: https://github.com/doctor-ew/prd-to-prod/actions
2. Vercel Dashboard: https://vercel.com/doctor-ew-labs

---

## Troubleshooting

### "Resource not accessible by integration"
- Check that secrets are added to the repository
- Ensure you're pushing to `demo` branch

### "Project not found"
- Verify `VERCEL_PROJECT_ID` values are correct
- Run `vercel link` in each project directory first

### "Invalid token"
- Regenerate token: `pnpm dlx vercel token create github-actions`
- Update `VERCEL_TOKEN` secret in GitHub

### Build fails
- Check workflow logs in GitHub Actions
- Verify `pnpm-lock.yaml` is committed
- Ensure all dependencies are listed in `package.json`

---

## Environment Variables for FIFA Demo

Don't forget to set these in Vercel Dashboard:

1. Go to https://vercel.com/doctor-ew-labs/fifa-atlanta-navigator/settings/environment-variables
2. Add:
   ```
   NEXT_PUBLIC_GMAK=your_google_maps_api_key
   ```

After adding, redeploy or push to trigger new deployment.

---

**All set! Now every push to `demo` will auto-deploy both projects.** 🚀
