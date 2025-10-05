'use client'

import { useState, useEffect } from 'react'
import { clsx } from 'clsx'

interface CalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
  availableDates: Date[]
  className?: string
}

export function Calendar({ selectedDate, onDateSelect, availableDates, className }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
  const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
  const startOfWeek = new Date(startOfMonth)
  startOfWeek.setDate(startOfMonth.getDate() - startOfMonth.getDay())

  const days = []
  const current = new Date(startOfWeek)

  // Generate calendar days
  for (let i = 0; i < 42; i++) {
    days.push(new Date(current))
    current.setDate(current.getDate() + 1)
  }

  const isDateAvailable = (date: Date) => {
    return availableDates.some(availableDate => 
      availableDate.toDateString() === date.toDateString()
    )
  }

  const isDateSelected = (date: Date) => {
    return selectedDate?.toDateString() === date.toDateString()
  }

  const isDateInCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth()
  }

  const isPastDate = (date: Date) => {
    return date < today
  }

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className={clsx('bg-white dark:bg-gray-800 rounded-lg p-4', className)} role="grid">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-lg font-semibold text-brand-ink">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isAvailable = isDateAvailable(day)
          const isSelected = isDateSelected(day)
          const isCurrentMonth = isDateInCurrentMonth(day)
          const isPast = isPastDate(day)
          const isToday = day.toDateString() === today.toDateString()

          return (
            <button
              key={index}
              onClick={() => {
                if (isAvailable && !isPast) {
                  onDateSelect(day)
                }
              }}
              disabled={!isAvailable || isPast}
              className={clsx(
                'h-10 w-10 text-sm rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent',
                {
                  // Base styles
                  'text-gray-400 dark:text-gray-600': !isCurrentMonth,
                  'text-brand-ink': isCurrentMonth && !isSelected,
                  
                  // Today indicator
                  'ring-2 ring-brand-accent ring-opacity-50': isToday && !isSelected,
                  
                  // Available dates
                  'hover:bg-brand-accent hover:bg-opacity-10 cursor-pointer': isAvailable && !isPast && !isSelected,
                  
                  // Selected date
                  'bg-brand-accent text-white': isSelected,
                  
                  // Unavailable/past dates
                  'opacity-30 cursor-not-allowed': !isAvailable || isPast,
                  
                  // Available date indicator
                  'relative': isAvailable && !isPast && !isSelected,
                }
              )}
              aria-label={`${day.toLocaleDateString()}, ${isAvailable ? 'available' : 'unavailable'}`}
              role="gridcell"
            >
              {day.getDate()}
              {isAvailable && !isPast && !isSelected && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-brand-accent rounded-full" />
              )}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-brand-accent rounded-full mr-1" />
          Available
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mr-1" />
          Unavailable
        </div>
      </div>
    </div>
  )
}
