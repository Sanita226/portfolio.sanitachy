import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Code2, 
  Compass, 
  Sparkles, 
  BookOpen, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'MapPin': return <MapPin className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Compass': return <Compass className="w-5 h-5 text-violet-400" />;
      default: return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Passionate About Practical Web Engineering
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-card">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    My Background &amp; Philosophy
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Godawari College • Tribhuvan University, Nepal
                  </p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am currently studying <strong className="text-emerald-400 font-medium">BSc. CSIT at Godawari College</strong> (affiliated with Tribhuvan University) and am in my <strong className="text-white">6th semester</strong>.
                </p>
                <p>
                  I am focused on continuously improving my <span className="text-slate-100 font-medium">frontend and full-stack development</span> skills. Rather than confining my education to classroom theories, I learn by building practical projects, testing ideas, and resolving real-world bugs.
                </p>
                <p>
                  My current daily toolkit revolves around <span className="text-emerald-300 font-medium">JavaScript</span>, <span className="text-cyan-300 font-medium">React</span>, <span className="text-white font-medium">Next.js</span>, and <span className="text-teal-300 font-medium">Tailwind CSS</span>. I enjoy writing clean, readable code and architecting responsive web applications that feel intuitive to use.
                </p>
              </div>

              {/* Core Principles */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strong computer science fundamentals</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Project-driven &amp; self-motivated learning</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Emphasis on clean, accessible UI/UX</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Open to internships &amp; mentorship</span>
                </div>
              </div>
            </div>

            {/* Quick Stat Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalInfo.stats.map((item, idx) => (
                <div 
                  key={idx} 
                  className="glass-panel p-4 rounded-xl text-center border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <p className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                    {item.value}
                  </p>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Information Cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutHighlights.map((item, idx) => (
              <div
                key={idx}
                className="group glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-emerald-500/30 transition-all duration-300 shrink-0 shadow-inner">
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {item.title}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors mt-0.5">
                      {item.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* University & Degree Callout Card */}
            <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-slate-900/50 to-cyan-950/20 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Current Milestone
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-1">
                    6th Semester BSc. CSIT Student
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Seeking summer / fall developer internships in frontend or full-stack web development.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
