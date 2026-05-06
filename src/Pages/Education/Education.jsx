import React from 'react';
import './Education.css';

const educationData = [
  {
    title: "Full Stack Web Development",
    institution: "Ironhack",
    location: "Berlin, Germany",
    duration: "September 2024 – January 2025",
    description: "Focused on MERN stack development, responsive design, and full-cycle application development.",
  },
  {
    title: "Master of Technology – Communication Engineering",
    institution: "Royal College of Engineering & Technology",
    location: "Kerala, India",
    duration: "April 2016 – April 2018",
    description: "Achieved a CGPA of 8.82. Gained expertise in communication protocols and digital electronics.",
  },
  {
    title: "Bachelor of Technology – Electronics & Communication Engineering",
    institution: "Universal Engineering College",
    location: "Kerala, India",
    duration: "April 2012 – April 2016",
    description: "Graduated with a CGPA of 8.09. Gained hands-on experience with circuit design and embedded systems.",
  },
];

const certificates = [
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Ironhack",
    duration: "September 2024 – January 2025",
    link: "https://www.credential.net/ff2d2d10-f652-42e5-aaa5-25425fa90c80#acc.AaFWvckP",
  },
  {
    title: "ISTQB Foundation Level (CTFL) V4.0",
    issuer: "Udemy",
    duration: "June 11, 2024",
    link: "https://ude.my/UC-a1b93d1f-b445-4c46-bb56-7714b9334a68",
  },
  {
    title: "Laravel & PHP Mastery: Build 5 Real-World Projects",
    issuer: "Udemy",
    duration: "Oct. 28, 2025",
    link: "https://ude.my/UC-624077eb-0d5d-4512-8066-f2e4b3633e4a",
  },
];

const Education = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="section-label">My academic background</p>
        <h2 className="section-title">Education</h2>

        <div className="education-grid">
          {educationData.map((edu, i) => (
            <div key={i} className="edu-card">
              <div className="edu-card-top">
                <span className="edu-icon">🎓</span>
                <span className="edu-duration">{edu.duration}</span>
              </div>
              <h3 className="edu-title">{edu.title}</h3>
              <p className="edu-institution">{edu.institution} · {edu.location}</p>
              <p className="edu-desc">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="cert-section">
          <h3 className="cert-heading">Certificates & Achievements</h3>
          <div className="cert-list">
            {certificates.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-info">
                  <span className="cert-icon">🏆</span>
                  <div>
                    <p className="cert-title">{cert.title}</p>
                    <p className="cert-issuer">{cert.issuer} · {cert.duration}</p>
                  </div>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
