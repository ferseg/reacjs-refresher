import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      Home page
      <p>Got to <Link to="products">products</Link></p>
    </div>
  );
};

export default Home;
