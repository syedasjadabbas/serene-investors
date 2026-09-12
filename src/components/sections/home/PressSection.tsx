import { useRef } from 'react'
import type { PressLogo } from '@/types'
import { PressMark } from '@/components/ui/PressMark'
import { pressIntro } from '@/data'
import { usePressReveal } from '@/hooks/usePressReveal'

type Props = {
  logos: PressLogo[]
}

export function PressSection({ logos }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  usePressReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="press"
      className="home-band home-band--quiet overflow-x-clip border-y border-line bg-surface"
      aria-labelledby="press-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="mx-auto max-w-xl text-center">
          <p data-reveal-heading id="press-heading" className="home-kicker text-muted">
            {pressIntro.label}
          </p>
          <p data-reveal-heading className="mt-2 text-[0.9375rem] text-ink">
            {pressIntro.line}
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-7 sm:mt-10 lg:mt-10 lg:grid-cols-4 lg:gap-x-12">
          {logos.map((logo, index) => (
            <li key={logo.id} data-press-mark className="press-mark">
              <PressMark name={logo.name} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
