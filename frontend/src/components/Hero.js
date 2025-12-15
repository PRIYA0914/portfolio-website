// filepath: c:\Users\priya\OneDrive\Documents\Desktop\portfolio\portfolio-website\src\components\Hero.js
import React from 'react';


export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div className="hero-content" style={{ flex: '1 1 340px', minWidth: 280 }}>
          <div className="hero-greeting">
            <span className="greeting-text">Hello, I'm</span>
          </div>
          <h1 className="hero-title">
            <span className="name-highlight">Priya Dharshini S</span>
          </h1>
          <h2 className="hero-subtitle">
            Full-Stack Developer & UI/UX Designer
          </h2>
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
        <div className="hero-image" style={{ flex: '0 0 340px', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: 220 }}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/227/854/non_2x/female-developer-vector.jpg"
            alt="Female Developer Illustration"
            style={{ width: 370, height: 'auto', borderRadius: 16, boxShadow: '0 4px 24px #0001' }}
          />
        </div>
      </div>
    </section>
  );
}