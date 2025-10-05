# Quick Start Guide

Get the HorizonWebWorx arcade landing page running in 3 steps!

## Step 1: Install Node.js

If you don't have Node.js installed:

### macOS
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

### Windows
Download installer from [nodejs.org](https://nodejs.org/)

### Linux
```bash
# Ubuntu/Debian
sudo apt install nodejs npm

# Fedora
sudo dnf install nodejs npm
```

Verify installation:
```bash
node --version  # Should show v18 or higher
npm --version   # Should show v9 or higher
```

## Step 2: Install Dependencies

```bash
cd /Users/obinna.c/CascadeProjects/horizonwebworx
npm install
```

This installs all required packages (React, Vite, Three.js, Tailwind, etc.)

## Step 3: Start Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:5173**

You should see the retro arcade landing page with:
- ✅ CRT screen effects
- ✅ 3D animated background
- ✅ Floating navigation
- ✅ All sections rendering

## Next Steps

### Customize Content

Edit these files to customize:

- **Hero text**: `src/components/HeroSection.jsx`
- **Services**: `src/components/ServicesSection.jsx`
- **Stats**: `src/components/StatsSection.jsx`
- **Footer**: `src/components/Footer.jsx`
- **Colors**: `tailwind.config.js` and component files

### Build for Production

```bash
npm run build
```

Output will be in `dist/` folder - ready to deploy!

### Deploy

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

Quick deploy to Netlify:
1. Run `npm run build`
2. Drag `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Done! 🚀

## Troubleshooting

### Port 5173 already in use?

```bash
# Kill the process
lsof -ti:5173 | xargs kill -9

# Or change port in vite.config.js
```

### Dependencies won't install?

```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build fails?

Check Node.js version:
```bash
node --version  # Must be 18+
```

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── components/          # React components
│   ├── CRTEffect.jsx   # CRT overlay
│   ├── ThreeBackground.jsx  # 3D scene
│   ├── Navigation.jsx  # Nav bar
│   ├── HeroSection.jsx # Landing section
│   ├── ServicesSection.jsx  # Services grid
│   ├── StatsSection.jsx     # Stats display
│   ├── CTASection.jsx  # Call-to-action
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Need Help?

- 📖 Read `README_ARCADE.md` for full documentation
- 🚀 Check `DEPLOYMENT_GUIDE.md` for deployment
- 🐛 Check browser console for errors
- 💬 Contact: hello@horizonwebworx.com

---

**Happy coding! 🎮**
