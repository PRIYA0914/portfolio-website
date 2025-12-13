import React from 'react';


const PROJECTS = [
  {
    title: "Inventory Management System",
    description: "A comprehensive inventory management application built with MERN stack featuring real-time updates, analytics dashboard, and multi-user support.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    features: ["Real-time inventory tracking", "Analytics dashboard", "Multi-user authentication", "Export functionality"],
    status: "Completed",
    link: "#"
  },
  {
    title: "Secure Chat Application",
    description: "End-to-end encrypted chat application with group messaging, file sharing, and real-time notifications built with React Native.",
    tech: ["React Native", "Node.js", "Socket.io", "Express", "MongoDB"],
    features: ["End-to-end encryption", "Group messaging", "File sharing", "Push notifications"],
    status: "In Development",
    link: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio website showcasing my skills, projects, and experience with modern UI/UX design principles.",
    tech: ["React", "CSS3", "JavaScript", "Figma"],
    features: ["Responsive design", "Smooth animations", "Modern UI", "Contact form"],
    status: "Completed",
    link: "#"
  }
];

const PROJECT_ICONS = [
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" fill="#2563eb"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/></svg>,
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/></svg>,
  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#2563eb"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section card">
      <div className="section-header">
        <span className="projects-icon" title="Featured Projects">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" fill="#2563eb"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/></svg>
        </span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Some of my recent work and contributions</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card card">
            <div className="project-header">
              <span className="project-icon">{PROJECT_ICONS[index % PROJECT_ICONS.length]}</span>
              <h3 className="project-title">{project.title}</h3>
              <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <a href={project.link} className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}