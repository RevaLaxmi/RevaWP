'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';


// Dynamically import PickableIdeas component with `ssr: false`
// This ensures it's only loaded on the client-side
const PickableIdeas = dynamic(() => import('./PickableIdeas'), { ssr: false });

const ideas = [
  'App Idea',
  'Web Dev Help',
  'AI Consultation',
  'Just Vibes',
  'Design Feedback',
];

const PickMyBrain: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false); // Flag to ensure client-side rendering

  useEffect(() => {
    setIsClient(true); // Enable after the component is mounted on the client side
  }, []);

  const handleDrop = (idea: string) => {
    setSelectedIdea(idea);
  };

  if (!isClient) return null; // Prevent rendering until client-side JS is loaded

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#fdfcfb] relative p-6">
      <h1 className="text-4xl font-bold mb-10">🧠 Pick My Brain</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 relative z-10">
        <PickableIdeas ideas={ideas} onDrop={handleDrop} />
      </div>

      <div
        id="drop-zone"
        className="w-[280px] h-[140px] border-4 border-dashed border-purple-400 rounded-2xl flex items-center justify-center text-center text-purple-500 text-lg font-semibold transition-all hover:bg-purple-50 z-0"
      >
        Drop Here to Start a Chat 💬
      </div>

      {selectedIdea && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-xl p-6 shadow-xl max-w-lg w-full border border-purple-100"
        >
          <h2 className="text-2xl font-bold mb-4">Let's talk about: {selectedIdea}</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <textarea
              placeholder="Tell me more..."
              className="w-full border border-gray-300 p-2 rounded-md h-32"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default PickMyBrain;
