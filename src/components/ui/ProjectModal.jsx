import React from 'react';
import { X, ExternalLink, Layers, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white border-2 border-emerald-200 rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Header Banner with green gradient */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-mono text-xs font-bold border border-white/30 mb-2">
            {project.badge}
          </span>
          <h3 className="text-2xl font-bold text-white font-heading">
            {project.title}
          </h3>
          <p className="text-sm text-emerald-100 font-mono mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-slate-800">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold mb-2.5">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Student Learning Highlights */}
          <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Key Learning Milestones In This Project</span>
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Responsive mobile-first layout implementation with Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>State lifting, hooks, and clean reusable component hierarchy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Git version control with clear atomic commits and branch workflow</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Code</span>
            </a>

            {project.liveDemo && project.liveDemo !== '#' ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-md shadow-emerald-600/25 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="flex-1 min-w-[140px] flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold text-center">
                <span>Active Local Repository</span>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
