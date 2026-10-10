import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BacterialDegradationIcon,
  ForensicScienceIcon,
  DrugDiscoveryIcon,
  BiotechnologyIcon,
  CheckCircleNodeIcon
} from './OriginalIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const Projects: React.FC = () => {
  const { projects } = usePortfolio();
  const [activeProject, setActiveProject] = useState<string>(projects[0]?.id || '');

  const getProjectIcon = (area: string) => {
    switch (area) {
      case 'Microbiology':
        return BacterialDegradationIcon;
      case 'Biochemical Analysis':
        return ForensicScienceIcon;
      case 'Drug Discovery':
        return DrugDiscoveryIcon;
      default:
        return BiotechnologyIcon;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BiotechnologyIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Applied Investigations & Mini Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Research Projects
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Academic investigations spanning microbial biodegradation, forensic biochemical methods, and pharmacology screening.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((proj, idx) => {
            const Icon = getProjectIcon(proj.area);
            const isSelected = activeProject === proj.id;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setActiveProject(proj.id)}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all cursor-pointer border backdrop-blur-md ${
                  isSelected
                    ? 'bg-[rgba(7,30,48,0.95)] border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.2)]'
                    : 'bg-[rgba(7,30,48,0.75)] border-[rgba(0,229,255,0.25)] hover:border-[#00E5FF]/60 shadow-md'
                }`}
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#00E5FF]" color="#00E5FF" secondaryColor="#00B8D4" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                      {proj.projectType}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading font-bold text-lg text-[#F4FAFF] leading-snug mb-2">
                    {proj.title}
                  </h3>

                  <span className="inline-block text-xs font-mono font-semibold text-[#00E5FF] mb-3">
                    {proj.category}
                  </span>

                  {/* Description */}
                  <p className="text-[#A9C4D8] text-xs sm:text-sm leading-relaxed mb-5">
                    {proj.description}
                  </p>

                  {/* Visual Concept Flow Pipeline */}
                  <div className="p-3.5 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 mb-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block mb-1">
                      CONCEPTUAL PIPELINE
                    </span>
                    <p className="text-xs font-medium text-[#F4FAFF]">
                      {proj.visualConcept}
                    </p>
                  </div>

                  {/* Key Methodology Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block">
                      KEY METHODOLOGICAL FOCUS
                    </span>
                    {proj.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F4FAFF]">
                        <CheckCircleNodeIcon className="w-4 h-4 shrink-0 mt-0.5" color="#00E5FF" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="pt-4 border-t border-[#00E5FF]/20">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.scientificTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#02101F] text-[#A9C4D8] font-medium border border-[#00E5FF]/20"
                      >
                        #{tag}
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

