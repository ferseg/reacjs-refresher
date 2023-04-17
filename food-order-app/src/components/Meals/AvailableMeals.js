import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealDetail from "./MealDetail/MealDetail";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.3,
  },
  {
    id: "m2",
    name: "Barbecue Burger",
    description: "Best burger ever",
    price: 12.3,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => <MealDetail meal={meal} />);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
