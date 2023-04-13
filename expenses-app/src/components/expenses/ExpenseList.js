import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = ({items}) => {
  if (!items.length) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }
  const rows = items.map(item =>
    <ExpenseItem
      key={item.title}
      title={item.title}
      date={item.date}
      amount={item.amount} />
  );
  return (
    <ul className="expenses-list">
      {rows}
    </ul>
  )
};

export default ExpenseList;
