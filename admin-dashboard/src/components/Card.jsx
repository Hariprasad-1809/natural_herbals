import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-admin-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {children}
    </div>
  );
}
