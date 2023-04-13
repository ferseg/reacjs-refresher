import Chart from "../chart/Chart";

const ExpenseChart = ({ expenses }) => {
  const dataPoints = [
    { id: 1, label: 'Jan', value: 0 },
    { id: 2, label: 'Feb', value: 0 },
    { id: 3, label: 'Mar', value: 0 },
    { id: 4, label: 'Apr', value: 0 },
    { id: 5, label: 'May', value: 0 },
    { id: 6, label: 'Jun', value: 0 },
    { id: 7, label: 'Aug', value: 0 },
    { id: 8, label: 'Sep', value: 0 },
    { id: 9, label: 'Oct', value: 0 },
    { id: 10, label: 'Sep', value: 0 },
    { id: 11, label: 'Nov', value: 0 },
    { id: 12, label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const month = expense.date.getMonth();
    dataPoints[month].value += expense.amount;
  };
  return <Chart dataPoints={dataPoints} />
};

export default ExpenseChart;
