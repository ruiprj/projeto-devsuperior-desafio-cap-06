import { SalesByGenderData } from './types/sales-by-gender-data';

export const buildSalesByGenderChart = (sales: SalesByGenderData[]) => {
  sales.forEach((sale) => {
    changeLabel(sale);
  });

  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((serie) => serie.sum);

  return {
    labels,
    series
  };
};

const changeLabel = (sale: SalesByGenderData) => {
  if (sale.gender === 'MALE') {
    sale.gender = 'Masculino';
  }

  if (sale.gender === 'FEMALE') {
    sale.gender = 'Feminino';
  }

  if (sale.gender === 'OTHER') {
    sale.gender = 'Outro';
  }
};
