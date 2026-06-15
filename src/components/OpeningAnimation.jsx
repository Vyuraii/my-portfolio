import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LETTERS = ['P', 'U', 'T', 'R', 'A'];

export default function OpeningAnimation({ onComplete }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);   // letters appear
    const t2 = setTimeout(() => setPhase(2), 2000);  // glitch + rings
    const t3 = setTimeout(() => setPhase(3), 3400);  // final flash
    const t4 = setTimeout(() => onComplete(), 4800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#070B17] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scan-line sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(0,229,255,0.04) 50%, transparent 100%)',
          backgroundSize: '100% 8px',
        }}
        animate={{ backgroundPositionY: ['0px', '800px'] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Outer rotating rings */}
      <div className="absolute flex items-center justify-center w-80 h-80">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${260 + i * 36}px`,
              height: `${260 + i * 36}px`,
              borderColor:
                i === 0
                  ? 'rgba(0,229,255,0.5)'
                  : i === 1
                  ? 'rgba(168,85,247,0.35)'
                  : 'rgba(0,229,255,0.15)',
              borderStyle: i === 1 ? 'dashed' : 'solid',
              borderWidth: i === 2 ? '1px' : '1.5px',
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 8 + i * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Corner tick marks on outer ring */}
        {[0, 90, 180, 270].map((deg) => (
          <motion.div
            key={deg}
            className="absolute w-3 h-3 border-t-2 border-r-2 border-accent-cyan"
            style={{
              transform: `rotate(${deg}deg) translate(156px, -6px)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: deg / 360 }}
          />
        ))}
      </div>

      {/* Glow blob behind letters */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background:
            'radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(168,85,247,0.10) 60%, transparent 80%)',
          filter: 'blur(30px)',
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* PUTRA letters */}
      <div className="relative flex items-center gap-3 z-10">
        {LETTERS.map((letter, i) => (
          <motion.span
            key={letter}
            initial={{ opacity: 0, y: 60, rotateX: -90 }}
            animate={
              phase >= 1
                ? {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    textShadow: [
                      '0 0 20px rgba(0,229,255,0.9)',
                      '0 0 40px rgba(168,85,247,0.9)',
                      '0 0 20px rgba(0,229,255,0.9)',
                    ],
                  }
                : {}
            }
            transition={{
              delay: i * 0.12,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              textShadow: { duration: 2, repeat: Infinity, delay: i * 0.2 },
            }}
            className="font-mono text-6xl font-black tracking-widest select-none"
            style={{
              color: 'transparent',
              WebkitTextStroke: '2px rgba(0,229,255,0.9)',
              textShadow: '0 0 20px rgba(0,229,255,0.6)',
            }}
          >
            {letter}
          </motion.span>
        ))}

        {/* Glitch copies */}
        {phase >= 2 && (
          <>
            <motion.div
              className="absolute inset-0 flex items-center gap-3 pointer-events-none"
              animate={{
                x: [-2, 2, -1, 0],
                opacity: [0.6, 0.3, 0.5, 0],
                filter: ['hue-rotate(0deg)', 'hue-rotate(180deg)', 'hue-rotate(0deg)'],
              }}
              transition={{ duration: 0.4, times: [0, 0.3, 0.7, 1] }}
            >
              {LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="font-mono text-6xl font-black tracking-widest select-none"
                  style={{
                    color: 'rgba(255,0,80,0.7)',
                    WebkitTextStroke: '1px rgba(255,0,80,0.5)',
                  }}
                >
                  {letter}
                </span>
              ))}
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center gap-3 pointer-events-none"
              animate={{
                x: [3, -3, 1, 0],
                opacity: [0.5, 0.2, 0.4, 0],
              }}
              transition={{ duration: 0.4, delay: 0.05, times: [0, 0.3, 0.7, 1] }}
            >
              {LETTERS.map((letter, i) => (
                <span
                  key={i}
                  className="font-mono text-6xl font-black tracking-widest select-none"
                  style={{
                    color: 'rgba(0,229,255,0.6)',
                    WebkitTextStroke: '1px rgba(0,229,255,0.4)',
                  }}
                >
                  {letter}
                </span>
              ))}
            </motion.div>
          </>
        )}
      </div>

      {/* Horizontal laser lines */}
      {phase >= 2 && (
        <>
          {[-60, 60].map((offset, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ top: `calc(50% + ${offset}px)`, left: 0, right: 0, height: '1px' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div
                className="h-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${
                    i === 0 ? 'rgba(0,229,255,0.8)' : 'rgba(168,85,247,0.8)'
                  }, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </>
      )}

      {/* Final white flash */}
      {phase >= 3 && (
        <motion.div
          className="absolute inset-0 bg-white pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.25, 0] }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Bottom status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 1 ? 0.5 : 0 }}
        className="absolute bottom-10 flex items-center gap-3 font-mono text-[10px] text-accent-cyan tracking-widest uppercase"
      >
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          ▮
        </motion.span>
        <span>Initializing Portfolio</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
        >
          ▮
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
