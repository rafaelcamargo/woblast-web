import React from 'react';
import { shallow } from 'enzyme';
import financeResource from '@scripts/finance/resources/finance/finance';
import { WFinanceCard } from '@scripts/finance/components/finance-card/finance-card';
import { WFinanceCardList } from '@scripts/finance/components/finance-card-list/finance-card-list';

describe('Finance Card List', () => {
  function mount(props = {}){
    return shallow(
      <WFinanceCardList />
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
    expect(wrapper.find(WFinanceCard).length).toEqual(2);
    expect(wrapper.find(WFinanceCard).at(0).prop('title')).toEqual('Dollar');
    expect(wrapper.find(WFinanceCard).at(0).prop('value')).toEqual(4.1116);
    expect(wrapper.find(WFinanceCard).at(0).prop('variation')).toEqual(0.193);
    expect(wrapper.find(WFinanceCard).at(0).prop('indexationValue')).toEqual(undefined);
  });
});
