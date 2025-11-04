"use client";

import CanvasScene from "@/components/CanvasScene";
import { useLenis } from "@/lib/useLenis";
import Hero from "@/components/sections/Hero";
import OverlayNav from "@/components/OverlayNav";

export default function Home() {
  useLenis(true);

  return (
    <main className="min-h-screen w-full text-white">
      <CanvasScene />
      <OverlayNav />

      <div className="relative z-10">
        {/* Hero section (pinned and orchestrated) */}
        <Hero />
        <Section
          id="transport"
          title="Seamless Transport"
          subtitle="Autonomous transit and multi-modal hubs"
        />
        <Section
          id="business"
          title="Business District"
          subtitle="Neon towers and 24/7 energy"
        />
        <Section
          id="residential"
          title="Residential Calm"
          subtitle="Green terraces above the grid"
        />
        <Section
          id="outro"
          title="The MetraCity Story"
          subtitle="Scroll again to revisit the journey"
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
    <section id={id} className="h-screen w-full grid place-items-center">
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
