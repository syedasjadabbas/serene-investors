import { useState } from 'react'
import type { Property } from '@/global/types/property'
import { formatStatus } from '@/global/lib/format'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'

/** Main photo with a row of thumbnails. Used as the media of the property hero. */
export function PropertyGallery({ property }: { property: Property }) {
  const frames = property.gallery.length > 0 ? property.gallery : [{ src: property.image, alt: property.imageAlt }]
  const [active, setActive] = useState(0)
  const current = frames[active] ?? frames[0]

  if (!current) return null

  return (
    <div className="bg-white p-2 sm:p-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-sx-paper sm:aspect-[16/8]">
        <img
          key={current.src}
          src={withBase(current.src)}
          alt={current.alt}
          width={1800}
          height={900}
          loading={active === 0 ? 'eager' : 'lazy'}
          fetchPriority={active === 0 ? 'high' : 'auto'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-3 left-3 hidden rounded-[14px] bg-white px-4 py-3 text-sx-ink sm:block">
          <p className="text-xs font-semibold text-sx-brand">{formatStatus(property.status)}</p>
          <p className="mt-0.5 text-sm font-semibold">{property.unitsLabel}</p>
        </div>
      </div>

      {frames.length > 1 && (
        <div role="group" aria-label="Property images" className="mt-2 flex gap-2 overflow-x-auto p-0.5 sm:mt-3">
          {frames.map((image, index) => {
            const selected = index === active
            return (
              <button
                key={image.src}
                type="button"
                aria-pressed={selected}
                aria-label={`Show image ${index + 1} of ${frames.length}: ${image.alt}`}
                onClick={() => setActive(index)}
                className={cn(
                  'relative h-14 w-20 shrink-0 overflow-hidden rounded-[12px] border-2 bg-sx-paper transition-opacity sm:h-20 sm:w-28',
                  'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-sx-ink',
                  selected ? 'border-sx-brand' : 'border-transparent opacity-60 hover:opacity-100',
                )}
              >
                <img
                  src={withBase(image.src)}
                  alt=""
                  width={224}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
