import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'accent' | 'outline' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Badge({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className 
}: BadgeProps) {
  const variantClasses = {
    primary: 'bg-brand-primary text-white',
    accent: 'bg-brand-accent text-white',
    outline: 'border border-brand-primary text-brand-ink bg-transparent',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  }

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full font-medium',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}
