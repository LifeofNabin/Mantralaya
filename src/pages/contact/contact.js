import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        
        <div className="contact-info">
          <h2>Local Region Office</h2>
          <p>150 Outof Home, London, UK</p>
          <p>Phone: +919 7909109</p>
          <p>Email: office@mantralaya.com</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your message..." rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;