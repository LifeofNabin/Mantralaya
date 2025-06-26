import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
        <h1 className="logo-text">Nuvyxis</h1>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/ourteam" onClick={closeMenu}>Our Team</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}
