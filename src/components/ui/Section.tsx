import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionProps {
  children: ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  id?: string
}

export function Section({ 
  children, 
  className, 
  maxWidth = 'xl', 
  padding = 'lg',
  id 
}: SectionProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full',
  }

  const paddingClasses = {
    sm: 'py-8 px-4',
    md: 'py-12 px-6',
    lg: 'py-16 px-6',
    xl: 'py-24 px-8',
  }

  return (
    <section
      id={id}
      className={clsx(
        'mx-auto',
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </section>
  )
}
