import React, { useEffect, useState } from 'react';

export default function BackgroundEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Grid Pattern with Radial Gradient Mask */}
      <div 
        className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" 
      />

      {/* Top Ambient Glow Blurs */}
      <div 
        className="absolute -top-40 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob" 
      />
      <div 
        className="absolute -top-20 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob [animation-delay:2s]" 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl animate-blob [animation-delay:4s]" 
      />

      {/* Interactive Cursor Spotlight for Mouse Devices */}
      {isPointerDevice && (
        <div
          className="absolute w-80 h-80 rounded-full bg-emerald-500/5 blur-2xl transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
          }}
        />
      )}

      {/* Subtle Noise Texture */}
      <div className="noise-overlay" />
    </div>
  );
}
