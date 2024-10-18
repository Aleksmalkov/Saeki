import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Updated header to be fixed at the top */}
      <header className="app-header fixed top-0 w-full bg-black z-10">
        <div className="container max-w-screen-xl mx-auto p-4 text-white flex justify-between items-center">
          {/* Logo */}
          <div className="w-32">
            <Link to="/">
              <img 
                src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/645a995cf6b669d1e58cd8fc_logo.svg"
                alt="Logo"
                className="w-full"
              />
            </Link>
          </div>
          <div>
            {!isLoggedIn ? (
              <div className='flex gap-4'>
                {/* Updated buttons */}
                <Link
                  to="/upload"
                  className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
                  style={{
                    lineHeight: '20px',
                    gap: '8px'
                  }}
                >
                  <div className="button-text">REQUEST A QUOTE</div>
                  <img
                    src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
                    alt="Arrow Icon"
                    className="ml-2 w-5 h-5"
                  />
                </Link>
                <Link
                  to="/login"
                  className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className='flex gap-4'>
                {/* REQUEST A QUOTE button when logged in */}
                <Link to="/orders" className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30">
                  Order List
                </Link>
                <Link
                  to="/upload"
                  className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
                  style={{
                    lineHeight: '20px',
                    gap: '8px'
                  }}
                >
                  <div className="button-text">REQUEST A QUOTE</div>
                  <img
                    src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
                    alt="Arrow Icon"
                    className="ml-2 w-5 h-5"
                  />
                </Link>
                {/* Logout button */}
                <button
                  onClick={handleLogout}
                  className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main content with padding to avoid overlap with fixed header */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        <div className="container max-w-screen-xl mx-auto">
          <div className="border-b border-gray-700"></div>
          <div className="flex justify-between items-center py-4">
            <div className="text-white text-sm">
              <p className="text-gray-400">
                © Copyright <span className="current-year">2024 </span>SAEKI Robotics AG.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/terms-of-use" className="text-gray-400 font-bold text-hover-saeki-yellow">
                Terms of Use
              </a>
              <div className="sm-line border-l border-gray-400 h-4"></div>
              <a href="/privacy-policy" className="text-gray-400 font-bold text-hover-saeki-yellow">
                Privacy Policy
              </a>
              <div className="sm-line border-l border-gray-400 h-4"></div>
              <a href="/imprint" className="text-gray-400 font-bold text-hover-saeki-yellow">
                Imprint
              </a>
            </div>
            <a fs-cc="open-preferences" href="#" className="text-gray-400 font-bold text-hover-saeki-yellow">
              Cookie Preferences
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default MainLayout;
