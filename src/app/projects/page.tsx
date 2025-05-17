// src/app/projects/page.tsx

import React from 'react';
import ProjectsGrid from '@/components/ProjectsGrid'; // Ensure the path is correct

// keeping <h1> for some gap between the header and the selection of the projects pages. 
export default function ProjectsPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1></h1> 
      <ProjectsGrid />
    </div>
  );
}
