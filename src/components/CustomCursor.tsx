"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number, y: number, id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTrail(prev => [{ x: e.clientX, y: e.clientY, id: Date.now() }, ...prev].slice(0, 10));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-6 h-6 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference blur-[2px]"
        style={{ transform: `translate(${position.x - 12}px, ${position.y - 12}px)` }}
      />
      {trail.map((point, i) => (
        <div 
          key={point.id}
          className="fixed top-0 left-0 w-4 h-4 bg-gold/30 rounded-full pointer-events-none z-40 blur-[4px]"
          style={{ 
            transform: `translate(${point.x - 8}px, ${point.y - 8}px)`,
            opacity: (10 - i) / 10,
            scale: (10 - i) / 10
          }}
        />
      ))}
    </>
  );
}
