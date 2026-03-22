import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="https://placehold.co/40x40/1D9E75/FFFFFF?text=NH" alt="Naturals Herbals" className="logo-img" />
          <span className="logo-text">Naturals Herbals</span>
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/technology" className="nav-link" onClick={() => setIsOpen(false)}>Technology</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <div className="navbar-mobile-cta">
            <Link to="/book" onClick={() => setIsOpen(false)}>
              <Button variant="primary">Book Now</Button>
            </Link>
          </div>
        </div>
        
        <div className="navbar-cta">
          <Link to="/book">
            <Button variant="primary">Book Now</Button>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
