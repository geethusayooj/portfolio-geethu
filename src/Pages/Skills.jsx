import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TypeScript", "Material UI", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "Axios / Fetch", "Scrum / Agile", "Jasmine", "Vite"],
  },
  {
    category: "Soft Skills",
    icon: "💡",
    skills: ["Attention to Detail", "Problem Solving", "Teamwork", "Adaptability", "Communication"],
  },
];

const Skills = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build full-stack web applications.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
