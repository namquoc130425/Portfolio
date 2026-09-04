const GLASS_RINGS = [
  { radius: 1.92, tube: 0.095, rotation: [0.75, 0.22, -0.44] },
  { radius: 2.18, tube: 0.075, rotation: [-0.3, 0.8, 0.4] },
  { radius: 2.42, tube: 0.05, rotation: [1.05, -0.45, -0.14] },
] as const

export function GlassRings() {
  return (
    <group>
      {GLASS_RINGS.map((ring) => (
        <mesh key={ring.radius} rotation={ring.rotation}>
          <torusGeometry args={[ring.radius, ring.tube, 20, 96]} />
          <meshPhysicalMaterial
            color="#dfe8d5"
            roughness={0.14}
            metalness={0.05}
            transmission={0.8}
            thickness={0.55}
            transparent
            opacity={0.42}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}
