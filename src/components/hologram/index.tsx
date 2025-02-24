import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Provider from './Provider'

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 0.5, 1.5], fov: 35 }} dpr={[1, 1.5]}>
      <color attach="background" args={['black']} />

      <Perf position="bottom-right" />

      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.9}
        makeDefault
      />

      <ambientLight intensity={2.5} />
      <directionalLight position={[0, 0, 5]} intensity={3} />

      <Provider />
    </Canvas>
  )
}
