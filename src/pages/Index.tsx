
import React, { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import EmployeeList from './employees/EmployeeList';
import FaceEnrollment from './employees/FaceEnrollment';
import ProjectList from './projects/ProjectList';
import CheckInOut from './attendance/CheckInOut';
import UserManagement from './auth/UserManagement';
import Reports from './reports/Reports';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/face-enrollment" element={<FaceEnrollment />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/attendance/checkin" element={<CheckInOut />} />
          <Route path="/auth/users" element={<UserManagement />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
};

export default Index;
