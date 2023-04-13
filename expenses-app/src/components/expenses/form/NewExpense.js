import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onSaveExpense }) => {
  const [addNewExpense, setAddNewExpense] = useState(false);
  
  const cancelAddHandler = () => setAddNewExpense(false);
  const showFormHandler = () => setAddNewExpense(true);
  return (
    <div className="new-expense">
      { addNewExpense &&
          <ExpenseForm onSaveExpense={onSaveExpense} onCancel={cancelAddHandler} />
      }
      {
        !addNewExpense &&
          <button onClick={showFormHandler}>Add new expense</button>
      }
    </div>
  );
};

export default NewExpense;
