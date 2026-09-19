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

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore if not loaded
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-emerald-50/50 border-t border-emerald-100">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs font-mono uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight">
            Let's Build Something Together.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            I'm currently focused on growing as a developer and open to internship, collaboration and learning opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Pill with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-100 shadow-sm hover:border-emerald-300 transition-all duration-300">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-2">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-800 font-bold truncate select-all">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white hover:bg-emerald-100 text-emerald-800 shadow-xs border border-emerald-200 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-700" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-[11px] font-mono text-emerald-700 font-bold mt-2 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Social Profiles Grid */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-100 shadow-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                Connect on Platforms
              </span>

              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-200 transition-all duration-200 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-slate-900 group-hover:text-emerald-700 group-hover:scale-105 transition-all shadow-xs">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        GitHub Profile
                      </p>
                      <p className="text-xs text-slate-500 font-mono font-medium">
                        github.com/Sanita226
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50/40 hover:bg-emerald-50 border border-emerald-200 transition-all duration-200 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-all shadow-xs">
                      <LinkedinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        LinkedIn Profile
                      </p>
                      <p className="text-xs text-slate-500 font-mono font-medium">
                        linkedin.com/in/sanitachaudhary
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Academic Note */}
            <div className="p-5 rounded-3xl bg-white border-2 border-emerald-100 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 font-bold">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Kathmandu, Nepal • Available for Remote &amp; On-Site</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <GraduationCap className="w-4 h-4 text-emerald-600" />
                <span>Godawari College • Tribhuvan University</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-100 shadow-md">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border-2 border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Message Prepared!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-emerald-700 font-bold">{formData.name}</span>! Since this is a client-side showcase, you can open and send this directly via your email client:
                  </p>
                  
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sanita,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>
                    
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-sm font-bold border border-emerald-200 transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-emerald-100 pb-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 font-heading">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Discussing an internship, project, or student question? Fill in your details below.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-emerald-50/40 border text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                          errors.name ? 'border-rose-400' : 'border-emerald-200 focus:border-emerald-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-mono mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-emerald-50/40 border text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                          errors.email ? 'border-rose-400' : 'border-emerald-200 focus:border-emerald-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-mono mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                      Subject / Opportunity
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship opportunity / Collaboration inquiry"
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-50/40 border border-emerald-200 text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Sanita, we came across your portfolio and would love to connect about an opportunity..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-emerald-50/40 border text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none ${
                        errors.message ? 'border-rose-400' : 'border-emerald-200 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 font-mono mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-sm sm:text-base shadow-md shadow-emerald-600/25 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 focus:outline-none"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    Direct inquiries can also be sent anytime to{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-emerald-700 font-bold hover:underline">
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
