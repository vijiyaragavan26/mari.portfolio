import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]');
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setCursorVariant('text');
      } else if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setCursorText('');
        setCursorVariant('hover');
      } else {
        setCursorText('');
        setCursorVariant('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-sky-500 dark:bg-sky-400 mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: cursorVariant === 'hover' ? 0.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Scientific Orbital Ring / Contextual Badge */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-sky-500/60 dark:border-sky-400/60 flex items-center justify-center backdrop-blur-[1px]"
        animate={{
          x: cursorVariant === 'text' ? mousePosition.x - 36 : mousePosition.x - 18,
          y: cursorVariant === 'text' ? mousePosition.y - 36 : mousePosition.y - 18,
          width: cursorVariant === 'text' ? 72 : cursorVariant === 'hover' ? 44 : 36,
          height: cursorVariant === 'text' ? 72 : cursorVariant === 'hover' ? 44 : 36,
          backgroundColor: cursorVariant === 'text' ? 'rgba(14, 165, 233, 0.9)' : 'rgba(14, 165, 233, 0.08)',
          borderColor: cursorVariant === 'text' ? '#38bdf8' : 'rgba(14, 165, 233, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-semibold tracking-wider text-white uppercase text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};
