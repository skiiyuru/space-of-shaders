/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { Group, Material, Object3D, SkinnedMesh } from 'three'
import type { GLTF } from 'three/examples/jsm/Addons.js'

export default function Character(props) {
  const { nodes, materials } = useGLTF('/models/hologram/Robocat.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh'].geometry}
        material={materials.mat13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_1'].geometry}
        material={materials.mat16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_2'].geometry}
        material={materials.mat19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_3'].geometry}
        material={materials.mat17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_4'].geometry}
        material={materials.mat23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_5'].geometry}
        material={materials.mat21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_6'].geometry}
        material={materials.mat7}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_7'].geometry}
        material={materials.mat5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_8'].geometry}
        material={materials.mat14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_9'].geometry}
        material={materials.mat12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_10'].geometry}
        material={materials.mat20}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Node-Mesh_11'].geometry}
        // material={materials.mat24}
      >
        <shaderMaterial />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/hologram/Robocat.glb')
