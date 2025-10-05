import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'xl'
}

export function GlassCard({ 
  children, 
  className, 
  hover = false, 
  padding = 'md' 
}: GlassCardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  }

  return (
    <div
      className={clsx(
        'glass rounded-xl',
        paddingClasses[padding],
        hover && 'transition-all duration-300 hover:scale-105 hover:shadow-2xl',
        className
      )}
    >
      {children}
    </div>
  )
}
