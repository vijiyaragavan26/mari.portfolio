import { 
  CertificateItem, 
  ProjectItem, 
  PresentationItem, 
  ConferenceItem, 
  WorkshopItem, 
  TimelineItem, 
  SkillCategory, 
  ResearchInterest 
} from '../types';

export const PERSONAL_INFO = {
  name: "MARIYAPPAN V",
  tagline: "Exploring Biology, Biomedical Science & Research",
  secondaryTagline: "From Biotechnology Foundations to Biomedical Research",
  primaryTitle: "M.Sc. Biomedical Science Student | Biotechnology Graduate | Research Enthusiast",
  summary: "Passionate about biomedical science, biotechnology, laboratory research, scientific communication and emerging approaches in biomedical research.",
  email: "mariyappanvmari709@gmail.com",
  phone: "+91 824 843 4521",
  whatsapp: "+91 824 843 4521",
  whatsappUrl: "https://wa.me/918248434521?text=Hello%20Mariyappan%2C%20I%20came%20across%20your%20Biomedical%20Research%20Portfolio",
  location: "Dharmapuri, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/mariyappan-vediyappan-4b1a4b369",
  resumeUrl: "/assets/resume/Mariyappan_V_Resume.pdf",
  degrees: {
    current: {
      degree: "M.Sc. Biomedical Science",
      institution: "Alagappa University — Karaikudi (Tamil Nadu)",
      period: "2025 – 2027",
      status: "Currently Pursuing"
    },
    previous: {
      degree: "B.Sc. Biotechnology",
      institution: "K.S. Rangasamy College of Arts and Science (Autonomous) — Tiruchengode (Tamil Nadu)",
      period: "2022 – 2025",
      score: "69%"
    }
  },
  fellowship: {
    title: "Summer Fellowship Programme 2026",
    institution: "Indian Institute of Technology Madras (IIT Madras)",
    department: "Department of Biotechnology",
    duration: "18 May 2026 – 17 July 2026",
    mentor: "Arumugam",
    researchTopic: "Studies on Malaria Parasite Epigenetic Proteins: A Methodological Approach",
    verifiedNote: "Certificate of participation issued by IIT Madras for the Summer Fellowship Programme 2026."
  }
};

export const HERO_CARDS = [
  {
    num: "01",
    title: "M.Sc. Biomedical Science",
    subtitle: "Alagappa University — Karaikudi (Tamil Nadu)",
    badge: "2025 – 2027",
    color: "from-sky-500/20 to-blue-600/10"
  },
  {
    num: "02",
    title: "B.Sc. Biotechnology",
    subtitle: "K.S. Rangasamy — Tiruchengode (Tamil Nadu)",
    badge: "Graduated (69%)",
    color: "from-teal-500/20 to-emerald-600/10"
  },
  {
    num: "03",
    title: "IIT Madras Summer Fellow",
    subtitle: "Department of Biotechnology",
    badge: "Summer 2026",
    color: "from-cyan-500/20 to-indigo-600/10"
  },
  {
    num: "04",
    title: "Research & Sci-Comm",
    subtitle: "Presentations & Value-Added Training",
    badge: "Active Focus",
    color: "from-emerald-500/20 to-teal-600/10"
  }
];

