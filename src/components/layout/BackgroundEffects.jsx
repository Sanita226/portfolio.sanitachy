import React, { useEffect, useState } from 'react';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-white via-emerald-50/40 to-slate-50">
      {/* Light Green Grid Overlay */}
      <div 
        className="absolute inset-0 grid-pattern opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" 
      />

      {/* Floating Emerald Ambient Blobs */}
      <div 
        className="absolute -top-32 left-1/4 w-[480px] h-[480px] bg-emerald-300/20 rounded-full blur-3xl animate-blob" 
      />
      <div 
        className="absolute top-20 right-1/4 w-[420px] h-[420px] bg-teal-200/25 rounded-full blur-3xl animate-blob [animation-delay:2s]" 
      />
      <div 
        className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-200/15 rounded-full blur-3xl animate-blob [animation-delay:4s]" 
      />
      <div 
        className="absolute bottom-10 right-1/3 w-[450px] h-[450px] bg-green-200/20 rounded-full blur-3xl animate-blob [animation-delay:6s]" 
      />

      {/* Interactive Cursor Spotlight */}
      {isPointerDevice && (
        <div
          className="absolute w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      {/* Noise Texture */}
      <div className="noise-overlay" />
    </div>
  );
}
