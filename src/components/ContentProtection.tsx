import React, { useEffect, useState } from 'react';
import { Shield, Eye, Lock } from 'lucide-react';

export const ContentProtection: React.FC = () => {
  const [warningMessage, setWarningMessage] = useState<string | null>(null);
  const [isScreenProtected, setIsScreenProtected] = useState<boolean>(false);

  const showNotice = (msg: string) => {
    setWarningMessage(msg);
    setTimeout(() => {
      setWarningMessage(null);
    }, 2800);
  };

  useEffect(() => {
    // 1. Prevent Right-Click / Context Menu across entire page
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showNotice('Right-click is disabled. This portfolio is protected in View-Only mode.');
      return false;
    };

    // 2. Clear clipboard if screenshot key is pressed
    const clearClipboardOnScreenshot = () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('Protected Academic Portfolio: Screenshots are restricted.')
          .catch(() => {});
      }
    };

    // 3. Intercept Keyboard Shortcuts for Screenshots, Printing, Saving, Copying, DevTools
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // PrintScreen key
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        setIsScreenProtected(true);
        clearClipboardOnScreenshot();
        setTimeout(() => setIsScreenProtected(false), 2500);
        showNotice('Screenshots are restricted. Viewing mode is read-only.');
        return false;
      }

      // Windows Snipping Tool (Win+Shift+S) or Mac screenshot (Cmd+Shift+3/4/5)
      if (e.shiftKey && (isCtrlOrCmd || e.altKey) && (e.key === 's' || e.key === 'S' || e.key === '3' || e.key === '4' || e.key === '5')) {
        setIsScreenProtected(true);
        clearClipboardOnScreenshot();
        setTimeout(() => setIsScreenProtected(false), 2500);
        showNotice('Screen capture shortcut detected. Screenshots are restricted.');
        return false;
      }

      // Ctrl+P (Print)
      if (isCtrlOrCmd && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        showNotice('Printing is disabled. This portfolio is in View-Only mode.');
        return false;
      }

      // Ctrl+S (Save page)
      if (isCtrlOrCmd && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        showNotice('Saving is disabled. This portfolio is in View-Only mode.');
        return false;
      }

      // Ctrl+U (View Source)
      if (isCtrlOrCmd && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        showNotice('View source is disabled.');
        return false;
      }

      // Ctrl+C (Copy) outside editable inputs
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      const isInput = targetTag === 'input' || targetTag === 'textarea';
      if (isCtrlOrCmd && (e.key === 'c' || e.key === 'C') && !isInput) {
        e.preventDefault();
        showNotice('Copying content is disabled in Read & View mode.');
        return false;
      }

      // F12 or Ctrl+Shift+I / J / C (DevTools)
      if (
        e.key === 'F12' ||
        (isCtrlOrCmd && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
        showNotice('Developer inspection is disabled for protected academic content.');
        return false;
      }
    };

    // 4. Also listen on KeyUp for PrintScreen (Windows often fires PrintScreen on keyup)
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        setIsScreenProtected(true);
        clearClipboardOnScreenshot();
        setTimeout(() => setIsScreenProtected(false), 2500);
        showNotice('Screenshots are restricted.');
      }
    };

    // 5. Prevent Dragging Images
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // 6. Shield activation when browser window loses focus (Snipping Tool, external screenshot utility)
    const handleBlur = () => {
      setIsScreenProtected(true);
    };

    const handleFocus = () => {
      // Small delay on refocus to prevent snipping tool capture from revealing content prematurely
      setTimeout(() => {
        setIsScreenProtected(false);
      }, 300);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        setIsScreenProtected(true);
      } else {
        setTimeout(() => {
          setIsScreenProtected(false);
        }, 300);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <>
      {/* Subtle Security Diagonal Watermark repeating across entire page */}
      <div 
        className="fixed inset-0 pointer-events-none z-[30] select-none overflow-hidden opacity-[0.035] flex flex-wrap gap-24 p-12 -rotate-12"
        aria-hidden="true"
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <div key={i} className="text-xs font-mono tracking-widest text-[#00E5FF] whitespace-nowrap">
            MARIYAPPAN V • PROTECTED VIEW ONLY • DO NOT REPRODUCE
          </div>
        ))}
      </div>

      {/* Screen Capture Shield: Blackout overlay when screen capture utility or blur is active */}
      {isScreenProtected && (
        <div className="fixed inset-0 z-[999999] bg-[#020B16] flex flex-col items-center justify-center p-6 text-center select-none pointer-events-none transition-all duration-100">
          <div className="w-20 h-20 rounded-3xl bg-[#031525] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-5 shadow-[0_0_35px_rgba(0,229,255,0.35)] animate-pulse">
            <Lock className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-[#F4FAFF]">
            Protected Academic Content
          </h3>
          <p className="text-sm text-[#A9C4D8] mt-2 max-w-md leading-relaxed">
            Mariyappan V&apos;s research portfolio is in strictly protected View &amp; Read Only mode. Screenshots, screen recordings, and downloading are restricted.
          </p>
          <div className="mt-4 px-3.5 py-1.5 rounded-full bg-[#071E30] border border-[#00E5FF]/30 text-[#00E5FF] text-xs font-mono font-semibold">
            Return focus to the browser window to resume reading
          </div>
        </div>
      )}

      {/* Floating View-Only Mode Status Badge */}
      <div 
        className="fixed bottom-4 right-4 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#031525]/90 backdrop-blur-md border border-[#00E5FF]/30 text-[#00E5FF] shadow-[0_4px_16px_rgba(0,0,0,0.4)] text-[11px] font-mono pointer-events-none select-none"
        title="Official Academic Portfolio • Protected View Mode"
      >
        <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
        <Eye className="w-3.5 h-3.5" />
        <span className="font-semibold tracking-wider">VIEW &amp; READ ONLY • PROTECTED</span>
      </div>

      {/* Warning Notice Toast */}
      {warningMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000000] px-5 py-3 rounded-2xl bg-[#031525] border border-[#00E5FF]/50 text-[#F4FAFF] shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,229,255,0.3)] flex items-center gap-3 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-200 select-none pointer-events-none">
          <div className="p-1 rounded-lg bg-[#00E5FF]/10 text-[#00E5FF]">
            <Shield className="w-4 h-4" />
          </div>
          <span>{warningMessage}</span>
        </div>
      )}
    </>
  );
};
