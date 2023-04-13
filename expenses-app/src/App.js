import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/expenses/form/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const saveExpenseHandler = (expense) => {
    setExpenses((expenses) => [expense, ...expenses]);
  };

  return (
    <div>
      <NewExpense onSaveExpense={saveExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
