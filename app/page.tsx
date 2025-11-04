"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/Menu";
import OverlayNav from "@/components/OverlayNav";

export default function Home() {
  
  return (
    <main className="relative isolate min-h-screen w-full text-lime-300">
      {/* City canvas is rendered inside Hero only */}
      <SmoothScroll />
      <OverlayNav />

      <div className="relative">
        {/* Hero section */}
        <Hero />
        {/* Menu section */}
        <MenuSection />
      </div>
    </main>
  );
}
 
