import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import type { ArtifactState } from '../../animation/states/artifactStates'

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
  reducedMotion: boolean
  state: ArtifactState
}

const particleStates = {
  HERO_IDLE: { opacity: 0.22, scale: 1 },
  DECOMPOSITION: { opacity: 0.78, scale: 1.72 },
  WORK_INDEX: { opacity: 0.48, scale: 2.12 },
} as const

export function SignalParticles({ reducedMotion, state }: SignalParticlesProps) {
  const particles = useRef<THREE.Points>(null)
  const material = useRef<THREE.PointsMaterial>(null)
  const positions = useMemo(() => createParticlePositions(), [])

  useFrame((_, delta) => {
    const target = particleStates[state]
    const damping = 1 - Math.exp(-delta * 3.5)

    if (particles.current) {
      particles.current.scale.setScalar(THREE.MathUtils.lerp(particles.current.scale.x, target.scale, damping))
      if (!reducedMotion) particles.current.rotation.y += delta * 0.035
    }
    if (material.current) {
      material.current.opacity = THREE.MathUtils.lerp(material.current.opacity, target.opacity, damping)
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
