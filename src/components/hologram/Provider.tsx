import Character from './Character'
import vertex from '../../shaders/hologram/vertex.glsl?raw'
import fragment from '../../shaders/hologram/fragment.glsl?raw'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useControls } from 'leva'

export default function Provider() {
  const { color } = useControls({
    color: '#70c1ff',
  })

  const hologramMaterial = new THREE.ShaderMaterial({
    vertexShader: vertex,
    fragmentShader: fragment,
    uniforms: {
      u_time: new THREE.Uniform(0),
      u_color: new THREE.Uniform(new THREE.Color(color)),
    },
    transparent: true,
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  useFrame((state, delta) => {
    const elapsed_time = state.clock.getElapsedTime()
    hologramMaterial.uniforms.u_time.value = elapsed_time
  })
  return (
    <Character
      position={[0, 0, 0]}
      rotation-y={-Math.PI * 0.6}
      shader_material={hologramMaterial}
    />
  )
}
