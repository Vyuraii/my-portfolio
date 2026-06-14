import React from 'react';
import { motion } from 'framer-motion';
import { playHoverSound } from '../utils/sound';

export default function Hero() {
  const handleContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onMouseEnter={playHoverSound}
      className="flex flex-col justify-center h-full"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-lg font-mono text-accent-cyan mb-2 tracking-wide"
        >
          Hello, I'm Raihan Putra Permana 
        </motion.h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-sans tracking-tight leading-tight mb-4">
          Information System Student & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple">
            Aspiring Data Enthusiast
          </span>
        </h1>
        <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-xl">
          I am an Information System student at STIKOM Poltek Cirebon, class of 2023, with a strong interest in the world of data and artificial intelligence. I am actively learning and exploring AI, Data Science, Data Analytics, and Data Engineering to build a solid understanding of how data can be leveraged strategically.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <motion.button
          onClick={handleContact}
          onMouseEnter={playHoverSound}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-darkBg-1 font-semibold rounded-lg font-mono shadow-cyanGlow hover:scale-105 transition-all duration-300"
        >
          Hire Me
        </motion.button>
        <motion.button
          onClick={handleContact}
          onMouseEnter={playHoverSound}
          whileHover={{ scale: 1.08, backgroundColor: 'rgba(124,58,237,0.15)' }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-transparent border border-accent-purple text-white font-semibold rounded-lg font-mono hover:shadow-purpleGlow transition-all duration-300"
        >
          Contact
        </motion.button>
      </motion.div>
    </div>
  );
}
