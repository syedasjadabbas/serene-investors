import { useSearchParams } from 'next/navigation'
import { nathiagali, projectById } from '@/global/data/serene'

export type RelatedListing = {
  /** Shown in copy: "View project", "Continuing from Smart Property". */
  kind: 'project' | 'Smart Property'
  name: string
  href: string
  image: string
  imageAlt: string
}

/**
 * Reads the `intent`, `id` and `redirect` query params shared by /login and /signup:
 * the Serene Heights project (`intent=property&id=nathia-gali|lahore`) or Smart Property
 * (`intent=fund`) the visitor came from, where to send them after signing in, and the link to
 * the other auth page that keeps the same context.
 */
export function useAuthTarget(otherPage: '/login' | '/signup') {
  const params = useSearchParams()
  const intent = params?.get('intent')
  const relatedId = params?.get('id')
  const project = intent === 'property' && relatedId ? projectById(relatedId) : undefined

  const related: RelatedListing | undefined = project
    ? { kind: 'project', name: project.name, href: `/properties/${project.id}`, image: project.image, imageAlt: `${project.name}` }
    : intent === 'fund'
      ? {
          kind: 'Smart Property',
          name: 'Smart Property Units, Nathia Gali',
          href: '/smart-property',
          image: nathiagali.amenityGroups[0].image,
          imageAlt: 'Aerial view of the pool at Serene Heights Nathia Gali',
        }
      : undefined

  const otherHref =
    intent && relatedId ? `${otherPage}?intent=${encodeURIComponent(intent)}&id=${encodeURIComponent(relatedId)}` : otherPage

  const targetHref = params?.get('redirect') || related?.href || '/'

  return { params, related, otherHref, targetHref }
}
