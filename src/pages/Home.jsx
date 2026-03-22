import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, BrainCircuit, Map, Star, UserPlus, FileCheck, PartyPopper } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Reimagining Beauty Through the Power of Nature & AI</h1>
          <p className="hero-subtitle">
            Naturals Herbals combines ancient herbal wisdom with cutting-edge salon intelligence to deliver personalised, consistent, data-driven beauty experiences across every branch.
          </p>
          <div className="hero-actions">
            <Link to="/book">
              <Button variant="primary">Book a Service</Button>
            </Link>
            <Link to="/technology">
              <Button variant="secondary">Explore Our Technology</Button>
            </Link>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat-item">
          <h3 className="stat-number">142+</h3>
          <p className="stat-label">Branches</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">1,800+</h3>
          <p className="stat-label">Trained Stylists</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">50,000+</h3>
          <p className="stat-label">Happy Customers</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">98%</h3>
          <p className="stat-label">Service Consistency Score</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Naturals Herbals?</h2>
        <div className="features-grid">
          <Card className="feature-card">
            <div className="feature-icon"><Leaf size={32} /></div>
            <h3>Herbal-First Services</h3>
            <p>Every treatment uses certified natural and herbal ingredients, free from harsh chemicals. Formulated for Indian hair and skin.</p>
          </Card>
          <Card className="feature-card">
            <div className="feature-icon"><BrainCircuit size={32} /></div>
            <h3>AI-Powered Skill Matching</h3>
            <p>Our intelligent system matches you to the right stylist based on your hair type, service history, and stylist skill level.</p>
          </Card>
          <Card className="feature-card">
            <div className="feature-icon"><Map size={32} /></div>
            <h3>Consistent Across Every Branch</h3>
            <p>Whether you visit Anna Nagar or Tambaram, your experience is standardised, scored, and quality-checked in real time.</p>
          </Card>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>Your Journey to Radiant Beauty</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-icon"><UserPlus size={24} /></div>
            <h4 className="step-title">Book your appointment online</h4>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-icon"><BrainCircuit size={24} /></div>
            <h4 className="step-title">Get matched to a certified stylist</h4>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-icon"><PartyPopper size={24} /></div>
            <h4 className="step-title">Receive your personalised herbal treatment</h4>
          </div>
          <div className="step-connector"></div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-icon"><FileCheck size={24} /></div>
            <h4 className="step-title">Rate your experience — it trains our AI</h4>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-grid">
          <Card className="testimonial-card">
            <div className="stars">
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
            </div>
            <p className="review">"The AI match was perfect! The stylist knew exactly how to handle my curly hair, and the herbal spa left it so soft."</p>
            <p className="author">- Priya S., Anna Nagar</p>
          </Card>
          <Card className="testimonial-card">
            <div className="stars">
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star color="#EF9F27" size={18} />
            </div>
            <p className="review">"I love that all their products are 100% natural. The facial cleared my skin without any chemical irritation."</p>
            <p className="author">- Ananya M., OMR</p>
          </Card>
          <Card className="testimonial-card">
            <div className="stars">
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
              <Star fill="#EF9F27" color="#EF9F27" size={18} />
            </div>
            <p className="review">"Consistently excellent. I've been to three different branches and the service quality is exactly the same everywhere."</p>
            <p className="author">- Radhika V., Adyar</p>
          </Card>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Join 50,000+ customers who trust Naturals Herbals</h2>
        <Link to="/book">
          <Button variant="primary">Book Your AI-Matched Stylist</Button>
        </Link>
      </section>
    </div>
  );
}
