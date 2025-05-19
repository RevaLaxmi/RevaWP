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
            alignItems: 'center', // centers horizontally within the flex child
            justifyContent: 'center', // centers vertically within the full height
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
            justifyContent: 'center', // vertical centering
            alignItems: 'center', // horizontal left alignment
            zIndex: 1,
        }}
        >
        <div style={{ maxWidth: '500px', fontSize: '1rem', lineHeight: '1.6', textAlign: 'left' }}>
        <p>
            Hi! I’m Reva — a curious mix of <strong>code</strong>, <strong>creativity</strong>, and a whole lot of <em>Ctrl+Z</em>.
        </p>

        <p>
            I’m still <strong>fairly new</strong> to the world of computer science, but I’ve thrown myself into it with the same 
            intensity I bring to the <em>dance floor</em> — and trust me, that’s <u>no small amount</u>. I’m learning to build things — 
            <strong>apps, websites, AI experiments</strong> — and while I’m still figuring a lot of it out, 
            <strong><em>something exciting is definitely cooking behind the scenes</em></strong>.
        </p>

        <p>
            When I’m not at my desk debugging something mysterious, you’ll find me in the <strong>studio</strong>. 
            I’m a <strong><em>professional dancer</em></strong> and <strong><em>certified aerial athlete</em></strong> — 
            I teach <strong>ballet</strong>, <strong>pole</strong>, and <strong>lyra (hoop)</strong>, leading both 
            <u>group classes</u> and <u>private sessions</u>. Movement has taught me <em>discipline</em>, 
            <em>grace</em>, and how to <em>stay grounded while flying</em> — all of which sneak their way into my 
            approach to tech.
        </p>

        <p>
            I also work with <strong>personal clients</strong>, helping them <u>shape and sharpen</u> their ideas for apps 
            and websites. Whether it’s <em>brainstorming the big picture</em> or <em>refining the small details</em>, 
            I love <strong>guiding people</strong> through the early stages of building something real.
        </p>

        <p>
            I may be <em>early in my journey</em>, but I’m here to <strong>learn boldly</strong>, <strong>create freely</strong>, and help 
            others do the same.
        </p>
        </div>


        </div>


    </div>
  );
};

export default SpotlightReveal;
