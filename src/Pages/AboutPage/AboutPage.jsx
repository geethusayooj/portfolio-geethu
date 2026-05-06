import React from 'react';
import './AboutPage.css';

const highlights = [
  "Strong proficiency in React.js, Node.js, Express.js, and RESTful APIs.",
  "Hands-on experience with the full MERN stack — from database design to UI development.",
  "Background spanning both education and industry, with a track record of delivering projects end-to-end.",
  "Committed to continuous learning and staying current with web development trends.",
];

const AboutPage = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Get to know me</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-summary">
              I'm a passionate Full Stack Engineer specialising in creating dynamic, user-centric
              web applications with the MERN stack. I have a strong eye for translating design
              concepts into responsive, visually compelling, and highly functional interfaces.
            </p>
            <p className="about-summary" style={{ marginTop: '16px' }}>
              With a background in both teaching and software development, I bring a versatile
              approach to problem-solving and team collaboration. I'm based in Berlin, Germany and
              open to new opportunities.
            </p>
          </div>

          <div className="about-highlights">
            <h3 className="highlights-heading">Key Highlights</h3>
            <ul className="highlights-list">
              {highlights.map((item, i) => (
                <li key={i} className="highlight-item">
                  <span className="highlight-check">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
