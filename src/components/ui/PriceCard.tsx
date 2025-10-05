import Link from 'next/link'
import { GlassCard } from './GlassCard'
import { Button } from './Button'
import { Badge } from './Badge'
import { clsx } from 'clsx'

interface PriceCardProps {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
  buttonHref?: string
  className?: string
}

export function PriceCard({
  name,
  price,
  description,
  features,
  popular = false,
  buttonText = 'Get Started',
  buttonHref = '/booking',
  className,
}: PriceCardProps) {
  return (
    <GlassCard
      className={clsx(
        'relative h-full',
        popular && 'ring-2 ring-brand-accent ring-opacity-50',
        className
      )}
      hover
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge variant="accent" size="sm">
            Best Value
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-brand-ink mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-brand-accent">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/mo</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start text-sm">
            <svg
              className="w-4 h-4 mr-3 mt-0.5 text-green-500 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <Button
          variant={popular ? 'accent' : 'outline'}
          size="md"
          className="w-full"
          asChild
        >
          <Link href={buttonHref}>
            {buttonText}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </div>
    </GlassCard>
  )
}
