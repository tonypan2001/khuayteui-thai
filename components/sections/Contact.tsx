"use client";

import { motion } from "framer-motion";
import { content } from "@/contants/content";

export default function ContactSection() {
  const c = content.contact;
  return (
    <section id="contact" className="relative z-10 w-full bg-black py-16">
      <div className="mx-auto grid max-w-5xl items-start gap-8 px-6 md:grid-cols-[1.1fr_1fr]">
        {/* Left: Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-72 w-full overflow-hidden rounded-xl border border-lime-400/20 bg-black/40 md:h-96"
        >
          <iframe
            src={c.mapEmbedUrl}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map location"
          />
        </motion.div>

        {/* Right: contact details */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-left"
        >
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#b9ff4f" }}
          >
            {c.header}
          </h2>

          <div className="mt-4 space-y-4 text-white/85">
            <div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Address</div>
              <div>
                {c.addressLines.map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div><span className="text-white/60">Phone:</span> {c.phone}</div>
              <div><span className="text-white/60">Email:</span> {c.email}</div>
            </div>
            <div>
              <div className="text-white/60 text-sm uppercase tracking-wider">Opening Hours</div>
              <div className="mt-1 grid grid-cols-2 gap-2 md:grid-cols-1">
                {c.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between rounded-md border border-lime-400/15 bg-black/40 px-3 py-2">
                    <span>{h.label}</span>
                    <span className="text-white/70">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

