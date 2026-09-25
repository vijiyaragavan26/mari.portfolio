import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  secondaryColor?: string;
}

/**
 * 1. MV Monogram in Molecular Hexagon Frame
 */
export const MonogramMVIcon: React.FC<IconProps> = ({ className = "w-10 h-10", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Hexagonal molecular outer frame */}
    <polygon 
      points="24,3 43,14 43,34 24,45 5,34 5,14" 
      stroke={color} 
      strokeWidth="2.2" 
      strokeLinejoin="round" 
      fill="#FFFFFF"
    />
    {/* Inner subtle lattice */}
    <polygon 
      points="24,8 38,16 38,32 24,40 10,32 10,16" 
      stroke={secondaryColor} 
      strokeWidth="0.8" 
      strokeDasharray="2 2"
      fill="#F7FBFD"
      opacity="0.7"
    />
    {/* Corner Molecular Nodes */}
    <circle cx="24" cy="3" r="2.5" fill={secondaryColor} />
    <circle cx="43" cy="14" r="2" fill={color} />
    <circle cx="43" cy="34" r="2" fill={secondaryColor} />
    <circle cx="24" cy="45" r="2.5" fill={color} />
    <circle cx="5" cy="34" r="2" fill={secondaryColor} />
    <circle cx="5" cy="14" r="2" fill={color} />
    
    {/* Custom M Letterform */}
    <path 
      d="M14 31V18L19.5 25L24 18V31" 
      stroke="#17324D" 
      strokeWidth="2.4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* Custom V Letterform with Biotech Teal Accent */}
    <path 
      d="M26 18L30 31L34 18" 
      stroke={secondaryColor} 
      strokeWidth="2.4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 2. Microscope + Molecular Discovery Symbol ("Explore My Research")
 */
export const MicroscopeDiscoveryIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Microscope Eyepiece & Body Tube */}
    <path d="M7 3L11 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <rect x="9.5" y="5.5" width="4" height="7" rx="1" transform="rotate(45 9.5 5.5)" stroke={color} strokeWidth="1.8" />
    <path d="M14.5 10.5L16.5 12.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Microscope Curved Arm */}
    <path d="M7 12C6 14 6.5 17 9 19C11.5 21 14.5 21 16 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    {/* Stage & Base */}
    <line x1="12" y1="14" x2="18" y2="14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M6 21H18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Molecular Discovery Node & Orbital Halo */}
    <circle cx="17.5" cy="6.5" r="2" fill={secondaryColor} />
    <circle cx="21" cy="9.5" r="1.2" fill={secondaryColor} />
    <circle cx="15.5" cy="3.5" r="1.2" fill={secondaryColor} />
    <line x1="17.5" y1="6.5" x2="21" y2="9.5" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
    <line x1="17.5" y1="6.5" x2="15.5" y2="3.5" stroke={secondaryColor} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/**
 * 3. Research Timeline + Molecular Node Symbol ("View Experience")
 */
export const ResearchTimelineIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Discovery Pathway Line */}
    <path d="M4 18C8 18 8 6 12 6C16 6 16 18 20 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Milestone Nodes */}
    <circle cx="4" cy="18" r="2.5" fill="#FFFFFF" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="6" r="3" fill="#FFFFFF" stroke={secondaryColor} strokeWidth="2" />
    <circle cx="20" cy="18" r="2.5" fill="#FFFFFF" stroke={color} strokeWidth="2" />
    {/* Inner Core Dots */}
    <circle cx="12" cy="6" r="1.2" fill={secondaryColor} />
    <circle cx="4" cy="18" r="1" fill={color} />
    <circle cx="20" cy="18" r="1" fill={color} />
  </svg>
);

/**
 * 4. Scientific Document + DNA Symbol ("Download CV")
 */
export const ScientificDocumentDnaIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Document Outline */}
    <path d="M6 3H14L19 8V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V4C5 3.4 5.4 3 6 3Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 3V8H19" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Scientific DNA Emblem in Document */}
    <path d="M9 13C11 13 13 17 15 17" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 13C13 13 11 17 9 17" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="9" cy="13" r="1" fill={secondaryColor} />
    <circle cx="15" cy="13" r="1" fill={secondaryColor} />
    <circle cx="9" cy="17" r="1" fill={secondaryColor} />
    <circle cx="15" cy="17" r="1" fill={secondaryColor} />
  </svg>
);

/**
 * 5. Professional Scientific Network Symbol ("LinkedIn")
 */
