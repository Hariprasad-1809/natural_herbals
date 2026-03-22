import React from 'react';
import { ChevronRight, CheckCircle2, Circle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import Card from '../components/Card';
import Badge from '../components/Badge';

export default function Skills() {
  const categoryScores = [
    { name: 'Haircut & Styling', value: 4.4 },
    { name: 'Consultation', value: 3.8 },
    { name: 'Colour & Highlights', value: 3.1 },
    { name: 'Skin & Facials', value: 2.7 },
    { name: 'Keratin Treatments', value: 2.2 },
    { name: 'Hygiene & Safety', value: 4.6 },
  ];

  const staffData = [
    { id: '1', name: 'Priya Krishnan', empId: 'NH-1042', branch: 'Anna Nagar', level: 'L3', score: 4.8, lastEval: 'Oct 12, 2025', nextEval: 'Apr 12, 2026', training: 100 },
    { id: '2', name: 'Sunita Rao', empId: 'NH-0891', branch: 'T. Nagar', level: 'L3', score: 4.5, lastEval: 'Nov 05, 2025', nextEval: 'May 05, 2026', training: 90 },
    { id: '3', name: 'Anitha M', empId: 'NH-1103', branch: 'Adyar', level: 'L2', score: 4.1, lastEval: 'Jan 15, 2026', nextEval: 'Jul 15, 2026', training: 75 },
    { id: '4', name: 'Lakshmi V', empId: 'NH-0754', branch: 'Velachery', level: 'L2', score: 3.7, lastEval: 'Dec 20, 2025', nextEval: 'Jun 20, 2026', training: 50 },
    { id: '5', name: 'Divya J', empId: 'NH-1287', branch: 'Tambaram', level: 'L1', score: 2.9, lastEval: 'Feb 10, 2026', nextEval: 'Aug 10, 2026', training: 30 },
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
      
      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-[#7F77DD]">
          <h3 className="text-lg font-bold text-[#3C3489] mb-1">L1 Basic</h3>
          <p className="text-3xl font-bold text-admin-dark">554 <span className="text-base font-normal text-gray-500">stylists (30%)</span></p>
        </Card>
        <Card className="p-6 border-l-4 border-l-[#378ADD]">
          <h3 className="text-lg font-bold text-[#0C447C] mb-1">L2 Proficient</h3>
          <p className="text-3xl font-bold text-admin-dark">960 <span className="text-base font-normal text-gray-500">stylists (52%)</span></p>
        </Card>
        <Card className="p-6 border-l-4 border-l-admin-success">
          <h3 className="text-lg font-bold text-admin-dark mb-1">L3 Specialist</h3>
          <p className="text-3xl font-bold text-admin-dark">333 <span className="text-base font-normal text-gray-500">stylists (18%)</span></p>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Pathway Visual */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-admin-dark mb-6">L1 → L3 Growth Pathway</h2>
          <div className="flex flex-wrap items-center justify-between gap-2 max-w-3xl mx-auto py-4">
            <div className="flex flex-col items-center">
              <div className="bg-admin-success text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} /> L1 Basic
              </div>
            </div>
            <ChevronRight className="text-admin-success" />
            
            <div className="flex flex-col items-center">
              <div className="bg-admin-success text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} /> Hygiene Cert
              </div>
            </div>
            <ChevronRight className="text-admin-success" />
            
            <div className="flex flex-col items-center">
              <div className="bg-[#378ADD] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 mb-2 shadow-md ring-4 ring-blue-100">
                <Circle size={16} fill="white" /> L2 Proficient
              </div>
            </div>
            <ChevronRight className="text-gray-300" />
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 text-gray-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 mb-2">
                <Circle size={16} /> Adv. Colour
              </div>
            </div>
            <ChevronRight className="text-gray-300" />
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 text-gray-400 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 mb-2">
                <Circle size={16} /> L3 Specialist
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">Example pathway progressing a stylist from L2 to L3 through required certifications.</p>
        </Card>

        {/* Skill Scores Bar Chart */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-admin-dark mb-4">Skill Scores by Category</h2>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryScores} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <XAxis type="number" domain={[0, 5]} hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 13}} width={120} />
                <RechartsTooltip cursor={{fill: '#F3F4F6'}} formatter={(value) => [value, 'Avg Score']} />
                <Bar dataKey="value" fill="#EF9F27" radius={[0, 4, 4, 0]} barSize={24} label={{ position: 'right', fill: '#1A1A1A', fontWeight: 600 }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Staff Skill Table */}
      <Card className="overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <div className="flex gap-6 border-b border-gray-200">
            <button className="pb-3 text-admin-success font-semibold border-b-2 border-admin-success">All Staff</button>
            <button className="pb-3 text-gray-500 hover:text-gray-800 font-medium">L1 Basic</button>
            <button className="pb-3 text-gray-500 hover:text-gray-800 font-medium">L2 Proficient</button>
            <button className="pb-3 text-gray-500 hover:text-gray-800 font-medium">L3 Specialist</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-5 py-4 font-semibold">Name</th>
                <th className="px-5 py-4 font-semibold">Level</th>
                <th className="px-5 py-4 font-semibold">Skill Score</th>
                <th className="px-5 py-4 font-semibold">Last Assessment</th>
                <th className="px-5 py-4 font-semibold">Next Assessment</th>
                <th className="px-5 py-4 font-semibold">Training Completion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {staffData.map((staff) => (
                <tr key={staff.id} className="hover:bg-orange-50/40 transition-colors">
                  <td className="px-5 py-4 font-semibold text-admin-dark">{staff.name}</td>
                  <td className="px-5 py-4">
                    <Badge variant={getLevelColor(staff.level)}>{staff.level}</Badge>
                  </td>
                  <td className="px-5 py-4 font-bold text-admin-dark">{staff.score}</td>
                  <td className="px-5 py-4 text-gray-600">{staff.lastEval}</td>
                  <td className="px-5 py-4 text-gray-600">{staff.nextEval}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-gray-200 rounded-full h-2 max-w-[100px]">
                        <div 
                          className={`h-2 rounded-full ${staff.training === 100 ? 'bg-admin-success' : 'bg-admin-gold'}`}
                          style={{ width: `${staff.training}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-semibold text-gray-600">{staff.training}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
    </div>
  );
}
