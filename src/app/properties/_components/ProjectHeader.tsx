import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PropertyGallery, type GalleryFrame } from './PropertyGallery'

/** Title block for a project: back link, plain header with its actions, then the gallery card. */
export function ProjectHeader({
  eyebrow,
  title,
  place,
  body,
  aside,
  frames,
  badge,
}: {
  eyebrow: string
  title: string
  place: string
  body: string
  aside?: ReactNode
  frames: GalleryFrame[]
  badge?: { top: string; bottom: string }
}) {
  return (
    <>
      <PageHeader
        back={
          <Link
            href="/properties"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full text-sm font-semibold text-sx-ink/65 transition-colors hover:text-sx-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All projects
          </Link>
        }
        eyebrow={eyebrow}
        title={title}
        body={
          <>
            <p className="font-semibold text-sx-ink">{place}</p>
            <p className="mt-2">{body}</p>
          </>
        }
        aside={aside}
      />
      <section aria-label={`${title} photos`} className="px-4 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <PropertyGallery frames={frames} label={`${title} photos`} badge={badge} />
        </div>
      </section>
    </>
  )
}
