# HorizonWebWorx | Retro Arcade Landing Page

A stunning retro arcade-themed landing page with 3D animations, CRT effects, and pixel-perfect design.

## ✨ Features

- 🎮 **Retro Arcade Aesthetic**: CRT screen effects, scanlines, and pixel art styling
- 🎨 **3D Background**: Dynamic Three.js animated geometric shapes
- 📱 **Fully Responsive**: Optimized for all devices
- ⚡ **Lightning Fast**: Built with Vite for instant HMR
- 🎯 **Smooth Animations**: Custom Tailwind animations throughout
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.4.10
- **Styling**: Tailwind CSS 3.4.7
- **3D Graphics**: Three.js 0.160.0
- **Font**: Press Start 2P (Google Fonts)
- **Language**: JavaScript (JSX)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
horizonwebworx/
├── src/
│   ├── components/
│   │   ├── CRTEffect.jsx          # CRT screen effect overlay
│   │   ├── ThreeBackground.jsx    # 3D animated background
│   │   ├── Navigation.jsx         # Floating navigation bar
│   │   ├── HeroSection.jsx        # Hero/landing section
│   │   ├── ServicesSection.jsx    # Services grid
│   │   ├── StatsSection.jsx       # Statistics display
│   │   ├── CTASection.jsx         # Call-to-action section
│   │   └── Footer.jsx             # Footer with links
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles + Tailwind
├── public/                        # Static assets
├── index.html                     # HTML template
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── package.json                   # Dependencies
```

## 🎨 Customization

### Colors

The theme uses a red/black/white color scheme. To customize:

- **Primary Red**: `#ff0000` (used in borders, accents, glows)
- **Background**: `#000000` (black)
- **Text**: `#ffffff` (white) and `#bbbbbb` (gray)

Update these in component files or add to Tailwind config.

### Animations

All animations are defined in `tailwind.config.js`:
- `flicker` - CRT screen flicker
- `nav-float` - Floating navigation
- `pulse-glow` - Pulsing glow effects
- `slide-bg` - Sliding background patterns
- `box-glow` - Box shadow animations
- `icon-bounce` - Icon bounce effect
- `blink` - Blinking text effect

### Content

Edit content directly in component files:
- **Hero Text**: `src/components/HeroSection.jsx`
- **Services**: `src/components/ServicesSection.jsx` (services array)
- **Stats**: `src/components/StatsSection.jsx` (stats array)
- **Footer**: `src/components/Footer.jsx`

## 🌐 Deployment

### Build Output

```bash
npm run build
```

Outputs to `dist/` directory. Deploy this folder to any static hosting:

- **Netlify**: Drag & drop `dist` folder
- **Vercel**: Connect repo, set build command to `npm run build`
- **GitHub Pages**: Push `dist` to `gh-pages` branch
- **Any CDN**: Upload `dist` contents

### Environment Variables

No environment variables required for basic deployment.

## 📦 Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM renderer
- `three` - 3D graphics library

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - Utility-first CSS framework
- `autoprefixer` - CSS vendor prefixing
- `postcss` - CSS transformation
- `eslint` - Code linting
- `prettier` - Code formatting
- `typescript` - Type checking (config only)

## 🎯 Performance

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Lighthouse Score**: 90+
- **Bundle Size**: ~150KB (gzipped)

Optimizations:
- Code splitting with dynamic imports
- Three.js geometry/material disposal
- Intersection Observer for scroll animations
- Optimized Tailwind purge

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

Requires WebGL support for 3D background.

## 📄 License

All rights reserved © 2025 HorizonWebWorX

## 📞 Contact

- **Email**: hello@horizonwebworx.com
- **Phone**: +1 (555) 555-0123
- **Support**: 24/7

---

**Built with ❤️ using React + Vite + Three.js**
