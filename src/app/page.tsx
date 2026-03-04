"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import dynamic from 'next/dynamic';
import CustomCursor from '@/src/components/CustomCursor';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Skills from '@/src/components/Skills';
import Projects from '@/src/components/Projects';
import Certifications from '@/src/components/Certifications';
import Contact from '@/src/components/Contact';

// Dynamic import for the 3D scene to avoid SSR issues
const Scene = dynamic(() => import('@/src/components/Scene'), { ssr: false });

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-void text-parchment font-sans selection:bg-gold selection:text-void">
      <CustomCursor />
      <Scene />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </div>

      {/* Global Ambient Sound Toggle (Optional Placeholder) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold/40 hover:text-gold hover:border-gold transition-all duration-300">
          <span className="text-[10px] font-chinese">音</span>
        </button>
      </div>
    </main>
  );
}
