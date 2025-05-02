'use client';

import React, { useEffect, useState } from 'react';

const SpotlightReveal: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 }); // start off-screen

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        backgroundColor: 'white',
        color: 'black',
        overflow: 'hidden',
      }}
    >
      {/* The text layer, hidden by default */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          padding: '3rem',
          fontSize: '1.5rem',
          backgroundColor: 'black',
          color: 'white',
          maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 100%)`,
          transition: 'mask-image 0.1s ease',
        }}
      >
        <p>Hey there, I'm Reva 👋</p>
        <p>This section lights up as you explore it with your mouse.</p>
        <p>You're reading this through a "contrast circle" effect.</p>
        <p>✨ Neat, right?</p>
      </div>

      {/* Optional: white background for fallback */}
      <div style={{ padding: '3rem', fontSize: '1.5rem', opacity: 0 }}>
        <p>Fallback text if masking is unsupported</p>
      </div>
    </div>
  );
};

export default SpotlightReveal;

