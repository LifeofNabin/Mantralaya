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
  <Link to="/" className="logo-link" onClick={closeMenu}>
    <img src="/assets/images/logo.png" alt="Logo" className="logo-img" />
    <h1 className="logo-text">NuvyXis</h1>
  </Link>
</div>


      

      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link smooth to="/#home" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/ourteam" onClick={closeMenu}>Our Team</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        

      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </header>
  );
}
