import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ScientificCredentialIcon,
  CheckCircleNodeIcon,
  ExternalLinkNodeIcon,
  CloseNodeIcon,
  ScientificDocumentDnaIcon
} from './OriginalIcons';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'scan' | 'summary'>('scan');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setZoomLevel(1);
      setViewMode('scan');
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 lg:p-8 overflow-y-auto">
        
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020B16]/90 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#031525] text-[#F4FAFF] rounded-3xl shadow-[0_0_50px_rgba(0,229,255,0.18)] border border-[rgba(0,229,255,0.3)] overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          {/* Modal Header Bar */}
          <div className="p-4 sm:p-5 border-b border-[#00E5FF]/20 flex items-center justify-between gap-4 bg-[#06243A]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF]">
                <ScientificCredentialIcon className="w-5 h-5" color="#00E5FF" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#F4FAFF] leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-xs font-mono text-[#A9C4D8]">
                  {certificate.institution} • {certificate.year}
                </p>
              </div>
            </div>

            {/* Header Control Buttons */}
            <div className="flex items-center gap-2">
              {/* Toggle Scan vs Summary if image is available */}
              {certificate.imageUrl && (
                <div className="hidden sm:inline-flex bg-[#02101F] p-0.5 rounded-xl text-xs font-mono border border-[#00E5FF]/20">
                  <button
                    onClick={() => setViewMode('scan')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      viewMode === 'scan' ? 'bg-[#00E5FF] text-[#031525] font-bold shadow-xs' : 'text-[#A9C4D8] hover:text-[#F4FAFF]'
                    }`}
                  >
                    Original Scan (300 DPI)
                  </button>
                  <button
                    onClick={() => setViewMode('summary')}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      viewMode === 'summary' ? 'bg-[#00E5FF] text-[#031525] font-bold shadow-xs' : 'text-[#A9C4D8] hover:text-[#F4FAFF]'
                    }`}
                  >
                    Digital Metadata
                  </button>
                </div>
              )}

              {viewMode === 'scan' && certificate.imageUrl && (
                <div className="hidden sm:inline-flex items-center gap-1 bg-[#02101F] p-1 rounded-xl border border-[#00E5FF]/20">
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-[#00E5FF] hover:bg-[#071E30] transition-colors"
                    title="Zoom In"
                  >
                    + Zoom
                  </button>
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-[#00E5FF] hover:bg-[#071E30] transition-colors"
                    title="Zoom Out"
                  >
                    - Zoom
                  </button>
                  {zoomLevel !== 1 && (
                    <button
                      onClick={() => setZoomLevel(1)}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono text-[#A9C4D8] hover:bg-[#071E30] transition-colors"
                      title="Reset Zoom"
                    >
                      Reset
                    </button>
                  )}
                </div>
              )}

              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="p-2 rounded-xl text-[#031525] bg-[#00E5FF] hover:bg-[#00B8D4] transition-colors inline-flex items-center gap-1.5 text-xs font-bold shadow-[0_0_10px_rgba(0,229,255,0.25)]"
                  title="Download Original PDF"
                >
                  <ScientificDocumentDnaIcon className="w-4 h-4" color="#031525" />
                  <span className="hidden md:inline">PDF</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#A9C4D8] hover:text-[#F4FAFF] hover:bg-[#071E30] transition-colors"
                aria-label="Close modal"
              >
                <CloseNodeIcon className="w-5 h-5 text-[#F4FAFF]" color="#F4FAFF" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-6 overflow-y-auto flex flex-col items-center justify-center bg-[#02101F] min-h-[400px]">
            
            {/* Show Real Scanned Certificate */}
            {viewMode === 'scan' && certificate.imageUrl ? (
              <div className="w-full flex flex-col items-center justify-center overflow-auto max-h-[70vh] py-2">
                <div 
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center top' }}
                  className="transition-transform duration-200 rounded-2xl overflow-hidden shadow-2xl border border-[#00E5FF]/30 bg-[#071E30] max-w-3xl"
                >
                  <img 
                    src={certificate.imageUrl} 
                    alt={certificate.title}
                    className="w-full h-auto object-contain max-h-[65vh]"
                  />
                </div>
              </div>
            ) : (
              /* Scientific Certificate Digital Document Representation */
              <div
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                className="w-full max-w-2xl bg-[rgba(7,30,48,0.85)] rounded-3xl p-6 sm:p-10 border border-[rgba(0,229,255,0.25)] shadow-xl transition-transform duration-200 relative overflow-hidden backdrop-blur-md"
              >
                {/* Certificate Header Emblem */}
                <div className="text-center space-y-2 mb-6">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#02101F] p-0.5 border border-[#00E5FF]/40 flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                    <ScientificCredentialIcon className="w-8 h-8" color="#00E5FF" secondaryColor="#00B8D4" />
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-widest text-[#00E5FF] uppercase block">
                    {certificate.documentType}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#F4FAFF] tracking-tight">
                    {certificate.institution}
                  </h2>
                </div>

                {/* Certificate Core Statement */}
                <div className="text-center space-y-4 my-6">
                  <p className="text-xs sm:text-sm text-[#A9C4D8] italic">
                    This document officially records the academic/research participation and contribution of
                  </p>
                  <div className="py-2 border-b-2 border-[#00E5FF]/50 inline-block px-8">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#F4FAFF] tracking-wide">
                      MARIYAPPAN V
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#F4FAFF] max-w-lg mx-auto leading-relaxed pt-2">
                    for active participation and completion of: <br />
                    <span className="text-[#00E5FF] font-bold text-base sm:text-lg">
                      "{certificate.title}"
                    </span>
                  </p>
                  <p className="text-xs text-[#A9C4D8] max-w-md mx-auto leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Certificate Metadata & Stamps Footer */}
                <div className="mt-8 pt-6 border-t border-[#00E5FF]/20 grid grid-cols-2 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[#A9C4D8] block text-[10px]">RECORD DURATION / DATE</span>
                    <span className="font-semibold text-[#F4FAFF]">
                      {certificate.dateStr || certificate.year}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#A9C4D8] block text-[10px]">VERIFICATION STATUS</span>
                    <span className="font-semibold text-[#00E5FF] inline-flex items-center gap-1">
                      <CheckCircleNodeIcon className="w-3.5 h-3.5" color="#00E5FF" />
                      Verified Portfolio Record
                    </span>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* Modal Footer Bar */}
          <div className="p-4 sm:p-5 border-t border-[#00E5FF]/20 bg-[#06243A] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#A9C4D8]">
                Categories:
              </span>
              <div className="flex flex-wrap gap-1">
                {certificate.category.map(cat => (
                  <span key={cat} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#02101F] text-[#00E5FF] font-medium border border-[#00E5FF]/20">
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {certificate.pdfUrl && (
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#071E30] text-[#00E5FF] border border-[#00E5FF]/30 font-semibold text-xs transition-colors hover:bg-[#02101F] inline-flex items-center gap-1.5"
                >
                  <ExternalLinkNodeIcon className="w-3.5 h-3.5" />
                  <span>Open PDF in New Tab</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#00E5FF] text-[#031525] font-bold text-xs transition-colors hover:bg-[#00B8D4] shadow-[0_0_15px_rgba(0,229,255,0.2)]"
              >
                Close Viewer
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};

