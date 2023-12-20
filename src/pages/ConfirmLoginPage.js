import React from 'react';
import Carousel from '../components/Carousel/Carousel';
const images = [
  '/images/chef2.jpeg',
  '/images/chef1.jpeg',
  '/images/chef3.jpeg',
  '/images/chef4.jpeg',
];
const ConfirmLoginPage = () => {
  return (
    <>
      <h1>Welcome back, Hussein 🥳!</h1>
      <h2>Please enjoy your meal!</h2>
      <Carousel images={images} />
    </>
  );
};

export default ConfirmLoginPage;
