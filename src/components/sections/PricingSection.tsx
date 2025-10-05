import { Section } from '../ui/Section'
import { PriceCard } from '../ui/PriceCard'
import { Badge } from '../ui/Badge'

const pricingPlans = [
  {
    name: 'Solo',
    price: '$199',
    description: 'Perfect for small businesses starting their automation journey',
    features: [
      '1 automation tool',
      'Email support',
      'Self-serve onboarding',
      'Basic integrations',
      'Monthly usage reports',
    ],
  },
  {
    name: 'Starter',
    price: '$499',
    description: 'Ideal for growing businesses ready to scale operations',
    features: [
      'Up to 2 automation tools',
      'Email + chat support',
      'Basic integrations (Shopify, Google, WhatsApp)',
      '1 guided onboarding session',
      'Weekly usage reports',
      'Basic analytics dashboard',
    ],
  },
  {
    name: 'Core',
    price: '$799',
    description: 'For established businesses with complex workflows',
    features: [
      'Up to 3 automation tools',
      'Priority chat support',
      'Up to 2 custom integrations',
      '2 guided onboarding sessions',
      'Basic reporting & analytics',
      'Monthly optimization review',
    ],
  },
  {
    name: 'Growth',
    price: '$1,200',
    description: 'Most popular plan for scaling fashion/retail businesses',
    popular: true,
    features: [
      'Up to 6 automation tools',
      'Priority email/chat/phone support',
      'Advanced integrations (CRM/ERP/AI bot)',
      'Dedicated account manager',
      'Quarterly business reviews',
      'Advanced analytics & reporting',
      'Custom workflow design',
    ],
  },
  {
    name: 'Pro',
    price: '$2,400',
    description: 'Advanced automation for high-volume operations',
    features: [
      'Up to 15 automation tools',
      'All Growth features included',
      'Custom workflow design',
      'Legacy system integrations',
      'Monthly optimization sessions',
      'Priority feature requests',
      'White-label options',
    ],
  },
  {
    name: 'Scale',
    price: '$3,600',
    description: 'Enterprise-grade automation with premium support',
    features: [
      'Up to 25 automation tools',
      'Skills/intent routing',
      'Multi-brand support',
      'SSO integration',
      'Monthly operations reviews',
      'Sandbox environment',
      'Premium SLA (99.9% uptime)',
      'Custom integrations included',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Unlimited automation for large organizations',
    features: [
      'Unlimited automation tools',
      '24/7 support with Enterprise SLA (99.99%)',
      'Custom integrations & security',
      'On-site onboarding & training',
      'Dedicated solutions architect',
      'Custom contract terms',
      'Multi-region deployment',
      'Advanced compliance (SOC2, HIPAA)',
    ],
    buttonText: 'Contact Sales',
  },
]

export function PricingSection() {
  return (
    <Section maxWidth="2xl" padding="xl">
      <div className="text-center mb-16">
        <Badge variant="accent" size="md" className="mb-4">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Pricing
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
          Transparent Pricing
          <br />
          <span className="text-brand-accent">For Every Business Size</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Choose the perfect plan for your business. All plans include our core automation platform, 
          with additional features and support as you scale.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
        {pricingPlans.slice(0, 4).map((plan) => (
          <PriceCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            buttonText={plan.buttonText}
          />
        ))}
      </div>

      {/* Additional Plans */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pricingPlans.slice(4).map((plan) => (
          <PriceCard
            key={plan.name}
            name={plan.name}
            price={plan.price}
            description={plan.description}
            features={plan.features}
            popular={plan.popular}
            buttonText={plan.buttonText}
          />
        ))}
      </div>

      {/* Additional Services */}
      <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <h3 className="text-xl font-bold text-brand-ink mb-4">
          Additional Services Available
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We also offer Google Profile optimization and SEO services to improve your Google ranking 
          and drive more organic traffic to your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>• Google My Business optimization</span>
          <span>• Local SEO</span>
          <span>• Technical SEO audits</span>
          <span>• Content strategy</span>
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="text-center mt-12 p-6 border border-green-200 dark:border-green-800 rounded-xl bg-green-50 dark:bg-green-900 dark:bg-opacity-20">
        <div className="flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
            30-Day Money-Back Guarantee
          </h3>
        </div>
        <p className="text-green-700 dark:text-green-300">
          Not satisfied with your automation? Get a full refund within 30 days, no questions asked.
        </p>
      </div>
    </Section>
  )
}
