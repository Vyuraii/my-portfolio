import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ImageIcon, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

// Import thumbnails so Vite bundles them correctly
import mindcareImg from '../assets/thumbnail/mindcare.png';
import portoImg from '../assets/thumbnail/porto.png';
import stressCheckImg from '../assets/thumbnail/StressCheck.jpeg';
import pendudukImg from '../assets/thumbnail/pendudukJABAR.png';
import kemiskinanImg from '../assets/thumbnail/kemiskinanJABAR.png';

const projects = [
  {
    title: "MindCare AI Platform",
    desc: "AI-powered mental health platform with stress assessment, journaling, personalized recommendations, and analytics.",
    tech: ["React","Tailwind CSS","Node.js","Express.js","MySQL","Sequelize","JWT","Python","Scikit-Learn","TensorFlow","Pandas","NumPy","Streamlit"],
    github: "https://github.com/Lukmanul6305/capstone-project-mindcare",
    image: mindcareImg,
  },
  {
    title: "Personal Portfolio",
    desc: "Futuristic portfolio website with 3D interactions, animated showcases, certification previews, and responsive cyberpunk-inspired design.",
    tech: ["React","Vite","Tailwind CSS","Framer Motion","React PDF","PDF.js","Lucide React","React Icons","JavaScript"],
    github: "https://github.com/Vyuraii/my-portfolio",
    image: portoImg,
  },
  {
    title: "Stress Check",
    desc: "Mental wellness platform featuring AI stress analysis, mood tracking, and guided self-reflection.",
    tech: ["React","Vite","Tailwind CSS","Gemini AI","Face API.js"],
    github: "https://github.com/Vyuraii/Stress-Check/",
    image: stressCheckImg,
  },
  {
    title: "Analysis of Population Data for West Java (2019 - 2020)",
    desc: "Interactive population analytics dashboard for West Java built with Python and Streamlit.",
    tech: ["Python","Pandas","NumPy","Matplotlib","Seaborn","Streamlit","Jupyter Notebook"],
    github: "https://github.com/Vyuraii/analisis-penduduk-jabar",
    image: pendudukImg,
  },
  {
    title: "Analysis of the Poverty Line in West Java (2004–2025)",
    desc: "Interactive poverty line dashboard for West Java with dynamic regional and year filtering.",
    tech: ["Python","Pandas","Plotly","Streamlit"],
    github: "https://github.com/username/dashboard-kemiskinan-jabar",
    image: kemiskinanImg,
  },
];

function TechTooltip({ tech, anchorRef, visible }) {
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (visible && anchorRef.current) {
      const rect = anchorRef.current.getBoundingClientRect();
      setPos({
        top: rect.top + window.scrollY - 8,
        left: rect.left + window.scrollX,
      });
    }
  }, [visible, anchorRef]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            transform: 'translateY(-100%)',
            zIndex: 9999,
          }}
          className="w-56 pointer-events-none"
        >
          <div className="rounded-xl border border-accent-cyan/30 bg-black/95 backdrop-blur-xl p-3 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
            <div className="text-[9px] font-mono uppercase tracking-widest text-accent-cyan mb-2">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ proj, idx, isDragging }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const badgeRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: idx * 0.15 }}
      onMouseEnter={playHoverSound}
      whileHover={!isDragging ? {
        y: -10,
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300, damping: 10 }
      } : {}}
      className="glass-card rounded-xl border border-white/5 neon-border-purple flex flex-col justify-between group relative"
    >
      {/* Animated gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent pointer-events-none z-10 rounded-xl"
      />

      {/* Image */}
      <div className="h-44 bg-gradient-to-br from-darkBg-3 to-darkBg-2 border-b border-white/5 relative overflow-hidden rounded-t-xl">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 via-transparent to-accent-purple/5 bg-[length:200%_200%]"
        />
        {proj.image ? (
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover relative z-10"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-20">
            <ImageIcon className="w-8 h-8 text-slate-600" />
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-wider">No image</span>
          </div>
        )}
        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-accent-cyan/30 group-hover:border-accent-cyan/70 transition-all duration-300 z-30" />
        <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-accent-purple/30 group-hover:border-accent-purple/70 transition-all duration-300 z-30" />
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-accent-purple/30 group-hover:border-accent-purple/70 transition-all duration-300 z-30" />
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-accent-cyan/30 group-hover:border-accent-cyan/70 transition-all duration-300 z-30" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-base font-mono font-bold text-white group-hover:text-accent-cyan transition-colors duration-200">
              {proj.title}
            </h4>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200 group/gh"
              title="View on GitHub"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-slate-400 group-hover/gh:text-white transition-colors" />
            </a>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed mb-5">{proj.desc}</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {proj.tech.slice(0, 3).map((t, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(0,229,255,0.15)' }}
              className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5"
            >
              {t}
            </motion.span>
          ))}

          {proj.tech.length > 3 && (
            <>
              <motion.span
                ref={badgeRef}
                whileHover={{ scale: 1.08, backgroundColor: 'rgba(168,85,247,0.15)' }}
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
                className="text-[10px] font-mono px-2 py-1 rounded text-accent-purple border border-accent-purple/30 bg-accent-purple/10 cursor-pointer"
              >
                +{proj.tech.length - 3}
              </motion.span>

              {/* Portal-style tooltip rendered via fixed position */}
              <TechTooltip tech={proj.tech} anchorRef={badgeRef} visible={tooltipVisible} />
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef(null);
  const setWidthRef = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    setWidthRef.current = el.scrollWidth / 3;
    el.scrollLeft = setWidthRef.current;
  }, []);

  const normalizeScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const setWidth = setWidthRef.current;
    if (el.scrollLeft <= 1) {
      el.scrollLeft += setWidth;
    } else if (el.scrollLeft >= setWidth * 2 - 1) {
      el.scrollLeft -= setWidth;
    }
  }, []);

  const tick = useCallback(() => {
    const el = scrollRef.current;
    if (el && !isPaused) {
      el.scrollLeft += 0.6;
      const setWidth = setWidthRef.current;
      if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [isPaused]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [tick]);

  const scrollByCard = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsPaused(true);
    const card = el.querySelector(':scope > div');
    const cardWidth = card ? card.getBoundingClientRect().width : 340;
    const gap = 24;
    const step = cardWidth + gap;
    const startX = el.scrollLeft;
    const targetX = startX + dir * step;
    const duration = 450;
    const startTime = performance.now();
    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = startX + (targetX - startX) * easeInOutCubic(progress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        normalizeScroll();
        setTimeout(() => setIsPaused(false), 400);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase font-mono tracking-widest text-accent-cyan mb-2"
        >
          Showcase
        </motion.h2>
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, -10, 0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FolderOpen className="w-6 h-6 text-accent-purple" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-white"
          >
            Selected Projects
          </motion.h3>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[10px] font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full ml-auto mr-3"
          />
          <div className="flex gap-2">
            <button
              onClick={() => scrollByCard(-1)}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-full bg-white/5 hover:bg-accent-cyan/20 border border-white/10 hover:border-accent-cyan/40 transition-colors duration-200"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4 text-slate-300" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-full bg-white/5 hover:bg-accent-cyan/20 border border-white/10 hover:border-accent-cyan/40 transition-colors duration-200"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4 text-slate-300" />
            </button>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-purple mt-4"
        />
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-darkBg-1 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-darkBg-1 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-none pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...projects, ...projects, ...projects].map((proj, idx) => (
            <div key={idx} className="flex-shrink-0 w-[300px] sm:w-[340px]">
              <ProjectCard proj={proj} idx={idx % projects.length} isDragging={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
