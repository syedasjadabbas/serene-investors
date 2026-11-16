import { PageHeader } from '@/global/components/page/PageHeader'
import { PillLink } from '@/global/components/ui/PillLink'

export function LearnNotFound() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        eyebrow="Sample collection"
        title="This guide is not in the collection."
        body="The sample article you opened does not exist in the current Learn catalogue."
      />
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <PillLink href="/learn">All guides</PillLink>
      </div>
    </div>
  )
}
