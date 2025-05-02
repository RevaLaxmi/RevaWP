'use client';

import React, { useState } from 'react';

const SpotlightReveal: React.FC = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: '100vh',
        background: 'white',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '2rem',
          textAlign: 'center',
          color: 'black',
          maskImage: `radial-gradient(circle at ${pos.x}% ${pos.y}%, black 100px, transparent 150px)`,
          WebkitMaskImage: `radial-gradient(circle at ${pos.x}% ${pos.y}%, black 100px, transparent 150px)`,
          transition: 'mask-image 0.1s, -webkit-mask-image 0.1s',
        }}
      >
        <p>✨ I’m Reva — a dancer, developer, and dreamer.</p>
        <p>🛠️ I build tools that blend beauty with logic.</p>
        <p>📍 Hover to discover more about me.</p>
      </div>
    </div>
  );
};

export default SpotlightReveal;
