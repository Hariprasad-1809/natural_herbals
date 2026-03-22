import React from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Home, Users, Star, BarChart2, Calendar, MapPin, BookOpen, FileText } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Staff Management', path: '/staff', icon: Users },
  { name: 'Skill Levels', path: '/skills', icon: Star },
  { name: 'Revenue', path: '/revenue', icon: BarChart2 },
  { name: 'Bookings', path: '/bookings', icon: Calendar },
  { name: 'Branches', path: '/branches', icon: MapPin },
  { name: 'Training', path: '/training', icon: BookOpen },
  { name: 'Reports', path: '/reports', icon: FileText },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-admin-dark h-screen fixed top-0 left-0 flex flex-col text-admin-white shadow-xl z-20">
      {/* Logo Area */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <div className="bg-admin-white p-1.5 rounded text-admin-dark">
          <Leaf size={24} />
        </div>
        <span className="font-bold text-lg tracking-wide">Naturals Herbals</span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 transition-colors ${
                  isActive 
                    ? 'bg-white/10 border-l-4 border-admin-gold text-white' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent'
                }`
              }
            >
              <item.icon size={20} className="shrink-0" />
              <span className="font-medium text-sm">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="p-4 border-t border-white/10 bg-black/10">
        <div className="flex items-center gap-3">
          <img 
            src="https://placehold.co/40x40/EF9F27/FFFFFF?text=RK" 
            alt="Admin Avatar" 
            className="w-10 h-10 rounded-full border-2 border-admin-gold"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate text-white">Rajan Krishnan</p>
            <p className="text-xs text-admin-gold">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
