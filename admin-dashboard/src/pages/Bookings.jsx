import React from 'react';
import { Search, Calendar as CalendarIcon, Filter, CheckCircle, Clock, XCircle, MoreVertical } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';

// --- Static Data Hoisted for Performance ---
const stats = [
  { label: 'Total Today', value: 318, icon: <CalendarIcon size={20} className="text-[#3C3489]" />, color: 'purple' },
  { label: 'Confirmed', value: 241, icon: <CheckCircle size={20} className="text-admin-success" />, color: 'green' },
  { label: 'In Progress', value: 47, icon: <Clock size={20} className="text-yellow-600" />, color: 'amber' },
  { label: 'Pending', value: 30, icon: <Clock size={20} className="text-gray-500" />, color: 'gray' },
];

const bookings = Array(20).fill(null).map((_, i) => {
  const statuses = ['Confirmed', 'In Progress', 'Pending', 'Completed', 'Cancelled'];
  const services = ['Hair colour', 'Facial', 'Bridal package', 'Haircut', 'Hair spa', 'Keratin', 'Manicure & Pedicure', 'Ayurvedic Massage'];
  const branches = ['Anna Nagar', 'Adyar', 'T. Nagar', 'Velachery', 'Mylapore', 'OMR'];
  const stylists = ['Priya K', 'Sunita R', 'Anitha M', 'Lakshmi V', 'Rekha N', 'Brinda M'];
  const customers = ['Meera Sharma', 'Divya Rajan', 'Kavya Nair', 'Sowmya Priya', 'Ananya K', 'Preethi S', 'Rahul V', 'Anita Desai'];
  
  const status = statuses[i % statuses.length];
  
  const getStatusColor = (s) => {
    switch(s) {
      case 'Confirmed': return 'blue';
      case 'In Progress': return 'amber';
      case 'Completed': return 'green';
      case 'Cancelled': return 'red';
      default: return 'gray';
    }
  };

  return {
    id: `NHB-2026-${(1042 + i).toString().padStart(4, '0')}`,
    customer: customers[i % customers.length],
    branch: branches[i % branches.length],
    service: services[i % services.length],
    stylist: stylists[i % stylists.length],
    date: `Today, ${9 + (i % 8)}:00 ${i % 2 === 0 ? 'AM' : 'PM'}`,
    duration: `${45 + (i % 3) * 30} mins`,
    amount: `₹${350 + (i * 150)}`,
    status: status,
    statusColor: getStatusColor(status)
  };
});
// ------------------------------------------

export default function Bookings() {

  return (
    <div className="space-y-6 fade-in">
      
      {/* Top Filters & Search */}
      <Card className="p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </span>
            <input 
              type="text" 
              placeholder="Search bookings by customer or ID..." 
              className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-lg focus:ring-admin-success focus:border-admin-success block pl-10 p-2.5"
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <input type="date" className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none cursor-pointer" defaultValue="2026-03-24" />
            <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none cursor-pointer">
              <option>All Branches</option>
              <option>Anna Nagar</option>
              <option>T. Nagar</option>
            </select>
            <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg p-2.5 outline-none cursor-pointer">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>In Progress</option>
              <option>Pending</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Mini Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-admin-dark">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-full bg-${stat.color}-50`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Bookings Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-200">
                <th className="px-4 py-4 font-semibold">Booking ID</th>
                <th className="px-4 py-4 font-semibold">Customer</th>
                <th className="px-4 py-4 font-semibold">Branch</th>
                <th className="px-4 py-4 font-semibold">Service</th>
                <th className="px-4 py-4 font-semibold">Stylist</th>
                <th className="px-4 py-4 font-semibold">Date & Time</th>
                <th className="px-4 py-4 font-semibold">Duration</th>
                <th className="px-4 py-4 font-semibold">Amount</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-4 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-orange-50/40 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{booking.id}</td>
                  <td className="px-4 py-3 font-semibold text-admin-dark">{booking.customer}</td>
                  <td className="px-4 py-3 text-gray-600">{booking.branch}</td>
                  <td className="px-4 py-3 text-gray-800 font-medium">{booking.service}</td>
                  <td className="px-4 py-3 text-gray-600">{booking.stylist}</td>
                  <td className="px-4 py-3 text-gray-800">{booking.date}</td>
                  <td className="px-4 py-3 text-gray-500">{booking.duration}</td>
                  <td className="px-4 py-3 font-semibold text-admin-dark">{booking.amount}</td>
                  <td className="px-4 py-3">
                    <Badge variant={booking.statusColor}>{booking.status}</Badge>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="text-admin-success hover:text-green-700 text-xs font-semibold px-2 py-1 bg-green-50 rounded">View/Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm">
          <span className="text-gray-500">Showing <span className="font-semibold text-gray-800">1-20</span> of <span className="font-semibold text-gray-800">318</span> bookings today</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-400 bg-gray-50">Prev</button>
            <button className="px-3 py-1.5 border border-admin-success bg-green-50 text-admin-success font-medium rounded">1</button>
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:shadow-sm">2</button>
            <span className="px-2 py-1.5 text-gray-400">...</span>
            <button className="px-3 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50 hover:shadow-sm">Next</button>
          </div>
        </div>
      </Card>

    </div>
  );
}
