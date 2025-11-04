"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Hero Section for MetraCity
 * - Fullscreen, centered text overlay
 * - Gradient title + subtitle
 * - Subtle mount fade-in and parallax on scroll
 * - Scroll indicator at bottom
 * - Gradient overlay from bottom for readability
 * Notes: The 3D canvas is fixed behind this section (CanvasScene). Pinning on scroll is handled
 * globally by ScrollOrchestrator using the `#hero` section id.
 */
export default function Hero() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax text upward slightly as you scroll through the hero
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Readability gradient from bottom to top */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 h-full w-full grid place-items-center px-6">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
              MetraCity
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/80">
            Smart City Motion Experience
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <div className="h-6 w-3 rounded-full border border-white/40 relative overflow-hidden">
            <motion.span
              className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-white/70"
              animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
          <span className="text-xs tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  )
}

