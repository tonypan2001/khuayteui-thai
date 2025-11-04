"use client";

import { useLenis } from "@/lib/useLenis";
import Hero from "@/components/sections/Hero";
import OverlayNav from "@/components/OverlayNav";

export default function Home() {
  useLenis(true);

  return (
    <main className="relative isolate min-h-screen w-full text-white">
      {/* City canvas is rendered inside Hero only */}
      <OverlayNav />

      <div className="relative">
        {/* Hero section (pinned and orchestrated) */}
        <Hero />
        <Section
          id="menu"
          title="Signature Bowls"
          subtitle="Rich broths, fresh noodles, bold flavors"
        />
        <Section
          id="ingredients"
          title="Fresh Ingredients"
          subtitle="Locally sourced produce and house‑made sauces"
        />
        <Section
          id="kitchen"
          title="Our Kitchen"
          subtitle="Hand‑pulled noodles crafted to order"
        />
        <Section
          id="visit"
          title="Visit Us"
          subtitle="Dine‑in, takeaway, or order online"
        />
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section id={id} className="relative z-20 h-screen w-full grid place-items-center bg-black">
      <div
        data-overlay
        className="text-center max-w-3xl px-6 py-8 backdrop-blur-sm/10 bg-white/0"
      >
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/80">{subtitle}</p>
      </div>
    </section>
  );
}
