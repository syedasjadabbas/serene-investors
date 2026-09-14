import { useRef } from 'react'
import { propertiesIntro } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function PropertiesHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="properties-hero" aria-labelledby="properties-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Illustrative sample
        </p>
        <h1
          data-reveal-heading
          id="properties-heading"
          className="mt-6 max-w-[12ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
        >
          {propertiesIntro.heading}
        </h1>
        <p
          data-reveal-heading
          className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {propertiesIntro.body}
        </p>
        <div data-reveal-heading className="properties-hero__rule" />
      </div>
    </section>
  )
}
