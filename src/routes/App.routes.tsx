import { Login, Signup, Survey } from '@/pages';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AppRoutes = () => {
  const [isLogged, _] = useState(false);

  const publicRoutes = (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );

  const privateRoutes = (
    <Routes>
      <Route path="/" element={<Survey />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );

  return isLogged ? privateRoutes : publicRoutes;
};

export default AppRoutes;
