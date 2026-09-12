import { useRef } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { propertiesCta } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function PropertiesCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="properties-cta-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="properties-cta-heading"
          className="max-w-[14ch] text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
        >
          {propertiesCta.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted"
        >
          {propertiesCta.body}
        </p>
        <div data-reveal-heading className="mt-8 flex flex-wrap items-center gap-3">
          <ButtonLink to={propertiesCta.primary.href}>{propertiesCta.primary.label}</ButtonLink>
          <ButtonLink to={propertiesCta.secondary.href} variant="ghost">
            {propertiesCta.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
