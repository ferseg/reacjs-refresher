import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams()

  return (
    <div>
      <h1>Product detail</h1>
      <p>This product has an id of {params.productId}</p>
    </div>
  );
};

export default ProductDetail;
