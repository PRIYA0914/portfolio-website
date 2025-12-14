import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-profile-pic">
          <img src="https://ui-avatars.com/api/?name=Priya+Dharshini+S&background=6366f1&color=fff&size=160" alt="Priya Dharshini S" />
        </div>
        <div className="about-content">
          <h2 className="about-title">Priya Dharshini S</h2>
          <h3 className="about-subtitle">Full-Stack Web & Mobile App Developer</h3>
          <p className="about-description">
            I’m a passionate developer with a strong interest in UI/UX design. I enjoy building clean, scalable, and user-friendly applications using <b>React</b>, <b>React Native</b>, and the <b>MERN stack</b>.<br /><br />
            With hands-on experience through internships and real-world projects, I focus on turning ideas into reliable digital solutions while continuously improving performance, usability, and design quality.
          </p>
        </div>
      </div>
    </section>
  );
}
