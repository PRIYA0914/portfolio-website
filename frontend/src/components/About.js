import React from 'react';


export default function About() {
  return (
    <section id="about" className="card about-section">
      <div className="about-header">
        <span className="about-icon" title="About Me">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M12 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2.25 7.25c0-1.24 2.5-1.92 2.5-1.92s2.5.68 2.5 1.92V16h-5v-1.25z" fill="#fff"/></svg>
        </span>
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="about-content-text">
        <p>
          Hello! I’m Priyadharshini, a passionate <b>Full Stack Developer</b> and <b>UI/UX Designer</b> based in India.<br/>
          I specialize in building modern, responsive web and mobile applications using the <b>MERN stack</b> and <b>React Native</b>.
        </p>
        <p>
          With a strong background in both design and development, I love crafting seamless user experiences and solving real-world problems through technology.<br/>
          My journey in tech has been driven by curiosity, creativity, and a commitment to continuous learning.
        </p>
        <ul className="about-list">
          <li><span className="about-list-icon">🌟</span> 2+ years experience in web & mobile development</li>
          <li><span className="about-list-icon">💡</span> Skilled in React, Node.js, MongoDB, Express, and UI/UX tools</li>
          <li><span className="about-list-icon">🎨</span> Passionate about clean code and beautiful interfaces</li>
          <li><span className="about-list-icon">🤝</span> Collaborative, detail-oriented, and always eager to learn</li>
        </ul>
        <p>
          <b>Let’s connect and create something amazing together!</b>
        </p>
      </div>
    </section>
  );
}