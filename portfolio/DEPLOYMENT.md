# 🚀 Vercel Deployment Guide

Complete step-by-step guide to deploy your portfolio to Vercel.

## Prerequisites
- GitHub account
- Vercel account (free - sign up at [vercel.com](https://vercel.com))
- Your portfolio code ready

## Step 1: Push to GitHub

```bash
# Initialize git repository
cd portfolio
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add remote repository (create repo on GitHub first)
git remote add origin https://github.com/NithiishSD/portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 2: Connect to Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub repositories
5. Click **"New Project"**
6. Select your portfolio repository
7. Configure project settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
8. Click **"Deploy"**

### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd portfolio
vercel

# Follow the prompts:
# - Link to existing project? N
# - What's your project's name? nithiish-portfolio
# - In which directory is your code located? ./
# - Want to override settings? N

# For production deployment
vercel --prod
```

## Step 3: Configure Domain (Optional)

### Using Vercel Domain
Your site will be available at:
`https://your-project-name.vercel.app`

### Using Custom Domain
1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Update DNS records as instructed by Vercel:
   - Add A record: `76.76.21.21`
   - Add CNAME record for www subdomain
5. Wait for DNS propagation (can take up to 48 hours)

## Step 4: Environment Variables (If Needed)

If you add any API keys or secrets later:
1. Go to **Settings** → **Environment Variables**
2. Add variables:
   - Name: `VITE_API_KEY`
   - Value: `your-secret-key`
   - Environment: Production, Preview, Development
3. Redeploy for changes to take effect

## Step 5: Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

To manually redeploy:
```bash
# From local repository
vercel --prod

# Or use Vercel dashboard
# Click "Deployments" → "Redeploy"
```

## Troubleshooting

### Build Fails
Check build logs in Vercel dashboard:
1. Go to your project
2. Click **"Deployments"**
3. Click on failed deployment
4. Review logs for errors

Common fixes:
```bash
# Clear cache and rebuild locally
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh
Add `vercel.json` to root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Slow Build Times
Optimize dependencies:
```bash
# Remove unused packages
npm prune

# Update dependencies
npm update
```

## Performance Optimization

### 1. Enable Compression
Vercel automatically enables gzip/brotli compression.

### 2. Image Optimization
Use Vercel Image Optimization:
```jsx
import Image from 'next/image' // If using Next.js
// Or optimize images before upload
```

### 3. Analytics
Enable Vercel Analytics:
1. Go to **Analytics** tab
2. Click **"Enable Analytics"**
3. Add analytics script to `index.html`

## Custom Configuration

Create `vercel.json` in project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Monitoring

### View Analytics
- **Real-time visitors**: Dashboard → Analytics
- **Performance metrics**: Web Vitals scores
- **Error tracking**: Check deployment logs

### Set Up Alerts
1. Go to **Settings** → **Notifications**
2. Configure alerts for:
   - Failed deployments
   - High error rates
   - Performance issues

## Updating Your Portfolio

```bash
# Make changes locally
git add .
git commit -m "Update projects section"
git push origin main

# Vercel auto-deploys the changes!
```

## Quick Links

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite + Vercel**: [vercel.com/docs/frameworks/vite](https://vercel.com/docs/frameworks/vite)
- **Custom Domains**: [vercel.com/docs/custom-domains](https://vercel.com/docs/custom-domains)

---

## 🎉 Your Portfolio is Live!

Once deployed, share your portfolio:
- **LinkedIn**: Add to featured section
- **GitHub**: Pin the repository
- **Resume**: Include the URL
- **Email signature**: Add the link

**Example URL**: `https://nithiish-portfolio.vercel.app`

---

**Questions?** Check [Vercel Support](https://vercel.com/support) or reach out to me!
