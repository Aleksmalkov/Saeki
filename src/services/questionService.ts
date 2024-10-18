import axios from 'axios';

export const submitQuestion = async (question: string, orderId: string) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/questions`, {
    question,
    orderId,
  });

  return response.data;
};
