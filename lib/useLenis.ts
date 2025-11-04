"use client"

import Lenis from 'lenis'
import { useEffect } from 'react'

/**
 * Initialize smooth scrolling with Lenis and keep GSAP/ScrollTrigger in sync.
 * Call once at the page root.
 */
export function useLenis(enable = true) {
  useEffect(() => {
    if (!enable) return
    const lenis = new Lenis({
      duration: 1.1,
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
  }, [enable])
}
