'use client';

import React, { useEffect, useState } from 'react';

const neonStyle: React.CSSProperties = {
  color: '#DE5D83',
};

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
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      {/* Spotlight Circle */}
      <div
        style={{
          position: 'absolute',
          top: mousePosition.y - 150,
          left: mousePosition.x - 150,
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: 'white',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Left Panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem',
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: 'left', maxWidth: '80%' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>Hi, I'm Reva</h1>
          <p style={{ fontSize: '1.2rem' }}>Here's a bit about me...</p>
        </div>
      </div>

      {/* Right Panel */}
      <div
        style={{
          flex: 1,
          backgroundColor: 'white',
          color: 'black',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: '500px', fontSize: '1rem', lineHeight: '1.6', textAlign: 'left' }}>
          <p>
            Hi! I’m Reva — a curious mix of <strong style={neonStyle}>code</strong>,{' '}
            <strong style={neonStyle}>creativity</strong>, and a whole lot of <em style={neonStyle}>Ctrl+Z</em>.
          </p>

          <p>
            I’m still <strong style={neonStyle}>fairly new</strong> to the world of computer science, but I’ve thrown myself into it with the same
            intensity I bring to the <em style={neonStyle}>dance floor</em> — and trust me, that’s{' '}
            <u style={neonStyle}>no small amount</u>. I’m learning to build things —{' '}
            <strong style={neonStyle}>apps, websites, AI experiments</strong> — and while I’m still figuring a lot of it out,{' '}
            <strong style={neonStyle}><em style={neonStyle}>something exciting is definitely cooking behind the scenes</em></strong>.
          </p>

          <p>
            When I’m not at my desk debugging something mysterious, you’ll find me in the{' '}
            <strong style={neonStyle}>studio</strong>. I’m a{' '}
            <strong style={neonStyle}><em style={neonStyle}>professional dancer</em></strong> and{' '}
            <strong style={neonStyle}><em style={neonStyle}>certified aerial athlete</em></strong> — I teach{' '}
            <strong style={neonStyle}>ballet</strong>, <strong style={neonStyle}>pole</strong>, and{' '}
            <strong style={neonStyle}>lyra (hoop)</strong>, leading both{' '}
            <u style={neonStyle}>group classes</u> and <u style={neonStyle}>private sessions</u>. Movement has taught me{' '}
            <em style={neonStyle}>discipline</em>, <em style={neonStyle}>grace</em>, and how to{' '}
            <em style={neonStyle}>stay grounded while flying</em> — all of which sneak their way into my approach to tech.
          </p>

          <p>
            I also work with <strong style={neonStyle}>personal clients</strong>, helping them{' '}
            <u style={neonStyle}>shape and sharpen</u> their ideas for apps and websites. Whether it’s{' '}
            <em style={neonStyle}>brainstorming the big picture</em> or{' '}
            <em style={neonStyle}>refining the small details</em>, I love{' '}
            <strong style={neonStyle}>guiding people</strong> through the early stages of building something real.
          </p>

          <p>
            I may be <em style={neonStyle}>early in my journey</em>, but I’m here to{' '}
            <strong style={neonStyle}>learn boldly</strong>, <strong style={neonStyle}>create freely</strong>, and help others do the same.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotlightReveal;
