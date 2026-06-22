import React, { useState } from 'react';
import './Projects.css';
import projectImage1 from '../assets/project-1.svg';
import projectImage2 from '../assets/project-2.svg';
import projectImage3 from '../assets/project-3.svg';
import projectImage4 from '../assets/project-4.svg';
import projectImage5 from '../assets/project-5.svg';
import projectImage6 from '../assets/project-6.svg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'frontend', 'fullstack', 'mobile'];

  const projectsData = [
    {
      id: 1,
      title: 'Novus SaaS Dashboard',
      category: 'fullstack',
      description: 'A comprehensive cloud intelligence dashboard offering real-time system monitoring, user behavior telemetry, and granular billing logs.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'WebSockets'],
      gradColor: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
      image: projectImage1,
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Aether Cryptography Hub',
      category: 'frontend',
      description: 'An interactive Web3 tracker showing live token price valuations, historic ledger records, and secure cryptographic seed encryptions.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Three.js'],
      gradColor: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      image: projectImage2,
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'VibeChat Messaging App',
      category: 'fullstack',
      description: 'Ultra-low latency socket communication server supporting end-to-end user encryption, media shares, and interactive status boards.',
      technologies: ['React', 'Express.js', 'Socket.io', 'Redis', 'Postgres'],
      gradColor: 'linear-gradient(135deg, #ec4899 0%, #06b6d4 100%)',
      image: projectImage3,
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/example'
    },
    {
      id: 4,
      title: 'Kora E-Commerce Portal',
      category: 'mobile',
      description: 'Fully responsive mobile application with fast catalog indexing, secure stripe integration, and micro-animations for card additions.',
      technologies: ['React Native', 'Redux', 'Stripe API', 'GraphQL'],
      gradColor: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)',
      image: projectImage4,
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/example'
    },
    {
      id: 5,
      title: 'Helios Design Kit',
      category: 'frontend',
      description: 'Modular SVG component ecosystem specializing in complex floating charts, glass buttons, and scroll-bound timeline grids.',
      technologies: ['React', 'Framer Core', 'CSS Variables', 'Storybook'],
      gradColor: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
      image: projectImage5,
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/example'
    },
    {
      id: 6,
      title: 'Terra Journey Planner',
      category: 'mobile',
      description: 'Interactive geological route mapping engine for hikers featuring local coordinates storage and collaborative trip timelines.',
      technologies: ['React', 'MapBox API', 'PWA Sync', 'IndexedDB'],
      gradColor: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      image: projectImage6,
      demoLink: 'https://example.com',
      codeLink: 'https://github.com/example'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>Recent Creations</span> My Projects
        </h2>

        {/* Categories Selector */}
        <div className="projects-filter glass-card">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'fullstack' ? 'Full Stack' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-card animate-fade-in">
              
              {/* Card visual banner */}
              <div 
                className="project-banner"
                style={{ background: project.gradColor }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="project-image"
                />
                <div className="banner-pattern"></div>
                <span className="project-category-badge">{project.category}</span>
              </div>

              {/* Card Details */}
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech tags */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Card actions */}
                <div className="project-links">
                  <a href={project.demoLink} className="proj-link demo-btn" target="_blank" rel="noreferrer">
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="link-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <a href={project.codeLink} className="proj-link code-btn" target="_blank" rel="noreferrer">
                    <span>Source Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="link-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
