"use client";

import { motion } from 'motion/react';

const projects = [
  {
    title: "AI Medical Imaging Pipeline",
    tech: "SigLIP v2, YOLO, ONNX",
    desc: "Advanced diagnostic pipeline for high-precision medical image analysis.",
    icon: "🏯"
  },
  {
    title: "Nokia Predictive Maintenance",
    tech: "MySQL, Real-time Visualization",
    desc: "Strategic dashboard for predicting equipment failure in telecommunications.",
    icon: "📡"
  },
  {
    title: "Object Detection Patent",
    tech: "Patent No. 202541073911",
    desc: "Real-time object detection system designed for the visually impaired.",
    icon: "👁️"
  }
];

export default function Projects() {
  return (
    <section className="section-container py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cinzel text-gold mb-16 text-center">Mountain Peak Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] bg-stone-900/80 border border-gold/20 rounded-sm p-8 flex flex-col items-center justify-center text-center group cursor-pointer overflow-hidden"
            >
              {/* Stone Texture Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
              
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-cinzel text-gold mb-4 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-parchment/60 text-sm mb-6 font-chinese tracking-wide">
                {project.tech}
              </p>
              
              <div className="h-px w-12 bg-gold/40 mb-6 group-hover:w-24 transition-all duration-500" />
              
              <p className="text-parchment/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {project.desc}
              </p>

              {/* Ink Seal Decoration */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-red-900/40 rounded-sm flex items-center justify-center text-red-900/40 font-chinese text-xs rotate-12">
                SEAL
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
