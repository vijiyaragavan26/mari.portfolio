import React from 'react';
import { motion } from 'framer-motion';
import { 
  ConferenceSpeakerIcon,
  LocationNodeIcon,
  ExternalLinkNodeIcon,
  ScientificCredentialIcon
} from './OriginalIcons';
import { CONFERENCES } from '../data/portfolioData';

interface ConferencesProps {
  onOpenCertificateModal?: (certId: string) => void;
}

export const Conferences: React.FC<ConferencesProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="conferences" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <ConferenceSpeakerIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Academic Community Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Scientific Conferences
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Active delegate participation across national & international symposia in biotechnology, microbiology, and modern laboratory sciences.
          </p>
        </div>

        {/* Chronological Conference Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFERENCES.map((conf, idx) => (
            <motion.div
              key={conf.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-3xl p-6 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Year & Code Banner */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#00E5FF]/20">
                  <span className="font-mono text-xs font-bold text-[#00E5FF] bg-[#02101F] px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                    {conf.code || conf.year}
                  </span>
                  <span className="text-[11px] font-mono text-[#A9C4D8] font-medium">
                    {conf.year}
                  </span>
                </div>

                {/* Conference Title */}
                <h3 className="font-heading font-bold text-base text-[#F4FAFF] leading-snug group-hover:text-[#00E5FF] transition-colors mb-2">
                  {conf.name}
                </h3>

                {/* Host Institution */}
                <div className="flex items-start gap-1.5 text-xs text-[#A9C4D8] font-medium mb-3">
                  <LocationNodeIcon className="w-3.5 h-3.5 text-[#00B8D4] shrink-0 mt-0.5" />
                  <span>{conf.institution}</span>
                </div>

                {/* Theme description */}
                <p className="text-xs text-[#A9C4D8] mb-4 line-clamp-3 leading-relaxed">
                  {conf.theme}
                </p>
              </div>

              {/* Bottom Metadata */}
              <div className="pt-3 border-t border-[#00E5FF]/20 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#A9C4D8]">
                  <span className="flex items-center gap-1 text-[#00E5FF]">
                    {conf.date}
                  </span>
                  {conf.location && (
                    <span className="truncate max-w-[120px] text-[#A9C4D8]/70">
                      {conf.location.split(',')[0]}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] font-mono font-bold text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-2 py-0.5 rounded-full">
                    {conf.participationType}
                  </span>
                  <button
                    onClick={() => {
                      const certMap: Record<string, string> = {
                        'conf-miccon': 'cert-miccon-2023',
                        'conf-icmrbh': 'cert-icmrbh-2024',
                        'conf-npbs': 'cert-npbs-2025',
                        'conf-advances-lab': 'cert-adv-lab-2026',
                      };
                      if (certMap[conf.id]) {
                        onOpenCertificateModal?.(certMap[conf.id]);
                      }
                    }}
                    className="text-[#A9C4D8] hover:text-[#00E5FF] transition-colors p-1"
                    title="View Certificate"
                  >
                    <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

