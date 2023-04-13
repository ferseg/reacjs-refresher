import CalendarItem from './CalendarItem';
import Card from '../Card';
import './ExpenseItem.css'

const ExpenseItem = ({title, date, amount}) => {
  return (
    <Card className='expense-item'>
      <CalendarItem date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
