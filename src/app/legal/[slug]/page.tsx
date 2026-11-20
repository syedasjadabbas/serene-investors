import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LegalPage } from '../_components/LegalPage'
import { getLegalDoc, legalSlugs } from '../_lib/legal'

type Props = { params: Promise<{ slug: string }> }

// Only the three legal pages exist; any other slug is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const doc = getLegalDoc((await params).slug)
  return doc ? { title: `Serene Investors | ${doc.title}`, description: doc.intro } : {}
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!getLegalDoc(slug)) notFound()
  return <LegalPage slug={slug} />
}
