'use client';

import React from 'react';
import FlipCard from './FlipCard';

const bigTextStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: '800',
  fontFamily: 'Arial Black, sans-serif',
  color: 'white',
};

const topLeftLabel = (
  <div
    style={{
      ...bigTextStyle,
      position: 'absolute',
      top: '20px',
      left: '25px',
      color: 'white',
      lineHeight: 1.1,
    }}
  >
    <div style={{ fontSize: '2rem', margin: 0 }}>What have I been upto?</div>
    <div style={{ fontSize: '3.5rem', margin: 0 }}></div>
  </div>
);

const centerLabel = (
  <div
    style={{
      ...bigTextStyle,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: 'white',
    }}
  >
    <div style={{ fontSize: '9.3rem', margin: 0, lineHeight: 1 }}>NOW</div>
    <div style={{ fontSize: '4.2rem', margin: 0, lineHeight: 1 }}>WORKING</div>
    <div style={{ fontSize: '15.7rem', margin: 0, lineHeight: 0.8 }}>ON</div>
  </div>
);



const bottomLeftLabel = (
  <div
    style={{
      ...bigTextStyle,
      position: 'absolute',
      bottom: '25px',
      left: '25px',
      color: 'white',
      lineHeight: 1.1,
    }}
  >
    <div style={{ fontSize: '8.2rem', margin: 0 }}>NOT</div>
    <div
      style={{
        fontSize: '3rem',
        margin: 0,
        letterSpacing: '0.03rem',
      }}
    >
      JUST TECH
    </div>
  </div>
);



const centerLabel2 = (
  <div
    style={{
      ...bigTextStyle,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: 'white', // Optional: ensure it's visible on dark backgrounds
      fontSize: '2.8rem', // Increased font size
      lineHeight: 1.1,   // Optional: tweak spacing between potential lines
    }}
  >
    TOOLS I LOVE
  </div>
);




const bottomRightLabel = (
  <div
    style={{
      ...bigTextStyle,
      position: 'fixed',
      bottom: '5px',
      right: '10px',
      color: 'white',
      fontSize: '2rem',
      fontWeight: '800',
      cursor: 'pointer',
      userSelect: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      zIndex: 1000,
      textAlign: 'center',
    }}
    onClick={() => {
      window.location.href = 'mailto:your.email@example.com'; // change to your email
    }}
  >
    Contact info & my CV
  </div>
);




const HomeContent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: 'calc(100vh - 60px)',
        gap: '1rem',
        padding: '1rem',
        boxSizing: 'border-box',
        marginTop: '-11px',
      }}
    >
      {/* Column 1 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard
          front={
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {topLeftLabel}
            </div>
          }
          back="Lately, I've been knee-deep in drone guts and machine learning models. From reducing sensor noise in flight data to building intelligent computer vision pipelines, my days have been full of code, propellers, and the occasional caffeine-fueled debugging marathon. On the side, I've been freelancing—crafting custom apps and websites for clients who want tech that doesn't just work but wows. Whether it's security-focused backend logic or buttery-smooth UI design, I’ve been shipping pixel-perfect experiences that fly (sometimes literally)."
          style={{ width: '100%', height: '250px', color:'white' }}
        />
        <FlipCard
          front={
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {bottomLeftLabel}
            </div>
          }
          back="When I'm not writing code or hunting down bugs, I’m either choreographing an aerial routine or teaching a pole or ballet class. I also freelance as a designer and developer—building apps and websites for creatives, entrepreneurs, and curious minds. My weekends often include teaching movement, brainstorming UI over iced coffee, and convincing my son that robots can be cool friends. Life’s a mix of dance, design, and development—and I wouldn’t have it any other way."
          style={{ width: '100%', height: '605px', color:'white' }}
        />
      </div>

      {/* Column 2 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard
          front={centerLabel}
          back="I'm cooking... something delicious (I hope)"
          style={{ width: '100%', height: '580px' , color:'white'}}
        />
        <FlipCard
          front={centerLabel2}
          back="Obsidian for deep dive knowledge maps, Figma for designs and wireframing, VS Code (aka home) and finally ChatGPT for planning"
          style={{ width: '100%', height: '275px' , color:'white'}}
        />
      </div>

      {/* Column 3 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard
          front={
            <img
              src="/revaimg.jpg"
              alt="Reva Chauhan"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          }
          back={
            <img
              src="/revacartoon.jpeg"
              alt="Reva Chauhan"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          }
          style={{ width: '100%', height: '750px' , color:'white'}}
        />

        <FlipCard
          front={
            <div style={{ ...bigTextStyle, textAlign: 'center' }}>
              {bottomRightLabel}
            </div>
          }
          back="Instagram, WhatsApp, Phone Number"
          style={{ width: '100%', height: '105px' , color:'white'}}
        />
      </div>
    </div>
  );
};

export default HomeContent;
