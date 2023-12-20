import { useState, useEffect } from 'react';

import styles from './style.module.css';

const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const occasions = ['Birthday', 'Anniversary', 'Engagement', 'Other'];

  const [formData, setFormData] = useState({
    date: minimumDate,
    time: availableTimes[0],
    numberOfGuests: 1,
    occasion: occasions[0],
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const validateForm = () => {
    const errors = {};
    if (!formData.date) errors.date = 'Please choose a valid date';
    if (!formData.time) errors.time = 'Please choose a valid time';
    if (formData.numberOfGuests < 1 || formData.numberOfGuests > 10)
      errors.numberOfGuests = 'Please enter a number between 1 and 10';
    if (!formData.occasion) errors.occasion = 'Please choose a valid occasion';
    setFormErrors(errors);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    if (name === 'date') {
      dispatchOnDateChange(value);
    }
  };

  const isFormValid = () => Object.keys(formErrors).length === 0;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      submitData(formData);
    }
  };

  const FormField = ({ label, htmlFor, children, errorMessage }) => (
    <div className={styles.formField}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
    </div>
  );

  return (
    <div className={styles.reservationMain}>
      <h1 className={styles.formTitle}>Book a Table</h1>
      <form className={styles.reservationForm} onSubmit={handleFormSubmit}>
        <FormField
          label="Date"
          htmlFor="reservation-date"
          errorMessage={formErrors.date}
        >
          <input
            type="date"
            id="reservation-date"
            name="date"
            min={minimumDate}
            value={formData.date}
            onChange={handleInputChange}
          />
        </FormField>

        <FormField
          label="Time"
          htmlFor="reservation-time"
          errorMessage={formErrors.time}
        >
          <select
            id="reservation-time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          >
            {availableTimes.map((time) => (
              <option data-testid="reservation-time-option" key={time}>
                {time}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label="Number of guests"
          htmlFor="reservation-number-guests"
          errorMessage={formErrors.numberOfGuests}
        >
          <input
            type="number"
            id="reservation-number-guests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            min={1}
            max={10}
            onKeyDown={(e) => e.preventDefault()}
            onChange={handleInputChange}
          />
        </FormField>

        <FormField
          label="Occasion"
          htmlFor="reservation-occasion"
          errorMessage={formErrors.occasion}
        >
          <select
            id="reservation-occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
          >
            {occasions.map((occasion) => (
              <option data-testid="reservation-occasion-option" key={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </FormField>

        <button
          className={styles.buttonPrimary}
          type="submit"
          disabled={!isFormValid()}
        >
          Make your reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
