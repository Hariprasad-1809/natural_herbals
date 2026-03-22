import React from 'react';
import { MapPin, Users, Star, TrendingUp, MoreHorizontal, FileText } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function Branches() {
  const branchesData = [
    { name: 'Anna Nagar', city: 'Chennai', mgr: 'Ramesh K', staff: 18, score: 4.2, rev: '18.2L', status: 'Active' },
    { name: 'T. Nagar', city: 'Chennai', mgr: 'Deepa S', staff: 15, score: 3.9, rev: '16.8L', status: 'Active' },
    { name: 'Adyar', city: 'Chennai', mgr: 'Vijay M', staff: 14, score: 3.7, rev: '15.4L', status: 'Active' },
    { name: 'Mylapore', city: 'Chennai', mgr: 'Preethi R', staff: 12, score: 3.8, rev: '14.9L', status: 'Active' },
    { name: 'OMR', city: 'Chennai', mgr: 'Karthik B', staff: 13, score: 3.5, rev: '13.8L', status: 'Active' },
    { name: 'Velachery', city: 'Chennai', mgr: 'Anand P', staff: 11, score: 3.1, rev: '11.7L', status: 'Under Review' },
    { name: 'Tambaram', city: 'Chennai', mgr: 'Suresh L', staff: 10, score: 2.9, rev: '10.4L', status: 'Under Review' },
    { name: 'Porur', city: 'Chennai', mgr: 'Nisha V', staff: 12, score: 3.4, rev: '12.9L', status: 'Active' },
    { name: 'Chromepet', city: 'Chennai', mgr: 'Arun J', staff: 9, score: 3.3, rev: '11.2L', status: 'Active' },
    { name: 'Sholinganallur', city: 'Chennai', mgr: 'Meena T', staff: 11, score: 3.2, rev: '12.1L', status: 'Active' },
    { name: 'Coimbatore Central', city: 'Coimbatore', mgr: 'Ravi S', staff: 16, score: 4.0, rev: '17.5L', status: 'Active' },
    { name: 'Madurai Main', city: 'Madurai', mgr: 'Geetha K', staff: 14, score: 3.6, rev: '14.2L', status: 'Active' },
  ];

  return (
    <div className="space-y-6 fade-in">
      
      {/* Header Actions */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex gap-4">
          <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none font-medium min-w-[150px]">
            <option>All Regions</option>
            <option>Chennai Network</option>
            <option>Rest of Tamil Nadu</option>
          </select>
          <select className="bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none font-medium min-w-[150px]">
            <option>All Status</option>
            <option>Active</option>
            <option>Under Review</option>
          </select>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 font-medium py-2 px-4 rounded-lg transition-colors text-sm">
            <FileText size={16} /> Export
          </button>
          <button className="bg-admin-dark hover:bg-[#063a2e] text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm shadow-sm">
            + Add New Branch
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {branchesData.map((branch, idx) => (
          <Card key={idx} className="flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group">
            {/* Status indicator bar top */}
            <div className={`h-1 w-full absolute top-0 left-0 ${branch.status === 'Active' ? 'bg-admin-success' : 'bg-admin-danger'}`}></div>
            
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-admin-dark leading-tight">{branch.name}</h3>
                  <p className="text-xs text-gray-500 font-medium tracking-wide flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {branch.city}
                  </p>
                </div>
                <Badge variant={branch.status === 'Active' ? 'green' : 'amber'} className="!text-[10px] uppercase">
                  {branch.status}
                </Badge>
              </div>

              <div className="space-y-4 my-6">
                <div className="flex items-center justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500 flex items-center gap-2"><Users size={16} className="text-gray-400"/> Manager</span>
                  <span className="font-medium text-admin-dark">{branch.mgr}</span>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500 flex items-center gap-2"><Users size={16} className="text-gray-400"/> Total Staff</span>
                  <span className="font-semibold text-admin-dark">{branch.staff}</span>
                </div>
                <div className="flex items-center justify-between text-sm border-b border-gray-50 pb-2">
                  <span className="text-gray-500 flex items-center gap-2"><Star size={16} className="text-gray-400"/> Avg Score</span>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-admin-dark">{branch.score}</span>
                    <Star fill="#EF9F27" color="#EF9F27" size={12} />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pb-1">
                  <span className="text-gray-500 flex items-center gap-2"><TrendingUp size={16} className="text-gray-400"/> Monthly Rev</span>
                  <span className="font-bold text-admin-success">₹{branch.rev}</span>
                </div>
              </div>
            </div>

            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50/50 flex justify-between items-center group-hover:bg-green-50/50 transition-colors">
              <button className="text-sm font-semibold text-admin-success hover:underline">View Full Details</button>
              <button className="text-gray-400 hover:text-admin-dark p-1 rounded-full hover:bg-gray-200 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </Card>
        ))}
      </div>
      
    </div>
  );
}
