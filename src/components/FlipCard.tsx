// src/components/FlipCard.tsx
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
  style?: React.CSSProperties;
};

const FlipCard: React.FC<FlipCardProps> = ({ front, back, style }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
    ...style, // dynamic sizing comes from parent
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={handleClick} style={cardStyle}>
        {front}
      </div>
      <div onClick={handleClick} style={{ ...cardStyle, backgroundColor: "#e0e0e0" }}>
        {back}
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
