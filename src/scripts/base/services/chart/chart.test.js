import chartService from './chart';

jest.useFakeTimers();

describe('Chart Service', () => {
  function createContainer(){
    const container = document.createElement('canvas');
    container.setAttribute('width', '800');
    container.setAttribute('height', '400');
    return container;
  }

  function buildChartOptions(labels, data){
    return {
      type: 'line',
      data: { labels, datasets: [{ data }] }
    };
  }

  function addFakePoints(chart, amount, { maxPoints }){
    for (var i = 1; i <= amount; i++){
      chartService.addPoint(chart, `label-${i}`, i, { maxPoints });
      jest.runOnlyPendingTimers();
    }
  }

  it('should build a chart', () => {
    const chart = chartService.build(createContainer(), buildChartOptions(['label'], [23]));
    expect(chart.data.labels[0]).toEqual('label');
    expect(chart.data.datasets[0].data[0]).toEqual(23);
  });

  it('should add point to existing chart', () => {
    const chart = chartService.build(createContainer(), buildChartOptions(['label'], [23]));
    chartService.addPoint(chart, 'other-label', 32);
    jest.runOnlyPendingTimers();
    expect(chart.data.labels[1]).toEqual('other-label');
    expect(chart.data.datasets[0].data[1]).toEqual(32);
  });

  it('should optionally limit the amount of data points when adding points', () => {
    const chart = chartService.build(createContainer(), buildChartOptions([], []));
    addFakePoints(chart, 2, { maxPoints: 1 });
    expect(chart.data.labels[0]).toEqual('label-2');
    expect(chart.data.datasets[0].data[0]).toEqual(2);
  });
});
