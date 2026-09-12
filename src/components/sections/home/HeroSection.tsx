import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { heroCopy } from '@/data'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'
import { ButtonLink } from '@/components/ui/Button'
import { useHeroDepth } from '@/hooks/useHeroDepth'
import { HeroVisual } from './HeroVisual'

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  useHeroDepth(rootRef)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const eyebrow = root.querySelector('[data-hero-eyebrow]')
    const title = root.querySelector('[data-hero-title]')
    const body = root.querySelector('[data-hero-body]')
    const cta = root.querySelector('[data-hero-cta]')
    const image = root.querySelector('[data-hero-image]')
    const cards = root.querySelectorAll('[data-hero-card]')
    const pill = root.querySelector('[data-hero-pill]')

    const ctx = gsap.context(() => {
      gsap.set([eyebrow, title, body, cta], { opacity: 0, y: 28 })
      gsap.set(image, { opacity: 0, scale: 1.08 })
      gsap.set(cards, { opacity: 0, y: 28, z: -64, rotateX: 4 })
      gsap.set(pill, { opacity: 0, y: 12, z: -24 })

      const timeline = gsap.timeline({
        defaults: { ease: 'power4.out' },
      })

      timeline
        .to(image, { opacity: 1, scale: 1, duration: 1.15, ease: 'power3.out' }, 0)
        .to(eyebrow, { opacity: 1, y: 0, duration: 0.55 }, 0.16)
        .to(title, { opacity: 1, y: 0, duration: 0.7 }, 0.26)
        .to(body, { opacity: 1, y: 0, duration: 0.55 }, 0.38)
        .to(cta, { opacity: 1, y: 0, duration: 0.5 }, 0.46)
        .to(
          cards,
          { opacity: 1, y: 0, z: 0, rotateX: 0, duration: 0.7, stagger: 0.14, overwrite: 'auto' },
          0.42,
        )
        .to(pill, { opacity: 1, y: 0, z: 0, duration: 0.45, overwrite: 'auto' }, 0.58)
    }, root)

    return () => ctx.revert()
  }, [reduced])

  return (
    <section
      ref={rootRef}
      id="hero"
      className="hero flex min-h-[calc(100dvh-var(--header-h)-var(--promo-h))] items-center overflow-x-clip px-5 py-8 md:px-8 lg:py-0 lg:pl-10 lg:pr-0"
    >
      <div className="mx-auto grid w-full items-center gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
        <div className="hero-copy order-2 w-full lg:order-1">
          <p data-hero-eyebrow className="home-kicker text-muted">
            {heroCopy.eyebrow}
          </p>
          <h1
            data-hero-title
            className="mt-5 max-w-[12ch] text-[length:var(--type-display)] font-semibold leading-[var(--lh-display)] tracking-[-0.03em] text-balance"
          >
            {heroCopy.headline}
          </h1>
          <p
            data-hero-body
            className="mt-6 max-w-[38ch] text-[length:var(--type-body)] leading-[var(--lh-body)] text-muted text-pretty"
          >
            {heroCopy.body}
          </p>
          <div
            data-hero-cta
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink to={heroCopy.primary.href} className="home-cta min-h-12 w-full px-7 text-base sm:w-auto">
              {heroCopy.primary.label}
            </ButtonLink>
            <Link
              to={heroCopy.secondary.href}
              className="inline-flex min-h-11 items-center justify-center px-1 text-center text-[0.9375rem] text-ink underline-offset-4 hover:underline sm:justify-start sm:text-left"
            >
              {heroCopy.secondary.label}
            </Link>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
