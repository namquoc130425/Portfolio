const METAL_RINGS = [
  { radius: 1.25, tube: 0.09, rotation: [0.2, 0.7, 0.1] },
  { radius: 1.46, tube: 0.065, rotation: [1.24, -0.28, 0.62] },
  { radius: 1.66, tube: 0.055, rotation: [-0.48, 0.35, -0.75] },
] as const

export function MetalRings() {
  return (
    <group>
      {METAL_RINGS.map((ring) => (
        <mesh key={ring.radius} rotation={ring.rotation}>
          <torusGeometry args={[ring.radius, ring.tube, 16, 80]} />
          <meshStandardMaterial color="#222820" metalness={0.9} roughness={0.31} />
        </mesh>
      ))}
    </group>
  )
}
