import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { AcademicTimeline } from './components/AcademicTimeline';
import { ResearchExperience } from './components/ResearchExperience';
import { Projects } from './components/Projects';
import { Presentations } from './components/Presentations';
import { Conferences } from './components/Conferences';
import { Workshops } from './components/Workshops';
import { ScientificWriting } from './components/ScientificWriting';
import { Skills } from './components/Skills';
import { ResearchInterests } from './components/ResearchInterests';
import { VisualResearchLab } from './components/VisualResearchLab';
import { Leadership } from './components/Leadership';
import { Sustainability } from './components/Sustainability';
import { CertificateGallery } from './components/CertificateGallery';
import { CertificateModal } from './components/CertificateModal';
import { AcademicCVModal } from './components/AcademicCVModal';
import { CareerDirection } from './components/CareerDirection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CERTIFICATES } from './data/portfolioData';
import { CertificateItem } from './types';

export const App: React.FC = () => {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [isCVOpen, setIsCVOpen] = useState<boolean>(false);

  useEffect(() => {
    // Dark futuristic biomedical laboratory theme
    document.documentElement.classList.add('dark');
  }, []);

  const selectedCertificate: CertificateItem | null = selectedCertId
    ? CERTIFICATES.find(c => c.id === selectedCertId) || null
    : null;

  const handleOpenCertificate = (certId: string) => {
    setSelectedCertId(certId);
  };

  const handleCloseCertificate = () => {
    setSelectedCertId(null);
  };

  return (
    <div className="min-h-screen bg-[#020B16] text-[#FFFFFF] transition-colors duration-300 relative selection:bg-[#00E5FF]/30 selection:text-[#00E5FF] overflow-x-hidden">
      
      {/* Global Atmospheric Dark Luxury Lighting & DNA Connection Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top radial ambient glow */}
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#00E5FF]/[0.07] via-[#06243A]/[0.04] to-transparent rounded-full blur-3xl" />
        
        {/* Floating lateral subtle glows */}
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#00E5FF]/[0.035] rounded-full blur-3xl" />
        <div className="absolute top-2/3 -right-48 w-[700px] h-[700px] bg-[#00B8D4]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[800px] h-[500px] bg-[#031525]/[0.4] rounded-full blur-3xl" />
        
        {/* Subtle DNA & Scientific Lattice Lines (Ultra-restrained opacity) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dna-grid-lines" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0 60 Q 30 0, 60 60 T 120 60" fill="none" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M 0 60 Q 30 120, 60 60 T 120 60" fill="none" stroke="#00B8D4" strokeWidth="1" strokeDasharray="2 4" />
              <line x1="30" y1="30" x2="30" y2="90" stroke="#00E5FF" strokeWidth="0.75" />
              <line x1="90" y1="30" x2="90" y2="90" stroke="#00E5FF" strokeWidth="0.75" />
              <circle cx="30" cy="30" r="2" fill="#00E5FF" />
              <circle cx="30" cy="90" r="2" fill="#00E5FF" />
              <circle cx="90" cy="30" r="2" fill="#00B8D4" />
              <circle cx="90" cy="90" r="2" fill="#00B8D4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dna-grid-lines)" />
        </svg>
      </div>

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="relative z-10">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Academic Journey & Timeline */}
        <AcademicTimeline />

        {/* 4. Research Experience (IIT Madras Fellowship Showcase) */}
        <ResearchExperience onOpenCertificateModal={handleOpenCertificate} />

        {/* 5. Applied Research Projects */}
        <Projects />

        {/* 6. Scientific Presentations (Periyar Univ Poster & DST-SERB) */}
        <Presentations onOpenCertificateModal={handleOpenCertificate} />

        {/* 7. Scientific Conferences Wall */}
        <Conferences onOpenCertificateModal={handleOpenCertificate} />

        {/* 8. Biomedical Learning & Training Modules */}
        <Workshops onOpenCertificateModal={handleOpenCertificate} />

        {/* 9. Scientific Communication & Medical Writing Specialization */}
        <ScientificWriting onOpenCertificateModal={handleOpenCertificate} />

        {/* 10. Categorized Skills Taxonomy */}
        <Skills />

        {/* 11. Nuanced Research Interests */}
        <ResearchInterests />

        {/* 12. Interactive Visual Research Lab */}
        <VisualResearchLab />

        {/* 13. Leadership & Community (NSS, Sports Captain, Scouts) */}
        <Leadership onOpenCertificateModal={handleOpenCertificate} />

        {/* 14. Sustainability Beyond the Lab (Organic Farming & Biotech) */}
        <Sustainability />

        {/* 15. Comprehensive Certificate Gallery */}
        <CertificateGallery onSelectCertificate={handleOpenCertificate} />

        {/* 16. Career Direction & Future Trajectory */}
        <CareerDirection />

        {/* 17. Professional Contact & Inquiry Composer */}
        <Contact />
      </main>

      {/* 18. Editorial Footer */}
      <Footer />

      {/* Fullscreen Certificate Inspector Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={handleCloseCertificate}
      />

      {/* Printable Academic Curriculum Vitae Modal */}
      <AcademicCVModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

    </div>
  );
};

export default App;
