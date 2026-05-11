import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: "Full Stack Software Developer",
    company: "POSTAL CONSULTING Rühl GmbH",
    location: "Berlin, Germany",
    duration: "November 2025 – Present",
    points: [
      "Built custom ProcessWire CMS modules with role-based access and dynamic dashboard features.",
      "Integrated MySQL and Azure SQL databases for cross-platform data aggregation.",
      "Developed CSV/Azure SQL import pipelines with encoding normalization and schema adaptation.",
      "Automated deployments using Bitbucket Pipelines and git-ftp CI/CD workflows.",
      "Collaborated in Agile teams using Jira and maintained technical documentation in Confluence.",
      "Tech Stack: PHP 7/8, ProcessWire CMS, MySQL, Azure SQL, Azure Maps SDK, JavaScript, PDO, Git, Bitbucket, CI/CD.",
    ],
  },
  {
    role: "Software Developer",
    company: "Macom IT Solutions",
    location: "Kerala, India",
    duration: "July 2021 – May 2022",
    points: [
      "Developed server-side applications using ASP.NET, C#, and PL/SQL for the banking sector.",
      "Enhanced application performance, resolved bugs, and created SQL scripts.",
      "Built dynamic Crystal Reports to improve data analysis and client reporting.",
      "Worked in Agile/Scrum development teams.",
      "Implemented CI/CD workflows and testing pipelines.",
    ],
  },
  {
    role: "Guest Lecturer",
    company: "Govt. Women's Polytechnic College",
    location: "Kerala, India",
    duration: "June 2019 – March 2020",
    points: [
      "Taught Embedded Systems, Digital Electronics, and Software Development.",
      "Guided student projects in C, Python, and signal processing.",
    ],
  },
  {
    role: "Assistant Professor",
    company: "Focus Institute of Science and Technology",
    location: "Kerala, India",
    duration: "February 2019 – June 2019",
    points: [
      "Conducted lectures on Communication Engineering and Circuit Design.",
      "Assisted in laboratory and academic sessions for embedded systems and electronics.",
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
