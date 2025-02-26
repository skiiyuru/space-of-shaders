import { useEffect, useRef } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import vertex_shader from '../../shaders/firework/vertex.glsl?raw'
import fragment_shader from '../../shaders/firework/fragment.glsl?raw'
import gsap from 'gsap'

export default function Fireworks() {
  const ref = useRef<THREE.Points>(null!)

  // Get the size of the canvas so that we can resize the points
  const {
    scene,
    size: { width, height },
  } = useThree()

  // Load the particle textures
  const textures = useLoader(THREE.TextureLoader, [
    '/textures/particles/1.png',
    '/textures/particles/2.png',
    '/textures/particles/3.png',
    '/textures/particles/4.png',
    '/textures/particles/5.png',
    '/textures/particles/6.png',
    '/textures/particles/7.png',
    '/textures/particles/8.png',
  ])

  function createFirework(
    firework: THREE.Points,
    count: number,
    position: THREE.Vector3,
    size: number,
    texture: THREE.Texture,
    radius: number,
    color: THREE.Color
  ) {
    const vertex_positions = new Float32Array(count * 3)
    const vertex_sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Index for every 3rd position in the array
      const i3 = i * 3

      // Create a position that references a sphere shape
      const spherical_position = new THREE.Spherical(
        radius * (0.75 + Math.random() * 0.25),
        Math.random() * Math.PI,
        Math.random() * Math.PI * 2
      )

      const position = new THREE.Vector3()
      position.setFromSpherical(spherical_position)

      vertex_positions[i3] = position.x
      vertex_positions[i3 + 1] = position.y
      vertex_positions[i3 + 2] = position.z

      vertex_sizes[i] = Math.random()
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertex_positions, 3)
    )
    geometry.setAttribute('a_size', new THREE.BufferAttribute(vertex_sizes, 1))

    // ThreeJS by default flips textures upside down, disable this
    texture.flipY = false

    const material = new THREE.ShaderMaterial({
      vertexShader: vertex_shader,
      fragmentShader: fragment_shader,
      uniforms: {
        u_size: new THREE.Uniform(size),
        u_resolution: new THREE.Uniform(new THREE.Vector2(width, height)),
        u_texture: new THREE.Uniform(texture),
        u_color: new THREE.Uniform(color),
        u_progress: new THREE.Uniform(0),
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    // Add the geometry, material & position to the firework object
    firework.geometry = geometry
    firework.material = material
    firework.position.copy(position)

    // Destroy firework helper
    function destroy() {
      scene.remove(firework)
      geometry.dispose()
      material.dispose()
    }

    // Animate
    gsap.to(material.uniforms.u_progress, {
      value: 1,
      duration: 3,
      ease: 'linear',
      onComplete: destroy,
    })
  }

  useEffect(() => {
    createFirework(
      ref.current,
      100,
      new THREE.Vector3(),
      0.5,
      textures[7],
      1,
      new THREE.Color('#0AE448')
    )
  }, [])

  return <points ref={ref} />
}
