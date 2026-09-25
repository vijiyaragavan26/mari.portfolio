import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Award, 
  FlaskConical, 
  FileText, 
  Building2, 
  CheckCircle2,
  Linkedin
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, PRESENTATIONS, CONFERENCES, WORKSHOPS, SKILL_CATEGORIES, LEADERSHIP_INFO, TIMELINE } from '../data/portfolioData';

interface AcademicCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicCVModal: React.FC<AcademicCVModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'original' | 'formatted'>('original');
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setZoomLevel(1);
      setViewMode('original');
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-2 sm:p-4 lg:p-6 overflow-y-auto print:p-0">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020B16]/90 backdrop-blur-md transition-opacity print:hidden"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-5xl bg-[#031525] text-[#F4FAFF] rounded-3xl shadow-[0_0_50px_rgba(0,229,255,0.2)] border border-[rgba(0,229,255,0.3)] overflow-hidden z-10 flex flex-col max-h-[94vh] print:max-h-none print:shadow-none print:border-none print:rounded-none print:bg-white print:text-slate-900"
        >
          {/* Action Bar (Hidden on Print) */}
          <div className="p-4 sm:p-5 border-b border-[#00E5FF]/20 bg-[#06243A] flex flex-wrap items-center justify-between gap-4 print:hidden">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#02101F] text-[#00E5FF] border border-[#00E5FF]/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base text-[#F4FAFF] leading-tight">
                  Academic Curriculum Vitae
                </h3>
                <p className="text-xs font-mono text-[#A9C4D8]">
                  Mariyappan V • M.Sc. Biomedical Science
                </p>
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2">
              <div className="bg-[#02101F] p-0.5 rounded-xl text-xs font-mono inline-flex border border-[#00E5FF]/20">
                <button
                  onClick={() => setViewMode('original')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewMode === 'original' ? 'bg-[#00E5FF] text-[#031525] font-bold shadow-xs' : 'text-[#A9C4D8] hover:text-[#F4FAFF]'
                  }`}
                >
                  Original Document Scan
                </button>
                <button
                  onClick={() => setViewMode('formatted')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    viewMode === 'formatted' ? 'bg-[#00E5FF] text-[#031525] font-bold shadow-xs' : 'text-[#A9C4D8] hover:text-[#F4FAFF]'
                  }`}
                >
                  Interactive Formatted CV
                </button>
              </div>

              {viewMode === 'original' && (
                <div className="hidden sm:flex items-center gap-1 bg-[#02101F] p-1 rounded-xl border border-[#00E5FF]/20">
                  <button
                    onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2.0))}
                    className="p-2 rounded-xl text-[#00E5FF] hover:bg-[#071E30] transition-colors"
                    title="Zoom In"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.7))}
                    className="p-2 rounded-xl text-[#00E5FF] hover:bg-[#071E30] transition-colors"
                    title="Zoom Out"
                  >
                    -
                  </button>
                  {zoomLevel !== 1 && (
                    <button
                      onClick={() => setZoomLevel(1)}
                      className="px-2 py-1 rounded-lg text-xs font-mono text-[#A9C4D8] hover:bg-[#071E30]"
                    >
                      Reset
                    </button>
                  )}
                </div>
              )}

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Mariyappan_V_Resume.pdf"
                className="px-3.5 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                title="Download Official PDF Resume"
              >
                <Download className="w-4 h-4 text-[#031525]" />
                <span className="hidden md:inline">Download Original PDF</span>
                <span className="md:hidden">PDF</span>
              </a>

              <button
                onClick={handlePrint}
                className="px-3 py-2 rounded-xl bg-[#071E30] text-[#00E5FF] border border-[#00E5FF]/30 hover:bg-[#02101F] text-xs font-semibold hidden sm:flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-[#A9C4D8] hover:text-[#F4FAFF] hover:bg-[#071E30] transition-colors"
                aria-label="Close CV"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body Container */}
          <div className="overflow-y-auto max-h-[80vh] bg-[#02101F] print:bg-white">
            {viewMode === 'original' ? (
              /* Original Scanned CV Pages Viewer */
              <div className="p-4 sm:p-8 flex flex-col items-center gap-8">
                <div 
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }} 
                  className="space-y-8 max-w-3xl w-full transition-transform duration-200"
                >
                  {/* Page 1 */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                    <div className="p-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>PAGE 1 OF 2</span>
                      <span>Mariyappan V — Academic Resume</span>
                    </div>
                    <img 
                      src="/assets/resume/mariyappan_resume_p1.png" 
                      alt="Mariyappan V Resume - Page 1" 
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Page 2 */}
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-300">
                    <div className="p-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>PAGE 2 OF 2</span>
                      <span>Mariyappan V — Academic Resume</span>
                    </div>
                    <img 
                      src="/assets/resume/mariyappan_resume_p2.png" 
                      alt="Mariyappan V Resume - Page 2" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ) : (
              /* Printable Formatted CV Body */
              <div className="p-6 sm:p-10 bg-white font-sans text-slate-800 space-y-6 text-sm leading-relaxed print:p-0 print:overflow-visible">
            
            {/* CV Header */}
            <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-sky-800 mt-0.5">
                  {PERSONAL_INFO.primaryTitle}
                </p>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-600 mt-3">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-sky-600" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-teal-600" />
                    {PERSONAL_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <span className="text-[11px] font-mono">WA:</span>
                    {PERSONAL_INFO.whatsapp}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-600" />
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
                    LinkedIn: in/mariyappan-v
                  </span>
                </div>
              </div>

              {/* Photo Thumbnail */}
              <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 border-slate-300 shrink-0 shadow-sm bg-slate-50">
                <img 
                  src="/assets/profile/mariyappan.jpg" 
                  alt="Mariyappan V" 
                  className="w-full h-full object-cover object-[50%_18%] scale-[1.28]"
                />
              </div>
            </div>

            {/* Academic Profile Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                ACADEMIC PROFILE & RESEARCH FOCUS
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {PERSONAL_INFO.summary} M.Sc. Biomedical Science student at Alagappa University — Karaikudi (Tamil Nadu) with foundational training in Biotechnology from K.S. Rangasamy College of Arts and Science (Autonomous) — Tiruchengode (Tamil Nadu). Completed the Summer Fellowship Programme 2026 at IIT Madras in the Department of Biotechnology focused on malaria parasite epigenetic protein methodology.
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                EDUCATION
              </h2>
              <div className="space-y-3">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600">
                        {item.institution}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-mono text-xs font-semibold text-slate-800 block">
                        {item.year}
                      </span>
                      <span className="text-[11px] font-mono text-sky-800">
                        {item.scoreOrStatus}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                RESEARCH EXPERIENCE & FELLOWSHIPS
              </h2>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                      Indian Institute of Technology Madras (IIT Madras)
                    </h3>
                    <p className="text-xs font-medium text-sky-700">
                      Summer Fellowship Programme 2026 • Department of Biotechnology
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-600">
                    18 May 2026 – 17 July 2026
                  </span>
                </div>
                <p className="text-xs text-slate-700">
                  <strong>Project Topic:</strong> "Studies on Malaria Parasite Epigenetic Proteins: A Methodological Approach" (Faculty Mentorship: Arumugam)
                </p>
                <p className="text-xs text-slate-600">
                  Engaged in methodological frameworks for epigenetic regulation and target protein analysis in Plasmodium parasites.
                </p>
              </div>
            </div>

            {/* Research Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-3">
                ACADEMIC PROJECTS
              </h2>
              <div className="space-y-2.5">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <span className="font-bold text-slate-900">{proj.title}</span> — <span className="italic text-slate-600">{proj.category}</span> ({proj.projectType})
                    <p className="text-slate-600 mt-0.5">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Presentations & Conferences */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  PRESENTATIONS
                </h2>
                <div className="space-y-2 text-xs">
                  {PRESENTATIONS.map(p => (
                    <div key={p.id}>
                      <span className="font-bold text-slate-900">"{p.title}"</span> ({p.type})
                      <p className="text-slate-600 text-[11px]">{p.event} • {p.institution} ({p.date})</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                  CONFERENCES & SYMPOSIA
                </h2>
                <div className="space-y-2 text-xs">
                  {CONFERENCES.map(c => (
                    <div key={c.id}>
                      <span className="font-bold text-slate-900">{c.name}</span>
                      <p className="text-slate-600 text-[11px]">{c.institution} • {c.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Training & Value-Added Courses */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                VALUE-ADDED COURSES & WORKSHOPS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {WORKSHOPS.map(w => (
                  <div key={w.id} className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-900 block">{w.title}</span>
                    <span className="text-[11px] text-slate-600">{w.institution} ({w.date})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Competencies */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                TECHNICAL & LABORATORY COMPETENCIES
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map(cat => (
                  <div key={cat.categoryName}>
                    <span className="font-bold text-slate-900 block mb-1">{cat.categoryName}:</span>
                    <p className="text-slate-600 text-[11px]">
                      {cat.skills.map(s => s.name).join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Social Service */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-2">
                LEADERSHIP, SPORTS & SOCIAL SERVICE
              </h2>
              <div className="space-y-1.5 text-xs">
                {LEADERSHIP_INFO.map((item, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-slate-900">{item.role}</span> — <span>{item.institution} ({item.period})</span>
                    <p className="text-[11px] text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
          )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500 print:hidden">
            <span>Verified Academic Document • Mariyappan V</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
