import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, MessageSquare } from 'lucide-react';
import { playHoverSound } from '../utils/sound';

export default function Contact() {
  const channels = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", val: "raihanputrapermanaa@gmail.com", href: "mailto:raihanputrapermanaa@gmail.com?to=raihanputrapermanaa@gmail.com", color: "hover:border-accent-cyan hover:text-accent-cyan" },
    { icon: <Github className="w-5 h-5" />, label: "GitHub", val: "github.com/Vyuraii", href: "https://github.com/Vyuraii", color: "hover:border-white hover:text-white" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", val: "linkedin.com/in/raihan-putra-permana", href: "https://linkedin.com/in/raihan-putra-permana", color: "hover:border-accent-blue hover:text-accent-blue" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", val: "@__rputraaa", href: "https://instagram.com/__rputraaa", color: "hover:border-pink-500 hover:text-pink-500" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "WhatsApp", val: "+62 896 7709 3024", href: "https://wa.me/089677093024", color: "hover:border-emerald-500 hover:text-emerald-500" }
  ];

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase font-mono tracking-widest text-accent-cyan mb-2"
        >
          Get In Touch
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-white mb-4"
        >
          Have a Project? Let's Talk.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-slate-400"
        >
          I'm open to collaborations, discussions, and new opportunities in Data Science, Engineering, or AI development.
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-20 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4"
        />
      </div>

      <div className="max-w-xl mx-auto flex flex-col gap-4">
        {channels.map((ch, idx) => (
          <motion.a
            key={idx}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onMouseEnter={playHoverSound}
            whileHover={{
              scale: 1.02,
              x: 5,
              transition: { type: 'spring', stiffness: 300, damping: 15 }
            }}
            whileTap={{ scale: 0.98 }}
            className={`glass-card p-4 rounded-xl border border-white/5 flex items-center justify-between transition-all duration-300 group ${ch.color} relative overflow-hidden`}
          >
            {/* Animated gradient on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none"
            />

            <div className="flex items-center gap-4 relative z-10">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="p-2.5 bg-white/5 rounded-lg border border-white/5 group-hover:bg-transparent transition-all duration-300"
              >
                {ch.icon}
              </motion.div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-mono tracking-widest text-slate-500">
                  {ch.label}
                </span>
                <span className="text-sm font-mono text-white group-hover:text-inherit">
                  {ch.val}
                </span>
              </div>
            </div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="text-xs font-mono text-accent-cyan relative z-10"
            >
              CONNECT ↗
            </motion.span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
