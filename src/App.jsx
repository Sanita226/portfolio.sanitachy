import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundEffects from './components/layout/BackgroundEffects';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import LearningJourney from './components/sections/LearningJourney';
import Contact from './components/sections/Contact';
import ResumeModal from './components/ui/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-emerald-600 selection:text-white font-sans">
      {/* Background Ambient Glow & Grid Effects */}
      <BackgroundEffects />

      {/* Sticky Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <LearningJourney />
        <Contact />
      </main>

      {/* Minimal Developer Footer */}
      <Footer />

      {/* Interactive Resume View / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
