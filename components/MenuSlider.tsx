"use client"

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import type { MenuItem } from '@/types/menu'

export default function MenuSlider({ items }: { items: MenuItem[] }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const total = items.length

  return (
    <div ref={ref} className="relative min-h-[300vh]">
      <div className="sticky top-0 h-screen grid place-items-center">
        <div className="relative w-full max-w-5xl mx-auto aspect-[16/10]">
          {items.map((item, i) => (
            <MenuSlide key={item.id} item={item} index={i} total={total} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MenuSlide({
  item,
  index,
  total,
  progress,
}: {
  item: MenuItem
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const step = 1 / total
  const s = index * step
  const e = (index + 1) * step
  const enterEnd = s + step * 0.25
  const exitStart = s + step * 0.75

  const x = useTransform(progress, [s, enterEnd, exitStart, e], ['50vw', '0vw', '0vw', '-50vw'])
  const opacity = useTransform(progress, [s, enterEnd, exitStart, e], [0, 1, 1, 0])

  return (
    <motion.div
      style={{ x, opacity }}
      className="absolute inset-0 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] items-center gap-6 p-6"
    >
      <div className="relative w-full h-64 md:h-full">
        <Image
          src={item.img}
          alt={item.title}
          fill
          priority={index === 0}
          sizes="(max-width: 768px) 80vw, 40vw"
          className="object-contain drop-shadow-xl"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight" style={{ color: '#b9ff4f' }}>
          {item.title}
        </h2>
        <p className="mt-3 text-base md:text-lg text-white/80">{item.desc}</p>
        {!!item.badges?.length && (
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
            {item.badges.map((b, idx) => (
              <div
                key={idx}
                className="rounded-md bg-black/40 border border-lime-400/25 px-3 py-2 text-left"
              >
                <div className="text-[11px] uppercase tracking-wider text-white/60">{b.label}</div>
                <div className="text-sm font-medium" style={{ color: '#b9ff4f' }}>
                  {b.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
