"use client"

import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { content } from '@/contants/content'

const links = content.nav.links

export default function OverlayNav() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState<string | null>(links[0]?.id ?? null)
  const [menuOpen, setMenuOpen] = useState(false)
  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }, [])

  // Track active section based on viewport center (robust for tall/pinned sections)
  useEffect(() => {
    const ids = links.map((l) => l.id)
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    let ticking = false
    const updateActive = () => {
      const centerY = window.innerHeight / 2
      let current: string | null = null
      for (const el of elements) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= centerY && rect.bottom >= centerY) {
          current = el.id
          break
        }
      }
      if (!current) {
        // Fallback to closest center if none wraps the center point
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
      } else {
        setActive(current)
      }
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          ticking = false
          updateActive()
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // Initial
    updateActive()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[60]">
      <div className="mx-auto max-w-6xl px-3 sm:px-5 py-3 sm:py-4">
        <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-md">
          <div className="px-3 sm:px-4 py-2">
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
                className="hidden sm:inline text-lg font-semibold tracking-tight"
              >
                <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                  {content.site.name}
                </span>
              </motion.span>
            </div>
          </div>
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-1 pr-1 overflow-x-auto no-scrollbar whitespace-nowrap">
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
                    className="pointer-events-none absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="sm:hidden mr-2 inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-full bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          initial={false}
          animate={menuOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="sm:hidden overflow-hidden"
        >
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md p-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => onNavClick(e, l.id)}
                className={`block rounded-lg px-3 py-3 text-base ${active === l.id ? 'bg-white/10 text-white' : 'text-white/85 hover:bg-white/10 hover:text-white'}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
