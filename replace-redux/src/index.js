import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./hooks-store/products-store";

import "./index.css";
import App from "./App";
import productReducer from "./store/reducers/products";
import ProductsProvider from "./context/products-context";

configureStore();
const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
