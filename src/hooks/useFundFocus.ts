import { useLayoutEffect, type RefObject } from 'react'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

const FUND_RESTS = [
  { z: -28, zIndex: 2 },
  { z: 8, zIndex: 3 },
  { z: 36, zIndex: 4 },
] as const

export function useFundFocus(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-fund-float]'))
        if (cards.length === 0) return

        let active = -1
        let hovered = -1

        const pose = (duration = 0.62) => {
          cards.forEach((card, index) => {
            const rest = FUND_RESTS[index] ?? FUND_RESTS[0]
            const isOn = index === active
            const isHover = index === hovered
            card.dataset.fundActive = isOn ? 'true' : 'false'
            card.style.zIndex = String(isOn ? 8 : rest.zIndex)

            let z = rest.z
            let scale = 1
            if (active === -1) {
              z = rest.z + (isHover ? 10 : 0)
              scale = isHover ? 1.02 : 1
            } else if (isOn) {
              z = Math.max(rest.z + 28, 52) + (isHover ? 6 : 0)
              scale = 1.045
            } else {
              z = rest.z - 14 + (isHover ? 8 : 0)
              scale = 0.978
            }

            gsap.to(card, {
              z,
              scale,
              duration,
              ease: 'power3.out',
              overwrite: 'auto',
              force3D: true,
            })
          })
        }

        const onClick = (event: MouseEvent) => {
          const target = event.target
          if (!(target instanceof Element)) return
          if (target.closest('a')) return
          const card = target.closest<HTMLElement>('[data-fund-float]')
          if (!card || !root.contains(card)) return
          const index = cards.indexOf(card)
          if (index < 0 || index === active) return
          active = index
          pose(0.62)
        }

        const onKey = (event: KeyboardEvent) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          const card = event.target
          if (!(card instanceof HTMLElement) || !cards.includes(card)) return
          if (event.key === ' ') event.preventDefault()
          const index = cards.indexOf(card)
          if (index < 0 || index === active) return
          active = index
          pose(0.62)
        }

        const onLeave = () => {
          hovered = -1
          pose(0.5)
        }

        const enters = cards.map((_, index) => () => {
          hovered = index
          pose(0.5)
        })

        root.addEventListener('click', onClick)
        cards.forEach((card, index) => {
          card.tabIndex = 0
          card.addEventListener('keydown', onKey)
          card.addEventListener('pointerenter', enters[index])
          card.addEventListener('pointerleave', onLeave)
        })

        return () => {
          root.removeEventListener('click', onClick)
          cards.forEach((card, index) => {
            card.removeEventListener('keydown', onKey)
            card.removeEventListener('pointerenter', enters[index])
            card.removeEventListener('pointerleave', onLeave)
            card.removeAttribute('data-fund-active')
            card.removeAttribute('tabindex')
            card.style.zIndex = ''
          })
        }
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [rootRef])
}
