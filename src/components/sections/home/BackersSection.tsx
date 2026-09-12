import { useRef } from 'react'
import { backerGroups, backersIntro } from '@/data'
import { useBackersReveal } from '@/hooks/useBackersReveal'

export function BackersSection() {
  const rootRef = useRef<HTMLElement>(null)
  useBackersReveal(rootRef)
  const marks = backerGroups.flatMap((group) => group.items)

  return (
    <section
      ref={rootRef}
      id="backers"
      className="home-band home-band--stage overflow-x-clip bg-bg-warm"
      aria-labelledby="backers-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="max-w-xl">
          <p data-reveal-heading className="home-kicker text-muted">
            {backersIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="backers-heading"
            className="home-heading mt-3 max-w-[12ch]"
          >
            {backersIntro.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-soft px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {backersIntro.sampleLabel}
          </p>
        </div>

        <ul className="mark-wall mt-14 list-none p-0 lg:mt-20" data-depth-stage>
          {marks.map((item) => (
            <li key={item.id} data-backer-mark>
              <p className="mark-wall__name">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
