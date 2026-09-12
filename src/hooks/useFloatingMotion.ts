import { useLayoutEffect, useRef, type RefObject } from 'react'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export type FloatLayer = {
  selector: string
  y?: number
  rotate?: number
  duration?: number
  delay?: number
}

export function useFloatingMotion(
  rootRef: RefObject<HTMLElement | null>,
  layers: FloatLayer[],
) {
  const layersRef = useRef(layers)
  layersRef.current = layers
  const key = layers
    .map((layer) => `${layer.selector}:${layer.y ?? 8}:${layer.delay ?? 0}`)
    .join('|')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || layersRef.current.length === 0) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        layersRef.current.forEach((layer) => {
          const nodes = Array.from(root.querySelectorAll(layer.selector))
          nodes.forEach((node, index) => {
            const direction = index % 2 === 0 ? 1 : -1
            gsap.to(node, {
              y: `+=${(layer.y ?? 8) * direction}`,
              rotateZ: (layer.rotate ?? 0.7) * direction,
              duration: (layer.duration ?? 5.4) + index * 0.4,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: (layer.delay ?? 0.8) + index * 0.25,
              force3D: true,
              overwrite: false,
            })
          })
        })
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [key, rootRef])
}
