import Link from 'next/link'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { getStartedOptions } from '../_lib/get-started'

export function StartOptions() {
  return (
    <PageSection labelledBy="start-options-heading" pad="bottom">
      <SectionHeading
        id="start-options-heading"
        eyebrow="Pick a path"
        title="Three ways in."
        highlight="ways in"
        body="Open a catalogue, or stay here and walk the sample allocation. Every path remains a demonstration."
      />

      <ul className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-3">
        {getStartedOptions.map((option) => (
          <li key={option.id}>
            <Link
              href={option.href}
              className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white text-sx-ink transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(14,16,15,0.35)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-sx-sand">
                <img
                  src={withBase(option.image)}
                  alt={option.imageAlt}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 p-5 sm:p-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">{option.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-sx-ink/65">{option.body}</p>
                </div>
                <ArrowCircle tone="dark" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
