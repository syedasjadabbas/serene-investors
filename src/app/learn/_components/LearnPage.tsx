import Link from 'next/link'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { howPageFaq } from '@/global/data/how-it-works'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { featuredLearnGuide, learnCta, learnDisclaimer, learnGuides, learnIntro } from '../_lib/learn'
import { LearnFeatured } from './LearnFeatured'
import { LearnGuideCard } from './LearnGuideCard'

const FAQ_ITEMS = howPageFaq.map((item) => ({ q: item.question, a: item.answer }))

export function LearnPage() {
  usePageMeta(
    'SERENE INVESTORS | Learn',
    `${learnIntro.body} All guides on this demonstration platform are fictional.`,
  )

  const moreGuides = learnGuides.filter((guide) => guide.slug !== featuredLearnGuide.slug)

  return (
    <>
      <PageHero eyebrow="Illustrative sample" title={learnIntro.heading} highlight="Learn" body={learnIntro.body} />

      <LearnFeatured />

      <PageSection labelledBy="learn-resources-heading">
        <SectionHeading
          id="learn-resources-heading"
          title="More guides in the collection."
          highlight="guides"
          body="Short notes, written from the same sample catalogues and demonstration flow already on the site."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreGuides.map((guide) => (
            <li key={guide.id}>
              <LearnGuideCard guide={guide} id={guide.anchor} />
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="faq" labelledBy="learn-faq-heading" pad="bottom" className="scroll-mt-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading id="learn-faq-heading" eyebrow="Illustrative sample" title="Questions, in brief." body={learnDisclaimer.body} />
            <p className="text-sm leading-relaxed text-sx-ink/65">
              The same answers also sit on{' '}
              <Link href="/how-it-works" className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand">
                How it works
              </Link>{' '}
              and in the{' '}
              <Link href="/legal/risks" className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand">
                sample key risks
              </Link>
              .
            </p>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </PageSection>

      <CtaBand
        title={learnCta.heading}
        highlight="platform"
        body={learnCta.body}
        actions={[
          { label: 'Explore properties', href: '/properties' },
          { label: 'Explore funds', href: '/funds' },
        ]}
        image={{ src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' }}
      />
    </>
  )
}
