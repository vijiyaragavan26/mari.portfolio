import React from 'react';
import { motion } from 'framer-motion';
import { 
  BiomedicalScienceIcon,
  LocationNodeIcon,
  ExternalLinkNodeIcon
} from './OriginalIcons';
import { WORKSHOPS } from '../data/portfolioData';

interface WorkshopsProps {
  onOpenCertificateModal?: (certId: string) => void;
}

export const Workshops: React.FC<WorkshopsProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="training" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BiomedicalScienceIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Structured Modules & Value-Added Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Biomedical Learning & Training
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Formal seminars, hands-on workshops, and specialized value-added certificate courses in biomedical sciences.
          </p>
        </div>

        {/* Learning Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOPS.map((ws, idx) => (
            <motion.div
              key={ws.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl p-6 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Module Number & Type Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#00E5FF]/20">
                  <span className="font-mono text-xs font-bold text-[#00E5FF] bg-[#02101F] px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                    MODULE 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-[#00E5FF] font-semibold">
                    {ws.moduleType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#F4FAFF] leading-snug mb-2">
                  {ws.title}
                </h3>

                {/* Institution & Date */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#A9C4D8] font-medium">
                    <LocationNodeIcon className="w-3.5 h-3.5 text-[#00B8D4] shrink-0" />
                    <span>{ws.institution}</span>
                  </div>
                  <div className="text-xs text-[#00E5FF] font-mono">
                    <span>{ws.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#A9C4D8] leading-relaxed mb-4">
                  {ws.description}
                </p>

                {/* Core Competencies */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block">
                    KEY COMPETENCIES COVERED
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ws.competencies.map((comp, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#02101F] text-[#A9C4D8] border border-[#00E5FF]/20 font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-[#00E5FF]/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A9C4D8]">
                  Documented Attendance
                </span>
                <button
                  onClick={() => {
                    const certMap: Record<string, string> = {
                      'ws-cancer-therapy': 'cert-cancer-therapy',
                      'ws-cancer-prev': 'cert-cancer-prev',
                      'ws-adv-lab': 'cert-adv-lab-2026',
                      'ws-sci-comm': 'cert-medical-writing',
                    };
                    if (certMap[ws.id]) {
                      onOpenCertificateModal?.(certMap[ws.id]);
                    }
                  }}
                  className="text-xs font-semibold text-[#00E5FF] hover:text-[#00B8D4] inline-flex items-center gap-1"
                >
                  <span>Verify</span>
                  <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

