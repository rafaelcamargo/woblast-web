import chartService from './chart';

describe('Chart Service', () => {
  function createContainer(){
    const container = document.createElement('canvas');
    container.setAttribute('width', '800');
    container.setAttribute('height', '400');
    return container;
  }

  function buildChartOptions(){
    return {
      type: 'line',
      data: {
        labels: ['someLabel'],
        datasets: [{
          data: [23]
        }]
      }
    };
  }

  it('should build a chart', () => {
    const chart = chartService.build(createContainer(), buildChartOptions());
    expect(chart.data.labels[0]).toEqual('someLabel');
    expect(chart.data.datasets[0].data[0]).toEqual(23);
  });

  it('should add point to existing chart', () => {
    const chart = chartService.build(createContainer(), buildChartOptions());
    chartService.addPoint(chart, 'otherLabel', 32);
    expect(chart.data.labels[1]).toEqual('otherLabel');
    expect(chart.data.datasets[0].data[1]).toEqual(32);
  });
});
