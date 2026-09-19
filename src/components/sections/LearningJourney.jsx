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
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Growth &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            My Learning Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3">
            An authentic, transparent progression from core programming logic to building modern, production-style web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Grid / Staggered Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {learningJourney.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">
                      {item.period}
                    </span>
                  </div>

                  <span className="px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-200">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <Sparkles className="w-3 h-3 text-emerald-500" /> Continuous Practice
                </span>
                <span className="group-hover:text-emerald-800 font-semibold transition-colors">
                  Semester Milestone →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Active Focus Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white shadow-xl shadow-emerald-700/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shrink-0 shadow-sm">
              <Compass className="w-7 h-7 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold font-heading">
                Ready for Internship &amp; Junior Roles
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
                Eager to join an engineering team where I can contribute my React, Tailwind CSS, and JavaScript skills while learning production practices.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-sm shadow-md transition-all duration-200 shrink-0 flex items-center gap-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 text-emerald-700" />
          </a>
        </div>

      </div>
    </section>
  );
}
