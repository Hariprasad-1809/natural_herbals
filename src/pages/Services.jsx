import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Heart, Crown } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import './Services.css';

export default function Services() {
  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Services — Crafted with Nature, Delivered with Precision</h1>
        <p>Experience beauty treatments powered by ancient herbal wisdom and modern salon intelligence.</p>
      </div>

      <div className="services-container">
        
        {/* Hair Care */}
        <div className="service-category">
          <div className="category-header">
            <Scissors className="category-icon" size={28} />
            <h2>Hair Care</h2>
          </div>
          <div className="services-grid">
            <Card className="service-card">
              <h3>Herbal Haircut & Styling</h3>
              <p>Precision cut matching your face shape and hair texture.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Natural Hair Colouring</h3>
              <p>Plant-based, ammonia-free colours for vibrant, healthy hair.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Keratin & Protein Treatments</h3>
              <p>Frizz-free, smooth hair using botanical protein extracts.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Scalp Analysis & Oil Therapy</h3>
              <p>AI-assisted analysis followed by targeted herbal oil massage.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
          </div>
        </div>

        {/* Skin & Facial */}
        <div className="service-category">
          <div className="category-header">
            <Sparkles className="category-icon" size={28} />
            <h2>Skin & Facial</h2>
          </div>
          <div className="services-grid">
            <Card className="service-card">
              <h3>Herbal Facial & Cleanup</h3>
              <p>Deep cleansing using organic scrubs and fruit extracts.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Skin Type Diagnosis</h3>
              <p>Custom diagnosis to formulate the perfect skincare routine.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>De-tan & Brightening</h3>
              <p>Natural de-tan packs featuring turmeric, saffron, and milk.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Ayurvedic Face Packs</h3>
              <p>Traditional ubtans for a glowing, youthful complexion.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
          </div>
        </div>

        {/* Bridal & Special Occasions */}
        <div className="service-category">
          <div className="category-header">
            <Crown className="category-icon" size={28} />
            <h2>Bridal & Special Occasions</h2>
          </div>
          <div className="services-grid">
            <Card className="service-card">
              <h3>Bridal Makeup</h3>
              <p>Flawless, natural finish highlighting your best features.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Pre-Bridal Skin Prep</h3>
              <p>Multi-session packages for radiant wedding-day skin.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Mehndi & Styling</h3>
              <p>Intricate organic henna designs and traditional styling.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
          </div>
        </div>

        {/* Wellness Add-ons */}
        <div className="service-category">
          <div className="category-header">
            <Heart className="category-icon" size={28} />
            <h2>Wellness Add-ons</h2>
          </div>
          <div className="services-grid">
            <Card className="service-card">
              <h3>Head Massage (Herbal Oils)</h3>
              <p>Stress-relieving massage promoting circulation and hair growth.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Aromatherapy Scalp Treatment</h3>
              <p>Calming essential oils to rebalance mind and scalp health.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
            <Card className="service-card">
              <h3>Hair Spa with Botanicals</h3>
              <p>Deep conditioning treatment rescuing damaged hair.</p>
              <Link to="/book"><Button variant="primary">Book Now</Button></Link>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
}
