import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import Fireworks from './Fireworks'

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 35 }} dpr={[1, 2]}>
      <color attach="background" args={['#0e100f']} />

      <Perf position="bottom-right" />

      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.9}
        makeDefault
      />

      <Fireworks />
    </Canvas>
  )
}
