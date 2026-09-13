import { useLayoutEffect, type RefObject } from 'react'
import { REWARD_RESTS } from '@/lib/rewards-motion'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'

const STAGE_PERSPECTIVE = 1300
const ACTIVE_Z = 72
const INACTIVE_Z = -32
const ACTIVE_SCALE = 1.05
const INACTIVE_SCALE = 0.98
const ACTIVE_ZINDEX = 30
const INACTIVE_ZINDEX = 1
const DEPTH_DURATION = 0.62

export function useRewardsDepth(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(DEPTH_QUERY, () => {
      const ctx = gsap.context(() => {
        const stage = root.querySelector<HTMLElement>('[data-depth-stage]')
        const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-reward-item]'))
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
          card.style.isolation = 'auto'
          card.style.overflow = 'visible'
          card.style.transformStyle = 'flat'
          card.style.backfaceVisibility = 'visible'
          gsap.set(card, {
            transformStyle: 'flat',
            backfaceVisibility: 'visible',
            force3D: true,
            zIndex: index === 1 ? 4 : 2,
          })
        })

        const drivers = cards.map((card, index) => {
          const rest = REWARD_RESTS[index] ?? REWARD_RESTS[0]
          return {
            card,
            rest,
            x: gsap.quickTo(card, 'x', { duration: 0.52, ease: 'power3.out' }),
            rotateX: gsap.quickTo(card, 'rotateX', {
              duration: 0.52,
              ease: 'power3.out',
            }),
            rotateY: gsap.quickTo(card, 'rotateY', {
              duration: 0.52,
              ease: 'power3.out',
            }),
            maxX: index === 1 ? 14 : 9,
            maxRX: index === 1 ? 2.2 : 1.6,
            maxRY: index === 1 ? 3 : 2.2,
          }
        })

        let active = -1
        let hovered = -1

        const poseCards = () => {
          drivers.forEach((driver, index) => {
            const rest = driver.rest
            const isOn = index === active
            const isHover = index === hovered
            const restZIndex = index === 1 ? 4 : 2

            driver.card.dataset.rewardActive = isOn ? 'true' : 'false'

            let z: number = rest.z
            let scale = 1
            let zIndex = restZIndex

            if (active === -1) {
              if (isHover) {
                z = Math.min(rest.z + 28, 40)
                scale = 1.035
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

            gsap.set(driver.card, { zIndex })
            gsap.to(driver.card, {
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
          poseCards()
        }

        const onMove = (event: PointerEvent) => {
          const rect = stage.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) return
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2

          drivers.forEach((driver, index) => {
            const toward = hovered === index || active === index ? 1.15 : 1
            driver.x(nx * driver.maxX)
            driver.rotateX(driver.rest.rotateX - ny * driver.maxRX * toward)
            driver.rotateY(driver.rest.rotateY + nx * driver.maxRY * toward)
          })
        }

        const onLeave = () => {
          hovered = -1
          poseCards()
          drivers.forEach((driver) => {
            driver.x(0)
            driver.rotateX(driver.rest.rotateX)
            driver.rotateY(driver.rest.rotateY)
          })
        }

        const enters = cards.map((_, index) => () => {
          hovered = index
          poseCards()
        })

        const onCardLeave = () => {
          hovered = -1
          poseCards()
        }

        const onClick = (event: MouseEvent) => {
          const target = event.target
          if (!(target instanceof Element)) return
          if (target.closest('a')) return
          const card = target.closest<HTMLElement>('[data-reward-item]')
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

        stage.addEventListener('pointermove', onMove)
        stage.addEventListener('pointerleave', onLeave)
        stage.addEventListener('click', onClick)
        cards.forEach((card, index) => {
          card.tabIndex = 0
          card.addEventListener('pointerenter', enters[index])
          card.addEventListener('pointerleave', onCardLeave)
          card.addEventListener('keydown', onKey)
        })

        ScrollTrigger.create({
          trigger: root,
          start: 'top 76%',
          once: true,
          onEnter: () => {
            cards.forEach((card, index) => {
              const direction = index === 1 ? -1 : index === 0 ? 1 : -1
              gsap.to(card, {
                y: `+=${4.5 * direction}`,
                duration: 6.2 + index * 0.55,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 1.55 + index * 0.28,
                force3D: true,
                overwrite: false,
              })
            })
          },
        })

        return () => {
          stage.removeEventListener('pointermove', onMove)
          stage.removeEventListener('pointerleave', onLeave)
          stage.removeEventListener('click', onClick)
          cards.forEach((card, index) => {
            card.removeEventListener('pointerenter', enters[index])
            card.removeEventListener('pointerleave', onCardLeave)
            card.removeEventListener('keydown', onKey)
            card.removeAttribute('data-reward-active')
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
