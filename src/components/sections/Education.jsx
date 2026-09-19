import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  Award, 
  Sparkles,
  School,
  CheckCircle2
} from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Education &amp; Core Coursework
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Academic training at Tribhuvan University instilling solid algorithms, computer systems, and software engineering methodologies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Beacon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-dark-950 border-2 border-emerald-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-glow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-card">
                
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-mono text-xs font-semibold border border-emerald-500/20 mb-2">
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-emerald-400 flex items-center gap-1.5 mt-1">
                      <School className="w-4 h-4" />
                      <span>{item.institution}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-300 font-normal">{item.affiliation}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-dark-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Coursework Tags */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-4 border-t border-slate-800/80">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Key Subjects &amp; Foundational Study</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg bg-dark-800/80 text-slate-300 border border-slate-700/60 text-xs font-medium hover:border-emerald-500/30 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          <span>{course}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
