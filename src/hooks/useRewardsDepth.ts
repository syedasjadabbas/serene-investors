import { useLayoutEffect, type RefObject } from 'react'
import { REWARD_RESTS } from '@/lib/rewards-motion'
import { DEPTH_QUERY } from '@/lib/motion'
import { gsap, registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'

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

        gsap.set(stage, {
          transformPerspective: 1300,
          transformStyle: 'preserve-3d',
        })

        cards.forEach((card) => {
          gsap.set(card, {
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            force3D: true,
          })
        })

        const drivers = cards.map((card, index) => {
          const rest = REWARD_RESTS[index] ?? REWARD_RESTS[0]
          return {
            card,
            rest,
            x: gsap.quickTo(card, 'x', { duration: 0.52, ease: 'power3.out', overwrite: 'auto' }),
            rotateX: gsap.quickTo(card, 'rotateX', {
              duration: 0.52,
              ease: 'power3.out',
              overwrite: 'auto',
            }),
            rotateY: gsap.quickTo(card, 'rotateY', {
              duration: 0.52,
              ease: 'power3.out',
              overwrite: 'auto',
            }),
            maxX: index === 1 ? 14 : 9,
            maxRX: index === 1 ? 2.2 : 1.6,
            maxRY: index === 1 ? 3 : 2.2,
          }
        })

        let hovered = -1

        const poseCards = (active: number) => {
          hovered = active
          cards.forEach((card, index) => {
            const rest = REWARD_RESTS[index] ?? REWARD_RESTS[0]
            if (active === -1) {
              gsap.to(card, {
                z: rest.z,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out',
                overwrite: 'auto',
                force3D: true,
              })
              return
            }
            if (index === active) {
              gsap.to(card, {
                z: Math.min(rest.z + 28, 40),
                scale: 1.035,
                duration: 0.6,
                ease: 'power3.out',
                overwrite: 'auto',
                force3D: true,
              })
              return
            }
            gsap.to(card, {
              z: rest.z - 16,
              scale: 0.985,
              duration: 0.6,
              ease: 'power3.out',
              overwrite: 'auto',
              force3D: true,
            })
          })
        }

        const onMove = (event: PointerEvent) => {
          const rect = stage.getBoundingClientRect()
          if (rect.width === 0 || rect.height === 0) return
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2

          drivers.forEach((driver, index) => {
            const toward = hovered === index ? 1.15 : 1
            driver.x(nx * driver.maxX)
            driver.rotateX(driver.rest.rotateX - ny * driver.maxRX * toward)
            driver.rotateY(driver.rest.rotateY + nx * driver.maxRY * toward)
          })
        }

        const onLeave = () => {
          poseCards(-1)
          drivers.forEach((driver) => {
            driver.x(0)
            driver.rotateX(driver.rest.rotateX)
            driver.rotateY(driver.rest.rotateY)
          })
        }

        const onCardEnter = (index: number) => () => poseCards(index)
        const onCardLeave = () => poseCards(-1)

        stage.addEventListener('pointermove', onMove)
        stage.addEventListener('pointerleave', onLeave)
        const cardLeaves = cards.map((card, index) => {
          const enter = onCardEnter(index)
          card.addEventListener('pointerenter', enter)
          card.addEventListener('pointerleave', onCardLeave)
          return { card, enter }
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
          cardLeaves.forEach(({ card, enter }) => {
            card.removeEventListener('pointerenter', enter)
            card.removeEventListener('pointerleave', onCardLeave)
          })
        }
      }, root)

      return () => ctx.revert()
    })

    return () => media.revert()
  }, [rootRef])
}
