import React from 'react';
import Carousel from '../components/Carousel/Carousel';
const images = [
  '/images/chef2.jpeg',
  '/images/chef1.jpeg',
  '/images/chef3.jpeg',
  '/images/chef4.jpeg',
];

const ConfirmReservationPage = () => {
  return (
    <>
      <h1>Reservation Confirmed</h1>
      <h2>Your table reservation has been confirmed!</h2>
      <Carousel images={images} />
    </>
  );
};

export default ConfirmReservationPage;
