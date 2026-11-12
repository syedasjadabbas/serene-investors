'use client'

import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/global/components/ui/Button'
import { howPageCta } from '@/global/data/how-it-works'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function HowCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="py-20 md:py-24 px-5 md:px-8 lg:px-10 bg-soft" aria-labelledby="how-cta-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Next step
        </p>
        <h2
          data-reveal-heading
          id="how-cta-heading"
          className="mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
        >
          {howPageCta.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {howPageCta.body}
        </p>
        <div data-reveal-heading className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <ButtonLink href="/properties" className="min-h-11 w-full gap-1.5 sm:w-auto">
            Explore properties
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="/funds" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Explore funds
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

