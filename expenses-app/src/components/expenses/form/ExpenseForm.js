import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onCancel, onSaveExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0.01);
  const [date, setDate] = useState('');
  const titleChangedHandler = (evt) => {
    setTitle(evt.target.value);
  }
  const amountChangedHandler = (evt) => {
    setAmount(evt.target.value);
  }
  const dateChangedHandler = (evt) => {
    setDate(evt.target.value);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      title,
      amount: +amount,
      date: new Date(date)
    };
    onSaveExpense(data);
    setTitle('');
    setAmount(0.01);
    setDate('');
  }
  return (
    <form onSubmit={onSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangedHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" value={amount} min={0.01} step={0.01} onChange={amountChangedHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" value={date} min="2023-01-01" onChange={dateChangedHandler}/>
        </div>
        <div className='new-expense__actions'>
          <button onClick={onCancel}>Cancel</button>
          <button type="submit">Add expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
