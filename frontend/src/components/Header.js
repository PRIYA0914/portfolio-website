import React, { useState, useEffect, useRef } from 'react';
import '../styles/header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'education', 'contact', 'about'];
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 12);

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    const handleClickOutside = (e) => { if (mobileOpen && mobileRef.current && !mobileRef.current.contains(e.target)) setMobileOpen(false); };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('click', handleClickOutside);
    // run once to set initial active section / scrolled state
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="brand-icon">PD</span>
          <span className="brand-text">Priya Dharshini</span>
        </div>
        <button
          className="mobile-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className={`hamburger ${mobileOpen ? 'open' : ''}`} />
        </button>

        <ul className="navbar-nav">
          {[
            { id: 'home', label: 'Home' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'experience', label: 'Experience' },
            { id: 'education', label: 'Education' },
            { id: 'contact', label: 'Contact' },
            { id: 'about', label: 'About' }
          ].map(item => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div id="mobile-nav" className={`mobile-nav ${mobileOpen ? 'open' : ''}`} ref={mobileRef} role="dialog" aria-modal="true">
          <ul className="mobile-nav-list">
            {[
              { id: 'home', label: 'Home' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' },
              { id: 'about', label: 'About' }
            ].map(item => (
              <li key={`m-${item.id}`}>
                <button className={`nav-link ${activeSection === item.id ? 'active' : ''}`} onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}