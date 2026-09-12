import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

type Selectors = {
  heading?: string
  items?: string
  media?: string
  depth?: boolean
}

export function useSectionReveal(
  rootRef: RefObject<HTMLElement | null>,
  { heading = '[data-reveal-heading]', items = '[data-reveal-item]', media, depth = false }: Selectors = {},
) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headingNodes = heading ? root.querySelectorAll(heading) : []
    const itemNodes = items ? root.querySelectorAll(items) : []
    const mediaNodes = media ? root.querySelectorAll(media) : []

    const ctx = gsap.context(() => {
      if (headingNodes.length) {
        gsap.set(headingNodes, { opacity: 0, y: 14 })
        gsap.to(headingNodes, {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 80%',
            once: true,
          },
        })
      }

      if (itemNodes.length) {
        gsap.set(itemNodes, {
          opacity: 0,
          y: depth ? 22 : 16,
          scale: depth ? 0.96 : 1,
          z: depth ? -24 : 0,
        })
        gsap.to(itemNodes, {
          opacity: 1,
          y: 0,
          scale: 1,
          z: 0,
          duration: 0.55,
          stagger: depth ? 0.12 : 0.09,
          ease: 'power4.out',
          force3D: depth,
          scrollTrigger: {
            trigger: root,
            start: 'top 74%',
            once: true,
          },
        })
      }

      if (mediaNodes.length) {
        gsap.set(mediaNodes, { opacity: 0, scale: 1.03 })
        gsap.to(mediaNodes, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 74%',
            once: true,
          },
        })
      }
    }, root)

    return () => ctx.revert()
  }, [depth, heading, items, media, reduced, rootRef])
}
