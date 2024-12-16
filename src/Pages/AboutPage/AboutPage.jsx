import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <p className="about-summary">
        As a passionate Full Stack Engineer, I specialize in creating dynamic and user-centric web applications using the MERN (MongoDB, Express.js, React, Node.js) stack. I have a knack for translating design concepts into fully responsive, visually compelling, and highly functional user interfaces. With a background in teaching and software development, I bring a versatile approach to problem-solving and collaboration.
      </p>
      
      <h2 className="about-highlights-title">Key Highlights</h2>
      <ul className="about-highlights-list">
        <li>Strong proficiency in React.js, Node.js, and RESTful APIs.</li>
        <li>Experience in both educational and industry roles, with a history of successful project delivery.</li>
        <li>Driven by continuous learning and committed to staying at the forefront of web development trends.</li>
      </ul>
    </div>
  );
};

export default AboutPage;