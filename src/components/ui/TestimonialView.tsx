import { useLayoutEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Testimonial } from '@/types'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

type ViewProps = {
  item: Testimonial
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
}

type SlideProps = {
  item: Testimonial
  active: boolean
}

type ControlsProps = {
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
}

function padIndex(value: number) {
  return String(value).padStart(2, '0')
}

export function TestimonialCopy({ item }: { item: Testimonial }) {
  return (
    <>
      <blockquote className="story-quote m-0 text-ink">
        <p>“{item.quote}”</p>
      </blockquote>
      <p className="mt-10 text-lg font-medium tracking-tight">{item.name}</p>
      <p className="mt-1 text-[length:var(--type-meta)] text-muted">{item.role}</p>
      <p className="text-[length:var(--type-meta)] text-muted">{item.location}</p>
    </>
  )
}

export function TestimonialControls({ index, total, onPrev, onNext }: ControlsProps) {
  const current = padIndex(index + 1)
  const count = padIndex(total)

  return (
    <div className="mt-12 flex items-center gap-5">
      <p className="text-sm tabular-nums" aria-hidden="true">
        <span className="font-medium text-primary">{current}</span>
        <span className="text-muted"> / {count}</span>
      </p>
      <p className="sr-only">
        Fictional testimonial {index + 1} of {total}
      </p>
      <div className="flex gap-2">
        <button type="button" className="story-nav__button" onClick={onPrev}>
          <span className="sr-only">Previous fictional testimonial</span>
          <ChevronLeft size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
        <button type="button" className="story-nav__button" onClick={onNext}>
          <span className="sr-only">Next fictional testimonial</span>
          <ChevronRight size={18} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

export function TestimonialSlide({ item, active }: SlideProps) {
  return (
    <article
      className="stories-slide"
      data-stories-slide
      aria-hidden={active ? undefined : true}
    >
      <div
        className="stories-slide__inner grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20"
        data-stories-inner
        data-depth-stage
      >
        <figure
          data-story-portrait
          data-stories-portrait
          data-depth="back"
          className="story-portrait depth-lift m-0"
        >
          <img
            src={item.image}
            alt={item.imageAlt}
            width={900}
            height={1120}
            loading="eager"
            decoding="async"
          />
        </figure>

        <div data-story-quote data-stories-quote data-depth="front">
          <div className="story-pane">
            <TestimonialCopy item={item} />
          </div>
          <div className="stories-controls-spacer" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}

export function TestimonialView({ item, index, total, onPrev, onNext }: ViewProps) {
  const paneRef = useRef<HTMLDivElement>(null)
  const portraitRef = useRef<HTMLElement>(null)
  const firstRef = useRef(true)
  const busyRef = useRef(false)
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const pane = paneRef.current
    const portrait = portraitRef.current
    if (!pane || reduced) return
    if (firstRef.current) {
      firstRef.current = false
      return
    }

    registerGsapPlugins()
    const targets = portrait ? [pane, portrait] : [pane]
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, scale: 0.98, z: -30 },
        { opacity: 1, scale: 1, z: 0, duration: 0.6, ease: 'power3.out', force3D: true },
      )
    }, pane)

    return () => ctx.revert()
  }, [item.id, reduced])

  function swap(next: () => void) {
    if (busyRef.current) return
    const pane = paneRef.current
    const portrait = portraitRef.current
    if (reduced || !pane) {
      next()
      return
    }

    busyRef.current = true
    registerGsapPlugins()
    const targets = portrait ? [pane, portrait] : [pane]
    gsap.to(targets, {
      opacity: 0,
      scale: 0.98,
      z: -30,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
      onComplete: () => {
        next()
        busyRef.current = false
      },
    })
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20" data-depth-stage>
      <figure
        ref={portraitRef}
        data-story-portrait
        data-depth="back"
        className="story-portrait depth-lift m-0"
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          width={900}
          height={1120}
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div data-story-quote data-depth="front">
        <div ref={paneRef} className="story-pane" aria-live="polite" aria-atomic="true">
          <TestimonialCopy item={item} />
        </div>
        <TestimonialControls index={index} total={total} onPrev={() => swap(onPrev)} onNext={() => swap(onNext)} />
      </div>
    </div>
  )
}
