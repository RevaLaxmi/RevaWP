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
        marginTop: '40px', // Push content down from the navbar
      }}
    >
      {/* Column 1 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FlipCard front="Q1" back="A1" style={{ width: '100%', height: '350px' }} />
        <FlipCard front="Q2" back="A2" style={{ width: '100%', height: '250px' }} />
        <FlipCard front="Q3" back="A3" style={{ width: '100%', height: '190px' }} />
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
                borderRadius: '8px', // Rounded corners added here
              }}
            />
          }
          back="A4"
          style={{ width: '100%', height: '530px' }}
        />
        <FlipCard front="Q5" back="A5" style={{ width: '100%', height: '275px' }} />
      </div>

      {/* Column 3 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <FlipCard front="Q6" back="A6" style={{ width: '100%', height: '820px' }} />
      </div>
    </div>
  );
};

export default HomeContent;
