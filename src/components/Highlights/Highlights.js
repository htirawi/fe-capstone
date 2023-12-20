import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './style.module.css';

const Highlights = () => {
  const navigate = useNavigate();
  const handleMenu = () => {
    navigate('/menu');
  };
  return (
    <div className={styles.highlightsContainer}>
      <h1>This week's specials!</h1>
      <button onClick={handleMenu}>Online Menu</button>
    </div>
  );
};

export default Highlights;
