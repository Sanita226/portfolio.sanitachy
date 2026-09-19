import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  FileText, 
  Sparkles, 
  Code2, 
  Terminal, 
  Layers, 
  Cpu, 
  ExternalLink,
  Mail
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const floatingBadges = [
    { name: 'React', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40', pos: 'top-10 -left-6 md:-left-12' },
    { name: 'JavaScript ES6+', color: 'text-yellow-400 border-yellow-500/30 bg-yellow-950/40', pos: '-top-6 right-2 md:right-8' },
    { name: 'Tailwind CSS', color: 'text-teal-400 border-teal-500/30 bg-teal-950/40', pos: 'bottom-16 -left-4 md:-left-8' },
    { name: 'Next.js', color: 'text-white border-slate-600/40 bg-slate-900/60', pos: 'bottom-4 -right-2 md:-right-6' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Status Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-glow-sm hover:border-emerald-500/50 transition-all duration-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">BSc. CSIT 6th Semester • Godawari College (TU)</span>
          <span className="hidden sm:inline-block text-emerald-500/40">•</span>
          <span className="hidden sm:inline-block text-slate-300">{personalInfo.status}</span>
        </div>

        {/* Large Bold Typography Headings */}
        <div className="max-w-4xl space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white font-heading leading-[1.1]">
            <span>Hi, I'm </span>
            <span className="text-gradient hover:opacity-90 transition-opacity">
              Sanita Chaudhary.
            </span>
          </h1>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-slate-200 tracking-tight font-heading">
            Computer Science Student &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Aspiring Full-Stack Developer
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed pt-2 font-normal">
            I’m a <span className="text-emerald-400 font-medium">BSc. CSIT student</span> passionate about building modern, responsive and user-friendly web applications with{' '}
            <span className="text-slate-100 font-medium">React, JavaScript, Next.js</span> and{' '}
            <span className="text-slate-100 font-medium">Tailwind CSS</span>.
          </p>
        </div>

        {/* Call to Actions (Main Buttons + Resume) */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-9 sm:mt-10">
          {/* Main 1: View My Work */}
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-dark-950 font-bold text-sm sm:text-base shadow-glow-md hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none flex items-center gap-2"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>

          {/* Main 2: Contact Me */}
          <button
            onClick={() => scrollTo('contact')}
            className="px-6 sm:px-7 py-3 rounded-xl bg-dark-900/90 hover:bg-slate-800/90 text-white font-semibold text-sm sm:text-base border border-slate-700/70 hover:border-emerald-500/50 shadow-card transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none flex items-center gap-2"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </button>

          {/* Secondary: Download Resume */}
          <button
            onClick={onOpenResume}
            className="px-5 sm:px-6 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 text-slate-300 hover:text-white font-medium text-sm sm:text-base border border-slate-800 hover:border-slate-700 backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Download Resume</span>
          </button>
        </div>

        {/* Social Quick Links & Location Badge */}
        <div className="flex items-center gap-5 mt-8 text-slate-400 text-xs sm:text-sm">
          <span className="flex items-center gap-1.5 text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Based in Nepal
          </span>
          <span className="text-slate-600">•</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="text-slate-600">•</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Interactive Code Preview Window with Floating Tech Pills */}
        <div className="relative mt-12 sm:mt-16 w-full max-w-2xl">
          {/* Floating Technology Badges */}
          {floatingBadges.map((badge, idx) => (
            <div
              key={idx}
              className={`absolute z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono font-medium backdrop-blur-md shadow-lg animate-float ${badge.color} ${badge.pos}`}
              style={{ animationDelay: `${idx * 0.7}s` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
              <span>{badge.name}</span>
            </div>
          ))}

          {/* Terminal / Code Card */}
          <div className="relative rounded-2xl bg-dark-900/90 border border-slate-800/80 shadow-2xl backdrop-blur-xl overflow-hidden text-left font-mono text-xs sm:text-sm">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-dark-950/80 border-b border-slate-800/70">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-400 text-xs font-mono">sanita_profile.json</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>bash</span>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 sm:p-6 space-y-1.5 text-slate-300 leading-relaxed overflow-x-auto">
              <p className="text-slate-500 font-mono">// Student Developer Profile</p>
              <p>
                <span className="text-rose-400">const</span>{' '}
                <span className="text-emerald-400">developer</span> = {'{'}
              </p>
              <p className="pl-4">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-teal-300">"{personalInfo.name}"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">education:</span>{' '}
                <span className="text-teal-300">"BSc. CSIT (6th Semester)"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">institution:</span>{' '}
                <span className="text-teal-300">"Godawari College • TU, Nepal"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">stack:</span> [
                <span className="text-cyan-300">"React"</span>,{' '}
                <span className="text-cyan-300">"JavaScript"</span>,{' '}
                <span className="text-cyan-300">"Next.js"</span>,{' '}
                <span className="text-cyan-300">"Tailwind"</span>
                ],
              </p>
              <p className="pl-4">
                <span className="text-slate-400">seeking:</span>{' '}
                <span className="text-emerald-300">"Internships &amp; Junior Dev Roles"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">learningMindset:</span>{' '}
                <span className="text-amber-300">"Build projects &gt; Memorize theory"</span>
              </p>
              <p>{'};'}</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo('about')}
          className="mt-14 inline-flex flex-col items-center text-slate-500 hover:text-emerald-400 transition-colors focus:outline-none group"
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase font-mono tracking-widest mb-1.5 group-hover:text-emerald-300 transition-colors">
            Explore
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-emerald-400" />
        </button>

      </div>
    </section>
  );
}
