import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 shadow-lg rounded-lg"
        style={{
          backgroundImage: 'linear-gradient(235deg, rgb(41, 41, 41), rgb(10, 10, 10))'
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
