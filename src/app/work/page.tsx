import { Metadata } from 'next'
import { generateMetadata } from '@/lib/seo'
import { Section } from '@/components/ui/Section'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const metadata: Metadata = generateMetadata('/work')

const projects = [
  {
    title: 'StyleCo Fashion Automation',
    client: 'StyleCo',
    category: 'E-commerce Automation',
    description: 'Complete automation suite including AI customer service, inventory management, and order processing for a growing fashion boutique.',
    challenge: 'Manual order processing was taking 4+ hours daily, customer inquiries were overwhelming the small team, and inventory sync across multiple platforms was error-prone.',
    solution: 'Implemented AI chatbot for customer service, automated inventory sync across Shopify, Instagram, and wholesale portal, plus automated order processing and fulfillment notifications.',
    results: [
      '85% reduction in manual order processing time',
      '40% faster customer response times',
      '99.9% inventory sync accuracy across platforms',
      '$50K+ annual savings in operational costs'
    ],
    technologies: ['React', 'Node.js', 'Shopify API', 'OpenAI', 'Webhook Integration'],
    image: '/placeholder-styleco.jpg',
    testimonial: {
      quote: "HorizonWebWorX transformed our business. We went from drowning in manual tasks to having a fully automated system that runs itself.",
      author: "Sarah Chen, CEO"
    }
  },
  {
    title: 'TrendHub B2B Portal',
    client: 'TrendHub',
    category: 'Wholesale Platform',
    description: 'Custom B2B wholesale portal with tiered pricing, bulk ordering, and integrated CRM for fashion wholesaler.',
    challenge: 'Managing wholesale clients through email and spreadsheets was inefficient, pricing errors were common, and order tracking was manual.',
    solution: 'Built custom wholesale portal with client-specific pricing, bulk order management, automated invoicing, and integrated CRM with sales pipeline tracking.',
    results: [
      '120% increase in wholesale order volume',
      '60% faster order processing',
      '95% reduction in pricing errors',
      'Improved client satisfaction scores by 40%'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'SendGrid', 'Custom API'],
    image: '/placeholder-trendhub.jpg',
    testimonial: {
      quote: "The B2B portal revolutionized how we work with wholesale clients. Orders that used to take days now happen in minutes.",
      author: "Marcus Rodriguez, Founder"
    }
  },
  {
    title: 'RetailMax Multi-Store Integration',
    client: 'RetailMax',
    category: 'System Integration',
    description: 'Unified 5 different sales channels into one automated system with real-time inventory sync and centralized order management.',
    challenge: 'Managing inventory across 5 different platforms manually, overselling issues, and fragmented customer data across systems.',
    solution: 'Created centralized inventory management system with real-time sync to all platforms, unified customer database, and automated reorder alerts.',
    results: [
      'Unified 5 sales channels seamlessly',
      '99.9% inventory sync accuracy',
      '50% reduction in operational overhead',
      'Zero overselling incidents since launch'
    ],
    technologies: ['Python', 'Redis', 'REST APIs', 'Webhook Management', 'Database Sync'],
    image: '/placeholder-retailmax.jpg',
    testimonial: {
      quote: "Finally, one system that manages everything. We can focus on growing instead of juggling platforms.",
      author: "Emily Watson, Operations Manager"
    }
  }
]

export default function WorkPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Section maxWidth="xl" padding="xl">
        <div className="text-center mb-16">
          <Badge variant="accent" size="md" className="mb-4">
            💼 Our Work
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Real Results for
            <br />
            <span className="text-brand-accent">Real Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how we've helped fashion and retail businesses automate their operations, 
            reduce manual work, and scale their growth with custom solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.title}>
              <GlassCard padding="xl">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Project Image */}
                  <div className="order-2 lg:order-1">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-center">
                        <svg className="w-12 h-12 mx-auto mb-2 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <div className="text-gray-500 dark:text-gray-400 font-medium">
                          {project.client} Project
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-brand-ink mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                      <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                        "{project.testimonial.quote}"
                      </blockquote>
                      <div className="font-semibold text-brand-ink">
                        — {project.testimonial.author}
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="accent" size="sm">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {project.client}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-brand-ink mb-4">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-brand-ink mb-2">
                        The Challenge
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-brand-ink mb-2">
                        Our Solution
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {project.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-brand-ink mb-3">
                        Key Results
                      </h3>
                      <div className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start text-sm">
                            <svg className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <GlassCard padding="xl">
            <h2 className="text-3xl font-bold text-brand-ink mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific challenges and create 
              a custom automation solution that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/booking">
                  Start Your Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">
                  View Pricing
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  )
}
