import { useEffect, useMemo, useState } from 'react';
import { SalesSummaryData } from '../../types/sales-summary-data';
import { formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/requests';
import PieChartGraphic from '../pie-chart-graphic';
import { FilterData } from '../../types/filter-data';
import { SalesByGenderData } from '../../types/sales-by-gender-data';
import { PieChartConfig } from '../../types/pie-chart-config';
import { buildSalesByGenderChart } from '../../helpers';
import './styles.css';

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
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setSalesSummryData(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByGenderData[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByGender = buildSalesByGenderChart(response.data);

        setSalesByGender(newSalesByGender);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  return (
    <div className="sales-overview-card  base-card">
      <div className="sales-overview-container">
        <h1 className="sales-by-date-quantity">{formatPrice(salesSummryData?.sum)}</h1>

        <span className="sales-by-date-quantity-label">Total de vendas</span>
      </div>

      <PieChartGraphic name="" labels={salesByGender?.labels} series={salesByGender?.series} />
    </div>
  );
}

export default SalesOverview;
