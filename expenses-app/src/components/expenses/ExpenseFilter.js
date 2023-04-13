import './ExpenseFilter.css'
const ExpenseFilter = ({years, onSelectYear}) => {
  const options = (years && years.map((year) => <option key={year} value={year}>{year}</option>)) || [];

  const selectedYearHandler = (evt) => {
    onSelectYear(evt.target.value);
  }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select year</label>
        <select onChange={selectedYearHandler}>
          <option key="all" value="all">All</option>
          {options}
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
