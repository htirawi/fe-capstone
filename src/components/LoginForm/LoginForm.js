import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setIsError(true);
      return;
    }
    onLogin(username, password);
    navigate('/logged-in');
  };

  return (
    <main className={styles.loginMain}>
      <h1 className={styles.formTitle}>Welcome Back!</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div className={styles.loginFormField}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.loginFormField}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        {isError && (
          <p className={styles.errorMsg}>
            {'Please enter your user name and password'}
          </p>
        )}
        <button type="submit">Log In!</button>
      </form>
    </main>
  );
};

export default LoginForm;
