import { useRef } from 'react'
import type { LegalDoc } from '@/types/legal'
import { legalFrame } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  doc: LegalDoc
}

export function LegalHero({ doc }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <header ref={rootRef} className="legal-hero">
      <div className="legal-hero__inner mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          {legalFrame.label}
        </p>
        <h1
          data-reveal-heading
          className="mt-6 max-w-[12ch] text-[clamp(2.4rem,4.8vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance"
        >
          {doc.title}
        </h1>
        <p
          data-reveal-heading
          className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {doc.intro}
        </p>
        <div data-reveal-heading className="legal-hero__rule" />
      </div>
    </header>
  )
}
