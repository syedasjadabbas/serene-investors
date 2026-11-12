'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Settings,
  ShieldCheck,
} from 'lucide-react'
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

export function UserProfileDropdown({ user }: Props) {
  const router = useRouter()
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const initials = getInitials(user.name)
  const isInstitutional = user.investorType === 'institutional'
  const badgeLabel = isInstitutional ? 'Institutional Investor' : 'Individual Investor'

  // Close menu on click outside or escape key
  useEffect(() => {
    if (!open) return

    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function handleLogout() {
    setOpen(false)
    logout()
    router.push('/login')
  }

  return (
    <div ref={menuRef} className="relative">
      {/* Profile Trigger Pill */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn(
          'flex items-center gap-2 rounded-xl border px-2.5 py-1.5 text-left transition-all duration-200 cursor-pointer shadow-2xs active:scale-[0.98]',
          open
            ? 'border-[#00A663] bg-[#E8F8F0]/30 ring-2 ring-[#00A663]/20'
            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/80',
        )}
      >
        <span className="flex size-7 items-center justify-center rounded-lg bg-[#00A663] font-mono text-xs font-bold text-white shadow-xs shrink-0">
          {initials}
        </span>
        <div className="flex flex-col min-w-0 pr-1">
          <span className="max-w-[110px] truncate text-xs font-bold leading-tight text-[#0D1117] sm:max-w-[130px]">
            {user.name}
          </span>
          <span className="text-[10px] leading-tight text-gray-500 font-medium truncate">
            {isInstitutional ? 'Institutional' : 'Individual'}
          </span>
        </div>
        <ChevronDown
          size={13}
          className={cn(
            'text-gray-400 transition-transform duration-200 shrink-0',
            open && 'rotate-180 text-[#00A663]',
          )}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          role="menu"
          aria-label="User account menu"
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-72 origin-top-right rounded-2xl border border-black/[0.08] bg-white p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          {/* User Header Details */}
          <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-3 border border-gray-100">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#00A663] font-mono text-sm font-bold text-white shadow-xs">
              {initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-gray-900">{user.name}</p>
              <p className="truncate text-xs text-gray-500">{user.email}</p>
              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F8F0] px-2 py-0.5 text-[10px] font-bold text-[#00A663]">
                  <ShieldCheck size={11} />
                  {badgeLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="my-1.5 h-px bg-gray-100" />

          {/* Navigation Items */}
          <div className="flex flex-col gap-0.5">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              role="menuitem"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#00A663]"
            >
              <LayoutDashboard size={15} className="text-gray-500" />
              <span>Portfolio / Dashboard</span>
            </Link>

            <Link
              href="/properties"
              onClick={() => setOpen(false)}
              role="menuitem"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#00A663]"
            >
              <span className="text-sm">🏢</span>
              <span>Explore Properties</span>
            </Link>

            <Link
              href="/rewards"
              onClick={() => setOpen(false)}
              role="menuitem"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#00A663]"
            >
              <span className="text-sm">🎁</span>
              <span>Stake Rewards</span>
            </Link>

            <Link
              href="/about#contact"
              onClick={() => setOpen(false)}
              role="menuitem"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#00A663]"
            >
              <Settings size={15} className="text-gray-500" />
              <span>Account Settings</span>
            </Link>
          </div>

          <div className="my-1.5 h-px bg-gray-100" />

          {/* Logout Action */}
          <button
            type="button"
            onClick={handleLogout}
            role="menuitem"
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-50 cursor-pointer text-left"
          >
            <LogOut size={15} />
            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  )
}
