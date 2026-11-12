import { useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { BackerMark } from '@/components/cards/BackerMark'
import { backerGroups, backersIntro } from '@/data'
import { useBackersReveal } from '@/hooks/useBackersReveal'
import { withBase } from '@/lib/asset'

export function BackersSection() {
  const rootRef = useRef<HTMLElement>(null)
  useBackersReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="backers"
      className="overflow-x-clip bg-bg py-16 md:py-20 lg:py-24"
      aria-labelledby="backers-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8 lg:px-10">
        <header className="max-w-[38rem]">
          <h2 data-reveal-heading id="backers-heading" className="max-w-[14ch] text-[clamp(2.35rem,4.1vw,3.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-balance">
            {backersIntro.heading}
          </h2>
          <p data-reveal-heading className="mt-5 max-w-[46ch] text-[length:var(--type-body)] leading-[var(--lh-body)] text-muted text-pretty">
            {backersIntro.body}
          </p>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-soft px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {backersIntro.sampleLabel}
          </p>
        </header>

        <div className="mt-10 grid gap-7 md:mt-[3.25rem] lg:mt-[3.75rem] lg:grid-cols-[minmax(16rem,0.82fr)_minmax(0,1.18fr)] lg:items-stretch lg:gap-0 lg:overflow-hidden lg:rounded-2xl lg:border lg:border-line lg:bg-surface">
          <figure className="m-0 overflow-hidden rounded-2xl lg:min-h-full lg:rounded-none" data-community-media>
            <img
              src={withBase(backersIntro.image.src)}
              alt={backersIntro.image.alt}
              width={900}
              height={1200}
              loading="lazy"
              decoding="async"
              className="block h-64 w-full object-cover [object-position:50%_40%] md:h-80 lg:h-full lg:min-h-[34rem]"
            />
          </figure>

          <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-10 lg:p-10">
            {backerGroups.map((group) => (
              <section key={group.id} aria-labelledby={`backer-${group.id}`}>
                <h3 id={`backer-${group.id}`} className="mb-3.5 text-[0.8125rem] font-medium text-primary">
                  {group.title}
                </h3>
                <ul className="m-0 list-none p-0">
                  {group.items.map((item) => (
                    <li key={item.id} data-backer-mark className="border-t border-line py-1">
                      <Link
                        href="/how-it-works"
                        className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 -mx-2 w-[calc(100%+1rem)] rounded-xl border border-transparent px-2.5 py-3 text-inherit no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-black/[0.06] hover:bg-black/[0.035] hover:shadow-[0_6px_16px_-4px_rgba(0,0,0,0.05)] active:scale-[0.985] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:-mx-2.5 lg:px-2.5 lg:py-4 lg:hover:bg-bg"
                        aria-label={`Explore ${item.name} (${item.category}) in our ecosystem`}
                      >
                        <BackerMark id={item.id} name={item.name} />
                        <div className="min-w-0">
                          <p className="m-0 text-[clamp(1.2rem,2.6vw,1.65rem)] font-[560] leading-snug tracking-[-0.025em] lg:text-[clamp(1.35rem,1.8vw,1.75rem)]">{item.name}</p>
                        </div>
                        <span className="flex size-[1.85rem] items-center justify-center rounded-full text-muted opacity-0 -translate-x-1 transition-all duration-200 group-hover:translate-x-0 group-hover:bg-soft group-hover:text-primary group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:bg-soft group-focus-visible:text-primary group-focus-visible:opacity-100" aria-hidden="true">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 14L14 6M14 6H7M14 6V13" />
                          </svg>
                        </span>
                      </Link>
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

