import React from 'react';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-divider"></div>
        <p className="footer-copyright">&copy; 2025 Priya Dharshini S. All rights reserved.</p>
        <div className="footer-social-links">
          <a href="https://github.com/PRIYA0914" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
            <span className="footer-icon"><FaGithub /></span>
            <span className="footer-link-text">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/priyadharshini2214" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
            <span className="footer-icon"><FaLinkedin /></span>
            <span className="footer-link-text">LinkedIn</span>
          </a>
          <a href="mailto:priyasmpn9865@gmail.com" aria-label="Email" className="footer-social-link">
            <span className="footer-icon"><HiMail /></span>
            <span className="footer-link-text">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}