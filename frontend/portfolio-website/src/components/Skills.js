import React from 'react';
import './Skills.css';

const skillsData = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'React', level: 'Expert' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'CSS', level: 'Expert' },
  { name: 'HTML', level: 'Expert' },
  { name: 'Three.js', level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2>My Skills</h2>
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-level">{skill.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;