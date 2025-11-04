"use client"

import { useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

/**
 * Optional: load modular GLTF buildings for extra detail.
 * Place your models under `assets/models/` and reference here.
 */
export default function BuildingsKit() {
  return (
    <Suspense fallback={null}>
      {/* Example usage once a model exists:
        <primitive object={useGLTF('/assets/models/block.glb').scene} position={[0,0,0]} />
      */}
      <group />
    </Suspense>
  )
}

useGLTF.preload('/assets/models/block.glb')

