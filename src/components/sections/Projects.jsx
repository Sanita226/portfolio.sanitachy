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

  const renderProjectVisual = (type, title, category) => {
    switch (type) {
      case 'portfolio':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border-b border-emerald-100">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/90 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                portfolio.sanitachy
              </span>
            </div>
            <div className="my-auto text-center space-y-2 py-4">
              <span className="inline-block text-xs font-mono text-emerald-800 bg-white border border-emerald-300 font-bold px-3 py-1 rounded-full shadow-2xs">
                React + Tailwind CSS
              </span>
              <p className="text-base font-extrabold text-slate-900 font-heading">
                Interactive Personal Showcase
              </p>
              <p className="text-[11px] text-slate-500 font-mono">
                Green &amp; White Theme • Framer Motion • TU CSIT
              </p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-emerald-200/60 pt-2">
              <span>status: verified</span>
              <span className="text-emerald-700 font-bold">● active</span>
            </div>
          </div>
        );

      case 'kanban':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50/70 via-white to-teal-50 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border-b border-emerald-100">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-[11px] font-mono text-emerald-800 font-bold flex items-center gap-1">
                <LayoutGrid className="w-3 h-3 text-emerald-600" /> TaskFlow Kanban
              </span>
              <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-emerald-200">LocalStorage</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto py-3">
              <div className="p-2 rounded-xl bg-white border border-emerald-200 space-y-1.5 shadow-2xs">
                <p className="text-[9px] font-mono text-slate-500 uppercase font-bold">To Do</p>
                <div className="h-4 bg-emerald-50 rounded text-[8px] font-mono text-emerald-800 px-1.5 flex items-center font-semibold">DSA HW</div>
                <div className="h-4 bg-slate-50 rounded text-[8px] font-mono text-slate-600 px-1.5 flex items-center">React Hook</div>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50/80 border border-emerald-300 space-y-1.5 shadow-2xs">
                <p className="text-[9px] font-mono text-emerald-800 uppercase font-bold">In Progress</p>
                <div className="h-4 bg-emerald-600 text-white rounded text-[8px] font-mono px-1.5 flex items-center font-bold">API Route</div>
              </div>
              <div className="p-2 rounded-xl bg-teal-50 border border-teal-200 space-y-1.5 shadow-2xs">
                <p className="text-[9px] font-mono text-teal-800 uppercase font-bold">Done</p>
                <div className="h-4 bg-teal-600 text-white rounded text-[8px] font-mono px-1.5 flex items-center font-bold">Wireframe</div>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-emerald-200/60 pt-2">
              <span>drag &amp; drop cards</span>
              <span className="text-emerald-700 font-bold">state: persistent</span>
            </div>
          </div>
        );

      case 'campus':
        return (
          <div className="w-full h-full bg-gradient-to-br from-teal-50/80 via-emerald-50 to-white p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border-b border-emerald-100">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-[11px] font-mono text-teal-900 font-bold">
                Godawari College • Academic Hub
              </span>
              <span className="text-[10px] font-mono bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded-full border border-teal-200">
                Next.js
              </span>
            </div>
            <div className="my-auto py-3 space-y-2">
              <div className="p-2.5 rounded-xl bg-white border border-emerald-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span className="text-xs font-bold text-slate-800">6th Sem Syllabus &amp; Past Papers</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">PDF</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-emerald-200 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span className="text-xs font-bold text-slate-800">DSA &amp; Web Tech Lecture Notes</span>
                </div>
                <span className="text-[10px] font-mono text-teal-700 font-bold bg-teal-50 px-1.5 py-0.5 rounded">DOC</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-emerald-200/60 pt-2">
              <span>App Router Dynamic Routing</span>
              <span className="text-teal-700 font-bold">TU Curriculum</span>
            </div>
          </div>
        );

      case 'weather':
        return (
          <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-white to-green-50 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border-b border-emerald-100">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-[11px] font-mono text-emerald-900 font-bold">
                Atmospheric Radar
              </span>
              <span className="text-[10px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-emerald-200 font-semibold">Kathmandu, NP</span>
            </div>
            <div className="my-auto py-3 flex items-center justify-around">
              <div>
                <span className="text-3xl font-extrabold text-emerald-900 font-heading">24°C</span>
                <p className="text-[11px] text-emerald-700 font-mono font-semibold">Partly Cloudy</p>
              </div>
              <div className="space-y-1 text-[10px] font-mono text-slate-600 border-l-2 border-emerald-200 pl-3">
                <p>Humidity: 58%</p>
                <p className="text-emerald-700 font-bold">AQI: 42 (Good)</p>
                <p>Wind: 9 km/h</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-emerald-200/60 pt-2">
              <span>Async Fetch / REST API</span>
              <span className="text-emerald-700 font-bold">OpenWeather</span>
            </div>
          </div>
        );

      case 'code':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-white via-emerald-50/60 to-teal-50 p-4 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500 border-b border-emerald-100">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200/60">
              <span className="text-[11px] font-mono text-emerald-900 font-bold">
                CodeVault Snippets
              </span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">PrismJS Highlighting</span>
            </div>
            <div className="my-auto py-2 p-3 rounded-xl bg-white border border-emerald-200 font-mono text-[10px] text-slate-800 space-y-1 shadow-2xs">
              <p><span className="text-emerald-700 font-bold">const</span> useDebounce = (val, delay) =&gt; &#123;</p>
              <p className="pl-3 text-slate-500">// custom React hook</p>
              <p className="pl-3">useEffect(() =&gt; &#123; ... &#125;);</p>
              <p>&#125;;</p>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-emerald-200/60 pt-2">
              <span>Searchable snippet library</span>
              <span className="text-emerald-700 font-bold">React + Hooks</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Hands-on Projects &amp; Demos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Practical applications built while learning modern web technologies. Clean code, modular architecture, and responsiveness.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Filter Categories */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                filter === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-emerald-200 hover:border-emerald-300'
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
              className="group bg-white rounded-3xl border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-900/10 hover:-translate-y-1.5"
            >
              {/* Card Visual Header / Mockup Banner */}
              <div 
                className="relative h-48 w-full cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {renderProjectVisual(project.imageType, project.title, project.category)}

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-bold backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4 text-emerald-300" />
                  <span>Click to view details</span>
                </div>

                {/* Badge top right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-white/95 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-300 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-emerald-700 font-semibold mb-2.5">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & Modal Trigger */}
                  <div className="flex items-center justify-between pt-3 border-t border-emerald-100 text-xs">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-slate-600 hover:text-emerald-700 font-mono font-bold flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-700 hover:text-emerald-800 p-1.5 rounded-lg hover:bg-emerald-50 transition-colors flex items-center gap-1 font-semibold"
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
                          className="text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 font-bold shadow-xs"
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

        {/* Note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          <p>
            * All projects represent practical coursework and self-directed student builds. Source code links can be updated anytime in <span className="text-emerald-700 font-bold">src/data/portfolioData.js</span>.
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
