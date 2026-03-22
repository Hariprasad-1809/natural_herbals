import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col col-brand">
          <div className="footer-logo">
            <img src="https://placehold.co/40x40/FFFFFF/1D9E75?text=NH" alt="Naturals Herbals" className="footer-logo-img" />
            <span className="footer-logo-text">Naturals Herbals</span>
          </div>
          <p className="footer-tagline">"Rooted in Nature. Powered by Intelligence."</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/book">Book Appointment</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Our Services</h4>
          <ul className="footer-links">
            <li><Link to="/services">Herbal Hair Care</Link></li>
            <li><Link to="/services">Skin & Facial</Link></li>
            <li><Link to="/services">Bridal Packages</Link></li>
            <li><Link to="/services">Wellness Add-ons</Link></li>
          </ul>
        </div>
        
        <div className="footer-col col-contact">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <MapPin size={18} />
              <span>No. 12, Green Avenue, Anna Nagar, Chennai — 600040</span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 98400 XXXXX</span>
            </li>
            <li>
              <Mail size={18} />
              <span>hello@naturalsherbals.in</span>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Naturals Herbals. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
