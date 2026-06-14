import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import OpeningAnimation from './components/OpeningAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile3D from './components/Profile3D';
import Statistics from './components/Statistics';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

import useGlobalHoverSound from './hooks/useGlobalHoverSound';

function App() {
  const [isOpening, setIsOpening] = useState(true);

  useGlobalHoverSound();

  return (
    <div className="relative min-h-screen bg-darkBg-1 font-sans text-slate-300 selection:bg-accent-cyan selection:text-darkBg-1 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {isOpening ? (
          <OpeningAnimation
            key="opening"
            onComplete={() => setIsOpening(false)}
          />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full"
          >
            {/* Background Glow */}
            <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[150px] animate-float-slow pointer-events-none" />

            <div className="absolute top-2/3 right-[-10%] w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[180px] animate-float-delayed pointer-events-none" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <section
                id="home"
                className="pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[90vh]"
              >
                <div className="lg:col-span-7">
                  <Hero />
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <Profile3D />
                </div>
              </section>

              <Statistics />
              <Projects />
              <Education />
              <Certifications />
              <Services />
              <TechStack />
              <Contact />
            </main>

            {/* Footer */}
            <footer className="relative border-t border-white/5 bg-darkBg-2/40 backdrop-blur-md py-8 mt-20 overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center justify-center gap-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="font-mono text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue"
                >
                  PUTRA
                </motion.div>

                <p className="text-sm text-slate-500 font-mono">
                  © 2026 Raihan Putra Permana.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
