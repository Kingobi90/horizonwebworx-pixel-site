import Link from 'next/link'
import { GlassCard } from '../ui/GlassCard'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const caseStudies = [
  {
    title: 'Fashion Boutique Automation',
    client: 'StyleCo',
    description: 'Reduced manual order processing by 85% with AI-powered inventory sync and customer service bot.',
    results: ['85% less manual work', '40% faster order processing', '24/7 customer support'],
    image: '/placeholder-case1.jpg',
    href: '/work/styleco',
  },
  {
    title: 'B2B Wholesale Portal',
    client: 'TrendHub',
    description: 'Custom wholesale platform increased order volume by 120% with streamlined bulk ordering system.',
    results: ['120% order increase', '60% faster checkout', 'Custom pricing tiers'],
    image: '/placeholder-case2.jpg',
    href: '/work/trendhub',
  },
  {
    title: 'Multi-Store Integration',
    client: 'RetailMax',
    description: 'Unified 5 different sales channels into one automated system with real-time inventory sync.',
    results: ['5 stores unified', '99.9% sync accuracy', '50% time savings'],
    image: '/placeholder-case3.jpg',
    href: '/work/retailmax',
  },
]

export function CaseStudiesSection() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="primary" size="md" className="mb-4">
            📈 Case Studies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Real Results
            <br />
            <span className="text-brand-accent">For Real Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we've helped fashion and retail businesses automate their operations 
            and scale their growth with custom solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <GlassCard key={study.title} hover className="h-full">
              {/* Image placeholder */}
              <div className="w-full h-32 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {study.client} Project
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-brand-ink">
                    {study.title}
                  </h3>
                  <Badge variant="outline" size="sm">
                    {study.client}
                  </Badge>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {study.description}
                </p>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-brand-ink text-sm">Key Results:</h4>
                {study.results.map((result) => (
                  <div key={result} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {result}
                  </div>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={study.href}>
                  Read Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </Link>
              </Button>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link href="/work">
              View All Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
