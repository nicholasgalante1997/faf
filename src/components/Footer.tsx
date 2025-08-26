import React, { memo } from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Friends Already Foundation</h3>
            <p>Building friendships, changing lives through compassionate action and community support.</p>
            <div className="social-links">
              <a target="_blank" href="www.linkedin.com/in/max-frank-46bb84324" aria-label="LinkedIn">
                💼
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/programs">Our Programs</a>
              </li>
              <li>
                <a href="/impact">Our Impact</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Involved</h4>
            <ul>
              <li>
                <a href="/contact#volunteer">Volunteer</a>
              </li>
              <li>
                <a href="/contact#partnership">Partner with Us</a>
              </li>
              <li>
                <a href="/contact#newsletter">Newsletter</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <address>
              <p>📞 (917) 702-2122</p>
              <p>✉️ friendsalreadyfoundation@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Friends Already Foundation. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/legal#privacy">Privacy Policy</a>
            <a href="/legal#terms">Terms of Service</a>
            <a href="/legal#transparency">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
