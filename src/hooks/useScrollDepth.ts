import { useLayoutEffect, type RefObject } from 'react'
import { DEPTH_QUERY, MOBILE_MOTION_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

type Options = {
  selector: string
  yPercent?: number
  scale?: number
  enabled?: boolean
}

export function useScrollDepth(
  rootRef: RefObject<HTMLElement | null>,
  { selector, yPercent = 3, scale = 1.02, enabled = true }: Options,
) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!enabled || !root) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    const bind = (motionScale: number) => {
      const ctx = gsap.context(() => {
        const nodes = root.querySelectorAll(selector)
        if (nodes.length === 0) return
        const travel = yPercent * motionScale
        const startScale = 1 + (scale - 1) * motionScale

        gsap.fromTo(
          nodes,
          { yPercent: -travel, scale: startScale },
          {
            yPercent: travel,
            scale: 1,
            ease: 'none',
            force3D: true,
            scrollTrigger: {
              trigger: root,
              start: 'top 85%',
              end: 'bottom top',
              scrub: 0.8,
            },
          },
        )
      }, root)

      return () => ctx.revert()
    }

    media.add(DEPTH_QUERY, () => bind(1))
    media.add(MOBILE_MOTION_QUERY, () => bind(0.45))

    return () => media.revert()
  }, [enabled, rootRef, scale, selector, yPercent])
}
