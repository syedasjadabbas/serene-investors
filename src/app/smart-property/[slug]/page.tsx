import { notFound } from 'next/navigation'
import { ProgrammeDetailPage } from '../_components/ProgrammeDetailPage'
import { isProgrammeId, programmes } from '../_lib/programmes'

// Only the two real programmes exist (nathia-gali, lahore); any other slug is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(programmes).map((slug) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!isProgrammeId(slug)) notFound()
  return <ProgrammeDetailPage id={slug} />
}
