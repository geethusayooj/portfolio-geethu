import React from 'react';
import './AboutPage.css';

const highlights = [
  "Strong expertise in PHP, C# (.NET), JavaScript, React.js, Node.js, and RESTful APIs.",
  "Hands-on experience building real-time geolocation and IoT tracking systems using Azure Functions, Azure SQL, Azure Maps, and cloud-native architectures.",
  "Experienced in full-stack development — from backend APIs and database design to responsive frontend interfaces.",
  "Skilled in CI/CD workflows, deployment automation, monitoring, and cloud infrastructure using Azure, Git, Bitbucket Pipelines, and PowerShell.",
  "Background spanning both academia and industry, with experience delivering scalable applications and mentoring students in software and embedded systems.",
  "Passionate about continuous learning, modern web technologies, cloud computing, and IoT-driven solutions.",
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
              I'm a passionate Full-Stack Developer specializing in building scalable web applications,
              cloud-native services, and real-time tracking platforms. My experience spans modern web
              development, Azure cloud technologies, IoT integrations, and geolocation-based systems.
            </p>
            <p className="about-summary" style={{ marginTop: '16px' }}>
              I enjoy developing efficient backend architectures, interactive user experiences, and
              serverless cloud solutions using technologies like PHP, .NET, React, Node.js, Azure
              Functions, SQL databases, and JavaScript.
            </p>
            <p className="about-summary" style={{ marginTop: '16px' }}>
              With a background in both software development and teaching, I bring strong
              problem-solving abilities, adaptability, and collaborative teamwork to every project.
              Currently based in Berlin and open to new opportunities in Frontend, Backend, and Cloud.
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
