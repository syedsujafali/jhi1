import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Comfort from "@/components/Comfort";
import Gallery from "@/components/Gallery";
import ServiceArea from "@/components/ServiceArea";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ArrowRight, PhoneIcon } from "@/components/ui";
import { site } from "@/data/site";
import { cn } from "@/utils/cn";

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [showTop, setShowTop] = useState(false);

  // Gentle page-entry transition
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 40);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen bg-warm-white transition-opacity duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        mounted ? "opacity-100" : "opacity-0",
      )}
    >
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-warm-white"
      >
        Skip to content
      </a>

      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Comfort />
        <Gallery />
        <ServiceArea />
        <CTA />
        <Contact />
      </main>

      <Footer />

      {/* ------------------------------------------------ Floating actions -- */}
      <div
        className={cn(
          "fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <a
          href={site.phoneHref}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-warm-white shadow-[0_18px_40px_-16px_rgba(35,59,80,0.7)] transition-transform duration-400 hover:-translate-y-1 md:hidden"
          aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
        >
          <PhoneIcon className="h-6 w-6" />
        </a>
        <a
          href="#home"
          className="hidden h-12 w-12 items-center justify-center rounded-full border border-navy/12 bg-warm-white/90 text-navy shadow-[0_14px_30px_-16px_rgba(35,59,80,0.5)] backdrop-blur transition-transform duration-400 hover:-translate-y-1 md:flex"
          aria-label="Back to top"
        >
          <ArrowRight className="h-4 w-4 -rotate-90" />
        </a>
      </div>
    </div>
  );
}
