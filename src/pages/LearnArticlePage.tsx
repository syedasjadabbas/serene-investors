import { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LearnArticleBody } from '@/components/sections/learn/LearnArticleBody'
import { LearnArticleClose } from '@/components/sections/learn/LearnArticleClose'
import { LearnArticleHero } from '@/components/sections/learn/LearnArticleHero'
import { LearnArticleRelated } from '@/components/sections/learn/LearnArticleRelated'
import { LearnNotFound } from '@/components/sections/learn/LearnNotFound'
import { getLearnGuide } from '@/data'
import { usePageMeta } from '@/hooks/usePageMeta'
import { ScrollTrigger } from '@/lib/gsap'

export function LearnArticlePage() {
  const { slug } = useParams()
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
