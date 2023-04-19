import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealDetail from "./MealDetail/MealDetail";
import useHttp from "../../hooks/use-http";

const AvailableMeals = () => {
  const { makeRequest } = useHttp("http://localhost:3001");
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetch = async () => {
      const httResponse = await makeRequest({ url: "dishes" });
      setMeals(httResponse.results);
      setIsLoading(false);
    };
    fetch();
  }, [makeRequest]);

  if(isLoading) {
    return <section className={styles['meals-loading']}>
      <h3>Loading...</h3>
    </section>
  }

  let content = <h3>No meals found</h3>;
  if (meals.length === 0) {
    return content;
  }
  content = meals.map((meal) => <MealDetail key={meal.id} meal={meal} />);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
