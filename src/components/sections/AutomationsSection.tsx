import Link from 'next/link'
import { GlassCard } from '../ui/GlassCard'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const automations = [
  {
    title: 'AI Receptionist',
    description: 'Intelligent customer service that handles inquiries, books appointments, and provides 24/7 support.',
    features: ['Natural Language Processing', 'Appointment Booking', 'Multi-language Support', 'CRM Integration'],
    icon: '🤖',
    href: '/ai-receptionist',
  },
  {
    title: 'Inventory Sync Bot',
    description: 'Automatically sync inventory across multiple platforms and marketplaces in real-time.',
    features: ['Real-time Sync', 'Multi-platform', 'Stock Alerts', 'Analytics Dashboard'],
    icon: '📦',
    href: '/#services',
  },
  {
    title: 'Invoice OCR → QuickBooks',
    description: 'Extract data from invoices and receipts, automatically categorize and sync to QuickBooks.',
    features: ['OCR Technology', 'Auto-categorization', 'QuickBooks Integration', 'Audit Trail'],
    icon: '📄',
    href: '/#services',
  },
]

export function AutomationsSection() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Automations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Intelligent Automation
            <br />
            <span className="text-brand-accent">That Actually Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stop doing repetitive tasks manually. Our AI-powered automations handle the boring stuff 
            so you can focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {automations.map((automation, index) => (
            <GlassCard key={automation.title} hover className="h-full">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{automation.icon}</div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">
                  {automation.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {automation.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                {automation.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={automation.href}>
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link href="/booking">
              Get Custom Automation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
