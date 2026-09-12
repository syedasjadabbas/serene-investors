import { useRef } from 'react'
import { BackerMark } from '@/components/cards/BackerMark'
import { backerGroups, backersIntro } from '@/data'
import { useBackersReveal } from '@/hooks/useBackersReveal'

export function BackersSection() {
  const rootRef = useRef<HTMLElement>(null)
  useBackersReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="backers"
      className="community home-band home-band--stage overflow-x-clip bg-bg"
      aria-labelledby="backers-heading"
    >
      <div className="community__shell mx-auto max-w-[var(--container-wide)]">
        <header className="community__lede">
          <h2 data-reveal-heading id="backers-heading" className="home-heading max-w-[14ch]">
            {backersIntro.heading}
          </h2>
          <p data-reveal-heading className="home-lede max-w-[46ch]">
            {backersIntro.body}
          </p>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-soft px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {backersIntro.sampleLabel}
          </p>
        </header>

        <div className="community__stage">
          <figure className="community__media m-0" data-community-media>
            <img
              src={backersIntro.image.src}
              alt={backersIntro.image.alt}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="community__board">
            {backerGroups.map((group) => (
              <section key={group.id} aria-labelledby={`backer-${group.id}`}>
                <h3 id={`backer-${group.id}`} className="community__group">
                  {group.title}
                </h3>
                <ul className="community__list">
                  {group.items.map((item) => (
                    <li key={item.id} data-backer-mark>
                      <BackerMark id={item.id} name={item.name} />
                      <p className="community__name">{item.name}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
