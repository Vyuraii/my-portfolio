import React from 'react';
import { playHoverSound } from '../utils/sound';
import { motion } from 'framer-motion';

import {
  FaPython,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa';

import {
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiPlotly,
} from 'react-icons/si';

export default function TechStack() {
  const techs = [
    { name: 'Python', icon: <FaPython size={42} /> },
    { name: 'JavaScript', icon: <FaJs size={42} /> },
    { name: 'PHP', icon: <FaPhp size={42} /> },

    { name: 'HTML5', icon: <FaHtml5 size={42} /> },
    { name: 'CSS3', icon: <FaCss3Alt size={42} /> },

    { name: 'React', icon: <FaReact size={42} /> },
    { name: 'Next.js', icon: <SiNextdotjs size={42} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={42} /> },

    { name: 'Node.js', icon: <FaNodeJs size={42} /> },
    { name: 'MySQL', icon: <SiMysql size={42} /> },

    { name: 'TensorFlow', icon: <SiTensorflow size={42} /> },
    { name: 'Pandas', icon: <SiPandas size={42} /> },
    { name: 'NumPy', icon: <SiNumpy size={42} /> },

    // Representasi Matplotlib
    { name: 'Matplotlib', icon: <SiPlotly size={42} /> },

    { name: 'GitHub', icon: <FaGithub size={42} /> },
  ];

  return (
    <section className="py-16 border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-xs uppercase font-mono tracking-widest text-accent-purple mb-2">
          Systems
        </h2>

        <h3 className="text-2xl font-bold text-white">
          Technical Arsenal
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {techs.map((tech, idx) => (
          <motion.div
            onMouseEnter={playHoverSound}
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            className="
              glass-card
              rounded-xl
              border
              border-white/5
              p-5
              flex
              flex-col
              items-center
              justify-center
              gap-3
              text-slate-300
              hover:text-accent-cyan
              hover:border-accent-cyan/40
              transition-all
              duration-300
              group
            "
          >
            <div className="group-hover:drop-shadow-[0_0_15px_rgba(0,229,255,0.7)] transition-all duration-300">
              {tech.icon}
            </div>

            <span className="text-xs font-mono text-center">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}