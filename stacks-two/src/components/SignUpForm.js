import React from "react";
import { useForm } from '../extra/useForm';

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  state: "",
  zip: "",
};


const SignUpForm = () => {


const [showSuccessMessage, values, handleSubmit, handleChanges] = useForm(
  'SignUpForm',
  initialValue
);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            value={values.email}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input name="city" value={values.city} onChange={handleChanges} />
        </label>
        <label>
          State:
          <input name="state" value={values.state} onChange={handleChanges} />
        </label>
        <label>
          Zip:
          <input name="zip" value={values.zip} onChange={handleChanges} />
        </label>
        <button>Start Trading!</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have created your free account, start trading! <span role="img">🎉</span>
          </p>
          <p>Your membership card will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default SignUpForm;