import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import styles from './style.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.mainContainer}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