export const ScientificNetworkIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Connected Scientific Network Nodes */}
    <circle cx="6" cy="7" r="2.5" stroke={color} strokeWidth="1.8" fill="#FFFFFF" />
    <circle cx="18" cy="7" r="2.5" stroke={secondaryColor} strokeWidth="1.8" fill="#FFFFFF" />
    <circle cx="12" cy="18" r="3" stroke={color} strokeWidth="2" fill="#FFFFFF" />
    <circle cx="12" cy="18" r="1.2" fill={secondaryColor} />
    {/* Connection Vectors */}
    <line x1="8.2" y1="8.2" x2="10.2" y2="15.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <line x1="15.8" y1="8.2" x2="13.8" y2="15.5" stroke={secondaryColor} strokeWidth="1.6" strokeLinecap="round" />
    <line x1="8.5" y1="7" x2="15.5" y2="7" stroke={color} strokeWidth="1.4" strokeDasharray="2 2" />
  </svg>
);

/**
 * 6. Biomedical Science: Cell + Nucleus + Receptors
 */
export const BiomedicalScienceIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Cellular Membrane with organic curves */}
    <path 
      d="M16 4C23 4 28 8.5 28 16C28 23.5 22.5 28 16 28C9 28 4 23 4 16C4 9.5 9.5 4 16 4Z" 
      stroke={color} 
      strokeWidth="2.2" 
      fill="#F7FBFD"
    />
    {/* Organelle Membrane (Nucleus) */}
    <circle cx="16" cy="16" r="6" stroke={secondaryColor} strokeWidth="2" fill="#E4F3F0" />
    <circle cx="16" cy="16" r="2.5" fill={secondaryColor} />
    {/* Cellular Receptors on Membrane */}
    <circle cx="16" cy="2" r="1.5" fill={color} />
    <line x1="16" y1="2" x2="16" y2="4" stroke={color} strokeWidth="1.8" />
    <circle cx="30" cy="16" r="1.5" fill={secondaryColor} />
    <line x1="28" y1="16" x2="30" y2="16" stroke={secondaryColor} strokeWidth="1.8" />
    <circle cx="16" cy="30" r="1.5" fill={color} />
    <line x1="16" y1="28" x2="16" y2="30" stroke={color} strokeWidth="1.8" />
    <circle cx="2" cy="16" r="1.5" fill={secondaryColor} />
    <line x1="2" y1="16" x2="4" y2="16" stroke={secondaryColor} strokeWidth="1.8" />
  </svg>
);

/**
 * 7. Biotechnology: DNA Double Helix + Engineered Molecular Structure
 */
export const BiotechnologyIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Left and Right DNA Strands */}
    <path d="M8 5C14 10 18 12 24 16C18 20 14 22 8 27" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M24 5C18 10 14 12 8 16C14 20 18 22 24 27" stroke={secondaryColor} strokeWidth="2.2" strokeLinecap="round" />
    {/* Hydrogen Base Pairs */}
    <line x1="11" y1="8" x2="21" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="8" r="1.2" fill={secondaryColor} />
    <line x1="9" y1="16" x2="23" y2="16" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="16" r="1.5" fill={color} />
    <line x1="11" y1="24" x2="21" y2="24" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="16" cy="24" r="1.2" fill={secondaryColor} />
  </svg>
);

/**
 * 8. Molecular Biology / Epigenetics: DNA + Molecular Nodes
 */
export const MolecularBiologyIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Hexagon Lattice Center */}
    <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" stroke={color} strokeWidth="2" fill="#F7FBFD" />
    <circle cx="16" cy="16" r="3" fill={secondaryColor} />
    {/* Epigenetic methylation tags / branch nodes */}
    <line x1="16" y1="6" x2="16" y2="2" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="2" r="1.5" fill={secondaryColor} />
    <line x1="24" y1="21" x2="28" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="28" cy="23" r="1.5" fill={color} />
    <line x1="8" y1="21" x2="4" y2="23" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="4" cy="23" r="1.5" fill={color} />
  </svg>
);

/**
 * 9. Laboratory Research: Precision Microscope Lens Optics
 */
export const LaboratoryResearchIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Outer Objective Lens Ring */}
    <circle cx="16" cy="16" r="12" stroke={color} strokeWidth="2.2" fill="#FFFFFF" />
    {/* Intermediate Aperture Ring */}
    <circle cx="16" cy="16" r="7.5" stroke={secondaryColor} strokeWidth="1.8" strokeDasharray="3 2" fill="#F7FBFD" />
    {/* Central Target Optics Grid */}
    <circle cx="16" cy="16" r="3" fill={color} />
    <line x1="16" y1="2" x2="16" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="16" y1="24" x2="16" y2="30" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="2" y1="16" x2="8" y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="24" y1="16" x2="30" y2="16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 10. Cancer Research & Oncology
 */
