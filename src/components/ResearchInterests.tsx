import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BiomedicalScienceIcon,
  BiotechnologyIcon,
  MolecularBiologyIcon,
  LaboratoryResearchIcon,
  CancerResearchIcon,
  ScientificCommunicationIcon,
  BioinformaticsIcon,
  BacterialDegradationIcon,
  DrugDiscoveryIcon,
  ForensicScienceIcon,
  FilterNodeIcon
} from './OriginalIcons';
import { RESEARCH_INTERESTS } from '../data/portfolioData';

export const ResearchInterests: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dna': return BiotechnologyIcon;
      case 'Binary': return BioinformaticsIcon;
      case 'HeartPulse': return BiomedicalScienceIcon;
      case 'Pill': return DrugDiscoveryIcon;
      case 'Boxes': return MolecularBiologyIcon;
      case 'ShieldAlert': return ForensicScienceIcon;
      case 'Microscope': return LaboratoryResearchIcon;
      case 'Cpu': return BioinformaticsIcon;
      case 'PenTool': return ScientificCommunicationIcon;
      case 'Leaf': return BacterialDegradationIcon;
      default: return CancerResearchIcon;
    }
  };

  const getStanceBadge = (stance: string) => {
    switch (stance) {
      case 'Interested in':
        return 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30';
      case 'Exploring':
        return 'bg-[#00B8D4]/15 text-[#00B8D4] border-[#00B8D4]/30';
      case 'Exposure to':
        return 'bg-[#02101F] text-[#A9C4D8] border-[#00E5FF]/20';
      default:
        return 'bg-[#071E30] text-[#A9C4D8] border-[#00E5FF]/20';
    }
  };

  const filteredInterests = filter === 'ALL'
    ? RESEARCH_INTERESTS
    : RESEARCH_INTERESTS.filter(item => item.stance === filter);

  return (
    <section id="research" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <BiomedicalScienceIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
              <span>Scientific Curiosity & Directions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
              Research Interests
            </h2>
            <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
              Scientific focus areas with nuanced engagement levels — from fundamental inquiry to active wet-lab and computational exploration.
            </p>
          </div>

          {/* Stance Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#071E30] rounded-2xl border border-[#00E5FF]/30 shadow-xs">
            <FilterNodeIcon className="w-4 h-4 text-[#00E5FF] ml-2 mr-1 hidden sm:inline" />
            {['ALL', 'Interested in', 'Exploring', 'Exposure to'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  filter === tab
                    ? 'bg-[#00E5FF] text-[#031525] font-bold shadow-xs'
                    : 'text-[#A9C4D8] hover:text-[#F4FAFF] hover:bg-[#02101F]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredInterests.map((interest, idx) => {
            const Icon = getInterestIcon(interest.icon);

            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl p-5 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon & Stance Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#00E5FF]" color="#00E5FF" secondaryColor="#00B8D4" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${getStanceBadge(interest.stance)}`}>
                      {interest.stance}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-sm sm:text-base text-[#F4FAFF] mb-2 leading-snug group-hover:text-[#00E5FF] transition-colors">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#A9C4D8] leading-relaxed mb-4">
                    {interest.description}
                  </p>
                </div>

                {/* Subfields */}
                <div className="pt-3 border-t border-[#00E5FF]/20">
                  <div className="flex flex-wrap gap-1">
                    {interest.connectedFields.map((field) => (
                      <span
                        key={field}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#02101F] text-[#A9C4D8] border border-[#00E5FF]/20 font-medium"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

