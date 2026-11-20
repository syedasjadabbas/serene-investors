import Link from 'next/link'
import { withBase } from '@/global/lib/asset'
import type { Programme } from '../_lib/programmes'

/**
 * Big white programme card: photo on top with dark status pills, a grey project line, the
 * programme name and label/value rows. The whole card links to the programme page.
 */
export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <article id={programme.id} className="h-full scroll-mt-28">
      <Link
        href={`/smart-property/${programme.id}`}
        className="group flex h-full flex-col rounded-[20px] bg-white p-2.5 text-sx-ink transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(14,16,15,0.35)] sm:p-3"
      >
        <div className="relative aspect-[16/11] overflow-hidden rounded-[14px] bg-sx-sand">
          <img
            src={withBase(programme.image.src)}
            alt={programme.image.alt}
            width={1200}
            height={825}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 flex flex-wrap justify-end gap-1.5">
            <span className="rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-sx-mint">From {programme.from}</span>
            <span className="rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-sx-sand">{programme.project.status}</span>
          </span>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-3 pt-5 sm:px-4 sm:pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/60">{programme.kicker}</p>
          <h3 className="mt-2 font-heading text-[1.625rem] font-bold leading-tight tracking-[-0.02em] group-hover:text-sx-forest">
            {programme.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-sx-ink/65">{programme.summary}</p>

          <dl className="mt-5 flex flex-col">
            {programme.rows.map((row) => (
              <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-sx-ink/10 py-3">
                <dt className="text-sm text-sx-ink/60">{row.label}</dt>
                <dd className="font-semibold tabular-nums">{row.value}</dd>
              </div>
            ))}
          </dl>
          <span className="mt-auto pt-3 text-sm font-semibold text-sx-brand underline-offset-4 group-hover:underline">
            View the programme
          </span>
        </div>
      </Link>
    </article>
  )
}
