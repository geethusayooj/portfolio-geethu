import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';
import './Home.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="home-content">
          <p className="home-greeting">Hi, I'm</p>
          <h1 className="home-name">Geethu Pandath Ramesh</h1>
          <h2 className="home-role">Full Stack Engineer</h2>
          <p className="home-desc">
            I develop scalable full-stack applications, cloud services, and real-time systems using React, Node.js, PHP, .NET, and Azure technologies.
          </p>
          <div className="home-actions">
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn-primary">
              View Resume
            </a>
            <Link to="/projects" className="btn-outline">
              See My Work
            </Link>
          </div>
          <div className="home-links">
            <a href="https://github.com/geethusayooj" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="divider">·</span>
            <a href="https://www.linkedin.com/in/geethu-pandath-ramesh-078288174" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="divider">·</span>
            <a href="mailto:geethuramesh2.de@gmail.com">
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
