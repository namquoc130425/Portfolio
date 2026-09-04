import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ArtifactState } from '../states/artifactStates'

gsap.registerPlugin(ScrollTrigger)

type SkillsArtifactTriggerOptions = {
  onActiveSkillChange: (skill: null) => void
  onArtifactStateChange: (state: ArtifactState) => void
  reducedMotion: boolean
  skills: HTMLElement
}

export function createSkillsArtifactTrigger({
  onActiveSkillChange,
  onArtifactStateChange,
  reducedMotion,
  skills,
}: SkillsArtifactTriggerOptions) {
  if (reducedMotion) return undefined

  const context = gsap.context(() => {
    ScrollTrigger.create({
      id: 'skills-artifact-state',
      trigger: skills,
      start: 'top 70%',
      end: 'bottom 30%',
      refreshPriority: 2,
      onEnter: () => onArtifactStateChange('SKILL_REACTIVE'),
      onEnterBack: () => onArtifactStateChange('SKILL_REACTIVE'),
      onLeave: () => onActiveSkillChange(null),
      onLeaveBack: () => {
        onActiveSkillChange(null)
        onArtifactStateChange('ABOUT')
      },
    })
  }, skills)

  requestAnimationFrame(() => ScrollTrigger.refresh())

  return () => context.revert()
}
