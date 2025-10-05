import Link from 'next/link'
import { GlassCard } from '../ui/GlassCard'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const websites = [
  {
    title: 'Fashion Storefronts',
    description: 'Beautiful, conversion-optimized e-commerce sites for fashion brands with inventory management.',
    features: ['Mobile-First Design', 'Payment Integration', 'Inventory Management', 'SEO Optimized'],
    icon: '👗',
    price: 'From $2,400',
  },
  {
    title: 'B2B Portals',
    description: 'Wholesale portals with client management, order processing, and custom pricing tiers.',
    features: ['Client Dashboard', 'Bulk Ordering', 'Custom Pricing', 'Order Tracking'],
    icon: '🏢',
    price: 'From $3,600',
  },
  {
    title: 'Booking Platforms',
    description: 'Professional booking systems for services, appointments, and event management.',
    features: ['Calendar Integration', 'Payment Processing', 'Automated Reminders', 'Analytics'],
    icon: '📅',
    price: 'From $1,800',
  },
]

export function WebsitesSection() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="accent" size="md" className="mb-4">
            🌐 Websites
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Custom Websites
            <br />
            <span className="text-brand-accent">Built for Performance</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From fashion storefronts to B2B portals, we build websites that convert visitors 
            into customers and scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {websites.map((website, index) => (
            <GlassCard key={website.title} hover className="h-full">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{website.icon}</div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">
                  {website.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {website.description}
                </p>
                <div className="text-brand-accent font-semibold text-lg">
                  {website.price}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {website.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/work">
                  View Examples
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link href="/booking">
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
