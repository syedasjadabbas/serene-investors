import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import { AppProviders } from '@/global/providers/AppProviders'
import { AppShellClient } from '@/global/components/layout/AppShellClient'
import { withBase } from '@/global/lib/asset'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3030')

const TITLE = 'Serene Investors | Invest in Serene Heights Nathia Gali and Lahore'
const DESCRIPTION =
  'Own a share of Serene Heights: Smart Property Units from PKR 2 million and hotel apartments in Nathia Gali, and smart property in the Serene Heights Lahore tower.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F3F3EF' },
    { media: '(prefers-color-scheme: dark)', color: '#0E100F' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: withBase('/favicon.svg'),
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Serene Investors',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    siteName: 'Serene Investors',
    images: [{ url: withBase('/images/serene/nathiagali/tower-forest-mist.webp'), alt: 'Serene Heights Nathia Gali' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [withBase('/images/serene/nathiagali/tower-forest-mist.webp')],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable} overflow-x-clip w-full max-w-full`}>
      <body className="overflow-x-clip w-full max-w-full antialiased">
        <AppProviders>
          <AppShellClient>{children}</AppShellClient>
        </AppProviders>
        {/* Runs before the app starts: a refresh opens at the top (the hero) instead of restoring
            the old scroll position, unless the URL points at a #section. */}
        <Script id="scroll-to-top" strategy="beforeInteractive">
          {"if('scrollRestoration' in history)history.scrollRestoration='manual';if(!location.hash)window.scrollTo(0,0);"}
        </Script>
      </body>
    </html>
  )
}
