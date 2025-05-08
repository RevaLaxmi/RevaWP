'use client';

import React, { useState } from 'react';

// Example project data
const projects = [
  { id: 1, title: "AI Chatbot", description: "An AI-powered chatbot built with NLP.", tags: ['AI', 'Machine Learning'], link: "https://github.com/ai-chatbot" },
  { id: 2, title: "Personal Portfolio", description: "A personal portfolio website using React.", tags: ['Web', 'UI/UX'], link: "https://github.com/portfolio" },
  { id: 3, title: "E-commerce App", description: "An e-commerce application with React and Node.js.", tags: ['Web', 'Backend'], link: "https://github.com/e-commerce" },
  { id: 4, title: "Blockchain DApp", description: "A decentralized application built with Ethereum and Solidity.", tags: ['Blockchain', 'Web'], link: "https://github.com/blockchain-dapp" },
  { id: 5, title: "AI Image Classifier", description: "A deep learning model for image classification.", tags: ['AI', 'Deep Learning'], link: "https://github.com/ai-image-classifier" },
  { id: 6, title: "Weather App", description: "A weather forecasting app using React and OpenWeather API.", tags: ['Web', 'UI/UX'], link: "https://github.com/weather-app" },
  { id: 7, title: "Blockchain DApp", description: "A decentralized application built with Ethereum and Solidity.", tags: ['Blockchain', 'Web'], link: "https://github.com/blockchain-dapp" },
  { id: 8, title: "AI Image Classifier", description: "A deep learning model for image classification.", tags: ['AI', 'Deep Learning'], link: "https://github.com/ai-image-classifier" },
  { id: 9, title: "Weather App", description: "A weather forecasting app using React and OpenWeather API.", tags: ['Web', 'UI/UX'], link: "https://github.com/weather-app" }
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
    <div style={{ position: 'relative', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', overflow: 'hidden' }}>
      {/* Background Particles */}
      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Filter Bar */}
        <div style={{ marginBottom: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              style={{
                padding: '10px 20px',
                border: '1px solid #FFB6C1', // Pink border for unselected tags
                backgroundColor: selectedTag === tag ? '#FFB6C1' : 'white', // Pink background for selected tag
                color: selectedTag === tag ? 'white' : '#333',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = selectedTag === tag ? '#FFB6C1' : '#FFB6C1')} // Hover pink shade
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = selectedTag === tag ? '#FFB6C1' : 'white')} // Revert to white when not selected
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '32px',
          justifyItems: 'center',
        }}>
          {filterProjects(selectedTag).map(project => (
            <div
              key={project.id}
              style={{
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                width: '100%',
                maxWidth: '320px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgb(255, 182, 193)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ marginBottom: '10px', color: '#555' }}>{project.description}</p>
              <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                <strong>Tags:</strong> {project.tags.join(', ')}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#FFB6C1', textDecoration: 'none', fontWeight: 'bold' }}>
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
