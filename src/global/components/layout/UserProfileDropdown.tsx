'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Building2, ChevronDown, Gift, LayoutDashboard, LogOut, Settings, ShieldCheck, type LucideIcon } from 'lucide-react'
import { useAuth, type User } from '@/global/stores/auth'
import { cn } from '@/global/lib/cn'

export function getInitials(name?: string): string {
  if (!name) return 'YK'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

type Props = {
  user: User
}

const LINKS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: '/dashboard', label: 'Portfolio dashboard', icon: LayoutDashboard },
  { href: '/properties', label: 'Explore properties', icon: Building2 },
  { href: '/rewards', label: 'Serene Rewards', icon: Gift },
  { href: '/about#contact', label: 'Account settings', icon: Settings },
]

/** Navbar account button. Opens a panel (disclosure pattern) with account links and log out. */
export function UserProfileDropdown({ user }: Props) {
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
          'flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-left transition-colors',
          open ? 'bg-sx-sand' : 'bg-sx-paper hover:bg-sx-sand',
        )}
      >
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sx-forest font-heading text-xs font-bold text-sx-mint">
          {initials}
        </span>
        <span className="flex min-w-0 flex-col pr-0.5">
          <span className="max-w-[110px] truncate text-xs font-semibold leading-tight text-sx-ink sm:max-w-[130px]">{user.name}</span>
          <span className="truncate text-[11px] leading-tight text-sx-ink/55">{isInstitutional ? 'Institutional' : 'Individual'}</span>
        </span>
        <ChevronDown size={14} aria-hidden="true" className={cn('shrink-0 text-sx-ink/50 transition-transform duration-200', open && 'rotate-180')} />
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
            <p className="truncate text-xs text-sx-ink/55">{user.email}</p>
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