export const RESEARCH_EXPERIENCE = {
  institution: "Indian Institute of Technology Madras",
  programme: "Summer Fellowship Programme 2026",
  department: "Department of Biotechnology",
  duration: "18 May 2026 – 17 July 2026 (2 Months)",
  mentor: "Arumugam",
  topic: "Studies on Malaria Parasite Epigenetic Proteins: A Methodological Approach",
  certificateStatus: "Certificate of Participation Issued by IIT Madras",
  overview: "Completed an intensive 2-month Summer Fellowship in the Department of Biotechnology at IIT Madras. Focused on understanding methodological frameworks and experimental techniques for studying epigenetic regulation and target proteins in Plasmodium malaria parasites.",
  coreFocusAreas: [
    "Methodological approaches for epigenetic protein investigations in malaria",
    "Understanding protein targeting mechanisms and molecular interactions",
    "Biomedical and biotechnology laboratory workflows in premier institute environments",
    "Literature synthesis and scientific reporting on parasitic epigenetics"
  ],
  verifications: [
    { label: "Host Institute", value: "Indian Institute of Technology Madras" },
    { label: "Department", value: "Department of Biotechnology" },
    { label: "Faculty Mentorship", value: "Arumugam" },
    { label: "Programme Tenure", value: "18 May 2026 – 17 July 2026" }
  ]
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-plastic-degradation",
    title: "Isolation and Characterization of Plastic-Degrading Bacteria",
    category: "Microbiology / Environmental Biotechnology",
    area: "Microbiology",
    projectType: "UG Mini Project",
    description: "Investigated the isolation and characterization of plastic-degrading bacteria from plastic-contaminated soil samples using standard microbiological and culturing techniques.",
    highlights: [
      "Soil sample collection from plastic-contaminated terrestrial sites",
      "Serial dilution and selective media culturing of microbial strains",
      "Morphological characterization and microscopic staining analysis",
      "Exploration of bacterial enzymatic pathways for polymer breakdown"
    ],
    scientificTags: ["Soil Microbiology", "Bacterial Isolation", "Plastic Biodegradation", "Microscopy"],
    visualConcept: "Soil sample → Bacterial culture → Microscopic isolation → Polymer breakdown pathway"
  },
  {
    id: "proj-forensic-science",
    title: "Forensic Science Methodologies",
    category: "Forensic Science & Analytical Biochemistry",
    area: "Biochemical Analysis",
    projectType: "Academic Project Exploration",
    description: "Explored forensic methodologies for crime scene investigations, with a dedicated focus on biochemical analysis, evidence preservation, and chain-of-custody protocols.",
    highlights: [
      "Biochemical spot testing and presumptive biological fluid screening",
      "Evidence preservation and sample stability protocols",
      "Crime scene processing methodology and contamination avoidance",
      "Application of analytical biochemical techniques in legal forensics"
    ],
    scientificTags: ["Forensic Biochemistry", "Biological Evidence", "Sample Preservation", "Analytical Methods"],
    visualConcept: "Sample identification → Presumptive screening → Biochemical analysis → Analytical reporting"
  },
  {
    id: "proj-drug-discovery",
    title: "Drug Discovery Techniques & Natural Compounds",
    category: "Pharmacology & Molecular Modeling",
    area: "Drug Discovery",
    projectType: "Research Exploration",
    description: "Investigated drug screening methods with emphasis on bioinformatics tools, laboratory-based assays, and the pharmacological evaluation of bioactive natural compounds.",
    highlights: [
      "Survey of in-silico target screening and computational docking pipelines",
      "Bioactive phytochemical evaluation from plant/natural extracts",
      "Mechanisms of target binding and therapeutic lead identification",
      "Integration of computational bioinformatics with wet-lab assays"
    ],
    scientificTags: ["Drug Screening", "Bioinformatics", "Natural Compounds", "Pharmacology"],
    visualConcept: "Target protein → Molecular lead → Bioinformatics screening → Biochemical assay"
  }
];

export const PRESENTATIONS: PresentationItem[] = [
  {
    id: "pres-poster-wastewater",
    title: "Waste Water Treatment Using 3D Printing Technology",
    type: "POSTER PRESENTATION",
    institution: "Periyar University",
    event: "International Seminar on 'Revolutionising Health and Harvest: Biotechnology Advancements in Medicine and Agriculture'",
    date: "7 September 2023",
    description: "Presented a scientific research poster exploring innovative 3D printing applications for structured filtration membranes, bio-carriers, and wastewater treatment substrates.",
    keyPoints: [
      "Examined additive manufacturing for custom porous filtration lattices",
      "Discussed biofilm immobilization on 3D-printed geometric matrices",
      "Presented comparative efficiency in pollutant and particulate adsorption",
      "Awarded Certificate of Presentation by Periyar University"
    ],
    tags: ["3D Printing", "Wastewater Treatment", "Biotechnology", "Poster Session"]
  },
  {
    id: "pres-biomedical-waste",
    title: "Biomedical Waste Management in India: Critical Appraises",
    type: "CONFERENCE PRESENTATION",
    institution: "DST-SERB Sponsored International Conference",
    event: "International Conference on 'Empowering Rural Communities: Integrating Bioenergy and Sustainable Waste Management for Socio-Economic Growth' (ERC-IBSWMSE)",
    sponsor: "Department of Science and Technology - Science and Engineering Research Board (DST-SERB)",
    date: "13–14 March 2024",
    description: "Delivered a critical scientific appraisal on the regulatory, biological, and processing challenges of healthcare and hospital waste management across Indian institutions.",
    keyPoints: [
      "Analyzed segregation protocols for cytotoxic, sharps, and infectious biological streams",
      "Evaluated autoclaving, chemical disinfection, and plasma incineration methodologies",
      "Highlighted rural-urban regulatory compliance gaps in biomedical disposal",
      "Recognized in DST-SERB sponsored conference proceedings"
    ],
    tags: ["Biomedical Waste", "DST-SERB", "Healthcare Bio-safety", "Waste Management"]
  }
];

