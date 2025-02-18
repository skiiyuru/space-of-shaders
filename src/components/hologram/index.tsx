import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Character from './Character'

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 0.5, 1.5], fov: 35 }} dpr={[1, 1.5]}>
      <color attach="background" args={['black']} />
      <Perf />
      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.9}
        makeDefault
      />

      <ambientLight intensity={2.5} />
      <directionalLight position={[0, 0, 5]} intensity={3} />

      <Character position={[0, 0, 0]} rotation-y={-Math.PI * 0.6} />
    </Canvas>
  )
}
