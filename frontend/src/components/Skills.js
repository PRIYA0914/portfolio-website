import React from 'react';

const SKILL_CATEGORIES = [
	{
		title: 'Frontend Development',
		skills: [
			{ name: 'React.js', level: 90 },
			{ name: 'JavaScript', level: 85 },
			{ name: 'HTML/CSS', level: 95 },
			{ name: 'React Native', level: 80 }
		]
	},
	{
		title: 'Backend Development',
		skills: [
			{ name: 'Node.js', level: 85 },
			{ name: 'Express.js', level: 80 },
			{ name: 'Python', level: 75 },
			{ name: 'Django', level: 70 }
		]
	},
	{
		title: 'Database & Tools',
		skills: [
			{ name: 'MongoDB', level: 80 },
			{ name: 'SQL', level: 70 },
			{ name: 'Git/GitHub', level: 90 },
			{ name: 'Figma', level: 85 }
		]
	},
	{
		title: 'Programming Languages',
		skills: [
			{ name: 'Java', level: 80 },
			{ name: 'C/C++', level: 75 },
			{ name: 'Swift', level: 60 }
		]
	}
];

export default function Skills() {
	return (
		<section id="skills" className="skills-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Technical Skills</h2>
					<p className="section-subtitle">Technologies and tools I work with</p>
				</div>
				<div className="skills-grid">
					{SKILL_CATEGORIES.map((category, index) => (
						<div key={index} className="skill-category">
							<h3 className="category-title">{category.title}</h3>
							<div className="skills-list">
								{category.skills.map((skill, skillIndex) => (
									<div key={skillIndex} className="skill-item">
										<div className="skill-info">
											<span className="skill-name">{skill.name}</span>
											<span className="skill-percentage">{skill.level}%</span>
										</div>
										<div className="skill-bar">
											<div
												className="skill-progress"
												style={{ width: `${skill.level}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}