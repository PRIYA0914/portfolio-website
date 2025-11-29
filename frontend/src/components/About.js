import React, { useState } from 'react';
import '../styles/about.css';

export default function About() {
  const linkedIn = 'https://www.linkedin.com/in/priyadharshini2214';
  const github = 'https://github.com/PRIYA0914';
  const [showImage, setShowImage] = useState(true);

  return (
    <div id="about" className="about-content">
      <h2 className="section-title">About Me</h2>

      <div className="about-layout">
        <div className="about-text">
          <p>
            Hello! I’m Priyadharshini, a passionate Full Stack Developer and UI/UX Designer based in India.
            I specialize in building modern, responsive web and mobile applications using the MERN stack and React Native.
          </p>
          <p>
            With a strong background in both design and development, I love crafting seamless user experiences and solving real-world problems through technology.
            My journey in tech has been driven by curiosity, creativity, and a commitment to continuous learning.
          </p>
          <ul>
            <li>🌟 2+ years experience in web & mobile development</li>
            <li>💡 Skilled in React, Node.js, MongoDB, Express, and UI/UX tools</li>
            <li>🎨 Passionate about clean code and beautiful interfaces</li>
            <li>🤝 Collaborative, detail-oriented, and always eager to learn</li>
          </ul>

          <div className="about-actions">
            <button
              className="btn btn-primary"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </button>
            {/* Direct download link as a reliable fallback (browser handles it) */}
            <a className="btn btn-outline" href="/resume.pdf" download="Priya_Dharshini_Resume.pdf">
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a className="social-link" href={linkedIn} target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
            <a className="social-link" href={github} target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
          </div>

          <p>
            Let’s connect and create something amazing together!
          </p>
        </div>

        <aside className="about-visual">
          <div className="about-avatar" aria-hidden="true">
            {showImage ? (
              <img
                src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
                alt="Priya Dharshini"
                className="about-avatar-img"
                onError={() => setShowImage(false)}
              />
            ) : (
              <span className="avatar-initials">PD</span>
            )}
          </div>
          <p className="avatar-caption">Full-Stack • UI/UX • MERN</p>
        </aside>
      </div>
    </div>
  );
}