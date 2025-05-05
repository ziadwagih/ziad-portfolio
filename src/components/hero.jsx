// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-[#0c0c20] to-black"
    >
      {/* Parallax blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#622aff]/30 rounded-full blur-3xl opacity-50 z-0"
        style={{ top: `${scrollY * 0.2}px`, left: '10%' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Content container */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-5xl font-bold text-[#7dd3fc] font-['Orbitron'] drop-shadow-[0_0_6px_rgba(0,255,255,0.3)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Hi, I’m <span className="text-accent">Ziad</span>
        </motion.h1>
        <motion.p
          className="mt-4 text-lg tracking-wide text-[#94a3b8] font-['Sora'] drop-shadow-[0_0_4px_rgba(125,211,252,0.2)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Crafting immersive front-end experiences with{' '}
          <span className="text-white font-semibold">React</span>,{' '}
          <span className="text-white font-semibold">Tailwind</span>, and{' '}
          <span className="text-white font-semibold">Motion</span>. Driven by
          dark aesthetics, smooth interaction, and bold visuals.
        </motion.p>
      </motion.div>

      {/* Fog overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 z-0" />
    </section>
  );
}
