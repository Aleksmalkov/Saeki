import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white" style={{height: 'calc(100vh - 57px)'}}>
      <h1 className="text-2xl font-bold mb-6">Order Confirmed!</h1>
      <p className="mb-4">Thank you for your order. We will send you a confirmation email soon.</p>
      {/* <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded">Return to Home</Link> */}
      <Link
        to="/"
        className="z-10 flex justify-center font-bold items-center px-6 py-4 border border-white/10 rounded-full relative overflow-hidden hover:border-white/30"
        style={{
          lineHeight: '20px',
          gap: '8px'
        }}
      >
        <div className="button-text">Return to Home</div>
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;
