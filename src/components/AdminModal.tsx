import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '../context/PortfolioContext';
import { CertificateItem, ProjectItem, TimelineItem, LeadershipItem } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AdminTab = 'certificates' | 'projects' | 'timeline' | 'skills' | 'leadership' | 'settings';

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const {
    certificates,
    projects,
    timeline,
    skills,
    leadership,
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
    importDataJson
  } = usePortfolio();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('mariyappan_admin_auth') === 'true';
  });

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<AdminTab>('certificates');

  // Certificate Modal / Form State
  const [editingCert, setEditingCert] = useState<CertificateItem | null>(null);
  const [isCertFormOpen, setIsCertFormOpen] = useState(false);
  const [certFormData, setCertFormData] = useState<Partial<CertificateItem>>({
    id: '',
    title: '',
    institution: '',
    category: ['BIOMEDICAL'],
    year: '2026',
    dateStr: '',
    description: '',
    verificationBadge: '',
    documentType: 'Participation Certificate',
    imageUrl: '',
    pdfUrl: ''
  });

  // Project Modal / Form State
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [projectFormData, setProjectFormData] = useState<Partial<ProjectItem>>({
    id: '',
    title: '',
    category: '',
    area: 'Drug Discovery',
    projectType: 'Academic Investigation',
    description: '',
    highlights: [],
    scientificTags: [],
    visualConcept: ''
  });

  // Timeline Form State
  const [editingTimelineIdx, setEditingTimelineIdx] = useState<number | null>(null);
  const [isTimelineFormOpen, setIsTimelineFormOpen] = useState(false);
  const [timelineFormData, setTimelineFormData] = useState<Partial<TimelineItem>>({
    title: '',
    institution: '',
    year: '2026',
    period: '',
    scoreOrStatus: '',
    description: '',
    category: 'Academics',
    keyHighlights: [],
    statusBadge: ''
  });

  // Skill Form State
  const [selectedSkillCategoryIdx, setSelectedSkillCategoryIdx] = useState(0);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState<any>('Laboratory Technique');

  // Leadership Form State
  const [editingLeadershipIdx, setEditingLeadershipIdx] = useState<number | null>(null);
  const [isLeadershipFormOpen, setIsLeadershipFormOpen] = useState(false);
  const [leadershipFormData, setLeadershipFormData] = useState<Partial<LeadershipItem>>({
    role: '',
    institution: '',
    period: '',
    icon: 'Award',
    description: '',
    highlights: []
  });

  // Settings State
  const [newPassword, setNewPassword] = useState('');
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [importStatus, setImportStatus] = useState('');

  const getAdminPassword = () => {
    return localStorage.getItem('mariyappan_admin_pass') || 'mari@2026';
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === getAdminPassword()) {
      setIsAuthenticated(true);
      sessionStorage.setItem('mariyappan_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect admin password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mariyappan_admin_auth');
    onClose();
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword.trim() || newPassword.length < 4) {
      alert('Password must be at least 4 characters');
      return;
    }
    localStorage.setItem('mariyappan_admin_pass', newPassword);
    setPasswordSuccessMsg('Admin password updated successfully!');
    setNewPassword('');
    setTimeout(() => setPasswordSuccessMsg(''), 3000);
  };

  const handleDownloadBackup = () => {
    const jsonStr = exportDataJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio_data_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportBackup = () => {
    if (!jsonInput.trim()) return;
    const ok = importDataJson(jsonInput);
    if (ok) {
      setImportStatus('Data successfully restored from backup!');
      setJsonInput('');
      setTimeout(() => setImportStatus(''), 3000);
    } else {
      setImportStatus('Failed to import JSON. Please verify format.');
    }
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCertFormData(prev => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Certificate Actions
  const handleOpenAddCert = () => {
    setEditingCert(null);
    setCertFormData({
      id: `cert-custom-${Date.now()}`,
      title: '',
      institution: '',
      category: ['BIOMEDICAL'],
      year: new Date().getFullYear().toString(),
      dateStr: '',
      description: '',
      verificationBadge: 'Verified Record',
      documentType: 'Participation Certificate',
      imageUrl: '',
      pdfUrl: ''
    });
    setIsCertFormOpen(true);
  };

  const handleOpenEditCert = (cert: CertificateItem) => {
    setEditingCert(cert);
    setCertFormData({ ...cert });
    setIsCertFormOpen(true);
  };

  const handleSaveCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certFormData.title || !certFormData.institution) {
      alert('Title and Institution are required');
      return;
    }

    const certToSave: CertificateItem = {
      id: certFormData.id || `cert-custom-${Date.now()}`,
      title: certFormData.title || '',
      institution: certFormData.institution || '',
      category: certFormData.category || ['BIOMEDICAL'],
      year: certFormData.year || '2026',
      dateStr: certFormData.dateStr || certFormData.year || '2026',
      description: certFormData.description || '',
      verificationBadge: certFormData.verificationBadge || 'Verified',
      documentType: certFormData.documentType || 'Participation Certificate',
      imageUrl: certFormData.imageUrl || '',
      pdfUrl: certFormData.pdfUrl || ''
    };

    if (editingCert) {
      updateCertificate(editingCert.id, certToSave);
    } else {
      addCertificate(certToSave);
    }
    setIsCertFormOpen(false);
  };

  // Project Actions
  const handleOpenAddProject = () => {
    setEditingProject(null);
    setProjectFormData({
      id: `proj-custom-${Date.now()}`,
      title: '',
      category: 'Biotechnology',
      area: 'Drug Discovery',
      projectType: 'Academic Project',
      description: '',
      highlights: [],
      scientificTags: [],
      visualConcept: ''
    });
    setIsProjectFormOpen(true);
  };

  const handleOpenEditProject = (p: ProjectItem) => {
    setEditingProject(p);
    setProjectFormData({ ...p });
    setIsProjectFormOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectFormData.title) {
      alert('Project Title is required');
      return;
    }

    const projToSave: ProjectItem = {
      id: projectFormData.id || `proj-custom-${Date.now()}`,
      title: projectFormData.title || '',
      category: projectFormData.category || 'Biotechnology',
      area: projectFormData.area || 'Drug Discovery',
      projectType: projectFormData.projectType || 'Academic Project',
      description: projectFormData.description || '',
      highlights: projectFormData.highlights || [],
      scientificTags: projectFormData.scientificTags || [],
      visualConcept: projectFormData.visualConcept || ''
    };

    if (editingProject) {
      updateProject(editingProject.id, projToSave);
    } else {
      addProject(projToSave);
    }
    setIsProjectFormOpen(false);
  };

  // Timeline Actions
  const handleOpenAddTimeline = () => {
    setEditingTimelineIdx(null);
    setTimelineFormData({
      title: '',
      institution: '',
      year: new Date().getFullYear().toString(),
      period: '',
      scoreOrStatus: 'Completed',
      description: '',
      category: 'Academics',
      keyHighlights: [],
      statusBadge: 'Verified'
    });
    setIsTimelineFormOpen(true);
  };

  const handleOpenEditTimeline = (idx: number, item: TimelineItem) => {
    setEditingTimelineIdx(idx);
    setTimelineFormData({ ...item });
    setIsTimelineFormOpen(true);
  };

  const handleSaveTimeline = (e: React.FormEvent) => {
    e.preventDefault();
    if (!timelineFormData.title || !timelineFormData.institution) {
      alert('Title and Institution are required');
      return;
    }

    const itemToSave: TimelineItem = {
      title: timelineFormData.title || '',
      institution: timelineFormData.institution || '',
      year: timelineFormData.year || '2026',
      period: timelineFormData.period || timelineFormData.year || '2026',
      scoreOrStatus: timelineFormData.scoreOrStatus || '',
      description: timelineFormData.description || '',
      category: (timelineFormData.category as any) || 'Academics',
      keyHighlights: timelineFormData.keyHighlights || [],
      statusBadge: timelineFormData.statusBadge || 'Completed'
    };

    if (editingTimelineIdx !== null) {
      updateTimelineItem(editingTimelineIdx, itemToSave);
    } else {
      addTimelineItem(itemToSave);
    }
    setIsTimelineFormOpen(false);
  };

  // Leadership Actions
  const handleOpenAddLeadership = () => {
    setEditingLeadershipIdx(null);
    setLeadershipFormData({
      role: '',
      institution: '',
      period: '2026 – Present',
      icon: 'Award',
      description: '',
      highlights: []
    });
    setIsLeadershipFormOpen(true);
  };

  const handleOpenEditLeadership = (idx: number, item: LeadershipItem) => {
    setEditingLeadershipIdx(idx);
    setLeadershipFormData({ ...item });
    setIsLeadershipFormOpen(true);
  };

  const handleSaveLeadership = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadershipFormData.role) {
      alert('Role is required');
      return;
    }

    const itemToSave: LeadershipItem = {
      role: leadershipFormData.role || '',
      institution: leadershipFormData.institution || '',
      period: leadershipFormData.period || '2026',
      icon: leadershipFormData.icon || 'Award',
      description: leadershipFormData.description || '',
      highlights: leadershipFormData.highlights || []
    };

    if (editingLeadershipIdx !== null) {
      updateLeadershipItem(editingLeadershipIdx, itemToSave);
    } else {
      addLeadershipItem(itemToSave);
    }
    setIsLeadershipFormOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark overlay backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-[#020B16]/95 backdrop-blur-md transition-opacity" 
      />

      <div className="relative w-full max-w-6xl bg-[#031525] border border-[#00E5FF]/40 rounded-3xl shadow-[0_0_60px_rgba(0,229,255,0.2)] overflow-hidden z-10 flex flex-col max-h-[92vh]">
        
        {/* If not authenticated: Password prompt screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#02101F] border border-[#00E5FF]/40 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              🔒
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#F4FAFF]">
                Owner Admin Portal
              </h2>
              <p className="text-xs sm:text-sm text-[#A9C4D8] mt-1">
                Enter your private admin password to access live CRUD controls.
              </p>
            </div>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div className="text-left">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin password (default: mari@2026)"
                  className="w-full px-4 py-3 rounded-xl bg-[#02101F] border border-[#00E5FF]/40 text-sm text-[#F4FAFF] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] placeholder-[#A9C4D8]/50"
                  autoFocus
                />
                {authError && (
                  <p className="text-xs text-rose-400 mt-1 font-mono">{authError}</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-[#071E30] hover:bg-[#02101F] text-[#A9C4D8] text-xs font-semibold border border-[#00E5FF]/20 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                >
                  Unlock Admin
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <>
            {/* Header bar */}
            <div className="p-4 sm:p-5 bg-[#06243A] border-b border-[#00E5FF]/30 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/40 text-lg">
                  🧬
                </span>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#F4FAFF] flex items-center gap-2">
                    <span>Portfolio CRUD Management System</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40">
                      Owner Mode
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-[#A9C4D8]">
                    Real-time Create, Read, Update, Delete for all portfolio records
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-xl bg-[#02101F] hover:bg-rose-950/40 text-rose-400 text-xs font-mono border border-rose-500/30 transition-all"
                >
                  Logout
                </button>
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold transition-all"
                >
                  Done & Exit
                </button>
              </div>
            </div>

            {/* Navigation Tabs Bar */}
            <div className="flex flex-wrap items-center gap-1 p-2 bg-[#02101F] border-b border-[#00E5FF]/20 overflow-x-auto text-xs font-mono">
              {[
                { id: 'certificates', label: `Certificates (${certificates.length})`, icon: '📜' },
                { id: 'projects', label: `Projects (${projects.length})`, icon: '🔬' },
                { id: 'timeline', label: `Timeline (${timeline.length})`, icon: '🎓' },
                { id: 'skills', label: `Skills (${skills.length} categories)`, icon: '🛠️' },
                { id: 'leadership', label: `Leadership (${leadership.length})`, icon: '👥' },
                { id: 'settings', label: 'Backup & Settings', icon: '⚙️' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  className={`px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#00E5FF] text-[#031525] font-bold shadow-xs'
                      : 'text-[#A9C4D8] hover:text-[#F4FAFF] hover:bg-[#071E30]'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Body Container */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-[#02101F]/80">
              
              {/* TAB 1: CERTIFICATES CRUD */}
              {activeTab === 'certificates' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#F4FAFF]">
                        Certificate Documents ({certificates.length})
                      </h4>
                      <p className="text-xs text-[#A9C4D8]">
                        Add new certificate scans, modify details, or remove entries.
                      </p>
                    </div>
                    <button
                      onClick={handleOpenAddCert}
                      className="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                    >
                      <span>➕</span>
                      <span>Add Certificate</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificates.map((cert) => (
                      <div
                        key={cert.id}
                        className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all flex flex-col justify-between space-y-3"
                      >
                        <div>
                          {cert.imageUrl && (
                            <div className="w-full h-32 rounded-xl overflow-hidden mb-2 bg-[#02101F] border border-[#00E5FF]/10">
                              <img
                                src={cert.imageUrl}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#00E5FF] mb-1">
                            <span>{cert.year}</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#02101F] border border-[#00E5FF]/20">
                              {cert.documentType}
                            </span>
                          </div>
                          <h5 className="font-heading font-bold text-sm text-[#F4FAFF] line-clamp-2">
                            {cert.title}
                          </h5>
                          <p className="text-xs text-[#A9C4D8] mt-0.5">
                            {cert.institution}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {cert.category.map(c => (
                              <span key={c} className="text-[9px] font-mono px-1 rounded bg-[#02101F] text-[#A9C4D8]">
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-[#00E5FF]/10 flex items-center justify-between gap-2">
                          <button
                            onClick={() => handleOpenEditCert(cert)}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-medium border border-[#00E5FF]/20 transition-all"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete certificate "${cert.title}"?`)) {
                                deleteCertificate(cert.id);
                              }
                            }}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-rose-950/40 text-rose-400 text-xs font-medium border border-rose-500/30 transition-all"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: PROJECTS CRUD */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#F4FAFF]">
                        Applied Research Projects ({projects.length})
                      </h4>
                      <p className="text-xs text-[#A9C4D8]">
                        Manage laboratory investigations, methodologies and highlights.
                      </p>
                    </div>
                    <button
                      onClick={handleOpenAddProject}
                      className="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                    >
                      <span>➕</span>
                      <span>Add Project</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#00E5FF] mb-1">
                            <span>{proj.area}</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#02101F] border border-[#00E5FF]/20">
                              {proj.projectType}
                            </span>
                          </div>
                          <h5 className="font-heading font-bold text-sm text-[#F4FAFF]">
                            {proj.title}
                          </h5>
                          <p className="text-xs text-[#A9C4D8] mt-1 line-clamp-3">
                            {proj.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#00E5FF]/10 flex items-center justify-between gap-2">
                          <button
                            onClick={() => handleOpenEditProject(proj)}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-medium border border-[#00E5FF]/20 transition-all"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete project "${proj.title}"?`)) {
                                deleteProject(proj.id);
                              }
                            }}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-rose-950/40 text-rose-400 text-xs font-medium border border-rose-500/30 transition-all"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: TIMELINE CRUD */}
              {activeTab === 'timeline' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#F4FAFF]">
                        Academic Timeline ({timeline.length})
                      </h4>
                      <p className="text-xs text-[#A9C4D8]">
                        Manage academic degrees, institutions, scores, and milestones.
                      </p>
                    </div>
                    <button
                      onClick={handleOpenAddTimeline}
                      className="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                    >
                      <span>➕</span>
                      <span>Add Milestone</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {timeline.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF]">
                            <span>{item.year}</span>
                            <span>•</span>
                            <span>{item.scoreOrStatus}</span>
                          </div>
                          <h5 className="font-heading font-bold text-sm text-[#F4FAFF]">
                            {item.title}
                          </h5>
                          <p className="text-xs text-[#A9C4D8]">
                            {item.institution}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleOpenEditTimeline(idx, item)}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-medium border border-[#00E5FF]/20 transition-all"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete "${item.title}"?`)) {
                                deleteTimelineItem(idx);
                              }
                            }}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-rose-950/40 text-rose-400 text-xs font-medium border border-rose-500/30 transition-all"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: SKILLS CRUD */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#F4FAFF]">
                      Skills & Technical Competencies
                    </h4>
                    <p className="text-xs text-[#A9C4D8]">
                      Add new skills directly to categories or remove individual competencies.
                    </p>
                  </div>

                  {/* Add skill input bar */}
                  <div className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 flex flex-col sm:flex-row gap-3 items-end">
                    <div className="w-full sm:w-1/3 space-y-1">
                      <label className="text-[11px] font-mono text-[#00E5FF]">Category</label>
                      <select
                        value={selectedSkillCategoryIdx}
                        onChange={(e) => setSelectedSkillCategoryIdx(Number(e.target.value))}
                        className="w-full px-3 py-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-xs text-[#F4FAFF]"
                      >
                        {skills.map((cat, idx) => (
                          <option key={cat.categoryName} value={idx}>
                            {cat.categoryName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full sm:w-1/3 space-y-1">
                      <label className="text-[11px] font-mono text-[#00E5FF]">Skill Name</label>
                      <input
                        type="text"
                        value={newSkillName}
                        onChange={(e) => setNewSkillName(e.target.value)}
                        placeholder="e.g. Western Blotting, CRISPR"
                        className="w-full px-3 py-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-xs text-[#F4FAFF]"
                      />
                    </div>

                    <div className="w-full sm:w-1/4 space-y-1">
                      <label className="text-[11px] font-mono text-[#00E5FF]">Level Descriptor</label>
                      <select
                        value={newSkillLevel}
                        onChange={(e) => setNewSkillLevel(e.target.value as any)}
                        className="w-full px-3 py-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-xs text-[#F4FAFF]"
                      >
                        <option value="Laboratory Technique">Laboratory Technique</option>
                        <option value="Core Academic">Core Academic</option>
                        <option value="Coursework Certified">Coursework Certified</option>
                        <option value="Methodological Exposure">Methodological Exposure</option>
                        <option value="Hands-on Exposure">Hands-on Exposure</option>
                      </select>
                    </div>

                    <button
                      onClick={() => {
                        if (!newSkillName.trim()) return;
                        addSkill(selectedSkillCategoryIdx, {
                          name: newSkillName.trim(),
                          nature: 'Core Technique',
                          levelDescriptor: newSkillLevel
                        });
                        setNewSkillName('');
                      }}
                      className="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold shrink-0"
                    >
                      ➕ Add Skill
                    </button>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-4">
                    {skills.map((cat, catIdx) => (
                      <div key={cat.categoryName} className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-heading font-bold text-sm text-[#00E5FF]">
                            {cat.categoryName} ({cat.skills.length})
                          </h5>
                          <span className="text-[10px] font-mono text-[#A9C4D8]">
                            {cat.description}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {cat.skills.map((s, sIdx) => (
                            <div
                              key={sIdx}
                              className="px-2.5 py-1 rounded-xl bg-[#02101F] border border-[#00E5FF]/20 text-xs flex items-center gap-1.5"
                            >
                              <span className="text-[#F4FAFF]">{s.name}</span>
                              <span className="text-[9px] font-mono text-[#00E5FF]">({s.levelDescriptor})</span>
                              <button
                                onClick={() => deleteSkill(catIdx, sIdx)}
                                className="text-rose-400 hover:text-rose-300 ml-1 text-xs"
                                title="Remove skill"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: LEADERSHIP CRUD */}
              {activeTab === 'leadership' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-base text-[#F4FAFF]">
                        Leadership & Community Records ({leadership.length})
                      </h4>
                      <p className="text-xs text-[#A9C4D8]">
                        Manage society memberships, athletic captaincy, and community service.
                      </p>
                    </div>
                    <button
                      onClick={handleOpenAddLeadership}
                      className="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                    >
                      <span>➕</span>
                      <span>Add Leadership Record</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {leadership.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 flex flex-col justify-between space-y-3"
                      >
                        <div>
                          <div className="flex items-center justify-between text-[10px] font-mono text-[#00E5FF] mb-1">
                            <span>{item.period}</span>
                            <span className="px-1.5 py-0.5 rounded bg-[#02101F] border border-[#00E5FF]/20">
                              {item.institution}
                            </span>
                          </div>
                          <h5 className="font-heading font-bold text-sm text-[#F4FAFF]">
                            {item.role}
                          </h5>
                          <p className="text-xs text-[#A9C4D8] mt-1">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#00E5FF]/10 flex items-center justify-between gap-2">
                          <button
                            onClick={() => handleOpenEditLeadership(idx, item)}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-[#00E5FF]/20 text-[#00E5FF] text-xs font-medium border border-[#00E5FF]/20 transition-all"
                          >
                            ✏️ Edit
                          </button>
                          <button
                            onClick={() => {
                              if (window.confirm(`Delete "${item.role}"?`)) {
                                deleteLeadershipItem(idx);
                              }
                            }}
                            className="px-3 py-1 rounded-lg bg-[#02101F] hover:bg-rose-950/40 text-rose-400 text-xs font-medium border border-rose-500/30 transition-all"
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 6: SETTINGS & BACKUP */}
              {activeTab === 'settings' && (
                <div className="space-y-6 max-w-2xl">
                  {/* Change Admin Password */}
                  <div className="p-5 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 space-y-3">
                    <h5 className="font-heading font-bold text-sm text-[#F4FAFF]">
                      🔐 Change Admin Password
                    </h5>
                    <p className="text-xs text-[#A9C4D8]">
                      Update your private passcode required to unlock this CRUD modal.
                    </p>
                    <form onSubmit={handleChangePassword} className="flex gap-2">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="flex-1 px-3 py-2 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-xs text-[#F4FAFF]"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold"
                      >
                        Update Password
                      </button>
                    </form>
                    {passwordSuccessMsg && (
                      <p className="text-xs text-emerald-400 font-mono">{passwordSuccessMsg}</p>
                    )}
                  </div>

                  {/* Export / Backup */}
                  <div className="p-5 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 space-y-3">
                    <h5 className="font-heading font-bold text-sm text-[#F4FAFF]">
                      💾 Backup & Export
                    </h5>
                    <p className="text-xs text-[#A9C4D8]">
                      Download all your updated certificates, projects, and skills as a JSON backup file.
                    </p>
                    <button
                      onClick={handleDownloadBackup}
                      className="px-4 py-2.5 rounded-xl bg-[#00E5FF] hover:bg-[#00B8D4] text-[#031525] text-xs font-bold flex items-center gap-2"
                    >
                      <span>📥</span>
                      <span>Download JSON Backup</span>
                    </button>
                  </div>

                  {/* Import Data */}
                  <div className="p-5 rounded-2xl bg-[#071E30] border border-[#00E5FF]/20 space-y-3">
                    <h5 className="font-heading font-bold text-sm text-[#F4FAFF]">
                      📤 Restore from JSON
                    </h5>
                    <textarea
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      placeholder="Paste backup JSON content here..."
                      rows={4}
                      className="w-full p-3 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-xs font-mono text-[#F4FAFF]"
                    />
                    <button
                      onClick={handleImportBackup}
                      className="px-4 py-2 rounded-xl bg-[#071E30] hover:bg-[#02101F] text-[#00E5FF] border border-[#00E5FF]/30 text-xs font-bold"
                    >
                      Restore Data
                    </button>
                    {importStatus && (
                      <p className="text-xs font-mono text-[#00E5FF]">{importStatus}</p>
                    )}
                  </div>

                  {/* Reset to Factory Defaults */}
                  <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                    <h5 className="font-heading font-bold text-sm text-rose-300">
                      ⚠️ Reset to Factory Defaults
                    </h5>
                    <p className="text-xs text-rose-200/70">
                      Reverts all customized changes back to the original portfolio codebase.
                    </p>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to revert all custom changes back to default?')) {
                          resetToDefaults();
                          alert('Portfolio data reset to default successfully!');
                        }
                      }}
                      className="px-4 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold"
                    >
                      Reset Everything
                    </button>
                  </div>
                </div>
              )}

            </div>
          </>
        )}

      </div>

      {/* SUB-MODAL: CERTIFICATE FORM */}
      {isCertFormOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#020B16]/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#031525] border border-[#00E5FF]/40 rounded-3xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h4 className="font-heading font-bold text-lg text-[#F4FAFF]">
              {editingCert ? 'Edit Certificate' : 'Add New Certificate'}
            </h4>

            <form onSubmit={handleSaveCert} className="space-y-3 text-xs">
              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={certFormData.title || ''}
                  onChange={(e) => setCertFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g. Life Member – Bioinformatics Society"
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Institution *</label>
                <input
                  type="text"
                  required
                  value={certFormData.institution || ''}
                  onChange={(e) => setCertFormData(prev => ({ ...prev, institution: e.target.value }))}
                  placeholder="e.g. Alagappa University"
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[#00E5FF] font-mono block mb-1">Year</label>
                  <input
                    type="text"
                    value={certFormData.year || '2026'}
                    onChange={(e) => setCertFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                  />
                </div>
                <div>
                  <label className="text-[#00E5FF] font-mono block mb-1">Date String</label>
                  <input
                    type="text"
                    value={certFormData.dateStr || ''}
                    onChange={(e) => setCertFormData(prev => ({ ...prev, dateStr: e.target.value }))}
                    placeholder="e.g. 18 May 2026 – 17 July 2026"
                    className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Document Type</label>
                <select
                  value={certFormData.documentType || 'Participation Certificate'}
                  onChange={(e) => setCertFormData(prev => ({ ...prev, documentType: e.target.value as any }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                >
                  <option value="Fellowship Certificate">Fellowship Certificate</option>
                  <option value="Participation Certificate">Participation Certificate</option>
                  <option value="Membership Certificate">Membership Certificate</option>
                  <option value="Value-Added Course Certificate">Value-Added Course Certificate</option>
                  <option value="Training Certificate">Training Certificate</option>
                  <option value="Symposium Certificate">Symposium Certificate</option>
                  <option value="NSS Special Camp">NSS Special Camp</option>
                </select>
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {['RESEARCH', 'BIOMEDICAL', 'CONFERENCES', 'TRAINING', 'LEADERSHIP', 'SOCIAL SERVICE'].map(cat => {
                    const isSelected = certFormData.category?.includes(cat as any);
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => {
                          const cur = certFormData.category || [];
                          if (isSelected) {
                            setCertFormData(prev => ({ ...prev, category: cur.filter(c => c !== cat) }));
                          } else {
                            setCertFormData(prev => ({ ...prev, category: [...cur, cat as any] }));
                          }
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-mono border transition-all ${
                          isSelected 
                            ? 'bg-[#00E5FF] text-[#031525] font-bold border-[#00E5FF]'
                            : 'bg-[#02101F] text-[#A9C4D8] border-[#00E5FF]/20'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Verification Badge</label>
                <input
                  type="text"
                  value={certFormData.verificationBadge || ''}
                  onChange={(e) => setCertFormData(prev => ({ ...prev, verificationBadge: e.target.value }))}
                  placeholder="e.g. BIDDS Life Member / IIT Madras"
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={certFormData.description || ''}
                  onChange={(e) => setCertFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Summary of what the certificate represents..."
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              {/* Image Input & Upload */}
              <div className="space-y-2 p-3 rounded-xl bg-[#02101F] border border-[#00E5FF]/20">
                <label className="text-[#00E5FF] font-mono block">Certificate Image</label>
                <input
                  type="text"
                  value={certFormData.imageUrl || ''}
                  onChange={(e) => setCertFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                  placeholder="Image URL or upload file below"
                  className="w-full p-2 rounded-lg bg-[#071E30] border border-[#00E5FF]/20 text-[#F4FAFF] text-xs"
                />
                
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] text-[#A9C4D8]">Or upload image from device:</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileUpload}
                    className="text-xs text-[#A9C4D8] file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[10px] file:bg-[#00E5FF] file:text-[#031525] file:font-bold cursor-pointer"
                  />
                </div>

                {certFormData.imageUrl && (
                  <div className="mt-2 w-32 h-20 rounded-lg overflow-hidden border border-[#00E5FF]/30">
                    <img src={certFormData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#00E5FF]/20">
                <button
                  type="button"
                  onClick={() => setIsCertFormOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#071E30] text-[#A9C4D8] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00E5FF] text-[#031525] text-xs font-bold"
                >
                  Save Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SUB-MODAL: PROJECT FORM */}
      {isProjectFormOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#020B16]/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#031525] border border-[#00E5FF]/40 rounded-3xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h4 className="font-heading font-bold text-lg text-[#F4FAFF]">
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </h4>

            <form onSubmit={handleSaveProject} className="space-y-3 text-xs">
              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={projectFormData.title || ''}
                  onChange={(e) => setProjectFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[#00E5FF] font-mono block mb-1">Area</label>
                  <input
                    type="text"
                    value={projectFormData.area || ''}
                    onChange={(e) => setProjectFormData(prev => ({ ...prev, area: e.target.value }))}
                    placeholder="e.g. Drug Discovery"
                    className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                  />
                </div>
                <div>
                  <label className="text-[#00E5FF] font-mono block mb-1">Project Type</label>
                  <input
                    type="text"
                    value={projectFormData.projectType || ''}
                    onChange={(e) => setProjectFormData(prev => ({ ...prev, projectType: e.target.value }))}
                    placeholder="e.g. Academic Investigation"
                    className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={projectFormData.description || ''}
                  onChange={(e) => setProjectFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#00E5FF]/20">
                <button
                  type="button"
                  onClick={() => setIsProjectFormOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#071E30] text-[#A9C4D8] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00E5FF] text-[#031525] text-xs font-bold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SUB-MODAL: TIMELINE FORM */}
      {isTimelineFormOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#020B16]/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#031525] border border-[#00E5FF]/40 rounded-3xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h4 className="font-heading font-bold text-lg text-[#F4FAFF]">
              {editingTimelineIdx !== null ? 'Edit Milestone' : 'Add Milestone'}
            </h4>

            <form onSubmit={handleSaveTimeline} className="space-y-3 text-xs">
              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Degree / Milestone Title *</label>
                <input
                  type="text"
                  required
                  value={timelineFormData.title || ''}
                  onChange={(e) => setTimelineFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Institution *</label>
                <input
                  type="text"
                  required
                  value={timelineFormData.institution || ''}
                  onChange={(e) => setTimelineFormData(prev => ({ ...prev, institution: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[#00E5FF] font-mono block mb-1">Year</label>
                  <input
                    type="text"
                    value={timelineFormData.year || ''}
                    onChange={(e) => setTimelineFormData(prev => ({ ...prev, year: e.target.value }))}
                    className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                  />
                </div>
                <div>
                  <label className="text-[#00E5FF] font-mono block mb-1">Score / Status</label>
                  <input
                    type="text"
                    value={timelineFormData.scoreOrStatus || ''}
                    onChange={(e) => setTimelineFormData(prev => ({ ...prev, scoreOrStatus: e.target.value }))}
                    placeholder="e.g. 91% or In Progress"
                    className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={timelineFormData.description || ''}
                  onChange={(e) => setTimelineFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#00E5FF]/20">
                <button
                  type="button"
                  onClick={() => setIsTimelineFormOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#071E30] text-[#A9C4D8] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00E5FF] text-[#031525] text-xs font-bold"
                >
                  Save Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SUB-MODAL: LEADERSHIP FORM */}
      {isLeadershipFormOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#020B16]/90 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#031525] border border-[#00E5FF]/40 rounded-3xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h4 className="font-heading font-bold text-lg text-[#F4FAFF]">
              {editingLeadershipIdx !== null ? 'Edit Leadership Record' : 'Add Leadership Record'}
            </h4>

            <form onSubmit={handleSaveLeadership} className="space-y-3 text-xs">
              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Role Title *</label>
                <input
                  type="text"
                  required
                  value={leadershipFormData.role || ''}
                  onChange={(e) => setLeadershipFormData(prev => ({ ...prev, role: e.target.value }))}
                  placeholder="e.g. Society Member, Captain"
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Institution</label>
                <input
                  type="text"
                  value={leadershipFormData.institution || ''}
                  onChange={(e) => setLeadershipFormData(prev => ({ ...prev, institution: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Period</label>
                <input
                  type="text"
                  value={leadershipFormData.period || ''}
                  onChange={(e) => setLeadershipFormData(prev => ({ ...prev, period: e.target.value }))}
                  placeholder="e.g. 2026 – Present"
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div>
                <label className="text-[#00E5FF] font-mono block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={leadershipFormData.description || ''}
                  onChange={(e) => setLeadershipFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#02101F] border border-[#00E5FF]/30 text-[#F4FAFF]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-[#00E5FF]/20">
                <button
                  type="button"
                  onClick={() => setIsLeadershipFormOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#071E30] text-[#A9C4D8] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#00E5FF] text-[#031525] text-xs font-bold"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
