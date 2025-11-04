"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      className="relative z-10 h-screen w-full isolate"
    >
      {/* Readability gradient (middle layer) */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Text content (top layer) */}
      <div className="relative z-10 h-full w-full grid place-items-center px-6 pointer-events-auto">
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <motion.h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold tracking-tight leading-[0.92] drop-shadow-[0_0_24px_rgba(44,245,255,0.15)] bg-gradient-to-r from-rose-400 via-amber-400 to-lime-300 bg-clip-text text-transparent">
            Noodle House
          </motion.h1>
          <p className="mt-5 text-lg md:text-2xl tracking-wide bg-gradient-to-r from-rose-300 via-amber-300 to-lime-200 bg-clip-text text-transparent">
            Hand‑Pulled Noodles, Made Fresh Daily
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 z-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center gap-2 text-white/70"
        >
          <div className="h-6 w-3 rounded-full border border-white/40 relative overflow-hidden">
            <motion.span
              className="absolute left-1/2 top-1 h-1 w-1 -translate-x-1/2 rounded-full bg-white/70"
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
