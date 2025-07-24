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
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="LinkedIn">
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
                <a href="/donate">Make a Donation</a>
              </li>
              <li>
                <a href="#volunteer">Volunteer</a>
              </li>
              <li>
                <a href="#partnership">Partner with Us</a>
              </li>
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <address>
              <p>
                📍 123 Hope Street
                <br />
                Kindness City, KC 12345
              </p>
              <p>📞 (555) 123-HOPE</p>
              <p>✉️ info@hopefoundation.org</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Friends Already Foundation. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#transparency">Financial Transparency</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
