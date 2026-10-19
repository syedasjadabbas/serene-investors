import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AppProviders } from './providers/AppProviders'
import { AppShellClient } from '@/components/layout/AppShellClient'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serene Investors | Invest in Dubai and Saudi Arabia Real Estate',
  description: 'Thousands of investors worldwide use Serene Investors to access income-generating real estate deals in high-growth markets, starting from just USD 136 / AED 500.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overflow-x-clip w-full max-w-full">
      <body className="overflow-x-clip w-full max-w-full antialiased">
        <AppProviders>
          <AppShellClient>{children}</AppShellClient>
        </AppProviders>
      </body>
    </html>
  )
}
