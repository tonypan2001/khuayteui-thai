"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { content } from "@/contants/content";
import type { MenuItem } from "@/types/menu";
import SmokeBackground from "@/components/SmokeBackground";
import HoverBounceText from "@/components/ui/HoverBounceText";

const ITEMS: MenuItem[] = content.menu.items as MenuItem[];

export default function MenuSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  // Sticky reveal across the section's scroll range
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const total = ITEMS.length;
  // Fade-in header/subheader after section is pinned (on entering)
  const headerOpacity = useTransform(scrollYProgress, [0, 0.06, 0.14], [0, 0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.14], [12, 0]);
  const subOpacity = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
  const subY = useTransform(scrollYProgress, [0.12, 0.22], [8, 0]);

  return (
    <section id="menu" className="relative z-10 w-full py-16">
      <div ref={ref} className="relative min-h-[300vh]">
        <div className="sticky top-0 h-screen">
          {/* animated smoke background */}
          <SmokeBackground className="z-0 pointer-events-none" opacity={0.35} />
          {/* Left-center section header */}
          <motion.div
            className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 z-20 text-left"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: "#b9ff4f", opacity: headerOpacity, y: headerY }}
            >
              <HoverBounceText text={content.menu.header} stackWords amplitude={8} duration={0.45} stagger={0.02} />
            </motion.h2>
            {content.menu.subheader && (
              <motion.p
                style={{ opacity: subOpacity, y: subY }}
                className="mt-2 max-w-xs text-sm md:text-base text-white/80"
              >
                {content.menu.subheader}
              </motion.p>
            )}
          </motion.div>
          <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-center gap-6 px-6 py-10">
            {ITEMS.map((item, i) => (
              <MenuCard
                key={item.id}
                item={item}
                index={i}
                total={total}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  index,
  total,
  progress,
}: {
  item: MenuItem;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const step = 1 / total;
  const appearStart = index * step;
  const appearEnd = appearStart + step * 0.5; // ease in during first half of its window

  const y = useTransform(
    progress,
    [0, appearStart, appearEnd, 1],
    [24, 24, 0, 0],
  );
  const opacity = useTransform(
    progress,
    [0, appearStart, appearEnd, 1],
    [0, 0, 1, 1],
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.2fr]"
    >
      <div className="relative h-56 w-full md:h-64">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 90vw, 40vw"
          className="object-contain drop-shadow-xl transform scale-110 origin-center"
          priority={index === 0}
        />
      </div>
      <div className="text-center md:text-left">
        <h3
          className="text-3xl md:text-4xl font-bold tracking-tight"
          style={{ color: "#b9ff4f" }}
        >
          <HoverBounceText as="span" text={item.title} amplitude={7} duration={0.45} stagger={0.018} />
        </h3>
        <p className="mt-2 text-base md:text-lg text-white/80">{item.desc}</p>
        {!!item.badges?.length && (
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {item.badges.map((b, idx) => (
              <div
                key={idx}
                className="rounded-md border border-lime-400/25 bg-black/40 px-3 py-2 text-left"
              >
                <div className="text-[11px] uppercase tracking-wider text-white/60">
                  {b.label}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "#b9ff4f" }}
                >
                  {b.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
