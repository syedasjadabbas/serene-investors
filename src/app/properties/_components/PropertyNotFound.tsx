import { PageHeader } from '@/global/components/page/PageHeader'
import { PillLink } from '@/global/components/ui/PillLink'

export function PropertyNotFound() {
  return (
    <PageHeader
      eyebrow="Projects"
      title="This project is not on our list."
      highlight="not on our list"
      body={
        <>
          <p>Serene Heights has two projects: Serene Heights Nathia Gali and Serene Heights Lahore.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PillLink href="/properties/nathia-gali">Nathia Gali</PillLink>
            <PillLink href="/properties/lahore" variant="brand">
              Lahore
            </PillLink>
            <PillLink href="/properties" variant="outline">
              All projects
            </PillLink>
          </div>
        </>
      }
    />
  )
}
