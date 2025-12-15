import React from 'react';


const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "Designed and developed a responsive personal portfolio website to showcase skills, projects, and experience. Integrated a real-time contact form that allows recruiters to directly reach out via email, following clean UI and component-based development practices.",
    tech: ["React.js", "JavaScript", "HTML", "CSS", "EmailJS"],
    features: [
      "Responsive and modern UI design",
      "Real-time contact form with email notifications",
      "Component-based architecture using React",
      "Deployed for public access"
    ],
    status: "Completed",
    link: "https://github.com/PRIYA0914/portfolio-website"
  },
  {
    title: "Inventory Management System",
    description: "Designed and developed an inventory tracking system for an electronics shop. Implemented separate Admin and User panels with secure authentication. Integrated Async Storage to support offline access and persistent data storage.",
    tech: ["MERN Stack", "React Native"],
    features: [
      "Inventory tracking for electronics shop",
      "Admin and User panels with authentication",
      "Offline access with Async Storage"
    ],
    status: "Completed",
    link: "https://github.com/PRIYA0914/Inventory-Management-system"
  },
  {
    title: "Secure Chat Application",
    description: "Built a real-time encrypted messaging application using WebSockets. Implemented Ghost Mode for enhanced privacy and secure communication. Focused on fast message delivery and real-time user interaction.",
    tech: ["Express.js", "Socket.io"],
    features: [
      "Real-time encrypted messaging",
      "Ghost Mode for privacy",
      "Fast message delivery and real-time interaction"
    ],
    status: "Completed",
    link: "https://github.com/PRIYA0914/Tic-Tac-Toe-game"
  },
  {
    title: "Food Go – UI/UX Design Project",
    description: "Designed a clean and intuitive food delivery app interface. Created optimized user flows, wireframes, and interactive prototypes. Focused on usability, visual hierarchy, and smooth user experience.",
    tech: ["Figma"],
    features: [
      "Clean and intuitive UI",
      "Optimized user flows and wireframes",
      "Interactive prototypes",
      "Focus on usability and visual hierarchy"
    ],
    status: "Design Project",
    link: "https://www.linkedin.com/posts/priyadharshini2214_figma-uidesign-foodorderingapp-activity-7242545418021076994-kdWu?utm_source=share&utm_medium=member_android&rcm=ACoAAEokX6MB9eICCe551dY2mvOQfzj6_dI-mUs"
  },
  {
    title: "Mini Projects",
    description: "A collection of small utility and logic-based apps to strengthen React Native skills.",
    tech: ["React Native"],
    features: [
      "To-Do List App – Task management with add, edit, delete, and local storage.",
      "Tic Tac Toe Game – Logic-based game to strengthen state management skills.",
      "Stopwatch App – Utility app with start, pause, reset functionality."
    ],
    status: "Completed",
    link: "https://github.com/PRIYA0914/Tic-Tac-Toe-game"
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