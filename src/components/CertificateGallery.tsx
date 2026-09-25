import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ScientificCredentialIcon,
  CheckCircleNodeIcon,
  ExternalLinkNodeIcon,
  FilterNodeIcon
} from './OriginalIcons';
import { CERTIFICATES } from '../data/portfolioData';
import { CertificateCategory } from '../types';

const CATEGORIES: CertificateCategory[] = [
  'ALL',
  'RESEARCH',
  'BIOMEDICAL',
  'CONFERENCES',
  'TRAINING',
  'LEADERSHIP',
  'SOCIAL SERVICE'
];

interface CertificateGalleryProps {
  onSelectCertificate: (certId: string) => void;
}

export const CertificateGallery: React.FC<CertificateGalleryProps> = ({ onSelectCertificate }) => {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCertificates = CERTIFICATES.filter((cert) => {
    const matchesCategory = selectedCategory === 'ALL' || cert.category.includes(selectedCategory);
    const matchesQuery = searchQuery === '' || 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.year.includes(searchQuery);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="certificates" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      {/* Background Molecular Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <ScientificCredentialIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Documented Academic Proof & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Certificate Gallery
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Authentic certificates validating fellowship tenure at IIT Madras, conference presentations, technical symposia, value-added coursework, and community leadership.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#071E30] rounded-2xl border border-[#00E5FF]/30 shadow-xs">
            <FilterNodeIcon className="w-4 h-4 text-[#00E5FF] ml-2 mr-1 hidden sm:inline" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00E5FF] text-[#031525] shadow-xs font-bold'
                    : 'text-[#A9C4D8] hover:text-[#F4FAFF] hover:bg-[#02101F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Box */}
          <div className="relative w-full lg:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates..."
              className="w-full px-4 py-2.5 rounded-xl text-xs bg-[#02101F] border border-[#00E5FF]/30 focus:outline-none focus:ring-2 focus:ring-[#00E5FF] text-[#F4FAFF] placeholder-[#A9C4D8]/60 shadow-xs"
            />
          </div>

        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-[#00E5FF]/20">
                    <span className="font-mono text-xs font-bold text-[#00E5FF] bg-[#02101F] px-2.5 py-0.5 rounded-full border border-[#00E5FF]/30">
                      {cert.year}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 flex items-center gap-1">
                      <CheckCircleNodeIcon className="w-3 h-3" color="#00E5FF" />
                      {cert.verificationBadge || 'Verified'}
                    </span>
                  </div>

                  {/* Certificate Thumbnail Preview */}
                  {cert.imageUrl && (
                    <div 
                      onClick={() => onSelectCertificate(cert.id)}
                      className="mb-4 rounded-2xl overflow-hidden border border-[#00E5FF]/20 bg-[#02101F] relative aspect-[16/10] cursor-pointer group/thumb"
                    >
                      <img 
                        src={cert.imageUrl} 
                        alt={cert.title} 
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#02101F]/40 group-hover/thumb:bg-[#02101F]/70 transition-all flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 backdrop-blur-[1px]">
                        <span className="px-3.5 py-1.5 rounded-xl bg-[#00E5FF] text-[#031525] font-mono text-xs font-bold shadow-lg inline-flex items-center gap-1.5">
                          <ScientificCredentialIcon className="w-3.5 h-3.5 text-[#031525]" color="#031525" />
                          Inspect High-Res
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Document Type */}
                  <span className="text-[11px] font-mono text-[#00E5FF] uppercase tracking-wider font-semibold block mb-1">
                    {cert.documentType}
                  </span>

                  {/* Certificate Title */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#F4FAFF] leading-snug group-hover:text-[#00E5FF] transition-colors mb-2">
                    {cert.title}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-start gap-1.5 text-xs text-[#A9C4D8] font-medium mb-3">
                    <span>{cert.institution}</span>
                  </div>

                  {/* Description preview */}
                  <p className="text-xs text-[#A9C4D8] leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-[#00E5FF]/20 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cert.category.slice(0, 2).map((c) => (
                      <span
                        key={c}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#02101F] text-[#A9C4D8] font-medium border border-[#00E5FF]/20"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectCertificate(cert.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#031525] hover:bg-[#00B8D4] bg-[#00E5FF] px-3 py-1.5 rounded-xl transition-all hover:scale-105 shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                  >
                    <span>View Certificate</span>
                    <ExternalLinkNodeIcon className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

