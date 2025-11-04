"use client"

import { useMemo, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { valueNoise2D } from '@/lib/noise'
import { useFrame } from '@react-three/fiber'

const GRID = 20
const SPACING = 4
const SIZE = 1.5

export default function CityInstanced() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const matrices = useMemo(() => {
    const arr: THREE.Matrix4[] = []
    const half = (GRID * SPACING) / 2
    for (let x = 0; x < GRID; x++) {
      for (let z = 0; z < GRID; z++) {
        const wx = x * SPACING - half
        const wz = z * SPACING - half
        const d = Math.hypot(wx, wz)
        const base = valueNoise2D(x * 0.35, z * 0.35, 7)
        const height = THREE.MathUtils.lerp(1.5, 26, base) * THREE.MathUtils.smoothstep(90, 0, d)

        dummy.position.set(wx, height / 2, wz)
        dummy.scale.setScalar(SIZE)
        dummy.scale.y = height
        dummy.rotation.y = (x * 431 + z * 227) % 360
        dummy.updateMatrix()
        arr.push(dummy.matrix.clone())
      }
    }
    return arr
  }, [dummy])

  useFrame(({ clock }) => {
    // Subtle emissive flicker
    const t = clock.getElapsedTime()
    if (meshRef.current && Array.isArray(meshRef.current.material)) return
    const mat = meshRef.current?.material as THREE.MeshStandardMaterial | undefined
    if (mat) mat.emissiveIntensity = 0.8 + Math.sin(t * 3) * 0.2
  })

  return (
    <group position={[0, 0, 0]}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, GRID * GRID]} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#0b1323"
          roughness={0.6}
          metalness={0.2}
          emissive="#2cf5ff"
          emissiveIntensity={1.0}
        />
      </instancedMesh>
      {/* Apply computed matrices */}
      <ApplyMatrices target={meshRef} matrices={matrices} />
      {/* Simple ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[SPACING * GRID * 1.2, SPACING * GRID * 1.2, 1, 1]} />
        <meshStandardMaterial color="#05070c" />
      </mesh>
    </group>
  )
}

function ApplyMatrices({
  target,
  matrices,
}: {
  target: React.MutableRefObject<THREE.InstancedMesh | null>
  matrices: THREE.Matrix4[]
}) {
  // Ensure matrices are applied once the instanced mesh ref is attached.
  // useEffect (not useMemo) so it runs after mount when ref is set.
  useEffect(() => {
    if (!target.current) return
    matrices.forEach((m, i) => target.current!.setMatrixAt(i, m))
    target.current.instanceMatrix.needsUpdate = true
  }, [matrices, target])
  return null
}
