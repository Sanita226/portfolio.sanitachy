import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  FileText, 
  Sparkles, 
  Code2, 
  Terminal, 
  GraduationCap,
  Layers, 
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';
import sanitaPhoto from '../../assets/sanita.jpg';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span>BSc. CSIT 6th Semester • Godawari College (TU)</span>
              <span className="hidden sm:inline-block text-emerald-300">•</span>
              <span className="hidden sm:inline-block text-emerald-700 font-medium">{personalInfo.status}</span>
            </div>

            {/* Large Bold Typography */}
            <div className="space-y-3 max-w-2xl">
              <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 font-heading leading-[1.08]">
                <span>Hi, I'm </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                  Sanita Chaudhary.
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 tracking-tight font-heading">
                Computer Science Student &amp;{' '}
                <span className="text-emerald-700 underline decoration-emerald-300 underline-offset-4 decoration-2">
                  Aspiring Full-Stack Developer
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-2">
                I’m a <strong className="text-emerald-800 font-semibold">BSc. CSIT student</strong> passionate about building modern, responsive and user-friendly web applications with{' '}
                <span className="text-slate-900 font-semibold">React, JavaScript, Next.js</span> and{' '}
                <span className="text-slate-900 font-semibold">Tailwind CSS</span>.
              </p>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              {/* Primary 1: View My Work */}
              <button
                onClick={() => scrollTo('projects')}
                className="group px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              {/* Primary 2: Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-sm sm:text-base border-2 border-emerald-300 hover:border-emerald-500 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 focus:outline-none"
              >
                <span>Contact Me</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-600" />
              </button>

              {/* Secondary: Download Resume */}
              <button
                onClick={onOpenResume}
                className="px-5 sm:px-6 py-3.5 rounded-xl bg-emerald-50/80 hover:bg-emerald-100 text-emerald-900 font-semibold text-sm sm:text-base border border-emerald-200 transition-all duration-300 flex items-center gap-2 shadow-xs"
              >
                <FileText className="w-4 h-4 text-emerald-600" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Quick Links & Location Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-slate-600 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5 font-medium text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-200/80">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Based in Nepal
              </span>
              <span className="text-slate-300">•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 font-semibold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-700 transition-colors flex items-center gap-1.5 font-semibold"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Code / Profile snippet bar */}
            <div className="w-full max-w-lg p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-sm flex items-center justify-between text-xs font-mono text-slate-700">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-600" />
                <span>focus: [<strong className="text-emerald-700">"React"</strong>, <strong className="text-teal-700">"Next.js"</strong>, <strong className="text-emerald-700">"Tailwind"</strong>]</span>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                TU Nepal
              </span>
            </div>

          </div>

          {/* Right Column: Hero Image with Luxury Green & White Animation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            {/* Ambient Background Glow behind photo */}
            <div className="absolute w-72 sm:w-88 h-72 sm:h-88 bg-gradient-to-tr from-emerald-400/30 via-teal-300/30 to-green-300/20 rounded-full blur-3xl animate-pulse" />
            
            {/* Main Animated Photo Container */}
            <div className="relative group animate-float">
              
              {/* Rotating Animated Gradient Ring */}
              <div className="absolute -inset-2.5 rounded-[36px] bg-gradient-to-r from-emerald-500 via-teal-400 to-green-500 rounded-3xl opacity-75 blur-sm group-hover:opacity-100 transition-opacity animate-spin-slow" />
              
              {/* White Inner Frame Border */}
              <div className="relative p-2.5 sm:p-3 bg-white rounded-[32px] shadow-2xl shadow-emerald-950/15 border-2 border-emerald-100">
                
                {/* Photo Aspect Ratio Wrapper */}
                <div className="relative w-64 sm:w-80 h-84 sm:h-[430px] rounded-[24px] overflow-hidden bg-emerald-900/10">
                  <img
                    src={sanitaPhoto}
                    alt="Sanita Chaudhary - BSc. CSIT Student & Developer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gentle gradient overlay on bottom of photo */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-emerald-950/80 via-emerald-950/30 to-transparent flex flex-col justify-end p-4 text-white">
                    <p className="font-heading font-bold text-base sm:text-lg leading-tight">
                      Sanita Chaudhary
                    </p>
                    <p className="text-xs font-mono text-emerald-300 mt-0.5">
                      BSc. CSIT • Godawari College
                    </p>
                  </div>
                </div>

              </div>

              {/* Floating Badge 1: Education (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border-2 border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center gap-2 transform hover:scale-105 transition-transform animate-float [animation-delay:1s]">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-slate-500 font-bold uppercase">Degree</p>
                  <p className="text-xs font-bold text-slate-800">BSc. CSIT (6th Sem)</p>
                </div>
              </div>

              {/* Floating Badge 2: Tech Focus (Bottom Left) */}
              <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border-2 border-emerald-200 shadow-lg shadow-emerald-900/10 flex items-center gap-2 transform hover:scale-105 transition-transform animate-float [animation-delay:2s]">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-emerald-700 font-bold uppercase">Specialty</p>
                  <p className="text-xs font-bold text-slate-800">Frontend &amp; Full-Stack</p>
                </div>
              </div>

              {/* Floating Badge 3: Active Status (Top Left) */}
              <div className="absolute top-1/2 -left-6 sm:-left-10 -translate-y-1/2 hidden sm:flex items-center gap-2 bg-emerald-800 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md shadow-emerald-900/20 animate-float [animation-delay:3s]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open for Roles</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
