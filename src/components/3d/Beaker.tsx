import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
const ITEM_URI = `./beaker-transformed.glb`;

type GLTFResult = GLTF & {
  nodes: {
    Object_61: THREE.Mesh
    Object_62: THREE.Mesh
    Object_95: THREE.Mesh
  }
  materials: {
    Apparatus_Glass: THREE.MeshStandardMaterial
    Scales: THREE.MeshStandardMaterial
    Apparatus_Liquid: THREE.MeshStandardMaterial
  }
}

export default function Beaker({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  // @ts-ignore
  const { nodes, materials } = useGLTF(ITEM_URI, 'https://www.gstatic.com/draco/versioned/decoders/1.4.1/') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null} position={[0.2,-0.3,3]}>
      <mesh castShadow receiveShadow geometry={nodes.Object_61.geometry} material={materials.Apparatus_Glass} position={[0, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_62.geometry} material={materials.Scales} position={[0, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_95.geometry} material={materials.Apparatus_Liquid} position={[0, 0, 0]} rotation={[Math.PI, 0, Math.PI]} />
    </group>
  )
}

useGLTF.preload(ITEM_URI)
