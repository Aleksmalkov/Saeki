import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FileViewer from '../components/FileViewer';
import MaterialSelector from '../components/MaterialSelector';

const ViewerConfigPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useState(!!localStorage.getItem('token'));
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [fileUrl, setFileUrl] = useState(localStorage.getItem('uploadedFile') || '');

  const handleMaterialSelect = (material: string) => {
    setSelectedMaterial(material);
  };

  const handlePlaceOrder = () => {
    if (isLoggedIn && selectedMaterial) {
      navigate('/order');
    }
  };

  return (
    <div className="flex flex-row container max-w-screen-xl mx-auto pt-24" style={{ height: 'calc(100vh - 57px)' }}>
      <div className="w-2/3 p-6">
        <FileViewer fileUrl={fileUrl} />
      </div>
      <div className="w-1/3 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-6">Material Configuration</h2>
        <MaterialSelector onSelectMaterial={handleMaterialSelect} />
        <div className="flex justify-between mt-8">
          <Link
            to="/upload"
            className="z-10 flex justify-center font-bold text-white items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
            style={{
              lineHeight: '20px',
              gap: '8px'
            }}
          >
            <div className="button-text">BACK</div>
          </Link>
          <button
            onClick={handlePlaceOrder}
            disabled={!isLoggedIn || !selectedMaterial} 
            className={`px-6 py-3 text-lg font-bold border-2 rounded-full z-1 ${
              isLoggedIn && selectedMaterial ? 'px-6 py-3 text-lg font-bold border-saeki-yellow border-2 text-saeki-yellow' : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewerConfigPage;
