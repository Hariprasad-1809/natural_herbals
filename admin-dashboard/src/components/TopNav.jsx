import React from 'react';
import { Search, Bell } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function TopNav() {
  const location = useLocation();

  // Determine title based on path
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/': return 'Dashboard Overview';
      case '/staff': return 'Staff Management';
      case '/skills': return 'Skill Levels & Tracking';
      case '/revenue': return 'Revenue Analytics';
      case '/bookings': return 'Central Bookings';
      case '/branches': return 'Branch Network';
      case '/training': return 'Training & Certification';
      case '/reports': return 'System Reports';
      default: return 'Admin Dashboard';
    }
  };

  return (
    <header className="bg-admin-white h-16 border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      {/* Page Title */}
      <h1 className="text-xl font-bold text-admin-dark hidden md:block w-1/4">
        {getPageTitle()}
      </h1>

      {/* Global Search */}
      <div className="flex-1 max-w-xl mx-auto">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </span>
          <input 
            type="text" 
            placeholder="Search by name, branch, employee ID..." 
            className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full focus:ring-admin-success focus:border-admin-success block pl-10 p-2 transition-colors"
          />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center justify-end gap-5 w-1/4">
        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:text-admin-dark hover:bg-gray-100 rounded-full transition-colors">
          <Bell size={22} />
          <span className="absolute top-1 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-admin-danger text-[10px] font-bold text-white ring-2 ring-white">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-gray-50">
          <img 
            src="https://placehold.co/32x32/EF9F27/FFFFFF?text=RK" 
            alt="Admin" 
            className="w-8 h-8 rounded-full border border-gray-200"
          />
        </div>
      </div>
    </header>
  );
}
