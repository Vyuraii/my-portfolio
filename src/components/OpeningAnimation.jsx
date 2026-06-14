import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function OpeningAnimation({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#070B17] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center w-64 h-64">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-dashed border-accent-cyan/60"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border border-double border-accent-purple/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <div className="absolute w-32 h-32 bg-accent-cyan/20 rounded-full blur-2xl" />

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-mono text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-accent-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]"
        >
          PUTRA
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 font-mono tracking-widest text-xs uppercase text-accent-cyan"
      >
      </motion.p>
    </motion.div>
  );
}
