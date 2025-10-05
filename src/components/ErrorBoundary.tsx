'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-brand-bg">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-brand-ink mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're sorry, but something unexpected happened. Please refresh the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-brand-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
