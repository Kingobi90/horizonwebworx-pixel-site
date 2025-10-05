# Install Node.js - Step by Step Guide

## 🎯 You Need Node.js to Run This Project

Node.js is not currently installed on your system. Here's how to install it:

---

## ✅ Recommended: Official Installer (Easiest)

### Step 1: Download Node.js

1. Open your browser
2. Go to: **https://nodejs.org**
3. Click the **green "LTS" button** (Long Term Support)
4. The download will start automatically

### Step 2: Install

1. Open the downloaded `.pkg` file
2. Follow the installation wizard
3. Click "Continue" → "Install"
4. Enter your Mac password when prompted
5. Wait for installation to complete
6. Click "Close"

### Step 3: Verify Installation

Open a **new Terminal window** and run:

```bash
node --version
```

You should see something like: `v20.x.x` or `v18.x.x`

Also check npm:

```bash
npm --version
```

You should see something like: `10.x.x` or `9.x.x`

### Step 4: Run the Project

```bash
cd /Users/obinna.c/CascadeProjects/horizonwebworx
npm install
npm run dev
```

The site will open at: **http://localhost:5173** 🚀

---

## Alternative: Install Homebrew First (For Advanced Users)

Homebrew is a package manager for Mac that makes installing software easier.

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the on-screen instructions, then:

### Install Node.js via Homebrew

```bash
brew install node
```

### Verify and Run

```bash
node --version
npm --version

cd /Users/obinna.c/CascadeProjects/horizonwebworx
npm install
npm run dev
```

---

## Alternative: Use nvm (Node Version Manager)

For managing multiple Node.js versions:

### Install nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### Restart Terminal, then:

```bash
nvm install 20
nvm use 20
node --version
```

### Run the Project

```bash
cd /Users/obinna.c/CascadeProjects/horizonwebworx
npm install
npm run dev
```

---

## 🚨 Troubleshooting

### "command not found: node" after installation

- **Close and reopen Terminal** (important!)
- The PATH needs to be refreshed

### "permission denied" errors

- Don't use `sudo` with npm
- If you see permission errors, reinstall Node.js using the official installer

### Installation hangs or fails

- Check your internet connection
- Try downloading from nodejs.org again
- Restart your Mac and try again

### Still having issues?

1. Check if you have enough disk space (need ~500MB)
2. Make sure you're running macOS 10.15 or later
3. Try the official installer method (most reliable)

---

## 📋 Quick Reference

After Node.js is installed, use these commands:

```bash
# Navigate to project
cd /Users/obinna.c/CascadeProjects/horizonwebworx

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ✅ Next Steps After Installation

1. **Verify Node.js**: `node --version` (should be v18+)
2. **Install dependencies**: `npm install`
3. **Run the project**: `npm run dev`
4. **Open browser**: http://localhost:5173
5. **Start customizing!**

---

## 🎮 What You'll See

Once running, you'll see:
- ✅ Retro arcade CRT effects
- ✅ 3D animated background
- ✅ Floating navigation
- ✅ "Player One Ready?" hero
- ✅ Services grid
- ✅ Statistics display
- ✅ Call-to-action section
- ✅ Complete footer

---

## 📞 Need Help?

- **Node.js Download**: https://nodejs.org
- **Homebrew**: https://brew.sh
- **Project Docs**: See README_ARCADE.md

---

**Recommended: Use the official installer from nodejs.org - it's the simplest method!**
