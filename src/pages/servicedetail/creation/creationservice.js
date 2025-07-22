import React from "react";
import "./creationservice.css";

function CreationService() {
  return (
    <div className="creation-container">
      {/* Hero Section */}
      <section className="hero-creation">
        <div className="hero-left">
          <h1>Creative & Multimedia Services</h1>
          <p>Elevate your brand with engaging designs, videos, and motion graphics.</p>
          <a href="#contact" className="hero-btn">Let's Build Together</a>
        </div>
        <div className="hero-right">
          <div className="animation-bubble"></div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section">
        <h2>Our Approach</h2>
        <p>We craft stunning, purposeful content for brands, businesses, and creators that connects and converts.</p>
      </section>

      {/* Creative Services */}
      <section className="services-section">
        <h2>Our Creative Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <span role="img" aria-label="ui">🖌️</span>
            <h3>UI/UX Design</h3>
            <p>Responsive interfaces tailored for web & mobile</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="graphic">🎨</span>
            <h3>Graphic Design</h3>
            <p>Visual identity, promos, and branding assets</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="video">🎬</span>
            <h3>Video Editing</h3>
            <p>Edits for YouTube, social media, & corporate use</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="social">📱</span>
            <h3>Social Media Content</h3>
            <p>Reels, shorts, carousels & storyboards</p>
          </div>
          <div className="service-card">
            <span role="img" aria-label="motion">✨</span>
            <h3>Motion Graphics</h3>
            <p>Animations, kinetic text & transitions</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ 5+ years of creative industry experience</li>
          <li>✅ Brand-focused storytelling</li>
          <li>✅ Tools: Adobe Suite, Figma, DaVinci, Canva</li>
          <li>✅ Unlimited revisions & client-first workflow</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="cta-section" id="contact">
        <h2>Let’s Create Something Amazing</h2>
        <p>Want to turn your vision into visuals?</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>
    </div>
  );
}

export default CreationService;
