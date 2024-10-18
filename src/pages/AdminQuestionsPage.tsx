import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS_FOR_ORDER } from '../graphql/questionQueries';

const AdminQuestionsPage: React.FC = () => {
  const { data, loading, error } = useQuery(GET_QUESTIONS_FOR_ORDER);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Questions</h1>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        {loading ? (
          <p>Loading questions...</p>
        ) : error ? (
          <p>Error loading questions</p>
        ) : (
          <table className="min-w-full table-auto text-gray-900">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left px-4 py-2">Question</th>
                <th className="text-left px-4 py-2">User</th>
                <th className="text-left px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.getQuestionsForOrder.map((q: any) => (
                <tr key={q.id}>
                  <td className="px-4 py-2">{q.content}</td>
                  <td className="px-4 py-2">{q.user.name}</td>
                  <td className="px-4 py-2">{new Date(q.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminQuestionsPage;
