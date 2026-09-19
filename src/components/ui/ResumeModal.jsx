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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-white border-2 border-emerald-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-6 print:border-none print:shadow-none print:m-0 print:rounded-none">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 bg-emerald-50 border-b border-emerald-200 print:hidden">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-emerald-700" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base font-heading">
              Resume Preview — Sanita Chaudhary
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white hover:bg-emerald-100 text-slate-700 hover:text-slate-900 border border-emerald-200 transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Content */}
        <div className="p-6 sm:p-10 max-h-[82vh] overflow-y-auto space-y-8 print:max-h-none print:overflow-visible print:p-8 bg-white text-slate-800">
          
          {/* Header */}
          <div className="border-b-2 border-emerald-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                  Sanita Chaudhary
                </h1>
                <p className="text-base font-bold text-emerald-700 mt-1">
                  BSc. CSIT Student &amp; Aspiring Full-Stack Developer
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Godawari College • Tribhuvan University, Nepal (6th Semester)
                </p>
              </div>

              {/* Contact Pill List */}
              <div className="space-y-1 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Nepal</span>
                </div>
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5 text-slate-700" />
                  <span>github.com/Sanita226</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>linkedin.com/in/sanitachaudhary</span>
                </div>
              </div>
            </div>
          </div>

          {/* Objective Statement */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-extrabold mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Motivated 6th-semester Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) student at Godawari College, Tribhuvan University. Passionate about frontend and full-stack web development with practical experience in React, JavaScript, Next.js, and Tailwind CSS. Eager to contribute to production web applications, solve real user problems, and grow within a collaborative software engineering team through an internship or junior developer role.
            </p>
          </div>

          {/* Technical Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-extrabold mb-3">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <p className="font-bold text-slate-900 mb-1">Frontend</p>
                <p className="text-slate-600 leading-relaxed">
                  JavaScript (ES6+), React.js, Tailwind CSS, HTML5, CSS3, Responsive Layouts
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <p className="font-bold text-slate-900 mb-1">Frameworks</p>
                <p className="text-slate-600 leading-relaxed">
                  Next.js (App Router, Server &amp; Client Components), RESTful APIs
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <p className="font-bold text-slate-900 mb-1">Tools &amp; Workflow</p>
                <p className="text-slate-600 leading-relaxed">
                  Git, GitHub, VS Code, npm, Vite, Component Systems
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-extrabold mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <div key={idx} className="border-l-4 border-emerald-500 pl-4 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-mono text-emerald-800 font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-emerald-700">
                    {edu.institution} • {edu.affiliation}
                  </p>
                  <p className="text-xs text-slate-600">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-extrabold mb-3">
              Featured Academic &amp; Personal Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.slice(0, 3).map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-emerald-100">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900 text-sm">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[11px] text-emerald-700 font-bold">
                      {p.tech.join(' • ')}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-2">
                    {p.fullDescription || p.description}
                  </p>
                  <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
                    <span>Repository: {p.github}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Coursework */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-extrabold mb-2">
              Relevant CS Coursework
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Data Structures &amp; Algorithms (DSA), Web Technologies, Database Management Systems (DBMS), Object-Oriented Programming, Software Engineering, Operating Systems, Computer Networks.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
