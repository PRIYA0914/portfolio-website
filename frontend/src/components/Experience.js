import React from 'react';


const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company: "Freelance Projects",
    period: "2023 - Present",
    location: "Remote",
    type: "Freelance",
    description: "Developing web applications using MERN stack and React Native for various clients.",
    achievements: [
      "Built 5+ responsive web applications",
      "Implemented real-time features using Socket.io",
      "Designed intuitive UI/UX interfaces",
      "Maintained 100% client satisfaction rate"
    ],
    tech: ["React", "Node.js", "MongoDB", "Express", "React Native"]
  },
  {
    title: "UI/UX Design Intern",
    company: "Tech Startup",
    period: "2022 - 2023",
    location: "Salem, TN",
    type: "Internship",
    description: "Designed user interfaces and improved user experience for mobile applications.",
    achievements: [
      "Created wireframes and prototypes using Figma",
      "Improved app usability by 40%",
      "Collaborated with development team",
      "Conducted user research and testing"
    ],
    tech: ["Figma", "Adobe XD", "Sketch", "InVision"]
  }
];

const EXP_ICON = <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>;

export default function Experience() {
  return (
    <section id="experience" className="experience-section card">
      <div className="section-header">
        <span className="experience-icon" title="Work Experience">{EXP_ICON}</span>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and achievements</p>
      </div>
      <div className="timeline">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="timeline-item card">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className={`experience-type ${exp.type.toLowerCase()}`}>
                    {exp.type}
                  </span>
                </div>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="experience-tech">
                <span className="tech-label">Technologies:</span>
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}