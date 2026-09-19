import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Mail, 
  MapPin, 
  FileCheck2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, skillCategories, projects, educationData } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0 print:block">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 print:border-none print:shadow-none print:m-0 print:rounded-none print:bg-white print:text-black">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-dark-950 border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-emerald-400" />
            <h3 className="font-bold text-white text-sm sm:text-base font-heading">
              Resume Preview — Sanita Chaudhary
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-xs shadow-glow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content (Optimized for both dark screen display and crisp print output) */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-8 print:max-h-none print:overflow-visible print:p-8 bg-dark-900 print:bg-white print:text-slate-900 text-slate-200">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white print:text-slate-900 font-heading">
                  Sanita Chaudhary
                </h1>
                <p className="text-base font-medium text-emerald-400 print:text-emerald-700 mt-1">
                  BSc. CSIT Student &amp; Aspiring Full-Stack Developer
                </p>
                <p className="text-xs sm:text-sm text-slate-400 print:text-slate-600 mt-0.5">
                  Godawari College • Tribhuvan University, Nepal (6th Semester)
                </p>
              </div>

              {/* Contact Pill List */}
              <div className="space-y-1 text-xs font-mono text-slate-300 print:text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-cyan-700" />
                  <span>Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-400 print:text-slate-700" />
                  <span>github.com/Sanita226</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400 print:text-cyan-700" />
                  <span>linkedin.com/in/sanitachaudhary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Objective Statement */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-800 font-bold mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-300 print:text-slate-700 leading-relaxed">
              Motivated 6th-semester Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) student at Godawari College, Tribhuvan University. Passionate about frontend and full-stack web development with practical experience in React, JavaScript, Next.js, and Tailwind CSS. Eager to contribute to production web applications, solve real user problems, and grow within a collaborative software development team through an internship or junior developer role.
            </p>
          </div>

          {/* Technical Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-800 font-bold mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-dark-950/80 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <p className="font-bold text-white print:text-slate-900 mb-1.5">Frontend</p>
                <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                  JavaScript (ES6+), React.js, Tailwind CSS, HTML5, CSS3, Responsive Design
                </p>
              </div>
              <div className="p-3 rounded-xl bg-dark-950/80 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <p className="font-bold text-white print:text-slate-900 mb-1.5">Frameworks</p>
                <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                  Next.js (App Router, Server Components), RESTful APIs
                </p>
              </div>
              <div className="p-3 rounded-xl bg-dark-950/80 print:bg-slate-100 border border-slate-800 print:border-slate-300">
                <p className="font-bold text-white print:text-slate-900 mb-1.5">Tools &amp; Workflow</p>
                <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                  Git, GitHub, VS Code, Chrome DevTools, npm, Vite
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-800 font-bold mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500/50 pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-white print:text-slate-900">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-600">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-400 print:text-emerald-700">
                    {edu.institution} • {edu.affiliation}
                  </p>
                  <p className="text-xs text-slate-300 print:text-slate-600">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-800 font-bold mb-3">
              Featured Academic &amp; Personal Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.slice(0, 3).map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-dark-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white print:text-slate-900 text-sm">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[11px] text-emerald-400 print:text-emerald-700">
                      {p.tech.join(' • ')}
                    </span>
                  </div>
                  <p className="text-slate-300 print:text-slate-700 leading-relaxed mb-2">
                    {p.fullDescription || p.description}
                  </p>
                  <div className="flex items-center gap-4 text-slate-400 print:text-slate-600 font-mono text-[11px]">
                    <span>Repo: {p.github}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Computer Science Coursework */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-emerald-800 font-bold mb-2">
              Relevant CS Coursework
            </h2>
            <p className="text-xs text-slate-300 print:text-slate-700 leading-relaxed">
              Data Structures &amp; Algorithms, Web Technologies, Database Management Systems (DBMS), Object-Oriented Programming, Software Engineering, Operating Systems, Computer Networks.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
