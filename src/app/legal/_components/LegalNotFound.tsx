import { PageHeader } from '@/global/components/page/PageHeader'
import { PillLink } from '@/global/components/ui/PillLink'

export function LegalNotFound() {
  return (
    <div className="pb-16 sm:pb-24">
      <PageHeader
        eyebrow="Fictional demonstration product"
        title="This note is not in the collection."
        body="The sample legal page you opened does not exist in this demonstration."
      />
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <PillLink href="/legal/privacy">Open Privacy</PillLink>
      </div>
    </div>
  )
}
