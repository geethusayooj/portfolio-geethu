import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Eventure</h3>
        <p>Tech Stack: ReactJS, Node.js, ExpressJS, MongoDB, JWT</p>
        <p>Built a responsive event discovery and ticket booking app with secure user authentication.</p>
        <a href="https://github.com/geethusayooj/Eventure-frontend" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="https://eventure-eventdiscoverapp.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      <div className="project-card">
        <h3>Trend Mart</h3>
        <p>Tech Stack: ReactJS, CSS, Mock API</p>
        <p>Created an online store app with category filtering, product displays, and CRUD operations.</p>
        <a href="https://github.com/geethusayooj/TrendMart-react" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="https://trend-mart-onlinestore.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      <div className="project-card">
        <h3>Art-Gallery</h3>
        <p>Tech Stack: TypeScript, PostgreSQL, Prisma</p>
        <p>A full-stack web application allowing users to view and manage artworks and artists in an art gallery. Frontend: React, TypeScript Backend: ExpressJS, PostgreSQL, Prisma, TypeScript</p>
        <a href="https://github.com/geethusayooj/art-gallery-app-frontend" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="https://art-gallery-app.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
      <div className="project-card">
        <h3>Filling the Blanks Game</h3>
        <p>Tech Stack: HTML, CSS, JavaScript, DOM Manipulation, OOP</p>
        <p>Developed an interactive browser-based game where players drag letters to complete missing words within a time limit.</p>
        <a href="https://github.com/geethusayooj/Filling-the-blanks-Game-challenge" target="_blank" rel="noopener noreferrer">View Project</a> | 
        <a href="https://geethusayooj.github.io/Filling-the-blanks-Game-challenge/" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </section>
  );
};

export default Projects;
