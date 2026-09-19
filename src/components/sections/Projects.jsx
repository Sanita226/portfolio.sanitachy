import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Sparkles, 
  FolderGit2, 
  Maximize2, 
  Code2, 
  LayoutGrid, 
  Check 
} from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { projects } from '../../data/portfolioData';
import ProjectModal from '../ui/ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'React', 'Next.js', 'JavaScript'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Custom visual mockup generator based on project type
  const renderProjectVisual = (type, title, category) => {
    switch (type) {
      case 'portfolio':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-dark-900 to-emerald-950/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-violet-500/80" />
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                portfolio.sanita.dev
              </span>
            </div>
            <div className="my-auto text-center space-y-2 py-4">
              <span className="inline-block text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-1 rounded-full">
                React + Tailwind CSS
              </span>
              <p className="text-base font-extrabold text-white font-heading">
                Interactive Showcase
              </p>
              <p className="text-[11px] text-slate-400 font-mono">
                Dark Mode • Framer Motion • CSIT 6th Sem
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
              <span>status: production</span>
              <span className="text-emerald-400">● live</span>
            </div>
          </div>
        );

      case 'kanban':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-dark-900 to-cyan-950/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                <LayoutGrid className="w-3 h-3" /> TaskFlow Kanban
              </span>
              <span className="text-[10px] font-mono text-slate-400">LocalStorage</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto py-3">
              <div className="p-2 rounded bg-slate-800/80 border border-slate-700/60 space-y-1.5">
                <p className="text-[9px] font-mono text-slate-400 uppercase">To Do</p>
                <div className="h-4 bg-slate-700/60 rounded text-[8px] font-mono text-slate-300 px-1 flex items-center">DSA HW</div>
                <div className="h-4 bg-slate-700/40 rounded text-[8px] font-mono text-slate-400 px-1 flex items-center">React Hook</div>
              </div>
              <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 space-y-1.5">
                <p className="text-[9px] font-mono text-cyan-300 uppercase">Active</p>
                <div className="h-4 bg-cyan-500/20 rounded text-[8px] font-mono text-cyan-200 px-1 flex items-center">Auth API</div>
              </div>
              <div className="p-2 rounded bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                <p className="text-[9px] font-mono text-emerald-300 uppercase">Done</p>
                <div className="h-4 bg-emerald-500/20 rounded text-[8px] font-mono text-emerald-200 px-1 flex items-center">UI Wireframe</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
              <span>drag &amp; drop cards</span>
              <span className="text-cyan-400">state: synced</span>
            </div>
          </div>
        );

      case 'campus':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-dark-900 to-indigo-950/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-mono text-indigo-400 font-semibold">
                Godawari College • CSIT Hub
              </span>
              <span className="text-[10px] font-mono bg-indigo-500/10 text-indigo-300 px-1.5 py-0.5 rounded">
                Next.js
              </span>
            </div>
            <div className="my-auto py-3 space-y-2">
              <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-xs font-medium text-white">6th Sem Syllabus &amp; Past Papers</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">PDF</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-800/60 border border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span className="text-xs font-medium text-slate-300">DSA &amp; Web Tech Notes</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">DOC</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
              <span>App Router Dynamic Routing</span>
              <span className="text-indigo-400">TU Curriculum</span>
            </div>
          </div>
        );

      case 'weather':
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-dark-900 to-amber-950/30 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-mono text-amber-400 font-semibold">
                Atmospheric Radar
              </span>
              <span className="text-[10px] font-mono text-slate-400">Kathmandu, NP</span>
            </div>
            <div className="my-auto py-3 flex items-center justify-around">
              <div>
                <span className="text-3xl font-extrabold text-white font-heading">24°C</span>
                <p className="text-[11px] text-amber-300 font-mono">Partly Cloudy</p>
              </div>
              <div className="space-y-1 text-[10px] font-mono text-slate-300 border-l border-slate-800 pl-3">
                <p>Humidity: 58%</p>
                <p>AQI: 42 (Good)</p>
                <p>Wind: 9 km/h</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
              <span>Async Fetch / REST API</span>
              <span className="text-amber-400">OpenWeather</span>
            </div>
          </div>
        );

      case 'code':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-dark-900 to-violet-950/40 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] font-mono text-violet-400 font-semibold">
                CodeVault Snippets
              </span>
              <span className="text-[10px] font-mono text-slate-400">PrismJS Highlighting</span>
            </div>
            <div className="my-auto py-2 p-2.5 rounded bg-dark-950/80 border border-slate-800 font-mono text-[10px] text-slate-300 space-y-1">
              <p><span className="text-violet-400">const</span> useDebounce = (val, delay) =&gt; &#123;</p>
              <p className="pl-3 text-slate-400">// custom React hook</p>
              <p className="pl-3">useEffect(() =&gt; &#123; ... &#125;);</p>
              <p>&#125;;</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/80 pt-2">
              <span>Searchable snippet library</span>
              <span className="text-violet-400">React + Hooks</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Hands-on Projects &amp; Demos
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Practical applications built while learning web technologies. Structured with clean code, modular architecture, and responsiveness.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4" />
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? 'bg-emerald-500 text-dark-950 font-bold shadow-glow-sm'
                  : 'bg-dark-800/80 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-card hover:-translate-y-1.5"
            >
              {/* Card Visual Header / Mockup Banner */}
              <div 
                className="relative h-48 w-full border-b border-slate-800/80 bg-dark-950 cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {renderProjectVisual(project.imageType, project.title, project.category)}

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4 text-emerald-400" />
                  <span>Click to view details</span>
                </div>

                {/* Badge top right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-dark-900/90 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-white font-heading group-hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-slate-400 mb-2.5">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-dark-800/80 text-slate-300 border border-slate-700/50 text-[11px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & Modal Trigger */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-slate-400 hover:text-emerald-400 font-mono font-medium flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span className="font-mono">Code</span>
                      </a>

                      {project.liveDemo && project.liveDemo !== '#' && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 p-1.5 rounded-lg hover:bg-emerald-500/10 transition-colors flex items-center gap-1 font-semibold"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <span>Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on easily customizable projects */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono">
          <p>
            * All projects represent practical coursework and self-directed student builds. Source code links can be updated anytime in <span className="text-emerald-400">src/data/portfolioData.js</span>.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
