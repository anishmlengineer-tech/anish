"use client";

import { motion } from 'motion/react';

const experiences = [
  { title: "AI Intern", company: "IIT Madras Research Park", period: "Present" },
  { title: "Research Collaborator", company: "Nokia", period: "2024" },
  { title: "B.Tech AI & Data Science", company: "Easwari Engineering College", period: "2023 - 2027" }
];

export default function About() {
  return (
    <section className="section-container flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-cinzel text-gold mb-8">The Path of Wisdom</h2>
          <p className="text-lg leading-relaxed text-parchment/70 mb-6">
            In the misty landscapes of technology, I seek the essence of intelligence. 
            My journey is defined by the pursuit of elegant solutions to complex problems, 
            blending the precision of code with the fluidity of artificial intelligence.
          </p>
          <div className="h-px w-24 bg-gold/40" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-navy/40 border border-gold/20 p-6 rounded-sm backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              <h3 className="text-gold font-cinzel text-xl mb-1">{exp.title}</h3>
              <p className="text-parchment/90 font-medium">{exp.company}</p>
              <p className="text-parchment/40 text-sm mt-2">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
