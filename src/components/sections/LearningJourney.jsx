import React from 'react';
import { 
  Milestone, 
  Sparkles, 
  GitBranch, 
  Code2, 
  Layers, 
  Terminal, 
  Flame, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { learningJourney } from '../../data/portfolioData';

export default function LearningJourney() {
  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            My Learning Journey
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            An honest, transparent look at my self-directed evolution from computer science fundamentals to building modern React &amp; Next.js applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-4" />
        </div>

        {/* Grid / Staggered Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {learningJourney.map((item, idx) => (
            <div
              key={idx}
              className="group glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-dark-900 border border-slate-700/80 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-300 font-mono text-[11px] font-medium border border-slate-700/50">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Sparkles className="w-3 h-3" /> Continuous Practice
                </span>
                <span className="group-hover:text-white transition-colors">
                  Semester Milestone →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Active Focus Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-dark-900 to-cyan-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-heading">
                Ready for Internship &amp; Junior Roles
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Passionate about joining an active team where I can apply my React, Tailwind, and JavaScript skills to real user problems.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs sm:text-sm shadow-glow-sm transition-all duration-200 shrink-0 flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
