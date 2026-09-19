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
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-300 font-bold',
          dot: 'bg-emerald-600',
          text: 'Building With'
        };
      case 'Comfortable':
        return {
          bg: 'bg-teal-50 text-teal-800 border-teal-200 font-semibold',
          dot: 'bg-teal-600',
          text: 'Comfortable'
        };
      case 'Learning':
      default:
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
          dot: 'bg-emerald-500',
          text: 'Actively Learning'
        };
    }
  };

  const renderSkillIcon = (iconName) => {
    switch (iconName) {
      case 'react':
        return (
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" viewBox="0 0 115.3 100" fill="none">
            <ellipse cx="57.65" cy="50" rx="55" ry="20" stroke="#059669" strokeWidth="6" transform="rotate(30 57.65 50)"/>
            <ellipse cx="57.65" cy="50" rx="55" ry="20" stroke="#059669" strokeWidth="6" transform="rotate(90 57.65 50)"/>
            <ellipse cx="57.65" cy="50" rx="55" ry="20" stroke="#059669" strokeWidth="6" transform="rotate(150 57.65 50)"/>
            <circle cx="57.65" cy="50" r="10" fill="#059669"/>
          </svg>
        );
      case 'js':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#F7DF1E] text-slate-900 font-extrabold flex items-center justify-center font-mono text-sm shadow-xs transition-transform duration-300 group-hover:scale-110">
            JS
          </div>
        );
      case 'nextjs':
        return (
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-extrabold flex items-center justify-center font-mono text-xs shadow-xs transition-transform duration-300 group-hover:scale-110">
            N
          </div>
        );
      case 'tailwind':
        return (
          <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="#0284c7">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
          </svg>
        );
      case 'html':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#E34F26] text-white font-bold flex items-center justify-center font-mono text-xs shadow-xs transition-transform duration-300 group-hover:scale-110">
            &lt;/&gt;
          </div>
        );
      case 'css':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#1572B6] text-white font-bold flex items-center justify-center font-mono text-xs shadow-xs transition-transform duration-300 group-hover:scale-110">
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
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
          </div>
        );
      case 'vscode':
        return (
          <div className="w-8 h-8 rounded-lg bg-[#007ACC] text-white flex items-center justify-center font-bold font-mono text-xs shadow-xs transition-transform duration-300 group-hover:scale-110">
            VS
          </div>
        );
      default:
        return <Code2 className="w-8 h-8 text-emerald-600" />;
    }
  };

  const displayedCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-emerald-50/30 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Tools &amp; Technologies I Work With
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Grounded in core web technologies with continuous practice on real project implementations. No arbitrary percentages — just authentic proficiencies.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'bg-white text-slate-700 hover:text-emerald-800 border border-emerald-200 hover:border-emerald-300'
            }`}
          >
            All Technologies
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white text-slate-700 hover:text-emerald-800 border border-emerald-200 hover:border-emerald-300'
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
              <div className="flex items-center justify-between border-b border-emerald-200/80 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {category.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded">
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
                      className="group relative p-5 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/5 overflow-hidden"
                    >
                      {/* Subtle hover mint glow */}
                      <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-100/50 rounded-full blur-xl group-hover:bg-emerald-200/50 transition-colors" />

                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-2xs group-hover:border-emerald-200 transition-colors">
                            {renderSkillIcon(skill.icon)}
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 font-heading group-hover:text-emerald-700 transition-colors">
                              {skill.name}
                            </h4>
                            <p className="text-xs text-slate-500 font-mono">
                              {skill.statusText}
                            </p>
                          </div>
                        </div>

                        {/* Proficiency Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border ${badge.bg}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                          <span>{badge.text}</span>
                        </div>
                      </div>

                      {/* Detail / Description */}
                      <div className="relative z-10 mt-4 pt-3.5 border-t border-emerald-100">
                        <p className="text-xs text-slate-600 leading-relaxed">
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

        {/* Commitment Banner */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Continuous Student Learning &amp; Upskilling
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Applying clean code standards, Git commit habits, and modern React patterns across every project.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all shrink-0"
          >
            See Projects In Action →
          </a>
        </div>

      </div>
    </section>
  );
}
