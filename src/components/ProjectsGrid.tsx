'use client';

import React, { useState } from 'react';
import styles from './ProjectsGrid.module.css';


const projects = [
  {
    id: 1,
    title: "Aaryan's Personal Website",
    description: "Designed and developed a clean and modern personal website for a friend using HTML, CSS, and JavaScript. Focused on responsive UI and user experience.",
    tags: ['Web Development', 'UI/UX'],
    link: "https://github.com/RevaLaxmi/AaryanNagpal.github.io",
    image: "/id1.png"
  },
  {
    id: 2,
    title: "First Personal Website Draft",
    description: "My initial attempt at a personal website focusing on aerial hoop, pole, and silks. Built with HTML/CSS and JavaScript, hosted on GitHub Pages.",
    tags: ['Web Development', 'UI/UX'],
    link: "https://revalaxmi.github.io/RevaLaxmi/",
    image: "/id2.png"
  },
  {
    id: 3,
    title: "Current Personal Website",
    description: "Updated and improved version of my personal portfolio website with better visuals, cleaner code, and enhanced UI/UX.",
    tags: ['Web Development', 'UI/UX'],
    link: "", // Replace with actual current site if different
    image: "/id3.png"
  },
  {
    id: 4,
    title: "Aerial Silks, Pole & Hoop Site",
    description: "A niche website to showcase classes, certifications, and media related to aerial silks, pole, and lyra performances. Designed with elegance and clarity.",
    tags: ['Web Development', 'UI/UX'],
    link: "https://revalaxmi.github.io/AerialPole-Silks-Lyra/",
    image: "/id4.png"
  },
  {
    id: 5,
    title: "Elevate: Resume to Website",
    description: "Ongoing project that parses uploaded PDFs/resumes using NLP and generates static personal websites. Combines AI/ML and full-stack web development.",
    tags: ['AI/ML'],
    link: "https://github.com/RevaLaxmi/Elevate", // Replace if there's a newer repo
    image: "/id5.png"
  },
  {
    id: 6,
    title: "Valentine's Memory Game",
    description: "A fun, themed memory game with Valentine’s/Galentine’s Day vibes. Interactive UI with sweet animations and vanilla JS logic.",
    tags: ['UI/UX', 'App Development'],
    link: "https://valentines-memory-game.vercel.app/",
    image: "/id6.png"
  },
  {
    id: 7,
    title: "Object Tracker (Tacker)",
    description: "Built a custom object detection and tracking pipeline using YOLO and DeepSORT. Applied to drone video feeds and real-time footage.",
    tags: ['AI/ML'],
    link: "https://github.com/RevaLaxmi/Tracker",
    image: "/id7.jpg"
  },
  {
    id: 8,
    title: "Model Predictive Control (MPC)",
    description: "Implemented MPC for drone flight stabilization. Focus on managing noisy magnetometer data and trajectory correction using ML models.",
    tags: ['AI/ML'],
    link: "https://github.com/RevaLaxmi/MPC",
    image: "/id8.png"
  },
  {
    id: 9,
    title: "Rock Paper Scissors AI",
    description: "A real-time Rock Paper Scissors game using hand gesture recognition with OpenCV, YOLOv5, and DeepSORT. Includes a custom UI with live webcam feed and AI opponent.",
    tags: ['AI/ML'],
    link: "https://github.com/reva/rps-ai", // replace with actual
    image: "/id9.jpg"
  }
];

const categories = [
  { id: 'AI/ML', title: 'AI / ML', description: 'Projects related to Artificial Intelligence and Machine Learning.', image: '/aimlid.png' },
  { id: 'UI/UX', title: 'UI / UX', description: 'Design-focused projects and user experiences.', image: '/uiuxid.png' },
  { id: 'Web Development', title: 'Web Development', description: 'Frontend and backend web projects.', image: '/webdevid.png' },
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
