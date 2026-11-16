import { Check } from 'lucide-react'
import { PillLink } from '@/global/components/ui/PillLink'
import type { LearnGuide } from '@/global/types/learn'
import { withBase } from '@/global/lib/asset'
import { guideReadMinutes, learnDisclaimer } from '../_lib/learn'

const SECTIONS = [
  { id: 'guide-overview', title: 'The guide' },
  { id: 'guide-note', title: 'A note on sample figures' },
  { id: 'guide-next', title: 'Where to go next' },
] as const

const H2 = 'scroll-mt-28 font-heading text-[1.75rem] font-bold leading-tight tracking-[-0.02em] text-sx-ink sm:text-[2rem]'

/** Two columns: a sticky summary card on the left, the reading column on the right. */
export function LearnArticleBody({ guide }: { guide: LearnGuide }) {
  const [lead, ...rest] = guide.paragraphs
  return (
    <div className="px-4 pt-12 sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[350px_minmax(0,700px)] lg:justify-between lg:gap-16">
        <aside aria-labelledby="guide-summary-heading" className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex flex-col gap-5 rounded-[20px] bg-white p-6 sm:p-7">
            <h2 id="guide-summary-heading" className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">
              Key points
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-sx-ink/75">
              <li className="flex items-start gap-2.5">
                <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                {guide.description}
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                {guide.category} · {guideReadMinutes(guide)} min read
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                Every figure mentioned is illustrative sample data.
              </li>
            </ul>
            <nav aria-labelledby="guide-toc-heading" className="border-t border-sx-ink/10 pt-5">
              <p id="guide-toc-heading" className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-sx-ink/50">
                In this guide
              </p>
              <ol className="flex flex-col gap-0.5">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-[12px] px-3 py-2 text-sm text-sx-ink/70 transition-colors hover:bg-sx-paper hover:text-sx-ink"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <PillLink href={guide.cta.href} className="w-full sm:w-fit">
              {guide.cta.label}
            </PillLink>
          </div>
        </aside>

        <div className="flex min-w-0 flex-col gap-14 text-lg leading-[1.75] text-sx-ink/70">
          <section aria-labelledby="guide-overview" className="flex flex-col gap-6">
            <h2 id="guide-overview" className={H2}>
              {SECTIONS[0].title}
            </h2>
            <p className="text-xl leading-[1.7] text-sx-ink/80">{lead}</p>
            <div className="overflow-hidden rounded-[20px]">
              <img
                src={withBase(guide.image)}
                alt={guide.imageAlt}
                width={1400}
                height={788}
                loading="lazy"
                decoding="async"
                className="block aspect-video w-full object-cover"
              />
            </div>
            {rest.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section aria-labelledby="guide-note" className="flex flex-col gap-5">
            <h2 id="guide-note" className={H2}>
              {SECTIONS[1].title}
            </h2>
            <p className="rounded-[20px] bg-sx-sand p-5 text-base leading-relaxed text-sx-ink/75 sm:p-6">{learnDisclaimer.body}</p>
          </section>

          <section aria-labelledby="guide-next" className="flex flex-col gap-5">
            <h2 id="guide-next" className={H2}>
              {SECTIONS[2].title}
            </h2>
            <p>Carry on with the next step in the demonstration, or go back to the full list of guides.</p>
            <div className="flex flex-wrap gap-3">
              <PillLink href={guide.cta.href}>{guide.cta.label}</PillLink>
              <PillLink href="/learn" variant="outline">
                All guides
              </PillLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
