'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { menuGroups } from '@/global/data/navigation'
import { useAuth } from '@/global/stores/auth'
import { useLenisControl } from '@/global/providers/LenisProvider'
import { cn } from '@/global/lib/cn'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { UserProfileDropdown } from './UserProfileDropdown'

type LogoTone = 'dark' | 'light'

/** `className` sets the size and position; it defaults to 22px. */
export function SereneLogo({ tone = 'dark', className = 'text-[22px]' }: { tone?: LogoTone; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Serene Investors home"
      className={cn('inline-flex select-none items-center whitespace-nowrap font-heading font-extrabold leading-none tracking-[-0.035em]', className)}
    >
      <span className={tone === 'dark' ? 'text-sx-ink' : 'text-white'}>serene</span>
      <span className={cn('ml-1', tone === 'dark' ? 'text-sx-brand' : 'text-sx-mint')}>investors</span>
    </Link>
  )
}

type Props = {
  /** Start transparent over a full-bleed hero (home page) and turn solid once scrolled. */
  overlay?: boolean
}

export function Navbar({ overlay = false }: Props) {
  const { isAuthenticated, user, isLoaded, logout } = useAuth()
  const lenis = useLenisControl()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!overlay) return
    const onScroll = () => setScrolled(window.scrollY > 24)
    const frame = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [overlay])

  // While the menu is open: lock scrolling, close on Escape, keep focus inside.
  useEffect(() => {
    if (!menuOpen) return
    const button = menuButtonRef.current
    lenis.stop()
    document.documentElement.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
      lenis.start()
      button?.focus()
    }
  }, [menuOpen, lenis])

  const solid = !overlay || scrolled
  const tone: LogoTone = menuOpen || !solid ? 'light' : 'dark'
  const close = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[1000] px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          aria-label="Main"
          className={cn(
            'relative mx-auto flex h-16 max-w-[1400px] items-center justify-between rounded-[20px] px-3 transition-[background-color,box-shadow] duration-300 sm:px-4',
            menuOpen ? 'bg-transparent' : solid ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : 'bg-transparent',
          )}
        >
          {/* Phones: logo left, Menu right; log in and account live in the menu. */}
          <div className="hidden min-w-0 flex-1 items-center sm:flex">
            {isLoaded && isAuthenticated && user && !menuOpen ? (
              <UserProfileDropdown user={user} />
            ) : (
              <Link
                href="/login"
                onClick={close}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-semibold transition-colors',
                  tone === 'dark' ? 'text-sx-ink hover:bg-sx-paper' : 'text-white hover:bg-white/10',
                )}
              >
                Log in
              </Link>
            )}
          </div>

          <SereneLogo tone={tone} className="pl-2 text-[20px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:pl-0 sm:text-[22px]" />

          <div className="flex flex-1 items-center justify-end gap-2">
            {!(isLoaded && isAuthenticated) && (
              <Link
                href="/signup"
                onClick={close}
                className={cn(
                  'hidden rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:inline-flex',
                  tone === 'dark' ? 'bg-sx-brand text-white hover:bg-sx-forest' : 'bg-white/15 text-white hover:bg-white/25',
                )}
              >
                Sign up
              </Link>
            )}
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((value) => !value)}
              className={cn(
                'flex items-center gap-2 rounded-full py-2 pl-4 pr-3 text-sm font-semibold transition-colors',
                tone === 'dark' ? 'bg-sx-ink text-white hover:bg-sx-forest' : 'bg-white text-sx-ink hover:bg-sx-sand',
              )}
            >
              {menuOpen ? 'Close' : 'Menu'}
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen && (
        <div
          id="site-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[999] overflow-y-auto bg-sx-ink px-4 pb-10 pt-28 text-white sm:px-8 sm:pt-32"
        >
          <div className="sx-menu-in mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {menuGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">{group.title}</p>
                <ul className="mt-4 flex flex-col gap-1">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={close}
                        className="group flex items-center gap-3 py-1.5 font-heading text-2xl font-semibold tracking-[-0.02em] text-white/90 transition-colors hover:text-sx-mint sm:text-3xl"
                      >
                        {link.label}
                        {link.badge && (
                          <span className="rounded-full bg-sx-mint px-2 py-0.5 font-sans text-[11px] font-bold tracking-normal text-sx-ink">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 flex max-w-[1400px] flex-wrap gap-3 border-t border-white/10 pt-8">
            {isLoaded && isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={close}
                  className="group flex items-center gap-4 rounded-full bg-sx-brand py-1.5 pl-6 pr-1.5 font-semibold"
                >
                  Go to dashboard
                  <ArrowCircle tone="light" size="sm" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    logout()
                    close()
                  }}
                  className="rounded-full border border-white/20 px-6 py-2.5 font-semibold hover:bg-white/10"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  onClick={close}
                  className="group flex items-center gap-4 rounded-full bg-sx-brand py-1.5 pl-6 pr-1.5 font-semibold"
                >
                  Create an account
                  <ArrowCircle tone="light" size="sm" />
                </Link>
                <Link
                  href="/login"
                  onClick={close}
                  className="rounded-full border border-white/20 px-6 py-2.5 font-semibold hover:bg-white/10"
                >
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
