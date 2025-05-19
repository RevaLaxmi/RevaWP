'use client';

import React, { useState } from 'react';
import styles from './ProjectsGrid.module.css';

const projects = [
  { id: 1, title: "AI Chatbot", description: "An AI-powered chatbot built with NLP.", tags: ['AI/ML'], link: "https://github.com/ai-chatbot", image: "/webdev.png" },
  { id: 2, title: "Personal Portfolio", description: "A personal portfolio website using React.", tags: ['UI/UX'], link: "https://github.com/portfolio", image: "/webdev.png" },
  { id: 3, title: "E-commerce App", description: "An e-commerce application with React and Node.js.", tags: ['Web Development'], link: "https://github.com/e-commerce", image: "/webdev.png" },
  { id: 4, title: "AI Chatbot", description: "An AI-powered chatbot built with NLP.", tags: ['AI/ML'], link: "https://github.com/ai-chatbot", image: "/webdev.png" },
  { id: 5, title: "Personal Portfolio", description: "A personal portfolio website using React.", tags: ['UI/UX'], link: "https://github.com/portfolio", image: "/webdev.png" },
  { id: 6, title: "E-commerce App", description: "An e-commerce application with React and Node.js.", tags: ['Web Development'], link: "https://github.com/e-commerce", image: "/webdev.png" },
  { id: 7, title: "AI Chatbot", description: "An AI-powered chatbot built with NLP.", tags: ['AI/ML'], link: "https://github.com/ai-chatbot", image: "/webdev.png" },
  { id: 8, title: "Personal Portfolio", description: "A personal portfolio website using React.", tags: ['UI/UX'], link: "https://github.com/portfolio", image: "/webdev.png" },
  { id: 9, title: "E-commerce App", description: "An e-commerce application with React and Node.js.", tags: ['Web Development'], link: "https://github.com/e-commerce", image: "/webdev.png" },
  // add more projects ...
];

const categories = [
  { id: 'AI/ML', title: 'AI / ML', description: 'Projects related to Artificial Intelligence and Machine Learning.', image: '/webdev.png' },
  { id: 'UI/UX', title: 'UI / UX', description: 'Design-focused projects and user experiences.', image: '/webdev.png' },
  { id: 'Web Development', title: 'Web Development', description: 'Frontend and backend web projects.', image: '/webdev.png' },
];

const ProjectsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const filteredProjects = selectedCategory
    ? projects.filter(project => project.tags.includes(selectedCategory))
    : [];

  if (!selectedCategory) {
    return (
      <div className={styles.container}>
        <div className={styles.categoriesGrid}>
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={styles.categoryCard}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className={styles.categoryImage}
              />
              <h2>{cat.title}</h2>
              <p style={{ color: '#555' }}>{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={styles.backButton}
      >
        ← Back to Categories
      </button>

      <h1 style={{ marginBottom: 20 }}>{selectedCategory} Projects</h1>

      <div className={styles.projectsGrid}>
        {filteredProjects.length === 0 ? (
          <p>No projects found in this category.</p>
        ) : (
          filteredProjects.map(project => {
            const isActive = activeCardId === project.id;
            return (
              <div
                key={project.id}
                className={`${styles.projectCard} ${isActive ? styles.active : ''}`}
                onMouseEnter={() => setActiveCardId(project.id)}
                onMouseLeave={() => setActiveCardId(null)}
                onClick={() => setActiveCardId(isActive ? null : project.id)}
              >
                {!isActive && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                )}

                {isActive && (
                  <div className={styles.projectDetails}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectTags}>
                      <strong>Tags:</strong> {project.tags.join(', ')}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      View Project →
                    </a>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProjectsGrid;
