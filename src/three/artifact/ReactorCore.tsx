export function ReactorCore() {
  return (
    <group rotation={[0.6, 0.2, -0.1]}>
      <mesh>
        <torusGeometry args={[0.82, 0.14, 20, 72]} />
        <meshStandardMaterial color="#1a1e1a" metalness={0.92} roughness={0.23} />
      </mesh>
      <mesh rotation={[0.1, 0, 0.2]}>
        <torusGeometry args={[0.56, 0.07, 16, 64]} />
        <meshStandardMaterial
          color="#b7ff37"
          emissive="#b7ff37"
          emissiveIntensity={1.6}
          metalness={0.55}
          roughness={0.2}
        />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.33, 0.33, 0.3, 32]} />
        <meshStandardMaterial color="#111311" metalness={0.9} roughness={0.28} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[0.26, 0.045, 12, 40]} />
        <meshStandardMaterial color="#d9ff95" emissive="#b7ff37" emissiveIntensity={2.1} />
      </mesh>
    </group>
  )
}
