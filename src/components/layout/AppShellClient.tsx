'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useScrollToHash } from '@/hooks/useScrollToHash'
import { registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'
import { Navbar } from '@/components/navigation'
import { ScrollProgressIndicator } from './ScrollProgressIndicator'
import { StakeFooterComplete } from '@/components/footer'

type Props = {
  children: ReactNode
}

export function AppShellClient({ children }: Props) {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  useScrollToHash()

  useEffect(() => {
    registerGsapPlugins()
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return (
    <div className="min-h-[100dvh] bg-bg text-ink overflow-x-hidden w-full max-w-full flex flex-col">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgressIndicator />
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      
      {/* 1:1 Stake Top Notification Banner & Sticky Navigation Bar */}
      <Navbar />

      <main id="main" tabIndex={-1} className="w-full max-w-full overflow-x-hidden flex-1">
        {children}
      </main>
      <StakeFooterComplete />
    </div>
  )
}
