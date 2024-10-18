import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FileUploadPage from '../pages/FileUploadPage';
import ViewerConfigPage from '../pages/ViewerConfigPage';
import OrderFormPage from '../pages/OrderFormPage';
import OrderList from '../pages/OrderList';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import CustomerQuestionsPage from '../pages/CustomerQuestionsPage';
import AdminQuestionsPage from '../pages/AdminQuestionsPage';
import MainLayout from '../layouts/MainLayout';
import NoLayout from '../layouts/NoLayout';
import AuthProtectedRoute from '../components/Auth/AuthProtectedRoute';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<FileUploadPage />} />
        <Route path="/configure" element={<ViewerConfigPage />} />
        <Route path="/order" element={<AuthProtectedRoute><OrderFormPage /></AuthProtectedRoute>} />
        <Route path="/orders" element={<AuthProtectedRoute><OrderList /></AuthProtectedRoute>} />
        <Route path="/order-confirmation" element={<AuthProtectedRoute><OrderConfirmationPage /></AuthProtectedRoute>} />
        <Route path="/questions/:orderId" element={<AuthProtectedRoute><CustomerQuestionsPage /></AuthProtectedRoute>} />

        <Route path="/admin/questions" element={<AuthProtectedRoute><AdminQuestionsPage /></AuthProtectedRoute>} />
      </Route>
      
      {/* No layout for Login/Register */}
      <Route element={<NoLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
