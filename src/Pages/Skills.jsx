import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Responsive Design", "Material UI", "Bootstrap", "Tailwind CSS", "Azure Maps SDK", "Vanilla JavaScript"],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["PHP 7/8", "C# (.NET 8)", "Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "ProcessWire CMS", "ASP.NET Core", "Azure Functions (Serverless)", "API Integration", "PDO", "Async/Await Programming"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Azure SQL Database", "Azure Table Storage", "Prisma ORM", "SQL Query Optimization", "Database Design"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    skills: ["Microsoft Azure", "Azure Functions", "Azure Monitor", "Azure Application Insights", "CI/CD Pipelines", "Bitbucket Pipelines", "GitHub Actions", "Azure CLI", "PowerShell", "Docker", "Git FTP Deployment"],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Bitbucket", "Postman", "Jira", "Confluence", "VS Code", "Visual Studio", "Azure Functions Core Tools", "MSBuild / .NET CLI", "Agile / Scrum"],
  },
  {
    category: "Soft Skills",
    icon: "💡",
    skills: ["Problem Solving", "Team Collaboration", "Adaptability", "Communication", "Attention to Detail", "Technical Documentation", "Mentoring & Teaching", "Analytical Thinking", "Agile Team Collaboration"],
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
