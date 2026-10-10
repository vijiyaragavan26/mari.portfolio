import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  CertificateItem, 
  ProjectItem, 
  TimelineItem, 
  SkillCategory, 
  LeadershipItem 
} from '../types';
import { 
  CERTIFICATES as DEFAULT_CERTIFICATES,
  PROJECTS as DEFAULT_PROJECTS,
  TIMELINE as DEFAULT_TIMELINE,
  SKILL_CATEGORIES as DEFAULT_SKILLS,
  LEADERSHIP_INFO as DEFAULT_LEADERSHIP
} from '../data/portfolioData';

interface PortfolioDataState {
  certificates: CertificateItem[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
  skills: SkillCategory[];
  leadership: LeadershipItem[];
}

interface PortfolioContextType {
  certificates: CertificateItem[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
  skills: SkillCategory[];
  leadership: LeadershipItem[];

  // Certificates CRUD
  addCertificate: (cert: CertificateItem) => void;
  updateCertificate: (id: string, cert: Partial<CertificateItem>) => void;
  deleteCertificate: (id: string) => void;

  // Projects CRUD
  addProject: (project: ProjectItem) => void;
  updateProject: (id: string, project: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;

  // Timeline CRUD
  addTimelineItem: (item: TimelineItem) => void;
  updateTimelineItem: (index: number, item: Partial<TimelineItem>) => void;
  deleteTimelineItem: (index: number) => void;

  // Skills CRUD
  addSkill: (categoryIndex: number, skill: { name: string; nature: string; levelDescriptor: any }) => void;
  deleteSkill: (categoryIndex: number, skillIndex: number) => void;

  // Leadership CRUD
  addLeadershipItem: (item: LeadershipItem) => void;
  updateLeadershipItem: (index: number, item: Partial<LeadershipItem>) => void;
  deleteLeadershipItem: (index: number) => void;

  // Global utilities
  resetToDefaults: () => void;
  exportDataJson: () => string;
  importDataJson: (jsonStr: string) => boolean;
}

const STORAGE_KEY = 'mariyappan_portfolio_custom_data_v1';

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioDataState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          certificates: parsed.certificates || DEFAULT_CERTIFICATES,
          projects: parsed.projects || DEFAULT_PROJECTS,
          timeline: parsed.timeline || DEFAULT_TIMELINE,
          skills: parsed.skills || DEFAULT_SKILLS,
          leadership: parsed.leadership || DEFAULT_LEADERSHIP,
        };
      }
    } catch (e) {
      console.error('Failed to load portfolio custom data from storage', e);
    }
    return {
      certificates: DEFAULT_CERTIFICATES,
      projects: DEFAULT_PROJECTS,
      timeline: DEFAULT_TIMELINE,
      skills: DEFAULT_SKILLS,
      leadership: DEFAULT_LEADERSHIP,
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [data]);

  // Certificates CRUD
  const addCertificate = (cert: CertificateItem) => {
    setData(prev => ({
      ...prev,
      certificates: [cert, ...prev.certificates]
    }));
  };

  const updateCertificate = (id: string, updated: Partial<CertificateItem>) => {
    setData(prev => ({
      ...prev,
      certificates: prev.certificates.map(c => c.id === id ? { ...c, ...updated } : c)
    }));
  };

  const deleteCertificate = (id: string) => {
    setData(prev => ({
      ...prev,
      certificates: prev.certificates.filter(c => c.id !== id)
    }));
  };

  // Projects CRUD
  const addProject = (project: ProjectItem) => {
    setData(prev => ({
      ...prev,
      projects: [project, ...prev.projects]
    }));
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...updated } : p)
    }));
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  // Timeline CRUD
  const addTimelineItem = (item: TimelineItem) => {
    setData(prev => ({
      ...prev,
      timeline: [...prev.timeline, item]
    }));
  };

  const updateTimelineItem = (index: number, updated: Partial<TimelineItem>) => {
    setData(prev => ({
      ...prev,
      timeline: prev.timeline.map((item, idx) => idx === index ? { ...item, ...updated } : item)
    }));
  };

  const deleteTimelineItem = (index: number) => {
    setData(prev => ({
      ...prev,
      timeline: prev.timeline.filter((_, idx) => idx !== index)
    }));
  };

  // Skills CRUD
  const addSkill = (categoryIndex: number, skill: { name: string; nature: string; levelDescriptor: any }) => {
    setData(prev => {
      const newSkills = [...prev.skills];
      if (newSkills[categoryIndex]) {
        newSkills[categoryIndex] = {
          ...newSkills[categoryIndex],
          skills: [...newSkills[categoryIndex].skills, skill]
        };
      }
      return { ...prev, skills: newSkills };
    });
  };

  const deleteSkill = (categoryIndex: number, skillIndex: number) => {
    setData(prev => {
      const newSkills = [...prev.skills];
      if (newSkills[categoryIndex]) {
        newSkills[categoryIndex] = {
          ...newSkills[categoryIndex],
          skills: newSkills[categoryIndex].skills.filter((_, idx) => idx !== skillIndex)
        };
      }
      return { ...prev, skills: newSkills };
    });
  };

  // Leadership CRUD
  const addLeadershipItem = (item: LeadershipItem) => {
    setData(prev => ({
      ...prev,
      leadership: [...prev.leadership, item]
    }));
  };

  const updateLeadershipItem = (index: number, updated: Partial<LeadershipItem>) => {
    setData(prev => ({
      ...prev,
      leadership: prev.leadership.map((item, idx) => idx === index ? { ...item, ...updated } : item)
    }));
  };

  const deleteLeadershipItem = (index: number) => {
    setData(prev => ({
      ...prev,
      leadership: prev.leadership.filter((_, idx) => idx !== index)
    }));
  };

  // Reset to defaults
  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData({
      certificates: DEFAULT_CERTIFICATES,
      projects: DEFAULT_PROJECTS,
      timeline: DEFAULT_TIMELINE,
      skills: DEFAULT_SKILLS,
      leadership: DEFAULT_LEADERSHIP,
    });
  };

  // Export JSON
  const exportDataJson = () => {
    return JSON.stringify(data, null, 2);
  };

  // Import JSON
  const importDataJson = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.certificates && Array.isArray(parsed.certificates)) {
        setData({
          certificates: parsed.certificates || DEFAULT_CERTIFICATES,
          projects: parsed.projects || DEFAULT_PROJECTS,
          timeline: parsed.timeline || DEFAULT_TIMELINE,
          skills: parsed.skills || DEFAULT_SKILLS,
          leadership: parsed.leadership || DEFAULT_LEADERSHIP,
        });
        return true;
      }
    } catch (e) {
      console.error('Failed to import JSON data', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        certificates: data.certificates,
        projects: data.projects,
        timeline: data.timeline,
        skills: data.skills,
        leadership: data.leadership,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        addProject,
        updateProject,
        deleteProject,
        addTimelineItem,
        updateTimelineItem,
        deleteTimelineItem,
        addSkill,
        deleteSkill,
        addLeadershipItem,
        updateLeadershipItem,
        deleteLeadershipItem,
        resetToDefaults,
        exportDataJson,
        importDataJson,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
