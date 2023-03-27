import PieChartGraphic from '../pie-chart-graphic';
import './styles.css';

function SalesOverview() {
  return (
    <div className="sales-overview-card  base-card">
      <div className="sales-overview-container">
        <h1 className="sales-by-date-quantity">R$ 746.484,00</h1>

        <span className="sales-by-date-quantity-label">Total de vendas</span>
      </div>

      <PieChartGraphic
        name=""
        labels={['Feminino', 'Masculino', 'Outro']}
        series={[1000.32, 1000.95, 2000]}
      />
    </div>
  );
}

export default SalesOverview;
