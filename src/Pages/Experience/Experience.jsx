import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Junior Assistant IT",
    company: "Macom IT Solutions",
    location: "Kerala, India",
    duration: "July 2021 – May 2022",
    points: [
      "Developed server-side applications using ASP.NET, C#, and PL/SQL for the banking sector.",
      "Enhanced application performance, resolved bugs, and created SQL scripts.",
      "Built dynamic Crystal Reports to improve data analysis and client reporting.",
    ],
  },
  {
    role: "Guest Lecturer",
    company: "Govt. Women's Polytechnic College",
    location: "Kerala, India",
    duration: "June 2019 – March 2020",
    points: [
      "Taught core technical subjects including Computer Engineering, Digital Electronics, and Microprocessors.",
    ],
  },
  {
    role: "Assistant Professor",
    company: "Focus Institute of Science and Technology",
    location: "Kerala, India",
    duration: "February 2019 – June 2019",
    points: [
      "Conducted lectures on Communication Engineering and Circuit Design.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Royal College of Engineering and Technology",
    location: "Kerala, India",
    duration: "January 2018 – April 2018",
    points: [
      "Conducted practical lab sessions focusing on circuit design and PCB soldering techniques.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Where I've worked</p>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} · {exp.location}</p>
                  </div>
                  <span className="exp-duration">{exp.duration}</span>
                </div>
                <ul className="exp-points">
                  {exp.points.map((point, j) => (
                    <li key={j} className="exp-point">
                      <span className="exp-bullet" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
