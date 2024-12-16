import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Eventure</h3>
        <p>Tech Stack: ReactJS, Node.js, ExpressJS, MongoDB, JWT</p>
        <p>Built a responsive event discovery and ticket booking app with secure user authentication.</p>
        <a href="GitHub_Link" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="Demo_Link" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      <div className="project-card">
        <h3>Trend Mart</h3>
        <p>Tech Stack: ReactJS, CSS, Mock API</p>
        <p>Created an online store app with category filtering, product displays, and CRUD operations.</p>
        <a href="GitHub_Link" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="Demo_Link" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      <div className="project-card">
        <h3>Filling the Blanks Game</h3>
        <p>Tech Stack: HTML, CSS, JavaScript, DOM Manipulation, OOP</p>
        <p>Developed an interactive browser-based game where players drag letters to complete missing words within a time limit.</p>
        <a href="GitHub_Link" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="Demo_Link" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </section>
  );
};

export default Projects;
