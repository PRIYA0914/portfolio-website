import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
        {
          icon: "📧",
          label: "Email",
          value: "priyasmpn9865@gmail.com",
          link: "mailto:priyasmpn9865@gmail.com"
        },
        {
          icon: "📱",
          label: "Phone",
          value: "+91 75025 65557",
          link: "tel:+917502565557"
        },
        {
          icon: "🌐",
          label: "LinkedIn",
          value: "linkedin.com/in/priyadharshini2214",
          link: "https://www.linkedin.com/in/priyadharshini2214"
        },
        {
          icon: "📍",
          label: "Location",
          value: "Salem, Tamil Nadu, India",
          link: null
        }
      ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-modern-row">
          <div className="contact-modern-left">
            <h2 className="contact-modern-title">Contact Me</h2>
            <div className="contact-modern-desc">
              I’m always open to new opportunities, collaborations, and exciting projects.<br />
              If you’d like to connect, discuss ideas, or work together, feel free to reach out.
            </div>
            <div className="contact-modern-details-list">
              <div className="contact-modern-detail">
                <span className="contact-modern-icon"><HiMail /></span>
                <a href="mailto:priyasmpn9865@gmail.com" className="contact-modern-link">priyasmpn9865@gmail.com</a>
              </div>
              <div className="contact-modern-detail">
                <span className="contact-modern-icon"><FaLinkedin /></span>
                <a href="https://www.linkedin.com/in/priyadharshini2214" className="contact-modern-link" target="_blank" rel="noopener noreferrer">linkedin.com/in/priyadharshini2214</a>
              </div>
              <div className="contact-modern-detail">
                <span className="contact-modern-icon"><FaGithub /></span>
                <a href="https://github.com/PRIYA0914" className="contact-modern-link" target="_blank" rel="noopener noreferrer">github.com/PRIYA0914</a>
              </div>
            </div>
          </div>
          <div className="contact-modern-right">
            <form className="contact-modern-form" onSubmit={handleSubmit}>
              <div className="contact-modern-form-row">
                <div className="contact-modern-form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName || ''}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <div className="contact-modern-form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName || ''}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="contact-modern-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>
              <div className="contact-modern-form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  autoComplete="off"
                ></textarea>
              </div>
              <div className="contact-modern-form-actions">
                <button type="submit" className="contact-modern-send-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;