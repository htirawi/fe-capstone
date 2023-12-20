import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
const LoginPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (username, password) => {
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <div>Welcome to JHR Restaurant!</div>;
  }

  return <LoginForm onLogin={handleLogin} />;
};

export default LoginPage;
