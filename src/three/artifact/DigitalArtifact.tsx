import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import type { ArtifactState } from '../../animation/states/artifactStates'
import { usePointer } from '../../hooks/usePointer'
import { GlassRings } from './GlassRings'
import { MetalRings } from './MetalRings'
import { ReactorCore } from './ReactorCore'
import { SignalParticles } from './SignalParticles'
import { TopologyNodes } from './TopologyNodes'

type DigitalArtifactProps = {
  reducedMotion: boolean
  state: ArtifactState
}

const artifactTargets = {
  HERO_IDLE: { position: new THREE.Vector3(2.7, 1.25, 0), scale: 0.82, layerOffset: 0 },
  DECOMPOSITION: { position: new THREE.Vector3(1.9, 0.65, 0), scale: 0.92, layerOffset: 0.34 },
  WORK_INDEX: { position: new THREE.Vector3(2.35, 1.05, -0.35), scale: 0.72, layerOffset: 0.62 },
} as const

export function DigitalArtifact({ reducedMotion, state: artifactState }: DigitalArtifactProps) {
  const artifact = useRef<THREE.Group>(null)
  const glassLayer = useRef<THREE.Group>(null)
  const metalLayer = useRef<THREE.Group>(null)
  const coreLayer = useRef<THREE.Group>(null)
  const pointer = usePointer()

  useFrame((state, delta) => {
    if (!artifact.current) return

    const elapsed = state.clock.elapsedTime
    const target = artifactTargets[artifactState]
    const targetX = reducedMotion ? 0.34 : 0.34 - pointer.current.y * 0.12
    const targetY = reducedMotion ? -0.55 : -0.55 + pointer.current.x * 0.18
    const damping = 1 - Math.exp(-delta * 3.5)

    artifact.current.position.lerp(target.position, damping)
    artifact.current.scale.setScalar(THREE.MathUtils.lerp(artifact.current.scale.x, target.scale, damping))
    artifact.current.rotation.x = THREE.MathUtils.lerp(artifact.current.rotation.x, targetX, damping)
    artifact.current.rotation.y = THREE.MathUtils.lerp(artifact.current.rotation.y, targetY, damping)

    if (glassLayer.current) {
      glassLayer.current.position.y = THREE.MathUtils.lerp(glassLayer.current.position.y, target.layerOffset, damping)
      if (!reducedMotion) glassLayer.current.rotation.y = elapsed * 0.035
    }
    if (metalLayer.current) {
      metalLayer.current.position.z = THREE.MathUtils.lerp(metalLayer.current.position.z, -target.layerOffset, damping)
      if (!reducedMotion) metalLayer.current.rotation.z = elapsed * -0.055
    }
    if (coreLayer.current) {
      const pulse = reducedMotion ? 1 : 1 + Math.sin(elapsed * 1.4) * 0.025
      coreLayer.current.scale.setScalar(pulse)
    }
  })

  return (
    <group ref={artifact} position={[2.7, 1.25, 0]} rotation={[0.34, -0.55, 0.12]} scale={0.82}>
      <group ref={glassLayer}>
        <GlassRings />
      </group>
      <group ref={metalLayer}>
        <MetalRings />
      </group>
      <TopologyNodes />
      <group ref={coreLayer}>
        <ReactorCore />
      </group>
      <SignalParticles reducedMotion={reducedMotion} state={artifactState} />
    </group>
  )
}
