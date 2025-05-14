'use client';

import React from 'react';
import ReactCardFlip from 'react-card-flip';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  style?: React.CSSProperties;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back, style }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const isText = (content: React.ReactNode) =>
    typeof content === 'string' || typeof content === 'number';

  const getCardStyle = (content: React.ReactNode) => ({
    ...style,
    backgroundColor: '#FFB6C1',
    display: 'flex',
    alignItems: isText(content) ? 'center' : 'initial',
    justifyContent: isText(content) ? 'center' : 'initial',
    borderRadius: '20px',
    cursor: 'pointer',
    padding: isText(content) ? '1.5rem' : 0,
    textAlign: isText(content) ? 'center' : 'initial',
    lineHeight: isText(content) ? '1.1' : 'initial',
    boxSizing: 'border-box',
    overflow: 'hidden',
  });

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} style={getCardStyle(front)}>
        {front}
      </div>
      <div onClick={handleClick} style={getCardStyle(back)}>
        {back}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
