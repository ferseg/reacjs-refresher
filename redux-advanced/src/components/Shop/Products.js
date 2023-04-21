import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const addToCartHandler = (product) => {
    dispatch(cartActions.addItem(product));
  };

  const productItems = products.map((product) => (
    <ProductItem
      id={product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      onAddToCart={addToCartHandler}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
};

export default Products;
