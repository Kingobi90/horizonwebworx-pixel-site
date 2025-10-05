import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'accent' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  loading?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  loading = false,
  disabled,
  asChild = false,
  ...props 
}, ref) => {
  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-opacity-90',
    accent: 'bg-brand-accent text-white hover:bg-opacity-90',
    outline: 'border-2 border-brand-primary text-brand-ink bg-transparent hover:bg-brand-primary hover:text-white',
    ghost: 'text-brand-ink hover:bg-brand-primary hover:bg-opacity-10',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const buttonClasses = clsx(
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (asChild) {
    // When asChild is true, we expect children to be a single React element
    // This is a simplified version - in a real app you'd use something like Radix's Slot
    return (
      <span className={buttonClasses}>
        {children}
      </span>
    )
  }

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
})

Button.displayName = 'Button'
