import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo'
import { MenuBar } from '@/components/navigation/MenuBar'
import { Footer } from '@/components/navigation/Footer'
import { JsonLd } from '@/components/JsonLd'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateSEOMetadata('/')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#E41E26" />
      </head>
      <body className={inter.className}>
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebsiteSchema()} />
        <ScrollProgress />
        <MenuBar />
        <ErrorBoundary>
          <main className="min-h-screen">
            {children}
          </main>
        </ErrorBoundary>
        <Footer />
      </body>
    </html>
  )
}
