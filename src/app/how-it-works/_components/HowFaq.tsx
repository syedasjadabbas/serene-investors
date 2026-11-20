import Link from 'next/link'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { howFaq } from '../_lib/how-page'

const LINK = 'font-semibold text-sx-ink underline underline-offset-4 hover:text-sx-brand'

export function HowFaq() {
  return (
    <PageSection labelledBy="how-faq-heading">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
        <SectionHeading
          className="md:sticky md:top-28"
          id="how-faq-heading"
          eyebrow="FAQ"
          title="Questions, answered plainly."
          highlight="answered plainly"
          body={
            <p>
              Anything else? Ask the{' '}
              <Link href="/contact" className={LINK}>
                Serene Heights team
              </Link>
              .
            </p>
          }
        />
        <FaqAccordion items={howFaq} />
      </div>
    </PageSection>
  )
}
