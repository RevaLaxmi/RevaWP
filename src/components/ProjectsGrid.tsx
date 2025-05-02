// src/components/ProjectsGrid.tsx

'use client'; // Add this line at the top

import React, { useState } from 'react';

// Example project data
const projects = [
  { id: 1, title: "AI Chatbot", description: "An AI-powered chatbot built with NLP.", tags: ['AI', 'Machine Learning'], link: "https://github.com/ai-chatbot" },
  { id: 2, title: "Personal Portfolio", description: "A personal portfolio website using React.", tags: ['Web', 'UI/UX'], link: "https://github.com/portfolio" },
  { id: 3, title: "E-commerce App", description: "An e-commerce application with React and Node.js.", tags: ['Web', 'Backend'], link: "https://github.com/e-commerce" },
  { id: 4, title: "Blockchain DApp", description: "A decentralized application built with Ethereum and Solidity.", tags: ['Blockchain', 'Web'], link: "https://github.com/blockchain-dapp" },
  { id: 5, title: "AI Image Classifier", description: "A deep learning model for image classification.", tags: ['AI', 'Deep Learning'], link: "https://github.com/ai-image-classifier" },
  { id: 6, title: "Weather App", description: "A weather forecasting app using React and OpenWeather API.", tags: ['Web', 'UI/UX'], link: "https://github.com/weather-app" },
];

const availableTags = ['All', 'AI', 'Web', 'UI/UX', 'Machine Learning', 'Blockchain', 'Backend', 'Deep Learning'];

const ProjectsGrid: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filterProjects = (tag: string) => {
    if (tag === 'All') {
      return projects;
    }
    return projects.filter(project => project.tags.includes(tag));
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      {/* Filter Bar */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        {availableTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              backgroundColor: selectedTag === tag ? '#4CAF50' : '#f0f0f0',
              color: selectedTag === tag ? 'white' : 'black',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filterProjects(selectedTag).map(project => (
          <div
            key={project.id}
            style={{
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'white',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div>
              <strong>Tags: </strong>{project.tags.join(', ')}
            </div>
            <a href={project.link} target="_blank" style={{ color: '#007bff', textDecoration: 'none' }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
