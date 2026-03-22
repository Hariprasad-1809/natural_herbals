import React from 'react';
import Card from '../components/Card';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      {/* Company Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2>Born from Nature. Built for Modern India.</h2>
          <p>
            Naturals Herbals was founded with a single belief — that beauty should never come at the cost of health. 
            Starting from a small salon in Chennai, we grew into a 142-branch franchise powered by herbal formulations 
            and AI-driven quality control.
          </p>
          <p>
            Every product we use is sourced from certified herbal suppliers. Every stylist we train is assessed, 
            graded, and mentored through our L1-to-L3 skill pathway system. We bridge the gap between ancient ayurvedic principles 
            and next-generation salon intelligence to ensure consistently perfect outcomes.
          </p>
        </div>
        <div className="story-image-placeholder">
          <img src="https://placehold.co/600x400/F1EFE8/1D9E75?text=Brand+Origin" alt="Naturals Herbals Origin" />
        </div>
      </section>

      {/* MVV Section */}
      <section className="mvv-section">
        <div className="mvv-container">
          <Card className="mvv-card" hoverEffect={false}>
            <h3>Our Mission</h3>
            <p>To deliver consistent, natural beauty experiences at scale, making premium herbal treatments accessible to everyone across India.</p>
          </Card>
          <Card className="mvv-card" hoverEffect={false}>
            <h3>Our Vision</h3>
            <p>To be India's most trusted herbal salon chain by 2030, setting the benchmark for skill standardisation and tech-enabled beauty.</p>
          </Card>
          <Card className="mvv-card" hoverEffect={false}>
            <h3>Our Values</h3>
            <ul className="values-list">
              <li><strong>Purity:</strong> 100% natural, certified ingredients.</li>
              <li><strong>Consistency:</strong> The same fantastic service everywhere.</li>
              <li><strong>Personalisation:</strong> Beauty tailored to your unique profile.</li>
              <li><strong>Growth:</strong> Empowering our stylists through continuous learning.</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <Card className="team-card">
            <div className="team-photo">
              <img src="https://placehold.co/150x150/1D9E75/FFFFFF?text=F" alt="Founder & CEO" />
            </div>
            <h4>Founder & CEO</h4>
            <p className="team-role">Visionary behind Naturals Herbals.</p>
          </Card>
          <Card className="team-card">
            <div className="team-photo">
              <img src="https://placehold.co/150x150/1D9E75/FFFFFF?text=HQ" alt="Head of Training & Quality" />
            </div>
            <h4>Head of Training & Quality</h4>
            <p className="team-role">Standardising excellence across all branches.</p>
          </Card>
          <Card className="team-card">
            <div className="team-photo">
              <img src="https://placehold.co/150x150/1D9E75/FFFFFF?text=CTO" alt="Chief Technology Officer" />
            </div>
            <h4>Chief Technology Officer</h4>
            <p className="team-role">Architect of our Salon Intelligence System.</p>
          </Card>
          <Card className="team-card">
            <div className="team-photo">
              <img src="https://placehold.co/150x150/1D9E75/FFFFFF?text=HF" alt="Head of Herbal Formulations" />
            </div>
            <h4>Head of Herbal Formulations</h4>
            <p className="team-role">Curating nature's best ingredients for you.</p>
          </Card>
        </div>
      </section>

      {/* Franchise Numbers (Re-use stats style) */}
      <section className="franchise-numbers">
        <h2>Our Growing Footprint</h2>
        <div className="stats-bar-inline">
          <div className="stat-item">
            <h3 className="stat-number">142+</h3>
            <p className="stat-label">Branches Active</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">25+</h3>
            <p className="stat-label">Cities Covered</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">5,000+</h3>
            <p className="stat-label">Appointments Daily</p>
          </div>
        </div>
      </section>
    </div>
  );
}
