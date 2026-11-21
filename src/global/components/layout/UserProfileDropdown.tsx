'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Building2, ChevronDown, Gift, HardHat, LayoutDashboard, LogOut, Phone, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useAuth, type User } from '@/global/stores/auth'
import { cn } from '@/global/lib/cn'

export function getInitials(name?: string): string {
  if (!name) return 'SI'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

type Props = {
  user: User
  tone?: 'dark' | 'light'
}

const LINKS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/dashboard', label: 'Sample portfolio', icon: LayoutDashboard },
  { href: '/properties', label: 'Serene Heights projects', icon: Building2 },
  { href: '/owner-benefits', label: 'Owner benefits', icon: Gift },
  { href: '/progress', label: 'Construction progress', icon: HardHat },
  { href: '/contact', label: 'Contact the team', icon: Phone },
]

/** Navbar account button. Opens a panel (disclosure pattern) with account links and log out. */
export function UserProfileDropdown({ user, tone = 'dark' }: Props) {
  const router = useRouter()
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = useId()

  const initials = getInitials(user.name)
  const isInstitutional = user.investorType === 'institutional'
  const badgeLabel = isInstitutional ? 'Institutional Investor' : 'Individual Investor'

  // Close on click outside, on Escape (returning focus to the button) and when focus leaves the menu.
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

  function handleLogout() {
    setOpen(false)
    logout()
    router.push('/login')
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`Account menu for ${user.name}`}
        className={cn(
          'flex h-10 items-center gap-2 rounded-full pl-1 pr-2.5 text-left transition-colors sm:h-11 sm:pl-1.5 sm:pr-3',
          tone === 'light'
            ? open
              ? 'bg-white/25 backdrop-blur-sm'
              : 'bg-white/15 backdrop-blur-sm hover:bg-white/25'
            : open
              ? 'bg-sx-sand'
              : 'bg-sx-paper hover:bg-sx-sand',
        )}
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sx-forest font-heading text-xs font-bold text-sx-mint">
          {initials}
        </span>
        <span className="hidden min-w-0 flex-col pr-0.5 md:flex">
          <span
            className={cn(
              'max-w-[110px] truncate text-xs font-semibold leading-tight md:max-w-[130px]',
              tone === 'light' ? 'text-white' : 'text-sx-ink',
            )}
          >
            {user.name}
          </span>
          <span className={cn('truncate text-[11px] leading-tight', tone === 'light' ? 'text-white/75' : 'text-sx-ink/60')}>
            {isInstitutional ? 'Institutional' : 'Individual'}
          </span>
        </span>
        <ChevronDown
          size={14}
          aria-hidden="true"
          className={cn(
            'shrink-0 transition-transform duration-200',
            tone === 'light' ? 'text-white/80' : 'text-sx-ink/60',
            open && 'rotate-180',
          )}
        />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-0 top-[calc(100%+0.75rem)] z-50 w-72 max-w-[calc(100vw-2rem)] rounded-[20px] bg-white p-2 text-sx-ink shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
      >
        <div className="flex items-start gap-3 rounded-[14px] bg-sx-paper p-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sx-forest font-heading text-sm font-bold text-sx-mint"
          >
            {initials}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{user.name}</p>
            <p className="truncate text-xs text-sx-ink/60">{user.email}</p>
            <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-sx-mint px-2 py-0.5 text-[11px] font-semibold text-sx-ink">
              <ShieldCheck size={12} aria-hidden="true" />
              {badgeLabel}
            </span>
          </div>
        </div>

        <ul className="my-2 flex flex-col gap-0.5">
          {LINKS.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-sm font-medium transition-colors hover:bg-sx-paper"
              >
                <Icon size={16} aria-hidden="true" className="text-sx-brand" />
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="border-t border-sx-ink/[0.08] pt-2">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-[12px] px-3 py-2.5 text-left text-sm font-semibold text-red-700 transition-colors hover:bg-red-50"
          >
            <LogOut size={16} aria-hidden="true" />
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}
