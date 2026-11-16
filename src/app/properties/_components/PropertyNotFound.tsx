import { PageHeader } from '@/global/components/page/PageHeader'
import { PillLink } from '@/global/components/ui/PillLink'

export function PropertyNotFound() {
  return (
    <PageHeader
      eyebrow="Sample collection"
      title="This listing is not in the collection."
      highlight="not in the collection"
      body={
        <>
          <p>The sample property you opened does not exist in the current catalogue.</p>
          <PillLink href="/properties" className="mt-6">
            Back to properties
          </PillLink>
        </>
      }
    />
  )
}
