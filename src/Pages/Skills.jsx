import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-category">
        <h3>Frontend</h3>
        <p>HTML, CSS, JavaScript, React, Material UI, Bootstrap, Responsive Design</p>
      </div>
      <div className="skill-category">
        <h3>Backend</h3>
        <p>Node.js, Express.js, RESTful APIs, JWT Authentication, PostgreSQL, MongoDB</p>
      </div>
      <div className="skill-category">
        <h3>Development Tools</h3>
        <p>Git, GitHub, Postman, Scrum, Jasmine, TypeScript, API Communication (Axios, Fetch)</p>
      </div>
      <div className="skill-category">
        <h3>Soft Skills</h3>
        <p>Attention to Detail, Problem Solving, Teamwork, Adaptability</p>
      </div>
    </section>
  );
};

export default Skills;
