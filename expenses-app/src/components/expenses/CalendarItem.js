import './CalendarItem.css'

const CalendarItem = ({date}) => {
  const language = 'en-US';
  const month = date.toLocaleString(language, { month: 'long' });
  const day = date.toLocaleString(language, { day: '2-digit' });
  const year = date.getFullYear();
  
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default CalendarItem;
