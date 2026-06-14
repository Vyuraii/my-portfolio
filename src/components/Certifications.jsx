import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import { playHoverSound } from '../utils/sound';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfThumbnail({ url }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-3 relative z-20">
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FileText className="w-10 h-10 text-slate-600 group-hover:text-accent-purple transition-colors duration-300" />
        </motion.div>
        <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">
          Certificate PDF
        </span>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-darkBg-2">
      <Document
        file={url}
        loading={
          <FileText className="w-10 h-10 text-slate-600 animate-pulse" />
        }
        onLoadError={() => setError(true)}
      >
        <Page
          pageNumber={1}
          height={176}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}

const certificates = [
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Fundamental concepts of data science including data exploration, statistical analysis, and introductory machine learning workflows.",
    pdfUrl: new URL('../assets/sertif/Belajar Dasar Data Science.pdf', import.meta.url).href,
    color: "accent-purple",
  },
  {
    title: "Belajar Dasar Git Dan Github",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Version control fundamentals using Git and GitHub, covering branching, pull requests, and collaborative development workflows.",
    pdfUrl: new URL('../assets/sertif/Belajar Dasar Git Dan Github.pdf', import.meta.url).href,
    color: "accent-cyan",
  },
  {
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Principles of data visualization, chart selection, and storytelling with data using modern tools and best practices.",
    pdfUrl: new URL('../assets/sertif/Belajar Dasar Visualisasi Data.pdf', import.meta.url).href,
    color: "accent-blue",
  },
  {
    title: "Belajar Fundamental Analisis Data",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "In-depth data analysis methodology including data wrangling, exploratory data analysis, and insight generation techniques.",
    pdfUrl: new URL('../assets/sertif/Belajar Fundamental Analisis Data.pdf', import.meta.url).href,
    color: "emerald-400",
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Core data processing techniques covering ETL pipelines, data cleaning strategies, and transformation best practices.",
    pdfUrl: new URL('../assets/sertif/Belajar Fundamental Pemrosesan Data.pdf', import.meta.url).href,
    color: "pink-500",
  },
  {
    title: "Belajar Matematika Untuk Data Science",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Mathematics foundations for data science including linear algebra, statistics, probability, and calculus applications in ML.",
    pdfUrl: new URL('../assets/sertif/Belajar Matematika Untuk Data Science.pdf', import.meta.url).href,
    color: "accent-purple",
  },
  {
    title: "Belajar Machine Learning Untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Beginner-level machine learning concepts covering supervised and unsupervised learning, model evaluation, and deployment basics.",
    pdfUrl: new URL('../assets/sertif/Belajar Mechine Learning Untuk Pemula.pdf', import.meta.url).href,
    color: "accent-cyan",
  },
  {
    title: "Human Capital Excellence",
    issuer: "Professional Development Program",
    date: "2026",
    description: "Professional development training focused on human capital management, organizational excellence, and leadership competencies.",
    pdfUrl: new URL('../assets/sertif/HUMAN CAPITAL EXCELLENCE.pdf', import.meta.url).href,
    color: "accent-blue",
  },
  {
    title: "Intro To Data Analytics",
    issuer: "RevoU",
    date: "2026",
    description: "Introduction to data analytics fundamentals covering data querying, basic statistics, and business-driven data interpretation.",
    pdfUrl: new URL('../assets/sertif/Intro To Data Analytics.pdf', import.meta.url).href,
    color: "emerald-400",
  },
  {
    title: "Introduction to Financial Literacy",
    issuer: "Financial Education Program",
    date: "2026",
    description: "Core financial literacy concepts including personal finance, budgeting frameworks, investment basics, and economic awareness.",
    pdfUrl: new URL('../assets/sertif/Introduction to Financial Literacy.pdf', import.meta.url).href,
    color: "pink-500",
  },
  {
    title: "Memulai Dasar Pemrograman",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Programming fundamentals for aspiring developers — logic, algorithms, variables, control flow, and basic problem solving.",
    pdfUrl: new URL('../assets/sertif/Memulai Dasar Pemrograman untuk Menjadi Pengembang.pdf', import.meta.url).href,
    color: "accent-purple",
  },
  {
    title: "Memulai Pemrograman Dengan Python",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Hands-on Python programming course covering syntax, data structures, functions, and applied scripting for data tasks.",
    pdfUrl: new URL('../assets/sertif/Memulai Pemrograman Dengan Python.pdf', import.meta.url).href,
    color: "accent-cyan",
  },
  {
    title: "Career Preparation Training",
    issuer: "Professional Skills Program",
    date: "2026",
    description: "Structured career readiness training covering resume building, interview techniques, professional communication, and workplace etiquette.",
    pdfUrl: new URL('../assets/sertif/Pelatihan CAREER PREPARATION.pdf', import.meta.url).href,
    color: "accent-blue",
  },
  {
    title: "Public Speaking Training",
    issuer: "Professional Skills Program",
    date: "2026",
    description: "Practical public speaking workshop developing presentation skills, confidence, audience engagement, and persuasive communication.",
    pdfUrl: new URL('../assets/sertif/Pelatihan PUBLIC SPEAKING.pdf', import.meta.url).href,
    color: "emerald-400",
  },
  {
    title: "Pengenalan ke Logika Pemrograman",
    issuer: "Dicoding Indonesia",
    date: "2025",
    description: "Introduction to programming logic — computational thinking, flowcharts, pseudocode, and algorithm design for beginners.",
    pdfUrl: new URL('../assets/sertif/Pengenalan ke Logika Pemrograman.pdf', import.meta.url).href,
    color: "pink-500",
  },
  {
    title: "CAYE ASEAN 2026",
    issuer: "Online Selection Program",
    date: "2026",
    description: "Participation certificate for the CAYE ASEAN 2026 online selection program — a competitive regional youth excellence initiative.",
    pdfUrl: new URL('../assets/sertif/participating in online selection program  CAYE ASEAN 2026.pdf', import.meta.url).href,
    color: "accent-purple",
  },
  {
    title: "Content That Pays",
    issuer: "Creative Business Talkshow",
    date: "2026",
    description: "Talkshow certificate exploring the business side of content creation — monetization strategies, brand building, and creative economics.",
    pdfUrl: new URL('../assets/sertif/talkshow CONTENT THAT PAYS, THE BUSINESS BEHIND CREATIVITY.pdf', import.meta.url).href,
    color: "accent-cyan",
  },
];

