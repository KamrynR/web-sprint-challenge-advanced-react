import React, { useState } from "react";
import useForm from '../hooks/useForm.js';

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [firstName, handleFirstName] = useForm('');
  const [lastName, handleLastName] = useForm('');
  const [address, handleAddress] = useForm('');
  const [city, handleCity] = useForm('');
  const [state, handleState] = useForm('');
  const [zip, handleZip] = useForm('');

  const formSubmit = e => {
    e.preventDefault();
    setShowSuccessMessage(true);
  }
  return (
    <>
      <form onSubmit={formSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            onChange={e => handleFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={lastName}
            onChange={e => handleLastName(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={address}
            onChange={e => handleAddress(e.target.value)}
          />
        </label>
        <label>
          City:
          <input name="city" value={city} onChange={e => handleCity(e.target.value)} />
        </label>
        <label>
          State:
          <input name="state" value={state} onChange={e => handleState(e.target.value)} />
        </label>
        <label>
          Zip:
          <input name="zip" value={zip} onChange={e => handleZip(e.target.value)} />
        </label>
        <button data-testid="custom-element">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
