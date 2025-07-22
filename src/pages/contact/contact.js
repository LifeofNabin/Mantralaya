import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>

      {/* Office Locations Row */}
      <div className="office-locations">
        <div className="office-card">
          <h3>London Office</h3>
          <p>150 Outof Home, London, UK</p>
          <p>Phone: +919 7909109</p>
          <p>Email: office@mantralaya.com</p>
        </div>

        <div className="office-card">
          <h3>Kathmandu Office</h3>
          <p>Kamalpokhari, Kathmandu, Nepal</p>
          <p>Phone: +977 9800000000</p>
          <p>Email: ktm@mantralaya.com</p>
        </div>
      </div>

      {/* Form & Book a Call Row */}
      <div className="contact-form-row">
        <div className="contact-form">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />

            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Type your message here..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="book-call">
          <h3>Book a Meeting</h3>
          <p>Need a direct conversation? Schedule a call with our expert now.</p>
          <a href="/schedule-call" className="book-btn">Book for Call</a>
        </div>
      </div>

      {/* Footer Content (optional) */}
      <div className="contact-footer">
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <p>About Us<br />Jobs<br />News</p>
          </div>
          <div>
            <h4>Support</h4>
            <p>Help Center<br />Privacy Policy<br />Terms</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email Us<br />Visit Us<br />Partners</p>
          </div>
        </div>
        <p className="copyright">
          © 2025 NuvyXis.com. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
