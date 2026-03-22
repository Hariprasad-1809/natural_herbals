import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts';
import Card from '../components/Card';
import { TrendingUp, Award, MapPin, Target } from 'lucide-react';

export default function Revenue() {
  const trendData = [
    { name: 'Apr', value: 32 }, { name: 'May', value: 33 }, { name: 'Jun', value: 35 },
    { name: 'Jul', value: 34.5 }, { name: 'Aug', value: 37 }, { name: 'Sep', value: 36 },
    { name: 'Oct', value: 36.2 }, { name: 'Nov', value: 38.5 }, { name: 'Dec', value: 41 },
    { name: 'Jan', value: 39.8 }, { name: 'Feb', value: 40.5 }, { name: 'Mar', value: 42.8 },
  ];

  const branchRevenue = [
    { name: 'Anna Nagar', value: 18.2 },
    { name: 'T. Nagar', value: 16.8 },
    { name: 'Adyar', value: 15.4 },
    { name: 'Mylapore', value: 14.9 },
    { name: 'Madurai Main', value: 14.2 },
    { name: 'OMR', value: 13.8 },
    { name: 'Porur', value: 12.9 },
    { name: 'Chromepet', value: 11.2 },
    { name: 'Tambaram', value: 10.4 },
    { name: 'Velachery', value: 8.5 },
  ];

  const serviceData = [
    { name: 'Hair Services', value: 42, color: '#1D9E75' },
    { name: 'Colour Treatments', value: 28, color: '#EF9F27' },
    { name: 'Skin & Facials', value: 16, color: '#378ADD' },
    { name: 'Bridal Packages', value: 9, color: '#7F77DD' },
    { name: 'Wellness', value: 5, color: '#085041' },
  ];

  const scatterData = [
    { x: 'L1', y: 1680, z: 50 },
    { x: 'L2', y: 2340, z: 100 },
    { x: 'L3', y: 3100, z: 150 },
  ];

  return (
    <div className="space-y-6 fade-in">
      
      {/* Header & Filters */}
      <div className="flex justify-between items-center mb-6">
        <div></div>
        <select className="bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg px-4 py-2 outline-none shadow-sm cursor-pointer hover:border-admin-success transition-colors">
          <option>This Month (Mar 2026)</option>
          <option>Last Month (Feb 2026)</option>
          <option>This Quarter</option>
          <option>Year to Date</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5">
          <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2"><TrendingUp size={16}/> Total Revenue</p>
          <h3 className="text-2xl font-bold text-admin-dark">₹42,80,000</h3>
        </Card>
        <Card className="p-5">
          <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2"><Target size={16}/> Avg Revenue/Seat</p>
          <h3 className="text-2xl font-bold text-admin-dark">₹2,340</h3>
        </Card>
        <Card className="p-5">
          <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2"><MapPin size={16}/> Highest Branch</p>
          <h3 className="text-xl font-bold text-admin-dark truncate">Anna Nagar <span className="text-sm font-normal text-admin-success">₹3.1K/seat</span></h3>
        </Card>
        <Card className="p-5 border-b-4 border-b-admin-gold">
          <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2"><Award size={16}/> From L3 Stylists</p>
          <h3 className="text-2xl font-bold text-admin-gold">58%</h3>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-bold text-admin-dark mb-4">Revenue by Branch — Top 10</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchRevenue} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 12}} width={100} />
                <RechartsTooltip cursor={{fill: '#F3F4F6'}} formatter={(value) => [`₹${value}L`, 'Revenue']} />
                <Bar dataKey="value" fill="#1D9E75" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-admin-dark mb-4">Revenue Trend — Last 12 Months</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} tickFormatter={(val) => `₹${val}L`} />
                <RechartsTooltip formatter={(value) => [`₹${value}L`, 'Revenue']} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                <Line type="monotone" dataKey="value" stroke="#EF9F27" strokeWidth={3} dot={{r: 4, fill: '#EF9F27', strokeWidth: 0}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-white to-gray-50">
          <h2 className="text-lg font-bold text-admin-dark mb-2">Skill Level vs Revenue per Seat</h2>
          <p className="text-sm text-admin-success font-semibold mb-6">Insight: L3 specialists generate 84% more revenue per seat than L1</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scatterData} margin={{ top: 20, right: 30, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="x" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 14, fontWeight: 'bold'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} tickFormatter={(val) => `₹${val}`} />
                <RechartsTooltip cursor={{fill: 'transparent'}} formatter={(value) => [`₹${value}/seat`, 'Average']} />
                <Bar dataKey="y" fill="#378ADD" radius={[4, 4, 0, 0]} barSize={80}>
                  {scatterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.x === 'L3' ? '#1D9E75' : entry.x === 'L2' ? '#378ADD' : '#7F77DD'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-bold text-admin-dark mb-4">Revenue by Service Category</h2>
          <div className="h-64 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceData}
                  cx="40%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {serviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value) => [`${value}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
            {/* Custom Legend */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {serviceData.map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-medium text-sm">{item.name}</span>
                    <span className="text-gray-500 text-xs">{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

    </div>
  );
}
