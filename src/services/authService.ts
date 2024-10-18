import axios from 'axios';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
    email,
    password,
  });
  return response.data;
};
