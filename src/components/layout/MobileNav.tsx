import { useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { primaryNav, utilityNav } from '@/data'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'

type Props = {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const close = useCallback(() => onClose(), [onClose])

  useLockBodyScroll(open)
  useFocusTrap(open, dialogRef, close, '[aria-controls="mobile-menu"]')

  if (!open) return null

  const start = utilityNav.find((item) => item.id === 'start')
  const login = utilityNav.find((item) => item.id === 'login')

  return (
    <div
      ref={dialogRef}
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-[calc(var(--header-h)+var(--promo-h))] z-[var(--z-modal)] bg-bg motion-safe:animate-[sheet-in_320ms_cubic-bezier(0.16,1,0.3,1)]"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <nav className="mx-auto flex h-full max-w-[var(--container-wide)] flex-col px-5 py-8 md:px-8">
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                onClick={onClose}
                className="flex items-center gap-2 py-3 text-2xl tracking-tight"
              >
                {item.label}
                {item.badge ? <Badge>{item.badge}</Badge> : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pb-6">
          {login ? (
            <Link to={login.href} onClick={onClose} className="inline-flex min-h-11 items-center text-sm">
              {login.label}
            </Link>
          ) : null}
          {start ? (
            <ButtonLink to={start.href} className="w-full" onClick={onClose}>
              {start.label}
            </ButtonLink>
          ) : null}
        </div>
      </nav>
    </div>
  )
}
