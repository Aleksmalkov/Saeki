import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../graphql/authMutations';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [register, { loading, error }] = useMutation(REGISTER_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register({
        variables: {
          input: {
            email,
            password,
            name,
          },
        },
      });
      const token = response.data.register.token;
      localStorage.setItem('token', token);  // Store token in localStorage
      window.location.href = '/';  // Redirect to home on successful registration
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg bg-transparent"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg bg-transparent"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg bg-transparent"
      />
      <button type="submit" className="relative z-10 flex w-full justify-center font-bold items-center px-6 py-4 bg-black text-white rounded-full relative overflow-hidden">
        <div className="button-text">{loading ? 'Registering...' : 'Register'}</div>
        <img
          src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
          alt="Arrow Icon"
          className="ml-2 w-5 h-5"
        />
      </button>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <p className="text-left mt-4 text-white">
        Already have an account?{' '}
        <Link to="/login" className="underline font-bold text-saeki-yellow">
          Sign in here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
