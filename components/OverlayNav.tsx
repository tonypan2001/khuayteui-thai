"use client"

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { content } from '@/contants/content'

const links = content.nav.links

export default function OverlayNav() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState<string | null>(links[0]?.id ?? null)
  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  // Track which section is active in viewport
  useEffect(() => {
    const ids = links.map((l) => l.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most centered/visible entry
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          const best = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b))
          setActive((best.target as HTMLElement).id)
          return
        }
        // Fallback: compute based on viewport center
        const centerY = window.innerHeight / 2
        let closestId: string | null = null
        let closestDist = Infinity
        for (const el of elements) {
          const rect = el.getBoundingClientRect()
          const dist = Math.abs(rect.top + rect.height / 2 - centerY)
          if (dist < closestDist) {
            closestDist = dist
            closestId = el.id
          }
        }
        if (closestId) setActive(closestId)
      },
      {
        // Use a middle band so only one section is usually active
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.01, 0.25, 0.5, 0.75, 0.99],
      }
    )

    elements.forEach((el) => observer.observe(el))

    // Set initial active based on current scroll position
    const init = () => {
      const centerY = window.innerHeight / 2
      let closestId: string | null = null
      let closestDist = Infinity
      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        const dist = Math.abs(rect.top + rect.height / 2 - centerY)
        if (dist < closestDist) {
          closestDist = dist
          closestId = el.id
        }
      }
      if (closestId) setActive(closestId)
    }
    init()

    return () => observer.disconnect()
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[60]">
      <div className="mx-auto max-w-6xl px-5 py-4">
        <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-md">
          <div className="px-4 py-2">
            <div className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="shrink-0"
              >
                <Image
                  src="/logo-ktt.svg"
                  alt="Khuay Teui Thai logo"
                  width={28}
                  height={28}
                  priority
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
                className="text-lg font-semibold tracking-tight"
              >
                <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                  {content.site.name}
                </span>
              </motion.span>
            </div>
          </div>
          <nav className="flex items-center gap-1 pr-1">
            {/** Use one shared sliding highlight for hover/active */}
            {/** Highlight shows for hovered item if any, else active item */}
            {/** Rendered per-link via shared layoutId for smooth slide */}
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => onNavClick(e, l.id)}
                onMouseEnter={() => setHovered(l.id)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(l.id)}
                onBlur={() => setHovered(null)}
                aria-current={active === l.id ? 'page' : undefined}
                className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                  active === l.id ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
              >
                {(hovered ?? active) === l.id && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
