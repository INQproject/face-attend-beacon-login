
import React, { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import Dashboard from './Dashboard';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />;
};

export default Index;
