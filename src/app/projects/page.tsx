// src/app/projects/page.tsx

import React from 'react';
import ProjectsGrid from '@/components/ProjectsGrid';

export default function ProjectsPage() {
  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <div style={{ padding: '2rem' }}>
        <h1></h1> 
        <ProjectsGrid />
      </div>
    </div>
  );
}
