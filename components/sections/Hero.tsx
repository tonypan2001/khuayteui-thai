"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
// Menu section is now separate; slider removed from Hero

export default function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative z-10 h-screen w-full isolate bg-black"
    >
      {/* Background image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/imgs/wood_table_bg.png"
          alt="Wood table background"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Readability gradient (above background) */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content: Heading + scroll-driven slider */}
      <div className="relative z-20 h-full w-full px-6 pointer-events-auto">
        <div className="h-screen grid place-items-center">
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight" style={{ color: '#b9ff4f' }}>
              Noodle House
            </h1>
            <p className="mt-3 text-base md:text-xl text-white/80">
              Hand‑Pulled Noodles, Made Fresh Daily
            </p>
          </motion.div>
        </div>
        {/* Menu slider moved to its own section */}
      </div>

      {/* Top-left big + detail text */}
      <div className="pointer-events-none fixed left-6 top-24 md:top-28 z-40 text-left">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: '#b9ff4f' }}>
          Handmade Noodles
        </h2>
        <p className="mt-1 max-w-xs text-sm md:text-base text-white/80">
          Pulled-to-order with heritage techniques and fresh, local flour.
        </p>
      </div>

      {/* Bottom-left big + detail text */}
      <div className="pointer-events-none fixed left-6 bottom-6 z-40 text-left">
        <h3 className="text-2xl md:text-3xl font-semibold" style={{ color: '#b9ff4f' }}>
          Open Daily
        </h3>
        <p className="mt-1 text-sm md:text-base text-white/80">
          11:00–22:00 · Dine‑in · Takeaway · Order online
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-30 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center gap-2 text-lime-300/80"
        >
          <div className="h-6 w-3 rounded-full border border-lime-300/40 relative overflow-hidden">
            <motion.span
              className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-300/80"
              animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
          <span className="text-xs tracking-widest">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
