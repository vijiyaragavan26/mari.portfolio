import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MolecularNodeIcon, 
  BiomedicalScienceIcon, 
  BiotechnologyIcon 
} from './OriginalIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const AcademicTimeline: React.FC = () => {
  const { timeline } = usePortfolio();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(timeline.length - 1);

  const getInstitutionLogo = (inst: string) => {
    if (inst.toLowerCase().includes('alagappa')) return '/assets/logos/alagappa_university_logo.png';
    if (inst.toLowerCase().includes('rangasamy') || inst.toLowerCase().includes('ksr')) return '/assets/logos/ksrcas_logo.png';
    if (inst.toLowerCase().includes('madras') || inst.toLowerCase().includes('iit')) return '/assets/logos/iit_madras_logo.png';
    return null;
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 overflow-hidden text-[#F4FAFF]">
      {/* Subtle molecular background curve */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <MolecularNodeIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Academic Progression (2020 – 2027)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Academic Pathway
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            A verified chronological progression from secondary science foundations to undergraduate biotechnology and postgraduate biomedical research.
          </p>
        </div>

        {/* Vertical Molecular Timeline Tree */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical central connector line */}
          <div className="absolute top-4 bottom-4 left-4 sm:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#00E5FF] via-[#00B8D4] to-[#00E5FF] opacity-30 hidden sm:block" />
          <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-gradient-to-b from-[#00E5FF] to-[#00B8D4] opacity-30 sm:hidden" />

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              const isEven = idx % 2 === 0;
              const logoUrl = getInstitutionLogo(item.institution);

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Molecular Connection Point Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#031525] border-2 border-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.4)] flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#071E30] border border-[#00E5FF] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] pl-14 sm:pl-0 ${isEven ? 'sm:pr-0' : 'sm:pl-0'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className={`rounded-3xl p-6 transition-all border backdrop-blur-md ${
                        isExpanded
                          ? 'bg-[rgba(7,30,48,0.9)] border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.18)]'
                          : 'bg-[rgba(7,30,48,0.75)] border-[rgba(0,229,255,0.25)] hover:border-[#00E5FF]/60 shadow-md'
                      }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          {logoUrl && (
                            <div className="w-8 h-8 rounded-lg bg-[#02101F] border border-[#00E5FF]/30 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                              <img src={logoUrl} alt={item.institution} className="w-full h-full object-contain" />
                            </div>
                          )}
                          <span className="font-mono text-xs font-bold text-[#00E5FF] bg-[#071E30] px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                            {item.year}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                          {item.scoreOrStatus}
                        </span>
                      </div>

                      {/* Title & Institution */}
                      <h3 className="font-heading font-bold text-lg text-[#F4FAFF] leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#A9C4D8] font-medium mt-1 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                        <span>{item.institution}</span>
                      </div>

                      {/* Brief description */}
                      <p className="text-xs sm:text-sm text-[#A9C4D8] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Expandable Details Toggle */}
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00E5FF] hover:text-[#00B8D4] transition-colors focus:outline-none"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'Expand Key Highlights'}</span>
                        <span className="text-xs font-mono">{isExpanded ? '▲' : '▼'}</span>
                      </button>

                      {/* Expandable Panel */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pt-4 mt-4 border-t border-[#00E5FF]/20 space-y-2"
                          >
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block">
                              KEY ACADEMIC HIGHLIGHTS
                            </span>
                            {item.keyHighlights.map((hl, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F4FAFF]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 mt-1.5" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
