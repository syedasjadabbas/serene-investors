import { useLayoutEffect, useRef, type RefObject } from 'react'
import { DEPTH_QUERY, MOBILE_MOTION_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export type ParallaxLayer = {
  selector: string
  yPercent?: number
}

export function useDepthParallax(
  rootRef: RefObject<HTMLElement | null>,
  layers: ParallaxLayer[],
) {
  const layersRef = useRef(layers)
  layersRef.current = layers
  const key = layers.map((layer) => `${layer.selector}:${layer.yPercent ?? 4}`).join('|')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || layersRef.current.length === 0) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    const bind = (scale: number) => {
      const ctx = gsap.context(() => {
        layersRef.current.forEach((layer) => {
          const nodes = root.querySelectorAll(layer.selector)
          if (nodes.length === 0) return
          const amount = (layer.yPercent ?? 7) * scale

          gsap.fromTo(
            nodes,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: 'none',
              force3D: true,
              scrollTrigger: {
                trigger: root,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.7,
              },
            },
          )
        })
      }, root)

      return () => ctx.revert()
    }

    media.add(DEPTH_QUERY, () => bind(1))
    media.add(MOBILE_MOTION_QUERY, () => bind(0.4))

    return () => media.revert()
  }, [key, rootRef])
}
