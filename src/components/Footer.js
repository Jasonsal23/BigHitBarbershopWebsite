import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-divider"></div>

      <div className="footer-content">
        <div className="footer-locations">
          <div className="footer-location">
            <Link to="/lasvegas" className="footer-location-title">
              <h4>Las Vegas</h4>
            </Link>
            <p className="footer-address">5651 S Grand Canyon Dr Suite 105</p>
            <p className="footer-address">Las Vegas, NV 89148</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/BigHitBarbershopLasVegas"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Las Vegas Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/bighitbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Las Vegas Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-location">
            <Link to="/kenosha" className="footer-location-title">
              <h4>Kenosha</h4>
            </Link>
            <p className="footer-address">6011 39th Ave</p>
            <p className="footer-address">Kenosha, WI 53142</p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/people/Big-Hit-Barber-Shop/100063522822677/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Kenosha Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/big_hit_kenosha/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Kenosha Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-app-stores">
          <p className="footer-app-text">Download Our App</p>
          <div className="footer-store-buttons">
            <a
              href="https://apps.apple.com/us/app/big-hit-barbershop/id6473648624"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
              aria-label="Download on the App Store"
            >
              <FaApple className="store-icon" />
              <div className="store-text">
                <span className="store-label">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=your.app.id"
              target="_blank"
              rel="noopener noreferrer"
              className="store-button"
              aria-label="Get it on Google Play"
            >
              <FaGooglePlay className="store-icon" />
              <div className="store-text">
                <span className="store-label">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/accessibility" className="footer-link">Accessibility</Link>
            <span className="footer-link-divider">|</span>
            <Link to="/terms" className="footer-link">Terms of Service</Link>
            <span className="footer-link-divider">|</span>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
          <p className="footer-copyright">
            {currentYear} Big Hit Barbershop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
