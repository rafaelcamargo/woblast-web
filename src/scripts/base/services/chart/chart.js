import ChartJS from 'chart.js/dist/Chart.bundle';

const _public = {};

_public.build = (containerElement, options) => {
  return new ChartJS(containerElement, options);
};

_public.addPoint = (chart, label, value, { maxPoints } = {}) => {
  if(maxPoints)
    removeExceedingPoints(chart, maxPoints);
  setTimeout(() => {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(value);
    chart.update({ duration: getDefaultDuration() });
  });
};

function removeExceedingPoints(chart, maxPoints){
  const { labels } = chart.data;
  const points = chart.data.datasets[0].data;
  if(points.length > (maxPoints - 1)) {
    points.shift();
    labels.shift();
    chart.update({ duration: 0 });
  }
}

function getDefaultDuration(){
  return 300;
}

export default _public;
