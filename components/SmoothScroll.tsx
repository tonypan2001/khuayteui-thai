"use client"

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ enabled = true, duration = 1.2 }: { enabled?: boolean; duration?: number }) {
  useEffect(() => {
    if (!enabled) return
    const lenis = new Lenis({
      duration,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [enabled, duration])

  return null
}

