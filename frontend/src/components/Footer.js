import React from 'react';
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Priya Dharshini S. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/PRIYA0914" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/priya-dharshini-s" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:priya@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}