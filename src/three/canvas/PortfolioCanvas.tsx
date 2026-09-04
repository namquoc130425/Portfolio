import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import type { ArtifactState, SkillStateKey } from '../../animation/states/artifactStates'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DigitalArtifact } from '../artifact/DigitalArtifact'
import { SceneLighting } from '../lighting/SceneLighting'

type PortfolioCanvasProps = {
  activeSkill: SkillStateKey | null
  artifactState: ArtifactState
  onReady: () => void
}

export function PortfolioCanvas({ activeSkill, artifactState, onReady }: PortfolioCanvasProps) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="canvas-layer" aria-hidden="true">
      <Canvas
        camera={{ fov: 35, position: [0, 0, 8] }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? 'demand' : 'always'}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        fallback={null}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.toneMappingExposure = 1.1
          onReady()

          if (import.meta.env.DEV) {
            window.requestAnimationFrame(() => {
              window.requestAnimationFrame(() => {
                const { calls, lines, points, triangles } = gl.info.render
                const { geometries, textures } = gl.info.memory
                gl.domElement.dataset.rendererBaseline = JSON.stringify({
                  calls,
                  geometries,
                  lines,
                  points,
                  textures,
                  triangles,
                })
              })
            })
          }
        }}
      >
        <SceneLighting />
        <DigitalArtifact activeSkill={activeSkill} reducedMotion={reducedMotion} state={artifactState} />
      </Canvas>
    </div>
  )
}
