
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


export default function Skills() {
  return (
    <section id="skills" className="skills-section card">
      <div className="section-header">
        <span className="skills-icon" title="Technical Skills">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" fill="#2563eb"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/></svg>
        </span>
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </div>
      <div className="skills-grid">
        {SKILL_TREE.map((branch) => (
          <div className="skill-card card" key={branch.label} data-category={branch.label}>
            <div className="skill-header">
              <h3 className="skill-title">{branch.label}</h3>
            </div>
            <div className="skill-content">
              <ul className="skill-list">
                {branch.skills.map(skill => (
                  <li key={skill} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


