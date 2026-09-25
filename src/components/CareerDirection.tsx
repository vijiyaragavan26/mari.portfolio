import React from 'react';
import { motion } from 'framer-motion';
import { 
  BiomedicalScienceIcon, 
  BiotechnologyIcon, 
  DrugDiscoveryIcon, 
  LaboratoryResearchIcon, 
  ArrowRightNodeIcon
} from './OriginalIcons';
import { CAREER_PILLARS } from '../data/portfolioData';

export const CareerDirection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return BiomedicalScienceIcon;
      case 'Dna': return BiotechnologyIcon;
      case 'Pill': return DrugDiscoveryIcon;
      case 'Microscope': return LaboratoryResearchIcon;
      default: return BiomedicalScienceIcon;
    }
  };

  return (
    <section id="career-direction" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BiomedicalScienceIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Future Pathways & Research Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Where I'm Heading
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            "Building a foundation in biotechnology and biomedical science through academic research, laboratory exposure, scientific communication and research-oriented learning."
          </p>
        </div>

        {/* 4 Direction Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_PILLARS.map((pillar, idx) => {
            const Icon = getPillarIcon(pillar.icon);

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 sm:p-7 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#00E5FF]" color="#00E5FF" secondaryColor="#00B8D4" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#F4FAFF] mb-1">
                    {pillar.title}
                  </h3>

                  <span className="font-mono text-xs font-semibold text-[#00E5FF] block mb-3">
                    {pillar.tagline}
                  </span>

                  <p className="text-xs sm:text-sm text-[#A9C4D8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#00E5FF]/20 flex items-center text-xs font-bold text-[#00E5FF] group-hover:translate-x-1 transition-transform">
                  <a href="#contact" className="inline-flex items-center gap-1 hover:text-[#00B8D4]">
                    <span>Explore Opportunities</span>
                    <ArrowRightNodeIcon className="w-3.5 h-3.5" color="#00E5FF" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

