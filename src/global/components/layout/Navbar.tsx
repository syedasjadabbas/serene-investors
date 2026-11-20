'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { Building2, ChevronDown, LogIn, MessageCircle, User, UserPlus } from 'lucide-react'
import { menuGroups } from '@/global/data/navigation'
import { contact } from '@/global/data/serene'
import { useAuth } from '@/global/stores/auth'
import { useLenisControl } from '@/global/providers/LenisProvider'
import { cn } from '@/global/lib/cn'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { UserProfileDropdown } from './UserProfileDropdown'

type LogoTone = 'dark' | 'light'

/** `className` sets the size and position; it defaults to 20px. */
export function SereneLogo({ tone = 'dark', className = 'text-[20px]' }: { tone?: LogoTone; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Serene Investors home"
      className={cn(
        'inline-flex select-none items-center whitespace-nowrap font-heading font-extrabold uppercase leading-none tracking-[-0.03em]',
        className,
      )}
    >
      <span className={tone === 'dark' ? 'text-sx-ink' : 'text-white'}>SERENE</span>
      <span className={cn('ml-1.5', tone === 'dark' ? 'text-sx-brand' : 'text-sx-mint')}>INVESTORS</span>
    </Link>
  )
}

/** Minimal two-bar menu icon (`=`) that morphs into an X when open. */
function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span aria-hidden="true" className="relative flex h-3.5 w-[18px] flex-col justify-center">
      <span
        className={cn(
          'absolute left-0 h-[1.75px] w-full rounded-full bg-current transition-transform duration-200',
          open ? 'rotate-45' : '-translate-y-[3.5px]',
        )}
      />
      <span
        className={cn(
          'absolute left-0 h-[1.75px] w-full rounded-full bg-current transition-transform duration-200',
          open ? '-rotate-45' : 'translate-y-[3.5px]',
        )}
      />
    </span>
  )
}

/** Compact left-side pill for signed-out visitors (Account / quick links). */
function GuestQuickMenu({ tone = 'dark', onNavigate }: { tone?: LogoTone; onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return

    function handlePointerDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    function handleFocusIn(e: FocusEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [open])

  const close = () => {
    setOpen(false)
    onNavigate()
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Account and quick links"
        className={cn(
          'flex h-10 items-center gap-1 rounded-full px-2.5 transition-colors sm:h-11 sm:gap-1.5 sm:px-3.5',
          tone === 'light'
            ? open
              ? 'bg-white/25 text-white backdrop-blur-sm'
              : 'bg-white/15 text-white backdrop-blur-sm hover:bg-white/25'
            : open
              ? 'bg-sx-sand text-sx-ink'
              : 'bg-sx-paper text-sx-ink hover:bg-sx-sand',
        )}
      >
        <User size={16} strokeWidth={2} aria-hidden="true" />
        <ChevronDown
          size={14}
          strokeWidth={2.2}
          aria-hidden="true"
          className={cn(
            'transition-transform duration-200',
            tone === 'light' ? 'text-white/80' : 'text-sx-ink/60',
            open && 'rotate-180',
          )}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-[calc(100%+0.75rem)] z-50 w-64 max-w-[calc(100vw-2rem)] rounded-[20px] bg-white p-2 text-sx-ink shadow-[0_12px_40px_rgba(0,0,0,0.14)] ring-1 ring-sx-ink/[0.06]"
      >
        <ul className="flex flex-col gap-0.5">
          <li>
            <Link
              href="/login"
              onClick={close}
              className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-sx-paper"
            >
              <LogIn size={16} aria-hidden="true" className="text-sx-brand" />
              Log in
            </Link>
          </li>
          <li>
            <Link
              href="/signup"
              onClick={close}
              className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-sx-paper"
            >
              <UserPlus size={16} aria-hidden="true" className="text-sx-brand" />
              Create an account
            </Link>
          </li>
        </ul>

        <div className="my-1.5 border-t border-sx-ink/[0.08]" />

        <ul className="flex flex-col gap-0.5">
          <li>
            <Link
              href="/properties"
              onClick={close}
              className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-medium text-sx-ink/80 transition-colors hover:bg-sx-paper hover:text-sx-ink"
            >
              <Building2 size={16} aria-hidden="true" className="text-sx-ink/50" />
              Projects
            </Link>
          </li>
          <li>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-medium text-sx-ink/80 transition-colors hover:bg-sx-paper hover:text-sx-ink"
            >
              <MessageCircle size={16} aria-hidden="true" className="text-sx-ink/50" />
              WhatsApp {contact.whatsapp}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

type Props = {
  /** Start transparent over the full-bleed hero (home page) and turn white once scrolled to the next section. */
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
    const onScroll = () => {
      // Stay transparent through the full-height hero, then switch to the white bar at the second section.
      const threshold = Math.max(120, window.innerHeight - 96)
      setScrolled(window.scrollY >= threshold)
    }
    const frame = requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
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
            'relative mx-auto flex h-16 max-w-[1400px] items-center justify-between rounded-[20px] px-3 transition-[background-color,box-shadow] duration-300 sm:h-[68px] sm:px-3.5',
            menuOpen
              ? 'bg-transparent'
              : solid
                ? 'bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-sx-ink/[0.06]'
                : 'bg-transparent',
          )}
        >
          {/* Left: single pill (account dropdown when signed in, compact account/quick pill when signed out). */}
          <div className="flex shrink-0 items-center sm:min-w-0 sm:flex-1">
            {!menuOpen &&
              (isLoaded && isAuthenticated && user ? (
                <UserProfileDropdown user={user} tone={tone} />
              ) : (
                <GuestQuickMenu tone={tone} onNavigate={close} />
              ))}
          </div>

          {/* Center: bold wordmark (flex-centered between controls on phones, dead-centred on sm+). */}
          <SereneLogo
            tone={tone}
            className="text-[13px] sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:text-[20px]"
          />

          {/* Right: single pill with minimalist two-bar Menu icon. */}
          <div className="flex shrink-0 items-center justify-end sm:flex-1">
            <button
              ref={menuButtonRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((value) => !value)}
              className={cn(
                'flex h-10 items-center gap-2 rounded-full px-3.5 text-xs font-semibold transition-colors sm:h-11 sm:gap-3 sm:px-5 sm:text-sm',
                tone === 'light'
                  ? 'bg-white text-sx-ink hover:bg-sx-sand'
                  : 'bg-sx-ink text-white hover:bg-sx-forest',
              )}
            >
              <span>{menuOpen ? 'Close' : 'Menu'}</span>
              <MenuGlyph open={menuOpen} />
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
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{group.title}</p>
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
