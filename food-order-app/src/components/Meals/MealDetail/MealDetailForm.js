import { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealDetailForm.module.css";

const MealDetailForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const inputOpts = {
    id: id,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const amountStr = amountInputRef.current.value.trim();
    const amount = +amountStr;
    if (amountStr.length === 0 || amount < 1 || amount > 5) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(amount);
    setAmountIsValid(true);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Amount" input={inputOpts} ref={amountInputRef} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please entear a valid amount (1-5)</p>}
    </form>
  );
};

export default MealDetailForm;
