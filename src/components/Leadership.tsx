import React from 'react';
import { motion } from 'framer-motion';
import { 
  ResearchCollaborationIcon,
  CheckCircleNodeIcon,
  ExternalLinkNodeIcon,
  LocationNodeIcon
} from './OriginalIcons';
import { LEADERSHIP_INFO } from '../data/portfolioData';

interface LeadershipProps {
  onOpenCertificateModal?: (certId: string) => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <ResearchCollaborationIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Civic Engagement & Athletics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Leadership & Community
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Demonstrated team leadership, disciplined athletic captaincy, and committed rural volunteer service.
          </p>
        </div>

        {/* Leadership Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP_INFO.map((item, idx) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl p-6 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#00E5FF]/20">
                  <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center">
                    <ResearchCollaborationIcon className="w-6 h-6" color="#00E5FF" secondaryColor="#00B8D4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                    {item.period}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-heading font-bold text-lg text-[#F4FAFF] leading-snug mb-2">
                  {item.role}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-1.5 text-xs text-[#A9C4D8] font-medium mb-3">
                  <LocationNodeIcon className="w-3.5 h-3.5 text-[#00B8D4] shrink-0" />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A9C4D8] leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block">
                    KEY SERVICE HIGHLIGHTS
                  </span>
                  {item.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#F4FAFF]">
                      <CheckCircleNodeIcon className="w-4 h-4 shrink-0 mt-0.5 text-[#00E5FF]" color="#00E5FF" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-3 border-t border-[#00E5FF]/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#A9C4D8] font-medium">
                  Verified Record
                </span>
                {item.role.includes('NSS') && (
                  <button
                    onClick={() => onOpenCertificateModal?.('cert-nss-camp')}
                    className="text-xs font-semibold text-[#00E5FF] hover:text-[#00B8D4] inline-flex items-center gap-1"
                  >
                    <span>View NSS Record</span>
                    <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
                  </button>
                )}
                {item.role.includes('Scouts') && (
                  <button
                    onClick={() => onOpenCertificateModal?.('cert-scouts')}
                    className="text-xs font-semibold text-[#00E5FF] hover:text-[#00B8D4] inline-flex items-center gap-1"
                  >
                    <span>View Pravesh Record</span>
                    <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
                  </button>
                )}
                {item.role.includes('BIDDS') && (
                  <button
                    onClick={() => onOpenCertificateModal?.('cert-bidds-life-member')}
                    className="text-xs font-semibold text-[#00E5FF] hover:text-[#00B8D4] inline-flex items-center gap-1"
                  >
                    <span>View Membership</span>
                    <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

