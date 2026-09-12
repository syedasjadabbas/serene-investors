import { useRef } from 'react'
import { ButtonLink } from '@/components/ui/Button'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function PropertyClosingCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip bg-soft px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="closing-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="closing-heading"
          className="max-w-[16ch] text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
        >
          Ready to explore the collection?
        </h2>
        <p data-reveal-heading className="mt-4 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted">
          Browse more sample properties or learn how the platform works.
        </p>
        <div data-reveal-heading className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink to="/properties" className="min-h-11 w-full sm:w-auto">
            View all properties
          </ButtonLink>
          <ButtonLink to="/how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">
            How it works
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
