'use client'

import { useId, useState } from 'react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'

type Row = { title: string; body: string }

/**
 * A looping video (or photo) card beside a stack of rows; clicking a row opens it. Used for
 * "how you earn" style explanations on product pages.
 */
export function VideoExplainer({
  heading,
  headingId,
  rows,
  video,
  poster,
}: {
  heading: string
  headingId?: string
  rows: Row[]
  video?: string
  poster: { src: string; alt: string }
}) {
  const [open, setOpen] = useState(0)
  const still = usePrefersReducedMotion()
  const baseId = useId()

  return (
    <div className="mx-auto grid max-w-[1240px] gap-4 md:grid-cols-2">
      <div className="relative min-h-[320px] overflow-hidden rounded-[30px] bg-sx-ink md:min-h-[600px]">
        {video && !still ? (
          <video className="absolute inset-0 h-full w-full object-cover" src={withBase(video)} poster={withBase(poster.src)} autoPlay muted loop playsInline aria-hidden="true" />
        ) : (
          <img src={withBase(poster.src)} alt={poster.alt} className="absolute inset-0 h-full w-full object-cover" />
        )}
      </div>
      <div className="flex flex-col justify-center gap-3">
        <h2 id={headingId} className="mb-3 font-heading text-3xl font-bold tracking-[-0.02em] text-sx-ink sm:text-[2.2rem]">
          {heading}
        </h2>
        {rows.map((row, index) => {
          const isOpen = open === index
          const panelId = `${baseId}-${index}`
          return (
            <div key={row.title} className={cn('rounded-[14px] bg-white transition-shadow', isOpen && 'shadow-[0_12px_40px_rgba(14,16,15,0.08)]')}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(index)}
                className="flex w-full items-center gap-4 px-6 py-5 text-left"
              >
                <span className={cn('size-2.5 shrink-0 rounded-full transition-colors', isOpen ? 'bg-sx-brand' : 'bg-sx-ink/20')} aria-hidden="true" />
                <span className="font-heading text-xl font-semibold text-sx-ink sm:text-2xl">{row.title}</span>
              </button>
              <div id={panelId} inert={!isOpen} className={cn('grid transition-[grid-template-rows] duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pl-[3.1rem] text-base leading-relaxed text-sx-ink/65">{row.body}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
