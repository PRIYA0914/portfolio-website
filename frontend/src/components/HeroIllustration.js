import React from 'react';
export default function HeroIllustration() {
  return (
    <div className="hero-illustration-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src="https://assets.designtemplate.io/Website-Developer-Girl-Character-Illustration-700.webp" 
        alt="Website Developer Girl Character Illustration" 
        className="hero-illustration-img" 
        loading="lazy"
        style={{ width: '900px', maxWidth: 390, height: 350}} // Increased width
      />
    </div>
  );
}
