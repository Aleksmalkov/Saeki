import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, REGISTER_USER } from '../graphql/authMutations';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const [login] = useMutation(LOGIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.login.token);
      setIsAuthenticated(true);
    },
  });

  const [register] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.register.token);
      setIsAuthenticated(true);
    },
  });

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, register, logout };
};

export default useAuth;
