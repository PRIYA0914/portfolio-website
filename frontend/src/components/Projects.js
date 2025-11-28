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

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work and contributions</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
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
                <a href={project.link} className="btn btn-sm btn-primary">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}