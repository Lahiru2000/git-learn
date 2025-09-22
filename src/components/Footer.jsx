import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">TimeZone</h3>
            <p className="footer-description">
              Crafting exceptional timepieces since 2008. 
              We believe every moment deserves the perfect watch.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">📷</a>
              <a href="#" className="social-link">🐦</a>
              <a href="#" className="social-link">💼</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links">
              <li><a href="#luxury">Luxury Watches</a></li>
              <li><a href="#sports">Sports Watches</a></li>
              <li><a href="#classic">Classic Collection</a></li>
              <li><a href="#limited">Limited Edition</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#shipping">Shipping Info</a></li>
              <li><a href="#returns">Returns & Exchanges</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#care">Watch Care Guide</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About TimeZone</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#investors">Investors</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
            <div className="contact-info">
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ hello@timezone.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 TimeZone. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
