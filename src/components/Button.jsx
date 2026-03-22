import React from 'react';
import './Button.css';

export default function Button({ children, variant = 'primary', className = '', onClick, type = 'button' }) {
  return (
    <button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
