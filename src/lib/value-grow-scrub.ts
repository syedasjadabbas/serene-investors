import { gsap } from '@/lib/gsap'

export function appendValueGrowScrub(
  timeline: gsap.core.Timeline,
  root: HTMLElement,
  visuals: NodeListOf<Element>,
) {
  const growIndex = Array.from(visuals).findIndex((layer) => layer.querySelector('.story-grow'))
  if (growIndex < 0) return

  const growVisual = visuals[growIndex]
  const grow = growVisual?.querySelector('.story-grow')
  if (!growVisual || !grow) return

  const enterAt = Math.max(0, growIndex - 1)
  const backdrop = grow.querySelector('[data-grow-layer="backdrop"]')
  const phone = grow.querySelector('[data-grow-layer="phone"]')
  const valueCard = grow.querySelector('[data-grow-layer="value"]')
  const gainCard = grow.querySelector('[data-grow-layer="gain"]')
  const copyStage = root.querySelector('.pinned-story__copy-stage')
  const visualStage = root.querySelector('.pinned-story__visual-stage')

  if (backdrop) {
    gsap.set(backdrop, { yPercent: -11, scale: 1.14, z: -64, force3D: true })
    timeline.to(backdrop, { yPercent: 1, scale: 1.05, z: -36, duration: 1.22, force3D: true }, enterAt)
    timeline.to(backdrop, { yPercent: 5, scale: 1, z: -28, duration: 0.48, force3D: true }, enterAt + 1.16)
  }

  if (phone) {
    gsap.set(phone, { yPercent: 8, scale: 0.92, z: -32, force3D: true })
    timeline.to(phone, { yPercent: 0, scale: 1, z: 22, duration: 1.28, force3D: true }, enterAt + 0.06)
    timeline.to(phone, { z: 16, duration: 0.42, force3D: true }, enterAt + 1.22)
  }

  if (valueCard) {
    gsap.set(valueCard, { yPercent: 16, scale: 0.96, z: 18, opacity: 0.4, force3D: true })
    timeline.to(
      valueCard,
      { yPercent: 0, scale: 1, z: 10, opacity: 1, duration: 1.12, force3D: true },
      enterAt + 0.14,
    )
    timeline.to(valueCard, { z: 14, duration: 0.4, force3D: true }, enterAt + 1.24)
  }

  if (gainCard) {
    gsap.set(gainCard, { yPercent: 22, scale: 0.94, z: -16, opacity: 0, force3D: true })
    timeline.to(
      gainCard,
      { yPercent: 0, scale: 1, z: 48, opacity: 1, duration: 1.18, force3D: true },
      enterAt + 0.22,
    )
    timeline.to(gainCard, { z: 42, duration: 0.4, force3D: true }, enterAt + 1.26)
  }

  if (copyStage) {
    timeline.to(copyStage, { y: -18, duration: 1.58, force3D: true }, enterAt)
  }

  if (visualStage) {
    timeline.to(visualStage, { y: 14, z: 22, duration: 1.58, force3D: true }, enterAt)
  }
}
