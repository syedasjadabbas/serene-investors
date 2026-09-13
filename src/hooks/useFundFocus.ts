import { useLayoutEffect, type RefObject } from 'react'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

const FUND_RESTS = [
  { z: -28, zIndex: 2 },
  { z: 8, zIndex: 3 },
  { z: 36, zIndex: 4 },
] as const

const STAGE_PERSPECTIVE = 1300
const ACTIVE_Z = 72
const INACTIVE_Z = -32
const ACTIVE_SCALE = 1.05
const INACTIVE_SCALE = 0.98
const ACTIVE_ZINDEX = 30
const INACTIVE_ZINDEX = 1
const DEPTH_DURATION = 0.65

export function useFundFocus(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const stage = root.querySelector<HTMLElement>('[data-depth-stage]')
        const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-fund-float]'))
        if (!stage || cards.length === 0) return

        stage.style.overflow = 'visible'
        stage.style.isolation = 'auto'
        stage.style.perspective = `${STAGE_PERSPECTIVE}px`
        stage.style.transformStyle = 'preserve-3d'

        gsap.set(stage, {
          transform: 'none',
          transformStyle: 'preserve-3d',
        })

        cards.forEach((card, index) => {
          const rest = FUND_RESTS[index] ?? FUND_RESTS[0]
          card.style.isolation = 'auto'
          card.style.overflow = 'visible'
          card.style.transformStyle = 'flat'
          card.style.backfaceVisibility = 'visible'
          gsap.set(card, {
            transformStyle: 'flat',
            backfaceVisibility: 'visible',
            force3D: true,
            z: rest.z,
            zIndex: rest.zIndex,
          })
        })

        let active = -1
        let hovered = -1

        const pose = () => {
          cards.forEach((card, index) => {
            const rest = FUND_RESTS[index] ?? FUND_RESTS[0]
            const isOn = index === active
            const isHover = index === hovered
            card.dataset.fundActive = isOn ? 'true' : 'false'

            let z: number = rest.z
            let scale = 1
            let zIndex: number = rest.zIndex

            if (active === -1) {
              if (isHover) {
                z = Math.min(rest.z + 28, 40)
                scale = 1.03
                zIndex = 8
              }
            } else if (isOn) {
              z = ACTIVE_Z + (isHover ? 8 : 0)
              scale = ACTIVE_SCALE
              zIndex = ACTIVE_ZINDEX
            } else {
              z = INACTIVE_Z + (isHover ? 8 : 0)
              scale = INACTIVE_SCALE
              zIndex = INACTIVE_ZINDEX
            }

            gsap.set(card, { zIndex })
            gsap.to(card, {
              z,
              scale,
              duration: DEPTH_DURATION,
              ease: 'power3.out',
              overwrite: 'auto',
              force3D: true,
            })
          })
        }

        const focusCard = (index: number) => {
          if (index === active) return
          active = index
          pose()
        }

        const onClick = (event: MouseEvent) => {
          const target = event.target
          if (!(target instanceof Element)) return
          if (target.closest('a')) return
          const card = target.closest<HTMLElement>('[data-fund-float]')
          if (!card || !stage.contains(card)) return
          const index = cards.indexOf(card)
          if (index < 0) return
          focusCard(index)
        }

        const onKey = (event: KeyboardEvent) => {
          if (event.key !== 'Enter' && event.key !== ' ') return
          const card = event.target
          if (!(card instanceof HTMLElement) || !cards.includes(card)) return
          if (event.key === ' ') event.preventDefault()
          focusCard(cards.indexOf(card))
        }

        const onLeave = () => {
          hovered = -1
          pose()
        }

        const enters = cards.map((_, index) => () => {
          hovered = index
          pose()
        })

        stage.addEventListener('click', onClick)
        cards.forEach((card, index) => {
          card.tabIndex = 0
          card.addEventListener('keydown', onKey)
          card.addEventListener('pointerenter', enters[index])
          card.addEventListener('pointerleave', onLeave)
        })

        return () => {
          stage.removeEventListener('click', onClick)
          cards.forEach((card, index) => {
            card.removeEventListener('keydown', onKey)
            card.removeEventListener('pointerenter', enters[index])
            card.removeEventListener('pointerleave', onLeave)
            card.removeAttribute('data-fund-active')
            card.removeAttribute('tabindex')
            card.style.zIndex = ''
            card.style.isolation = ''
            card.style.overflow = ''
            card.style.transformStyle = ''
            card.style.backfaceVisibility = ''
          })
          stage.style.overflow = ''
          stage.style.isolation = ''
          stage.style.perspective = ''
          stage.style.transformStyle = ''
        }
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [rootRef])
}
