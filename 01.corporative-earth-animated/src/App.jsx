import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'
import { LUTPass, LUTCubeLoader } from 'three-stdlib'


function Sphere(props) {
  const texture = useTexture('/terrazo.png')
  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial map={texture}  />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{width: '100vw', height: '100vh'}}>
      <ambientLight />
      <Sphere />
      <OrbitControls />
    </Canvas>
  )
}
