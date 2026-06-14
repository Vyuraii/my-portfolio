import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { playHoverSound } from '../utils/sound';
import profileImage from '../assets/rai.png';

export default function Profile3D() {
  const { scrollY } = useScroll();

  const rotateX = useTransform(scrollY, [0, 500], [10, -10]);
  const rotateY = useTransform(scrollY, [0, 500], [-15, 15]);

  return (
    <div
      onMouseEnter={playHoverSound}
      className="perspective-1000 w-full max-w-[360px] aspect-[4/5] flex items-center justify-center relative group"
    >
      {/* Animated Outer Glow */}
      <motion.div
        animate={{
          opacity: [0.5, 0.9, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/20 rounded-2xl blur-xl"
      />

      {/* Scanning Line Effect */}
      <motion.div
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent z-20 pointer-events-none"
      />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full glass-card rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Animated Gradient Overlay */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5 bg-[length:200%_200%] z-10 pointer-events-none"
        />

        {/* FOTO BACKGROUND */}
        <img
          src={profileImage}
          alt="Raihan Putra Permana"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            scale-110
            z-0
            pointer-events-none
            select-none
          "
        />

        {/* Overlay agar teks tetap terbaca */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/40
            via-black/20
            to-black/70
            z-10
          "
        />

        {/* Cyan Purple Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-tr
            from-accent-cyan/10
            via-transparent
            to-accent-purple/10
            z-10
          "
        />

        {/* Futuristic Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-10" />

        {/* Animated Corner Accents */}
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-accent-cyan/40 z-20 pointer-events-none" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-accent-purple/40 z-20 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-accent-purple/40 z-20 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-accent-cyan/40 z-20 pointer-events-none" />

        {/* CONTENT */}
        <div className="relative z-20 h-full flex flex-col justify-between p-6">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center font-mono font-bold text-accent-cyan">
              PUTRA
            </div>

            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 bg-accent-cyan/10 backdrop-blur-md border border-accent-cyan/30 rounded-full text-[10px] uppercase font-mono tracking-widest text-accent-cyan"
            >
              Open to Opportunities
            </motion.span>
          </motion.div>

          {/* Ruang Tengah */}
          <div className="flex-1" />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-mono text-xl font-bold text-white tracking-wide">
              Raihan Putra Permana
            </h3>

            <p className="text-sm text-slate-300 mt-1">
              Information Systems Student
            </p>

            <motion.div
              animate={{ scaleX: [1, 0.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-full h-px bg-gradient-to-r from-accent-cyan/50 via-white/20 to-accent-purple/50 my-3 origin-left"
            />

            <p className="text-[11px] text-accent-cyan font-mono tracking-wider">
              Cirebon Polytechnic College of Computer Science
            </p>
          </motion.div>
        </div>

        {/* Animated Border Glow */}
        <motion.div
          animate={{
            opacity: [0.2, 0.6, 0.2],
            borderColor: ['rgba(0,229,255,0.2)', 'rgba(124,58,237,0.4)', 'rgba(0,229,255,0.2)'],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 rounded-2xl border pointer-events-none z-30"
        />
      </motion.div>
    </div>
  );
}
