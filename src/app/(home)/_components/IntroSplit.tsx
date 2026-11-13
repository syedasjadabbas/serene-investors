'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'
import { intro } from '../_lib/home'

export function IntroSplit() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref, { media: '[data-reveal-media]' })

  return (
    <section ref={ref} aria-labelledby="intro-heading" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[20px] bg-sx-card md:grid-cols-2">
        <div data-reveal-media className="relative min-h-[280px] md:min-h-[520px]">
          <img
            src={withBase(intro.image)}
            alt={intro.imageAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
          <span data-reveal-item className="w-fit rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">
            {intro.tag}
          </span>
          <h2
            id="intro-heading"
            data-reveal-heading
            className="font-heading text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl"
          >
            {intro.heading}
          </h2>
          {intro.paragraphs.map((text) => (
            <p key={text} data-reveal-item className="max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {text}
            </p>
          ))}
          <Link
            data-reveal-item
            href={intro.cta.href}
            className="group mt-2 flex w-fit items-center gap-4 rounded-full bg-sx-brand py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest"
          >
            {intro.cta.label}
            <ArrowCircle tone="light" size="sm" />
          </Link>
        </div>
      </div>
    </section>
  )
}
