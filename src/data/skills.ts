import type { SkillStateKey } from '../animation/states/artifactStates'

export type Skill = {
  id: string
  label: string
  stateKey: SkillStateKey
  note?: string
}

export type SkillCategory = {
  id: string
  label: string
  skills: readonly Skill[]
}

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'backend-engineering',
    label: 'Backend / Engineering',
    skills: [
      { id: 'java', label: 'Java', stateKey: 'JAVA' },
      { id: 'spring-boot', label: 'Spring Boot', stateKey: 'SPRING_BOOT' },
      { id: 'spring-security', label: 'Spring Security', stateKey: 'SPRING_SECURITY' },
      { id: 'rest-api', label: 'REST API', stateKey: 'REST_API' },
      { id: 'microservices', label: 'Microservices', stateKey: 'MICROSERVICES' },
    ],
  },
  {
    id: 'data-messaging',
    label: 'Data / Messaging',
    skills: [
      { id: 'postgresql', label: 'PostgreSQL', stateKey: 'POSTGRESQL' },
      { id: 'redis', label: 'Redis', stateKey: 'REDIS' },
      { id: 'kafka', label: 'Kafka', stateKey: 'KAFKA' },
    ],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    skills: [
      { id: 'docker', label: 'Docker', stateKey: 'DOCKER' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { id: 'react', label: 'React', stateKey: 'REACT', note: 'Basic' },
      { id: 'typescript', label: 'TypeScript', stateKey: 'TYPESCRIPT', note: 'Currently learning' },
      { id: 'tailwind-css', label: 'Tailwind CSS', stateKey: 'TAILWIND_CSS', note: 'Tailwind CSS 4 — currently using / learning' },
    ],
  },
]
