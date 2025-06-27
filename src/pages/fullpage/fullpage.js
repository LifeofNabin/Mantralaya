// src/pages/fullpage/fullpage.js
import React from 'react';
import Home from '../home/home';
import Services from '../services/services';
import OurTeam from '../ourteam/ourteam';
import Contact from '../contact/contact';

export default function FullPage() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="ourteam">
        <OurTeam />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
