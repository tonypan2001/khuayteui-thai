"use client"

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import CityInstanced from './CityInstanced'
import ScrollOrchestrator from './ScrollOrchestrator'
import { shots } from '@/lib/cameraPath'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

export default function CanvasScene() {
  const initial = shots[0]
  return (
    <Canvas
      shadows
      gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      camera={{ position: initial.pos as unknown as THREE.Vector3Tuple, fov: 50, near: 0.1, far: 1000 }}
      dpr={[1, 2]}
      className="fixed inset-0 -z-10"
    >
      <color attach="background" args={[`#05070c`]} />
      <fog attach="fog" args={[`#05070c`, 40, 240]} />

      <ambientLight intensity={0.35} />
      <directionalLight
        position={[30, 60, 30]}
        intensity={1.2}
        color={new THREE.Color('#7cc7ff')}
        castShadow
      />
      <directionalLight
        position={[-30, 30, -30]}
        intensity={0.5}
        color={new THREE.Color('#ff5fed')}
      />

      <Suspense fallback={null}>
        <CityInstanced />
      </Suspense>

      <EffectComposer multisampling={0}>
        <Bloom intensity={1.2} luminanceThreshold={0.25} luminanceSmoothing={0.2} mipmapBlur />
      </EffectComposer>

      {/* Comment out OrbitControls in production; useful during dev */}
      {/* <OrbitControls enablePan={false} /> */}

      <ScrollOrchestrator />
      {/* <Perf position="bottom-left" minimal /> */}
    </Canvas>
  )
}
