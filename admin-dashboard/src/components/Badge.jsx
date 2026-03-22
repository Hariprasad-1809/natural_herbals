import React from 'react';

export default function Badge({ children, variant = 'gray', className = '' }) {
  const getColors = () => {
    switch(variant) {
      case 'green': return 'bg-[#E1F5EE] text-admin-dark'; // L3 / Confirmed / Active
      case 'blue': return 'bg-[#E6F1FB] text-[#0C447C]'; // L2 / In Progress
      case 'purple': return 'bg-[#EEEDFE] text-[#3C3489]'; // L1
      case 'amber': return 'bg-yellow-100 text-yellow-800'; // On Leave
      case 'red': return 'bg-red-100 text-admin-danger'; // Cancelled
      default: return 'bg-gray-100 text-gray-800'; // Pending / default
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-medium text-xs ${getColors()} ${className}`}>
      {children}
    </span>
  );
}
