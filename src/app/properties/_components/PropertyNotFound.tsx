import { PageHero } from '@/global/components/page/PageHero'

export function PropertyNotFound() {
  return (
    <PageHero
      eyebrow="Sample collection"
      title="This listing is not in the collection."
      highlight="not in the collection"
      body="The sample property you opened does not exist in the current catalogue."
      actions={[{ label: 'Back to properties', href: '/properties' }]}
    />
  )
}
