'use client'

import { useLayoutEffect } from 'react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'
import { articlePageTitle, type Article } from '../_lib/article'
import { getJournalEntry } from '../_lib/journal'
import { ArticleBody } from './ArticleBody'
import { ArticleHero } from './ArticleHero'
import { ArticleRelated } from './ArticleRelated'

// Journal article (Pattern C): dark title band → sticky summary beside the reading column →
// related articles → green band. The article itself is loaded by the server page and passed in.
export function ArticlePage({ article }: { article: Article }) {
  usePageMeta(articlePageTitle(article), article.description)

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [article.slug])

  const entry = getJournalEntry(article.slug)

  return (
    <article key={article.slug}>
      <ArticleHero article={article} />
      <ArticleBody article={article} image={entry?.hero} />
      <ArticleRelated slug={article.slug} />
      <CtaBand
        tone="brand"
        title="Own a share of Serene Heights."
        highlight="Serene Heights"
        body="Smart Property Units in Nathia Gali start at PKR 2.25 million, with 30% down and 36 monthly instalments."
        actions={[
          { label: 'Smart Property', href: '/smart-property' },
          { label: 'Contact us', href: '/contact' },
        ]}
      />
    </article>
  )
}
