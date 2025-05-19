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
    THINGS I LOVE
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
      fontSize: '2.6rem',
      fontWeight: '800',
      fontFamily: 'Arial Black, sans-serif',
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
    Contact Me
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
          back="My journey includes diverse roles — from an AI engineer at Johnnette Technologies working on intelligent drone systems, to a web/UI developer at Heads Up For Tails designing pet-focused interfaces. I’ve done automation engineering at DataPod and data analysis for Deutsche Bank, which gave me a solid blend of tech, design, and problem-solving. These experiences shaped how I build: intentional, user-focused, and deeply adaptive across domains."
          style={{ width: '100%', height: '250px', color:'white' }}
        />
        <FlipCard
          front={
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              {bottomLeftLabel}
            </div>
          }
          back="Outside of code, I’m a certified aerial silks and pole instructor, a ballet dancer, and a licensed drone pilot. These aren't side notes — they’re core to how I think. Training in movement has taught me balance, flow, and persistence. Performing and teaching helps me communicate clearly, improvise under pressure, and bring a deep sense of embodiment into my design and dev work. I move between the studio and the screen — both ground me."
          style={{ width: '100%', height: '605px', color:'white' }}
        />
      </div>

      {/* Column 2 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard
          front={centerLabel}
          back="A4"
          style={{ width: '100%', height: '580px' , color:'white'}}
        />
        <FlipCard
          front={centerLabel2}
          back="Here's my information!"
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
          back="Lately, I’ve been building Elevate, a personal resume site generator that uses AI to turn any uploaded CV into a sleek professional website — complete with custom templates and auto-filled content. I’m also designing Peng, a dating app UI inspired by Hinge but with playful animations and intentionality baked into the UX. When I’m not designing UIs, I’m experimenting with AI drone flight systems, combining real-time object tracking and predictive control for smoother autonomous flying."
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
