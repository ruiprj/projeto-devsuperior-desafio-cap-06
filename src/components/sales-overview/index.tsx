import { useEffect, useState } from 'react';
import { SalesSummaryData } from '../../types/sales-summary-data';
import { formatPrice } from '../../utils/formatters';
import { makeRequest } from '../../utils/requests';
import PieChartGraphic from '../pie-chart-graphic';
import './styles.css';

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

function SalesOverview() {
  const [salesSummryData, setSalesSummryData] = useState<SalesSummaryData>(initialSummary);

  useEffect(() => {
    makeRequest.get('/sales/summary?storeId=0').then((respose) => {
      setSalesSummryData(respose.data);
    });
  }, []);

  return (
    <div className="sales-overview-card  base-card">
      <div className="sales-overview-container">
        <h1 className="sales-by-date-quantity">{formatPrice(salesSummryData?.sum)}</h1>

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
