import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Sparkles, 
  Wrench, 
  Check, 
  Laptop, 
  GitBranch, 
  Flame,
  Info
} from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getLevelBadge = (level) => {
    switch (level) {
      case 'Building With':
        return {
          bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400',
          text: 'Building With'
        };
      case 'Comfortable':
        return {
          bg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
          dot: 'bg-cyan-400',
          text: 'Comfortable'
        };
      case 'Learning':
      default:
        return {
          bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400',
          text: 'Actively Learning'
        };
    }
  };

  // SVG Icons for developer skills
  const renderSkillIcon = (iconName, color) => {
    switch (iconName) {
      case 'react':
        return (
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 115.3 100" fill="none">
            <ellipse cx="57.65" cy="50" rx="55" ry="20" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 57.65 50)"/>
            <ellipse cx="57.65" cy="50" rx="55" ry="20" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 57.65 50)"/>
            <ellipse cx="57.65" cy="50" rx="55" ry="20" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 57.65 50)"/>
            <circle cx="57.65" cy="50" r="10" fill="#61DAFB"/>
          </svg>
        );
      case 'js':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#F7DF1E] text-black font-extrabold flex items-center justify-center font-mono text-sm shadow-md transition-transform duration-300 group-hover:scale-110">
            JS
          </div>
        );
      case 'nextjs':
        return (
          <div className="w-8 h-8 rounded-full bg-white text-black font-extrabold flex items-center justify-center font-mono text-xs shadow-md transition-transform duration-300 group-hover:scale-110">
            N
          </div>
        );
      case 'tailwind':
        return (
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#38BDF8">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        );
      case 'html':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#E34F26] text-white font-bold flex items-center justify-center font-mono text-xs shadow-md transition-transform duration-300 group-hover:scale-110">
            &lt;/&gt;
          </div>
        );
      case 'css':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#1572B6] text-white font-bold flex items-center justify-center font-mono text-xs shadow-md transition-transform duration-300 group-hover:scale-110">
            CSS
          </div>
        );
      case 'git':
        return (
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#F05032">
            <path d="M2.6 10.59L8.38 4.8a1.69 1.69 0 0 1 2.38 0l1.6 1.6-2.06 2.06a2.12 2.12 0 0 0-.58 2.06l-2.4 2.4a2.15 2.15 0 1 0 1.2 1.2l2.35-2.35a2.12 2.12 0 0 0 1.95-.53l2.06-2.06 5.8 5.8a1.69 1.69 0 0 1 0 2.38l-5.78 5.78a1.69 1.69 0 0 1-2.38 0l-10.4-10.4a1.69 1.69 0 0 1 0-2.38z"/>
          </svg>
        );
      case 'github':
        return (
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </div>
        );
      case 'vscode':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#007ACC] text-white flex items-center justify-center font-bold font-mono text-xs shadow-md transition-transform duration-300 group-hover:scale-110">
            VS
          </div>
        );
      default:
        return <Code2 className="w-8 h-8 text-emerald-400" />;
    }
  };

  // Filtered categories
  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-900/40 border-y border-slate-800/60">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Tools &amp; Technologies I Work With
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Grounded in core web technologies with continuous practice on real project implementations. No arbitrary percentages — just authentic proficiencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-emerald-500 text-dark-950 font-bold shadow-glow-sm'
                : 'bg-dark-800/80 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-600'
            }`}
          >
            All Technologies
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-emerald-500 text-dark-950 font-bold shadow-glow-sm'
                  : 'bg-dark-800/80 text-slate-300 hover:text-white border border-slate-700/60 hover:border-slate-600'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                </span>
              </div>

              {/* Grid of Skill Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill, sIdx) => {
                  const badge = getLevelBadge(skill.level);
                  return (
                    <div
                      key={sIdx}
                      className="group relative glass-panel p-5 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-card overflow-hidden"
                    >
                      {/* Subtle hover gradient background glow */}
                      <div className="absolute -right-10 -bottom-10 w-28 h-28 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-colors" />

                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shadow-inner group-hover:border-slate-700 transition-colors">
                            {renderSkillIcon(skill.icon, skill.color)}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-slate-400 font-mono">
                              {skill.statusText}
                            </p>
                          </div>
                        </div>

                        {/* Proficiency Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border ${badge.bg}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                          <span>{badge.text}</span>
                        </div>
                      </div>

                      {/* Detail / Description */}
                      <div className="relative z-10 mt-4 pt-3.5 border-t border-slate-800/70">
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {skill.experienceDetail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Commitment Note Card */}
        <div className="mt-14 glass-panel p-5 sm:p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Continuous Student Learning &amp; Upskilling
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Actively applying clean code standards, Git commit habits, and modern React patterns across every project.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-xs font-semibold text-white border border-slate-700 transition-colors shrink-0"
          >
            See Projects In Action →
          </a>
        </div>

      </div>
    </section>
  );
}
