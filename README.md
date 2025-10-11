# HorizonWebWorX | Retro Arcade Landing Page

A stunning retro arcade-themed landing page with 3D animations, CRT effects, and pixel-perfect design.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` after running `npm run dev`.

## ✨ Features

- 🎮 **Retro Arcade Aesthetic** - CRT screen effects, scanlines, and pixel art styling
- 🎨 **3D Background** - Dynamic Three.js animated geometric shapes
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Lightning Fast** - Built with Vite for instant HMR
- 🎯 **Smooth Animations** - Custom Tailwind animations throughout
- 🌐 **Multi-language** - EN, FR, ES, ZH support
- 📅 **Cal.com Integration** - Built-in booking calendar

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.4.10
- **Styling**: Tailwind CSS 3.4.7
- **3D Graphics**: Three.js 0.160.0
- **Font**: Press Start 2P (Google Fonts)

## 📁 Project Structure

```
horizonwebworx/
├── src/
│   ├── components/       # React components (arcade themed)
│   ├── context/          # Language context
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles + Tailwind
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind + animations
```

## 🎨 Customization

### Update Content
- **Hero**: `src/components/HeroSection.jsx`
- **Services**: `src/components/ServicesSection.jsx`
- **Stats**: `src/components/StatsSection.jsx`
- **Footer**: `src/components/Footer.jsx`

### Styling
- Colors: Update component files or `tailwind.config.js`
- Animations: Edit `tailwind.config.js` keyframes
- Global styles: `src/index.css`

## 🌐 Deployment

```bash
npm run build
```

Deploy the `dist/` folder to:
- **Netlify**: Drag & drop
- **Vercel**: Connect repo
- **GitHub Pages**: Push to gh-pages
- **Any CDN**: Upload dist contents

## 📞 Support

- **Email**: admin@horizonwebworx.com
- **Phone**: +1 (438) 531-6242

## 📄 License

All rights reserved © 2025 HorizonWebWorX
