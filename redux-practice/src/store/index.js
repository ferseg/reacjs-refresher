import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  let counter = state.counter;
  switch (action.type) {
    case "increment":
      counter++;
      break;
    case "decrement":
      counter--;
      break;
  }
  return {
    counter
  };
};

const store = createStore(counterReducer);

export default store;
