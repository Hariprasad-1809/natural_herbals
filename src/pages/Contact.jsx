import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/Button';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to answer any questions about our services, intelligence system, or franchise opportunities.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info-panel">
          <h2>Contact Information</h2>
          <p className="contact-desc">Reach out to our HQ or visit our flagship Anna Nagar branch.</p>
          
          <div className="info-list">
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>No. 12, Green Avenue,<br/>Anna Nagar, Chennai — 600040</p>
              </div>
            </div>
            
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 98400 XXXXX</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>hello@naturalsherbals.in</p>
              </div>
            </div>

            <div className="info-item">
              <Clock className="info-icon" />
              <div>
                <h4>Hours</h4>
                <p>Mon–Sat: 9 AM – 8 PM<br/>Sun: 10 AM – 6 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea required id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="How can we help you?"></textarea>
            </div>
            
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </div>
      </div>

      <div className="map-placeholder">
        <div className="map-overlay">
          <h3>Naturals Herbals HQ</h3>
          <p>Anna Nagar, Chennai</p>
        </div>
        <img src="https://placehold.co/1200x400/F1EFE8/1D9E75?text=Google+Maps+Integration+Placeholder" alt="Map Location" />
      </div>
    </div>
  );
}