export const CONFERENCES: ConferenceItem[] = [
  {
    id: "conf-miccon",
    name: "MICCON-23: Recent Advances in Microbiology",
    code: "MICCON-23",
    institution: "Madurai Kamaraj University",
    date: "16 September 2023",
    year: 2023,
    participationType: "Delegate / Active Participant",
    theme: "Microbial Diversity, Molecular Mechanisms & Applied Industrial Biotechnology",
    location: "Madurai, Tamil Nadu"
  },
  {
    id: "conf-icmrbh",
    name: "Modern Research in Biological Horizons",
    code: "ICMRBH'24",
    institution: "Bharathidasan College of Arts and Science",
    date: "9–10 July 2024",
    year: 2024,
    participationType: "Conference Participant",
    theme: "Emerging Paradigms in Biological Research & Computational Biology",
    location: "Erode, Tamil Nadu"
  },
  {
    id: "conf-npbs",
    name: "New Paradigms in Biotechnology and Sustainability",
    code: "NPBS 2025",
    institution: "St. Joseph's College (Autonomous)",
    date: "7 January 2025",
    year: 2025,
    participationType: "Symposium Delegate",
    theme: "Biotechnological Solutions for Environmental & Industrial Sustainability",
    location: "Tiruchirappalli, Tamil Nadu"
  },
  {
    id: "conf-advances-lab",
    name: "3rd International Symposium on Advances in Laboratory Techniques",
    code: "ISALT-2026",
    institution: "Alagappa University",
    date: "8 January 2026",
    year: 2026,
    participationType: "Symposium Delegate",
    theme: "Modern Instrumentation, Bio-imaging, and Diagnostic Techniques",
    location: "Karaikudi, Tamil Nadu"
  }
];

