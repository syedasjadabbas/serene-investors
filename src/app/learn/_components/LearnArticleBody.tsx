import { PageSection } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import type { LearnGuide } from '@/global/types/learn'
import { learnDisclaimer } from '../_lib/learn'

export function LearnArticleBody({ guide }: { guide: LearnGuide }) {
  return (
    <PageSection width="narrow" pad="bottom" label="Guide">
      <div className="flex flex-col gap-6 text-lg leading-relaxed text-sx-ink/80">
        {guide.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10 rounded-[20px] bg-sx-sand p-5 text-sm leading-relaxed text-sx-ink/75 sm:p-6">{learnDisclaimer.body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <PillLink href={guide.cta.href}>{guide.cta.label}</PillLink>
        <PillLink href="/learn" variant="outline">
          Back to Learn
        </PillLink>
      </div>
    </PageSection>
  )
}
