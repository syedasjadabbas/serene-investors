import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { aboutExperience } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function AboutExperience() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-about-step]', media: '[data-about-step-image]', depth: true })
  useDepthParallax(rootRef, [{ selector: '[data-about-step-image]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="about-experience" aria-labelledby="about-experience-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="about-experience-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {aboutExperience.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {aboutExperience.body}
        </p>

        <ol className="about-experience__list">
          {aboutExperience.steps.map((step) => (
            <li key={step.id} data-about-step className="about-step">
              <Link
                to={step.href}
                className="about-step__link"
                aria-label={`${step.title}. ${step.cta}.`}
              >
                <figure className="about-step__media m-0">
                  <img
                    data-about-step-image
                    src={step.image.src}
                    alt={step.image.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
                <p className="about-step__number">{step.number}</p>
                <h3>{step.title}</h3>
                <p className="about-step__body">{step.body}</p>
                <span className="about-step__action">
                  {step.cta}
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
