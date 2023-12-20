import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { updateTimes, initializeTimes } from './ReservationPage';
import ReservationForm from '../components/ReservationForm/ReservationForm';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(['10:00', '11:00', '12:00']), // Mock response
  })
);

const timesArr = [
  '10:00',
  '11:00',
  '12:00',
  '17:00',
  '17:30',
  '18:00',
  '19:00',
  '21:00',
  '22:00',
  '23:00',
];
test('should initializeTimes with correct values', async () => {
  const times = await initializeTimes(['10:00', '11:00', '12:00']);
  expect(times).toEqual(timesArr);
});

test('should updateTimes correctly', () => {
  const mockState = ['10:00', '11:00'];
  const mockAction = { type: 'UPDATE_TIMES', selectedDate: '2023-04-01' };
  const updatedState = updateTimes(mockState, mockAction);

  expect(updatedState).toEqual(['10:00', '11:00']);
});

test('Renders the BookingForm heading', () => {
  const availableTimes = ['10:00', '11:00'];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();
  render(
    <ReservationForm
      availableTimes={availableTimes}
      dispatchOnDateChange={dispatchOnDateChange}
      submitData={submitData}
    />
  );
  const headingElement = screen.getByText('Book a Table');
  expect(headingElement).toBeInTheDocument();
});
