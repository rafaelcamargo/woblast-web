import { PromiseMock } from '@scripts/base/mocks/promise';
import React from 'react';
import { shallow } from 'enzyme';
import chartService from '@scripts/base/services/chart/chart';
import dateService from '@scripts/base/services/date/date';
import financeResource from '@scripts/finance/resources/finance/finance';
import routeService from '@scripts/base/services/route/route';
import { WCard } from '@scripts/base/components/card/card';
import { WFinanceMonitorCard } from '@scripts/finance/components/finance-monitor-card/finance-monitor-card';

jest.useFakeTimers();

describe('Finance Monitor Card', () => {
  function mount(props = {}){
    return shallow(
      <WFinanceMonitorCard />
    );
  }

  function mockItem(){
    return { name: 'BM&F BOVESPA', value: 1.27 };
  }

  beforeEach(() => {
    chartService.build = jest.fn();
    chartService.addPoint = jest.fn();
    dateService.getNow = jest.fn(() => new Date(2019, 10, 11, 9, 30, 5));
    financeResource.getItem = jest.fn(() => new PromiseMock('success', { response: mockItem() }));
    routeService.getSearchParams = jest.fn(() => ({ type: 'stocks', key: 'IBOVESPA' }));
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-finance-monitor-card');
  });

  it('should get item on fetch', () => {
    const wrapper = mount();
    wrapper.instance().onFetch();
    expect(financeResource.getItem).toHaveBeenCalledWith('stocks', 'IBOVESPA');
  });

  it('should set card title on fetch success', () => {
    const title = 'Monitoring BM&F BOVESPA every 5s';
    const wrapper = mount();
    wrapper.instance().onFetchSuccess(mockItem());
    expect(wrapper.find(WCard).prop('title')).toEqual(title);
  });

  it('should render chart on fetch success', () => {
    const wrapper = mount();
    const instance = wrapper.instance();
    const chartContainerElement = instance.chartContainerRef.current;
    instance.onFetchSuccess(mockItem());
    expect(chartService.build).toHaveBeenCalledWith(chartContainerElement, {
      type: 'line',
      data: {
        labels: ['09:30:05'],
        datasets: [{
          data: [1.27],
          label: 'BM&F BOVESPA'
        }]
      },
      options: {
        legend: {
          position: 'bottom'
        }
      }
    })
  });

  it('should update chart after interval', () => {
    const wrapper = mount();
    const instance = wrapper.instance();
    instance.onFetchSuccess(mockItem());
    jest.advanceTimersByTime(5000);
    expect(chartService.addPoint).toHaveBeenCalledWith(instance.chart, '09:30:05', 1.27, {
      maxPoints: 6
    });
  });

  it('should clear interval on component unmount', () => {
    spyOn(window, 'clearInterval');
    const wrapper = mount();
    const instance = wrapper.instance();
    instance.onFetchSuccess(mockItem());
    instance.componentWillUnmount();
    expect(window.clearInterval).toHaveBeenCalledWith(instance.interval);
  });
});
