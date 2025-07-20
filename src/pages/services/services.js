import React from 'react';
import { Link } from 'react-router-dom';
import './services.css';

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        <Link to="/services/code" className="card">
  <img src="/assets/icons/tech.png" alt="Tech Icon" className="card-icon" />
  <h3>Tech Work</h3>
  <p>Web and mobile app development</p>
</Link>

        
        <Link to="/services/capital" className="card">
          <img src="/assets/icons/finance.png" alt="Finance Icon" className="card-icon" />
          Finance Work
        </Link>
        <Link to="/services/creation" className="card">
          <img src="/assets/icons/media.png" alt="Media Icon" className="card-icon" />
          Multimedia Work
        </Link>
      </div>
    </section>
  );
}
