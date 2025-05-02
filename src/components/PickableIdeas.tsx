'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PickableIdeasProps {
  ideas: string[];
  onDrop: (idea: string) => void;
}

const PickableIdeas: React.FC<PickableIdeasProps> = ({ ideas, onDrop }) => {
  const [isClient, setIsClient] = useState(false); // Client-side render flag
  const dropZoneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure this logic is only executed on the client side
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const handleDragEnd = (event: any, info: any, idea: string) => {
    const dropZone = dropZoneRef.current;
    if (dropZone) {
      const rect = dropZone.getBoundingClientRect();
      if (
        info.point.x >= rect.left &&
        info.point.x <= rect.right &&
        info.point.y >= rect.top &&
        info.point.y <= rect.bottom
      ) {
        onDrop(idea);
      }
    }
  };

  if (!isClient) return null; // Only render after client-side mount

  return (
    <div ref={dropZoneRef}>
      {ideas.map((idea) => (
        <motion.div
          key={idea}
          drag
          dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-grab rounded-full px-6 py-4 bg-purple-200 text-purple-800 font-semibold shadow-lg"
          onDragEnd={(event, info) => handleDragEnd(event, info, idea)}
        >
          {idea}
        </motion.div>
      ))}
    </div>
  );
};

export default PickableIdeas;
