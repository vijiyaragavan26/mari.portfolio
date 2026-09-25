export type CertificateCategory = 
  | 'ALL'
  | 'RESEARCH'
  | 'BIOMEDICAL'
  | 'CONFERENCES'
  | 'TRAINING'
  | 'LEADERSHIP'
  | 'SOCIAL SERVICE';

export interface CertificateItem {
  id: string;
  title: string;
  institution: string;
  category: CertificateCategory[];
  year: string;
  dateStr?: string;
  description: string;
  verificationBadge?: string;
  documentType: 'Fellowship Certificate' | 'Participation Certificate' | 'Value-Added Course Certificate' | 'Training Certificate' | 'Symposium Certificate' | 'NSS Special Camp';
  badgeColor?: string;
  iconName?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  area: string;
  projectType: string;
  description: string;
  highlights: string[];
  scientificTags: string[];
  visualConcept: string;
}

export interface PresentationItem {
  id: string;
  title: string;
  type: 'POSTER PRESENTATION' | 'CONFERENCE PRESENTATION' | 'ORAL PRESENTATION';
  institution: string;
  event: string;
  sponsor?: string;
  date: string;
  description: string;
  keyPoints: string[];
  tags: string[];
}

export interface ConferenceItem {
  id: string;
  name: string;
  code?: string;
  institution: string;
  date: string;
  year: number;
  participationType: string;
  theme: string;
  location?: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  theme: string;
  institution: string;
  date: string;
  moduleType: 'Symposium' | 'National Seminar' | 'Value Added Course' | 'Intercollegiate Technical Fest' | 'Workshop';
  description: string;
  competencies: string[];
}

export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  institution: string;
  scoreOrStatus: string;
  description: string;
  category: 'Academics' | 'Fellowship' | 'Conference' | 'Service';
  keyHighlights: string[];
  statusBadge: string;
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    nature: string;
    levelDescriptor: 'Core Academic' | 'Laboratory Technique' | 'Hands-on Exposure' | 'Methodological Exposure' | 'Coursework Certified';
  }[];
}

export interface ResearchInterest {
  title: string;
  icon: string;
  stance: 'Interested in' | 'Exploring' | 'Exposure to';
  description: string;
  connectedFields: string[];
}
