import Link from 'next/link'
import { FaqAccordion, type FaqItem } from '@/global/components/page/FaqAccordion'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { howPageFaq } from '@/global/data/how-it-works'

const LINK = 'font-semibold text-sx-ink underline underline-offset-4 hover:text-sx-brand'

const FOLLOW_UPS: Record<string, { label: string; href: string }> = {
  property: { label: 'Explore sample properties', href: '/properties' },
  funds: { label: 'Explore sample funds', href: '/funds' },
}

const ITEMS: FaqItem[] = howPageFaq.map((item) => {
  const followUp = FOLLOW_UPS[item.id]
  return {
    q: item.question,
    a: (
      <>
        <p>{item.answer}</p>
        {followUp ? (
          <p className="mt-3">
            <Link href={followUp.href} className={LINK}>
              {followUp.label}
            </Link>
          </p>
        ) : null}
      </>
    ),
  }
})

export function HowFaq() {
  return (
    <PageSection labelledBy="how-faq-heading">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHeading
          id="how-faq-heading"
          eyebrow="FAQ"
          title="Questions, answered plainly."
          highlight="answered plainly"
          body={
            <>
              <p>
                These answers stay inside what the demonstration already shows. Nothing here is financial advice or an
                invitation to invest.
              </p>
              <p className="mt-4 text-sm">
                For the longer caution, read the{' '}
                <Link href="/legal/risks" className={LINK}>
                  sample key risks
                </Link>{' '}
                or the{' '}
                <Link href="/learn" className={LINK}>
                  learn notes
                </Link>
                .
              </p>
            </>
          }
        />
        <FaqAccordion items={ITEMS} />
      </div>
    </PageSection>
  )
}
