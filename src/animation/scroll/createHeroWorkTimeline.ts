import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ArtifactState } from '../states/artifactStates'

gsap.registerPlugin(ScrollTrigger)

type HeroWorkTimelineOptions = {
  hero: HTMLElement
  work: HTMLElement
  onArtifactStateChange: (state: ArtifactState) => void
  reducedMotion: boolean
}

export function createHeroWorkTimeline({
  hero,
  work,
  onArtifactStateChange,
  reducedMotion,
}: HeroWorkTimelineOptions) {
  const scope = hero.parentElement ?? hero

  const context = gsap.context(() => {
    if (reducedMotion) {
      onArtifactStateChange('HERO_IDLE')
      return
    }

    const copy = hero.querySelector<HTMLElement>('.hero-copy')
    const tagline = hero.querySelector<HTMLElement>('.hero-tagline')
    const cue = hero.querySelector<HTMLElement>('.hero-work-cue')

    const timeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        id: 'hero-work-transition',
        trigger: hero,
        start: 'top top',
        end: '+=115%',
        pin: true,
        scrub: 0.55,
        refreshPriority: -1,
        onUpdate: (trigger) => {
          const state: ArtifactState =
            trigger.progress < 0.15
              ? 'HERO_IDLE'
              : trigger.progress < 0.78
                ? 'DECOMPOSITION'
                : 'WORK_INDEX'
          onArtifactStateChange(state)
        },
      },
    })

    timeline
      .addLabel('decompose', 0.15)
      .to(copy, { autoAlpha: 0.24, yPercent: -12 }, 'decompose')
      .to(tagline, { autoAlpha: 0.18, yPercent: -16 }, 'decompose')
      .to(cue, { autoAlpha: 0, yPercent: 25 }, 'decompose')
      .fromTo(work, { autoAlpha: 0, y: 72 }, { autoAlpha: 1, y: 0 }, 0.58)
  }, scope)

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return () => context.revert()
}
