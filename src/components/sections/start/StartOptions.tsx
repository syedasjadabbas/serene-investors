import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getStartedOptions } from '@/data'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

function StartOptionCard({
  title,
  body,
  href,
  image,
  imageAlt,
}: (typeof getStartedOptions)[number]) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)

  return (
    <article
      ref={cardRef}
      data-reveal-item
      data-start-option
      className="group relative rounded-2xl border border-ink/[0.08] bg-surface/90 p-3 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/15 hover:shadow-xl"
    >
      <Link
        href={href}
        className="block rounded-xl text-inherit no-underline focus-visible:outline-2 focus-visible:outline-primary"
        aria-label={`${title}. ${body}`}
      >
        <div className="relative overflow-hidden rounded-xl bg-bg-warm">
          <div className="overflow-hidden">
            <img
              src={withBase(image)}
              alt={imageAlt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
        <div className="px-1.5 pt-4 pb-2">
          <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted">{body}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-300 group-hover:text-primary">
            Continue
            <ArrowRight
              size={16}
              strokeWidth={1.75}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>
    </article>
  )
}

export function StartOptions() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-start-option]', depth: true })

  return (
    <section ref={rootRef} className="start-options py-16 md:py-20" aria-labelledby="start-options-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="start-options-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Three ways in.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          Open a catalogue, or stay here and walk the sample allocation. Every path remains a
          demonstration.
        </p>

        <div className="start-options__grid mt-10 grid gap-8 md:grid-cols-3">
          {getStartedOptions.map((option) => (
            <StartOptionCard key={option.id} {...option} />
          ))}
        </div>
      </div>
    </section>
  )
}
