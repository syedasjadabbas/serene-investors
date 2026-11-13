import { PageHero } from '@/global/components/page/PageHero'

export function LegalNotFound() {
  return (
    <PageHero
      eyebrow="Fictional demonstration product"
      title="This note is not in the collection."
      body="The sample legal page you opened does not exist in this demonstration."
      actions={[{ label: 'Open Privacy', href: '/legal/privacy' }]}
    />
  )
}
