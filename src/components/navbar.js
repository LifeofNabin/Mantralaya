// src/components/navbar.js
import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
        <h1 className="logo-text">NuvyXis</h1>
      </div>

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link smooth to="/#home" onClick={closeMenu}>Home</Link>
        <Link smooth to="/#services" onClick={closeMenu}>Services</Link>
        <Link smooth to="/#ourteam" onClick={closeMenu}>Our Team</Link>
        <Link smooth to="/#contact" onClick={closeMenu}>Contact</Link>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
