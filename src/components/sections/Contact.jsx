import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  MapPin, 
  Sparkles,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore if canvas-confetti is not loaded
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-900/50 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            I'm currently focused on growing as a developer and open to internship, collaboration and learning opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Pill with One-Click Copy */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-dark-950/80 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate select-all">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Social Profiles Grid */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800/80 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                Connect on Platforms
              </span>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-dark-950/70 hover:bg-dark-950 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-200 group-hover:text-emerald-400 group-hover:scale-105 transition-all">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        GitHub Profile
                      </p>
                      <p className="text-xs text-slate-400 font-mono">
                        github.com/Sanita226
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-dark-950/70 hover:bg-dark-950 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-all">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                        LinkedIn Profile
                      </p>
                      <p className="text-xs text-slate-400 font-mono">
                        linkedin.com/in/sanitachaudhary
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Academic Note */}
            <div className="p-5 rounded-2xl bg-dark-950/80 border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Kathmandu, Nepal • Available for Remote &amp; On-Site</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
                <span>Godawari College • Tribhuvan University</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 shadow-card">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Message Prepared!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-emerald-400 font-semibold">{formData.name}</span>! Since this is a static client-side showcase, you can also send this note directly via email:
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sanita,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-dark-950 font-bold text-sm shadow-glow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-dark-800 hover:bg-slate-700 text-slate-300 hover:text-white text-sm font-medium transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-3 mb-2">
                    <h3 className="text-xl font-bold text-white font-heading">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Looking to discuss an internship, question, or project? Fill in your details below.
                    </p>
                  </div>

                  {/* Name and Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Your Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                          errors.name ? 'border-rose-500/80' : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                        Your Email <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all ${
                          errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-emerald-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Subject / Opportunity
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / Collaboration inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sanita, we came across your portfolio and would love to chat about a junior frontend opportunity..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-dark-950/80 border text-slate-100 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all resize-none ${
                        errors.message ? 'border-rose-500/80' : 'border-slate-800 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 font-mono mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-dark-950 font-extrabold text-sm sm:text-base shadow-glow-md hover:shadow-glow-cyan transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 focus:outline-none"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center font-mono">
                    Direct inquiries can also be sent anytime to{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-emerald-400 hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
