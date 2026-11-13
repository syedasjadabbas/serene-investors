import { PageHero } from '@/global/components/page/PageHero'

export function LearnNotFound() {
  return (
    <PageHero
      eyebrow="Sample collection"
      title="This guide is not in the collection."
      body="The sample article you opened does not exist in the current Learn catalogue."
      actions={[{ label: 'Back to Learn', href: '/learn' }]}
    />
  )
}
