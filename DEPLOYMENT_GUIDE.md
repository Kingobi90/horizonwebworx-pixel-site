# Deployment Guide - HorizonWebWorx Arcade Landing Page

## Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

## Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## Deployment Options

### Option 1: Netlify (Recommended)

#### Method A: Drag & Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Your site is live!

#### Method B: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the prompts
4. Your site is deployed!

Or use the Vercel dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite settings
4. Click "Deploy"

### Option 3: GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/horizonwebworx"
   }
   ```
3. Run `npm run deploy`
4. Enable GitHub Pages in repository settings

### Option 4: Cloudflare Pages

1. Push code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create new project
4. Connect repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Deploy

### Option 5: AWS S3 + CloudFront

1. Build the project: `npm run build`
2. Create S3 bucket with static website hosting
3. Upload `dist/` contents to S3
4. Create CloudFront distribution pointing to S3
5. Configure custom domain (optional)

### Option 6: Traditional Web Hosting

For shared hosting (cPanel, etc.):

1. Build: `npm run build`
2. Upload contents of `dist/` folder via FTP
3. Ensure `.htaccess` for SPA routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Custom Domain Setup

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS:
   - Add A record: `104.198.14.52`
   - Or CNAME: `your-site.netlify.app`

### Vercel
1. Go to Project settings → Domains
2. Add domain
3. Configure DNS as instructed

### Cloudflare Pages
1. Go to Custom domains
2. Add domain
3. Update nameservers if needed

## Environment Variables

This project doesn't require environment variables for basic deployment. If you add analytics or APIs later:

1. Create `.env.local` (never commit this)
2. Add variables prefixed with `VITE_`:
   ```
   VITE_API_URL=https://api.example.com
   VITE_GA_ID=G-XXXXXXXXXX
   ```
3. Access in code: `import.meta.env.VITE_API_URL`
4. Add to hosting platform's environment settings

## Performance Optimization

### Before Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test with `npm run preview`
- [ ] Check bundle size (should be ~150KB gzipped)
- [ ] Verify all images are optimized
- [ ] Test on mobile devices
- [ ] Check accessibility with Lighthouse
- [ ] Verify all links work
- [ ] Test contact form (if added)

### Post-Deployment

1. **Test Performance**
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 90+ score
   - Check Core Web Vitals

2. **Enable Compression**
   - Most platforms enable gzip/brotli automatically
   - Verify with browser DevTools

3. **Setup CDN**
   - Netlify/Vercel include CDN
   - For others, consider Cloudflare

4. **Monitor**
   - Setup uptime monitoring (UptimeRobot, etc.)
   - Add analytics (Google Analytics, Plausible)

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh

Ensure SPA routing is configured:
- Netlify: Add `_redirects` file or `netlify.toml`
- Vercel: Auto-configured
- Others: See hosting-specific docs

### Three.js Not Loading

Check browser console for WebGL errors. Three.js requires WebGL support.

### Slow Performance

1. Check bundle size: `npm run build -- --report`
2. Optimize images
3. Enable CDN
4. Check hosting location (use CDN for global reach)

## SSL/HTTPS

All recommended platforms (Netlify, Vercel, Cloudflare) provide free SSL certificates automatically.

For custom hosting:
- Use [Let's Encrypt](https://letsencrypt.org/) (free)
- Or purchase SSL certificate from hosting provider

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Support

For deployment issues:
- Check hosting platform documentation
- Review build logs
- Test locally with `npm run preview`
- Verify Node.js version matches requirements

---

**Ready to deploy? Choose your platform and follow the steps above!**
