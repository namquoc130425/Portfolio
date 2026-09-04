import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ArtifactState } from '../states/artifactStates'

gsap.registerPlugin(ScrollTrigger)

type AboutArtifactTriggerOptions = {
  about: HTMLElement
  onArtifactStateChange: (state: ArtifactState) => void
  reducedMotion: boolean
}

export function createAboutArtifactTrigger({
  about,
  onArtifactStateChange,
  reducedMotion,
}: AboutArtifactTriggerOptions) {
  if (reducedMotion) return undefined

  const context = gsap.context(() => {
    ScrollTrigger.create({
      id: 'about-artifact-state',
      trigger: about,
      start: 'top 70%',
      end: 'bottom 30%',
      refreshPriority: 1,
      onEnter: () => onArtifactStateChange('ABOUT'),
      onEnterBack: () => onArtifactStateChange('ABOUT'),
      onLeaveBack: () => onArtifactStateChange('WORK_INDEX'),
    })
  }, about)

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return () => context.revert()
}
