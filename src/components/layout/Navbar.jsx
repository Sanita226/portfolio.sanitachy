import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active section detection using scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          aria-label="Sanita Chaudhary - Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-glow-sm">
            <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center font-mono font-bold text-emerald-400 text-sm">
              SC
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>Sanita Chaudhary</span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono font-medium hidden sm:inline-block">
                CSIT
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono leading-none hidden sm:block">
              Godawari College • TU
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-sm shadow-inner shadow-black/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 -z-10 animate-fade-in" />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Status */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 hover:text-white text-xs font-medium border border-slate-700/50 transition-all duration-200 hover:border-slate-600 focus:outline-none group"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="relative group overflow-hidden rounded-lg p-[1px] focus:outline-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg group-hover:opacity-100 opacity-80 blur-[1px] transition-opacity" />
            <div className="relative px-4 py-1.5 rounded-[7px] bg-dark-950 font-medium text-xs text-white flex items-center gap-1.5 transition-colors group-hover:bg-dark-900">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Let's Connect</span>
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-slate-800/60 text-slate-300 hover:text-white border border-slate-700/50"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-dark-900/95 backdrop-blur-xl border border-slate-800 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-1 pb-3 mb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
                  activeSection === link.id
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Footer CTAs */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800/80 text-white text-sm font-medium border border-slate-700/60"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View &amp; Download Resume</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-dark-950 font-semibold text-sm shadow-glow-sm"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
