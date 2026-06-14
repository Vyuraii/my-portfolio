import React from 'react';
import { motion } from 'framer-motion';
import { playHoverSound } from '../utils/sound';
import { BarChart3, BrainCircuit, Code2, Database } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-accent-cyan" />,
      title: "Data Analytics",
      desc: "Processing, cleaning, and analyzing data to uncover meaningful insights, identify trends, and support data-driven decision making using Python, SQL, and data visualization tools."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-accent-purple" />,
      title: "Data Science",
      desc: "Developing predictive and analytical models to solve business problems, uncover valuable insights, and support strategic decision making through machine learning, statistical analysis, and data-driven approaches."
    },
    {
      icon: <Code2 className="w-8 h-8 text-accent-blue" />,
      title: "Web Development",
      desc: "Building responsive and modern web applications on both frontend and backend using React, Next.js, Node.js, PHP, and MySQL."
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      title: "Data Engineering (Learning)",
      desc: "Actively learning data engineering concepts including ETL pipelines, data warehousing, data processing workflows, and scalable data infrastructure."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase font-mono tracking-widest text-accent-cyan mb-2">
          Capabilities
        </h2>

        <h3 className="text-3xl font-bold font-sans text-white">
          Services & Focus Areas
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((srv, idx) => (
          <motion.div
            onMouseEnter={playHoverSound}
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            transition={{ duration: 0.4 }}
            className="
              glass-card
              p-8
              rounded-xl
              border
              border-white/5
              relative
              group
              transition-all
              duration-300
              neon-border-cyan
              overflow-hidden
            "
          >
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />

            {/* Icon */}
            <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg border border-white/10">
              {srv.icon}
            </div>

            {/* Title */}
            <h4 className="text-xl font-bold text-white font-mono mb-3">
              {srv.title}
            </h4>

            {/* Description */}
            <p className="text-sm text-slate-400 leading-relaxed">
              {srv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}