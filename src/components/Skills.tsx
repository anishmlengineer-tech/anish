"use client";

import { motion } from 'motion/react';
import { Sword, Shield, ScrollText } from 'lucide-react';

const skills = [
  { name: "Python", type: "blade", icon: <Sword /> },
  { name: "PyTorch", type: "blade", icon: <Sword /> },
  { name: "Computer Vision", type: "blade", icon: <Sword /> },
  { name: "ONNX", type: "shield", icon: <Shield /> },
  { name: "AWS", type: "shield", icon: <Shield /> },
  { name: "Linux", type: "shield", icon: <Shield /> },
  { name: "SQL", type: "scroll", icon: <ScrollText /> },
  { name: "GSAP", type: "scroll", icon: <ScrollText /> },
];

export default function Skills() {
  return (
    <section className="section-container py-20 overflow-hidden">
      <div className="px-4 mb-12 text-center">
        <h2 className="text-4xl font-cinzel text-gold mb-4">The Armory</h2>
        <p className="text-parchment/60 font-chinese tracking-widest">Mastery of the Elements</p>
      </div>

      <div className="flex gap-8 px-8 overflow-x-auto pb-12 no-scrollbar snap-x">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -20, scale: 1.05 }}
            className="flex-shrink-0 w-48 h-64 bg-navy/30 border border-gold/10 rounded-sm flex flex-col items-center justify-center gap-4 snap-center group cursor-pointer relative"
          >
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] group-hover:border-gold transition-all duration-500">
              {skill.icon}
            </div>
            
            <span className="font-cinzel text-gold tracking-wider text-center px-2">{skill.name}</span>
            
            <div className="text-[10px] uppercase tracking-[0.3em] text-parchment/40">
              {skill.type}
            </div>

            {/* Particle burst effect on hover (CSS only) */}
            <div className="absolute -z-10 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity">
              {[...Array(6)].map((_, j) => (
                <div 
                  key={j}
                  className="absolute w-1 h-1 bg-gold rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${j * 0.2}s`
                  }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
