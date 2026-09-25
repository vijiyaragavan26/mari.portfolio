import React from 'react';
import { motion } from 'framer-motion';
import { 
  PosterPresentationIcon,
  ConferenceSpeakerIcon,
  CheckCircleNodeIcon,
  ExternalLinkNodeIcon,
  LocationNodeIcon,
  ScientificCredentialIcon
} from './OriginalIcons';
import { PRESENTATIONS } from '../data/portfolioData';

interface PresentationsProps {
  onOpenCertificateModal?: (certId: string) => void;
}

export const Presentations: React.FC<PresentationsProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="publications" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <PosterPresentationIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Scientific Presentations & Poster Sessions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Research Presentations
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Oral & poster presentations delivered at university international seminars and DST-SERB sponsored conferences.
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Poster Presentation Card (Periyar University) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#00E5FF]/20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-mono text-xs font-bold border border-[#00E5FF]/30">
                  <PosterPresentationIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
                  FEATURED POSTER PRESENTATION
                </span>
                <span className="text-xs font-mono text-[#A9C4D8] font-medium">
                  {PRESENTATIONS[0].date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F4FAFF] leading-tight mb-2">
                "{PRESENTATIONS[0].title}"
              </h3>

              {/* Event & Institution */}
              <div className="space-y-1 mb-4">
                <p className="text-xs sm:text-sm font-semibold text-[#00E5FF]">
                  {PRESENTATIONS[0].event}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#A9C4D8]">
                  <LocationNodeIcon className="w-3.5 h-3.5 text-[#00B8D4]" />
                  <span>{PRESENTATIONS[0].institution}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#A9C4D8] text-sm leading-relaxed mb-6">
                {PRESENTATIONS[0].description}
              </p>

              {/* Key Presentation Points */}
              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block">
                  PRESENTATION KEYWORDS & TOPICS
                </span>
                {PRESENTATIONS[0].keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#F4FAFF]">
                    <CheckCircleNodeIcon className="w-4 h-4 shrink-0 mt-0.5" color="#00E5FF" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#00E5FF]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {PRESENTATIONS[0].tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#02101F] text-[#00E5FF] font-medium border border-[#00E5FF]/20">
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenCertificateModal?.('cert-periyar-poster')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#031525] hover:bg-[#00B8D4] px-3.5 py-1.5 rounded-lg bg-[#00E5FF] font-bold transition-all shadow-[0_0_12px_rgba(0,229,255,0.2)]"
              >
                <span>View Certificate</span>
                <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Second Presentation: DST-SERB Sponsored International Conference */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Ribbon */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#00E5FF]/20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] font-mono text-xs font-bold border border-[#00E5FF]/30">
                  <ConferenceSpeakerIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
                  DST-SERB INTERNATIONAL CONF
                </span>
                <span className="text-xs font-mono text-[#A9C4D8] font-medium">
                  {PRESENTATIONS[1].date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-heading font-bold text-[#F4FAFF] leading-tight mb-2">
                "{PRESENTATIONS[1].title}"
              </h3>

              {/* Event & Sponsor */}
              <div className="space-y-1 mb-4">
                <p className="text-xs font-semibold text-[#00E5FF]">
                  {PRESENTATIONS[1].event}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#A9C4D8]">
                  <ScientificCredentialIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
                  <span>Sponsored by DST-SERB</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#A9C4D8] text-xs sm:text-sm leading-relaxed mb-6">
                {PRESENTATIONS[1].description}
              </p>

              {/* Key Points */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00E5FF] font-semibold block">
                  FOCUS TOPICS
                </span>
                {PRESENTATIONS[1].keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#F4FAFF]">
                    <CheckCircleNodeIcon className="w-4 h-4 shrink-0 mt-0.5" color="#00E5FF" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#00E5FF]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {PRESENTATIONS[1].tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#02101F] text-[#00E5FF] font-medium border border-[#00E5FF]/20">
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => onOpenCertificateModal?.('cert-dst-serb')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#031525] hover:bg-[#00B8D4] px-3.5 py-1.5 rounded-lg bg-[#00E5FF] font-bold transition-all shadow-[0_0_12px_rgba(0,229,255,0.2)]"
              >
                <span>View Certificate</span>
                <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

