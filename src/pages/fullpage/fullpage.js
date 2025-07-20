import React from 'react';
import './fullpage.css';

const FullPage = () => {
  return (
    <div className="fullpage-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="fade-in">Innovate. Create. Accelerate.</h1>
          <p className="slide-up">Tech Solutions, Multimedia Magic & Smart Finance — All in One Place.</p>
          <a href="/services" className="cta-button">Explore Our Services</a>
        </div>
      </section>

      {/* What We Do */}
      <section className="what-we-do">
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://source.unsplash.com/400x300/?code,ai" alt="Tech Services" />
            <h3>Tech Solutions</h3>
            <p>Custom software, automation, and AI development tailored to business needs.</p>
          </div>
          <div className="service-card">
            <img src="https://source.unsplash.com/400x300/?video,editing" alt="Multimedia" />
            <h3>Multimedia</h3>
            <p>Professional video editing, animation, graphic design, and brand identity.</p>
          </div>
          <div className="service-card">
            <img src="https://source.unsplash.com/400x300/?finance,stock" alt="Finance" />
            <h3>Finance</h3>
            <p>Insightful analytics, scalable reporting, and real-time finance dashboards.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us dark-mode">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>⚡ Cutting-edge tech tailored for every need</li>
          <li>🎬 Creative storytelling that connects and converts</li>
          <li>📊 Transparent, data-driven finance advisory</li>
          <li>🤝 Trusted by startups & enterprises alike</li>
        </ul>
        <div className="timeline-graph">
          <img src="https://source.unsplash.com/900x300/?data,finance" alt="Finance Timeline" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
            <p>"They modernized our systems and improved team productivity dramatically."</p>
            <span>— Pranav Joshi, TechLead</span>
          </div>
          <div className="testimonial-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" />
            <p>"Loved their edits and animations — they brought our campaign to life."</p>
            <span>— Meena Thapa, Brand Manager</span>
          </div>
        </div>
      </section>

      {/* Book a Call */}
      <section className="book-call">
        <h2>Start Your Journey Today</h2>
        <p>Let’s discuss how we can make your vision a reality.</p>
        <a href="/schedule-call" className="cta-button">Book a Free Call</a>
      </section>
    </div>
  );
};

export default FullPage;