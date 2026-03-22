import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-admin-cream overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden relative">
        {/* Fixed Top Navbar */}
        <TopNav />

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto pb-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
