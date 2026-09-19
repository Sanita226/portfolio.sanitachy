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
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-emerald-50/40 border-y border-emerald-100">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Education &amp; Core Coursework
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Rigorous undergraduate studies at Godawari College, Tribhuvan University, building computer systems and algorithmic foundations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-emerald-300 pl-6 sm:pl-8 ml-3 sm:ml-6 space-y-12">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Beacon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-emerald-600 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-emerald-600/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>

              {/* Education Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md">
                
                {/* Header info */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200 mb-2">
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-700 flex items-center gap-1.5 mt-1">
                      <School className="w-4 h-4 text-emerald-600" />
                      <span>{item.institution}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 font-normal">{item.affiliation}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Narrative */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Coursework Tags */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="pt-4 border-t border-emerald-100">
                    <p className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Key Subjects &amp; Foundational Study</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-xl bg-emerald-50/80 text-emerald-900 border border-emerald-200 text-xs font-semibold hover:border-emerald-400 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
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
