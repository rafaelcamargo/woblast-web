import ChartJS from 'chart.js/dist/Chart.bundle';

const _public = {};

_public.build = (containerElement, options) => {
  return new ChartJS(containerElement, options);
};

_public.addPoint = (chart, label, value) => {
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(value);
  chart.update();
};

export default _public;
