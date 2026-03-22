import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../components/Button';
import './Book.css';

export default function Book() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    branch: '',
    category: '',
    date: '',
    time: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Mock branches for dropdown
  const getBranches = (city) => {
    switch(city) {
      case 'Chennai': return ['Anna Nagar', 'Tambaram', 'Adyar', 'OMR'];
      case 'Bangalore': return ['Indiranagar', 'Koramangala', 'Whitefield'];
      case 'Hyderabad': return ['Banjara Hills', 'Jubilee Hills', 'Gachibowli'];
      default: return [];
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'city' ? { branch: '' } : {}) // Reset branch on city change
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, API call goes here
  };

  return (
    <div className="book-page">
      <div className="book-container">
        <div className="book-header">
          <h1>Book Your Appointment</h1>
          <p>Experience the perfect blend of herbal purity and AI-matched styling.</p>
        </div>

        {submitted ? (
          <div className="booking-success">
            <div className="success-icon">✓</div>
            <h2>Booking Request Received!</h2>
            <p>Our team will confirm your booking within 2 hours via WhatsApp.</p>
            <Button variant="secondary" onClick={() => setSubmitted(false)}>Book Another Service</Button>
          </div>
        ) : (
          <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <select required id="city" name="city" value={formData.city} onChange={handleChange}>
                  <option value="">Select your city</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="branch">Branch</label>
                <select required id="branch" name="branch" value={formData.branch} onChange={handleChange} disabled={!formData.city}>
                  <option value="">Select a branch</option>
                  {getBranches(formData.city).map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category">Service Category</label>
              <select required id="category" name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select a service category</option>
                <option value="Hair">Herbal Hair Care</option>
                <option value="Skin">Skin & Facial</option>
                <option value="Bridal">Bridal & Special Occasions</option>
                <option value="Wellness">Wellness Add-ons</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input required type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <input required type="time" id="time" name="time" value={formData.time} onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="notes">Special Notes (Optional)</label>
              <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} placeholder="Any specific therapist preference or skin/hair conditions our AI should know about?"></textarea>
            </div>

            <Button type="submit" variant="primary" className="submit-btn">
              Book My Appointment
            </Button>
          </form>
        )}

        <div className="whatsapp-notice">
          <div className="wa-icon-wrapper">
            <Send size={20} />
          </div>
          <p>Our team will confirm your booking within 2 hours via WhatsApp.<br/><strong>Need urgent help? +91 98400 XXXXX</strong></p>
        </div>
      </div>
    </div>
  );
}
