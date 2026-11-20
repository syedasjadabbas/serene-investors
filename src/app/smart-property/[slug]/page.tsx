import { notFound } from 'next/navigation'
import { ProgrammeDetailPage } from '../_components/ProgrammeDetailPage'
import { isProgrammeId } from '../_lib/programmes'

// Only the two real programmes exist (nathia-gali, lahore); any other slug is a 404.
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!isProgrammeId(slug)) notFound()
  return <ProgrammeDetailPage id={slug} />
}
