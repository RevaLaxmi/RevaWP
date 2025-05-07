// WorkSection.tsx

import React from 'react';

const projects = [
  {
    title: 'Elevate (Resume Site)',
    description: 'A personal resume website that auto-generates from a user’s uploaded CV.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Peng (Dating App UI)',
    description: 'A dating app UI inspired by Hinge, with sleek animations.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Drone AI Flight',
    description: 'AI-based drone flight with object detection and tracking.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'AR Pole Trainer',
    description: 'An augmented reality pole training app to help improve technique.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

export default function WorkSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, index) => (
        <div key={index} className="work-card relative group overflow-hidden bg-black rounded-lg shadow-lg">
          <div className="split-container flex h-full">
            {/* Left Side: Title and brief description */}
            <div className="left-side p-4 flex items-center justify-center text-white">
              <h3 className="text-xl font-semibold">{project.title}</h3>
            </div>

            {/* Right Side: Image preview */}
            <div className="right-side relative w-1/2 flex items-center justify-center transition-all ease-in-out duration-300">
              <img className="w-full h-full object-cover" src={project.imageUrl} alt={project.title} />
            </div>
          </div>

          {/* Hover Effect: Expand Left Side */}
          <div className="hover-details absolute inset-0 bg-black opacity-90 transition-all ease-in-out duration-300 group-hover:left-0">
            <div className="flex justify-center items-center h-full">
              <p className="text-white text-lg">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
