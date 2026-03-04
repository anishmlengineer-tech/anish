"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';
import dynamic from 'next/dynamic';
import CustomCursor from '@/src/components/CustomCursor';

// Dynamic imports for sections to improve initial load and code splitting
const Scene = dynamic(() => import('@/src/components/Scene'), { ssr: false });
const Hero = dynamic(() => import('@/src/components/Hero'));
const About = dynamic(() => import('@/src/components/About'));
const Skills = dynamic(() => import('@/src/components/Skills'));
const Projects = dynamic(() => import('@/src/components/Projects'));
const Certifications = dynamic(() => import('@/src/components/Certifications'));
const Contact = dynamic(() => import('@/src/components/Contact'));

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
