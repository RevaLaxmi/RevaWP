'use client';

import React from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = async (main: any) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: 'transparent', // Ensure background is transparent
          },
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: '#ffffff',
          },
          links: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            outModes: {
              default: 'bounce',
            },
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
          },
        },
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw', // Full width of the viewport
        height: '100vh', // Full height of the viewport
        zIndex: -1, // Ensure it's behind all content
      }}
    />
  );
};

export default ParticlesBackground;
