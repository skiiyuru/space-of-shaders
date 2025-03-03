import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import * as THREE from 'three'
import Fireworks from './Fireworks'

type FireworkRef = {
  textures: THREE.Texture[]
  createRandomFirework: () => void
}

export default function Experience() {
  const firework_ref = useRef<FireworkRef>(null!)

  function handleClick() {
    firework_ref.current.createRandomFirework()
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 35 }}
      dpr={[1, 2]}
      onClick={handleClick}
    >
      <color attach="background" args={['#0e100f']} />

      <Perf position="bottom-right" />

      <OrbitControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 1.9}
        makeDefault
      />

      <Fireworks ref={firework_ref} />
    </Canvas>
  )
}
