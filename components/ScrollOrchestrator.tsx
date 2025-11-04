"use client"

import { useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { shots, sectionIds } from '@/lib/cameraPath'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollOrchestrator() {
  const { camera } = useThree()

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Prepare a dummy animatable object
      const state = {
        px: camera.position.x,
        py: camera.position.y,
        pz: camera.position.z,
        tx: 0,
        ty: 0,
        tz: 0,
      }

      const setCam = () => {
        camera.position.set(state.px, state.py, state.pz)
        camera.lookAt(state.tx, state.ty, state.tz)
        camera.updateProjectionMatrix()
      }

      // Create a ScrollTrigger for each section between consecutive shots
      for (let i = 0; i < shots.length - 1; i++) {
        const endShot = shots[i + 1]
        const section = document.getElementById(sectionIds[i])
        if (!section) continue

        // Text crossfade in/out inside the section
        const text = section.querySelector('[data-overlay]') as HTMLElement | null
        if (text) {
          gsap.fromTo(
            text,
            { autoAlpha: 0, y: 30 },
            {
              autoAlpha: 1,
              y: 0,
              ease: 'power3.out',
              duration: 0.6,
              scrollTrigger: { trigger: section, start: 'top center', toggleActions: 'play none none reverse' },
            }
          )
        }

        gsap.to(state, {
          px: endShot.pos[0],
          py: endShot.pos[1],
          pz: endShot.pos[2],
          tx: endShot.target[0],
          ty: endShot.target[1],
          tz: endShot.target[2],
          ease: 'none',
          onUpdate: setCam,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        })
      }
    })

    return () => ctx.revert()
  }, [camera])

  // This component renders nothing; it only orchestrates camera via ScrollTrigger.
  return null
}
