import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div>
      <header className="bg-gray-700 p-4 text-white">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main>
        <Outlet />  {/* Render the child components here */}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>Admin Dashboard &copy; 2024</p>
      </footer>
    </div>
  );
};

export default AdminLayout;
