import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/authMutations';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error }] = useMutation(LOGIN_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({
        variables: {
          input: {
            email,
            password,
          },
        },
      });
      const token = response.data.login.token;
      localStorage.setItem('token', token);  // Store token in localStorage
      window.location.href = '/';  // Redirect to home on successful login
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
        <div className="button-text">{loading ? 'Logging in...' : 'Login'}</div>
        <img
          src="https://cdn.prod.website-files.com/64528c9313634ef6496dea1f/64556d2de4efcfdebd53b6a9_ArrowLeft.svg"
          alt="Arrow Icon"
          className="ml-2 w-5 h-5"
        />
      </button>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <p className="text-left mt-4 text-white ">
        Don't have an account?{' '}
        <Link to="/register" className="text-white font-bold text-saeki-yellow">
          Sign up here
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
