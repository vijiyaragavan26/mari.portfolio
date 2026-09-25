import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ScientificContactIcon,
  ScientificPhoneIcon,
  ScientificWhatsAppIcon,
  ScientificSendIcon,
  MolecularEmailIcon,
  LocationNodeIcon,
  ScientificNetworkIcon,
  CheckCircleNodeIcon,
  ArrowRightNodeIcon,
  ResearchCollaborationIcon
} from './OriginalIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Research Discussion / Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject + ' - from ' + formState.name
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <ScientificContactIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Open for Opportunities & Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Let's Connect
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            For research discussions, academic opportunities, laboratory collaborations or professional mentorship, feel free to reach out.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Information Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md flex items-start justify-between gap-4 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center shrink-0">
                  <ScientificContactIcon className="w-6 h-6 text-[#00E5FF]" color="#00E5FF" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold block mb-1">
                    EMAIL INQUIRIES
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-[#F4FAFF] hover:text-[#00E5FF] break-all transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <p className="text-xs text-[#A9C4D8] mt-1">
                    Quickest response for academic & research inquiries
                  </p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 rounded-xl text-[#A9C4D8] hover:text-[#00E5FF] hover:bg-[#02101F] transition-colors"
                title="Copy email address"
              >
                {copied ? <CheckCircleNodeIcon className="w-4 h-4 text-[#00E5FF]" color="#00E5FF" /> : <span className="text-xs font-mono font-bold text-[#00E5FF]">Copy</span>}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center shrink-0">
                <ScientificPhoneIcon className="w-6 h-6 text-[#00E5FF]" color="#00E5FF" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-wider font-semibold block mb-1">
                  DIRECT PHONE
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-[#F4FAFF] hover:text-[#00E5FF] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <p className="text-xs text-[#A9C4D8] mt-1">
                  Available for phone discussions
                </p>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md flex items-start justify-between gap-4 group hover:border-[#25D366]/60 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#25D366]/40 text-[#25D366] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                  <ScientificWhatsAppIcon className="w-6 h-6" color="#25D366" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#25D366] uppercase tracking-wider font-semibold block mb-1">
                    WHATSAPP DIRECT
                  </span>
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#F4FAFF] hover:text-[#25D366] transition-colors"
                  >
                    {PERSONAL_INFO.whatsapp}
                  </a>
                  <p className="text-xs text-[#A9C4D8] mt-1">
                    Instant messaging for research opportunities
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-mono font-bold hover:bg-[#128C7E] transition-all shadow-md flex items-center gap-1.5 shrink-0 mt-1 hover:scale-105"
                title="Chat on WhatsApp"
              >
                <span>Chat</span>
                <span>→</span>
              </a>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              whileHover={{ y: -3 }}
              className="p-6 rounded-3xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center shrink-0">
                <LocationNodeIcon className="w-6 h-6 text-[#00E5FF]" color="#00E5FF" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#A9C4D8] uppercase tracking-wider font-semibold block mb-1">
                  BASE LOCATION
                </span>
                <p className="text-base font-bold text-[#F4FAFF]">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-[#A9C4D8] mt-1">
                  Tamil Nadu, India • Open to relocation for research positions
                </p>
              </div>
            </motion.div>

            {/* LinkedIn CTA Button Card */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-gradient-to-r from-[#06243A] via-[#071E30] to-[#02101F] text-white shadow-md border border-[#00E5FF]/30 flex items-center justify-between group transition-all"
            >
              <div className="flex items-center gap-3">
                <ScientificNetworkIcon className="w-7 h-7 text-[#00E5FF]" color="#00E5FF" secondaryColor="#00B8D4" />
                <div>
                  <span className="font-heading font-bold text-base block text-[#F4FAFF]">
                    Connect on LinkedIn
                  </span>
                  <span className="text-xs text-[#A9C4D8] font-mono">
                    Professional Network & Updates
                  </span>
                </div>
              </div>
              <ArrowRightNodeIcon className="w-5 h-5 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
            </motion.a>

          </motion.div>

          {/* Right Column: Interactive Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md"
          >
            <div className="flex items-center gap-2 mb-6">
              <MolecularEmailIcon className="w-5 h-5 text-[#00E5FF]" color="#00E5FF" />
              <h3 className="font-heading font-bold text-xl text-[#F4FAFF]">
                Send Direct Message / Research Inquiry
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-[#00E5FF] mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Prof. / Dr. / Researcher"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF] placeholder-[#A9C4D8]/60 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] shadow-2xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold text-[#00E5FF] mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@institution.edu"
                    className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF] placeholder-[#A9C4D8]/60 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#00E5FF] mb-1">
                  SUBJECT / TOPIC
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] shadow-2xs"
                >
                  <option className="bg-[#02101F] text-[#F4FAFF]">Research Internship Opportunity</option>
                  <option className="bg-[#02101F] text-[#F4FAFF]">Biomedical Research Collaboration</option>
                  <option className="bg-[#02101F] text-[#F4FAFF]">Graduate / PhD Opportunity Discussion</option>
                  <option className="bg-[#02101F] text-[#F4FAFF]">Laboratory Position Inquiry</option>
                  <option className="bg-[#02101F] text-[#F4FAFF]">General Academic Discussion</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#00E5FF] mb-1">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Share details regarding your research inquiry, internship opening, or academic opportunity..."
                  className="w-full px-4 py-2.5 rounded-xl text-sm bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF] placeholder-[#A9C4D8]/60 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] resize-none shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#00E5FF] text-[#031525] font-bold text-sm hover:bg-[#00B8D4] transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.25)]"
              >
                <ScientificSendIcon className="w-4 h-4 text-[#031525]" color="#031525" />
                <span>Send Inquiry (Opens Email Client)</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-semibold flex items-center gap-2">
                  <CheckCircleNodeIcon className="w-4 h-4 shrink-0 text-[#00E5FF]" color="#00E5FF" />
                  <span>Your email client has been prepared with your message!</span>
                </div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