export const WORKSHOPS: WorkshopItem[] = [
  {
    id: "ws-cancer-therapy",
    title: "Translating Computational Insights into Clinical Oncology and Future Therapeutics",
    theme: "Cancer Therapy & Translational Oncology",
    institution: "Alagappa University",
    date: "13–15 October 2025",
    moduleType: "Workshop",
    description: "3-day specialized workshop on computational drug design, oncology target evaluation, and translational pathways from molecular models to clinical therapeutics.",
    competencies: ["Computational Oncology", "Target Identification", "Clinical Trial Workflows", "Therapeutic Lead Modeling"]
  },
  {
    id: "ws-cancer-prev",
    title: "Cancer Prevention and Management",
    theme: "3rd National Seminar on Preventive Oncology",
    institution: "Alagappa University",
    date: "4 February 2026",
    moduleType: "National Seminar",
    description: "Seminar focusing on molecular biomarkers, preventive screening strategies, epidemiological factors, and management protocols for oncology care.",
    competencies: ["Oncology Biomarkers", "Preventive Protocols", "Clinical Management", "Epidemiological Analysis"]
  },
  {
    id: "ws-adv-lab",
    title: "Advances in Laboratory Techniques",
    theme: "3rd International Symposium on Modern Experimental Techniques",
    institution: "Alagappa University",
    date: "8 January 2026",
    moduleType: "Symposium",
    description: "Hands-on immersion into contemporary biomedical instrumentation, analytical spectroscopy, microscopy techniques, and quality-controlled lab protocols.",
    competencies: ["Laboratory Instrumentation", "Analytical Standards", "Bio-imaging", "Experimental Integrity"]
  },
  {
    id: "ws-sci-comm",
    title: "Medical Writing & Scientific Communication",
    theme: "Comprehensive Value Added Certificate Course",
    institution: "Alagappa University",
    date: "January – March 2026",
    moduleType: "Value Added Course",
    description: "Formal semester-length training covering manuscript structure, regulatory writing, clinical study reports, scientific abstracts, poster layout, and ethical disclosure.",
    competencies: ["Manuscript Drafting", "Regulatory Writing", "Literature Synthesis", "Scientific Ethics & Citation"]
  },
  {
    id: "ws-biodefiesta",
    title: "BIO-DE-FIESTA 2025",
    theme: "State-Level Intercollegiate Technical Fest",
    institution: "St. Joseph's College",
    date: "17 September 2025",
    moduleType: "Intercollegiate Technical Fest",
    description: "Competed and engaged with peer biotechnology students across Tamil Nadu in scientific quizzes, bio-debates, and conceptual solution presentations.",
    competencies: ["Scientific Communication", "Intercollegiate Technical Exchange", "Technical Problem Solving"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    categoryName: "Research & Science",
    description: "Core academic and practical exposure across biotechnology and biomedical domains.",
    icon: "FlaskConical",
    skills: [
      { name: "Biotechnology", nature: "Foundational & Applied", levelDescriptor: "Core Academic" },
      { name: "Biomedical Science", nature: "Human Biology & Diagnostics", levelDescriptor: "Core Academic" },
      { name: "Microbiology", nature: "Bacterial Isolation & Staining", levelDescriptor: "Laboratory Technique" },
      { name: "Molecular Biology", nature: "DNA/Protein Basic Workflows", levelDescriptor: "Hands-on Exposure" },
      { name: "Biochemical Analysis", nature: "Assays & Presumptive Tests", levelDescriptor: "Laboratory Technique" },
      { name: "Drug Discovery Techniques", nature: "Bioactive Screening Principles", levelDescriptor: "Methodological Exposure" },
      { name: "Bioinformatics", nature: "Sequence & Target Alignment Tools", levelDescriptor: "Hands-on Exposure" },
      { name: "Laboratory Research", nature: "Protocols, Safety & Pipetting", levelDescriptor: "Hands-on Exposure" }
    ]
  },
  {
    categoryName: "Scientific Communication",
    description: "Formal training and demonstrated experience presenting complex biomedical research.",
    icon: "FileText",
    skills: [
      { name: "Medical Writing", nature: "Clinical Summaries & Structuring", levelDescriptor: "Coursework Certified" },
      { name: "Scientific Communication", nature: "Clear Academic Dissemination", levelDescriptor: "Coursework Certified" },
      { name: "Poster Presentation", nature: "Visual Data Representation", levelDescriptor: "Core Academic" },
      { name: "Literature Review", nature: "Synthesis & Critical Appraisal", levelDescriptor: "Core Academic" }
    ]
  },
  {
    categoryName: "Software & Digital Tools",
    description: "Tools utilized for research data documentation, tabulation, and presentation.",
    icon: "Laptop",
    skills: [
      { name: "Microsoft Word", nature: "Manuscript & Report Formatting", levelDescriptor: "Core Academic" },
      { name: "Microsoft Excel", nature: "Data Organization & Calculation", levelDescriptor: "Core Academic" },
      { name: "Microsoft PowerPoint", nature: "Scientific Deck & Poster Layout", levelDescriptor: "Core Academic" }
    ]
  },
  {
    categoryName: "Creative & Media",
    description: "Visual skills supporting documentation, fieldwork capture, and media preparation.",
    icon: "Camera",
    skills: [
      { name: "Photography", nature: "Fieldwork & Event Documentation", levelDescriptor: "Hands-on Exposure" },
      { name: "Photo Editing", nature: "Image Adjustment & Contrast Tuning", levelDescriptor: "Hands-on Exposure" }
    ]
  }
];

export const RESEARCH_INTERESTS: ResearchInterest[] = [
  {
    title: "Molecular Biology",
    icon: "Dna",
    stance: "Interested in",
    description: "Exploring nucleic acid mechanisms, gene regulation pathways, and recombinant methodologies.",
    connectedFields: ["Gene Expression", "Molecular Diagnostics", "Recombinant DNA"]
  },
  {
    title: "Microbiology",
    icon: "Binary",
    stance: "Exposure to",
    description: "Isolation of microbial strains, environmental bioremediation, and morphological characterization.",
    connectedFields: ["Bacterial Culturing", "Biodegradation", "Microbial Physiology"]
  },
  {
    title: "Biomedical Science",
    icon: "HeartPulse",
    stance: "Interested in",
    description: "Investigating human physiological pathways, pathological mechanisms, and clinical diagnostics.",
    connectedFields: ["Human Physiology", "Pathology", "Clinical Biomarkers"]
  },
  {
    title: "Drug Discovery",
    icon: "Pill",
    stance: "Exploring",
    description: "Screening of plant extracts and synthetic leads using computational and biochemical methods.",
    connectedFields: ["Lead Screening", "Natural Products", "Pharmacology"]
  },
  {
    title: "Epigenetics",
    icon: "Boxes",
    stance: "Exploring",
    description: "Studying chromatin remodeling and epigenetic enzyme targets in parasitic organisms (Malaria).",
    connectedFields: ["Parasite Biology", "Chromatin Remodeling", "Target Identification"]
  },
  {
    title: "Infectious Disease Research",
    icon: "ShieldAlert",
    stance: "Interested in",
    description: "Understanding host-pathogen interactions, transmission vectors, and therapeutic countermeasures.",
    connectedFields: ["Plasmodium Biology", "Vector Dynamics", "Immune Responses"]
  },
  {
    title: "Laboratory Techniques",
    icon: "Microscope",
    stance: "Exposure to",
    description: "Standardized protocols, spectrophotometry, microscopy, and sterile cell culture workflows.",
    connectedFields: ["Spectroscopy", "Sterile Culture", "Microscopic Staining"]
  },
  {
    title: "Bioinformatics",
    icon: "Cpu",
    stance: "Exposure to",
    description: "Utilizing online biological databases, sequence alignments, and molecular docking frameworks.",
    connectedFields: ["NCBI/BLAST", "Sequence Alignment", "In-Silico Docking"]
  },
  {
    title: "Scientific Communication",
    icon: "PenTool",
    stance: "Exposure to",
    description: "Formal medical writing, academic paper structuring, and scientific poster presentations.",
    connectedFields: ["Medical Writing", "Abstract Drafting", "Research Synthesis"]
  },
  {
    title: "Sustainable Biotechnology",
    icon: "Leaf",
    stance: "Exploring",
    description: "Integrating biological processes with circular bioeconomy, waste valorization, and organic practices.",
    connectedFields: ["Bioremediation", "Organic Agriculture", "Bio-Waste Recovery"]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2020",
    period: "2019 – 2020",
    title: "Secondary School Leaving Certificate (Class X)",
    institution: "Sri Vinayaga Vidyalaya Matric Hr. Sec. School",
    scoreOrStatus: "91% (Distinction)",
    description: "Completed foundational secondary schooling with strong academic performance in science and mathematics.",
    category: "Academics",
    statusBadge: "Completed with 91%",
    keyHighlights: ["Excellence in Science and Mathematics", "Active participant in school scientific exhibitions"]
  },
  {
    year: "2022",
    period: "2020 – 2022",
    title: "Higher Secondary Certificate (Class XII)",
    institution: "Sri Vinayaga Vidyalaya Matric Hr. Sec. School",
    scoreOrStatus: "55%",
    description: "Completed higher secondary curriculum with biology and science stream foundations.",
    category: "Academics",
    statusBadge: "Completed",
    keyHighlights: ["Biology and Chemistry track", "Built foundational interest in biological mechanisms"]
  },
  {
    year: "2022–2025",
    period: "July 2022 – May 2025",
    title: "B.Sc. in Biotechnology",
    institution: "K.S. Rangasamy College of Arts and Science (Autonomous) — Tiruchengode (Tamil Nadu)",
    scoreOrStatus: "69% (Graduated)",
    description: "Comprehensive 3-year undergraduate degree covering microbiology, genetics, molecular biology, biochemistry, bioinformatics, and immunology.",
    category: "Academics",
    statusBadge: "Degree Awarded (69%)",
    keyHighlights: [
      "UG Mini Project: Isolation & Characterization of Plastic-Degrading Bacteria",
      "Active NSS Volunteer (2022–2024)",
      "Sports Team Captain (Kabaddi & Weightlifting)",
      "Poster Presentation at Periyar University (2023)",
      "Conference delegate at MICCON-23 & ICMRBH'24"
    ]
  },
  {
    year: "2025–2027",
    period: "August 2025 – Present (Expected May 2027)",
    title: "M.Sc. in Biomedical Science",
    institution: "Alagappa University — Karaikudi (Tamil Nadu)",
    scoreOrStatus: "Currently Pursuing (First Class Track)",
    description: "Advanced postgraduate program focused on biomedical sciences, clinical biochemistry, cancer biology, molecular pathology, and medical research.",
    category: "Academics",
    statusBadge: "In Progress (2025–2027)",
    keyHighlights: [
      "Completed Value Added Course in Medical Writing & Scientific Communication (2026)",
      "Cancer Therapy Workshop (Clinical Oncology & Future Therapeutics)",
      "3rd International Symposium on Advances in Laboratory Techniques",
      "Selected for IIT Madras Summer Fellowship Programme 2026"
    ]
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "cert-iitm-2026",
    title: "Summer Fellowship Programme 2026",
    institution: "Indian Institute of Technology Madras (IIT Madras)",
    category: ["RESEARCH", "BIOMEDICAL"],
    year: "2026",
    dateStr: "18 May 2026 – 17 July 2026",
    description: "Certificate of Participation for completing 2 months of summer research fellowship in the Department of Biotechnology at IIT Madras under the mentorship of Arumugam on Malaria Parasite Epigenetic Proteins.",
    verificationBadge: "IIT Madras Fellowship Record",
    documentType: "Fellowship Certificate",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/IMG-20261007-WA0005.jpg",
    pdfUrl: "/assets/certificates/Mariyappan_V_IIT_Madras_Certificate.pdf"
  },
  {
  id: "cert-bidds-life-member",
  title: "Life Member – Bioinformatics and Drug Discovery Society",
  institution: "Bioinformatics and Drug Discovery Society (BIDDS)",
  category: ["LEADERSHIP"],
  year: "2026",
  dateStr: "2026",
  description: "Life Membership certificate issued by the Bioinformatics and Drug Discovery Society (BIDDS), Department of Bioinformatics, Alagappa University.",
  verificationBadge: "BIDDS Life Member",
  documentType: "Membership Certificate",
  badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
  iconName: "Award",
  imageUrl: "/assets/certificates/IMG-20261007-WA0018.jpg"
  },
  {
    id: "cert-adv-lab-2026",
    title: "3rd International Symposium on Advances in Laboratory Techniques",
    institution: "Alagappa University",
    category: ["BIOMEDICAL", "TRAINING"],
    year: "2026",
    dateStr: "8 January 2026",
    description: "Certificate of Participation at the International Symposium covering modern diagnostic and experimental laboratory methodologies for biomedical applications.",
    verificationBadge: "Alagappa University ISALT",
    documentType: "Symposium Certificate",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconName: "Microscope",
    imageUrl: "/assets/certificates/advance-laboratory-techniques.jpg",
    pdfUrl: "/assets/certificates/advance-laboratory-techniques.pdf"
  },
  {
    id: "cert-cancer-prev",
    title: "Cancer Prevention & Management National Seminar",
    institution: "Alagappa University",
    category: ["BIOMEDICAL", "TRAINING"],
    year: "2026",
    dateStr: "4 February 2026",
    description: "Participation certificate in the National Seminar on cancer biomarkers, therapeutic interventions, and preventive oncology.",
    verificationBadge: "National Seminar",
    documentType: "Participation Certificate",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    iconName: "HeartHandshake",
    imageUrl: "/assets/certificates/cancer-prevention-management.jpg",
    pdfUrl: "/assets/certificates/cancer-prevention-management.pdf"
  },
  {
    id: "cert-cancer-therapy",
    title: "Cancer Therapy: Translating Computational Insights into Clinical Oncology",
    institution: "Alagappa University",
    category: ["BIOMEDICAL", "TRAINING"],
    year: "2025",
    dateStr: "13–15 October 2025",
    description: "Workshop completion certificate on computational oncology, molecular target screening, and clinical therapeutic pipelines.",
    verificationBadge: "Clinical Oncology Workshop",
    documentType: "Training Certificate",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    iconName: "Activity",
    imageUrl: "/assets/certificates/cancer-therapy-workshop.jpg",
    pdfUrl: "/assets/certificates/cancer-therapy-workshop.pdf"
  },
  {
    id: "cert-medical-writing",
    title: "Medical Writing & Scientific Communications",
    institution: "Alagappa University",
    category: ["TRAINING", "BIOMEDICAL"],
    year: "2026",
    dateStr: "2025 – 2026",
    description: "Value Added Course completion certificate providing formal training in manuscript writing, citation ethics, and scientific communication.",
    verificationBadge: "Value Added Course",
    documentType: "Value-Added Course Certificate",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconName: "BookOpenCheck",
    imageUrl: "/assets/certificates/medical-writing.jpg",
    pdfUrl: "/assets/certificates/medical-writing.pdf"
  },
  {
    id: "cert-bio-de-fiesta",
    title: "BIO-DE-FIESTA Intercollegiate Technical Fest",
    institution: "Department of Biomedical Science, Alagappa University",
    category: ["BIOMEDICAL", "CONFERENCES"],
    year: "2025",
    dateStr: "2025",
    description: "Certificate of Participation in the intercollegiate biomedical science festival featuring technical competitions and academic presentations.",
    verificationBadge: "Alagappa University",
    documentType: "Participation Certificate",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/bio-de-fiesta.jpg",
    pdfUrl: "/assets/certificates/bio-de-fiesta.pdf"
  },
  {
    id: "cert-npbs-2025",
    title: "NPBS 2025: Biotechnology & Sustainability",
    institution: "St. Joseph's College (Autonomous)",
    category: ["CONFERENCES", "RESEARCH"],
    year: "2025",
    dateStr: "7 January 2025",
    description: "Certificate of Participation in the National Symposium on New Paradigms in Biotechnology and Sustainability.",
    verificationBadge: "NPBS 2025",
    documentType: "Participation Certificate",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/npbs-certificate.jpg",
    pdfUrl: "/assets/certificates/npbs-certificate.pdf"
  },
  {
    id: "cert-icmrbh-2024",
    title: "Modern Research in Biological Horizons (ICMRBH'24)",
    institution: "Bharathidasan College of Arts and Science",
    category: ["CONFERENCES", "RESEARCH"],
    year: "2024",
    dateStr: "9–10 July 2024",
    description: "Certificate of Participation at the International Conference on Modern Research in Biological Horizons.",
    verificationBadge: "ICMRBH'24 Participant",
    documentType: "Participation Certificate",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/biological-horizons.jpg",
    pdfUrl: "/assets/certificates/biological-horizons.pdf"
  },
  {
    id: "cert-dst-serb",
    title: "Empowering Rural Communities (DST-SERB Conference)",
    institution: "DST-SERB Sponsored Conference (ERC-IBSWMSE)",
    category: ["CONFERENCES", "BIOMEDICAL"],
    year: "2024",
    dateStr: "13–14 March 2024",
    description: "Certificate for presenting research on Biomedical Waste Management at the DST-SERB Sponsored International Conference.",
    verificationBadge: "DST-SERB Sponsored",
    documentType: "Participation Certificate",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    iconName: "FileCheck",
    imageUrl: "/assets/certificates/empowering-rural-communities.jpg",
    pdfUrl: "/assets/certificates/empowering-rural-communities.pdf"
  },
  {
    id: "cert-periyar-poster",
    title: "Revolutionising Health and Harvest: 3D Printing Poster",
    institution: "Periyar University",
    category: ["CONFERENCES", "RESEARCH"],
    year: "2023",
    dateStr: "7 September 2023",
    description: "Certificate of Presentation for the research poster on 'Waste Water Treatment Using 3D Printing Technology' at the International Seminar.",
    verificationBadge: "Periyar University Seminar",
    documentType: "Participation Certificate",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconName: "Presentation",
    imageUrl: "/assets/certificates/revolutionising-health-harvest.jpg",
    pdfUrl: "/assets/certificates/revolutionising-health-harvest.pdf"
  },
  {
    id: "cert-miccon-2023",
    title: "MICCON-23: Recent Advances in Microbiology",
    institution: "Madurai Kamaraj University",
    category: ["CONFERENCES"],
    year: "2023",
    dateStr: "16 September 2023",
    description: "Certificate of Participation in the National Conference on Contemporary & Future Perspectives of Microorganisms.",
    verificationBadge: "MKU Microbiology",
    documentType: "Participation Certificate",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/micon-23.jpg",
    pdfUrl: "/assets/certificates/micon-23.pdf"
  },
  {
    id: "cert-nss-camp",
    title: "National Service Scheme (NSS) Volunteer & Special Camp",
    institution: "NSS Unit, K.S. Rangasamy CAS",
    category: ["LEADERSHIP", "SOCIAL SERVICE"],
    year: "2024",
    dateStr: "1–7 March 2024 (Special Camp) & 2022–2024",
    description: "Certificate of Service for completing 2 years of active NSS volunteering, including the 7-day intensive rural community camp.",
    verificationBadge: "NSS Government of India",
    documentType: "NSS Special Camp",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    iconName: "Users",
    imageUrl: "/assets/certificates/nss-certificate.jpg",
    pdfUrl: "/assets/certificates/nss-certificate.pdf"
  },
  {
    id: "cert-scouts",
    title: "Bharat Scouts and Guides — Pravesh Training",
    institution: "Dharmapuri Educational District D.T.C.",
    category: ["LEADERSHIP", "SOCIAL SERVICE"],
    year: "2016",
    dateStr: "10–12 February 2016",
    description: "Certificate of Completion for Pravesh Training in the Bharat Scouts and Guides organization.",
    verificationBadge: "Bharat Scouts & Guides",
    documentType: "Training Certificate",
    badgeColor: "bg-violet-100 text-violet-800 border-violet-300",
    iconName: "Compass",
    imageUrl: "/assets/certificates/scout-certificate.jpg",
    pdfUrl: "/assets/certificates/scout-certificate.pdf"
  },
  {
    id: "cert-photography",
    title: "Creative Arts & Photography Certification",
    institution: "K.S. Rangasamy CAS",
    category: ["LEADERSHIP"],
    year: "2024",
    dateStr: "2024",
    description: "Recognition for creative photography and visual documentation skills applied during academic and institutional events.",
    verificationBadge: "Institutional Award",
    documentType: "Participation Certificate",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/photography-certificate.jpg",
    pdfUrl: "/assets/certificates/photography-certificate.pdf"
  },
  {
    id: "cert-world-coconut-day",
    title: "World Coconut Day Symposium & Competitions",
    institution: "K.S. Rangasamy CAS & Coconut Development Board",
    category: ["TRAINING", "SOCIAL SERVICE"],
    year: "2023",
    dateStr: "2 September 2023",
    description: "Certificate of Participation in the agricultural sustainability and biotechnology awareness event on World Coconut Day.",
    verificationBadge: "Agri-Biotech Meet",
    documentType: "Participation Certificate",
    badgeColor: "bg-lime-100 text-lime-800 border-lime-300",
    iconName: "Award",
    imageUrl: "/assets/certificates/world-coconut-day.jpg",
    pdfUrl: "/assets/certificates/world-coconut-day.pdf"
  }
];

export const LEADERSHIP_INFO = [
  {
    role: "National Service Scheme (NSS) Volunteer",
    period: "2022 – 2024",
    institution: "K.S. Rangasamy College of Arts & Science",
    icon: "HeartHandshake",
    description: "Dedicated 2 years to structured community service, health awareness drives, rural sanitation camps, and social welfare programs.",
    highlights: [
      "Completed 7-day intensive NSS Special Camp (1–7 March 2024)",
      "Coordinated village health camps, cleanliness initiatives, and tree plantation drives",
      "Demonstrated team collaboration and grassroots community engagement"
    ]
  },
  {
    role: "College Sports Team Captain",
    period: "2022 – 2025",
    institution: "K.S. Rangasamy College of Arts & Science",
    icon: "Trophy",
    description: "Led college sports contingents with discipline, stamina, and strategic leadership in collegiate tournaments.",
    highlights: [
      "Team Captain for Kabaddi squads in inter-departmental & collegiate meets",
      "Competitive athlete in Weightlifting disciplines",
      "Fostered athletic discipline, team spirit, and mental resilience"
    ]
  },
  {
    role: "Bharat Scouts and Guides",
    period: "February 2016",
    institution: "Dharmapuri Educational District",
    icon: "Compass",
    description: "Completed foundational Pravesh training instilling core values of civic preparedness, outdoor discipline, and ethical service.",
    highlights: [
      "Completed intensive 3-day District Training Camp (10–12 Feb 2016)",
      "Trained in first aid basics, field craft, and community service ethics"
    ]
  }
];

export const CAREER_PILLARS = [
  {
    title: "Biomedical Research",
    tagline: "Translational & Diagnostic Pathways",
    description: "Deepening knowledge of disease etiology, human physiology, and molecular pathology to contribute to life-saving diagnostic and therapeutic solutions.",
    icon: "Activity"
  },
  {
    title: "Biotechnology",
    tagline: "Cellular & Molecular Innovation",
    description: "Applying microbial, genetic, and enzymatic tools towards solving complex healthcare, agricultural, and environmental challenges.",
    icon: "Dna"
  },
  {
    title: "Drug Discovery",
    tagline: "Natural Compounds & Target Modeling",
    description: "Bridging computational bioinformatics screening with wet-lab experimental pharmacology to discover novel therapeutic candidates.",
    icon: "Pill"
  },
  {
    title: "Advanced Laboratory Research",
    tagline: "Precision & Rigor",
    description: "Mastering modern biomedical instrumentation, standardized protocols, assay optimization, and high-throughput experimental workflows.",
    icon: "Microscope"
  }
];
