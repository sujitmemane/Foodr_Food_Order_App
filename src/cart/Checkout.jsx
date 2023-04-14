import React, { useRef, useState } from "react";
import "./checkout.css";
const Checkout = (props) => {
  const [isFormIsValid, setIsFormIsValid] = useState({
    isEnteredNameIsValid: true,
    isEnteredPostalIsValid: true,
    isEnteredCityIsValid: true,
  });
  const isEmpty = (value) => value !== "";
  const have5Chars = (value) => value.trim().length >= 5;

  const enteredNameRef = useRef();
  const enteredPostalRef = useRef();
  const enteredCityRef = useRef();

  const placeOrderHandler = (event) => {
    console.log("clicked");
    event.preventDefault();
    const enteredName = enteredNameRef.current.value;
    const enteredCity = enteredCityRef.current.value;
    const enteredPostal = enteredPostalRef.current.value;
    const isNameValid = isEmpty(enteredName);
    const isPostalValid = have5Chars(enteredPostal);
    const isCityValid = isEmpty(enteredCity);
    setIsFormIsValid({
      isEnteredNameIsValid: isNameValid,
      isEnteredPostalIsValid: isPostalValid,
      isEnteredCityIsValid: isCityValid,
    });
    const formIsValid = isNameValid && isPostalValid && isCityValid;
    if (!formIsValid) {
      return;
    }

    props.onOrder({
      name: enteredName,
      postal: enteredPostal,
      city: enteredCity,
    });
    console.log("Order is Placed");
    console.log(isFormIsValid);
  };

  const nameControlClasses = `control ${
    isFormIsValid.isEnteredNameIsValid ? "" : "invalid"
  }`;
  const postalControlClasses = `control ${
    isFormIsValid.isEnteredPostalIsValid ? "" : "invalid"
  }`;
  const cityControlClasses = `control ${
    isFormIsValid.isEnteredCityIsValid ? "" : "invalid"
  }`;
  console.log(nameControlClasses);

  return (
    <form className="form" onSubmit={placeOrderHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Name</label>
        <input
          ref={enteredNameRef}
          type="text"
          id="name"
          placeholder="Enter Your Name"
        />
        {!isFormIsValid.isEnteredNameIsValid && (
          <p className="err-text">Please Enter a Valid Name</p>
        )}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          ref={enteredPostalRef}
          type="text"
          id="postal"
          placeholder="Enter Your Postal Code"
        />
        {!isFormIsValid.isEnteredPostalIsValid && (
          <p className="err-text"> Please Enter a valid Postal Code</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          ref={enteredCityRef}
          type="text"
          id="city"
          placeholder="Enter Your City"
        />
        {!isFormIsValid.isEnteredCityIsValid && (
          <p className="err-text">Please Enter a valid City Name</p>
        )}
      </div>
      <div className="action-btn">
        <button className="button" onClick={placeOrderHandler}>
          Confirm
        </button>
        <button type="button" className="button" onClick={props.onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Checkout;
