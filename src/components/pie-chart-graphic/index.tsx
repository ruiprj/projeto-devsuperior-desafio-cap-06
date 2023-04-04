import './styles.css';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartGraphic({ labels = [], name, series = [] }: Props) {
  return (
    <div className="sales-piechart-container">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="200"
        height="300"
        series={series}
      />
    </div>
  );
}

export default PieChartGraphic;
