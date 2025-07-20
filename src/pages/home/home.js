import React from 'react';
import './home.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="homepage">
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content"
        >
          <h1>We Build Intelligent Software</h1>
          <p>Stunning Visuals, Smart Finance Works – Delivering Performance & Creativity Under One Roof</p>
          <button className="cta-button">See Our Work</button>
        </motion.div>
        <motion.div
          className="hero-illustration"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src="/assets/images/bg.png" alt="Consulting Illustration" />
        </motion.div>
      </section>

      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-card tech">
            <h3>Tech Solutions</h3>
            <p>We create scalable, secure, and efficient technology products.</p>
          </div>
          <div className="service-card multimedia">
            <h3>Multimedia & Visuals</h3>
            <p>Engaging graphics, motion design & storytelling for modern brands.</p>
          </div>
          <div className="service-card finance">
            <h3>Finance Consulting</h3>
            <p>We help businesses grow smartly with strategic financial solutions.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul className="reasons-list">
          <li>✔ Expert Team Across Domains</li>
          <li>✔ Seamless Integration of Tech + Creativity</li>
          <li>✔ Proven Track Record in Performance</li>
          <li>✔ One Roof for All Your Digital Needs</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>“A brilliant team that delivered our project exactly as we imagined it.”</p>
            <span>– Rajeev K., CEO</span>
          </div>
          <div className="testimonial">
            <p>“Creative, professional, and always on time. Highly recommended.”</p>
            <span>– Anjali M., Startup Founder</span>
          </div>
        </div>
      </section>

      <section className="book-call">
        <h2>Let’s Talk</h2>
        <p>Schedule a call to discuss your project or idea – we’ll take care of the rest.</p>
        <button className="cta-button">Book a Call</button>
      </section>
    </div>
  );
}
