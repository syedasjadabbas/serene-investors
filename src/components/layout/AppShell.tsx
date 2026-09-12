import { useEffect, useState, useRef, type CSSProperties } from 'react'
import { Outlet } from 'react-router-dom'
import { useHeaderState } from '@/hooks/useHeaderState'
import { registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'
import { MobileNav } from './MobileNav'
import { PromoBar } from './PromoBar'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function AppShell() {
  const [promoOpen, setPromoOpen] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const { elevated } = useHeaderState(sentinelRef)

  useEffect(() => {
    registerGsapPlugins()
    ScrollTrigger.refresh()
  }, [promoOpen])

  return (
    <div
      className="min-h-[100dvh] bg-bg text-ink"
      style={
        {
          '--promo-h': promoOpen ? 'var(--promo-h-open)' : '0px',
        } as CSSProperties
      }
    >
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      <div className="sticky top-0 z-[var(--z-sticky)]">
        {promoOpen ? <PromoBar onDismiss={() => setPromoOpen(false)} /> : null}
        <SiteHeader
          elevated={elevated}
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen((value) => !value)}
          onMenuClose={() => setMenuOpen(false)}
        />
      </div>
      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div inert={menuOpen || undefined}>
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
