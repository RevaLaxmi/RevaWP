'use client';

import React from 'react';
import ReactCardFlip from 'react-card-flip';

interface FlipCardProps {
  front: React.ReactNode; // instead of `string`
  back: React.ReactNode;
  style?: React.CSSProperties;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, style }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        onClick={handleClick}
        style={{
          ...style,
          backgroundColor: '#FFB6C1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {front}
      </div>
      <div
        onClick={handleClick}
        style={{
          ...style,
          backgroundColor: '#FFB6C1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {back}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
