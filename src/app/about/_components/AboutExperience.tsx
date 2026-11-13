import Link from 'next/link'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { aboutExperience } from '../_lib/about'

export function AboutExperience() {
  return (
    <PageSection tone="white" labelledBy="about-experience-heading">
      <SectionHeading
        id="about-experience-heading"
        eyebrow="The journey"
        title={aboutExperience.heading}
        highlight="connects"
        body={aboutExperience.body}
      />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {aboutExperience.steps.map((step) => (
          <li key={step.id}>
            <Link
              href={step.href}
              aria-label={`${step.title}. ${step.cta}.`}
              className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-sx-paper text-sx-ink transition-colors hover:bg-sx-sand"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={withBase(step.image.src)}
                  alt={step.image.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
                <span className="inline-flex w-fit rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">Step {step.number}</span>
                <h3 className="font-heading text-xl font-semibold tracking-[-0.015em]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-sx-ink/65">{step.body}</p>
                <span className="mt-auto flex items-center justify-between gap-3 pt-2 text-sm font-semibold">
                  {step.cta}
                  <ArrowCircle tone="dark" size="sm" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </PageSection>
  )
}
