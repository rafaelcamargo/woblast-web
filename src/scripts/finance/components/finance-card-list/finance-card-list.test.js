import React from 'react';
import { shallow } from 'enzyme';
import financeResource from '@scripts/finance/resources/finance/finance';
import routeService from '@scripts/base/services/route/route';
import { FinanceCard } from '@scripts/finance/components/finance-card/finance-card';
import { FinanceCardList } from '@scripts/finance/components/finance-card-list/finance-card-list';

describe('Finance Card List', () => {
  function mount(props = {}){
    return shallow(
      <FinanceCardList />
    );
  }

  function mockData(){
    return [{
      type: "currencies",
      key: "USD",
      name: "Dollar",
      value: 4.1116,
      variation: 0.193
    }, {
      type: "currencies",
      key: "EUR",
      name: "Euro",
      value: 4.533,
      variation: 0.448
    }];
  }

  beforeEach(() => {
    financeResource.get = jest.fn();
  });

  it('should have appropriate css class', () => {
    const wrapper = mount();
    expect(wrapper.prop('className')).toEqual('w-finance-card-list');
  });

  it('should fetch finance cards data', () => {
    const wrapper = mount();
    wrapper.instance().onFetch();
    expect(financeResource.get).toHaveBeenCalled();
  });

  it('should render cards on fetch success', () => {
    const wrapper = mount();
    wrapper.instance().onFetchSuccess(mockData());
    expect(wrapper.find(FinanceCard).length).toEqual(2);
    expect(wrapper.find(FinanceCard).at(0).prop('title')).toEqual('Dollar');
    expect(wrapper.find(FinanceCard).at(0).prop('value')).toEqual(4.1116);
    expect(wrapper.find(FinanceCard).at(0).prop('variation')).toEqual(0.193);
    expect(wrapper.find(FinanceCard).at(0).prop('indexationValue')).toEqual(undefined);
  });

  it('should go to monitor on finance card click', () => {
    routeService.go = jest.fn();
    const wrapper = mount();
    wrapper.instance().onFetchSuccess(mockData());
    wrapper.find(FinanceCard).at(0).simulate('click');
    expect(routeService.go).toHaveBeenCalledWith('/monitor?type=currencies&key=USD');
  });
});
