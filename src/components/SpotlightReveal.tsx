'use client';

import React, { useEffect, useState } from 'react';

const SpotlightReveal: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

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
        fontSize: '1.5rem',
        padding: '3rem',
      }}
    >
      {/* The color contrast circle */}
      <div
        style={{
            position: 'absolute',
            top: mousePosition.y - 100,
            left: mousePosition.x - 100,
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: 'white', // <-- change this
            mixBlendMode: 'difference',
            pointerEvents: 'none',
            zIndex: 2,
        }}
        />


      {/* The text content below it */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <p>Hey there, I'm Reva 👋</p>
        <p>This section changes color under your mouse.</p>
        <p>You're seeing a "color contrast circle" in action.</p>
        <p>✨ Cool, right?</p>
      </div>
    </div>
  );
};

export default SpotlightReveal;
