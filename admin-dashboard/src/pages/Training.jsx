import React from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { BookOpen, Award, CheckCircle2 } from 'lucide-react';

export default function Training() {
  const modules = [
    { name: 'Basic Haircutting Fundamentals', level: 'L1', duration: '2 days', enrolled: 554, completed: 498, percent: 90, bar: 'green' },
    { name: 'Hygiene & Safety Certification', level: 'L1', duration: '1 day', enrolled: 554, completed: 532, percent: 96, bar: 'green' },
    { name: 'Advanced Colour Techniques', level: 'L2', duration: '3 days', enrolled: 420, completed: 310, percent: 74, bar: 'blue' },
    { name: 'Skin & Facial Treatments', level: 'L2', duration: '2 days', enrolled: 380, completed: 198, percent: 52, bar: 'amber' },
    { name: 'Keratin & Protein Treatments', level: 'L2', duration: '2 days', enrolled: 290, completed: 142, percent: 49, bar: 'amber' },
    { name: 'Bridal Styling Masterclass', level: 'L2', duration: '3 days', enrolled: 180, completed: 98, percent: 54, bar: 'amber' },
    { name: 'L3 Specialist Certification', level: 'L3', duration: '5 days', enrolled: 180, completed: 147, percent: 82, bar: 'green' },
    { name: 'Training the Trainer', level: 'L3', duration: '2 days', enrolled: 120, completed: 76, percent: 63, bar: 'blue' },
    { name: 'Ayurvedic Scalp Therapy', level: 'L2', duration: '1 day', enrolled: 240, completed: 112, percent: 47, bar: 'red' },
    { name: 'Customer Consultation Skills', level: 'L1', duration: '1 day', enrolled: 554, completed: 489, percent: 88, bar: 'green' },
  ];

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case 'L3': return 'green';
      case 'L2': return 'blue';
      case 'L1': return 'purple';
      default: return 'gray';
    }
  };

  const staffProgress = [
    { name: 'Priya Krishnan', branch: 'Anna Nagar', completion: 100 },
    { name: 'Anitha M', branch: 'Adyar', completion: 75 },
    { name: 'Lakshmi V', branch: 'Velachery', completion: 50 },
    { name: 'Rekha N', branch: 'Porur', completion: 82 },
    { name: 'Brinda M', branch: 'OMR', completion: 35 },
  ];

  return (
    <div className="space-y-6 fade-in">
      
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-admin-success flex items-center gap-4">
          <div className="p-4 bg-green-50 rounded-full text-admin-success">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Overall Completion</p>
            <h3 className="text-3xl font-bold text-admin-dark mt-1">79%</h3>
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-admin-dark flex items-center gap-4">
          <div className="p-4 bg-gray-100 rounded-full text-admin-dark">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Modules Available</p>
            <h3 className="text-3xl font-bold text-admin-dark mt-1">24</h3>
          </div>
        </Card>
        <Card className="p-6 border-l-4 border-l-admin-gold flex items-center gap-4">
          <div className="p-4 bg-yellow-50 rounded-full text-admin-gold">
            <Award size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Certs Issued</p>
            <h3 className="text-3xl font-bold text-admin-dark mt-1">47 <span className="text-sm font-normal text-gray-400">this month</span></h3>
          </div>
        </Card>
      </div>

      {/* Main Table Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Modules Table */}
        <Card className="overflow-hidden xl:col-span-2">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="text-lg font-bold text-admin-dark">Training Modules & Completion</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-white text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                  <th className="px-5 py-4 font-semibold">Module Name</th>
                  <th className="px-5 py-4 font-semibold">Level Required</th>
                  <th className="px-5 py-4 font-semibold">Duration</th>
                  <th className="px-5 py-4 font-semibold text-center">Enrolled</th>
                  <th className="px-5 py-4 font-semibold text-center">Completed</th>
                  <th className="px-5 py-4 font-semibold w-40">Completion %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm bg-white">
                {modules.map((mod, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4 font-semibold text-admin-dark">{mod.name}</td>
                    <td className="px-5 py-4">
                      <Badge variant={getLevelBadgeColor(mod.level)}>{mod.level}</Badge>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{mod.duration}</td>
                    <td className="px-5 py-4 text-center font-medium">{mod.enrolled}</td>
                    <td className="px-5 py-4 text-center font-bold text-admin-dark">{mod.completed}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="font-bold w-9 text-right text-gray-800">{mod.percent}%</span>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              mod.bar === 'green' ? 'bg-admin-success' : 
                              mod.bar === 'blue' ? 'bg-blue-500' : 
                              mod.bar === 'amber' ? 'bg-admin-gold' : 'bg-admin-danger'
                            }`}
                            style={{ width: `${mod.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Staff Progress Panel */}
        <Card className="h-fit">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h2 className="text-base font-bold text-admin-dark">Staff Training Progress</h2>
            <button className="text-sm font-semibold text-admin-success hover:underline">View All</button>
          </div>
          <div className="p-5 space-y-5">
            {staffProgress.map((staff, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex flex-col">
                    <span className="font-semibold text-admin-dark">{staff.name}</span>
                    <span className="text-xs text-gray-500">{staff.branch}</span>
                  </div>
                  <span className={`text-sm font-bold ${staff.completion === 100 ? 'text-admin-success' : 'text-gray-700'}`}>
                    {staff.completion}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${staff.completion === 100 ? 'bg-admin-success shadow-[0_0_8px_rgba(29,158,117,0.4)]' : 'bg-admin-gold'}`}
                    style={{ width: `${staff.completion}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-5 bg-gray-50 border-t border-gray-100 text-sm text-gray-500 text-center">
            Tracking 1,847 staff members across 12 active modules.
          </div>
        </Card>

      </div>
    </div>
  );
}
