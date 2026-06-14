import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { playHoverSound } from '../utils/sound';

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.substring(0, 2));
      if (start === end) return;

      let totalMiliseconds = 1500;
      let duration = Math.floor(totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, duration);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Statistics() {
  const stats = [
    { id: 1, value: "5+", label: "Projects Done" },
    { id: 2, value: "2+", label: "Years Learning" },
    { id: 3, value: "15+", label: "Certifications" },
    { id: 4, value: "15", label: "Tech Stacks" }
  ];

  return (
    <section id="about" className="py-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          onMouseEnter={playHoverSound}
          whileHover={{
            scale: 1.05,
            y: -8,
            transition: { type: 'spring', stiffness: 300, damping: 10 }
          }}
          className="glass-card p-6 rounded-xl border border-white/5 text-center hover:border-accent-cyan/30 transition-all duration-300 relative overflow-hidden group"
        >
          {/* Animated glow background */}
          <motion.div
            animate={{
              opacity: [0, 0.3, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
            className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-transparent pointer-events-none"
          />

          <motion.h3
            animate={{
              textShadow: [
                '0 0 0px rgba(0,229,255,0)',
                '0 0 20px rgba(0,229,255,0.3)',
                '0 0 0px rgba(0,229,255,0)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
            className="relative z-10 text-3xl sm:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-1"
          >
            <Counter value={stat.value} suffix={stat.value.includes('+') ? '+' : ''} />
          </motion.h3>
          <p className="relative z-10 text-xs uppercase tracking-widest text-slate-500 font-mono">
            {stat.label}
          </p>

          {/* Bottom glow bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent origin-left"
          />
        </motion.div>
      ))}
    </section>
  );
}
