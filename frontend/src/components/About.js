import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-card">
          <div className="about-header">
            <div className="about-icon">
              <span>👋</span>
            </div>
            <h2 className="about-title">Hello, I'm Priya Dharshini S</h2>
          </div>
          
          <h3 className="about-subtitle">Full-Stack Web & Mobile App Developer</h3>
          
          <div className="about-description-wrapper">
            <p className="about-description">
              I'm a passionate developer with a strong interest in UI/UX design. I enjoy building clean, scalable, and user-friendly applications using <span className="highlight">React</span>, <span className="highlight">React Native</span>, and the <span className="highlight">MERN stack</span>.
            </p>
            <p className="about-description">
              With hands-on experience through internships and real-world projects, I focus on turning ideas into reliable digital solutions while continuously improving performance, usability, and design quality.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
