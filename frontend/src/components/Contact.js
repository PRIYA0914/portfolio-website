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
      <div style={{ maxWidth: 700, margin: "0 auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: 32 }}>
        <div className="section-header">
          <h2 style={{ textAlign: "center", marginBottom: 24, fontWeight: 700, fontSize: 32, letterSpacing: 1 }}>Contact</h2>
          <p style={{ textAlign: "center", marginBottom: 24 }}>Let's discuss your project or just say hello!</p>
        </div>
        <div className="contact-content">
          <div className="contact-info card">
            <h3>Contact Information</h3>
            <p className="contact-intro">
              I'm always open to discussing new opportunities, creative projects, 
              or simply having a conversation about technology and design.
            </p>
            <div className="contact-list">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon-inner">{item.icon}</span>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="contact-value"
                        target={item.link.startsWith('http') ? '_blank' : '_self'}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="availability">
              <h4>Availability</h4>
              <p>
                <span className="status-indicator available"></span>
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
          <div className="contact-form-container card">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 16 }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello!"
                  style={{ padding: 12, borderRadius: 8, border: "1px solid #ccc", fontSize: 16, resize: "vertical" }}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" style={{ background: "#22223b", color: "#fff", border: "none", borderRadius: 8, padding: "12px 0", fontWeight: 600, fontSize: 18, cursor: "pointer", marginTop: 8 }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;