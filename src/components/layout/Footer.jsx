import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-white border-t border-emerald-200/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-emerald-100">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 p-[2px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-mono font-bold text-emerald-700 text-xs">
                  SC
                </div>
              </div>
              <span className="text-lg font-bold text-slate-900 font-heading">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-sm">
              BSc. CSIT Student at Godawari College, Tribhuvan University. Aspiring Full-Stack Developer.
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-2xs"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-2xs"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-2xs"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-emerald-600" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-md shadow-emerald-600/20 ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            © {new Date().getFullYear()} Sanita Chaudhary. Built with React &amp; Tailwind CSS.
          </p>
          <div className="flex items-center gap-2 font-semibold text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Green &amp; White Theme • Tribhuvan University, Nepal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
