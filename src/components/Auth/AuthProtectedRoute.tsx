import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = !!localStorage.getItem('token');  // Check if the token exists
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default AuthProtectedRoute;
