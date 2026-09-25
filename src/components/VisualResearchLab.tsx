import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  BiotechnologyIcon,
  BacterialDegradationIcon,
  DrugDiscoveryIcon,
  CancerResearchIcon,
  BiomedicalScienceIcon
} from './OriginalIcons';

export const VisualResearchLab: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>('Epigenetic Target');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const labNodes = [
    { id: '1', name: 'Plasmodium Epigenetic Protein', type: 'Epigenetic Target', x: 20, y: 30, icon: BiotechnologyIcon, desc: 'Histone modifying enzymes and chromatin remodeling targets in malaria parasites.' },
    { id: '2', name: 'Plastic-Degrading Strain', type: 'Microbial Isolate', x: 75, y: 25, icon: BacterialDegradationIcon, desc: 'Bacterial strain isolated from soil with potential polymer hydrolyzing activity.' },
    { id: '3', name: '3D Bio-Filter Matrix', type: 'Biomaterial Model', x: 30, y: 70, icon: BiomedicalScienceIcon, desc: 'Porous lattice fabricated via additive manufacturing for effluent adsorption.' },
    { id: '4', name: 'Natural Lead Compound', type: 'Phytochemical Screening', x: 80, y: 75, icon: DrugDiscoveryIcon, desc: 'Plant-derived bioactive compound evaluated for target binding affinity.' },
    { id: '5', name: 'Clinical Oncology Model', type: 'Translational Pathway', x: 50, y: 50, icon: CancerResearchIcon, desc: 'In-silico molecular docking and biomarker assessment in oncology therapeutics.' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with cyan molecular lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 110) * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p1.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const currentSelected = labNodes.find(n => n.type === activeItem) || labNodes[0];

  return (
    <section id="visual-lab" className="py-20 lg:py-28 bg-[#031525] text-[#F4FAFF] relative border-t border-[#00E5FF]/20 overflow-hidden">
      
      {/* Background Lab Grid & Canvas */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] font-mono text-xs font-semibold uppercase tracking-wider mb-2">
            <BiomedicalScienceIcon className="w-3.5 h-3.5 text-[#00E5FF]" color="#00E5FF" />
            <span>Interactive Research Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#F4FAFF] tracking-tight">
            Visual Research Lab
          </h2>
          <p className="text-[#A9C4D8] text-sm sm:text-base mt-1 max-w-2xl">
            Explore key molecular, microbial, and therapeutic nodes connecting Mariyappan's research and coursework exposures.
          </p>
        </div>

        {/* Interactive Lab Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Node Explorer Matrix */}
          <div className="lg:col-span-7 h-[360px] sm:h-[420px] rounded-3xl p-6 bg-[rgba(7,30,48,0.75)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] relative shadow-md overflow-hidden">
            <div className="absolute top-4 left-4 text-xs font-mono text-[#00E5FF] font-semibold">
              LAB_SANDBOX // CLICK TO INSPECT
            </div>

            {/* Interactive Floating Nodes */}
            {labNodes.map((node) => {
              const Icon = node.icon;
              const isSelected = activeItem === node.type;

              return (
                <motion.button
                  key={node.id}
                  onClick={() => setActiveItem(node.type)}
                  style={{ top: `${node.y}%`, left: `${node.x}%` }}
                  whileHover={{ scale: 1.08 }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl border backdrop-blur-md transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-[#02101F] border-[#00E5FF] text-[#F4FAFF] shadow-[0_0_20px_rgba(0,229,255,0.3)] ring-2 ring-[#00E5FF]/40'
                      : 'bg-[#071E30]/80 border-[#00E5FF]/20 text-[#A9C4D8] hover:border-[#00E5FF]/60'
                  }`}
                >
                  <Icon className="w-5 h-5 text-[#00E5FF]" color={isSelected ? '#00E5FF' : '#00B8D4'} />
                  <span className="text-xs font-heading font-bold hidden sm:inline text-[#F4FAFF]">
                    {node.name.split(' ')[0]}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping absolute -top-1 -right-1" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detailed Node Inspector */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-[rgba(7,30,48,0.85)] backdrop-blur-md border border-[rgba(0,229,255,0.25)] shadow-md flex flex-col justify-between h-[360px] sm:h-[420px]">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#00E5FF]/20">
                <span className="font-mono text-xs text-[#00E5FF] uppercase tracking-wider font-semibold">
                  NODE SPECIFICATION
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#02101F] text-[#00E5FF] border border-[#00E5FF]/30 font-semibold">
                  {currentSelected.type}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F4FAFF] mb-2 leading-tight">
                {currentSelected.name}
              </h3>

              <p className="text-[#A9C4D8] text-sm leading-relaxed mb-6">
                {currentSelected.desc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#02101F]/90 border border-[#00E5FF]/20 text-xs font-mono text-[#A9C4D8] space-y-1">
              <div className="flex justify-between">
                <span>RELEVANCE:</span>
                <span className="text-[#00E5FF] font-bold">Postgraduate & Fellowship Focus</span>
              </div>
              <div className="flex justify-between">
                <span>METHODOLOGY:</span>
                <span className="text-[#00B8D4] font-bold">Biochemical / In-silico</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

