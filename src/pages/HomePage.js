import React from 'react';
import Header from '../components/Header/Header';
import Highlights from '../components/Highlights/Highlights';
import Specials from '../components/Specials/Specials';
import menuData from '../data/MenuData';

const HomePage = () => {
  return (
    <>
      <Header />
      <Highlights />
      <Specials menu={menuData.slice(0, 3)} />
    </>
  );
};

export default HomePage;