export const CancerResearchIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Targeted Biomarker Cell */}
    <circle cx="16" cy="16" r="9" stroke={color} strokeWidth="2" fill="#F7FBFD" />
    <path d="M13 13L19 19M19 13L13 19" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    {/* Therapeutic targeting crosshairs */}
    <circle cx="16" cy="16" r="13" stroke={secondaryColor} strokeWidth="1.4" strokeDasharray="2 3" />
    <circle cx="16" cy="3" r="1.5" fill={color} />
    <circle cx="29" cy="16" r="1.5" fill={color} />
    <circle cx="16" cy="29" r="1.5" fill={color} />
    <circle cx="3" cy="16" r="1.5" fill={color} />
  </svg>
);

/**
 * 11. Scientific Communication & Medical Writing
 */
export const ScientificCommunicationIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Manuscript Sheet */}
    <rect x="6" y="4" width="20" height="24" rx="2.5" stroke={color} strokeWidth="2" fill="#FFFFFF" />
    {/* Text Lines */}
    <line x1="10" y1="10" x2="22" y2="10" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="10" y1="15" x2="22" y2="15" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <line x1="10" y1="20" x2="17" y2="20" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    {/* Scientific Quill / Node Beacon */}
    <circle cx="22" cy="22" r="3" fill={secondaryColor} />
    <circle cx="22" cy="22" r="1" fill="#FFFFFF" />
  </svg>
);

/**
 * 12. Bioinformatics: DNA + Computational Digital Node Matrix
 */
export const BioinformaticsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Digital Grid Nodes */}
    <rect x="4" y="4" width="24" height="24" rx="3" stroke={color} strokeWidth="1.8" fill="#F7FBFD" />
    <line x1="12" y1="4" x2="12" y2="28" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    <line x1="20" y1="4" x2="20" y2="28" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    <line x1="4" y1="12" x2="28" y2="12" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    <line x1="4" y1="20" x2="28" y2="20" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    {/* Bioinformatics Algorithmic Path */}
    <path d="M7 23L12 12L20 20L25 9" stroke={secondaryColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="7" cy="23" r="2" fill={color} />
    <circle cx="12" cy="12" r="2" fill={secondaryColor} />
    <circle cx="20" cy="20" r="2" fill={color} />
    <circle cx="25" cy="9" r="2" fill={secondaryColor} />
  </svg>
);

/**
 * 13. Molecular Node for Timelines
 */
export const MolecularNodeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" fill="#F7FBFD" />
    <circle cx="12" cy="12" r="4.5" stroke={secondaryColor} strokeWidth="1.6" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="2" fill={secondaryColor} />
  </svg>
);

/**
 * 14. Scientific Credential / Certificate Seal
 */
export const ScientificCredentialIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Academic Rosette Seal */}
    <circle cx="16" cy="13" r="9" stroke={color} strokeWidth="2.2" fill="#FFFFFF" />
    <circle cx="16" cy="13" r="5.5" stroke={secondaryColor} strokeWidth="1.6" strokeDasharray="2 2" fill="#F7FBFD" />
    <circle cx="16" cy="13" r="2" fill={secondaryColor} />
    {/* Ribbon Banners */}
    <path d="M12 21L10 29L16 26L22 29L20 21" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="#FFFFFF" />
  </svg>
);

/**
 * 15. Research Paper / Publication Manuscript
 */
export const ResearchPaperIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M7 4H21L27 10V26C27 27.1 26.1 28 25 28H7C5.9 28 5 27.1 5 26V6C5 4.9 5.9 4 7 4Z" stroke={color} strokeWidth="2" strokeLinejoin="round" fill="#FFFFFF" />
    <path d="M21 4V10H27" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    <line x1="9" y1="14" x2="19" y2="14" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <line x1="9" y1="18" x2="23" y2="18" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <line x1="9" y1="22" x2="20" y2="22" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

/**
 * 16. Scientific Contact & Communication Icon
 */
export const ScientificContactIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Scientific Communication Envelope / Signal Node */}
    <rect x="2.5" y="4" width="19" height="15" rx="2.5" stroke={color} strokeWidth="1.8" fill="none" />
    <path d="M3.5 6L12 13L20.5 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    {/* Molecular Communication Signal Waves */}
    <circle cx="12" cy="13" r="2" fill={secondaryColor} />
    <circle cx="12" cy="13" r="3.5" stroke={secondaryColor} strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.8" />
    {/* Corner Orbital Dots */}
    <circle cx="4.5" cy="17" r="1" fill={secondaryColor} />
    <circle cx="19.5" cy="17" r="1" fill={secondaryColor} />
  </svg>
);

