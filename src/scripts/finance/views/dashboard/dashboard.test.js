import React from 'react';
import { shallow } from 'enzyme';
import { WFinanceCardList } from '@scripts/finance/components/finance-card-list/finance-card-list';
import { WViewport } from '@scripts/base/components/viewport/viewport';
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  function mount(){
    return shallow(
      <Dashboard />
    );
  }

  it('should contain a viewport', () => {
    const wrapper = mount();
    expect(wrapper.find(WViewport).length).toEqual(1);
  });

  it('should contain a finance card list', () => {
    const wrapper = mount();
    expect(wrapper.find(WFinanceCardList).length).toEqual(1);
  });
});
