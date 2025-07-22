import React from 'react';
import './contact.css';

const ContactPage = () => {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>

      {/* Row 1: Office Locations */}
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

      {/* Row 2: Form + Book a Call */}
      <div className="form-call-row">
        {/* Contact Form */}
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

        {/* Book a Call */}
        <div className="book-call">
          <h3>Book a Meeting</h3>
          <p>Need a direct conversation? Schedule a call with our expert now.</p>
          <a href="/schedule-call" className="book-btn">Book for Call</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
