import Link from 'next/link'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Eyebrow } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { site } from '@/global/data/site'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import type { RelatedListing } from '../_lib/useAuthTarget'

// Shared building blocks for /login and /signup: the page frame, form fields, buttons and messages.

const DEFAULT_ASIDE = {
  image: '/images/journey/dubai-marina.jpg',
  imageAlt: 'Dubai Marina towers along the water',
}

/** White form card on the paper background, with a photo panel beside it on wide screens. */
export function AuthShell({ children, related }: { children: ReactNode; related?: RelatedListing }) {
  const image = related?.image ?? DEFAULT_ASIDE.image
  const imageAlt = related?.imageAlt ?? DEFAULT_ASIDE.imageAlt

  return (
    <section className="px-4 pb-16 pt-6 sm:px-8 sm:pb-24 sm:pt-10">
      <div className="mx-auto grid max-w-[1240px] gap-4 lg:grid-cols-[minmax(0,480px)_minmax(0,1fr)] lg:justify-center">
        <div className="mx-auto w-full max-w-[480px] rounded-[20px] bg-white p-6 text-sx-ink sm:p-10">{children}</div>

        <aside
          aria-label={related ? `Sample ${related.kind} you came from` : undefined}
          aria-hidden={related ? undefined : true}
          className="relative hidden min-h-[560px] overflow-hidden rounded-[20px] bg-sx-forest lg:block"
        >
          <img src={withBase(image)} alt={related ? imageAlt : ''} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-sx-ink/85 via-sx-ink/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-10 text-white">
            {related ? (
              <>
                <Eyebrow>Sample {related.kind}</Eyebrow>
                <p className="font-heading text-3xl font-bold tracking-[-0.025em]">{related.name}</p>
                <PillLink href={related.href} variant="light">
                  View {related.kind}
                </PillLink>
              </>
            ) : (
              <>
                <Eyebrow>{site.name}</Eyebrow>
                <p className="max-w-md font-heading text-3xl font-bold leading-[1.1] tracking-[-0.025em]">
                  Own a share of income-generating property.
                </p>
              </>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}

/** Small "Continuing from…" note shown above the form (all screen sizes). */
export function RelatedNotice({ related }: { related?: RelatedListing }) {
  if (!related) return null
  return (
    <p className="mt-5 flex items-center justify-between gap-3 rounded-[12px] bg-sx-paper px-4 py-3 text-sm text-sx-ink/70">
      <span>
        Continuing from sample {related.kind}: <strong className="font-semibold text-sx-ink">{related.name}</strong>
      </span>
      <Link href={related.href} className="shrink-0 font-semibold text-sx-brand underline underline-offset-4 hover:text-sx-forest">
        View
      </Link>
    </p>
  )
}

/** Card heading block: eyebrow, the page's h1 and a short line under it. */
export function AuthHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-3">
      <Eyebrow tone="sand">{eyebrow}</Eyebrow>
      <h1 className="font-heading text-3xl font-bold leading-[1.05] tracking-[-0.025em] sm:text-4xl">{title}</h1>
      {children && <p className="text-base leading-relaxed text-sx-ink/65">{children}</p>}
    </div>
  )
}

export const inputClass =
  'w-full rounded-[12px] bg-sx-paper px-4 py-3 text-base text-sx-ink outline-none ring-sx-brand transition-shadow placeholder:text-sx-ink/40 focus:ring-2 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-600'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  hint?: string
  /** Rendered under the input and linked with aria-describedby. */
  message?: ReactNode
  messageId?: string
}

/** Labelled input in the site's form style. */
export function TextField({ id, label, hint, message, messageId, className, ...input }: FieldProps) {
  const hintId = hint ? `${id}-hint` : undefined
  const describedBy = [hintId, message ? messageId : undefined].filter(Boolean).join(' ') || undefined
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-sx-ink">
          {label}
        </label>
        {hint && (
          <span id={hintId} className="text-xs text-sx-ink/50">
            {hint}
          </span>
        )}
      </div>
      <input id={id} aria-describedby={describedBy} className={inputClass} {...input} />
      {message}
    </div>
  )
}

/** Full-width dark primary button with an inline busy state. */
export function SubmitButton({ busy, busyLabel, children, disabled }: { busy?: boolean; busyLabel: string; children: ReactNode; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={busy || disabled}
      aria-busy={busy || undefined}
      className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-sx-ink py-3.5 text-base font-semibold text-white transition-colors hover:bg-sx-forest disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:bg-sx-ink"
    >
      {busy ? (
        <>
          <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          {busyLabel}
        </>
      ) : (
        children
      )}
    </button>
  )
}

/** Error box announced to screen readers as soon as it appears. */
export function FormAlert({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p id={id} role="alert" className="rounded-[12px] bg-red-50 px-4 py-3 text-sm text-red-700">
      {children}
    </p>
  )
}

export const textLinkClass = 'font-semibold text-sx-brand underline underline-offset-4 transition-colors hover:text-sx-forest'

/** Regulatory line at the foot of each auth card. Uses the site-wide disclaimer. */
export function AuthFootnote() {
  return <p className="mt-8 border-t border-sx-ink/10 pt-5 text-xs leading-relaxed text-sx-ink/50">{site.disclaimer}</p>
}

/** Confirmation shown after sign-in or sign-up, before the automatic redirect. */
export function AuthSuccess({ title, children, actions }: { title: string; children: ReactNode; actions: ReactNode }) {
  return (
    <div role="status" className="flex flex-col items-center gap-4 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-sx-mint text-sx-ink">
        <CheckCircle2 size={28} aria-hidden="true" />
      </span>
      <h1 className="font-heading text-3xl font-bold tracking-[-0.025em]">{title}</h1>
      <div className="text-base leading-relaxed text-sx-ink/65">{children}</div>
      <div className="mt-2 flex w-full flex-col items-center gap-3">{actions}</div>
    </div>
  )
}
