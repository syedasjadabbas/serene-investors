import { useRef, useState } from 'react'
import type { Testimonial } from '@/types'
import { TestimonialView } from '@/components/ui/TestimonialView'
import { testimonialsIntro } from '@/data'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useScrollDepth } from '@/hooks/useScrollDepth'
import { useTestimonialsReveal } from '@/hooks/useTestimonialsReveal'

type Props = {
  items: Testimonial[]
}

export function TestimonialsSection({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const [index, setIndex] = useState(0)
  useTestimonialsReveal(rootRef)
  useScrollDepth(rootRef, { selector: '[data-story-portrait] img', yPercent: 5, scale: 1.02 })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-story-portrait]', x: 8, y: 6, rotateX: 1.6, rotateY: 2, z: -16, invert: true },
      { selector: '[data-story-quote]', x: 10, y: 7, rotateX: 1.2, rotateY: 1.6, z: 20 },
    ],
  })

  const total = items.length
  const item = items[index]

  if (!item || total === 0) return null

  function showPrev() {
    setIndex((current) => (current - 1 + total) % total)
  }

  function showNext() {
    setIndex((current) => (current + 1) % total)
  }

  return (
    <section
      ref={rootRef}
      id="stories"
      className="home-band home-band--stage overflow-x-clip bg-soft"
      aria-labelledby="stories-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading id="stories-heading" className="home-kicker text-muted">
          {testimonialsIntro.eyebrow}
        </p>

        <div className="mt-10 lg:mt-14">
          <TestimonialView
            item={item}
            index={index}
            total={total}
            onPrev={showPrev}
            onNext={showNext}
          />
        </div>
      </div>
    </section>
  )
}
