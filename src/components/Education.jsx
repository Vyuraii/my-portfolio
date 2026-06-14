import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Code2 } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

const educationData = [
  {
    institution: "Cirebon Polytechnic College of Computer Science",
    degree: "Major: Information System",
    period: "2023 – Present",
    description: "Focusing on standard industry curricula covering business frameworks, database architectures, analytical modeling, and system deployment engineering.",
    color: "accent-cyan",
    icon: GraduationCap,
    active: true,
  },
  {
    institution: "Coding Camp powered by DBS Foundation",
    degree: "Cohort – Data Scientist",
    period: "Feb – Jul 2026",
    description: "An intensive coding bootcamp cohort program focused on data science, covering practical skills in data analysis, machine learning, and applied AI development.",
    color: "accent-purple",
    icon: Code2,
    active: false,
  },
  {
    institution: "SMA Negeri 1 Kandanghaur",
    degree: "MIPA (Matematika dan Ilmu Pengetahuan Alam)",
    period: "2020 – 2023",
    description: "Focused on the science stream curriculum covering mathematics, physics, chemistry, and biology as core disciplines.",
    color: "accent-blue",
    icon: BookOpen,
    active: false,
  },
];

export default function Education() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase font-mono tracking-widest text-accent-cyan mb-2"
        >
          Background
        </motion.h2>
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <GraduationCap className="w-6 h-6 text-accent-cyan" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold font-sans text-white"
          >
            Education
          </motion.h3>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple mt-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationData.map((edu, idx) => {
          const Icon = edu.icon;
          const colorMap = {
            'accent-cyan': {
              border: 'rgba(0,229,255,0.15)',
              hoverBorder: 'rgba(0,229,255,0.4)',
              shadow: 'rgba(0,229,255,0.1)',
              textClass: 'text-accent-cyan',
              bgClass: 'bg-accent-cyan/10',
              gradientClass: 'from-accent-cyan/5',
              dotClass: 'bg-accent-cyan',
            },
            'accent-purple': {
              border: 'rgba(124,58,237,0.15)',
              hoverBorder: 'rgba(124,58,237,0.4)',
              shadow: 'rgba(124,58,237,0.1)',
              textClass: 'text-accent-purple',
              bgClass: 'bg-accent-purple/10',
              gradientClass: 'from-accent-purple/5',
              dotClass: 'bg-accent-purple',
            },
            'accent-blue': {
              border: 'rgba(99,102,241,0.15)',
              hoverBorder: 'rgba(99,102,241,0.4)',
              shadow: 'rgba(99,102,241,0.1)',
              textClass: 'text-indigo-400',
              bgClass: 'bg-indigo-400/10',
              gradientClass: 'from-indigo-400/5',
              dotClass: 'bg-indigo-400',
            },
          };
          const c = colorMap[edu.color];

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-6 rounded-xl border relative group overflow-hidden transition-all duration-300 flex flex-col h-full"
              style={{ borderColor: c.border }}
              onMouseEnter={(e) => {
                playHoverSound();
                e.currentTarget.style.borderColor = c.hoverBorder;
                e.currentTarget.style.boxShadow = `0 0 20px ${c.shadow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Hover gradient overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${c.gradientClass} to-transparent pointer-events-none`}
              />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className={`p-2.5 rounded-lg ${c.bgClass} flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${c.textClass}`} />
                </div>
                {edu.active && (
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Current
                  </span>
                )}
                <span className={`text-[10px] font-mono ${c.textClass} ${c.bgClass} px-2.5 py-1 rounded-full ml-auto`}>
                  {edu.period}
                </span>
              </div>

              <h4 className="font-mono font-bold text-sm text-white leading-snug relative z-10 mb-1">
                {edu.institution}
              </h4>
              <p className={`text-xs font-mono mb-3 ${c.textClass} relative z-10`}>
                {edu.degree}
              </p>

              <motion.div
                animate={{ scaleX: [1, 0.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.5 }}
                className="w-full h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent mb-3 origin-left relative z-10"
              />

              <p className="text-xs text-slate-500 leading-relaxed relative z-10">
                {edu.description}
              </p>

              {/* Decorative blur */}
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 ${c.dotClass}/10 rounded-full blur-xl pointer-events-none`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
