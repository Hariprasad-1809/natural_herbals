import React, { useState } from 'react';
import { Search, ChevronDown, Check, Edit2, Eye, Star } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function Staff() {
  const staffData = [
    { id: '1', name: 'Priya Krishnan', empId: 'NH-1042', branch: 'Anna Nagar', level: 'L3', score: 4.8, certs: 'Colour, Skin, Keratin', status: 'Active' },
    { id: '2', name: 'Sunita Rao', empId: 'NH-0891', branch: 'T. Nagar', level: 'L3', score: 4.5, certs: 'Colour, Skin', status: 'Active' },
    { id: '3', name: 'Anitha M', empId: 'NH-1103', branch: 'Adyar', level: 'L2', score: 4.1, certs: 'Colour', status: 'Active' },
    { id: '4', name: 'Lakshmi V', empId: 'NH-0754', branch: 'Velachery', level: 'L2', score: 3.7, certs: 'Basic cert', status: 'Active' },
    { id: '5', name: 'Divya J', empId: 'NH-1287', branch: 'Tambaram', level: 'L1', score: 2.9, certs: 'Basic cert', status: 'Active' },
    { id: '6', name: 'Rekha N', empId: 'NH-0623', branch: 'Porur', level: 'L2', score: 3.9, certs: 'Colour', status: 'Active' },
    { id: '7', name: 'Brinda M', empId: 'NH-1198', branch: 'OMR', level: 'L1', score: 3.1, certs: 'Basic cert', status: 'Active' },
    { id: '8', name: 'Kavya S', empId: 'NH-0445', branch: 'Mylapore', level: 'L2', score: 4.0, certs: 'Colour, Skin', status: 'Active' },
    { id: '9', name: 'Meena T', empId: 'NH-1320', branch: 'Chromepet', level: 'L1', score: 2.6, certs: 'Basic cert', status: 'On Leave' },
    { id: '10', name: 'Shalini R', empId: 'NH-0378', branch: 'Anna Nagar', level: 'L3', score: 4.6, certs: 'Colour, Skin, Keratin', status: 'Active' },
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'L3': return 'green';
      case 'L2': return 'blue';
      case 'L1': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className="space-y-6 fade-in">
      
      {/* Top Bar Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1 w-full flex flex-col md:flex-row gap-3">
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </span>
            <input 
              type="text" 
              placeholder="Search by name, branch, level..." 
              className="w-full bg-white border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-admin-success focus:border-admin-success block pl-10 p-2.5"
            />
          </div>
          
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none min-w-[150px]">
            <option>All Branches</option>
            <option>Anna Nagar</option>
            <option>T. Nagar</option>
            <option>Adyar</option>
          </select>
          
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none min-w-[150px]">
            <option>All Levels</option>
            <option>L1 Basic</option>
            <option>L2 Proficient</option>
            <option>L3 Specialist</option>
          </select>

          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none min-w-[150px]">
            <option>All Status</option>
            <option>Active</option>
            <option>On Leave</option>
          </select>
        </div>
        
        <button className="bg-admin-gold hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm">
          <span>+ Add New Staff</span>
        </button>
      </div>

      {/* Staff Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-5 py-4 font-semibold cursor-pointer select-none group">
                  Name <span className="inline-block opacity-0 group-hover:opacity-100 transition-opacity">↓</span>
                </th>
                <th className="px-5 py-4 font-semibold">Employee ID</th>
                <th className="px-5 py-4 font-semibold">Branch</th>
                <th className="px-5 py-4 font-semibold">Level</th>
                <th className="px-5 py-4 font-semibold cursor-pointer">Skill Score</th>
                <th className="px-5 py-4 font-semibold">Certifications</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {staffData.map((staff) => (
                <tr key={staff.id} className="hover:bg-orange-50/40 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-admin-cream flex items-center justify-center font-bold text-admin-success border border-green-100">
                        {staff.name.charAt(0)}
                      </div>
                      <span className="font-semibold text-admin-dark">{staff.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-500 font-mono text-xs">{staff.empId}</td>
                  <td className="px-5 py-4 text-gray-700">{staff.branch}</td>
                  <td className="px-5 py-4">
                    <Badge variant={getLevelColor(staff.level)}>{staff.level}</Badge>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-admin-dark">{staff.score}</span>
                      <Star fill={staff.score >= 4.0 ? "#EF9F27" : "#CBD5E1"} color={staff.score >= 4.0 ? "#EF9F27" : "#CBD5E1"} size={14} />
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-600 text-xs">{staff.certs}</td>
                  <td className="px-5 py-4">
                    <Badge variant={staff.status === 'Active' ? 'green' : 'amber'}>{staff.status}</Badge>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-admin-success bg-gray-50 hover:bg-green-50 rounded transition-colors" title="View Profile">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-admin-gold bg-gray-50 hover:bg-yellow-50 rounded transition-colors" title="Edit Staff">
                        <Edit2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm">
          <span className="text-gray-500">Showing <span className="font-semibold text-gray-800">1-10</span> of <span className="font-semibold text-gray-800">1,847</span> staff details</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-400 cursor-not-allowed bg-gray-50">Prev</button>
            <button className="px-3 py-1.5 border border-admin-success bg-green-50 text-admin-success font-medium rounded">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">2</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">3</button>
            <span className="px-2 py-1.5 text-gray-400">...</span>
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 shadow-sm bg-white">Next</button>
          </div>
        </div>
      </Card>
      
    </div>
  );
}
