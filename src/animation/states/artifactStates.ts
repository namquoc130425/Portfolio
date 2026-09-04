export const artifactStates = ['HERO_IDLE', 'DECOMPOSITION', 'WORK_INDEX', 'ABOUT', 'SKILL_REACTIVE', 'CONTACT'] as const

export type ArtifactState = (typeof artifactStates)[number]

export const skillStateKeys = [
  'JAVA',
  'SPRING_BOOT',
  'SPRING_SECURITY',
  'REST_API',
  'MICROSERVICES',
  'POSTGRESQL',
  'REDIS',
  'KAFKA',
  'DOCKER',
  'REACT',
  'TYPESCRIPT',
  'TAILWIND_CSS',
] as const

export type SkillStateKey = (typeof skillStateKeys)[number]
