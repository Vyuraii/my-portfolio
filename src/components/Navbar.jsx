import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playHoverSound } from '../utils/sound';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-darkBg-2/60 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          onMouseEnter={playHoverSound}
          className="font-mono text-xl font-bold tracking-wider text-white cursor-pointer"
        >
          PUTRA<span className="text-accent-cyan">.</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollToSection(link.toLowerCase())}
              onMouseEnter={playHoverSound}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-mono text-slate-400 hover:text-accent-cyan transition-colors duration-200 uppercase tracking-wider"
            >
              {link}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
