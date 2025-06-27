import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/vacancy">Jobs</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="/help">Help Center</a></li>
            <li><a href="/policy">Privacy Policy</a></li>
            <li><a href="readthis">Terms</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li><a href="/Email">Email Us</a></li>
            <li><a href="/location">Visit Us</a></li>
            <li><a href="/ourteam">Partners</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 NuvyXis.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
