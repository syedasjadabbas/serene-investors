import { useRef } from 'react'
import { propertiesIntro } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function PropertiesHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 pb-10 pt-16 md:px-8 lg:px-10 lg:pb-12 lg:pt-20"
      aria-labelledby="properties-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="brand-label text-muted">
          {propertiesIntro.eyebrow}
        </p>
        <h1
          data-reveal-heading
          id="properties-heading"
          className="mt-3 max-w-[16ch] text-[clamp(2rem,3.6vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {propertiesIntro.heading}
        </h1>
        <p
          data-reveal-heading
          className="mt-4 max-w-[46ch] text-[0.95rem] leading-relaxed text-muted text-pretty"
        >
          {propertiesIntro.body}
        </p>
        <p
          data-reveal-heading
          className="mt-5 inline-block rounded-pill bg-soft px-2.5 py-1 text-[11px] font-medium text-soft-ink"
        >
          {propertiesIntro.sampleLabel}
        </p>
      </div>
    </section>
  )
}
