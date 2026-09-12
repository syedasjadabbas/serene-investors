import { useLayoutEffect, useRef, type RefObject } from 'react'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export type PointerTiltLayer = {
  selector: string
  x?: number
  y?: number
  rotateX?: number
  rotateY?: number
  rotateZ?: number
  z?: number
  invert?: boolean
}

type Options = {
  layers: PointerTiltLayer[]
  perspective?: number
  enabled?: boolean
}

export function usePointerTilt(
  rootRef: RefObject<HTMLElement | null>,
  { layers, perspective = 1200, enabled = true }: Options,
) {
  const layersRef = useRef(layers)
  layersRef.current = layers
  const key = layers.map((layer) => layer.selector).join('|')

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!enabled || !root || layersRef.current.length === 0) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const stage = (root.querySelector('[data-depth-stage]') as HTMLElement | null) ?? root
        gsap.set(stage, {
          transformPerspective: perspective,
          transformStyle: 'preserve-3d',
        })

        const drivers = layersRef.current.flatMap((layer) => {
          const nodes = Array.from(root.querySelectorAll<HTMLElement>(layer.selector))
          if (nodes.length === 0) return []

          gsap.set(nodes, {
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            z: layer.z ?? 0,
            rotationZ: layer.rotateZ ?? 0,
            force3D: true,
          })

          return nodes.map((node) => ({
            x: gsap.quickTo(node, 'x', { duration: 0.48, ease: 'power3.out', overwrite: 'auto' }),
            y:
              (layer.y ?? 8) === 0
                ? null
                : gsap.quickTo(node, 'y', { duration: 0.48, ease: 'power3.out', overwrite: 'auto' }),
            rotateX: gsap.quickTo(node, 'rotateX', {
              duration: 0.48,
              ease: 'power3.out',
              overwrite: 'auto',
            }),
            rotateY: gsap.quickTo(node, 'rotateY', {
              duration: 0.48,
              ease: 'power3.out',
              overwrite: 'auto',
            }),
            maxX: layer.x ?? 10,
            maxY: layer.y ?? 8,
            maxRX: layer.rotateX ?? 2,
            maxRY: layer.rotateY ?? 2.4,
            invert: layer.invert ?? false,
          }))
        })

        const onMove = (event: PointerEvent) => {
          const rect = stage.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) return
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2

          drivers.forEach((driver) => {
            const dir = driver.invert ? -1 : 1
            driver.x(nx * driver.maxX * dir)
            driver.y?.(ny * driver.maxY * dir)
            driver.rotateX(-ny * driver.maxRX * dir)
            driver.rotateY(nx * driver.maxRY * dir)
          })
        }

        const onLeave = () => {
          drivers.forEach((driver) => {
            driver.x(0)
            driver.y?.(0)
            driver.rotateX(0)
            driver.rotateY(0)
          })
        }

        stage.addEventListener('pointermove', onMove)
        stage.addEventListener('pointerleave', onLeave)

        return () => {
          stage.removeEventListener('pointermove', onMove)
          stage.removeEventListener('pointerleave', onLeave)
        }
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [enabled, key, perspective, rootRef])
}
