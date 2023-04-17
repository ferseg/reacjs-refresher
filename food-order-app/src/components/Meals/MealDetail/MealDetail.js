import { useContext } from "react";
import styles from "./MealDetail.module.css";
import MealDetailForm from "./MealDetailForm";
import CartContext from "../../../store/cart-context";

const MealDetail = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <li className={styles.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealDetailForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealDetail;
