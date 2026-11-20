'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { withBase } from '@/global/lib/asset'

export type GalleryImage = { src: string; title: string; tag?: string }

/** Swipeable photo rail with arrow buttons, on the dark resort page. */
export function ResortGallery({ images, headingId, heading }: { images: GalleryImage[]; headingId: string; heading: string }) {
  const railRef = useRef<HTMLUListElement>(null)

  function page(direction: 1 | -1) {
    const rail = railRef.current
    const first = rail?.querySelector('li')
    if (!rail || !first) return
    rail.scrollBy({ left: direction * (first.getBoundingClientRect().width + 16), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mx-auto flex max-w-[1240px] items-end justify-between gap-6 px-4 sm:px-8">
        <h2 id={headingId} className="font-heading text-3xl font-bold tracking-[-0.02em] text-white sm:text-[2.75rem]">
          {heading}
        </h2>
        <div className="flex gap-2">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => page(dir)}
              aria-label={dir === -1 ? 'Previous photos' : 'Next photos'}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-sx-ink"
            >
              {dir === -1 ? <ChevronLeft size={20} aria-hidden="true" /> : <ChevronRight size={20} aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={railRef}
        aria-label="Photos of Serene Heights Nathia Gali"
        className="sx-rail mt-8 scroll-px-4 px-4 sm:scroll-px-[max(2rem,calc((100vw_-_1240px)/2_+_2rem))] sm:px-[max(2rem,calc((100vw_-_1240px)/2_+_2rem))]"
      >
        {images.map((image) => (
          <li key={image.src} className="w-[82vw] sm:w-[min(560px,60vw)]">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-sx-card">
              <img src={withBase(image.src)} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 bg-gradient-to-t from-sx-ink/85 to-transparent p-5 pt-16 text-white">
                {image.tag && <span className="rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{image.tag}</span>}
                <span className="font-heading text-lg font-semibold">{image.title}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}
