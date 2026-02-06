import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-col">
          <h2 className="brand">DEVBEANS</h2>
          <p className="desc">
            We are committed to providing you with the most affordable and
            convenient flight booking, enabling travel planning simple and
            enjoyable.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {/*<li>
              <a href="#">About Us</a>
            </li>*/}
            <li>
              <a href="#">Why Choose Us</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* See More */}
        <div className="footer-col">
          <h4>See More</h4>
          <ul>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="contact">
            <li>
              <FaEnvelope /> info@devbeans.com
            </li>
            <li>
              <FaPhoneAlt /> +91 XXXXX XXXXX
            </li>
            <li>
              <FaMapMarkerAlt /> Madurai, Tamil Nadu, India.
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Copyright Travel Agency</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
