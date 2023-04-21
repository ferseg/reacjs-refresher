import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        <li><Link to="p1">Product 1</Link></li>
        <li><Link to="p2">Product 2</Link></li>
        <li><Link to="p3">Product 3</Link></li>
      </ul>
    </>
  );
};

export default Products;
