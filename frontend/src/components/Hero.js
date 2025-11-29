// filepath: c:\Users\priya\OneDrive\Documents\Desktop\portfolio\portfolio-website\src\components\Hero.js
import React, { useState, useEffect } from 'react';
import '../styles/hero.css';

export default function Hero() {
  const titles = ['Full-Stack Developer', 'UI/UX Designer', 'MERN Stack Engineer', 'React Native Dev'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="name-highlight">Priya Dharshini S</span>
          </h1>
          <h2 className="hero-subtitle" aria-live="polite">{titles[titleIndex]}</h2>
          <p className="hero-description">
            I create modern, responsive web applications using the MERN stack and React Native. 
            Passionate about clean code, intuitive design, and seamless user experiences.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
          <div className="hero-actions">
            <button 
              className="btn btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-avatar">
            <img src="/assets/avatar.svg" alt="Priya Dharshini" className="hero-avatar-img" />
          </div>
          <div className="floating-elements">
            <div className="float-item">React</div>
            <div className="float-item">Node.js</div>
            <div className="float-item">MongoDB</div>
            <div className="float-item">Figma</div>
          </div>
        </div>
      </div>
    </section>
  );
}