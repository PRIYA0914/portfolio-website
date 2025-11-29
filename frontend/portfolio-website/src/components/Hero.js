import React from 'react';
import './Hero.css'; // Assuming you have a CSS file for styling

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects, skills, and experiences.</p>
        <a href="#projects" className="cta-button">View Projects</a>
      </div>
      <div className="hero-background">
        {/* You can add a background image or video here */}
      </div>
    </section>
  );
};

export default Hero;