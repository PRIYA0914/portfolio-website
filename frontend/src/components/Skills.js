import React from 'react';
import '../styles/skills.css';

const SKILL_TREE = [
	{
		label: 'Programming',
		skills: [
			'C', 'C++', 'PYTHON', 'JAVASCRIPT', 'JAVA'
		]
	},
	{
		label: 'Frontend',
		skills: [
			'HTML', 'CSS', 'REACT.JS', 'TAILWIND'
		]
	},
	{
		label: 'Backend',
		skills: [
			'NODE.JS', 'EXPRESS.JS', 'MONGODB'
		]
	},
	{
		label: 'Mobile App Development',
		skills: [
			'REACT NATIVE'
		]
	},
	{
		label: 'Tools & Platforms',
		skills: [
			'GITHUB', 'VS CODE', 'FIGMA', 'REST APIS'
		]
	},
	{
		label: 'Other',
		skills: [
			'UI/UX DESIGNING', 'TEAM COLLABORATION', 'RESPONSIVE DESIGN'
		]
	}
];

export default function Skills() {
	return (
		<section id="skills" className="skills-cards-section">
			<h2 className="skills-cards-title">Technical Skills</h2>
			<div className="skills-cards-grid">
        {SKILL_TREE.map((branch, idx) => (
          <div className="skill-card" key={branch.label} data-category={branch.label}>
            <div className="skill-card-header">
              <h3 className="skill-card-title">{branch.label}</h3>
            </div>
            <div className="skill-card-content">
              <div className="skill-card-pills">
                {branch.skills.map(skill => (
                  <span className="skill-pill" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
			</div>
		</section>
	);
}