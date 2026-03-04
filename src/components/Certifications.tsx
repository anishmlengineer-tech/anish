"use client";

import { motion } from 'motion/react';

const certs = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon" },
  { name: "Stanford Code in Place", issuer: "Stanford" },
  { name: "CS50x Harvard", issuer: "Harvard" },
  { name: "Columbia ML", issuer: "Columbia" },
  { name: "GitHub Fundamentals", issuer: "GitHub" }
];

export default function Certifications() {
  return (
    <section className="section-container py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-cinzel text-gold mb-20">Floating Lanterns of Honor</h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.2, 
                duration: 2, 
                ease: "easeOut",
                y: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 3 + Math.random() * 2,
                  ease: "easeInOut"
                }
              }}
              className="w-40 h-56 bg-gold/10 border border-gold/30 rounded-t-full rounded-b-lg flex flex-col items-center justify-center p-4 group cursor-pointer relative"
            >
              {/* Lantern Glow */}
              <div className="absolute inset-0 bg-gold/5 blur-xl group-hover:bg-gold/20 transition-all duration-500" />
              
              <div className="relative z-10 text-center">
                <p className="font-cinzel text-gold text-sm mb-2 leading-tight">
                  {cert.name}
                </p>
                <p className="font-chinese text-[10px] text-parchment/40 uppercase tracking-widest">
                  {cert.issuer}
                </p>
              </div>

              {/* Lantern Tassel */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gold/40" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Lanterns (Decorative) */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`bg-${i}`}
          animate={{ 
            y: [-20, -1000],
            x: [0, Math.sin(i) * 50]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10
          }}
          className="absolute w-4 h-6 bg-gold/5 rounded-sm blur-[1px]"
          style={{ 
            left: `${Math.random() * 100}%`,
            bottom: '-50px'
          }}
        />
      ))}
    </section>
  );
}
