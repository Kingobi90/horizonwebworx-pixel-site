import { Metadata } from 'next'

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'service'
}

export const SITE_CONFIG = {
  name: 'HorizonWebWorX',
  description: 'Automation-driven websites, web apps, and AI tools for fashion/retail businesses. Custom solutions that scale.',
  url: 'https://horizonwebworx.com',
  ogImage: '/og-image.jpg',
  twitter: '@horizonwebworx',
  creator: 'HorizonWebWorX Team',
}

export const SEO_MAP: Record<string, SEOData> = {
  '/': {
    title: 'HorizonWebWorX — Automations, Websites & AI Tools',
    description: 'Automation-driven websites, web apps, and AI tools for fashion/retail businesses. Custom solutions that scale.',
    keywords: ['automation', 'AI tools', 'custom websites', 'web development', 'fashion tech', 'retail solutions'],
    type: 'website',
  },
  '/pricing': {
    title: 'Pricing — HorizonWebWorX',
    description: 'Transparent pricing for automation solutions, custom websites, and AI tools. Plans starting at $199/month.',
    keywords: ['pricing', 'automation pricing', 'website development cost', 'AI tools pricing'],
    type: 'website',
  },
  '/booking': {
    title: 'Book a Demo — HorizonWebWorX',
    description: 'Schedule a free consultation to discuss your automation and website needs. Available slots 9 AM - 3 PM.',
    keywords: ['book demo', 'consultation', 'schedule meeting', 'automation consultation'],
    type: 'website',
  },
  '/ai-receptionist': {
    title: 'AI Receptionist — HorizonWebWorX',
    description: 'Intelligent AI receptionist for automated customer service, appointment booking, and inquiry handling.',
    keywords: ['AI receptionist', 'automated customer service', 'chatbot', 'appointment booking'],
    type: 'service',
  },
  '/wholesale-portal': {
    title: 'Wholesale Portal — HorizonWebWorX',
    description: 'Custom B2B wholesale portals with inventory management, order processing, and client management.',
    keywords: ['wholesale portal', 'B2B platform', 'inventory management', 'order processing'],
    type: 'service',
  },
  '/work': {
    title: 'Our Work — HorizonWebWorX',
    description: 'Case studies and portfolio showcasing successful automation projects and custom website implementations.',
    keywords: ['portfolio', 'case studies', 'automation examples', 'website examples'],
    type: 'website',
  },
  '/about': {
    title: 'About Us — HorizonWebWorX',
    description: 'Learn about HorizonWebWorX team, our mission to automate business processes, and our expertise.',
    keywords: ['about', 'team', 'company', 'automation experts', 'web development team'],
    type: 'website',
  },
}

export function generateMetadata(path: string): Metadata {
  const seoData = SEO_MAP[path] || SEO_MAP['/']
  const url = `${SITE_CONFIG.url}${path}`

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    authors: [{ name: SITE_CONFIG.creator }],
    creator: SITE_CONFIG.creator,
    publisher: SITE_CONFIG.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      url: url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: seoData.image || SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: seoData.title,
        },
      ],
      locale: 'en_US',
      type: (seoData.type === 'service' ? 'website' : seoData.type) || 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData.title,
      description: seoData.description,
      site: SITE_CONFIG.twitter,
      creator: SITE_CONFIG.twitter,
      images: [seoData.image || SITE_CONFIG.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    sameAs: [
      'https://twitter.com/horizonwebworx',
      'https://linkedin.com/company/horizonwebworx',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  provider: string
  areaServed?: string
  serviceType?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: service.provider,
    },
    areaServed: service.areaServed || 'Worldwide',
    serviceType: service.serviceType || 'Web Development',
  }
}

export function generateBookingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ReserveAction',
    name: 'Book a Demo',
    description: 'Schedule a consultation with HorizonWebWorX team',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_CONFIG.url}/booking`,
    },
    result: {
      '@type': 'Reservation',
      name: 'Demo Consultation',
    },
  }
}

// Analytics and tracking
export function hwxTrack(event: string, data?: Record<string, any>) {
  // Console logging for development
  console.log(`[HWX Analytics] ${event}`, data)
  
  // Google Analytics 4 / GTM integration
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'hwx_event',
      event_name: event,
      ...data,
    })
  }
  
  // Performance tracking for Core Web Vitals
  if (event === 'page_view' && typeof window !== 'undefined') {
    // Track LCP, INP, CLS
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      onCLS(console.log)
      onINP(console.log)
      onFCP(console.log)
      onLCP(console.log)
      onTTFB(console.log)
    }).catch(() => {
      // Graceful fallback if web-vitals is not available
    })
  }
}
