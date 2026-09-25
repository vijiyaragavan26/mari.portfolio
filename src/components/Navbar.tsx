import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MonogramMVIcon, ScientificContactIcon } from './OriginalIcons';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact', isAction: true },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', ...NAV_LINKS.map(l => l.href.substring(1))];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#031525]/95 backdrop-blur-md shadow-lg border-b border-[#00E5FF]/20'
          : 'py-4 bg-[#031525]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Mariyappan Profile Image */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 focus:outline-none"
          data-cursor="Home"
        >
          <div className="relative shrink-0 group-hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00E5FF] shadow-xs ring-2 ring-[#00B8D4]/30 bg-[#071E30]">
              <img 
                src="/assets/profile/mariyappan.jpg" 
                alt="Mariyappan V" 
                className="w-full h-full object-cover object-[50%_15%] scale-110" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-[#F4FAFF] leading-tight">
                MARIYAPPAN V.
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            </div>
            <span className="font-mono text-[10.5px] text-[#00E5FF] font-semibold tracking-wide uppercase">
              M.Sc. Biomedical Student
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            if (link.isAction) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[#071E30] text-[#F4FAFF] border border-[#00E5FF]/30 hover:border-[#00E5FF] hover:bg-[#00E5FF]/20 hover:shadow-md hover:shadow-[#00E5FF]/10 transition-all group"
                  data-cursor="Connect"
                >
                  <ScientificContactIcon className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>{link.label}</span>
                </a>
              );
            }
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all ${
                  isActive
                    ? 'text-[#00E5FF] bg-[#00E5FF]/10 font-bold'
                    : 'text-[#A9C4D8] hover:text-[#00E5FF] hover:bg-[#00E5FF]/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-[#00E5FF] to-[#00B8D4] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#F4FAFF] hover:bg-[#071E30] transition-colors border border-[#00E5FF]/20"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#031525]/98 border-b border-[#00E5FF]/20 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <div className="pb-3 mb-3 border-b border-[#00E5FF]/20 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#A9C4D8]">
                  ACADEMIC DIRECTORY
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#071E30] text-[#00E5FF] border border-[#00E5FF]/30 font-semibold">
                  Alagappa Univ • IIT Madras
                </span>
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    link.isAction 
                      ? 'bg-[#071E30] text-[#F4FAFF] border border-[#00E5FF]/40 font-bold text-center flex items-center justify-center gap-2 mt-3 hover:bg-[#00E5FF]/20 hover:text-[#00E5FF]'
                      : 'text-[#F4FAFF] hover:bg-[#071E30] hover:text-[#00E5FF]'
                  }`}
                >
                  {link.isAction && <ScientificContactIcon className="w-4 h-4 text-[#00E5FF]" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

