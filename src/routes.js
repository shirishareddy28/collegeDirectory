import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import StudentProfile from './components/StudentProfile';
import FacultyClassList from './components/FacultyClassList';
import FacultyProfileUpdate from './components/FacultyProfileUpdate';
import AdminRecordManagement from './components/AdminRecordManagement';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/student" element={<StudentDashboard />} />
    <Route path="/student/profile" element={<StudentProfile />} />
    <Route path="/faculty" element={<FacultyDashboard />} />
    <Route path="/faculty/classlist" element={<FacultyClassList />} />
    <Route path="/faculty/profile/update" element={<FacultyProfileUpdate />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/admin/records" element={<AdminRecordManagement />} />
  </Routes>
);

export default AppRoutes;
