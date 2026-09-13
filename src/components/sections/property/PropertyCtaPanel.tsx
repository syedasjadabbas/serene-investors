import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { useLenisControl } from '@/app/providers/LenisProvider'
import { Button, ButtonLink } from '@/components/ui/Button'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyCtaPanel({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const { scrollTo } = useLenisControl()
  useSectionReveal(rootRef)
  const canExplore = property.status === 'open' || property.status === 'funding'

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 pb-16 md:px-8 lg:px-10"
      aria-labelledby="property-cta-heading"
    >
      <div
        data-reveal-heading
        className="mx-auto max-w-[var(--container-wide)] border-t border-line pt-10"
      >
        <div className="max-w-xl">
          <h2
            id="property-cta-heading"
            className="text-[1.65rem] font-semibold tracking-[-0.03em] md:text-[1.85rem]"
          >
            {canExplore ? 'Explore this opportunity' : 'Review this sample property'}
          </h2>
          <p className="mt-3 max-w-[42ch] text-[0.95rem] leading-relaxed text-muted">
            {canExplore
              ? 'Review the sample investment structure and property information before continuing.'
              : 'This listing is shown for information only. It is not presented as an open sample allocation.'}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            {canExplore ? (
              <ButtonLink
                to={`/get-started?intent=property&id=${property.id}`}
                className="min-h-11 w-full gap-1.5 sm:w-auto"
              >
                Start with this property
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </ButtonLink>
            ) : (
              <Button
                type="button"
                className="min-h-11 w-full gap-1.5 sm:w-auto"
                onClick={() => scrollTo('#property-overview', { duration: 0.65 })}
              >
                View property information
              </Button>
            )}
            <ButtonLink to="/properties" variant="ghost" className="min-h-11 w-full sm:w-auto">
              Back to properties
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
