import React from 'react';
import { motion } from 'framer-motion';
import { 
  ScientificCommunicationIcon, 
  CheckCircleNodeIcon, 
  ExternalLinkNodeIcon
} from './OriginalIcons';

interface ScientificWritingProps {
  onOpenCertificateModal?: (certId: string) => void;
}

export const ScientificWriting: React.FC<ScientificWritingProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="scientific-communication" className="py-20 lg:py-28 bg-[#02101F] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <ScientificCommunicationIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Dedicated Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Scientific Communication & Medical Writing
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Formal postgraduate value-added training translating laboratory findings into clear, rigorous, and ethically documented scientific manuscripts.
          </p>
        </div>

        {/* Highlight Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Manuscript Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[rgba(7,30,48,0.85)] text-[#F4FAFF] border border-[rgba(0,229,255,0.25)] shadow-[0_0_25px_rgba(0,229,255,0.12)] relative overflow-hidden backdrop-blur-md"
          >
            {/* Simulated Manuscript Editor Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#00E5FF]/20 text-xs font-mono text-[#A9C4D8]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF]" />
                <span className="ml-2 text-[#F4FAFF] font-semibold">manuscript_draft_final.tex</span>
              </div>
              <span className="text-[#00E5FF] text-[11px] font-bold">VALUE_ADDED_COURSE</span>
            </div>

            {/* Manuscript simulated text blocks */}
            <div className="space-y-4 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20">
                <span className="text-[#00E5FF] font-bold block mb-1">
                  \section&#123;Structured Abstract & Methodology&#125;
                </span>
                <p className="text-[#A9C4D8] text-[11px] font-sans leading-relaxed">
                  "Clear framing of research objectives, sample preparation protocols, statistical validation, and reproducible methodology across biomedical domains."
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20">
                <span className="text-[#00B8D4] font-bold block mb-1">
                  \section&#123;Ethical Compliance & Citation Integrity&#125;
                </span>
                <p className="text-[#A9C4D8] text-[11px] font-sans leading-relaxed">
                  "Adherence to publication ethics, ICMJE standards, conflict-of-interest disclosures, and standardized citation management."
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 flex items-center justify-between">
                <div>
                  <span className="text-[#F4FAFF] font-bold block mb-0.5">
                    \status&#123;Course Completed&#125;
                  </span>
                  <span className="text-[#A9C4D8] text-[11px]">Alagappa University • Jan–Mar 2026</span>
                </div>
                <button
                  onClick={() => onOpenCertificateModal?.('cert-medical-writing')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#00E5FF] text-[#031525] font-bold text-[11px] hover:bg-[#00B8D4] transition-colors inline-flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                >
                  <span>Verify</span>
                  <ExternalLinkNodeIcon className="w-3 h-3" />
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right: Key Value-Added Course Competencies */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider block mb-1">
                VALUE ADDED CERTIFICATE COURSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#F4FAFF] leading-tight">
                Medical Writing & Scientific Communication
              </h3>
              <p className="text-sm font-semibold text-[#A9C4D8] mt-1">
                Alagappa University • Department of Biomedical Science (January – March 2026)
              </p>
            </div>

            <p className="text-[#A9C4D8] text-sm sm:text-base leading-relaxed">
              Equipped with systematic training in medical and academic writing, translating complex biological data into clear scientific papers, conference abstracts, executive briefs, and regulatory summaries.
            </p>

            {/* Competency Bullets */}
            <div className="space-y-3">
              {[
                { title: "Manuscript Structure & IMRAD Format", desc: "Structuring Introduction, Methods, Results, and Discussion for high scientific readability." },
                { title: "Poster & Slide Presentation Layout", desc: "Visual hierarchy and effective communication of data at scientific symposia." },
                { title: "Literature Synthesis & Critical Appraisal", desc: "Systematic review methodologies and objective evaluation of published research." },
                { title: "Publication Ethics & Citation Standards", desc: "Plagiarism prevention, attribution rigor, and scientific authorship protocols." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.01 }}
                  className="p-3.5 rounded-2xl bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.2)] hover:border-[#00E5FF]/50 flex items-start gap-3 shadow-2xs transition-colors"
                >
                  <CheckCircleNodeIcon className="w-4 h-4 shrink-0 mt-1 text-[#00E5FF]" color="#00E5FF" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#F4FAFF]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#A9C4D8] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

