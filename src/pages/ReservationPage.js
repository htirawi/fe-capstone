import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm/ReservationForm';
import { fetchAPI, submitAPI } from '../utilities/MockApi';

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];

const ReservationPage = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate('/reservation-confirmed');
  };

  return (
    <>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </>
  );
};

export default ReservationPage;
export { updateTimes, initializeTimes };
