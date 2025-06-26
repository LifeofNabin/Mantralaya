import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <div className="locations">
        <div className="location-card">
          <h3>🇬🇧 United Kingdom Office</h3>
          <p>123 Oxford Street, London, UK</p>
          <p>Phone: +44 20 7946 0123</p>
          <p>Email: office@Nuvyxis.com</p>
        </div>

        <div className="location-card">
          <h3>🇳🇵 Kathmandu Office</h3>
          <p>ABC Complex, Putalisadak, Kathmandu</p>
          <p>Phone: +977 1 4412345</p>
          <p>Email: office.ktm@Nuvyxis.com</p>
        </div>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your message..." rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
