'use client'

import { useState } from 'react'
import { Section } from '../ui/Section'
import { GlassCard } from '../ui/GlassCard'
import { clsx } from 'clsx'

const faqs = [
  {
    question: 'What\'s included in the automation tools?',
    answer: 'Each automation tool is a custom-built solution for your specific business needs. This could include AI chatbots, inventory sync systems, invoice processing, customer service automation, or any other repetitive task in your business.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle. We\'ll help you migrate your automations smoothly.',
  },
  {
    question: 'Do you offer custom integrations?',
    answer: 'Absolutely. Starting from the Core plan, we include custom integrations with your existing systems. This includes CRMs, ERPs, e-commerce platforms, accounting software, and more.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'Support varies by plan, from email support in Solo to 24/7 phone support in Enterprise. All plans include access to our knowledge base and community forum. Higher-tier plans get dedicated account managers.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Simple automations can be deployed within 1-2 weeks. Complex multi-system integrations typically take 4-8 weeks. We provide detailed timelines during your onboarding consultation.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees! All onboarding, training, and initial configuration are included in your monthly subscription. You only pay the monthly fee for your chosen plan.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'You own your data completely. We provide full data export in standard formats and maintain your data for 90 days after cancellation for easy migration to other systems.',
  },
  {
    question: 'Do you work with businesses outside fashion/retail?',
    answer: 'While we specialize in fashion and retail, our automation solutions work for any business with repetitive processes. Contact us to discuss your specific industry needs.',
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section maxWidth="xl" padding="xl" className="bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions about our pricing or services? Here are the most common questions we receive.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <GlassCard key={index} className="overflow-hidden">
            <button
              className="w-full text-left p-6 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-brand-ink pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={clsx(
                    'w-5 h-5 text-brand-accent transition-transform duration-200 flex-shrink-0',
                    openIndex === index ? 'rotate-180' : ''
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <div
              className={clsx(
                'overflow-hidden transition-all duration-200 ease-in-out',
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
            >
              <div className="px-6 pb-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Still have questions?
        </p>
        <a
          href="/booking"
          className="text-brand-accent hover:text-brand-primary transition-colors font-semibold"
        >
          Schedule a consultation →
        </a>
      </div>
    </Section>
  )
}
