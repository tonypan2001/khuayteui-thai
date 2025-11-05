"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HoverBounceText from "@/components/ui/HoverBounceText";
import { content } from "@/contants/content";

export default function HowWeWork() {
  const c = content.howWeWork;
  type Ingredient = { src: string; alt: string; title?: string; detail?: string };
  const items = (c.ingredients ?? []) as unknown as Ingredient[];
  return (
    <section id="how-we-work" className="relative z-10 w-full py-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={c.imageSrc}
          alt={c.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left"
        >
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ color: "#b9ff4f" }}
          >
            <HoverBounceText as="span" text={c.header} amplitude={8} duration={0.45} stagger={0.02} />
          </h2>
          <p className="mt-3 max-w-3xl text-base md:text-lg text-white/85">{c.detail}</p>
        </motion.div>

        {/* Zig-zag rows */}
        <div className="mt-10 flex flex-col gap-10">
          {items.map((it, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.div
                key={it.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`grid items-center gap-6 md:grid-cols-2 ${reversed ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-lime-400/20 bg-black/30">
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 42vw"
                    className="object-cover"
                  />
                </div>

                {/* Opposite-side details */}
                <div className={`text-left ${reversed ? 'md:text-right' : ''}`}>
                  <h3
                    className="text-2xl md:text-3xl font-semibold"
                    style={{ color: "#b9ff4f" }}
                  >
                    {it.title ?? it.alt}
                  </h3>
                  {it.detail && (
                    <p className="mt-2 text-white/85">{it.detail}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