export default function Certifications() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const rafRef = useRef(null);
  const setWidthRef = useRef(0);

  // Start scrolled to the middle copy so we can loop both directions
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
      el.scrollLeft -= 0.6;
      const setWidth = setWidthRef.current;
      if (el.scrollLeft <= 0) {
        el.scrollLeft += setWidth;
      }
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [isPaused]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
    <section className="py-20 border-t border-white/5">
      <div className="mb-12 flex items-center gap-3">
        <motion.div
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Award className="w-6 h-6 text-accent-purple" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold font-sans text-white"
        >
          Certifications
        </motion.h3>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[10px] font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded-full ml-auto mr-3"
        >
          Auto-play ←
        </motion.span>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByCard(-1)}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-full bg-white/5 hover:bg-accent-purple/20 border border-white/10 hover:border-accent-purple/40 transition-colors duration-200"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-4 h-4 text-slate-300" />
          </button>
          <button
            onClick={() => scrollByCard(1)}
            onMouseEnter={playHoverSound}
            className="p-2 rounded-full bg-white/5 hover:bg-accent-purple/20 border border-white/10 hover:border-accent-purple/40 transition-colors duration-200"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-darkBg-1 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-darkBg-1 to-transparent z-10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="
              flex gap-6 overflow-x-auto
              [&::-webkit-scrollbar]:hidden
              scrollbar-none
              pb-2
            "
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...certificates, ...certificates, ...certificates].map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                  transition: { type: 'spring', stiffness: 300, damping: 10 }
                }}
                className="flex-shrink-0 w-[300px] sm:w-[340px] glass-card rounded-xl border overflow-hidden group relative transition-all duration-300"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                onMouseEnter={(e) => {
                  playHoverSound();
                  setIsPaused(true);
                  e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
                }}
                onMouseLeave={(e) => {
                  setIsPaused(false);
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent pointer-events-none z-10"
                />

                {/* PDF Preview Area */}
                <div className="h-44 bg-gradient-to-br from-darkBg-3 to-darkBg-2 border-b border-white/5 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5 bg-[length:200%_200%] z-0"
                  />

                  <PdfThumbnail url={cert.pdfUrl} />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-accent-purple/30 group-hover:border-accent-purple/70 transition-all duration-300 z-20" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-accent-cyan/30 group-hover:border-accent-cyan/70 transition-all duration-300 z-20" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-accent-cyan/30 group-hover:border-accent-cyan/70 transition-all duration-300 z-20" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-accent-purple/30 group-hover:border-accent-purple/70 transition-all duration-300 z-20" />
                </div>

                {/* Content */}
                <div className="p-5 relative z-20">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-mono text-sm font-bold text-white group-hover:text-accent-purple transition-colors duration-200 leading-snug pr-2">
                      {cert.title}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-600 bg-white/5 px-2 py-0.5 rounded flex-shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[11px] text-accent-cyan/70 font-mono mb-2">
                    {cert.issuer}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-relaxed mb-3 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* View PDF Button */}
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono text-accent-cyan/60 hover:text-accent-cyan transition-colors duration-200 group/link"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="group-hover/link:underline">View Certificate</span>
                  </a>

                  {/* Animated bottom bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="h-[1px] bg-gradient-to-r from-accent-purple/50 to-transparent mt-3 origin-left"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
