"use client";

import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/sections/Hero";
import HowWeWork from "@/components/sections/HowWeWork";
import MenuSection from "@/components/sections/Menu";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";
import Footer from "@/components/Footer";
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
        {/* About us section */}
        <AboutSection />
        {/* Menu section */}
        <MenuSection />
        {/* How we work section */}
        <HowWeWork />
        {/* Contact section */}
        <ContactSection />
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
 
