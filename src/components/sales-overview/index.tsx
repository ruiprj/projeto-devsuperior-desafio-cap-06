import { useEffect, useMemo, useState } from 'react';
import { SalesSummaryData } from '../../types/sales-summary-data';
import { formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/requests';
import PieChartGraphic from '../pie-chart-graphic';
import './styles.css';
import { FilterData } from '../../types/filter-data';

const initialSummary = {
  sum: 0,
  min: 0,
  max: 0,
  avg: 0,
  count: 0
};

type Props = {
  filterData?: FilterData;
};

function SalesOverview({ filterData }: Props) {
  const [salesSummryData, setSalesSummryData] = useState<SalesSummaryData>(initialSummary);

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((respose) => {
        setSalesSummryData(respose.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

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
