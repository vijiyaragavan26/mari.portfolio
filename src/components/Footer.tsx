import React from 'react';
import { 
  MonogramMVIcon,
  ScientificNetworkIcon,
  ScientificContactIcon,
  ScientificPhoneIcon,
  ScientificWhatsAppIcon,
  MolecularEmailIcon,
  ResearchCollaborationIcon,
  ArrowRightNodeIcon
} from './OriginalIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#02101F] text-[#F4FAFF] pt-16 pb-12 border-t border-[#00E5FF]/20 relative overflow-hidden">
      
      {/* Top Banner / Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#06243A] via-[#071E30] to-[#02101F] border border-[rgba(0,229,255,0.25)] relative overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.12)] flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
          
          <div className="space-y-3 text-center md:text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E5FF] block">
              FINAL NOTE // RESEARCH VISION
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F4FAFF] tracking-tight">
              "Curious minds create better discoveries."
            </h3>
            <p className="text-[#A9C4D8] text-xs sm:text-sm max-w-xl">
              Mariyappan V • M.Sc. Biomedical Science at Alagappa University, Karaikudi • Biotechnology Graduate from K.S. Rangasamy, Tiruchengode • IIT Madras Summer Fellow 2026.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs transition-all flex items-center gap-2 shadow-md hover:scale-105"
            >
              <ScientificWhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
              <span>WhatsApp Chat</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] font-bold text-xs transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.25)] hover:scale-105"
            >
              <ScientificNetworkIcon className="w-4 h-4 text-[#031525]" color="#031525" />
              <span>LinkedIn</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-[#071E30] hover:bg-[#02101F] text-[#F4FAFF] font-bold text-xs border border-[#00E5FF]/30 transition-all flex items-center gap-2"
            >
              <ScientificContactIcon className="w-4 h-4 text-[#00E5FF]" color="#00E5FF" />
              <span>Get in Touch</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#00E5FF]/20">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.4)] ring-2 ring-[#00B8D4]/30 bg-[#02101F] shrink-0">
                <img 
                  src="/assets/profile/mariyappan.jpg" 
                  alt="Mariyappan V" 
                  className="w-full h-full object-cover object-[50%_15%] scale-110" 
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#F4FAFF]">
                  MARIYAPPAN V
                </h4>
                <p className="font-mono text-xs text-[#00E5FF] font-medium">
                  M.Sc. Biomedical Science | Biotechnology
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A9C4D8] leading-relaxed max-w-sm">
              Academic & research portfolio dedicated to biomedical investigations, parasitic epigenetics exposure, biotechnology foundations, and scientific communication.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#071E30] border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                title="WhatsApp Chat"
              >
                <ScientificWhatsAppIcon className="w-4 h-4" color="#25D366" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#031525] flex items-center justify-center transition-colors shadow-2xs"
                title="LinkedIn Profile"
              >
                <ScientificNetworkIcon className="w-4 h-4" color="#00E5FF" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#031525] flex items-center justify-center transition-colors shadow-2xs"
                title="Direct Email"
              >
                <ScientificContactIcon className="w-4 h-4" color="#00E5FF" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-xl bg-[#071E30] border border-[#00E5FF]/30 text-[#00B8D4] hover:bg-[#00B8D4] hover:text-[#031525] flex items-center justify-center transition-colors shadow-2xs"
                title="Direct Phone"
              >
                <ScientificPhoneIcon className="w-4 h-4" color="#00B8D4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Sitemap */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5FF] block">
              PORTFOLIO DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">About</a>
              <a href="#education" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Education</a>
              <a href="#research" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Research Experience</a>
              <a href="#projects" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Projects</a>
              <a href="#publications" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Presentations</a>
              <a href="#conferences" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Conferences</a>
              <a href="#certificates" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Certificates</a>
              <a href="#skills" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Skills</a>
              <a href="#contact" className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors">Contact</a>
            </div>
          </div>

          {/* Academic Verification Note */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5FF] block">
              ACADEMIC VERIFICATION
            </span>
            <div className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 text-[11px] text-[#A9C4D8] space-y-2">
              <p>
                All academic records, IIT Madras Summer Fellowship (2026), conference presentations, and value-added certifications reflect verified institutional records.
              </p>
              <div className="flex items-center gap-1.5 text-[#00E5FF] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>Fact-Verified Portfolio</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A9C4D8]">
          <div className="flex items-center gap-3">
            <p>© 2026 Mariyappan V. All rights reserved.</p>
            <span className="text-[#A9C4D8]/30">•</span>
            <a
              href="#admin"
              className="text-[#A9C4D8]/40 hover:text-[#00E5FF] transition-colors flex items-center gap-1 text-[11px]"
              title="Admin Portal (Password Protected)"
            >
              <span>🔒 Admin</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#A9C4D8] hover:text-[#00E5FF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowRightNodeIcon className="w-3.5 h-3.5 -rotate-90 text-[#00E5FF]" color="#00E5FF" />
          </button>
        </div>

      </div>

    </footer>
  );
};

