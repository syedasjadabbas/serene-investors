import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { LearnArticleBody } from './LearnArticleBody'
import { LearnArticleClose } from './LearnArticleClose'
import { LearnArticleHero } from './LearnArticleHero'
import { LearnArticleRelated } from './LearnArticleRelated'
import { LearnNotFound } from './LearnNotFound'
import { getLearnGuide } from '../_lib/learn'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'

export function LearnArticlePage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const guide = slug ? getLearnGuide(slug) : undefined

  usePageMeta(
    guide ? `SERENE INVESTORS | ${guide.title}` : 'SERENE INVESTORS | Guide not found',
    guide
      ? `${guide.description} Sample educational content for the SERENE INVESTORS demonstration.`
      : 'This sample guide does not exist in the current Learn collection.',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!guide) {
    return <LearnNotFound />
  }

  return (
    <article key={guide.slug} className="learn-article">
      <LearnArticleHero guide={guide} />
      <LearnArticleBody guide={guide} />
      <LearnArticleRelated guide={guide} />
      <LearnArticleClose />
    </article>
  )
}
