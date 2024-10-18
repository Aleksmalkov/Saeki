import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'; // Import useParams to get route params
import { CREATE_QUESTION } from '../graphql/questionMutations';
import { GET_QUESTIONS_FOR_ORDER } from '../graphql/questionQueries';

const CustomerQuestionsPage: React.FC = () => {
  const { orderId } = useParams(); // Extract orderId from the route params
  const [question, setQuestion] = useState('');
  const { data, loading, error } = useQuery(GET_QUESTIONS_FOR_ORDER, {
    variables: { orderId },  // Use the orderId for the query
  });
  const [createQuestion] = useMutation(CREATE_QUESTION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createQuestion({ 
        variables: { input: { content: question, orderId: orderId } },
        context: {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,  // Attach token
          },
        }
      });
      setQuestion('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center pt-24 text-white" style={{height: 'calc(100vh - 57px)'}}>
      <h2 className="text-2xl font-bold mb-6">Your Questions</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="Ask a question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit" className="w-full p-2 bg-green-600 text-white">
          Submit Question
        </button>
      </form>
      {loading ? (
        <p>Loading questions...</p>
      ) : error ? (
        <p>Error loading questions</p>
      ) : (
        <ul>
          {data.getQuestionsForOrder.map((q: any) => (
            <li key={q.id} className="mb-4 text-white">
              <strong>{q.user.name}:</strong> {q.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerQuestionsPage;
