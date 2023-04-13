import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = ({ dataPoints }) => {
  const maxValue = dataPoints.reduce((currVal, dp) => currVal + dp.value, 0);
  return (
    <div className="chart">
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.id}
          value={dp.value}
          maxValue={maxValue}
          label={dp.label}
        />
      ))}
    </div>
  );
};

export default Chart;
