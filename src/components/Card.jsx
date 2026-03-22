import React from 'react';
import './Card.css';

export default function Card({ children, className = '', hoverEffect = true }) {
  return (
    <div className={`card ${hoverEffect ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
}
