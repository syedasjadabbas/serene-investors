import { useRef } from 'react'
import { aboutClarity } from '../_lib/about'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function AboutClarity() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-about-clarity-item]', depth: true })

  return (
    <section ref={rootRef} className="about-clarity py-20 px-6 bg-accent text-accent-ink" aria-labelledby="about-clarity-heading">
      <div className="about-clarity__layout max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 items-start">
        <div>
          <h2
            data-reveal-heading
            id="about-clarity-heading"
            className="max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-accent-ink"
          >
            {aboutClarity.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-[#f7f5ef]/80 text-pretty"
          >
            {aboutClarity.body}
          </p>
        </div>

        <ul className="about-clarity__list grid grid-cols-1 sm:grid-cols-2 gap-8 list-none p-0 m-0">
          {aboutClarity.points.map((point) => (
            <li key={point.id} data-about-clarity-item className="about-clarity__item p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-2 text-accent-ink">{point.title}</h3>
              <p className="text-sm text-[#f7f5ef]/80 leading-relaxed m-0">{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
