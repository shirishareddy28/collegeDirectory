import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentProfile from '../components/StudentProfile';
import AdminDashboard from '../pages/AdminDashboard';
import FacultyDashboard from '../pages/FacultyDashboard';
import StudentDashboard from '../pages/StudentDashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/student-profile" element={<StudentProfile />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
    <Route path="/student-dashboard" element={<StudentDashboard />} />
  </Routes>
);

export default AppRoutes;
