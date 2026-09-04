export const artifactStates = ['HERO_IDLE', 'DECOMPOSITION', 'WORK_INDEX', 'ABOUT'] as const

export type ArtifactState = (typeof artifactStates)[number]
