import React from 'react';
import { motion } from 'framer-motion';
import { 
  LaboratoryResearchIcon, 
  ScientificCommunicationIcon, 
  BioinformaticsIcon, 
  BiotechnologyIcon, 
  BiomedicalScienceIcon
} from './OriginalIcons';
import { usePortfolio } from '../context/PortfolioContext';

export const Skills: React.FC = () => {
  const { skills } = usePortfolio();
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical':
        return LaboratoryResearchIcon;
      case 'FileText':
        return ScientificCommunicationIcon;
      case 'Laptop':
        return BioinformaticsIcon;
      case 'Camera':
        return BiotechnologyIcon;
      default:
        return BiomedicalScienceIcon;
    }
  };

  const getBadgeStyle = (descriptor: string) => {
    switch (descriptor) {
      case 'Core Academic':
        return 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30';
      case 'Laboratory Technique':
        return 'bg-[#00B8D4]/15 text-[#00B8D4] border-[#00B8D4]/30';
      case 'Coursework Certified':
        return 'bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]/40';
      case 'Methodological Exposure':
        return 'bg-[#02101F] text-[#A9C4D8] border-[#00E5FF]/20';
      default:
        return 'bg-[#071E30] text-[#A9C4D8] border-[#00E5FF]/20';
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#031525] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BioinformaticsIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Academic & Practical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Categorized Skills & Tooling
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Documented competencies organized by scientific discipline and validated through academic coursework, peer presentations, and laboratory exposure.
          </p>
        </div>

        {/* 4 Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);

            return (
              <motion.div
                key={cat.categoryName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl p-6 sm:p-8 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md hover:border-[#00E5FF]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#00E5FF]/20">
                    <div className="w-12 h-12 rounded-2xl bg-[#02101F] border border-[#00E5FF]/30 flex items-center justify-center shadow-2xs">
                      <Icon className="w-7 h-7 text-[#00E5FF]" color="#00E5FF" secondaryColor="#00B8D4" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#F4FAFF]">
                        {cat.categoryName}
                      </h3>
                      <p className="text-xs text-[#A9C4D8]">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 flex flex-col justify-between group hover:border-[#00E5FF]/60 transition-colors shadow-2xs"
                      >
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <span className="font-semibold text-xs sm:text-sm text-[#F4FAFF]">
                            {skill.name}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between gap-1 mt-1">
                          <span className="text-[10px] text-[#A9C4D8] truncate">
                            {skill.nature}
                          </span>
                          <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full border ${getBadgeStyle(skill.levelDescriptor)}`}>
                            {skill.levelDescriptor}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-5 pt-3 border-t border-[#00E5FF]/20 flex items-center justify-between text-[11px] font-mono text-[#A9C4D8] font-medium">
                  <span>{cat.skills.length} Documented Competencies</span>
                  <span className="text-[#00E5FF]">Validated Taxonomy</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

