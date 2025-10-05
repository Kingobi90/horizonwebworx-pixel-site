# HorizonWebWorX - Modern SEO-Optimized Website

A modern, SEO-optimized website for HorizonWebWorX built with React 18, Next.js 14, and Tailwind CSS 3.4+. Features a unique horizontal scrolling experience and is optimized for Core Web Vitals.

##  Features

- **Modern Tech Stack**: React 18, Next.js 14 (App Router), TypeScript, Tailwind CSS 3.4+
- **Signature Scroll Experience**: Vertical scroll drives horizontal sliding sections
- **SEO Optimized**: Dynamic meta tags, JSON-LD schema, sitemap generation
- **Core Web Vitals**: Optimized for LCP < 2.5s, INP < 100ms, CLS < 0.1
- **Mobile-First Design**: Responsive and accessible UI components
- **Glass Morphism UI**: Modern glass card components with backdrop blur
- **Dark Mode Support**: System-aware theme toggle with persistence
- **Static Export**: Netlify-ready with canonical redirects and security headers

##  Architecture

project/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Base UI components (Button, Card, etc.)
│   │   ├── sections/       # Page sections (Hero, Pricing, etc.)
│   │   └── navigation/     # Navigation components
│   ├── lib/                # Utilities and configurations
│   └── styles/             # Global styles and Tailwind config
├── public/                 # Static assets
├── scripts/                # Build and utility scripts
└── netlify.toml           # Netlify deployment configuration

##  Design System

### Brand Colors
- **Primary**: `#0F0F10` (Dark charcoal)
- **Accent**: `#E41E26` (Brand red)
- **Background**: `#FFFFFF` (Light) / `#0A0A0A` (Dark)
- **Text**: `#0B0B0B` (Light) / `#F5F5F5` (Dark)

### Components
- **GlassCard**: Glass morphism cards with backdrop blur
- **Section**: Responsive container with consistent spacing
- **Button**: Multiple variants with loading states
- **Badge**: Status and category indicators
- **Calendar**: Interactive booking calendar
- **HorizontalScroll**: Signature scroll experience

##  Signature Scroll Experience
The unique horizontal scroll feature works as follows:

1. **Hero Section** (0-100vh): Normal vertical scrolling
2. **Horizontal Sections** (100vh+): Vertical scroll drives horizontal movement
3. **Smooth Transitions**: 60fps animations with GPU acceleration
4. **Accessibility**: Respects `prefers-reduced-motion`

### SEO Features
- Dynamic meta tags per route
- Open Graph and Twitter Cards
- JSON-LD structured data
- Automatic sitemap generation
- Canonical URLs
- Breadcrumb markup

### Performance Optimizations
- Static export for fast loading
- Image optimization
- Code splitting
- Lazy loading
- GPU-accelerated animations
- Minimal JavaScript bundles

### Core Web Vitals Targets
- **LCP**: < 2.5 seconds
- **INP**: < 100 milliseconds  
- **CLS**: < 0.1

##  Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

##  License

  2024 HorizonWebWorX. All rights reserved.

##  Contributing

This is a client project. For support or modifications, contact the HorizonWebWorX team.

---

**Built with  by the HorizonWebWorX team**
