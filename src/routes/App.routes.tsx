import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Signup, Survey } from '@/pages';
import useAppStore from '@/store/app.store';

const AppRoutes = () => {
  const user = useAppStore((state) => state.user);

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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  return user ? privateRoutes : publicRoutes;
};

export default AppRoutes;
