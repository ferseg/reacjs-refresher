import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => {
  return value.trim() === "";
};

const isPostal = (value) => {
  return value.trim().length === 5;
};

const Checkout = ({ onConfirm, onCancel }) => {
  const [formState, setFormState] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (evt) => {
    evt.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    const isValidName = !isEmpty(name);
    const isValidStreet = !isEmpty(street);
    const isValidCity = !isEmpty(city);
    const isValidPostal = isPostal(postalCode);

    const isValidForm =
      isValidName && isValidStreet && isValidCity && isValidPostal;

    setFormState({
      name: isValidName,
      street: isValidStreet,
      city: isValidStreet,
      postalCode: isValidPostal,
    });

    if (!isValidForm) {
      return;
    }

    const data = {
      fullName: name,
      street,
      city,
      postalCode
    }

    onConfirm(data);
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className={`${styles.control} ${!formState.name && styles.invalid}`}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formState.name && <p>Invalid name</p>}
      </div>
      <div className={`${styles.control} ${!formState.street && styles.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formState.street && <p>Invalid street</p>}
      </div>
      <div className={`${styles.control} ${!formState.postalCode && styles.invalid}`}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formState.postalCode && <p>Invalid postal (5 characters)</p>}
      </div>
      <div className={`${styles.control} ${!formState.city && styles.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formState.city && <p>Invalid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
