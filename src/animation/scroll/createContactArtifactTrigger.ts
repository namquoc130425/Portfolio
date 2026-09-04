import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ArtifactState } from '../states/artifactStates'

gsap.registerPlugin(ScrollTrigger)

type ContactArtifactTriggerOptions = {
  contact: HTMLElement
  onActiveSkillChange: (skill: null) => void
  onArtifactStateChange: (state: ArtifactState) => void
  reducedMotion: boolean
}

export function createContactArtifactTrigger({
  contact,
  onActiveSkillChange,
  onArtifactStateChange,
  reducedMotion,
}: ContactArtifactTriggerOptions) {
  if (reducedMotion) return undefined

  const context = gsap.context(() => {
    ScrollTrigger.create({
      id: 'contact-artifact-state',
      trigger: contact,
      start: 'top 70%',
      end: 'bottom 30%',
      refreshPriority: 3,
      onEnter: () => {
        onActiveSkillChange(null)
        onArtifactStateChange('CONTACT')
      },
      onEnterBack: () => {
        onActiveSkillChange(null)
        onArtifactStateChange('CONTACT')
      },
      onLeaveBack: () => onArtifactStateChange('SKILL_REACTIVE'),
    })
  }, contact)

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return () => context.revert()
}
