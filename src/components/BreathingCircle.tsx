'use client';

import React from 'react';
import styles from '@/components/BreathingCircle.module.css';

interface BreathingCircleProps {
  breathing: 'inhale' | 'exhale' | 'rest';
}

const BreathingCircle: React.FC<BreathingCircleProps> = ({ breathing }) => {
  let scale = 1;

  // Adjust size based on the breathing state
  if (breathing === 'inhale') {
    scale = 1.5; // Make the circle bigger when inhaling
  } else if (breathing === 'exhale') {
    scale = 1; // Reset the size when exhaling
  } else {
    scale = 1; // Keep the size at rest
  }

  return (
    <div
      className={styles.circle}
      style={{
        transform: `scale(${scale})`, // Dynamically scale the circle
        transition: 'transform 1s ease', // Smooth transition for scaling
      }}
    />
  );
};

export default BreathingCircle;
