import React from 'react';
import { motion } from 'framer-motion';
import { 
  MicroscopeDiscoveryIcon, 
  ResearchTimelineIcon, 
  ScientificDocumentDnaIcon, 
  ScientificNetworkIcon,
  ScientificWhatsAppIcon,
  BiomedicalScienceIcon,
  BiotechnologyIcon,
  MolecularNodeIcon
} from './OriginalIcons';
import { PERSONAL_INFO, HERO_CARDS } from '../data/portfolioData';
import { MolecularCanvas } from './MolecularCanvas';

interface HeroProps {
  onOpenCV?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col justify-center overflow-hidden bg-[#031525] border-b border-[#00E5FF]/20"
    >
      {/* High-Resolution Futuristic Dark Biomedical Wave Background Art */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/assets/backgrounds/biomedical_dark_wave_bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Subtle scientific ambient glowing nodes */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00B8D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Academic Researcher Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            {/* Top Scientific Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071E30] border border-[#00E5FF]/30 w-fit shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E5FF]"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-[#00E5FF] tracking-wide uppercase">
                {PERSONAL_INFO.tagline}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <span className="block font-mono text-xs uppercase tracking-widest text-[#00B8D4] font-semibold">
                BIOMEDICAL SCIENCE & BIOTECHNOLOGY RESEARCH PORTFOLIO
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#F4FAFF] leading-[1.1]">
                MARIYAPPAN V.
              </h1>
            </div>

            {/* Role Sub-title */}
            <div className="font-mono text-sm sm:text-base font-semibold text-[#00E5FF] border-l-2 border-[#00B8D4] pl-3">
              M.Sc. Biomedical Student <span className="text-[#A9C4D8]/50">|</span> Biotechnology Graduate <span className="text-[#A9C4D8]/50">|</span> IIT Madras Fellow '26
            </div>

            {/* Factual Introduction Paragraph */}
            <p className="text-base sm:text-lg text-[#A9C4D8] max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            {/* Action CTA Buttons with Custom SVG Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#research"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-bold text-sm bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] shadow-lg shadow-[#00E5FF]/20 transition-all hover:translate-y-[-2px] group"
                data-cursor="Research"
              >
                <MicroscopeDiscoveryIcon className="w-4 h-4 text-[#031525] group-hover:rotate-12 transition-transform" />
                <span>Explore My Research</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm bg-[#071E30] border border-[#00E5FF]/30 text-[#F4FAFF] hover:border-[#00E5FF] hover:bg-[#00E5FF]/10 transition-all shadow-xs"
              >
                <ResearchTimelineIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>View Experience</span>
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-[#F4FAFF] hover:text-[#00E5FF] hover:bg-[#071E30] transition-all border border-[#00E5FF]/30"
                title="View Verified Academic CV / Original Resume"
              >
                <ScientificDocumentDnaIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>Download CV</span>
              </button>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-medium text-sm text-[#F4FAFF] hover:text-[#00E5FF] hover:bg-[#071E30] transition-all border border-[#00E5FF]/30"
              >
                <ScientificNetworkIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-semibold text-sm text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 transition-all border border-[#25D366]/40 shadow-2xs hover:scale-105"
                title="Direct WhatsApp Message"
              >
                <ScientificWhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Institutional Credentials & Affiliations */}
            <div className="pt-4 border-t border-[#00E5FF]/20">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#00B8D4] font-semibold mb-2">
                VERIFIED ACADEMIC AFFILIATIONS
              </span>
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#F4FAFF]">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071E30] border border-[#00E5FF]/25 font-medium shadow-2xs hover:border-[#00E5FF] transition-colors">
                  <img src="/assets/logos/alagappa_university_logo.png" alt="Alagappa University Logo" className="w-5 h-5 object-contain bg-white/90 rounded-md p-0.5" />
                  <span>Alagappa University — Karaikudi (Tamil Nadu)</span>
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071E30] border border-[#00E5FF]/25 font-medium shadow-2xs hover:border-[#00E5FF] transition-colors text-[#F4FAFF]">
                  <img src="/assets/logos/iit_madras_logo.png" alt="IIT Madras Logo" className="w-5 h-5 object-contain bg-white/90 rounded-md p-0.5" />
                  <span>IIT Madras (Summer Fellow '26)</span>
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#071E30] border border-[#00E5FF]/25 font-medium shadow-2xs hover:border-[#00E5FF] transition-colors">
                  <img src="/assets/logos/ksrcas_logo.png" alt="K.S. Rangasamy CAS Logo" className="w-5 h-5 object-contain bg-white/90 rounded-md p-0.5" />
                  <span>K.S. Rangasamy — Tiruchengode (Tamil Nadu)</span>
                </span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D / Molecular Scientific Visualizer with Microscope & Hexagon Motif */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 h-[380px] sm:h-[440px] lg:h-[480px] relative rounded-3xl overflow-hidden glass-panel border border-[#00E5FF]/30 shadow-2xl bg-[#071E30]/80"
          >
            {/* Scientific Canvas Header Ribbon */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-[#031525]/90 backdrop-blur-md border border-[#00E5FF]/30 text-[11px] font-mono font-medium text-[#00E5FF] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>MOLECULAR_SIMULATION // 3D_DNA</span>
              </div>
              <span className="text-[10px] font-mono text-[#00B8D4] bg-[#031525]/90 px-2.5 py-0.5 rounded border border-[#00E5FF]/20 shadow-xs font-semibold">
                60 FPS • INTERACTIVE
              </span>
            </div>

            {/* Interactive Molecular Canvas */}
            <MolecularCanvas className="w-full h-full" />

            {/* Bottom Floating Scientific Note */}
            <div className="absolute bottom-4 inset-x-4 z-10 p-3 rounded-2xl bg-[#031525]/90 backdrop-blur-md border border-[#00E5FF]/30 flex items-center justify-between text-xs shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
                  <BiomedicalScienceIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[#F4FAFF] leading-none">
                    Target Epigenetic Proteins
                  </p>
                  <p className="text-[11px] text-[#A9C4D8] mt-0.5">
                    IIT Madras Biotechnology Research Exposure
                  </p>
                </div>
              </div>
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/30">
                MALARIA
              </span>
            </div>
          </motion.div>

        </div>

        {/* Hero Information Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HERO_CARDS.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="relative p-5 rounded-2xl bg-white border border-[#DDECF7] shadow-xs hover:shadow-md hover:border-[#87BDE3] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#2B86C5] bg-[#DDECF7]/80 px-2.5 py-0.5 rounded-md border border-[#BAD9EF]">
                  {card.num}
                </span>
                <span className="text-[11px] font-mono font-medium text-[#4D7395]">
                  {card.badge}
                </span>
              </div>
              <h3 className="font-heading font-bold text-base text-[#17324D] group-hover:text-[#2B86C5] transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-[#4D7395] mt-1">
                {card.subtitle}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
