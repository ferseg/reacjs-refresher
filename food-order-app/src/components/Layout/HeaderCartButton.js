import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon.js";
import CartContext from "../../store/cart-context.js";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;
  const numberOfItems = items.reduce((currAmount, item) => currAmount + item.amount, 0);
  const btnClasses = `${styles.button} ${shouldAnimate ? styles.bump : ''}`;

  useEffect(() => {
    if (!items.length) {
      return;
    }
    setShouldAnimate(true);
    const timerId = setTimeout(() => setShouldAnimate(false), 300);
    return () => {
      clearTimeout(timerId);
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
