import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import AdminDashboard from '../pages/AdminDashboard';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<PrivateRoute role="user"><Dashboard /></PrivateRoute>} />
    <Route path="/admin" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />
  </Routes>
);

export default AppRouter;
