import { useLayoutEffect, type RefObject } from 'react'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useCardPointerTilt(cardRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      gsap.set(card, {
        transformPerspective: 900,
        force3D: true,
      })

      const rotateX = gsap.quickTo(card, 'rotateX', { duration: 0.42, ease: 'power3.out' })
      const rotateY = gsap.quickTo(card, 'rotateY', { duration: 0.42, ease: 'power3.out' })
      const z = gsap.quickTo(card, 'z', { duration: 0.42, ease: 'power3.out' })
      const y = gsap.quickTo(card, 'y', { duration: 0.42, ease: 'power3.out' })
      const scale = gsap.quickTo(card, 'scale', { duration: 0.42, ease: 'power3.out' })

      const onMove = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect()
        if (rect.width === 0 || rect.height === 0) return
        const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
        const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2
        rotateX(-ny * 3.2)
        rotateY(nx * 3.8)
        z(22)
        y(-6)
        scale(1.015)
      }

      const onLeave = () => {
        rotateX(0)
        rotateY(0)
        z(0)
        y(0)
        scale(1)
      }

      card.addEventListener('pointermove', onMove)
      card.addEventListener('pointerleave', onLeave)

      return () => {
        card.removeEventListener('pointermove', onMove)
        card.removeEventListener('pointerleave', onLeave)
      }
    })

    return () => media.revert()
  }, [cardRef])
}
