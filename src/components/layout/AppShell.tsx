import { Suspense, useEffect, useState, useRef, type CSSProperties } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useHeaderState } from '@/hooks/useHeaderState'
import { useScrollToHash } from '@/hooks/useScrollToHash'
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
  const location = useLocation()
  useScrollToHash()

  useEffect(() => {
    registerGsapPlugins()
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [location.pathname, promoOpen])

  return (
    <div
      className="min-h-[100dvh] bg-bg text-ink"
      style={
        {
          '--promo-h': promoOpen ? 'var(--promo-h-open)' : '0px',
        } as CSSProperties
      }
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div ref={sentinelRef} className="h-px" aria-hidden="true" />
      <div className="sticky top-0 z-[var(--z-sticky)]" data-site-sticky>
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
        <main id="main" tabIndex={-1}>
          <Suspense
            fallback={
              <div className="min-h-[70vh]" aria-busy="true" aria-live="polite">
                <span className="sr-only">Loading</span>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
