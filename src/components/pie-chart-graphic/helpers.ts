import { ApexOptions } from 'apexcharts';
import { formatFloat, formatFloatPercent } from '../../utils/formatters';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels: labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '16px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 0,
      labels: {
        colors: ['#b4bed2']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 5
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return formatFloatPercent(Number(val)) + '%';
      },
      dropShadow: {},
      style: {
        fontSize: '10px',
        fontFamily: 'Ubuntu, sans-serif'
        // fontWeight: 'bold',
        // colors: undefined
      }
    },
    tooltip: {
      enabled: true,
      x: {
        format: 'dd MMM',
        formatter: undefined
      },
      y: {
        formatter: (value) => {
          return formatFloat(value);
        }
      }
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '65%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};
