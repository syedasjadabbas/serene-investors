import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { projectById } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { ScrollTrigger } from '@/global/lib/gsap'
import { isProjectId } from '../_lib/projects'
import { LahoreDetail } from './LahoreDetail'
import { NathiaGaliDetail } from './NathiaGaliDetail'
import { PropertyNotFound } from './PropertyNotFound'

/** /properties/[slug]: only the two Serene Heights projects exist; anything else shows the not-found state. */
export function PropertyDetailPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const project = isProjectId(slug) ? projectById(slug) : undefined

  usePageMeta(
    project ? `Serene Investors | ${project.name}` : 'Serene Investors | Project not found',
    project ? `${project.name}: ${project.summary}` : 'This Serene Heights project does not exist.',
  )

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!project) return <PropertyNotFound />

  return <div key={project.id}>{project.id === 'nathia-gali' ? <NathiaGaliDetail /> : <LahoreDetail />}</div>
}
