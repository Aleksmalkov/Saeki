import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ORDERS } from '../graphql/orderQueries';
import { useNavigate, Link } from 'react-router-dom';

const OrderList: React.FC = () => {
  const { data, loading, error } = useQuery(GET_ALL_ORDERS, {
    context: {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    },
  });

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container max-w-screen-xl mx-auto pt-24 text-white" style={{ height: 'calc(100vh - 57px)' }}>
      <h1 className="text-3xl font-bold mb-6 text-white">Order List</h1>
      <div className="bg-gray-800 p-4 shadow-lg rounded-lg">
        {data?.getAllOrders.length > 0 ? (
          <table className="min-w-full table-auto text-white">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="text-left px-4 py-2">Order ID</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Material</th>
                <th className="text-left px-4 py-2">Order Date</th>
                <th className="text-left px-4 py-2">File URL</th>
                <th className="text-left px-4 py-2">Chat</th> {/* New column for chat */}
              </tr>
            </thead>
            <tbody>
              {data.getAllOrders.map((order: any, index: number) => (
                <tr key={order.id} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-black'}>
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.email}</td>
                  <td className="px-4 py-2">{order.material}</td>
                  <td className="px-4 py-2">{order.createdAt}</td>
                  <td className="px-4 py-2">
                    <a href={order.fileUrl} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      View File
                    </a>
                  </td>
                  <td className="px-4 py-2">
                  <Link to={`/questions/${order.id}`}>
                    <button>Chat</button>
                  </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
