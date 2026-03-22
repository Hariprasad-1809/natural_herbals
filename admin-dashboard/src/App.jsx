import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Staff = lazy(() => import('./pages/Staff'));
const Skills = lazy(() => import('./pages/Skills'));
const Revenue = lazy(() => import('./pages/Revenue'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Branches = lazy(() => import('./pages/Branches'));
const Training = lazy(() => import('./pages/Training'));

const Loader = () => (
  <div className="flex items-center justify-center h-64 w-full">
    <div className="animate-pulse flex flex-col items-center gap-4">
      <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-admin-gold animate-spin"></div>
      <p className="text-gray-500 font-medium">Loading module...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/training" element={<Training />} />
            <Route path="*" element={<div className="p-10 text-center"><h2 className="text-2xl text-gray-400 font-semibold">Under Construction</h2></div>} />
          </Routes>
        </Suspense>
      </AdminLayout>
    </BrowserRouter>
  );
}

export default App;
