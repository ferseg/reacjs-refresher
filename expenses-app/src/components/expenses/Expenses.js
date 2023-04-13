import { useState } from "react";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("all");

  const filterHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  const years = [...new Set(items.map((item) => item.date.getFullYear()))];
  const selectedExpenses =
    selectedYear === "all"
      ? items
      : items.filter((item) => item.date.getFullYear() === +selectedYear);

  return (
    <Card className="expenses">
      <ExpenseChart expenses={selectedExpenses}/>
      <ExpenseFilter years={years} onSelectYear={filterHandler} />
      <ExpenseList items={selectedExpenses} />
    </Card>
  );
};

export default Expenses;
