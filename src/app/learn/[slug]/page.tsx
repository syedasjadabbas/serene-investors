import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticlePage } from '../_components/ArticlePage'
import { articlePageTitle } from '../_lib/article'
import { loadArticle } from '../_lib/articles'
import { journalSlugs } from '../_lib/journal'

type Props = { params: Promise<{ slug: string }> }

// Every Journal article is generated at build time; any other slug is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return journalSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await loadArticle(slug)
  if (!article) return {}
  const title = articlePageTitle(article)
  return {
    title,
    description: article.description,
    openGraph: { title, description: article.description, type: 'article' },
    twitter: { title, description: article.description },
  }
}

/** Loads this one article on the server and hands it to the client view. */
export default async function Page({ params }: Props) {
  const { slug } = await params
  const article = await loadArticle(slug)
  if (!article) notFound()
  return <ArticlePage article={article} />
}
