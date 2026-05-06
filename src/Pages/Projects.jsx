import React from 'react';
import './Projects.css';

const projects = [
  {
    name: "Eventure",
    description: "A responsive event discovery and ticket booking app with secure user authentication and real-time data.",
    stack: ["ReactJS", "Node.js", "ExpressJS", "MongoDB", "JWT"],
    github: "https://github.com/geethusayooj/Eventure-frontend",
    live: "https://eventure-eventdiscoverapp.netlify.app/",
  },
  {
    name: "Trend Mart",
    description: "An online store with category filtering, product displays, and full CRUD operations using a mock API.",
    stack: ["ReactJS", "CSS", "Mock API"],
    github: "https://github.com/geethusayooj/TrendMart-react",
    live: "https://trend-mart-onlinestore.netlify.app/",
  },
  {
    name: "Art Gallery",
    description: "A full-stack application for viewing and managing artworks and artists in an art gallery, with a TypeScript backend.",
    stack: ["React", "TypeScript", "ExpressJS", "PostgreSQL", "Prisma"],
    github: "https://github.com/geethusayooj/art-gallery-app-frontend",
    live: "https://art-gallery-app.netlify.app/",
  },
  {
    name: "Filling the Blanks Game",
    description: "An interactive browser-based game where players drag letters to complete missing words within a time limit.",
    stack: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "OOP"],
    github: "https://github.com/geethusayooj/Filling-the-blanks-Game-challenge",
    live: "https://geethusayooj.github.io/Filling-the-blanks-Game-challenge/",
  },
];

const Projects = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects built across the full stack.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  GitHub
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
