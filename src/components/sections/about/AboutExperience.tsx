import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { aboutExperience } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

export function AboutExperience() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-about-step]', media: '[data-about-step-image]', depth: true })
  useDepthParallax(rootRef, [{ selector: '[data-about-step-image]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="about-experience py-20 px-6" aria-labelledby="about-experience-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal-heading
          id="about-experience-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
        >
          {aboutExperience.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {aboutExperience.body}
        </p>

        <ol className="about-experience__list grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 list-none p-0 m-0">
          {aboutExperience.steps.map((step) => (
            <li key={step.id} data-about-step className="about-step">
              <Link
                href={step.href}
                className="group block p-6 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-ink"
                aria-label={`${step.title}. ${step.cta}.`}
              >
                <figure className="about-step__media m-0 overflow-hidden rounded-xl mb-5 aspect-[4/3] bg-bg-warm">
                  <img
                    data-about-step-image
                    src={withBase(step.image.src)}
                    alt={step.image.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
                <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block mb-3">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-ink group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{step.body}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors">
                  {step.cta}
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
