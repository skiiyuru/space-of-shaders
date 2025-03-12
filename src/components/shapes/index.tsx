import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import vertex from '../../shaders/shapes/1/vertex.glsl'
import fragment from '../../shaders/shapes/1/fragment.glsl'

const Experience = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
    >
      <OrbitControls />
      <mesh>
        <planeGeometry args={[3, 3]} />
        <shaderMaterial vertexShader={vertex} fragmentShader={fragment} />
      </mesh>
    </Canvas>
  )
}

export default Experience
