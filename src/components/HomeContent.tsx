'use client';

import React from 'react';
import FlipCard from './FlipCard';

const HomeContent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: 'calc(100vh - 60px)', // Adjust this value according to your navigation bar height
        gap: '1rem',
        padding: '1rem',
        boxSizing: 'border-box',
        marginTop: '-11px', // Push content down from the navbar
      }}
    >
      {/* Column 1 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard front="Where I’ve Been" back="My journey includes diverse roles — from an AI engineer at Johnnette Technologies working on intelligent drone systems, to a web/UI developer at Heads Up For Tails designing pet-focused interfaces. I’ve done automation engineering at DataPod and data analysis for Deutsche Bank, which gave me a solid blend of tech, design, and problem-solving. These experiences shaped how I build: intentional, user-focused, and deeply adaptive across domains." style={{ width: '100%', height: '250px' }} />
        <FlipCard front="Not Just Tech" back="Outside of code, I’m a certified aerial silks and pole instructor, a ballet dancer, and a licensed drone pilot. These aren't side notes — they’re core to how I think. Training in movement has taught me balance, flow, and persistence. Performing and teaching helps me communicate clearly, improvise under pressure, and bring a deep sense of embodiment into my design and dev work. I move between the studio and the screen — both ground me." style={{ width: '100%', height: '605px' }} />
      </div>

      {/* Column 2 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard
          front={
            <img
              src="/revaimg.jpg"
              alt="Q4 Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px', // Rounded corners added here
              }}
            />
          }
          back="A4"
          style={{ width: '100%', height: '580px' }}
        />
        <FlipCard front="Things I love" back="Heres my information!" style={{ width: '100%', height: '275px' }} />
      </div>

      {/* Column 3 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem'  }}>
        <FlipCard front="Now Working On" back="Lately, I’ve been building Elevate, a personal resume site generator that uses AI to turn any uploaded CV into a sleek professional website — complete with custom templates and auto-filled content. I’m also designing Peng, a dating app UI inspired by Hinge but with playful animations and intentionality baked into the UX. When I’m not designing UIs, I’m experimenting with AI drone flight systems, combining real-time object tracking and predictive control for smoother autonomous flying." style={{ width: '100%', height: '750px' }} />
        <FlipCard front="Contact me" back="Instagram, whatsapp, phone number" style={{ width: '100%', height: '105px' }} />
      </div>
    </div>
  );
};

export default HomeContent;
