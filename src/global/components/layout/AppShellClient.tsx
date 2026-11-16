'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollToHash } from '@/global/hooks/useScrollToHash'
import { registerGsapPlugins, ScrollTrigger } from '@/global/lib/gsap'
import { cn } from '@/global/lib/cn'
import { Navbar } from './Navbar'
import { ScrollProgressIndicator } from './ScrollProgressIndicator'
import { SereneFooter } from './SereneFooter'
import { NewsletterCard } from '@/global/components/sections/NewsletterCard'

type Props = {
  children: ReactNode
}

// Account screens end without the newsletter card.
const NO_NEWSLETTER = ['/login', '/signup', '/dashboard']

export function AppShellClient({ children }: Props) {
  const pathname = usePathname()
  // The home hero runs under the floating navbar; every other page starts below it.
  const isHome = pathname === '/'
  useScrollToHash()

  useEffect(() => {
    registerGsapPlugins()
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div className="flex min-h-[100dvh] w-full max-w-full flex-col overflow-x-clip bg-bg text-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgressIndicator />
      <Navbar overlay={isHome} />

      {/* Every page sits on a light sheet with rounded bottom corners that overlaps the dark
          footer, and (except account screens) ends with the newsletter card. */}
      <main id="main" tabIndex={-1} className="relative z-[1] -mb-10 w-full max-w-full flex-1 overflow-x-clip rounded-b-[40px] bg-sx-paper">
        <div className={cn(!isHome && 'pt-24')}>{children}</div>
        {!NO_NEWSLETTER.some((path) => pathname.startsWith(path)) && <NewsletterCard />}
      </main>
      <SereneFooter />
    </div>
  )
}
