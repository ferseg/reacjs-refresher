import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";

const Cart = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const { makeRequest, isLoading } = useHttp("http://localhost:3001");
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = !!cartCtx.items.length;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const items = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  const checkoutBtnHandler = () => {
    setShowForm(true);
  };

  const checkoutCancelHandler = () => {
    setShowForm(false);
  };

  const confirmOrderHandler = async (buyerInfo) => {
    const request = {
      totalAmount: cartCtx.totalAmount,
      orderItems: cartCtx.items.map((item) => {
        return {
          id: item.id,
          quantity: item.amount,
        };
      }),
      buyerInfo,
    };
    await makeRequest({
      url: "orders",
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: request,
    });
    setShowForm(false);
    cartCtx.clearItems();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <ul className={styles["cart-items"]}>{items}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showForm && <Checkout onConfirm={confirmOrderHandler} onCancel={checkoutCancelHandler} />}
      {!showForm && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={onClose}>
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={checkoutBtnHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
