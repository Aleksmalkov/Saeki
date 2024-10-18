import React from 'react';
import { Outlet } from 'react-router-dom';

const NoLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Outlet />
    </div>
  );
};

export default NoLayout;
