import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section card">
      <div className="section-header" style={{textAlign: 'center', marginBottom: '2.2rem'}}>
        <span className="about-icon" title="About">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="10" rx="5" fill="#2563eb"/><rect x="7" y="11" width="10" height="2" rx="1" fill="#fff"/></svg>
        </span>
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">A brief introduction</p>
      </div>
      <div className="about-content" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p className="about-description" style={{maxWidth: 650, textAlign: 'center', fontSize: '1.15rem', color: '#334155'}}>
          I’m Priya Dharshini S, a full-stack web and mobile app developer who values clean code and thoughtful design. I work with React, React Native, Node.js, and MongoDB to build user-friendly applications.<br /><br />
          With a background in UI/UX design, I focus on creating digital experiences that are both functional and intuitive.
        </p>
      </div>
    </section>
  );
}