/**
 * 16b. Scientific Phone / Telecommunications Icon
 */
export const ScientificPhoneIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Handset contour */}
    <path 
      d="M5 4.5C5 3.67 5.67 3 6.5 3H9.2C9.8 3 10.3 3.4 10.4 4L11.2 7.6C11.3 8.1 11 8.7 10.5 8.9L8.8 9.8C9.9 12.3 11.7 14.1 14.2 15.2L15.1 13.5C15.3 13 15.9 12.7 16.4 12.8L20 13.6C20.6 13.7 21 14.2 21 14.8V17.5C21 18.33 20.33 19 19.5 19C11.5 19 5 12.5 5 4.5Z" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    {/* Signal Transmission Nodes */}
    <circle cx="18" cy="6" r="1.5" fill={secondaryColor} />
    <path d="M15 4C17.5 4 19.5 6 19.5 8.5" stroke={secondaryColor} strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1.5 1.5" />
  </svg>
);

/**
 * 16bb. Scientific WhatsApp Icon
 */
export const ScientificWhatsAppIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "#25D366", secondaryColor = "#128C7E" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Speech Bubble Contour */}
    <path 
      d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2 22L7.05 20.68C8.5 21.52 10.19 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" 
      stroke={color} 
      strokeWidth="1.8" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="#FFFFFF"
    />
    {/* Phone Handset shape inside bubble */}
    <path 
      d="M8.5 7.5C8.2 7.5 7.8 7.7 7.6 8C7.1 8.7 6.8 9.7 7.1 11C7.6 13.1 9.4 15.4 11.5 16.3C12.8 16.9 13.8 16.8 14.6 16.4C15 16.2 15.3 15.8 15.3 15.4L15.1 14.2C15 13.8 14.7 13.6 14.3 13.5L13.1 13C12.7 12.9 12.3 13 12.1 13.3L11.6 13.8C10.7 13.3 10.1 12.7 9.6 11.8L10.1 11.3C10.4 11.1 10.5 10.7 10.4 10.3L9.9 9.1C9.8 8.7 9.6 8.4 9.2 8.3L8.5 7.5Z" 
      fill={color} 
      stroke={color}
      strokeWidth="0.5"
    />
    {/* Molecular Node Accent */}
    <circle cx="18" cy="6" r="1.5" fill={secondaryColor} />
  </svg>
);

/**
 * 16c. Scientific Send / Dispatch Node Icon
 */
export const ScientificSendIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M22 2L11 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="11" cy="13" r="1.8" fill={secondaryColor} />
    <circle cx="22" cy="2" r="1.5" fill={secondaryColor} />
  </svg>
);

/**
 * 16d. Molecular Email Icon
 */
export const MolecularEmailIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect x="2.5" y="4" width="19" height="15" rx="2.5" stroke={color} strokeWidth="1.8" fill="none" />
    <path d="M3.5 6L12 13L20.5 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="13" r="1.8" fill={secondaryColor} />
  </svg>
);

/**
 * 17. Research Collaboration Icon
 */
export const ResearchCollaborationIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Dual collaborating molecular nodes */}
    <circle cx="8" cy="10" r="4" stroke={color} strokeWidth="1.8" fill="#FFFFFF" />
    <circle cx="16" cy="10" r="4" stroke={secondaryColor} strokeWidth="1.8" fill="#FFFFFF" />
    <path d="M4 20C4 17 6.5 15 9.5 15C10.5 15 11.4 15.3 12 15.8C12.6 15.3 13.5 15 14.5 15C17.5 15 20 17 20 20" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 18. Precision Location Node Icon
 */
export const LocationNodeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />
    <circle cx="12" cy="9" r="3" stroke={secondaryColor} strokeWidth="1.6" fill="#F7FBFD" />
    <circle cx="12" cy="9" r="1.2" fill={secondaryColor} />
  </svg>
);

/**
 * 19. Bacterial Biodegradation / Environmental Biotechnology Icon
 */
export const BacterialDegradationIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Bacterial rod cell */}
    <rect x="6" y="8" width="20" height="10" rx="5" stroke={color} strokeWidth="2" fill="#F7FBFD" />
    <circle cx="11" cy="13" r="1.5" fill={secondaryColor} />
    <circle cx="16" cy="13" r="1.5" fill={secondaryColor} />
    <circle cx="21" cy="13" r="1.5" fill={secondaryColor} />
    {/* Degradation catalytic nodes & cleavage arrows */}
    <path d="M10 22L16 26L22 22" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 26V18" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
    <circle cx="10" cy="22" r="1.5" fill={color} />
    <circle cx="22" cy="22" r="1.5" fill={color} />
  </svg>
);

