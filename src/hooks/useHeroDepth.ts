import { useLayoutEffect, type RefObject } from 'react'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useFloatingMotion } from '@/hooks/useFloatingMotion'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useHeroDepth(rootRef: RefObject<HTMLElement | null>) {
  usePointerTilt(rootRef, {
    perspective: 1500,
    layers: [
      { selector: '[data-hero-image]', x: 12, y: 8, rotateX: 1.8, rotateY: 2.4, z: -40, invert: true },
      { selector: '[data-hero-card="property"]', x: 16, y: 0, rotateX: 2.2, rotateY: 3, z: 36, rotateZ: -1.5 },
      { selector: '[data-hero-pill]', x: 14, y: 0, rotateX: 1.6, rotateY: 2.2, z: 44 },
      { selector: '[data-hero-card="receipt"]', x: 20, y: 0, rotateX: 2.4, rotateY: 3.4, z: 56, rotateZ: 2 },
    ],
  })

  useDepthParallax(rootRef, [
    { selector: '[data-hero-image]', yPercent: 8 },
    { selector: '[data-hero-card="property"]', yPercent: -6 },
    { selector: '[data-hero-card="receipt"]', yPercent: -9 },
  ])

  useFloatingMotion(rootRef, [
    { selector: '[data-hero-card="property"]', y: 8, rotate: 0.6, duration: 5.8, delay: 1.4 },
    { selector: '[data-hero-card="receipt"]', y: 10, rotate: 0.85, duration: 6.6, delay: 1.55 },
    { selector: '[data-hero-pill]', y: 6, rotate: 0.4, duration: 7, delay: 1.5 },
  ])

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const image = root.querySelector('[data-hero-image]')
        if (!image) return
        gsap.to(image, {
          scale: 1.045,
          duration: 16,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.6,
          force3D: true,
        })
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [rootRef])
}
