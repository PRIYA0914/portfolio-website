
import React from "react";
import "../styles/skills.css";

const SKILL_TREE = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "REACT NATIVE"]
  },
  {
    label: "Backend",
    skills: ["NODEJS", "EXPRESS", "JAVA", "MONGODB"]
  },
  {
    label: "Tools & Platforms",
    skills: ["GIT", "GITHUB", "VS CODE", "FIGMA", "REST APIS"]
  },
  {
    label: "Other",
    skills: ["PROBLEM SOLVING", "TEAM COLLABORATION", "RESPONSIVE DESIGN"]
  }
];

function Skills() {
  return (
    <section className="enhanced-skills">
      <h2 className="skills-cards-title">Technical Skills</h2>
      <div className="skills-cards-grid">
        {SKILL_TREE.map((branch) => (
          <div className="skill-category-enhanced" key={branch.label} data-category={branch.label}>
            <div className="skill-card-header">
              <h3 className="skill-card-title">{branch.label}</h3>
            </div>
            <div className="skill-card-content">
              <div className="skill-card-pills">
                {branch.skills.map(skill => (
                  <span className="skill-item skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
