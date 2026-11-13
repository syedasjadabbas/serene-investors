import { PageHero } from '@/global/components/page/PageHero'

export function FundNotFound() {
  return (
    <PageHero
      eyebrow="Sample collection"
      title="This fund is not in the collection."
      highlight="not in the collection"
      body="The sample fund you opened does not exist in the current catalogue."
      actions={[{ label: 'Back to funds', href: '/funds' }]}
    />
  )
}
