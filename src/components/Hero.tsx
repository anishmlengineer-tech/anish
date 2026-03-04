"use client";

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section-container flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative"
      >
        <h1 className="text-7xl md:text-9xl font-cinzel text-gold tracking-widest mb-4">
          ANISH K M
        </h1>
        <div className="h-1 w-0 bg-gold mx-auto animate-[width_2s_ease-in-out_forwards]" style={{ width: '100%' }} />
        <p className="font-chinese text-xl md:text-2xl mt-6 text-parchment/80 tracking-[0.2em]">
          SOFTWARE ENGINEER • AI SPECIALIST
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] text-gold/60 uppercase">Scroll to enter the grove</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-gold w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
