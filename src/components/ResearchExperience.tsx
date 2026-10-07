import React from 'react';
import { motion } from 'framer-motion';
import { 
  BiotechnologyIcon, 
  BiomedicalScienceIcon, 
  ScientificCredentialIcon, 
  MolecularNodeIcon, 
  ResearchTimelineIcon,
  LaboratoryResearchIcon
} from './OriginalIcons';
import { RESEARCH_EXPERIENCE } from '../data/portfolioData';

interface ResearchExperienceProps {
  onOpenCertificateModal?: (certId: string) => void;
}

export const ResearchExperience: React.FC<ResearchExperienceProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 overflow-hidden text-[#F4FAFF]">
      {/* Subtle molecular background element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BiotechnologyIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Premier Institute Research Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Research Experience & Fellowship
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Intensive fellowship tenure in premier biotechnology research environments investigating parasitic epigenetics and molecular methodologies.
          </p>
        </div>

        {/* Featured IIT Madras Fellowship Card */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-[0_0_35px_rgba(0,229,255,0.1)] overflow-hidden"
        >
          {/* Subtle Ambient Background Accent */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-[#00E5FF]/10 via-[#00B8D4]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            
            {/* Card Header Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#00E5FF]/20">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 p-1.5 flex items-center justify-center shadow-xs shrink-0">
                  <img src="/assets/logos/iit_madras_logo.png" alt="IIT Madras Official Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-extrabold text-xl sm:text-2xl text-[#F4FAFF]">
                      {RESEARCH_EXPERIENCE.institution}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#00E5FF] font-semibold">
                    {RESEARCH_EXPERIENCE.department}
                  </span>
                </div>
              </div>

              {/* Verified Certificate Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono font-semibold">
                <ScientificCredentialIcon className="w-4 h-4 text-[#00E5FF]" />
                <span>Verified IIT Madras Participation Certificate</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Left Column: Programme & Topic Details */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#A9C4D8] font-semibold">
                    PROGRAMME TITLE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F4FAFF] mt-1">
                    {RESEARCH_EXPERIENCE.programme}
                  </h3>
                </div>

                {/* Research Topic Box */}
                <div className="p-5 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 shadow-2xs">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00E5FF] block mb-1">
                    FELLOWSHIP RESEARCH TOPIC
                  </span>
                  <p className="font-heading font-bold text-base sm:text-lg text-[#F4FAFF] leading-snug">
                    "{RESEARCH_EXPERIENCE.topic}"
                  </p>
                  <p className="text-xs text-[#A9C4D8] mt-2">
                    Methodological and biochemical investigation into epigenetic protein targets of Plasmodium malaria parasites.
                  </p>
                </div>

                {/* Overview Text */}
                <p className="text-[#A9C4D8] text-sm sm:text-base leading-relaxed">
                  {RESEARCH_EXPERIENCE.overview}
                </p>

                {/* Core Focus Highlights */}
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#00E5FF] mb-3">
                    Methodological & Learning Areas
                  </h4>
                  <ul className="space-y-2.5">
                    {RESEARCH_EXPERIENCE.coreFocusAreas.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F4FAFF]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Metadata Cards & Certificate Preview Action */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                
                {/* Institutional Facts Grid */}
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[#02101F]/70 border border-[#00E5FF]/20 flex items-center gap-3 shadow-2xs">
                    <div className="p-2 rounded-xl bg-[#071E30] text-[#00E5FF] border border-[#00E5FF]/30">
                      <ResearchTimelineIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A9C4D8] font-medium block">FELLOWSHIP TENURE</span>
                      <span className="text-sm font-semibold text-[#F4FAFF]">{RESEARCH_EXPERIENCE.duration}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#02101F]/70 border border-[#00E5FF]/20 flex items-center gap-3 shadow-2xs">
                    <div className="p-2 rounded-xl bg-[#071E30] text-[#00E5FF] border border-[#00E5FF]/30">
                      <LaboratoryResearchIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A9C4D8] font-medium block">FACULTY MENTOR</span>
                      <span className="text-sm font-semibold text-[#F4FAFF]">Arumugam</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#02101F]/70 border border-[#00E5FF]/20 flex items-center gap-3 shadow-2xs">
                    <div className="p-2 rounded-xl bg-[#071E30] text-[#00E5FF] border border-[#00E5FF]/30">
                      <BiotechnologyIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A9C4D8] font-medium block">ACADEMIC DEPARTMENT</span>
                      <span className="text-sm font-semibold text-[#F4FAFF]">{RESEARCH_EXPERIENCE.department}</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Action Box with Clickable High-Res Preview */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-[#06243A] to-[#02101F] text-[#F4FAFF] border border-[#00E5FF]/30 shadow-[0_0_20px_rgba(0,229,255,0.12)]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#00E5FF] font-semibold tracking-wider uppercase flex items-center gap-1.5">
                      <ScientificCredentialIcon className="w-4 h-4 text-[#00E5FF]" />
                      Official IIT Madras Credential
                    </span>
                    <span className="text-[10px] font-mono bg-[#00E5FF]/20 text-[#00E5FF] px-2 py-0.5 rounded border border-[#00E5FF]/40">
                      Verified
                    </span>
                  </div>

                  {/* Visual Certificate Preview Thumbnail */}
                  <div 
                    onClick={() => onOpenCertificateModal?.('cert-iitm-2026')}
                    className="relative rounded-xl overflow-hidden border border-[#00E5FF]/30 bg-[#02101F] mb-3 cursor-pointer group/cert aspect-[16/11]"
                  >
                    <img 
                      src="/assets/certificates/IMG-20261007-WA0005.jpg" 
                      alt="IIT Madras Summer Fellowship Certificate of Participation" 
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/cert:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#02101F]/70 opacity-0 group-hover/cert:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[#00E5FF] text-[#031525] font-bold text-xs shadow-lg inline-flex items-center gap-1.5">
                        <ScientificCredentialIcon className="w-3.5 h-3.5 text-[#031525]" />
                        Inspect High-Res Certificate
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#A9C4D8] mb-3 leading-relaxed">
                    Participation certificate formally issued by IIT Madras Department of Biotechnology (Tenure: 18.05.2026 to 17.07.2026).
                  </p>
                  <button
                    onClick={() => onOpenCertificateModal?.('cert-iitm-2026')}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                    data-cursor="Inspect"
                  >
                    <span>View & Download Certificate</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
