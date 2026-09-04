export function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight color="#eceae4" intensity={2.5} position={[4, 5, 5]} />
      <pointLight color="#b7ff37" intensity={16} distance={8} position={[1.8, 0.2, 2.5]} />
      <pointLight color="#b9c7ff" intensity={10} distance={7} position={[-3, -2, 3]} />
    </>
  )
}
