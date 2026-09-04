import { Instance, Instances, Line } from '@react-three/drei'

const NODES = [
  [-0.9, 0.45, 0.5],
  [-0.56, -0.68, 0.58],
  [0.64, 0.72, 0.45],
  [0.92, -0.34, 0.6],
  [0.18, -0.9, 0.4],
  [-0.08, 1.02, 0.25],
] as const

const PATHS = [
  [NODES[0], NODES[5], NODES[2]],
  [NODES[0], NODES[1], NODES[4]],
  [NODES[5], NODES[3], NODES[4]],
] as const

export function TopologyNodes() {
  return (
    <group>
      <Instances limit={NODES.length} range={NODES.length}>
        <sphereGeometry args={[0.07, 12, 8]} />
        <meshStandardMaterial color="#c9ff75" emissive="#b7ff37" emissiveIntensity={1.5} />
        {NODES.map((position) => (
          <Instance key={position.join('-')} position={position} />
        ))}
      </Instances>
      {PATHS.map((points, index) => (
        <Line
          key={index}
          color="#8ebf3d"
          lineWidth={0.5}
          opacity={0.32}
          points={points}
          transparent
        />
      ))}
    </group>
  )
}
