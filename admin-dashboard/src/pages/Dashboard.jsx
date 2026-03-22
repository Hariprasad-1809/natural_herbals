import React from 'react';
import { Users, Star, TrendingUp, Calendar, AlertCircle, TrendingUp as TrendingRight, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from '../components/Card';
import Badge from '../components/Badge';

// --- Static Data Hoisted for Performance ---
const revenueData = [
  { name: 'Oct', value: 3620000 },
  { name: 'Nov', value: 3850000 },
  { name: 'Dec', value: 4100000 },
  { name: 'Jan', value: 3980000 },
  { name: 'Feb', value: 4050000 },
  { name: 'Mar', value: 4280000 },
];

const skillData = [
  { name: 'L3 Specialist', value: 18, color: '#1D9E75' },
  { name: 'L2 Proficient', value: 52, color: '#378ADD' },
  { name: 'L1 Basic', value: 30, color: '#7F77DD' },
];

const topBranches = [
  { id: 1, name: 'Anna Nagar', value: 3100, percent: 100 },
  { id: 2, name: 'T. Nagar', value: 2840, percent: 91 },
  { id: 3, name: 'Adyar', value: 2630, percent: 84 },
  { id: 4, name: 'Mylapore', value: 2510, percent: 80 },
  { id: 5, name: 'OMR', value: 2340, percent: 75 },
];

const alerts = [
  { id: 1, type: 'danger', icon: <div className="w-2.5 h-2.5 rounded-full bg-admin-danger mt-1"></div>, text: 'Velachery branch — colour specialist shortage before April peak' },
  { id: 2, type: 'warning', icon: <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 mt-1"></div>, text: '14 branches have no L3 trainer on staff' },
  { id: 3, type: 'success', icon: <div className="w-2.5 h-2.5 rounded-full bg-admin-success mt-1"></div>, text: 'Anna Nagar revenue 3× above network average — replicate model' },
  { id: 4, type: 'info', icon: <div className="w-2.5 h-2.5 rounded-full bg-blue-500 mt-1"></div>, text: '6 stylists flagged for attrition risk in next 60 days' },
];

const recentBookings = [
  { id: '1', customer: 'Meera Sharma', branch: 'Anna Nagar', service: 'Hair colour', stylist: 'Priya K', time: '10:30 AM', status: 'Confirmed', statusColor: 'green' },
  { id: '2', customer: 'Divya Rajan', branch: 'Adyar', service: 'Facial', stylist: 'Sunita R', time: '11:00 AM', status: 'In Progress', statusColor: 'blue' },
  { id: '3', customer: 'Kavya Nair', branch: 'T. Nagar', service: 'Bridal package', stylist: 'Anitha M', time: '2:00 PM', status: 'Pending', statusColor: 'gray' },
  { id: '4', customer: 'Sowmya Priya', branch: 'Velachery', service: 'Haircut', stylist: 'Lakshmi V', time: '3:30 PM', status: 'Confirmed', statusColor: 'green' },
  { id: '5', customer: 'Ananya Krishnan', branch: 'Mylapore', service: 'Hair spa', stylist: 'Rekha N', time: '4:00 PM', status: 'Pending', statusColor: 'gray' },
  { id: '6', customer: 'Preethi S', branch: 'OMR', service: 'Keratin', stylist: 'Brinda M', time: '5:00 PM', status: 'Confirmed', statusColor: 'green' },
];
// ------------------------------------------

export default function Dashboard() {

  return (
    <div className="space-y-6 fade-in">
      
      {/* Row 1: KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-5 border-l-4 border-l-admin-success">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Total Staff</p>
              <h3 className="text-2xl font-bold text-admin-dark">1,847</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-admin-success">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingRight size={16} className="text-admin-success mr-1" />
            <span className="text-admin-success font-medium">+43</span>
            <span className="text-gray-500 ml-1">this month</span>
          </div>
        </Card>

        <Card className="p-5 border-l-4 border-l-admin-gold">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Avg Skill Score</p>
              <h3 className="text-2xl font-bold text-admin-dark">3.6 <span className="text-lg text-gray-400 font-normal">/ 5</span></h3>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg text-admin-gold">
              <Star size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingRight size={16} className="text-admin-success mr-1" />
            <span className="text-admin-success font-medium">+0.2</span>
            <span className="text-gray-500 ml-1">vs last quarter</span>
          </div>
        </Card>

        <Card className="p-5 border-l-4 border-l-admin-success">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Revenue This Month</p>
              <h3 className="text-2xl font-bold text-admin-dark">₹42.8L</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-lg text-admin-success">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingRight size={16} className="text-admin-success mr-1" />
            <span className="text-admin-success font-medium">+12%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </Card>

        <Card className="p-5 border-l-4 border-l-admin-gold">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Active Bookings Today</p>
              <h3 className="text-2xl font-bold text-admin-dark">318</h3>
            </div>
            <div className="p-3 bg-yellow-50 rounded-lg text-admin-gold">
              <Calendar size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <AlertCircle size={16} className="text-admin-gold mr-1" />
            <span className="text-admin-gold font-medium">24</span>
            <span className="text-gray-500 ml-1">pending confirmation</span>
          </div>
        </Card>
      </div>

      {/* Row 2: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="p-5 lg:col-span-3">
          <h2 className="text-lg font-bold text-admin-dark mb-6">Monthly Revenue — Last 6 Months</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} tickFormatter={(value) => `₹${value/100000}L`} />
                <RechartsTooltip cursor={{fill: '#F3F4F6'}} formatter={(value) => [`₹${(value/100000).toFixed(1)}L`, 'Revenue']} />
                <Bar dataKey="value" fill="#1D9E75" radius={[4, 4, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5 lg:col-span-2">
          <h2 className="text-lg font-bold text-admin-dark mb-4">Skill Level Distribution</h2>
          <div className="h-64 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {skillData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value) => [`${value}%`, 'Stylists']} />
              </PieChart>
            </ResponsiveContainer>
            {/* Legend inside absolute div for precise control */}
            <div className="absolute inset-x-0 bottom-0 top-[180px] flex justify-center gap-4 text-sm mt-4">
              {skillData.map(item => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.color}}></div>
                  <span className="text-gray-600 font-medium">{item.name} <span className="text-gray-400">({item.value}%)</span></span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Row 3: Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-0 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold text-admin-dark">Top Performing Branches</h2>
            <button className="text-sm text-admin-success font-medium hover:underline">View All</button>
          </div>
          <div className="p-5 space-y-5">
            {topBranches.map((branch) => (
              <div key={branch.id} className="group">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold text-gray-800">{branch.name}</span>
                  <span className="font-bold text-admin-dark">₹{branch.value.toLocaleString()}/seat</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className="bg-admin-success h-2 rounded-full transition-all duration-500 ease-out group-hover:bg-admin-dark" 
                    style={{ width: `${branch.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-0 overflow-hidden bg-gradient-to-br from-white to-gray-50 border-gray-200">
          <div className="p-5 border-b border-gray-100 flex items-center gap-2">
            <Zap className="text-admin-gold" size={20} />
            <h2 className="text-lg font-bold text-admin-dark">AI Alerts & Insights</h2>
          </div>
          <div className="p-0 divide-y divide-gray-100">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 flex items-start gap-3 hover:bg-white transition-colors">
                {alert.icon}
                <div className="flex-1">
                  <p className="text-sm text-gray-800 leading-snug">{alert.text}</p>
                </div>
                <button className="text-xs font-semibold text-admin-success px-2 py-1 rounded bg-green-50 hover:bg-green-100">
                  View
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Row 4: Table */}
      <Card className="overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-admin-dark">Recent Bookings</h2>
          <button className="text-sm text-admin-success font-medium hover:underline">View All Bookings</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="px-5 py-3 font-semibold">Customer Name</th>
                <th className="px-5 py-3 font-semibold">Branch</th>
                <th className="px-5 py-3 font-semibold">Service</th>
                <th className="px-5 py-3 font-semibold">Stylist</th>
                <th className="px-5 py-3 font-semibold">Time</th>
                <th className="px-5 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {recentBookings.map((booking, idx) => (
                <tr key={idx} className="hover:bg-orange-50/30 transition-colors">
                  <td className="px-5 py-4 font-medium text-admin-dark">{booking.customer}</td>
                  <td className="px-5 py-4 text-gray-600">{booking.branch}</td>
                  <td className="px-5 py-4 text-gray-600">{booking.service}</td>
                  <td className="px-5 py-4 text-gray-600">{booking.stylist}</td>
                  <td className="px-5 py-4 font-medium text-gray-800">{booking.time}</td>
                  <td className="px-5 py-4">
                    <Badge variant={booking.statusColor}>{booking.status}</Badge>
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
