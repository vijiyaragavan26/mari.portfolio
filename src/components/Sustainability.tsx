import React from 'react';
import { motion } from 'framer-motion';
import { 
  BacterialDegradationIcon,
  BiotechnologyIcon,
  CheckCircleNodeIcon
} from './OriginalIcons';

export const Sustainability: React.FC = () => {
  return (
    <section id="sustainability" className="py-16 lg:py-24 bg-[#031525] relative border-t border-[#00E5FF]/20 text-[#F4FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#06243A] via-[#071E30] to-[#02101F] text-[#F4FAFF] overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.1)] border border-[rgba(0,229,255,0.25)]">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Mission Text */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#02101F] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider">
                <BacterialDegradationIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
                <span>Sustainability Beyond the Lab</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold leading-tight text-[#F4FAFF]">
                Rooted in Earth: <br />
                <span className="text-[#00E5FF]">
                  Sustainable Farming & Organic Principles
                </span>
              </h2>

              <p className="text-[#F4FAFF] text-sm sm:text-base leading-relaxed max-w-2xl font-medium">
                "Involved in sustainable farming to support organic food production and family agricultural activities."
              </p>

              <p className="text-xs sm:text-sm text-[#A9C4D8] leading-relaxed max-w-2xl">
                Connecting soil microbiology and agricultural biotechnology with hands-on organic farming practices — fostering a deep respect for natural ecosystems, resource stewardship, and sustainable food cycles.
              </p>

              {/* 3 Core Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 backdrop-blur-xs flex items-center gap-2.5">
                  <CheckCircleNodeIcon className="w-4 h-4 text-[#00E5FF] shrink-0" color="#00E5FF" />
                  <span className="text-xs font-semibold text-[#F4FAFF]">Organic Cultivation</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 backdrop-blur-xs flex items-center gap-2.5">
                  <CheckCircleNodeIcon className="w-4 h-4 text-[#00B8D4] shrink-0" color="#00B8D4" />
                  <span className="text-xs font-semibold text-[#F4FAFF]">Resource Stewardship</span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-2xl bg-[#02101F]/80 border border-[#00E5FF]/20 backdrop-blur-xs flex items-center gap-2.5">
                  <CheckCircleNodeIcon className="w-4 h-4 text-[#00E5FF] shrink-0" color="#00E5FF" />
                  <span className="text-xs font-semibold text-[#F4FAFF]">Soil Bio-Health</span>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Bio-Bridge Diagram */}
            <div className="lg:col-span-4 p-6 rounded-3xl bg-[#02101F]/90 border border-[#00E5FF]/25 backdrop-blur-md text-center space-y-3 shadow-md">
              <span className="font-mono text-[11px] text-[#00E5FF] font-bold tracking-wider uppercase block">
                THE BIO-AGRICULTURE NEXUS
              </span>
              <div className="flex flex-col items-center gap-2 py-2">
                <div className="px-4 py-2 rounded-xl bg-[#071E30] text-[#00E5FF] font-heading font-bold text-xs border border-[#00E5FF]/40 w-full shadow-xs">
                  Biotechnology Principles
                </div>
                <span className="text-xs text-[#A9C4D8] font-mono">↓ Applied Knowledge</span>
                <div className="px-4 py-2 rounded-xl bg-[#071E30] text-[#00B8D4] font-heading font-bold text-xs border border-[#00B8D4]/40 w-full shadow-xs">
                  Organic & Family Farming
                </div>
                <span className="text-xs text-[#A9C4D8] font-mono">↓ Sustainable Impact</span>
                <div className="px-4 py-2 rounded-xl bg-[#071E30] text-[#F4FAFF] font-heading font-bold text-xs border border-[#00E5FF]/20 w-full shadow-xs">
                  Ecological Harmony & Food Safety
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

