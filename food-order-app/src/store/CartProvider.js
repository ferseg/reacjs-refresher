import { useReducer } from "react";
import CartContext from "./cart-context";

const defatltCartState = {
  items: [],
  totalAmount: 0,
};

const addItem = (state, item) => {
  const newTotal = state.totalAmount + item.price * item.amount;
  const foundIndex = state.items.findIndex((it) => it.id === item.id);
  if (foundIndex < 0) {
    return {
      items: state.items.concat(item),
      totalAmount: newTotal,
    };
  }
  const existingItem = state.items[foundIndex];
  const updatedItem = {
    ...existingItem,
    amount: existingItem.amount + item.amount,
  };
  const updatedItems = [...state.items];
  updatedItems[foundIndex] = updatedItem;
  return {
    items: updatedItems,
    totalAmount: newTotal,
  };
};

const removeItem = (state, id) => {
  const foundIndex = state.items.findIndex((it) => it.id === id);
  if (foundIndex < 0) {
    return;
  }
  const updatedItems = [...state.items];
  const foundItem = updatedItems[foundIndex];
  const newItemsAmount = foundItem.amount - 1;
  const newTotalAmount = state.totalAmount - foundItem.price;
  if (newItemsAmount < 1) {
    return {
      items: updatedItems.filter((it) => it.id !== id),
      totalAmount: newTotalAmount,
    };
  }
  foundItem.amount -= 1;
  return {
    items: updatedItems,
    totalAmount: newTotalAmount,
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return addItem(state, action.value);
    case "REMOVE":
      return removeItem(state, action.value);
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defatltCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      value: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      value: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
