"use client"

import { useCallback } from 'react'
import { motion } from 'framer-motion'

import { content } from '@/contants/content'

const links = content.nav.links

export default function OverlayNav() {
  const onNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <div className="pointer-events-none fixed top-0 left-0 right-0 z-[60]">
      <div className="mx-auto max-w-6xl px-5 py-4">
        <div className="pointer-events-auto flex items-center justify-between rounded-full border border-white/10 bg-black/30 backdrop-blur-md">
          <div className="px-4 py-2">
            <motion.span
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-lg font-semibold tracking-tight"
            >
              <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-lime-500 bg-clip-text text-transparent">
                {content.site.name}
              </span>
            </motion.span>
          </div>
          <nav className="flex items-center gap-1 pr-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => onNavClick(e, l.id)}
                className="rounded-full px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