/**
 * 20. Forensic Science & Analysis Icon
 */
export const ForensicScienceIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Forensic biometric ridge lines */}
    <path d="M8 20C8 14 11.5 10 16 10C20.5 10 24 14 24 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M12 22C12 17.5 13.8 14 16 14C18.2 14 20 17.5 20 22" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M16 24V18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    {/* Forensic magnifying / spectroscopy target node */}
    <circle cx="22" cy="8" r="4" stroke={secondaryColor} strokeWidth="1.8" fill="#FFFFFF" />
    <line x1="25" y1="11" x2="28" y2="14" stroke={secondaryColor} strokeWidth="2" strokeLinecap="round" />
    <circle cx="22" cy="8" r="1.5" fill={secondaryColor} />
  </svg>
);

/**
 * 21. Drug Discovery & Receptor Docking Icon
 */
export const DrugDiscoveryIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Receptor Binding Pocket */}
    <path d="M6 10C6 16 10 20 16 20C22 20 26 16 26 10" stroke={color} strokeWidth="2.2" strokeLinecap="round" fill="#F7FBFD" />
    {/* Therapeutic ligand molecule inserting */}
    <polygon points="16,6 20,12 12,12" stroke={secondaryColor} strokeWidth="2" strokeLinejoin="round" fill="#E4F3F0" />
    <circle cx="16" cy="6" r="1.5" fill={secondaryColor} />
    <circle cx="12" cy="12" r="1.5" fill={secondaryColor} />
    <circle cx="20" cy="12" r="1.5" fill={secondaryColor} />
    {/* Target activity spark */}
    <circle cx="16" cy="25" r="2.5" fill={color} />
    <line x1="16" y1="20" x2="16" y2="22.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 22. Academic Conference / Symposium Speaker Icon
 */
export const ConferenceSpeakerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Podium Base */}
    <path d="M8 26H24M10 26L12 15H20L22 26" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Speaker / Microphone Node */}
    <circle cx="16" cy="9" r="4" stroke={secondaryColor} strokeWidth="2" fill="#FFFFFF" />
    <circle cx="16" cy="9" r="1.5" fill={secondaryColor} />
    {/* Sound / Broadcast waves */}
    <path d="M22 6C24 8 24 10 22 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M10 6C8 8 8 10 10 12" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * 23. Scientific Poster Presentation Icon
 */
export const PosterPresentationIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size, color = "#2B86C5", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Poster Board */}
    <rect x="5" y="4" width="22" height="16" rx="2" stroke={color} strokeWidth="2" fill="#FFFFFF" />
    <line x1="8" y1="8" x2="16" y2="8" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" />
    <rect x="8" y="11" width="6" height="6" rx="1" stroke={color} strokeWidth="1.2" fill="#F7FBFD" />
    <line x1="17" y1="11" x2="23" y2="11" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="17" y1="14" x2="23" y2="14" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
    <line x1="17" y1="17" x2="21" y2="17" stroke={secondaryColor} strokeWidth="1.4" strokeLinecap="round" />
    {/* Easel Stand Legs */}
    <path d="M9 20L6 28M23 20L26 28M16 20V28" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/**
 * 24. Scientific Arrow Right Node
 */
export const ArrowRightNodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="4" cy="10" r="1.5" fill={secondaryColor} />
  </svg>
);

/**
 * 25. External Link Node Icon
 */
export const ExternalLinkNodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M15 11V16C15 16.55 14.55 17 14 17H4C3.45 17 3 16.55 3 16V6C3 5.45 3.45 5 4 5H9" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11 3H17V9M17 3L8 12" stroke={secondaryColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * 26. Close Node Icon
 */
export const CloseNodeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M5 5L15 15M15 5L5 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="10" r="2" fill={secondaryColor} opacity="0.6" />
  </svg>
);

/**
 * 27. Filter Node Icon
 */
export const FilterNodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size, color = "currentColor", secondaryColor = "#39A89D" }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M3 4H17L11.5 11V16L8.5 14V11L3 4Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="10" cy="4" r="1.5" fill={secondaryColor} />
  </svg>
);

/**
 * 28. Verified Check Node Icon
 */
export const CheckCircleNodeIcon: React.FC<IconProps> = ({ className = "w-4 h-4", size, color = "#39A89D", secondaryColor = "#2B86C5" }) => (
  <svg 
    viewBox="0 0 20 20" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <circle cx="10" cy="10" r="8" stroke={color} strokeWidth="1.8" fill="#F7FBFD" />
    <path d="M6.5 10L9 12.5L13.5 7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

