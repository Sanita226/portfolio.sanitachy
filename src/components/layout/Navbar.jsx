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
      setIsScrolled(window.scrollY > 25);

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
          ? 'bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm shadow-emerald-950/5 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          aria-label="Sanita Chaudhary - Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-emerald-600/20">
            <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-mono font-bold text-emerald-700 text-sm">
              SC
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-base tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center gap-1.5">
              <span>Sanita Chaudhary</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-semibold hidden sm:inline-block border border-emerald-200">
                CSIT
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-mono leading-none hidden sm:block">
              Godawari College • TU, Nepal
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-emerald-100 backdrop-blur-md shadow-sm shadow-emerald-900/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? 'text-emerald-900 font-bold bg-emerald-100/90 border border-emerald-300/80 shadow-sm'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/70'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Status */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-semibold border border-emerald-200 shadow-sm transition-all duration-200 group"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/25 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-xl bg-white text-emerald-700 border border-emerald-200 shadow-sm"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4 text-emerald-600" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-emerald-200 text-slate-700 hover:text-emerald-700 shadow-sm focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-emerald-100 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-1 pb-3 mb-3 border-b border-emerald-100">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors text-left ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/50'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white text-emerald-800 text-sm font-semibold border border-emerald-200 shadow-sm"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>View &amp; Download Resume</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md shadow-emerald-600/25"
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
