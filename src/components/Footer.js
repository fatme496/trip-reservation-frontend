import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>TripInLEB</h3>
          <p>Discover, join, or organize group trips across Lebanon. Adventure made easy.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/exploretrips">Explore Trips</a></li>
            <li><a href="/post-trip">Create Trip</a></li>
            <li><a href="/my-reservations">My reservations</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          {/* <div className="social-icons">
            <a href="http://facebook.com"><span>📘</span></a>
            <a href="http://instagram.com"><span>📸</span></a>
            <a href="http://x.com"><span>🐦</span></a>
          </div> */}
          <div className="social-icons" style={{ display: "flex", gap: "10px" }}>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF size={24} color="#1877F2" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={24} color="#E1306C" />
  </a>
  <a href="https://x.com" target="_blank" rel="noopener noreferrer">
    <FaXTwitter size={24} color="#000" />
  </a>
</div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TripInLEB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;