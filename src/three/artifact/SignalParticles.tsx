import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import type { ArtifactState, SkillStateKey } from '../../animation/states/artifactStates'

const PARTICLE_COUNT = 420

function createParticlePositions() {
  const positions = new Float32Array(PARTICLE_COUNT * 3)

  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const angle = index * 2.399963229728653
    const radius = 1.65 + (index % 17) * 0.075
    const offset = index * 3

    positions[offset] = Math.cos(angle) * radius
    positions[offset + 1] = ((index % 23) - 11) * 0.045
    positions[offset + 2] = Math.sin(angle) * radius * (0.32 + (index % 5) * 0.05)
  }

  return positions
}

type SignalParticlesProps = {
  activeSkill: SkillStateKey | null
  reducedMotion: boolean
  state: ArtifactState
}

const particleStates = {
  HERO_IDLE: { opacity: 0.22, scale: 1 },
  DECOMPOSITION: { opacity: 0.78, scale: 1.72 },
  WORK_INDEX: { opacity: 0.48, scale: 2.12 },
  ABOUT: { opacity: 0.1, scale: 0.82 },
  SKILL_REACTIVE: { opacity: 0.18, scale: 0.92 },
  CONTACT: { opacity: 0.06, scale: 0.72 },
} as const

type SkillParticleProfile = {
  opacity: number
  rotationSpeed: number
  scale: number
}

const skillParticleProfiles: Partial<Record<SkillStateKey, SkillParticleProfile>> = {
  KAFKA: { opacity: 0.36, rotationSpeed: 0.09, scale: 1.42 },
  REDIS: { opacity: 0.3, rotationSpeed: 0.065, scale: 1.08 },
  MICROSERVICES: { opacity: 0.22, rotationSpeed: 0.025, scale: 1.18 },
  REACT: { opacity: 0.15, rotationSpeed: 0.018, scale: 0.86 },
  TYPESCRIPT: { opacity: 0.2, rotationSpeed: 0.022, scale: 0.96 },
}

export function SignalParticles({ activeSkill, reducedMotion, state }: SignalParticlesProps) {
  const particles = useRef<THREE.Points>(null)
  const material = useRef<THREE.PointsMaterial>(null)
  const positions = useMemo(() => createParticlePositions(), [])

  useFrame((_, delta) => {
    const target = particleStates[state]
    const skillProfile = state === 'SKILL_REACTIVE' && activeSkill
      ? skillParticleProfiles[activeSkill]
      : undefined
    const targetOpacity = skillProfile?.opacity ?? target.opacity
    const targetScale = skillProfile?.scale ?? target.scale
    const rotationSpeed = skillProfile?.rotationSpeed ?? (state === 'CONTACT' ? 0.008 : state === 'ABOUT' ? 0.012 : 0.035)
    const damping = 1 - Math.exp(-delta * 3.5)

    if (particles.current) {
      particles.current.scale.setScalar(THREE.MathUtils.lerp(particles.current.scale.x, targetScale, damping))
      if (!reducedMotion) particles.current.rotation.y += delta * rotationSpeed
    }
    if (material.current) {
      material.current.opacity = THREE.MathUtils.lerp(material.current.opacity, targetOpacity, damping)
    }
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={PARTICLE_COUNT} />
      </bufferGeometry>
      <pointsMaterial
        color="#b7ff37"
        ref={material}
        opacity={particleStates[state].opacity}
        size={0.026}
        sizeAttenuation
        transparent
        depthWrite={false}
      />
    </points>
  )
}
