import React from 'react';
import { motion } from 'framer-motion';
import { 
  BiomedicalScienceIcon, 
  BiotechnologyIcon, 
  LaboratoryResearchIcon, 
  MolecularNodeIcon, 
  LocationNodeIcon,
  ScientificCredentialIcon
} from './OriginalIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const profileFacts = [
    { label: "Current Degree", value: "M.Sc. Biomedical Science", icon: BiomedicalScienceIcon },
    { label: "Previous Degree", value: "B.Sc. Biotechnology (69%)", icon: BiotechnologyIcon },
    { label: "Research Exposure", value: "Biotechnology & Biomedical Science", icon: LaboratoryResearchIcon },
    { label: "Current Institution", value: "Alagappa University", icon: MolecularNodeIcon },
    { label: "Geographic Base", value: "Dharmapuri, Tamil Nadu, India", icon: LocationNodeIcon },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 overflow-hidden text-[#F4FAFF]">
      {/* Subtle cellular/molecular background illustration */}
      <div className="absolute top-10 right-10 opacity-[0.07] pointer-events-none">
        <svg width="360" height="360" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#00E5FF" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="60" cy="60" r="30" stroke="#00B8D4" strokeWidth="1.2" />
          <circle cx="60" cy="60" r="10" fill="#00E5FF" />
          <circle cx="30" cy="30" r="6" stroke="#00B8D4" strokeWidth="1" />
          <circle cx="90" cy="30" r="6" stroke="#00B8D4" strokeWidth="1" />
          <circle cx="90" cy="90" r="6" stroke="#00E5FF" strokeWidth="1" />
          <circle cx="30" cy="90" r="6" stroke="#00E5FF" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BiomedicalScienceIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Academic & Research Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            About Mariyappan V.
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Bridging foundational biotechnology methodologies with advanced biomedical research and clinical oncology concepts.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Photograph Frame with Mariyappan's Verified Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-sm rounded-3xl p-3 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-[0_0_30px_rgba(0,229,255,0.12)] group">
              
              {/* Profile Image Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#02101F] border border-[#00E5FF]/20 shadow-inner">
                <img 
                  src="/assets/profile/mariyappan.jpg" 
                  alt="Mariyappan V - M.Sc. Biomedical Science Student" 
                  className="w-full h-full object-cover object-[50%_14%] scale-[1.18] group-hover:scale-[1.23] transition-transform duration-500"
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#02101F]/95 via-[#02101F]/60 to-transparent flex flex-col justify-end p-4 text-[#F4FAFF]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#F4FAFF] leading-tight">
                        Mariyappan V.
                      </h3>
                      <p className="font-mono text-xs text-[#00E5FF]">
                        M.Sc. Candidate • Alagappa University, Karaikudi
                      </p>
                    </div>
                    <span className="p-1.5 rounded-xl bg-[#071E30]/80 border border-[#00E5FF]/30 backdrop-blur-md text-[#00E5FF]">
                      <ScientificCredentialIcon className="w-4 h-4 text-[#00E5FF]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Tag overlay */}
              <div className="mt-3 p-3 rounded-xl bg-[#02101F]/90 border border-[#00E5FF]/20 text-xs flex items-center justify-between shadow-2xs">
                <span className="font-mono text-[#A9C4D8] font-medium">STATUS</span>
                <span className="font-bold text-[#00E5FF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  Active Postgraduate Researcher
                </span>
              </div>
            </div>

            {/* Highlights Box */}
            <div className="w-full max-w-sm mt-4 grid grid-cols-2 gap-2.5 text-center">
              <div className="p-3 rounded-2xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-2xs flex flex-col items-center justify-center">
                <div className="w-8 h-8 mb-1 flex items-center justify-center">
                  <img src="/assets/logos/iit_madras_logo.png" alt="IIT Madras" className="w-full h-full object-contain" />
                </div>
                <span className="font-heading font-bold text-sm text-[#00E5FF] block">
                  IIT Madras
                </span>
                <span className="text-[10px] text-[#A9C4D8] font-mono font-semibold">
                  Summer Fellow '26
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-2xs flex flex-col items-center justify-center">
                <div className="w-8 h-8 mb-1 flex items-center justify-center">
                  <img src="/assets/logos/alagappa_university_logo.png" alt="Alagappa University" className="w-full h-full object-contain" />
                </div>
                <span className="font-heading font-bold text-sm text-[#00B8D4] block">
                  Alagappa Univ
                </span>
                <span className="text-[10px] text-[#A9C4D8] font-mono font-semibold">
                  M.Sc. Biomedical
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Factual Biography & Facts */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Biography Text */}
            <div className="prose max-w-none text-[#A9C4D8] space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-[#F4FAFF] font-bold">Mariyappan V.</strong> is currently pursuing an <strong className="text-[#00E5FF] font-semibold">M.Sc. in Biomedical Science</strong> at <strong className="text-[#F4FAFF] font-semibold">Alagappa University, Karaikudi (Tamil Nadu)</strong>, following a <strong className="text-[#F4FAFF] font-semibold">B.Sc. in Biotechnology</strong> from <strong className="text-[#F4FAFF] font-semibold">K.S. Rangasamy College of Arts and Science (Autonomous), Tiruchengode (Tamil Nadu)</strong>.
              </p>
              
              <p>
                His academic and laboratory investigations span microbiology, forensic science biochemical assays, drug discovery screening, and certified medical writing & scientific communication.
              </p>

              <p>
                He completed the <strong className="text-[#00E5FF] font-semibold">Summer Fellowship Programme 2026 at IIT Madras</strong> in the Department of Biotechnology, investigating methodological approaches for malaria parasite epigenetic proteins.
              </p>
            </div>

            {/* Profile Facts Grid */}
            <div className="pt-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5FF] mb-3">
                Core Academic & Institutional Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      className="p-3.5 rounded-xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.2)] hover:border-[#00E5FF]/50 flex items-start gap-3 shadow-2xs transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-[#A9C4D8] block">
                          {fact.label}
                        </span>
                        <span className="text-sm font-semibold text-[#F4FAFF] leading-snug">
                          {fact.value}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Research Intent Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[#06243A] via-[#071E30] to-[#02101F] border border-[#00E5FF]/30 flex items-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.08)]">
              <div className="p-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] shrink-0 shadow-2xs">
                <BiomedicalScienceIcon className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#F4FAFF] leading-relaxed">
                Open to academic research opportunities, doctoral study explorations, laboratory assistantships, and scientific collaborations across biomedical science and biotechnology.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
