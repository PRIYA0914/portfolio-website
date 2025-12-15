import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/contact.css';

emailjs.init('x0xbra4upzaUHer5W');

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_gg6o2yn',
      'template_mg8c7rg',
      formRef.current,
      'x0xbra4upzaUHer5W'
    )
    .then(() => {
      alert('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert(error.text || 'Error sending message');
    });
  };

  return (
    <section className="contact-section contact-split-bg">
      <div className="contact-split-container">
        <div className="contact-split-left">
          <h2 className="contact-split-title">Contact</h2>
          <p className="contact-split-subtitle">Interested in working together or have a question?</p>
          <p className="contact-split-desc">Send me a message and let’s connect.</p>
          <div className="contact-split-info">
            <div className="contact-split-detail-row">
              <span className="contact-split-email-icon"><HiMail /></span>
              <a href="mailto:priyasmpn9865@gmail.com" className="contact-split-email">priyasmpn9865@gmail.com</a>
            </div>
            <div className="contact-split-detail-row">
              <span className="contact-split-email-icon"><FaLinkedin /></span>
              <a href="https://linkedin.com/in/priyadharshini2214" className="contact-split-email" target="_blank" rel="noopener noreferrer">linkedin.com/in/priyadharshini2214</a>
            </div>
            <div className="contact-split-detail-row">
              <span className="contact-split-email-icon"><FaGithub /></span>
              <a href="https://github.com/PRIYA0914" className="contact-split-email" target="_blank" rel="noopener noreferrer">github.com/PRIYA0914</a>
            </div>
          </div>
        </div>
        <div className="contact-split-right">
          <form ref={formRef} onSubmit={sendEmail} className="contact-split-form">
            <div className="contact-split-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="contact-split-form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="contact-split-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Message" required />
            </div>
            <div className="contact-split-btn-row">
              <button type="submit" className="contact-split-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;