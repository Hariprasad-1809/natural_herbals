import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import './Technology.css';

export default function Technology() {
  return (
    <div className="technology-page">
      <div className="tech-hero">
        <h1>The Brain Behind Every Beautiful Experience</h1>
        <p>Our proprietary Salon Intelligence System turns training data, skill scores, and customer feedback into real-time decisions that improve quality across every branch.</p>
      </div>

      <div className="tech-features">
        <div className="feature-block">
          <div className="feature-image">
            <img src="https://placehold.co/600x400/1D9E75/FFFFFF?text=Skill+Mapping" alt="Skill Mapping UI" />
          </div>
          <div className="feature-text">
            <h2>Skill-Level Mapping (L1 → L3)</h2>
            <p>Every stylist is assessed and placed on a structured 3-tier growth pathway. L1 handles core services. L2 works independently across service types. L3 specialists can perform advanced treatments and train junior staff.</p>
          </div>
        </div>

        <div className="feature-block reverse">
          <div className="feature-image">
            <img src="https://placehold.co/600x400/EF9F27/FFFFFF?text=Predictive+AI" alt="Predictive dashboard" />
          </div>
          <div className="feature-text">
            <h2>Predictive Gap Detection</h2>
            <p>Our AI forecasts which branches will face skill shortfalls before they happen — especially ahead of peak seasons like weddings and festivals. Managers receive alerts 60–90 days early to initiate targeted training.</p>
          </div>
        </div>

        <div className="feature-block">
          <div className="feature-image">
            <img src="https://placehold.co/600x400/085041/FFFFFF?text=Revenue+Analytics" alt="Revenue Insights" />
          </div>
          <div className="feature-text">
            <h2>Training Data → Revenue Insights</h2>
            <p>We correlate every training module completed with actual revenue generated per stylist. If our new advanced colour module consistently generates ₹680 more per shift, we automatically scale the curriculum chain-wide.</p>
          </div>
        </div>

        <div className="feature-block reverse">
          <div className="feature-image">
            <img src="https://placehold.co/600x400/1D9E75/FFFFFF?text=HQ+Dashboard" alt="HQ Dashboard" />
          </div>
          <div className="feature-text">
            <h2>Franchise Performance Dashboards</h2>
            <p>HQ and branch managers see real-time dashboards showing aggregated skill scores, customer complaint rates, training completion percentages, and revenue-per-seat across all 142 branches simultaneously.</p>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <h2>Built on Modern Architecture</h2>
        <div className="badges-row">
          <span className="badge">React</span>
          <span className="badge">FastAPI</span>
          <span className="badge">PostgreSQL</span>
          <span className="badge">Python ML</span>
          <span className="badge">Claude AI</span>
          <span className="badge">Redis</span>
        </div>
      </div>

      <div className="tech-cta">
        <h2>Ready to upgrade your salon's intelligence?</h2>
        <Link to="/contact">
          <Button variant="primary">Want to bring this to your franchise? Contact Us <ArrowRight size={18} /></Button>
        </Link>
      </div>
    </div>
  );
}
