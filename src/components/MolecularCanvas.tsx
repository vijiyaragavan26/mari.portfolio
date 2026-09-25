import React, { useEffect, useRef } from 'react';

interface MolecularCanvasProps {
  className?: string;
}

export const MolecularCanvas: React.FC<MolecularCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Molecular Lattice Nodes
    const numNodes = 32;
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      pulseOffset: number;
    }

    const nodes: Node[] = [];
    const vibrantColors = ['#0284C7', '#059669', '#6366F1', '#0EA5E9', '#10B981', '#0D9488'];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2.5 + 2,
        color: vibrantColors[Math.floor(Math.random() * vibrantColors.length)],
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const numBasePairs = 36;

    const render = () => {
      time += 0.014;
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background molecular lattice & connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.x += n1.vx;
        n1.y += n1.vy;

        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        const dxMouse = n1.x - mouseX;
        const dyMouse = n1.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 130) {
          const force = (130 - distMouse) / 130;
          n1.x += (dxMouse / distMouse) * force * 0.9;
          n1.y += (dyMouse / distMouse) * force * 0.9;
        }

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const alpha = (1 - dist / 115) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        const pulse = Math.sin(time * 2.5 + n1.pulseOffset) * 0.8;
        ctx.arc(n1.x, n1.y, Math.max(1.5, n1.radius + pulse), 0, Math.PI * 2);
        ctx.fillStyle = n1.color;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      // 2. Draw 3D Rotating DNA Helix in center/right
      const centerX = width * 0.55 + (mouseX - width / 2) * 0.08;
      const startY = height * 0.08;
      const endY = height * 0.92;
      const helixHeight = endY - startY;
      const amplitude = Math.min(width * 0.2, 95);

      const strand1Points: { x: number; y: number; z: number; color: string }[] = [];
      const strand2Points: { x: number; y: number; z: number; color: string }[] = [];

      for (let i = 0; i < numBasePairs; i++) {
        const progress = i / (numBasePairs - 1);
        const y = startY + progress * helixHeight;
        const angle = time + progress * Math.PI * 4.2;

        const x1 = centerX + Math.cos(angle) * amplitude;
        const z1 = Math.sin(angle); // -1 to +1

        const x2 = centerX + Math.cos(angle + Math.PI) * amplitude;
        const z2 = Math.sin(angle + Math.PI);

        strand1Points.push({
          x: x1,
          y: y,
          z: z1,
          color: '#0284C7' // Deep scientific sky
        });

        strand2Points.push({
          x: x2,
          y: y,
          z: z2,
          color: '#059669' // Biotech emerald
        });

        // Base-pair connecting rungs
        const alpha = 0.25 + ((z1 + 1) / 2) * 0.55;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 116, 139, ${alpha * 0.55})`;
        ctx.lineWidth = Math.max(1.2, (z1 + 1.2) * 1.6);
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();

        // Hydrogen bond center node
        const midX = (x1 + x2) / 2;
        ctx.beginPath();
        ctx.arc(midX, y, 2.5 * ((z1 + 2) / 2), 0, Math.PI * 2);
        ctx.fillStyle = '#6366F1';
        ctx.fill();
      }

      // Draw Strands
      const drawStrand = (points: { x: number; y: number; z: number; color: string }[]) => {
        for (let i = 0; i < points.length; i++) {
          const pt = points[i];
          const radius = Math.max(2, (pt.z + 1.5) * 3.2);
          const alpha = 0.45 + ((pt.z + 1) / 2) * 0.55;

          if (i > 0) {
            const prev = points[i - 1];
            ctx.beginPath();
            ctx.strokeStyle = pt.color;
            ctx.lineWidth = Math.max(1.8, (pt.z + 1.2) * 2.4);
            ctx.globalAlpha = alpha;
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.stroke();
            ctx.globalAlpha = 1.0;
          }

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = pt.color;
          ctx.globalAlpha = alpha;
          ctx.shadowColor = 'rgba(14, 165, 233, 0.4)';
          ctx.shadowBlur = pt.z > 0 ? 8 : 0;
          ctx.fill();
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1.0;
        }
      };

      drawStrand(strand1Points);
      drawStrand(strand2Points);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-auto cursor-crosshair"
      />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};
