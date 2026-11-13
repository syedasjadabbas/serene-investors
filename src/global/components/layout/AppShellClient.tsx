'use client'

import { useEffect, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollToHash } from '@/global/hooks/useScrollToHash'
import { registerGsapPlugins, ScrollTrigger } from '@/global/lib/gsap'
import { cn } from '@/global/lib/cn'
import { Navbar } from './Navbar'
import { ScrollProgressIndicator } from './ScrollProgressIndicator'
import { SereneFooter } from './SereneFooter'

type Props = {
  children: ReactNode
}

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

      <main id="main" tabIndex={-1} className={cn('w-full max-w-full flex-1 overflow-x-clip', !isHome && 'pt-24')}>
        {children}
      </main>
      <SereneFooter />
    </div>
  )
}
