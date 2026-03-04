"use client";

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section-container flex flex-col items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full bg-parchment/5 border border-gold/20 p-12 rounded-sm relative overflow-hidden"
      >
        {/* Scroll Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
        
        <h2 className="text-4xl font-cinzel text-gold mb-12 text-center">The Wind Summit</h2>
        
        <div className="space-y-8 relative z-10">
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:anishbtechaiads@gmail.com" className="flex items-center gap-3 text-parchment/80 hover:text-gold transition-colors text-lg">
              <Mail className="w-5 h-5 text-gold" />
              anishbtechaiads@gmail.com
            </a>
            <a href="tel:+916374745300" className="flex items-center gap-3 text-parchment/80 hover:text-gold transition-colors text-lg">
              <Phone className="w-5 h-5 text-gold" />
              +91 6374745300
            </a>
            <a href="https://anish-k-m.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-parchment/80 hover:text-gold transition-colors text-lg">
              <Globe className="w-5 h-5 text-gold" />
              anish-k-m.netlify.app
            </a>
          </div>

          <div className="flex justify-center gap-8 pt-8 border-t border-gold/10">
            <motion.a 
              whileHover={{ y: -5, color: '#C9A84C' }}
              href="https://github.com/AnishKMBtech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-parchment/40"
            >
              <Github className="w-8 h-8" />
              <span className="text-[10px] uppercase tracking-widest">Github</span>
            </motion.a>
            <motion.a 
              whileHover={{ y: -5, color: '#C9A84C' }}
              href="https://linkedin.com/in/anish-k-m-273670319" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-parchment/40"
            >
              <Linkedin className="w-8 h-8" />
              <span className="text-[10px] uppercase tracking-widest">LinkedIn</span>
            </motion.a>
          </div>
        </div>

        {/* Decorative Ink Swirl */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      </motion.div>

      <footer className="mt-20 text-parchment/20 text-[10px] uppercase tracking-[0.5em] font-chinese">
        © 2026 ANISH K M • WHERE WINDS MEET
      </footer>
    </section>
  );
}
