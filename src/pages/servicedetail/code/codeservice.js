import React from 'react';
import Lottie from 'lottie-react';
import devAnimation from '../../../assets/animations/dev.json';
import './codeservice.css';

export default function Codeservice() {
  return (
    <section className="code-service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="animation-container">
          <Lottie animationData={devAnimation} loop={true} />
        </div>
        <div className="hero-text">
          <h1>🚀 Tech Work</h1>
          <p>We design, build, and scale intelligent software to elevate your business.</p>
        </div>
      </div>

      {/* What We Do */}
      <div className="section star-section">
        <h3>🌟 What We Do</h3>
        <div className="star-grid">
          <div className="star-item">
            <span className="star">★</span>
            <div className="star-text">
              <h4>Web App Development</h4>
              <p>Robust and scalable apps using React & Next.js.</p>
            </div>
          </div>
          <div className="star-item">
            <span className="star">★</span>
            <div className="star-text">
              <h4>Mobile App Solutions</h4>
              <p>Cross-platform apps with React Native and Flutter.</p>
            </div>
          </div>
          <div className="star-item">
            <span className="star">★</span>
            <div className="star-text">
              <h4>Backend APIs & Integrations</h4>
              <p>Secure RESTful & GraphQL APIs using Node.js, Express, and Python.</p>
            </div>
          </div>
          <div className="star-item">
            <span className="star">★</span>
            <div className="star-text">
              <h4>Cloud & DevOps</h4>
              <p>CI/CD pipelines, deployment on AWS, Firebase, and Dockerized environments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Tech */}
      <div className="section tools-tech">
        <h2>🛠 Tools & Technologies</h2>
        <div className="tech-grid">
          <div>
            <h4>Frontend</h4>
            <p>React.js · Next.js · HTML · CSS · Tailwind · Bootstrap</p>
          </div>
          <div>
            <h4>Backend</h4>
            <p>Node.js · Express.js · Python · Firebase Functions</p>
          </div>
          <div>
            <h4>Databases</h4>
            <p>MongoDB · PostgreSQL · Firebase Firestore · Supabase</p>
          </div>
          <div>
            <h4>DevOps & Cloud</h4>
            <p>AWS · Firebase · Docker · GitHub Actions · Vercel · Netlify</p>
          </div>
          <div>
            <h4>Project Management</h4>
            <p>Jira · Notion · Trello · Slack · Figma</p>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="section pricing">
        <h2>💰 Project Packages</h2>
        <ul className="pricing-list">
          <li>
            <strong>Starter Package:</strong> Ideal for individuals and startups needing a basic online presence.
          </li>
          <li>
            <strong>Growth Package:</strong> Scalable web/mobile apps with integrations, analytics, and dashboards.
          </li>
          <li>
            <strong>Enterprise Package:</strong> Custom-tailored systems with robust backend, cloud infra & DevOps support.
          </li>
        </ul>
        <p className="note">*Packages are customized based on your goals, not just features.</p>
      </div>

      {/* Process */}
      <div className="section process">
        <h2>🗓️ How We Work</h2>
        <ol className="detailed-steps">
          <li>
            <strong>Step 1: Discovery</strong><br />
            Understand your vision, challenges, and audience through discovery meetings.
          </li>
          <li>
            <strong>Step 2: Planning & Proposal</strong><br />
            Define roadmap, tech stack, timelines, and deliverables.
          </li>
          <li>
            <strong>Step 3: UI/UX Design</strong><br />
            Create wireframes, prototypes, and brand-aligned interfaces.
          </li>
          <li>
            <strong>Step 4: Development</strong><br />
            Agile development with weekly demos using latest frameworks and practices.
          </li>
          <li>
            <strong>Step 5: Testing</strong><br />
            Manual & automated QA including performance, usability, and security checks.
          </li>
          <li>
            <strong>Step 6: Deployment</strong><br />
            CI/CD deployment on your cloud infra with scalability in mind.
          </li>
          <li>
            <strong>Step 7: Post-Launch Support</strong><br />
            Monitoring, maintenance, versioning, and feature expansion.
          </li>
        </ol>
      </div>

      {/* Testimonials */}
      <div className="section testimonials">
        <h2>🗣️ What Our Clients Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <img src="https://i.pravatar.cc/50?img=12" alt="client" />
            <p>“Superb team! They brought our vision to life with clean code and clear communication.”</p>
            <h4>— Rajan S., CEO at Finexa</h4>
          </div>
          <div className="testimonial">
            <img src="https://i.pravatar.cc/50?img=14" alt="client" />
            <p>“Highly recommend for startups — they delivered on time with great UX.”</p>
            <h4>— Anjali T., Founder at EduSpark</h4>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="section cta-section">
        <button className="book-call">📞 Book a Free Strategy Call</button>
      </div>
    </section>
  );
}
