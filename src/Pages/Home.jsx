import React from 'react';
import resume from '../assets/resume.pdf';

const Home = () => {
  return (
    <section id="home">
      <h1>Hi, I’m Geethu Pandath Ramesh </h1>
      <h2>a Full Stack Engineer!</h2>
      <p>Turning ideas into impactful web applications with the power of the MERN stack.</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">
        <button>View My Resume</button>
      </a>
    </section>
  );
};

export default Home;
