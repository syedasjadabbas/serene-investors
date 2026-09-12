import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { promoNotice } from '@/data'

type Props = {
  onDismiss: () => void
}

export function PromoBar({ onDismiss }: Props) {
  return (
    <div className="bg-accent text-accent-ink" role="region" aria-label="Announcement">
      <div className="mx-auto flex h-[var(--promo-h-open)] max-w-[var(--container-wide)] items-center justify-center gap-3 px-5 text-[13px] md:px-8 lg:px-10">
        <p className="min-w-0 truncate">
          <span>{promoNotice.text}</span>{' '}
          <Link to={promoNotice.href} className="font-medium underline underline-offset-2">
            {promoNotice.cta}
          </Link>
        </p>
        <button
          type="button"
          onClick={onDismiss}
          className="-mr-2 flex h-full min-w-11 shrink-0 items-center justify-center rounded-pill hover:bg-white/10"
          aria-label="Dismiss announcement"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  )
}
